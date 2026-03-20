package ai.gensparx.android.chat

import ai.gensparx.android.gateway.GatewaySession
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.buildJsonArray
import kotlinx.serialization.json.buildJsonObject

class ChatControllerMessageIdentityTest {
  @Test
  fun preservesMessageIdsAcrossHistoryRefreshes() {
    val session = FakeGatewaySession()
    val controller = createController(session)
    session.nextHistory = buildHistoryResponse(
      messageContents = listOf(
        "Hello there",
        "How can I help?",
      ),
    )

    runBlocking { controller.refresh() }
    val initialMessages = controller.messages.value
    assertEquals(2, initialMessages.size)

    val firstSnapshot = controller.messages.value
    session.nextHistory = buildHistoryResponse(
      messageContents = listOf(
        "Hello there",
        "How can I help?",
        "Here is a follow-up",
      ),
    )
    runBlocking { controller.refresh() }

    val updatedMessages = controller.messages.value
    assertEquals(3, updatedMessages.size)
    assertEquals(firstSnapshot[0].id, updatedMessages[0].id)
    assertEquals(firstSnapshot[1].id, updatedMessages[1].id)
    assertNotEquals(firstSnapshot[1].id, updatedMessages[2].id)
  }

  private fun createController(session: FakeGatewaySession): ChatController {
    val json = Json { ignoreUnknownKeys = true }
    return ChatController(
      scope = CoroutineScope(SupervisorJob() + Dispatchers.Unconfined),
      session = session,
      json = json,
      supportsChatSubscribe = false,
    )
  }

  private fun buildHistoryResponse(messageContents: List<String>): String {
    val messages =
      buildJsonArray {
        messageContents.forEachIndexed { index, text ->
          add(
            buildJsonObject {
              put("role", JsonPrimitive(if (index % 2 == 0) "user" else "assistant"))
              put(
                "content",
                buildJsonArray {
                  add(
                    buildJsonObject {
                      put("type", JsonPrimitive("text"))
                      put("text", JsonPrimitive(text))
                    },
                  )
                },
              )
              put("timestamp", JsonPrimitive(1_000L + index))
            },
          )
        }
      }
    return buildJsonObject {
      put("sessionId", JsonPrimitive("main"))
      put("messages", messages)
    }.toString()
  }

  private class FakeGatewaySession : GatewaySession {
    var nextHistory: String = buildHistoryResponse(emptyList())

    override suspend fun request(action: String, payload: String?): String {
      return when (action) {
        "chat.history" -> nextHistory
        "health" -> "{}"
        else -> "{}"
      }
    }

    override suspend fun sendNodeEvent(action: String, payload: String?) = Unit

    override suspend fun sendEvent(action: String, payload: JsonObject) = Unit
  }
}
