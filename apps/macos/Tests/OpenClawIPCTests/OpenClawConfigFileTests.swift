import Foundation
import Testing
@testable import Gensparx

@Suite(.serialized)
struct GensparxConfigFileTests {
    private func makeConfigOverridePath() -> String {
        FileManager().temporaryDirectory
            .appendingPathComponent("gensparx-config-\(UUID().uuidString)")
            .appendingPathComponent("gensparx.json")
            .path
    }

    @Test
    func configPathRespectsEnvOverride() async {
        let override = makeConfigOverridePath()

        await TestIsolation.withEnvValues(["GENSPARX_CONFIG_PATH": override]) {
            #expect(GensparxConfigFile.url().path == override)
        }
    }

    @MainActor
    @Test
    func remoteGatewayPortParsesAndMatchesHost() async {
        let override = makeConfigOverridePath()

        await TestIsolation.withEnvValues(["GENSPARX_CONFIG_PATH": override]) {
            GensparxConfigFile.saveDict([
                "gateway": [
                    "remote": [
                        "url": "ws://gateway.ts.net:19999",
                    ],
                ],
            ])
            #expect(GensparxConfigFile.remoteGatewayPort() == 19999)
            #expect(GensparxConfigFile.remoteGatewayPort(matchingHost: "gateway.ts.net") == 19999)
            #expect(GensparxConfigFile.remoteGatewayPort(matchingHost: "gateway") == 19999)
            #expect(GensparxConfigFile.remoteGatewayPort(matchingHost: "other.ts.net") == nil)
        }
    }

    @MainActor
    @Test
    func setRemoteGatewayUrlPreservesScheme() async {
        let override = makeConfigOverridePath()

        await TestIsolation.withEnvValues(["GENSPARX_CONFIG_PATH": override]) {
            GensparxConfigFile.saveDict([
                "gateway": [
                    "remote": [
                        "url": "wss://old-host:111",
                    ],
                ],
            ])
            GensparxConfigFile.setRemoteGatewayUrl(host: "new-host", port: 2222)
            let root = GensparxConfigFile.loadDict()
            let url = ((root["gateway"] as? [String: Any])?["remote"] as? [String: Any])?["url"] as? String
            #expect(url == "wss://new-host:2222")
        }
    }

    @MainActor
    @Test
    func clearRemoteGatewayUrlRemovesOnlyUrlField() async {
        let override = makeConfigOverridePath()

        await TestIsolation.withEnvValues(["GENSPARX_CONFIG_PATH": override]) {
            GensparxConfigFile.saveDict([
                "gateway": [
                    "remote": [
                        "url": "wss://old-host:111",
                        "token": "tok",
                    ],
                ],
            ])
            GensparxConfigFile.clearRemoteGatewayUrl()
            let root = GensparxConfigFile.loadDict()
            let remote = ((root["gateway"] as? [String: Any])?["remote"] as? [String: Any]) ?? [:]
            #expect((remote["url"] as? String) == nil)
            #expect((remote["token"] as? String) == "tok")
        }
    }

    @Test
    func stateDirOverrideSetsConfigPath() async {
        let dir = FileManager().temporaryDirectory
            .appendingPathComponent("gensparx-state-\(UUID().uuidString)", isDirectory: true)
            .path

        await TestIsolation.withEnvValues([
            "GENSPARX_CONFIG_PATH": nil,
            "GENSPARX_STATE_DIR": dir,
        ]) {
            #expect(GensparxConfigFile.stateDirURL().path == dir)
            #expect(GensparxConfigFile.url().path == "\(dir)/gensparx.json")
        }
    }

    @MainActor
    @Test
    func saveDictAppendsConfigAuditLog() async throws {
        let stateDir = FileManager().temporaryDirectory
            .appendingPathComponent("gensparx-state-\(UUID().uuidString)", isDirectory: true)
        let configPath = stateDir.appendingPathComponent("gensparx.json")
        let auditPath = stateDir.appendingPathComponent("logs/config-audit.jsonl")

        defer { try? FileManager().removeItem(at: stateDir) }

        try await TestIsolation.withEnvValues([
            "GENSPARX_STATE_DIR": stateDir.path,
            "GENSPARX_CONFIG_PATH": configPath.path,
        ]) {
            GensparxConfigFile.saveDict([
                "gateway": ["mode": "local"],
            ])

            let configData = try Data(contentsOf: configPath)
            let configRoot = try JSONSerialization.jsonObject(with: configData) as? [String: Any]
            #expect((configRoot?["meta"] as? [String: Any]) != nil)

            let rawAudit = try String(contentsOf: auditPath, encoding: .utf8)
            let lines = rawAudit
                .split(whereSeparator: \.isNewline)
                .map(String.init)
            #expect(!lines.isEmpty)
            guard let last = lines.last else {
                Issue.record("Missing config audit line")
                return
            }
            let auditRoot = try JSONSerialization.jsonObject(with: Data(last.utf8)) as? [String: Any]
            #expect(auditRoot?["source"] as? String == "macos-gensparx-config-file")
            #expect(auditRoot?["event"] as? String == "config.write")
            #expect(auditRoot?["result"] as? String == "success")
            #expect(auditRoot?["configPath"] as? String == configPath.path)
        }
    }
}
