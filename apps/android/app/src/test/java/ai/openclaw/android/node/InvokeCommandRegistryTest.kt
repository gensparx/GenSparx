package ai.gensparx.android.node

import ai.gensparx.android.protocol.GensparxCalendarCommand
import ai.gensparx.android.protocol.GensparxCameraCommand
import ai.gensparx.android.protocol.GensparxCapability
import ai.gensparx.android.protocol.GensparxContactsCommand
import ai.gensparx.android.protocol.GensparxDeviceCommand
import ai.gensparx.android.protocol.GensparxLocationCommand
import ai.gensparx.android.protocol.GensparxMotionCommand
import ai.gensparx.android.protocol.GensparxNotificationsCommand
import ai.gensparx.android.protocol.GensparxPhotosCommand
import ai.gensparx.android.protocol.GensparxSmsCommand
import ai.gensparx.android.protocol.GensparxSystemCommand
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class InvokeCommandRegistryTest {
  private val coreCapabilities =
    setOf(
      GensparxCapability.Canvas.rawValue,
      GensparxCapability.Screen.rawValue,
      GensparxCapability.Device.rawValue,
      GensparxCapability.Notifications.rawValue,
      GensparxCapability.System.rawValue,
      GensparxCapability.AppUpdate.rawValue,
      GensparxCapability.Photos.rawValue,
      GensparxCapability.Contacts.rawValue,
      GensparxCapability.Calendar.rawValue,
    )

  private val optionalCapabilities =
    setOf(
      GensparxCapability.Camera.rawValue,
      GensparxCapability.Location.rawValue,
      GensparxCapability.Sms.rawValue,
      GensparxCapability.VoiceWake.rawValue,
      GensparxCapability.Motion.rawValue,
    )

  private val coreCommands =
    setOf(
      GensparxDeviceCommand.Status.rawValue,
      GensparxDeviceCommand.Info.rawValue,
      GensparxDeviceCommand.Permissions.rawValue,
      GensparxDeviceCommand.Health.rawValue,
      GensparxNotificationsCommand.List.rawValue,
      GensparxNotificationsCommand.Actions.rawValue,
      GensparxSystemCommand.Notify.rawValue,
      GensparxPhotosCommand.Latest.rawValue,
      GensparxContactsCommand.Search.rawValue,
      GensparxContactsCommand.Add.rawValue,
      GensparxCalendarCommand.Events.rawValue,
      GensparxCalendarCommand.Add.rawValue,
      "app.update",
    )

  private val optionalCommands =
    setOf(
      GensparxCameraCommand.Snap.rawValue,
      GensparxCameraCommand.Clip.rawValue,
      GensparxCameraCommand.List.rawValue,
      GensparxLocationCommand.Get.rawValue,
      GensparxMotionCommand.Activity.rawValue,
      GensparxMotionCommand.Pedometer.rawValue,
      GensparxSmsCommand.Send.rawValue,
    )

  private val debugCommands = setOf("debug.logs", "debug.ed25519")

  @Test
  fun advertisedCapabilities_respectsFeatureAvailability() {
    val capabilities = InvokeCommandRegistry.advertisedCapabilities(defaultFlags())

    assertContainsAll(capabilities, coreCapabilities)
    assertMissingAll(capabilities, optionalCapabilities)
  }

  @Test
  fun advertisedCapabilities_includesFeatureCapabilitiesWhenEnabled() {
    val capabilities =
      InvokeCommandRegistry.advertisedCapabilities(
        defaultFlags(
          cameraEnabled = true,
          locationEnabled = true,
          smsAvailable = true,
          voiceWakeEnabled = true,
          motionActivityAvailable = true,
          motionPedometerAvailable = true,
        ),
      )

    assertContainsAll(capabilities, coreCapabilities + optionalCapabilities)
  }

  @Test
  fun advertisedCommands_respectsFeatureAvailability() {
    val commands = InvokeCommandRegistry.advertisedCommands(defaultFlags())

    assertContainsAll(commands, coreCommands)
    assertMissingAll(commands, optionalCommands + debugCommands)
  }

  @Test
  fun advertisedCommands_includesFeatureCommandsWhenEnabled() {
    val commands =
      InvokeCommandRegistry.advertisedCommands(
        defaultFlags(
          cameraEnabled = true,
          locationEnabled = true,
          smsAvailable = true,
          motionActivityAvailable = true,
          motionPedometerAvailable = true,
          debugBuild = true,
        ),
      )

    assertContainsAll(commands, coreCommands + optionalCommands + debugCommands)
  }

  @Test
  fun advertisedCommands_onlyIncludesSupportedMotionCommands() {
    val commands =
      InvokeCommandRegistry.advertisedCommands(
        NodeRuntimeFlags(
          cameraEnabled = false,
          locationEnabled = false,
          smsAvailable = false,
          voiceWakeEnabled = false,
          motionActivityAvailable = true,
          motionPedometerAvailable = false,
          debugBuild = false,
        ),
      )

    assertTrue(commands.contains(GensparxMotionCommand.Activity.rawValue))
    assertFalse(commands.contains(GensparxMotionCommand.Pedometer.rawValue))
  }

  private fun defaultFlags(
    cameraEnabled: Boolean = false,
    locationEnabled: Boolean = false,
    smsAvailable: Boolean = false,
    voiceWakeEnabled: Boolean = false,
    motionActivityAvailable: Boolean = false,
    motionPedometerAvailable: Boolean = false,
    debugBuild: Boolean = false,
  ): NodeRuntimeFlags =
    NodeRuntimeFlags(
      cameraEnabled = cameraEnabled,
      locationEnabled = locationEnabled,
      smsAvailable = smsAvailable,
      voiceWakeEnabled = voiceWakeEnabled,
      motionActivityAvailable = motionActivityAvailable,
      motionPedometerAvailable = motionPedometerAvailable,
      debugBuild = debugBuild,
    )

  private fun assertContainsAll(actual: List<String>, expected: Set<String>) {
    expected.forEach { value -> assertTrue(actual.contains(value)) }
  }

  private fun assertMissingAll(actual: List<String>, forbidden: Set<String>) {
    forbidden.forEach { value -> assertFalse(actual.contains(value)) }
  }
}
