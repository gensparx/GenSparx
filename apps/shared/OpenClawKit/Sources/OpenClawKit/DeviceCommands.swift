import Foundation

public enum GensparxDeviceCommand: String, Codable, Sendable {
    case status = "device.status"
    case info = "device.info"
}

public enum GensparxBatteryState: String, Codable, Sendable {
    case unknown
    case unplugged
    case charging
    case full
}

public enum GensparxThermalState: String, Codable, Sendable {
    case nominal
    case fair
    case serious
    case critical
}

public enum GensparxNetworkPathStatus: String, Codable, Sendable {
    case satisfied
    case unsatisfied
    case requiresConnection
}

public enum GensparxNetworkInterfaceType: String, Codable, Sendable {
    case wifi
    case cellular
    case wired
    case other
}

public struct GensparxBatteryStatusPayload: Codable, Sendable, Equatable {
    public var level: Double?
    public var state: GensparxBatteryState
    public var lowPowerModeEnabled: Bool

    public init(level: Double?, state: GensparxBatteryState, lowPowerModeEnabled: Bool) {
        self.level = level
        self.state = state
        self.lowPowerModeEnabled = lowPowerModeEnabled
    }
}

public struct GensparxThermalStatusPayload: Codable, Sendable, Equatable {
    public var state: GensparxThermalState

    public init(state: GensparxThermalState) {
        self.state = state
    }
}

public struct GensparxStorageStatusPayload: Codable, Sendable, Equatable {
    public var totalBytes: Int64
    public var freeBytes: Int64
    public var usedBytes: Int64

    public init(totalBytes: Int64, freeBytes: Int64, usedBytes: Int64) {
        self.totalBytes = totalBytes
        self.freeBytes = freeBytes
        self.usedBytes = usedBytes
    }
}

public struct GensparxNetworkStatusPayload: Codable, Sendable, Equatable {
    public var status: GensparxNetworkPathStatus
    public var isExpensive: Bool
    public var isConstrained: Bool
    public var interfaces: [GensparxNetworkInterfaceType]

    public init(
        status: GensparxNetworkPathStatus,
        isExpensive: Bool,
        isConstrained: Bool,
        interfaces: [GensparxNetworkInterfaceType])
    {
        self.status = status
        self.isExpensive = isExpensive
        self.isConstrained = isConstrained
        self.interfaces = interfaces
    }
}

public struct GensparxDeviceStatusPayload: Codable, Sendable, Equatable {
    public var battery: GensparxBatteryStatusPayload
    public var thermal: GensparxThermalStatusPayload
    public var storage: GensparxStorageStatusPayload
    public var network: GensparxNetworkStatusPayload
    public var uptimeSeconds: Double

    public init(
        battery: GensparxBatteryStatusPayload,
        thermal: GensparxThermalStatusPayload,
        storage: GensparxStorageStatusPayload,
        network: GensparxNetworkStatusPayload,
        uptimeSeconds: Double)
    {
        self.battery = battery
        self.thermal = thermal
        self.storage = storage
        self.network = network
        self.uptimeSeconds = uptimeSeconds
    }
}

public struct GensparxDeviceInfoPayload: Codable, Sendable, Equatable {
    public var deviceName: String
    public var modelIdentifier: String
    public var systemName: String
    public var systemVersion: String
    public var appVersion: String
    public var appBuild: String
    public var locale: String

    public init(
        deviceName: String,
        modelIdentifier: String,
        systemName: String,
        systemVersion: String,
        appVersion: String,
        appBuild: String,
        locale: String)
    {
        self.deviceName = deviceName
        self.modelIdentifier = modelIdentifier
        self.systemName = systemName
        self.systemVersion = systemVersion
        self.appVersion = appVersion
        self.appBuild = appBuild
        self.locale = locale
    }
}
