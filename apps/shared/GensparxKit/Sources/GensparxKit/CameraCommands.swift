import Foundation

public enum GensparxCameraCommand: String, Codable, Sendable {
    case list = "camera.list"
    case snap = "camera.snap"
    case clip = "camera.clip"
}

public enum GensparxCameraFacing: String, Codable, Sendable {
    case back
    case front
}

public enum GensparxCameraImageFormat: String, Codable, Sendable {
    case jpg
    case jpeg
}

public enum GensparxCameraVideoFormat: String, Codable, Sendable {
    case mp4
}

public struct GensparxCameraSnapParams: Codable, Sendable, Equatable {
    public var facing: GensparxCameraFacing?
    public var maxWidth: Int?
    public var quality: Double?
    public var format: GensparxCameraImageFormat?
    public var deviceId: String?
    public var delayMs: Int?

    public init(
        facing: GensparxCameraFacing? = nil,
        maxWidth: Int? = nil,
        quality: Double? = nil,
        format: GensparxCameraImageFormat? = nil,
        deviceId: String? = nil,
        delayMs: Int? = nil)
    {
        self.facing = facing
        self.maxWidth = maxWidth
        self.quality = quality
        self.format = format
        self.deviceId = deviceId
        self.delayMs = delayMs
    }
}

public struct GensparxCameraClipParams: Codable, Sendable, Equatable {
    public var facing: GensparxCameraFacing?
    public var durationMs: Int?
    public var includeAudio: Bool?
    public var format: GensparxCameraVideoFormat?
    public var deviceId: String?

    public init(
        facing: GensparxCameraFacing? = nil,
        durationMs: Int? = nil,
        includeAudio: Bool? = nil,
        format: GensparxCameraVideoFormat? = nil,
        deviceId: String? = nil)
    {
        self.facing = facing
        self.durationMs = durationMs
        self.includeAudio = includeAudio
        self.format = format
        self.deviceId = deviceId
    }
}
