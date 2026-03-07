import CoreLocation
import Foundation
import GensparxKit
import UIKit

typealias GensparxCameraSnapResult = (format: String, base64: String, width: Int, height: Int)
typealias GensparxCameraClipResult = (format: String, base64: String, durationMs: Int, hasAudio: Bool)

protocol CameraServicing: Sendable {
    func listDevices() async -> [CameraController.CameraDeviceInfo]
    func snap(params: GensparxCameraSnapParams) async throws -> GensparxCameraSnapResult
    func clip(params: GensparxCameraClipParams) async throws -> GensparxCameraClipResult
}

protocol ScreenRecordingServicing: Sendable {
    func record(
        screenIndex: Int?,
        durationMs: Int?,
        fps: Double?,
        includeAudio: Bool?,
        outPath: String?) async throws -> String
}

@MainActor
protocol LocationServicing: Sendable {
    func authorizationStatus() -> CLAuthorizationStatus
    func accuracyAuthorization() -> CLAccuracyAuthorization
    func ensureAuthorization(mode: GensparxLocationMode) async -> CLAuthorizationStatus
    func currentLocation(
        params: GensparxLocationGetParams,
        desiredAccuracy: GensparxLocationAccuracy,
        maxAgeMs: Int?,
        timeoutMs: Int?) async throws -> CLLocation
    func startLocationUpdates(
        desiredAccuracy: GensparxLocationAccuracy,
        significantChangesOnly: Bool) -> AsyncStream<CLLocation>
    func stopLocationUpdates()
    func startMonitoringSignificantLocationChanges(onUpdate: @escaping @Sendable (CLLocation) -> Void)
    func stopMonitoringSignificantLocationChanges()
}

@MainActor
protocol DeviceStatusServicing: Sendable {
    func status() async throws -> GensparxDeviceStatusPayload
    func info() -> GensparxDeviceInfoPayload
}

protocol PhotosServicing: Sendable {
    func latest(params: GensparxPhotosLatestParams) async throws -> GensparxPhotosLatestPayload
}

protocol ContactsServicing: Sendable {
    func search(params: GensparxContactsSearchParams) async throws -> GensparxContactsSearchPayload
    func add(params: GensparxContactsAddParams) async throws -> GensparxContactsAddPayload
}

protocol CalendarServicing: Sendable {
    func events(params: GensparxCalendarEventsParams) async throws -> GensparxCalendarEventsPayload
    func add(params: GensparxCalendarAddParams) async throws -> GensparxCalendarAddPayload
}

protocol RemindersServicing: Sendable {
    func list(params: GensparxRemindersListParams) async throws -> GensparxRemindersListPayload
    func add(params: GensparxRemindersAddParams) async throws -> GensparxRemindersAddPayload
}

protocol MotionServicing: Sendable {
    func activities(params: GensparxMotionActivityParams) async throws -> GensparxMotionActivityPayload
    func pedometer(params: GensparxPedometerParams) async throws -> GensparxPedometerPayload
}

struct WatchMessagingStatus: Sendable, Equatable {
    var supported: Bool
    var paired: Bool
    var appInstalled: Bool
    var reachable: Bool
    var activationState: String
}

struct WatchQuickReplyEvent: Sendable, Equatable {
    var replyId: String
    var promptId: String
    var actionId: String
    var actionLabel: String?
    var sessionKey: String?
    var note: String?
    var sentAtMs: Int?
    var transport: String
}

struct WatchNotificationSendResult: Sendable, Equatable {
    var deliveredImmediately: Bool
    var queuedForDelivery: Bool
    var transport: String
}

protocol WatchMessagingServicing: AnyObject, Sendable {
    func status() async -> WatchMessagingStatus
    func setReplyHandler(_ handler: (@Sendable (WatchQuickReplyEvent) -> Void)?)
    func sendNotification(
        id: String,
        params: GensparxWatchNotifyParams) async throws -> WatchNotificationSendResult
}

extension CameraController: CameraServicing {}
extension ScreenRecordService: ScreenRecordingServicing {}
extension LocationService: LocationServicing {}
