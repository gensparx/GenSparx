import Foundation

// Stable identifier used for both the macOS LaunchAgent label and Nix-managed defaults suite.
// nix-gensparx writes app defaults into this suite to survive app bundle identifier churn.
let launchdLabel = "ai.gensparx.mac"
let gatewayLaunchdLabel = "ai.gensparx.gateway"
let onboardingVersionKey = "gensparx.onboardingVersion"
let onboardingSeenKey = "gensparx.onboardingSeen"
let currentOnboardingVersion = 7
let pauseDefaultsKey = "gensparx.pauseEnabled"
let iconAnimationsEnabledKey = "gensparx.iconAnimationsEnabled"
let swabbleEnabledKey = "gensparx.swabbleEnabled"
let swabbleTriggersKey = "gensparx.swabbleTriggers"
let voiceWakeTriggerChimeKey = "gensparx.voiceWakeTriggerChime"
let voiceWakeSendChimeKey = "gensparx.voiceWakeSendChime"
let showDockIconKey = "gensparx.showDockIcon"
let defaultVoiceWakeTriggers = ["gensparx"]
let voiceWakeMaxWords = 32
let voiceWakeMaxWordLength = 64
let voiceWakeMicKey = "gensparx.voiceWakeMicID"
let voiceWakeMicNameKey = "gensparx.voiceWakeMicName"
let voiceWakeLocaleKey = "gensparx.voiceWakeLocaleID"
let voiceWakeAdditionalLocalesKey = "gensparx.voiceWakeAdditionalLocaleIDs"
let voicePushToTalkEnabledKey = "gensparx.voicePushToTalkEnabled"
let talkEnabledKey = "gensparx.talkEnabled"
let iconOverrideKey = "gensparx.iconOverride"
let connectionModeKey = "gensparx.connectionMode"
let remoteTargetKey = "gensparx.remoteTarget"
let remoteIdentityKey = "gensparx.remoteIdentity"
let remoteProjectRootKey = "gensparx.remoteProjectRoot"
let remoteCliPathKey = "gensparx.remoteCliPath"
let canvasEnabledKey = "gensparx.canvasEnabled"
let cameraEnabledKey = "gensparx.cameraEnabled"
let systemRunPolicyKey = "gensparx.systemRunPolicy"
let systemRunAllowlistKey = "gensparx.systemRunAllowlist"
let systemRunEnabledKey = "gensparx.systemRunEnabled"
let locationModeKey = "gensparx.locationMode"
let locationPreciseKey = "gensparx.locationPreciseEnabled"
let peekabooBridgeEnabledKey = "gensparx.peekabooBridgeEnabled"
let deepLinkKeyKey = "gensparx.deepLinkKey"
let modelCatalogPathKey = "gensparx.modelCatalogPath"
let modelCatalogReloadKey = "gensparx.modelCatalogReload"
let cliInstallPromptedVersionKey = "gensparx.cliInstallPromptedVersion"
let heartbeatsEnabledKey = "gensparx.heartbeatsEnabled"
let debugPaneEnabledKey = "gensparx.debugPaneEnabled"
let debugFileLogEnabledKey = "gensparx.debug.fileLogEnabled"
let appLogLevelKey = "gensparx.debug.appLogLevel"
let voiceWakeSupported: Bool = ProcessInfo.processInfo.operatingSystemVersion.majorVersion >= 26
