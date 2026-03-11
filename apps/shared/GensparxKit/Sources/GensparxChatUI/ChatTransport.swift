import Foundation

public enum GensparxChatTransportEvent: Sendable {
    case health(ok: Bool)
    case tick
    case chat(GensparxChatEventPayload)
    case agent(GensparxAgentEventPayload)
    case seqGap
}

public protocol GensparxChatTransport: Sendable {
    func requestHistory(sessionKey: String) async throws -> GensparxChatHistoryPayload
    func sendMessage(
        sessionKey: String,
        message: String,
        thinking: String,
        idempotencyKey: String,
        attachments: [GensparxChatAttachmentPayload]) async throws -> GensparxChatSendResponse

    func abortRun(sessionKey: String, runId: String) async throws
    func listSessions(limit: Int?) async throws -> GensparxChatSessionsListResponse

    func requestHealth(timeoutMs: Int) async throws -> Bool
    func events() -> AsyncStream<GensparxChatTransportEvent>

    func setActiveSessionKey(_ sessionKey: String) async throws
}

extension GensparxChatTransport {
    public func setActiveSessionKey(_: String) async throws {}

    public func abortRun(sessionKey _: String, runId _: String) async throws {
        throw NSError(
            domain: "GensparxChatTransport",
            code: 0,
            userInfo: [NSLocalizedDescriptionKey: "chat.abort not supported by this transport"])
    }

    public func listSessions(limit _: Int?) async throws -> GensparxChatSessionsListResponse {
        throw NSError(
            domain: "GensparxChatTransport",
            code: 0,
            userInfo: [NSLocalizedDescriptionKey: "sessions.list not supported by this transport"])
    }
}
