package ai.gensparx.android.node

import ai.gensparx.android.protocol.GensparxCalendarCommand
import ai.gensparx.android.protocol.GensparxCanvasA2UICommand
import ai.gensparx.android.protocol.GensparxCanvasCommand
import ai.gensparx.android.protocol.GensparxCameraCommand
import ai.gensparx.android.protocol.GensparxCapability
import ai.gensparx.android.protocol.GensparxContactsCommand
import ai.gensparx.android.protocol.GensparxDeviceCommand
import ai.gensparx.android.protocol.GensparxLocationCommand
import ai.gensparx.android.protocol.GensparxMotionCommand
import ai.gensparx.android.protocol.GensparxNotificationsCommand
import ai.gensparx.android.protocol.GensparxPhotosCommand
import ai.gensparx.android.protocol.GensparxScreenCommand
import ai.gensparx.android.protocol.GensparxSmsCommand
import ai.gensparx.android.protocol.GensparxSystemCommand

data class NodeRuntimeFlags(
  val cameraEnabled: Boolean,
  val locationEnabled: Boolean,
  val smsAvailable: Boolean,
  val voiceWakeEnabled: Boolean,
  val motionActivityAvailable: Boolean,
  val motionPedometerAvailable: Boolean,
  val debugBuild: Boolean,
)

enum class InvokeCommandAvailability {
  Always,
  CameraEnabled,
  LocationEnabled,
  SmsAvailable,
  MotionActivityAvailable,
  MotionPedometerAvailable,
  DebugBuild,
}

enum class NodeCapabilityAvailability {
  Always,
  CameraEnabled,
  LocationEnabled,
  SmsAvailable,
  VoiceWakeEnabled,
  MotionAvailable,
}

data class NodeCapabilitySpec(
  val name: String,
  val availability: NodeCapabilityAvailability = NodeCapabilityAvailability.Always,
)

data class InvokeCommandSpec(
  val name: String,
  val requiresForeground: Boolean = false,
  val availability: InvokeCommandAvailability = InvokeCommandAvailability.Always,
)

object InvokeCommandRegistry {
  val capabilityManifest: List<NodeCapabilitySpec> =
    listOf(
      NodeCapabilitySpec(name = GensparxCapability.Canvas.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.Screen.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.Device.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.Notifications.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.System.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.AppUpdate.rawValue),
      NodeCapabilitySpec(
        name = GensparxCapability.Camera.rawValue,
        availability = NodeCapabilityAvailability.CameraEnabled,
      ),
      NodeCapabilitySpec(
        name = GensparxCapability.Sms.rawValue,
        availability = NodeCapabilityAvailability.SmsAvailable,
      ),
      NodeCapabilitySpec(
        name = GensparxCapability.VoiceWake.rawValue,
        availability = NodeCapabilityAvailability.VoiceWakeEnabled,
      ),
      NodeCapabilitySpec(
        name = GensparxCapability.Location.rawValue,
        availability = NodeCapabilityAvailability.LocationEnabled,
      ),
      NodeCapabilitySpec(name = GensparxCapability.Photos.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.Contacts.rawValue),
      NodeCapabilitySpec(name = GensparxCapability.Calendar.rawValue),
      NodeCapabilitySpec(
        name = GensparxCapability.Motion.rawValue,
        availability = NodeCapabilityAvailability.MotionAvailable,
      ),
    )

  val all: List<InvokeCommandSpec> =
    listOf(
      InvokeCommandSpec(
        name = GensparxCanvasCommand.Present.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasCommand.Hide.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasCommand.Navigate.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasCommand.Eval.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasCommand.Snapshot.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasA2UICommand.Push.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasA2UICommand.PushJSONL.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxCanvasA2UICommand.Reset.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxScreenCommand.Record.rawValue,
        requiresForeground = true,
      ),
      InvokeCommandSpec(
        name = GensparxSystemCommand.Notify.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxCameraCommand.List.rawValue,
        requiresForeground = true,
        availability = InvokeCommandAvailability.CameraEnabled,
      ),
      InvokeCommandSpec(
        name = GensparxCameraCommand.Snap.rawValue,
        requiresForeground = true,
        availability = InvokeCommandAvailability.CameraEnabled,
      ),
      InvokeCommandSpec(
        name = GensparxCameraCommand.Clip.rawValue,
        requiresForeground = true,
        availability = InvokeCommandAvailability.CameraEnabled,
      ),
      InvokeCommandSpec(
        name = GensparxLocationCommand.Get.rawValue,
        availability = InvokeCommandAvailability.LocationEnabled,
      ),
      InvokeCommandSpec(
        name = GensparxDeviceCommand.Status.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxDeviceCommand.Info.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxDeviceCommand.Permissions.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxDeviceCommand.Health.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxNotificationsCommand.List.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxNotificationsCommand.Actions.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxPhotosCommand.Latest.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxContactsCommand.Search.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxContactsCommand.Add.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxCalendarCommand.Events.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxCalendarCommand.Add.rawValue,
      ),
      InvokeCommandSpec(
        name = GensparxMotionCommand.Activity.rawValue,
        availability = InvokeCommandAvailability.MotionActivityAvailable,
      ),
      InvokeCommandSpec(
        name = GensparxMotionCommand.Pedometer.rawValue,
        availability = InvokeCommandAvailability.MotionPedometerAvailable,
      ),
      InvokeCommandSpec(
        name = GensparxSmsCommand.Send.rawValue,
        availability = InvokeCommandAvailability.SmsAvailable,
      ),
      InvokeCommandSpec(
        name = "debug.logs",
        availability = InvokeCommandAvailability.DebugBuild,
      ),
      InvokeCommandSpec(
        name = "debug.ed25519",
        availability = InvokeCommandAvailability.DebugBuild,
      ),
      InvokeCommandSpec(name = "app.update"),
    )

  private val byNameInternal: Map<String, InvokeCommandSpec> = all.associateBy { it.name }

  fun find(command: String): InvokeCommandSpec? = byNameInternal[command]

  fun advertisedCapabilities(flags: NodeRuntimeFlags): List<String> {
    return capabilityManifest
      .filter { spec ->
        when (spec.availability) {
          NodeCapabilityAvailability.Always -> true
          NodeCapabilityAvailability.CameraEnabled -> flags.cameraEnabled
          NodeCapabilityAvailability.LocationEnabled -> flags.locationEnabled
          NodeCapabilityAvailability.SmsAvailable -> flags.smsAvailable
          NodeCapabilityAvailability.VoiceWakeEnabled -> flags.voiceWakeEnabled
          NodeCapabilityAvailability.MotionAvailable -> flags.motionActivityAvailable || flags.motionPedometerAvailable
        }
      }
      .map { it.name }
  }

  fun advertisedCommands(flags: NodeRuntimeFlags): List<String> {
    return all
      .filter { spec ->
        when (spec.availability) {
          InvokeCommandAvailability.Always -> true
          InvokeCommandAvailability.CameraEnabled -> flags.cameraEnabled
          InvokeCommandAvailability.LocationEnabled -> flags.locationEnabled
          InvokeCommandAvailability.SmsAvailable -> flags.smsAvailable
          InvokeCommandAvailability.MotionActivityAvailable -> flags.motionActivityAvailable
          InvokeCommandAvailability.MotionPedometerAvailable -> flags.motionPedometerAvailable
          InvokeCommandAvailability.DebugBuild -> flags.debugBuild
        }
      }
      .map { it.name }
  }
}
