// swift-tools-version: 6.2

import PackageDescription

let package = Package(
    name: "GensparxKit",
    platforms: [
        .iOS(.v18),
        .macOS(.v15),
    ],
    products: [
        .library(name: "GensparxProtocol", targets: ["GensparxProtocol"]),
        .library(name: "GensparxKit", targets: ["GensparxKit"]),
        .library(name: "GensparxChatUI", targets: ["GensparxChatUI"]),
    ],
    dependencies: [
        .package(url: "https://github.com/steipete/ElevenLabsKit", exact: "0.1.0"),
        .package(url: "https://github.com/gonzalezreal/textual", exact: "0.3.1"),
    ],
    targets: [
        .target(
            name: "GensparxProtocol",
            path: "Sources/GensparxProtocol",
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .target(
            name: "GensparxKit",
            dependencies: [
                "GensparxProtocol",
                .product(name: "ElevenLabsKit", package: "ElevenLabsKit"),
            ],
            path: "Sources/GensparxKit",
            resources: [
                .process("Resources"),
            ],
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .target(
            name: "GensparxChatUI",
            dependencies: [
                "GensparxKit",
                .product(
                    name: "Textual",
                    package: "textual",
                    condition: .when(platforms: [.macOS, .iOS])),
            ],
            path: "Sources/GensparxChatUI",
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
            ]),
        .testTarget(
            name: "GensparxKitTests",
            dependencies: ["GensparxKit", "GensparxChatUI"],
            path: "Tests/GensparxKitTests",
            swiftSettings: [
                .enableUpcomingFeature("StrictConcurrency"),
                .enableExperimentalFeature("SwiftTesting"),
            ]),
    ])
