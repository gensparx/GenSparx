// swift-tools-version: 6.2
// Package manifest for the gensparx macOS companion (menu bar app + IPC library).

import PackageDescription

let package = Package(
    name: "Gensparx",
    platforms: [
        .macOS(.v15),
    ],
    products: [
        .library(name: "GensparxIPC", targets: ["GensparxIPC"]),
        .library(name: "GensparxDiscovery", targets: ["GensparxDiscovery"]),
        .executable(name: "Gensparx", targets: ["Gensparx"]),
        .executable(name: "gensparx-mac", targets: ["GensparxMacCLI"]),
    ],
    dependencies: [
        .package(url: "https://github.com/orchetect/MenuBarExtraAccess", exact: "1.2.2"),
        .package(url: "https://github.com/swiftlang/swift-subprocess.git", from: "0.1.0"),
        .package(url: "https://github.com/apple/swift-log.git", from: "1.8.0"),
        .package(url: "https://github.com/sparkle-project/Sparkle", from: "2.8.1"),
        .package(url: "https://github.com/steipete/Peekaboo.git", branch: "main"),
        .package(path: "../shared/GensparxKit"),
        .package(path: "../../Swabble"),
    ],
    targets: [
        .target(
            name: "GensparxIPC",
            dependencies: [],
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .target(
            name: "GensparxDiscovery",
            dependencies: [
                .product(name: "GensparxKit", package: "GensparxKit"),
            ],
            path: "Sources/GensparxDiscovery",
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .executableTarget(
            name: "Gensparx",
            dependencies: [
                "GensparxIPC",
                "GensparxDiscovery",
                .product(name: "GensparxKit", package: "GensparxKit"),
                .product(name: "GensparxChatUI", package: "GensparxKit"),
                .product(name: "GensparxProtocol", package: "GensparxKit"),
                .product(name: "SwabbleKit", package: "swabble"),
                .product(name: "MenuBarExtraAccess", package: "MenuBarExtraAccess"),
                .product(name: "Subprocess", package: "swift-subprocess"),
                .product(name: "Logging", package: "swift-log"),
                .product(name: "Sparkle", package: "Sparkle"),
                .product(name: "PeekabooBridge", package: "Peekaboo"),
                .product(name: "PeekabooAutomationKit", package: "Peekaboo"),
            ],
            exclude: [
                "Resources/Info.plist",
            ],
            resources: [
                .copy("Resources/Gensparx.icns"),
                .copy("Resources/DeviceModels"),
            ],
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .executableTarget(
            name: "GensparxMacCLI",
            dependencies: [
                "GensparxDiscovery",
                .product(name: "GensparxKit", package: "GensparxKit"),
                .product(name: "GensparxProtocol", package: "GensparxKit"),
            ],
            path: "Sources/GensparxMacCLI",
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .testTarget(
            name: "GensparxIPCTests",
            dependencies: [
                "GensparxIPC",
                "Gensparx",
                "GensparxDiscovery",
                .product(name: "GensparxProtocol", package: "GensparxKit"),
                .product(name: "SwabbleKit", package: "swabble"),
            ],
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
                .enableExperimentalFeature("SwiftTesting"),
            ]),
    ])
