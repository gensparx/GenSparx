package ai.gensparx.android.protocol

import org.junit.Assert.assertEquals
import org.junit.Test

class GensparxProtocolConstantsTest {
  @Test
  fun canvasCommandsUseStableStrings() {
    assertEquals("canvas.present", GensparxCanvasCommand.Present.rawValue)
    assertEquals("canvas.hide", GensparxCanvasCommand.Hide.rawValue)
    assertEquals("canvas.navigate", GensparxCanvasCommand.Navigate.rawValue)
    assertEquals("canvas.eval", GensparxCanvasCommand.Eval.rawValue)
    assertEquals("canvas.snapshot", GensparxCanvasCommand.Snapshot.rawValue)
  }

  @Test
  fun a2uiCommandsUseStableStrings() {
    assertEquals("canvas.a2ui.push", GensparxCanvasA2UICommand.Push.rawValue)
    assertEquals("canvas.a2ui.pushJSONL", GensparxCanvasA2UICommand.PushJSONL.rawValue)
    assertEquals("canvas.a2ui.reset", GensparxCanvasA2UICommand.Reset.rawValue)
  }

  @Test
  fun capabilitiesUseStableStrings() {
    assertEquals("canvas", GensparxCapability.Canvas.rawValue)
    assertEquals("camera", GensparxCapability.Camera.rawValue)
    assertEquals("screen", GensparxCapability.Screen.rawValue)
    assertEquals("voiceWake", GensparxCapability.VoiceWake.rawValue)
    assertEquals("location", GensparxCapability.Location.rawValue)
    assertEquals("sms", GensparxCapability.Sms.rawValue)
    assertEquals("device", GensparxCapability.Device.rawValue)
    assertEquals("notifications", GensparxCapability.Notifications.rawValue)
    assertEquals("system", GensparxCapability.System.rawValue)
    assertEquals("appUpdate", GensparxCapability.AppUpdate.rawValue)
    assertEquals("photos", GensparxCapability.Photos.rawValue)
    assertEquals("contacts", GensparxCapability.Contacts.rawValue)
    assertEquals("calendar", GensparxCapability.Calendar.rawValue)
    assertEquals("motion", GensparxCapability.Motion.rawValue)
  }

  @Test
  fun cameraCommandsUseStableStrings() {
    assertEquals("camera.list", GensparxCameraCommand.List.rawValue)
    assertEquals("camera.snap", GensparxCameraCommand.Snap.rawValue)
    assertEquals("camera.clip", GensparxCameraCommand.Clip.rawValue)
  }

  @Test
  fun screenCommandsUseStableStrings() {
    assertEquals("screen.record", GensparxScreenCommand.Record.rawValue)
  }

  @Test
  fun notificationsCommandsUseStableStrings() {
    assertEquals("notifications.list", GensparxNotificationsCommand.List.rawValue)
    assertEquals("notifications.actions", GensparxNotificationsCommand.Actions.rawValue)
  }

  @Test
  fun deviceCommandsUseStableStrings() {
    assertEquals("device.status", GensparxDeviceCommand.Status.rawValue)
    assertEquals("device.info", GensparxDeviceCommand.Info.rawValue)
    assertEquals("device.permissions", GensparxDeviceCommand.Permissions.rawValue)
    assertEquals("device.health", GensparxDeviceCommand.Health.rawValue)
  }

  @Test
  fun systemCommandsUseStableStrings() {
    assertEquals("system.notify", GensparxSystemCommand.Notify.rawValue)
  }

  @Test
  fun photosCommandsUseStableStrings() {
    assertEquals("photos.latest", GensparxPhotosCommand.Latest.rawValue)
  }

  @Test
  fun contactsCommandsUseStableStrings() {
    assertEquals("contacts.search", GensparxContactsCommand.Search.rawValue)
    assertEquals("contacts.add", GensparxContactsCommand.Add.rawValue)
  }

  @Test
  fun calendarCommandsUseStableStrings() {
    assertEquals("calendar.events", GensparxCalendarCommand.Events.rawValue)
    assertEquals("calendar.add", GensparxCalendarCommand.Add.rawValue)
  }

  @Test
  fun motionCommandsUseStableStrings() {
    assertEquals("motion.activity", GensparxMotionCommand.Activity.rawValue)
    assertEquals("motion.pedometer", GensparxMotionCommand.Pedometer.rawValue)
  }
}
