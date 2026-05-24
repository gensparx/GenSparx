gensparx-clean/
├─ .agent/
│  └─ workflows/
│     └─ update_gensparx.md
├─ .agents/
│  └─ maintainers.md
├─ .github/
│  ├─ actions/
│  │  ├─ detect-docs-changes/
│  │  │  └─ action.yml
│  │  ├─ setup-node-env/
│  │  │  └─ action.yml
│  │  └─ setup-pnpm-store-cache/
│  │     └─ action.yml
│  ├─ instructions/
│  │  └─ copilot.instructions.md
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.yml
│  │  ├─ config.yml
│  │  └─ feature_request.yml
│  ├─ workflows/
│  │  ├─ auto-response.yml
│  │  ├─ ci.yml
│  │  ├─ docker-release.yml
│  │  ├─ install-smoke.yml
│  │  ├─ labeler.yml
│  │  ├─ sandbox-common-smoke.yml
│  │  ├─ stale.yml
│  │  └─ workflow-sanity.yml
│  ├─ actionlint.yaml
│  ├─ dependabot.yml
│  ├─ labeler.yml
│  └─ pull_request_template.md
├─ .pi/
│  ├─ extensions/
│  │  ├─ ui/
│  │  │  └─ paged-select.ts
│  │  ├─ diff.ts
│  │  ├─ files.ts
│  │  ├─ prompt-url-widget.ts
│  │  └─ redraws.ts
│  ├─ git/
│  │  └─ .gitignore
│  └─ prompts/
│     ├─ cl.md
│     ├─ is.md
│     ├─ landpr.md
│     └─ reviewpr.md
├─ .vscode/
│  ├─ extensions.json
│  └─ settings.json
├─ apps/
│  ├─ android/
│  │  ├─ app/
│  │  │  ├─ src/
│  │  │  │  ├─ main/
│  │  │  │  │  ├─ java/
│  │  │  │  │  │  └─ ai/
│  │  │  │  │  │     └─ openclaw/
│  │  │  │  │  │        └─ android/
│  │  │  │  │  │           ├─ chat/
│  │  │  │  │  │           │  ├─ ChatController.kt
│  │  │  │  │  │           │  └─ ChatModels.kt
│  │  │  │  │  │           ├─ gateway/
│  │  │  │  │  │           │  ├─ BonjourEscapes.kt
│  │  │  │  │  │           │  ├─ DeviceAuthPayload.kt
│  │  │  │  │  │           │  ├─ DeviceAuthStore.kt
│  │  │  │  │  │           │  ├─ DeviceIdentityStore.kt
│  │  │  │  │  │           │  ├─ GatewayDiscovery.kt
│  │  │  │  │  │           │  ├─ GatewayEndpoint.kt
│  │  │  │  │  │           │  ├─ GatewayProtocol.kt
│  │  │  │  │  │           │  ├─ GatewaySession.kt
│  │  │  │  │  │           │  ├─ GatewayTls.kt
│  │  │  │  │  │           │  └─ InvokeErrorParser.kt
│  │  │  │  │  │           ├─ node/
│  │  │  │  │  │           │  ├─ A2UIHandler.kt
│  │  │  │  │  │           │  ├─ AppUpdateHandler.kt
│  │  │  │  │  │           │  ├─ CalendarHandler.kt
│  │  │  │  │  │           │  ├─ CameraCaptureManager.kt
│  │  │  │  │  │           │  ├─ CameraHandler.kt
│  │  │  │  │  │           │  ├─ CanvasController.kt
│  │  │  │  │  │           │  ├─ ConnectionManager.kt
│  │  │  │  │  │           │  ├─ ContactsHandler.kt
│  │  │  │  │  │           │  ├─ DebugHandler.kt
│  │  │  │  │  │           │  ├─ DeviceHandler.kt
│  │  │  │  │  │           │  ├─ DeviceNotificationListenerService.kt
│  │  │  │  │  │           │  ├─ GatewayEventHandler.kt
│  │  │  │  │  │           │  ├─ InvokeCommandRegistry.kt
│  │  │  │  │  │           │  ├─ InvokeDispatcher.kt
│  │  │  │  │  │           │  ├─ JpegSizeLimiter.kt
│  │  │  │  │  │           │  ├─ LocationCaptureManager.kt
│  │  │  │  │  │           │  ├─ LocationHandler.kt
│  │  │  │  │  │           │  ├─ MotionHandler.kt
│  │  │  │  │  │           │  ├─ NodeUtils.kt
│  │  │  │  │  │           │  ├─ NotificationsHandler.kt
│  │  │  │  │  │           │  ├─ PhotosHandler.kt
│  │  │  │  │  │           │  ├─ ScreenHandler.kt
│  │  │  │  │  │           │  ├─ ScreenRecordManager.kt
│  │  │  │  │  │           │  ├─ SmsHandler.kt
│  │  │  │  │  │           │  ├─ SmsManager.kt
│  │  │  │  │  │           │  └─ SystemHandler.kt
│  │  │  │  │  │           ├─ protocol/
│  │  │  │  │  │           │  ├─ OpenClawCanvasA2UIAction.kt
│  │  │  │  │  │           │  └─ OpenClawProtocolConstants.kt
│  │  │  │  │  │           ├─ tools/
│  │  │  │  │  │           │  └─ ToolDisplay.kt
│  │  │  │  │  │           ├─ ui/
│  │  │  │  │  │           │  ├─ chat/
│  │  │  │  │  │           │  │  ├─ Base64ImageState.kt
│  │  │  │  │  │           │  │  ├─ ChatComposer.kt
│  │  │  │  │  │           │  │  ├─ ChatImageCodec.kt
│  │  │  │  │  │           │  │  ├─ ChatMarkdown.kt
│  │  │  │  │  │           │  │  ├─ ChatMessageListCard.kt
│  │  │  │  │  │           │  │  ├─ ChatMessageViews.kt
│  │  │  │  │  │           │  │  ├─ ChatSheetContent.kt
│  │  │  │  │  │           │  │  └─ SessionFilters.kt
│  │  │  │  │  │           │  ├─ CameraHudOverlay.kt
│  │  │  │  │  │           │  ├─ CanvasScreen.kt
│  │  │  │  │  │           │  ├─ ChatSheet.kt
│  │  │  │  │  │           │  ├─ ConnectTabScreen.kt
│  │  │  │  │  │           │  ├─ GatewayConfigResolver.kt
│  │  │  │  │  │           │  ├─ MobileUiTokens.kt
│  │  │  │  │  │           │  ├─ OnboardingFlow.kt
│  │  │  │  │  │           │  ├─ OpenClawTheme.kt
│  │  │  │  │  │           │  ├─ PostOnboardingTabs.kt
│  │  │  │  │  │           │  ├─ RootScreen.kt
│  │  │  │  │  │           │  ├─ SettingsSheet.kt
│  │  │  │  │  │           │  ├─ TalkOrbOverlay.kt
│  │  │  │  │  │           │  └─ VoiceTabScreen.kt
│  │  │  │  │  │           ├─ voice/
│  │  │  │  │  │           │  ├─ ElevenLabsStreamingTts.kt
│  │  │  │  │  │           │  ├─ MicCaptureManager.kt
│  │  │  │  │  │           │  ├─ StreamingMediaDataSource.kt
│  │  │  │  │  │           │  ├─ TalkDirectiveParser.kt
│  │  │  │  │  │           │  ├─ TalkModeManager.kt
│  │  │  │  │  │           │  ├─ VoiceWakeCommandExtractor.kt
│  │  │  │  │  │           │  └─ VoiceWakeManager.kt
│  │  │  │  │  │           ├─ CameraHudState.kt
│  │  │  │  │  │           ├─ DeviceNames.kt
│  │  │  │  │  │           ├─ InstallResultReceiver.kt
│  │  │  │  │  │           ├─ LocationMode.kt
│  │  │  │  │  │           ├─ MainActivity.kt
│  │  │  │  │  │           ├─ MainViewModel.kt
│  │  │  │  │  │           ├─ NodeApp.kt
│  │  │  │  │  │           ├─ NodeForegroundService.kt
│  │  │  │  │  │           ├─ NodeRuntime.kt
│  │  │  │  │  │           ├─ PermissionRequester.kt
│  │  │  │  │  │           ├─ ScreenCaptureRequester.kt
│  │  │  │  │  │           ├─ SecurePrefs.kt
│  │  │  │  │  │           ├─ SessionKey.kt
│  │  │  │  │  │           ├─ VoiceWakeMode.kt
│  │  │  │  │  │           └─ WakeWords.kt
│  │  │  │  │  ├─ res/
│  │  │  │  │  │  ├─ font/
│  │  │  │  │  │  │  ├─ manrope_400_regular.ttf
│  │  │  │  │  │  │  ├─ manrope_500_medium.ttf
│  │  │  │  │  │  │  ├─ manrope_600_semibold.ttf
│  │  │  │  │  │  │  └─ manrope_700_bold.ttf
│  │  │  │  │  │  ├─ mipmap-anydpi/
│  │  │  │  │  │  │  ├─ ic_launcher_round.xml
│  │  │  │  │  │  │  └─ ic_launcher.xml
│  │  │  │  │  │  ├─ mipmap-hdpi/
│  │  │  │  │  │  │  ├─ ic_launcher_foreground.png
│  │  │  │  │  │  │  └─ ic_launcher.png
│  │  │  │  │  │  ├─ mipmap-mdpi/
│  │  │  │  │  │  │  ├─ ic_launcher_foreground.png
│  │  │  │  │  │  │  └─ ic_launcher.png
│  │  │  │  │  │  ├─ mipmap-xhdpi/
│  │  │  │  │  │  │  ├─ ic_launcher_foreground.png
│  │  │  │  │  │  │  └─ ic_launcher.png
│  │  │  │  │  │  ├─ mipmap-xxhdpi/
│  │  │  │  │  │  │  ├─ ic_launcher_foreground.png
│  │  │  │  │  │  │  └─ ic_launcher.png
│  │  │  │  │  │  ├─ mipmap-xxxhdpi/
│  │  │  │  │  │  │  ├─ ic_launcher_foreground.png
│  │  │  │  │  │  │  └─ ic_launcher.png
│  │  │  │  │  │  ├─ values/
│  │  │  │  │  │  │  ├─ colors.xml
│  │  │  │  │  │  │  ├─ strings.xml
│  │  │  │  │  │  │  └─ themes.xml
│  │  │  │  │  │  └─ xml/
│  │  │  │  │  │     ├─ backup_rules.xml
│  │  │  │  │  │     ├─ data_extraction_rules.xml
│  │  │  │  │  │     ├─ file_paths.xml
│  │  │  │  │  │     └─ network_security_config.xml
│  │  │  │  │  └─ AndroidManifest.xml
│  │  │  │  └─ test/
│  │  │  │     └─ java/
│  │  │  │        └─ ai/
│  │  │  │           └─ openclaw/
│  │  │  │              └─ android/
│  │  │  │                 ├─ chat/
│  │  │  │                 │  └─ ChatControllerMessageIdentityTest.kt
│  │  │  │                 ├─ gateway/
│  │  │  │                 │  ├─ BonjourEscapesTest.kt
│  │  │  │                 │  ├─ DeviceAuthPayloadTest.kt
│  │  │  │                 │  ├─ GatewaySessionInvokeTest.kt
│  │  │  │                 │  ├─ GatewaySessionInvokeTimeoutTest.kt
│  │  │  │                 │  └─ InvokeErrorParserTest.kt
│  │  │  │                 ├─ node/
│  │  │  │                 │  ├─ AppUpdateHandlerTest.kt
│  │  │  │                 │  ├─ CalendarHandlerTest.kt
│  │  │  │                 │  ├─ CameraHandlerTest.kt
│  │  │  │                 │  ├─ CanvasControllerSnapshotParamsTest.kt
│  │  │  │                 │  ├─ ConnectionManagerTest.kt
│  │  │  │                 │  ├─ ContactsHandlerTest.kt
│  │  │  │                 │  ├─ DeviceHandlerTest.kt
│  │  │  │                 │  ├─ InvokeCommandRegistryTest.kt
│  │  │  │                 │  ├─ JpegSizeLimiterTest.kt
│  │  │  │                 │  ├─ MotionHandlerTest.kt
│  │  │  │                 │  ├─ NodeHandlerRobolectricTest.kt
│  │  │  │                 │  ├─ NotificationsHandlerTest.kt
│  │  │  │                 │  ├─ PhotosHandlerTest.kt
│  │  │  │                 │  ├─ SmsManagerTest.kt
│  │  │  │                 │  └─ SystemHandlerTest.kt
│  │  │  │                 ├─ protocol/
│  │  │  │                 │  ├─ OpenClawCanvasA2UIActionTest.kt
│  │  │  │                 │  └─ OpenClawProtocolConstantsTest.kt
│  │  │  │                 ├─ ui/
│  │  │  │                 │  ├─ chat/
│  │  │  │                 │  │  ├─ ChatImageCodecTest.kt
│  │  │  │                 │  │  └─ SessionFiltersTest.kt
│  │  │  │                 │  └─ GatewayConfigResolverTest.kt
│  │  │  │                 ├─ voice/
│  │  │  │                 │  ├─ TalkDirectiveParserTest.kt
│  │  │  │                 │  ├─ TalkModeConfigParsingTest.kt
│  │  │  │                 │  └─ VoiceWakeCommandExtractorTest.kt
│  │  │  │                 ├─ NodeForegroundServiceTest.kt
│  │  │  │                 └─ WakeWordsTest.kt
│  │  │  ├─ build.gradle.kts
│  │  │  └─ proguard-rules.pro
│  │  ├─ benchmark/
│  │  │  ├─ src/
│  │  │  │  └─ main/
│  │  │  │     └─ java/
│  │  │  │        └─ ai/
│  │  │  │           └─ openclaw/
│  │  │  │              └─ android/
│  │  │  │                 └─ benchmark/
│  │  │  │                    └─ StartupMacrobenchmark.kt
│  │  │  └─ build.gradle.kts
│  │  ├─ gradle/
│  │  │  ├─ wrapper/
│  │  │  │  ├─ gradle-wrapper.jar
│  │  │  │  └─ gradle-wrapper.properties
│  │  │  └─ gradle-daemon-jvm.properties
│  │  ├─ scripts/
│  │  │  ├─ perf-startup-benchmark.sh
│  │  │  └─ perf-startup-hotspots.sh
│  │  ├─ THIRD_PARTY_LICENSES/
│  │  │  └─ MANROPE_OFL.txt
│  │  ├─ .gitignore
│  │  ├─ build.gradle.kts
│  │  ├─ gradle.properties
│  │  ├─ gradlew
│  │  ├─ gradlew.bat
│  │  ├─ README.md
│  │  ├─ settings.gradle.kts
│  │  └─ style.md
│  ├─ ios/
│  │  ├─ ActivityWidget/
│  │  │  ├─ Assets.xcassets/
│  │  │  │  └─ Contents.json
│  │  │  ├─ GensparxActivityWidgetBundle.swift
│  │  │  ├─ GensparxLiveActivity.swift
│  │  │  └─ Info.plist
│  │  ├─ Config/
│  │  │  └─ Signing.xcconfig
│  │  ├─ fastlane/
│  │  │  ├─ .env.example
│  │  │  ├─ Appfile
│  │  │  ├─ Fastfile
│  │  │  └─ SETUP.md
│  │  ├─ ShareExtension/
│  │  │  ├─ Info.plist
│  │  │  └─ ShareViewController.swift
│  │  ├─ Sources/
│  │  │  ├─ Assets.xcassets/
│  │  │  │  └─ AppIcon.appiconset/
│  │  │  │     ├─ 100.png
│  │  │  │     ├─ 102.png
│  │  │  │     ├─ 1024.png
│  │  │  │     ├─ 108.png
│  │  │  │     ├─ 114.png
│  │  │  │     ├─ 120.png
│  │  │  │     ├─ 172.png
│  │  │  │     ├─ 180.png
│  │  │  │     ├─ 196.png
│  │  │  │     ├─ 216.png
│  │  │  │     ├─ 234.png
│  │  │  │     ├─ 258.png
│  │  │  │     ├─ 29.png
│  │  │  │     ├─ 40.png
│  │  │  │     ├─ 48.png
│  │  │  │     ├─ 55.png
│  │  │  │     ├─ 57.png
│  │  │  │     ├─ 58.png
│  │  │  │     ├─ 60.png
│  │  │  │     ├─ 66.png
│  │  │  │     ├─ 80.png
│  │  │  │     ├─ 87.png
│  │  │  │     ├─ 88.png
│  │  │  │     ├─ 92.png
│  │  │  │     └─ Contents.json
│  │  │  ├─ Calendar/
│  │  │  │  └─ CalendarService.swift
│  │  │  ├─ Camera/
│  │  │  │  └─ CameraController.swift
│  │  │  ├─ Capabilities/
│  │  │  │  └─ NodeCapabilityRouter.swift
│  │  │  ├─ Chat/
│  │  │  │  ├─ ChatSheet.swift
│  │  │  │  └─ IOSGatewayChatTransport.swift
│  │  │  ├─ Contacts/
│  │  │  │  └─ ContactsService.swift
│  │  │  ├─ Device/
│  │  │  │  ├─ DeviceInfoHelper.swift
│  │  │  │  ├─ DeviceStatusService.swift
│  │  │  │  ├─ NetworkStatusService.swift
│  │  │  │  └─ NodeDisplayName.swift
│  │  │  ├─ EventKit/
│  │  │  │  └─ EventKitAuthorization.swift
│  │  │  ├─ Gateway/
│  │  │  │  ├─ DeepLinkAgentPromptAlert.swift
│  │  │  │  ├─ GatewayConnectConfig.swift
│  │  │  │  ├─ GatewayConnectionController.swift
│  │  │  │  ├─ GatewayConnectionIssue.swift
│  │  │  │  ├─ GatewayDiscoveryDebugLogView.swift
│  │  │  │  ├─ GatewayDiscoveryModel.swift
│  │  │  │  ├─ GatewayHealthMonitor.swift
│  │  │  │  ├─ GatewayQuickSetupSheet.swift
│  │  │  │  ├─ GatewayServiceResolver.swift
│  │  │  │  ├─ GatewaySettingsStore.swift
│  │  │  │  ├─ GatewaySetupCode.swift
│  │  │  │  ├─ GatewayTrustPromptAlert.swift
│  │  │  │  ├─ KeychainStore.swift
│  │  │  │  └─ TCPProbe.swift
│  │  │  ├─ LiveActivity/
│  │  │  │  ├─ GensparxActivityAttributes.swift
│  │  │  │  └─ LiveActivityManager.swift
│  │  │  ├─ Location/
│  │  │  │  ├─ LocationService.swift
│  │  │  │  └─ SignificantLocationMonitor.swift
│  │  │  ├─ Media/
│  │  │  │  └─ PhotoLibraryService.swift
│  │  │  ├─ Model/
│  │  │  │  ├─ NodeAppModel.swift
│  │  │  │  ├─ NodeAppModel+Canvas.swift
│  │  │  │  └─ NodeAppModel+WatchNotifyNormalization.swift
│  │  │  ├─ Motion/
│  │  │  │  └─ MotionService.swift
│  │  │  ├─ Onboarding/
│  │  │  │  ├─ GatewayOnboardingView.swift
│  │  │  │  ├─ OnboardingStateStore.swift
│  │  │  │  ├─ OnboardingWizardView.swift
│  │  │  │  └─ QRScannerView.swift
│  │  │  ├─ Reminders/
│  │  │  │  └─ RemindersService.swift
│  │  │  ├─ Screen/
│  │  │  │  ├─ ScreenController.swift
│  │  │  │  ├─ ScreenRecordService.swift
│  │  │  │  ├─ ScreenTab.swift
│  │  │  │  └─ ScreenWebView.swift
│  │  │  ├─ Services/
│  │  │  │  ├─ NodeServiceProtocols.swift
│  │  │  │  ├─ NotificationService.swift
│  │  │  │  └─ WatchMessagingService.swift
│  │  │  ├─ Settings/
│  │  │  │  ├─ SettingsNetworkingHelpers.swift
│  │  │  │  ├─ SettingsTab.swift
│  │  │  │  └─ VoiceWakeWordsSettingsView.swift
│  │  │  ├─ Status/
│  │  │  │  ├─ GatewayActionsDialog.swift
│  │  │  │  ├─ GatewayStatusBuilder.swift
│  │  │  │  ├─ StatusActivityBuilder.swift
│  │  │  │  ├─ StatusGlassCard.swift
│  │  │  │  ├─ StatusPill.swift
│  │  │  │  └─ VoiceWakeToast.swift
│  │  │  ├─ Voice/
│  │  │  │  ├─ TalkModeManager.swift
│  │  │  │  ├─ TalkOrbOverlay.swift
│  │  │  │  ├─ VoiceTab.swift
│  │  │  │  ├─ VoiceWakeManager.swift
│  │  │  │  └─ VoiceWakePreferences.swift
│  │  │  ├─ GensparxApp.swift
│  │  │  ├─ Info.plist
│  │  │  ├─ OpenClaw.entitlements
│  │  │  ├─ RootCanvas.swift
│  │  │  ├─ RootTabs.swift
│  │  │  ├─ RootView.swift
│  │  │  └─ SessionKey.swift
│  │  ├─ Tests/
│  │  │  ├─ AppCoverageTests.swift
│  │  │  ├─ CameraControllerClampTests.swift
│  │  │  ├─ CameraControllerErrorTests.swift
│  │  │  ├─ DeepLinkParserTests.swift
│  │  │  ├─ GatewayConnectionControllerTests.swift
│  │  │  ├─ GatewayConnectionIssueTests.swift
│  │  │  ├─ GatewayConnectionSecurityTests.swift
│  │  │  ├─ GatewayDiscoveryModelTests.swift
│  │  │  ├─ GatewayEndpointIDTests.swift
│  │  │  ├─ GatewaySettingsStoreTests.swift
│  │  │  ├─ Info.plist
│  │  │  ├─ IOSGatewayChatTransportTests.swift
│  │  │  ├─ KeychainStoreTests.swift
│  │  │  ├─ NodeAppModelInvokeTests.swift
│  │  │  ├─ OnboardingStateStoreTests.swift
│  │  │  ├─ ScreenControllerTests.swift
│  │  │  ├─ ScreenRecordServiceTests.swift
│  │  │  ├─ SettingsNetworkingHelpersTests.swift
│  │  │  ├─ ShareToAgentDeepLinkTests.swift
│  │  │  ├─ SwiftUIRenderSmokeTests.swift
│  │  │  ├─ TalkModeConfigParsingTests.swift
│  │  │  ├─ TalkModeIncrementalSpeechBufferTests.swift
│  │  │  ├─ TestDefaultsSupport.swift
│  │  │  ├─ VoiceWakeGatewaySyncTests.swift
│  │  │  ├─ VoiceWakeManagerExtractCommandTests.swift
│  │  │  ├─ VoiceWakeManagerStateTests.swift
│  │  │  └─ VoiceWakePreferencesTests.swift
│  │  ├─ WatchApp/
│  │  │  ├─ Assets.xcassets/
│  │  │  │  ├─ AppIcon.appiconset/
│  │  │  │  │  ├─ Contents.json
│  │  │  │  │  ├─ watch-app-38@2x.png
│  │  │  │  │  ├─ watch-app-40@2x.png
│  │  │  │  │  ├─ watch-app-41@2x.png
│  │  │  │  │  ├─ watch-app-44@2x.png
│  │  │  │  │  ├─ watch-app-45@2x.png
│  │  │  │  │  ├─ watch-companion-29@2x.png
│  │  │  │  │  ├─ watch-companion-29@3x.png
│  │  │  │  │  ├─ watch-marketing-1024.png
│  │  │  │  │  ├─ watch-notification-38@2x.png
│  │  │  │  │  ├─ watch-notification-42@2x.png
│  │  │  │  │  ├─ watch-quicklook-38@2x.png
│  │  │  │  │  ├─ watch-quicklook-42@2x.png
│  │  │  │  │  ├─ watch-quicklook-44@2x.png
│  │  │  │  │  └─ watch-quicklook-45@2x.png
│  │  │  │  └─ Contents.json
│  │  │  └─ Info.plist
│  │  ├─ WatchExtension/
│  │  │  ├─ Sources/
│  │  │  │  ├─ OpenClawWatchApp.swift
│  │  │  │  ├─ WatchConnectivityReceiver.swift
│  │  │  │  ├─ WatchInboxStore.swift
│  │  │  │  └─ WatchInboxView.swift
│  │  │  └─ Info.plist
│  │  ├─ .swiftlint.yml
│  │  ├─ LocalSigning.xcconfig.example
│  │  ├─ project.yml
│  │  ├─ README.md
│  │  ├─ Signing.xcconfig
│  │  └─ SwiftSources.input.xcfilelist
│  ├─ macos/
│  │  ├─ Icon.icon/
│  │  │  ├─ Assets/
│  │  │  │  └─ gensparx-mac.png
│  │  │  └─ icon.json
│  │  ├─ Sources/
│  │  │  ├─ Gensparx/
│  │  │  │  ├─ Logging/
│  │  │  │  │  └─ OpenClawLogging.swift
│  │  │  │  ├─ NodeMode/
│  │  │  │  │  ├─ MacNodeLocationService.swift
│  │  │  │  │  ├─ MacNodeModeCoordinator.swift
│  │  │  │  │  ├─ MacNodeRuntime.swift
│  │  │  │  │  ├─ MacNodeRuntimeMainActorServices.swift
│  │  │  │  │  └─ MacNodeScreenCommands.swift
│  │  │  │  ├─ Resources/
│  │  │  │  │  ├─ DeviceModels/
│  │  │  │  │  │  ├─ ios-device-identifiers.json
│  │  │  │  │  │  ├─ LICENSE.apple-device-identifiers.txt
│  │  │  │  │  │  ├─ mac-device-identifiers.json
│  │  │  │  │  │  └─ NOTICE.md
│  │  │  │  │  ├─ Info.plist
│  │  │  │  │  └─ OpenClaw.icns
│  │  │  │  ├─ AboutSettings.swift
│  │  │  │  ├─ AgeFormatting.swift
│  │  │  │  ├─ AgentEventStore.swift
│  │  │  │  ├─ AgentEventsWindow.swift
│  │  │  │  ├─ AgentWorkspace.swift
│  │  │  │  ├─ AgentWorkspaceConfig.swift
│  │  │  │  ├─ AnyCodable+Helpers.swift
│  │  │  │  ├─ AppState.swift
│  │  │  │  ├─ AudioInputDeviceObserver.swift
│  │  │  │  ├─ CameraCaptureService.swift
│  │  │  │  ├─ CanvasA2UIActionMessageHandler.swift
│  │  │  │  ├─ CanvasChromeContainerView.swift
│  │  │  │  ├─ CanvasFileWatcher.swift
│  │  │  │  ├─ CanvasManager.swift
│  │  │  │  ├─ CanvasScheme.swift
│  │  │  │  ├─ CanvasSchemeHandler.swift
│  │  │  │  ├─ CanvasWindow.swift
│  │  │  │  ├─ CanvasWindowController.swift
│  │  │  │  ├─ CanvasWindowController+Helpers.swift
│  │  │  │  ├─ CanvasWindowController+Navigation.swift
│  │  │  │  ├─ CanvasWindowController+Testing.swift
│  │  │  │  ├─ CanvasWindowController+Window.swift
│  │  │  │  ├─ ChannelConfigForm.swift
│  │  │  │  ├─ ChannelsSettings.swift
│  │  │  │  ├─ ChannelsSettings+ChannelSections.swift
│  │  │  │  ├─ ChannelsSettings+ChannelState.swift
│  │  │  │  ├─ ChannelsSettings+Helpers.swift
│  │  │  │  ├─ ChannelsSettings+View.swift
│  │  │  │  ├─ ChannelsStore.swift
│  │  │  │  ├─ ChannelsStore+Config.swift
│  │  │  │  ├─ ChannelsStore+Lifecycle.swift
│  │  │  │  ├─ CLIInstaller.swift
│  │  │  │  ├─ CLIInstallPrompter.swift
│  │  │  │  ├─ CoalescingFSEventsWatcher.swift
│  │  │  │  ├─ ColorHexSupport.swift
│  │  │  │  ├─ CommandResolver.swift
│  │  │  │  ├─ ConfigFileWatcher.swift
│  │  │  │  ├─ ConfigSchemaSupport.swift
│  │  │  │  ├─ ConfigSettings.swift
│  │  │  │  ├─ ConfigStore.swift
│  │  │  │  ├─ ConnectionModeCoordinator.swift
│  │  │  │  ├─ ConnectionModeResolver.swift
│  │  │  │  ├─ Constants.swift
│  │  │  │  ├─ ContextMenuCardView.swift
│  │  │  │  ├─ ContextUsageBar.swift
│  │  │  │  ├─ ControlChannel.swift
│  │  │  │  ├─ CostUsageMenuView.swift
│  │  │  │  ├─ CritterIconRenderer.swift
│  │  │  │  ├─ CritterStatusLabel.swift
│  │  │  │  ├─ CritterStatusLabel+Behavior.swift
│  │  │  │  ├─ CronJobEditor.swift
│  │  │  │  ├─ CronJobEditor+Helpers.swift
│  │  │  │  ├─ CronJobEditor+Testing.swift
│  │  │  │  ├─ CronJobsStore.swift
│  │  │  │  ├─ CronModels.swift
│  │  │  │  ├─ CronSettings.swift
│  │  │  │  ├─ CronSettings+Actions.swift
│  │  │  │  ├─ CronSettings+Helpers.swift
│  │  │  │  ├─ CronSettings+Layout.swift
│  │  │  │  ├─ CronSettings+Rows.swift
│  │  │  │  ├─ CronSettings+Testing.swift
│  │  │  │  ├─ DebugActions.swift
│  │  │  │  ├─ DebugSettings.swift
│  │  │  │  ├─ DeepLinks.swift
│  │  │  │  ├─ DeviceModelCatalog.swift
│  │  │  │  ├─ DevicePairingApprovalPrompter.swift
│  │  │  │  ├─ DiagnosticsFileLog.swift
│  │  │  │  ├─ DockIconManager.swift
│  │  │  │  ├─ DurationFormattingSupport.swift
│  │  │  │  ├─ ExecAllowlistMatcher.swift
│  │  │  │  ├─ ExecApprovalEvaluation.swift
│  │  │  │  ├─ ExecApprovals.swift
│  │  │  │  ├─ ExecApprovalsGatewayPrompter.swift
│  │  │  │  ├─ ExecApprovalsSocket.swift
│  │  │  │  ├─ ExecCommandResolution.swift
│  │  │  │  ├─ ExecEnvInvocationUnwrapper.swift
│  │  │  │  ├─ ExecEnvOptions.swift
│  │  │  │  ├─ ExecHostRequestEvaluator.swift
│  │  │  │  ├─ ExecShellWrapperParser.swift
│  │  │  │  ├─ ExecSystemRunCommandValidator.swift
│  │  │  │  ├─ FileHandle+SafeRead.swift
│  │  │  │  ├─ GatewayAutostartPolicy.swift
│  │  │  │  ├─ GatewayConnection.swift
│  │  │  │  ├─ GatewayConnectivityCoordinator.swift
│  │  │  │  ├─ GatewayDiscoveryHelpers.swift
│  │  │  │  ├─ GatewayDiscoveryMenu.swift
│  │  │  │  ├─ GatewayDiscoveryPreferences.swift
│  │  │  │  ├─ GatewayDiscoverySelectionSupport.swift
│  │  │  │  ├─ GatewayEndpointStore.swift
│  │  │  │  ├─ GatewayEnvironment.swift
│  │  │  │  ├─ GatewayLaunchAgentManager.swift
│  │  │  │  ├─ GatewayProcessManager.swift
│  │  │  │  ├─ GatewayPushSubscription.swift
│  │  │  │  ├─ GatewayRemoteConfig.swift
│  │  │  │  ├─ GeneralSettings.swift
│  │  │  │  ├─ HealthStore.swift
│  │  │  │  ├─ HeartbeatStore.swift
│  │  │  │  ├─ HostEnvSanitizer.swift
│  │  │  │  ├─ HostEnvSecurityPolicy.generated.swift
│  │  │  │  ├─ HoverHUD.swift
│  │  │  │  ├─ IconState.swift
│  │  │  │  ├─ InstancesSettings.swift
│  │  │  │  ├─ InstancesStore.swift
│  │  │  │  ├─ JSONObjectExtractionSupport.swift
│  │  │  │  ├─ LaunchAgentManager.swift
│  │  │  │  ├─ Launchctl.swift
│  │  │  │  ├─ LaunchdManager.swift
│  │  │  │  ├─ LogLocator.swift
│  │  │  │  ├─ MenuBar.swift
│  │  │  │  ├─ MenuContentView.swift
│  │  │  │  ├─ MenuContextCardInjector.swift
│  │  │  │  ├─ MenuHeaderCard.swift
│  │  │  │  ├─ MenuHighlightedHostView.swift
│  │  │  │  ├─ MenuHostedItem.swift
│  │  │  │  ├─ MenuItemHighlightColors.swift
│  │  │  │  ├─ MenuSessionsHeaderView.swift
│  │  │  │  ├─ MenuSessionsInjector.swift
│  │  │  │  ├─ MenuUsageHeaderView.swift
│  │  │  │  ├─ MicLevelMonitor.swift
│  │  │  │  ├─ MicRefreshSupport.swift
│  │  │  │  ├─ ModelCatalogLoader.swift
│  │  │  │  ├─ NodePairingApprovalPrompter.swift
│  │  │  │  ├─ NodeServiceManager.swift
│  │  │  │  ├─ NodesMenu.swift
│  │  │  │  ├─ NodesStore.swift
│  │  │  │  ├─ NotificationManager.swift
│  │  │  │  ├─ NotifyOverlay.swift
│  │  │  │  ├─ NSAttributedString+VoiceWake.swift
│  │  │  │  ├─ Onboarding.swift
│  │  │  │  ├─ OnboardingView+Actions.swift
│  │  │  │  ├─ OnboardingView+Chat.swift
│  │  │  │  ├─ OnboardingView+Layout.swift
│  │  │  │  ├─ OnboardingView+Monitoring.swift
│  │  │  │  ├─ OnboardingView+Pages.swift
│  │  │  │  ├─ OnboardingView+Testing.swift
│  │  │  │  ├─ OnboardingView+Wizard.swift
│  │  │  │  ├─ OnboardingView+Workspace.swift
│  │  │  │  ├─ OnboardingWidgets.swift
│  │  │  │  ├─ OnboardingWizard.swift
│  │  │  │  ├─ OpenClawConfigFile.swift
│  │  │  │  ├─ OpenClawPaths.swift
│  │  │  │  ├─ OverlayPanelFactory.swift
│  │  │  │  ├─ PairingAlertSupport.swift
│  │  │  │  ├─ PeekabooBridgeHostCoordinator.swift
│  │  │  │  ├─ PermissionManager.swift
│  │  │  │  ├─ PermissionMonitoringSupport.swift
│  │  │  │  ├─ PermissionsSettings.swift
│  │  │  │  ├─ PlatformLabelFormatter.swift
│  │  │  │  ├─ PointingHandCursor.swift
│  │  │  │  ├─ PortGuardian.swift
│  │  │  │  ├─ PresenceReporter.swift
│  │  │  │  ├─ Process+PipeRead.swift
│  │  │  │  ├─ ProcessInfo+OpenClaw.swift
│  │  │  │  ├─ RemotePortTunnel.swift
│  │  │  │  ├─ RemoteTunnelManager.swift
│  │  │  │  ├─ RuntimeLocator.swift
│  │  │  │  ├─ ScreenRecordService.swift
│  │  │  │  ├─ ScreenshotSize.swift
│  │  │  │  ├─ SelectableRow.swift
│  │  │  │  ├─ SessionActions.swift
│  │  │  │  ├─ SessionData.swift
│  │  │  │  ├─ SessionMenuLabelView.swift
│  │  │  │  ├─ SessionMenuPreviewView.swift
│  │  │  │  ├─ SessionsSettings.swift
│  │  │  │  ├─ SettingsComponents.swift
│  │  │  │  ├─ SettingsRefreshButton.swift
│  │  │  │  ├─ SettingsRootView.swift
│  │  │  │  ├─ SettingsSidebarCard.swift
│  │  │  │  ├─ SettingsSidebarScroll.swift
│  │  │  │  ├─ SettingsWindowOpener.swift
│  │  │  │  ├─ ShellExecutor.swift
│  │  │  │  ├─ SimpleFileWatcher.swift
│  │  │  │  ├─ SimpleFileWatcherOwner.swift
│  │  │  │  ├─ SimpleTaskSupport.swift
│  │  │  │  ├─ SkillsModels.swift
│  │  │  │  ├─ SkillsSettings.swift
│  │  │  │  ├─ SoundEffects.swift
│  │  │  │  ├─ StatusPill.swift
│  │  │  │  ├─ String+NonEmpty.swift
│  │  │  │  ├─ SystemPresenceInfo.swift
│  │  │  │  ├─ SystemRunSettingsView.swift
│  │  │  │  ├─ SystemSettingsURLSupport.swift
│  │  │  │  ├─ TailscaleIntegrationSection.swift
│  │  │  │  ├─ TailscaleService.swift
│  │  │  │  ├─ TalkAudioPlayer.swift
│  │  │  │  ├─ TalkModeController.swift
│  │  │  │  ├─ TalkModeRuntime.swift
│  │  │  │  ├─ TalkModeTypes.swift
│  │  │  │  ├─ TalkOverlay.swift
│  │  │  │  ├─ TalkOverlayView.swift
│  │  │  │  ├─ TerminationSignalWatcher.swift
│  │  │  │  ├─ TextSummarySupport.swift
│  │  │  │  ├─ TrackingAreaSupport.swift
│  │  │  │  ├─ UsageCostData.swift
│  │  │  │  ├─ UsageData.swift
│  │  │  │  ├─ UsageMenuLabelView.swift
│  │  │  │  ├─ UserDefaultsMigration.swift
│  │  │  │  ├─ ViewMetrics.swift
│  │  │  │  ├─ VisualEffectView.swift
│  │  │  │  ├─ VoiceOverlayTextFormatting.swift
│  │  │  │  ├─ VoicePushToTalk.swift
│  │  │  │  ├─ VoiceSessionCoordinator.swift
│  │  │  │  ├─ VoiceWakeChime.swift
│  │  │  │  ├─ VoiceWakeForwarder.swift
│  │  │  │  ├─ VoiceWakeGlobalSettingsSync.swift
│  │  │  │  ├─ VoiceWakeHelpers.swift
│  │  │  │  ├─ VoiceWakeOverlay.swift
│  │  │  │  ├─ VoiceWakeOverlayController+Session.swift
│  │  │  │  ├─ VoiceWakeOverlayController+Testing.swift
│  │  │  │  ├─ VoiceWakeOverlayController+Window.swift
│  │  │  │  ├─ VoiceWakeOverlayTextViews.swift
│  │  │  │  ├─ VoiceWakeOverlayView.swift
│  │  │  │  ├─ VoiceWakeRecognitionDebugSupport.swift
│  │  │  │  ├─ VoiceWakeRuntime.swift
│  │  │  │  ├─ VoiceWakeSettings.swift
│  │  │  │  ├─ VoiceWakeTestCard.swift
│  │  │  │  ├─ VoiceWakeTester.swift
│  │  │  │  ├─ VoiceWakeTextUtils.swift
│  │  │  │  ├─ WebChatManager.swift
│  │  │  │  ├─ WebChatSwiftUI.swift
│  │  │  │  ├─ WindowPlacement.swift
│  │  │  │  └─ WorkActivityStore.swift
│  │  │  ├─ OpenClawDiscovery/
│  │  │  │  ├─ GatewayDiscoveryModel.swift
│  │  │  │  ├─ TailscaleNetwork.swift
│  │  │  │  ├─ TailscaleServeGatewayDiscovery.swift
│  │  │  │  └─ WideAreaGatewayDiscovery.swift
│  │  │  ├─ OpenClawIPC/
│  │  │  │  └─ IPC.swift
│  │  │  ├─ OpenClawMacCLI/
│  │  │  │  ├─ CLIArgParsingSupport.swift
│  │  │  │  ├─ ConnectCommand.swift
│  │  │  │  ├─ DiscoverCommand.swift
│  │  │  │  ├─ EntryPoint.swift
│  │  │  │  ├─ GatewayConfig.swift
│  │  │  │  ├─ GatewayScopes.swift
│  │  │  │  ├─ TypeAliases.swift
│  │  │  │  └─ WizardCommand.swift
│  │  │  └─ OpenClawProtocol/
│  │  │     └─ GatewayModels.swift
│  │  ├─ Tests/
│  │  │  └─ OpenClawIPCTests/
│  │  │     ├─ AgentEventStoreTests.swift
│  │  │     ├─ AgentWorkspaceTests.swift
│  │  │     ├─ AnyCodableEncodingTests.swift
│  │  │     ├─ AudioInputDeviceObserverTests.swift
│  │  │     ├─ CameraCaptureServiceTests.swift
│  │  │     ├─ CameraIPCTests.swift
│  │  │     ├─ CanvasFileWatcherTests.swift
│  │  │     ├─ CanvasIPCTests.swift
│  │  │     ├─ CanvasWindowSmokeTests.swift
│  │  │     ├─ ChannelsSettingsSmokeTests.swift
│  │  │     ├─ CLIInstallerTests.swift
│  │  │     ├─ CommandResolverTests.swift
│  │  │     ├─ ConfigStoreTests.swift
│  │  │     ├─ CoverageDumpTests.swift
│  │  │     ├─ CritterIconRendererTests.swift
│  │  │     ├─ CronJobEditorSmokeTests.swift
│  │  │     ├─ CronModelsTests.swift
│  │  │     ├─ DeepLinkAgentPolicyTests.swift
│  │  │     ├─ DeviceModelCatalogTests.swift
│  │  │     ├─ ExecAllowlistTests.swift
│  │  │     ├─ ExecApprovalHelpersTests.swift
│  │  │     ├─ ExecApprovalsGatewayPrompterTests.swift
│  │  │     ├─ ExecApprovalsSocketPathGuardTests.swift
│  │  │     ├─ ExecApprovalsStoreRefactorTests.swift
│  │  │     ├─ ExecHostRequestEvaluatorTests.swift
│  │  │     ├─ ExecSystemRunCommandValidatorTests.swift
│  │  │     ├─ FileHandleLegacyAPIGuardTests.swift
│  │  │     ├─ FileHandleSafeReadTests.swift
│  │  │     ├─ GatewayAgentChannelTests.swift
│  │  │     ├─ GatewayAutostartPolicyTests.swift
│  │  │     ├─ GatewayChannelConfigureTests.swift
│  │  │     ├─ GatewayChannelConnectTests.swift
│  │  │     ├─ GatewayChannelRequestTests.swift
│  │  │     ├─ GatewayChannelShutdownTests.swift
│  │  │     ├─ GatewayConnectionControlTests.swift
│  │  │     ├─ GatewayDiscoveryHelpersTests.swift
│  │  │     ├─ GatewayDiscoveryModelTests.swift
│  │  │     ├─ GatewayEndpointStoreTests.swift
│  │  │     ├─ GatewayEnvironmentTests.swift
│  │  │     ├─ GatewayFrameDecodeTests.swift
│  │  │     ├─ GatewayLaunchAgentManagerTests.swift
│  │  │     ├─ GatewayProcessManagerTests.swift
│  │  │     ├─ GatewayWebSocketTestSupport.swift
│  │  │     ├─ HealthDecodeTests.swift
│  │  │     ├─ HealthStoreStateTests.swift
│  │  │     ├─ HostEnvSanitizerTests.swift
│  │  │     ├─ HoverHUDControllerTests.swift
│  │  │     ├─ InstancesSettingsSmokeTests.swift
│  │  │     ├─ InstancesStoreTests.swift
│  │  │     ├─ LogLocatorTests.swift
│  │  │     ├─ LowCoverageHelperTests.swift
│  │  │     ├─ LowCoverageViewSmokeTests.swift
│  │  │     ├─ MacGatewayChatTransportMappingTests.swift
│  │  │     ├─ MacNodeRuntimeTests.swift
│  │  │     ├─ MasterDiscoveryMenuSmokeTests.swift
│  │  │     ├─ MenuContentSmokeTests.swift
│  │  │     ├─ MenuSessionsInjectorTests.swift
│  │  │     ├─ ModelCatalogLoaderTests.swift
│  │  │     ├─ NixModeStableSuiteTests.swift
│  │  │     ├─ NodeManagerPathsTests.swift
│  │  │     ├─ NodePairingApprovalPrompterTests.swift
│  │  │     ├─ NodePairingReconcilePolicyTests.swift
│  │  │     ├─ OnboardingCoverageTests.swift
│  │  │     ├─ OnboardingViewSmokeTests.swift
│  │  │     ├─ OnboardingWizardStepViewTests.swift
│  │  │     ├─ OpenClawConfigFileTests.swift
│  │  │     ├─ PermissionManagerLocationTests.swift
│  │  │     ├─ PermissionManagerTests.swift
│  │  │     ├─ Placeholder.swift
│  │  │     ├─ RemotePortTunnelTests.swift
│  │  │     ├─ RuntimeLocatorTests.swift
│  │  │     ├─ ScreenshotSizeTests.swift
│  │  │     ├─ SemverTests.swift
│  │  │     ├─ SessionDataTests.swift
│  │  │     ├─ SessionMenuPreviewTests.swift
│  │  │     ├─ SettingsViewSmokeTests.swift
│  │  │     ├─ SkillsSettingsSmokeTests.swift
│  │  │     ├─ TailscaleIntegrationSectionTests.swift
│  │  │     ├─ TailscaleServeGatewayDiscoveryTests.swift
│  │  │     ├─ TalkAudioPlayerTests.swift
│  │  │     ├─ TalkModeConfigParsingTests.swift
│  │  │     ├─ TestFSHelpers.swift
│  │  │     ├─ TestIsolation.swift
│  │  │     ├─ UtilitiesTests.swift
│  │  │     ├─ VoicePushToTalkHotkeyTests.swift
│  │  │     ├─ VoicePushToTalkTests.swift
│  │  │     ├─ VoiceWakeForwarderTests.swift
│  │  │     ├─ VoiceWakeGlobalSettingsSyncTests.swift
│  │  │     ├─ VoiceWakeHelpersTests.swift
│  │  │     ├─ VoiceWakeOverlayControllerTests.swift
│  │  │     ├─ VoiceWakeOverlayTests.swift
│  │  │     ├─ VoiceWakeOverlayViewSmokeTests.swift
│  │  │     ├─ VoiceWakeRuntimeTests.swift
│  │  │     ├─ VoiceWakeTesterTests.swift
│  │  │     ├─ VoiceWakeTestSupport.swift
│  │  │     ├─ WebChatMainSessionKeyTests.swift
│  │  │     ├─ WebChatManagerTests.swift
│  │  │     ├─ WebChatSwiftUISmokeTests.swift
│  │  │     ├─ WideAreaGatewayDiscoveryTests.swift
│  │  │     ├─ WindowPlacementTests.swift
│  │  │     └─ WorkActivityStoreTests.swift
│  │  ├─ Package.resolved
│  │  ├─ Package.swift
│  │  └─ README.md
│  └─ shared/
│     └─ GensparxKit/
│        ├─ Sources/
│        │  ├─ GensparxChatUI/
│        │  │  ├─ AssistantTextParser.swift
│        │  │  ├─ ChatComposer.swift
│        │  │  ├─ ChatMarkdownPreprocessor.swift
│        │  │  ├─ ChatMarkdownRenderer.swift
│        │  │  ├─ ChatMessageViews.swift
│        │  │  ├─ ChatModels.swift
│        │  │  ├─ ChatPayloadDecoding.swift
│        │  │  ├─ ChatSessions.swift
│        │  │  ├─ ChatSheets.swift
│        │  │  ├─ ChatTheme.swift
│        │  │  ├─ ChatTransport.swift
│        │  │  ├─ ChatView.swift
│        │  │  ├─ ChatViewModel.swift
│        │  │  └─ ToolResultTextFormatter.swift
│        │  ├─ GensparxKit/
│        │  │  ├─ Resources/
│        │  │  │  ├─ CanvasScaffold/
│        │  │  │  │  └─ scaffold.html
│        │  │  │  └─ tool-display.json
│        │  │  ├─ AnyCodable.swift
│        │  │  ├─ AsyncTimeout.swift
│        │  │  ├─ AudioStreamingProtocols.swift
│        │  │  ├─ BonjourEscapes.swift
│        │  │  ├─ BonjourServiceResolverSupport.swift
│        │  │  ├─ BonjourTypes.swift
│        │  │  ├─ BridgeFrames.swift
│        │  │  ├─ CalendarCommands.swift
│        │  │  ├─ CameraAuthorization.swift
│        │  │  ├─ CameraCapturePipelineSupport.swift
│        │  │  ├─ CameraCommands.swift
│        │  │  ├─ CameraSessionConfiguration.swift
│        │  │  ├─ CanvasA2UIAction.swift
│        │  │  ├─ CanvasA2UICommands.swift
│        │  │  ├─ CanvasA2UIJSONL.swift
│        │  │  ├─ CanvasCommandParams.swift
│        │  │  ├─ CanvasCommands.swift
│        │  │  ├─ Capabilities.swift
│        │  │  ├─ CaptureRateLimits.swift
│        │  │  ├─ ChatCommands.swift
│        │  │  ├─ ContactsCommands.swift
│        │  │  ├─ DeepLinks.swift
│        │  │  ├─ DeviceAuthPayload.swift
│        │  │  ├─ DeviceAuthStore.swift
│        │  │  ├─ DeviceCommands.swift
│        │  │  ├─ DeviceIdentity.swift
│        │  │  ├─ ElevenLabsKitShim.swift
│        │  │  ├─ GatewayChannel.swift
│        │  │  ├─ GatewayConnectChallengeSupport.swift
│        │  │  ├─ GatewayDiscoveryBrowserSupport.swift
│        │  │  ├─ GatewayDiscoveryStatusText.swift
│        │  │  ├─ GatewayEndpointID.swift
│        │  │  ├─ GatewayErrors.swift
│        │  │  ├─ GatewayNodeSession.swift
│        │  │  ├─ GatewayPayloadDecoding.swift
│        │  │  ├─ GatewayPush.swift
│        │  │  ├─ GatewayTLSPinning.swift
│        │  │  ├─ GenericPasswordKeychainStore.swift
│        │  │  ├─ InstanceIdentity.swift
│        │  │  ├─ JPEGTranscoder.swift
│        │  │  ├─ LocalNetworkURLSupport.swift
│        │  │  ├─ LocationCommands.swift
│        │  │  ├─ LocationCurrentRequest.swift
│        │  │  ├─ LocationServiceSupport.swift
│        │  │  ├─ LocationSettings.swift
│        │  │  ├─ LoopbackHost.swift
│        │  │  ├─ MotionCommands.swift
│        │  │  ├─ NetworkInterfaceIPv4.swift
│        │  │  ├─ NetworkInterfaces.swift
│        │  │  ├─ NodeError.swift
│        │  │  ├─ OpenClawDateRangeLimitParams.swift
│        │  │  ├─ OpenClawKitResources.swift
│        │  │  ├─ PhotoCapture.swift
│        │  │  ├─ PhotosCommands.swift
│        │  │  ├─ RemindersCommands.swift
│        │  │  ├─ ScreenCommands.swift
│        │  │  ├─ ShareGatewayRelaySettings.swift
│        │  │  ├─ ShareToAgentDeepLink.swift
│        │  │  ├─ ShareToAgentSettings.swift
│        │  │  ├─ StoragePaths.swift
│        │  │  ├─ SystemCommands.swift
│        │  │  ├─ TalkCommands.swift
│        │  │  ├─ TalkDirective.swift
│        │  │  ├─ TalkHistoryTimestamp.swift
│        │  │  ├─ TalkPromptBuilder.swift
│        │  │  ├─ TalkSystemSpeechSynthesizer.swift
│        │  │  ├─ ThrowingContinuationSupport.swift
│        │  │  ├─ ToolDisplay.swift
│        │  │  ├─ WatchCommands.swift
│        │  │  └─ WebViewJavaScriptSupport.swift
│        │  └─ GensparxProtocol/
│        │     ├─ AnyCodable.swift
│        │     ├─ GatewayModels.swift
│        │     └─ WizardHelpers.swift
│        ├─ Tests/
│        │  └─ OpenClawKitTests/
│        │     ├─ AnyCodableTests.swift
│        │     ├─ AssistantTextParserTests.swift
│        │     ├─ BonjourEscapesTests.swift
│        │     ├─ CanvasA2UIActionTests.swift
│        │     ├─ CanvasA2UITests.swift
│        │     ├─ CanvasSnapshotFormatTests.swift
│        │     ├─ ChatMarkdownPreprocessorTests.swift
│        │     ├─ ChatThemeTests.swift
│        │     ├─ ChatViewModelTests.swift
│        │     ├─ DeepLinksSecurityTests.swift
│        │     ├─ DeviceAuthPayloadTests.swift
│        │     ├─ ElevenLabsTTSValidationTests.swift
│        │     ├─ GatewayNodeSessionTests.swift
│        │     ├─ JPEGTranscoderTests.swift
│        │     ├─ TalkDirectiveTests.swift
│        │     ├─ TalkHistoryTimestampTests.swift
│        │     ├─ TalkPromptBuilderTests.swift
│        │     ├─ TestAsyncHelpers.swift
│        │     ├─ ToolDisplayRegistryTests.swift
│        │     └─ ToolResultTextFormatterTests.swift
│        ├─ Tools/
│        │  └─ CanvasA2UI/
│        │     ├─ bootstrap.js
│        │     └─ rolldown.config.mjs
│        └─ Package.swift
├─ assets/
│  ├─ chrome-extension/
│  │  ├─ icons/
│  │  │  ├─ icon128.png
│  │  │  ├─ icon16.png
│  │  │  ├─ icon32.png
│  │  │  └─ icon48.png
│  │  ├─ background-utils.js
│  │  ├─ background.js
│  │  ├─ manifest.json
│  │  ├─ options-validation.js
│  │  ├─ options.html
│  │  ├─ options.js
│  │  └─ README.md
│  ├─ avatar-placeholder.svg
│  ├─ dmg-background-small.png
│  └─ dmg-background.png
├─ dist/
│  ├─ bundled/
│  │  ├─ boot-md/
│  │  │  ├─ handler.js
│  │  │  └─ HOOK.md
│  │  ├─ bootstrap-extra-files/
│  │  │  ├─ handler.js
│  │  │  └─ HOOK.md
│  │  ├─ command-logger/
│  │  │  ├─ handler.js
│  │  │  └─ HOOK.md
│  │  └─ session-memory/
│  │     ├─ handler.js
│  │     └─ HOOK.md
│  ├─ canvas-host/
│  │  └─ a2ui/
│  │     ├─ .bundle.hash
│  │     ├─ a2ui.bundle.js
│  │     └─ index.html
│  ├─ channels/
│  │  └─ plugins/
│  │     ├─ actions/
│  │     │  ├─ discord.js
│  │     │  ├─ signal.js
│  │     │  └─ telegram.js
│  │     └─ agent-tools/
│  │        └─ whatsapp-login.js
│  ├─ cli/
│  │  └─ daemon-cli.js
│  ├─ control-ui/
│  │  ├─ assets/
│  │  │  ├─ agents-rwma6-X-.js
│  │  │  ├─ agents-rwma6-X-.js.map
│  │  │  ├─ channel-config-extras-BkKp7v9q.js
│  │  │  ├─ channel-config-extras-BkKp7v9q.js.map
│  │  │  ├─ channels-Bbakk9LE.js
│  │  │  ├─ channels-Bbakk9LE.js.map
│  │  │  ├─ cron-DuOogQHC.js
│  │  │  ├─ cron-DuOogQHC.js.map
│  │  │  ├─ de-DsUYX_4O.js
│  │  │  ├─ de-DsUYX_4O.js.map
│  │  │  ├─ debug-CiLlYZ-S.js
│  │  │  ├─ debug-CiLlYZ-S.js.map
│  │  │  ├─ es-CfX8169f.js
│  │  │  ├─ es-CfX8169f.js.map
│  │  │  ├─ index-DeSsJFAW.css
│  │  │  ├─ index-DjOBHasS.js
│  │  │  ├─ index-DjOBHasS.js.map
│  │  │  ├─ instances-sb7s87Sh.js
│  │  │  ├─ instances-sb7s87Sh.js.map
│  │  │  ├─ logs-DNyCjMBh.js
│  │  │  ├─ logs-DNyCjMBh.js.map
│  │  │  ├─ nodes-C0q4vFGf.js
│  │  │  ├─ nodes-C0q4vFGf.js.map
│  │  │  ├─ pt-BR-xXZ8jo2I.js
│  │  │  ├─ pt-BR-xXZ8jo2I.js.map
│  │  │  ├─ sessions-OPSFZyPj.js
│  │  │  ├─ sessions-OPSFZyPj.js.map
│  │  │  ├─ skills-CjUd2sts.js
│  │  │  ├─ skills-CjUd2sts.js.map
│  │  │  ├─ skills-shared-Dh9rvkdt.js
│  │  │  ├─ skills-shared-Dh9rvkdt.js.map
│  │  │  ├─ zh-CN-CBJTg_W3.js
│  │  │  ├─ zh-CN-CBJTg_W3.js.map
│  │  │  ├─ zh-TW-MqfLv9tS.js
│  │  │  └─ zh-TW-MqfLv9tS.js.map
│  │  ├─ apple-touch-icon.png
│  │  ├─ favicon-32.png
│  │  ├─ favicon.ico
│  │  ├─ favicon.svg
│  │  └─ index.html
│  ├─ line/
│  │  ├─ accounts.js
│  │  ├─ send.js
│  │  └─ template-messages.js
│  ├─ plugin-sdk/
│  │  ├─ account-id.js
│  │  ├─ accounts-BIidltpM.js
│  │  ├─ accounts-BNl0-Z3N.js
│  │  ├─ accounts-CvZF19rz.js
│  │  ├─ accounts-CyzJNHzs.js
│  │  ├─ accounts-kmMgjA3J.js
│  │  ├─ accounts-NNbKqJ28.js
│  │  ├─ acpx.js
│  │  ├─ active-listener-Bg8PMY2w.js
│  │  ├─ active-listener-BsFNa23B.js
│  │  ├─ api-key-rotation-Co002n7c.js
│  │  ├─ api-key-rotation-DI5CwKKT.js
│  │  ├─ audio-preflight-DKC9S1XO.js
│  │  ├─ audio-preflight-q6XtZKgK.js
│  │  ├─ audio-transcription-runner-DPHIa1Fo.js
│  │  ├─ audio-transcription-runner-sMdyVNlP.js
│  │  ├─ audit-membership-runtime-BBXYhQT1.js
│  │  ├─ audit-membership-runtime-BQOZA81p.js
│  │  ├─ bluebubbles.js
│  │  ├─ channel-activity-CUHJXg9V.js
│  │  ├─ channel-activity-CYFAQdid.js
│  │  ├─ channel-web-BfwUaeh6.js
│  │  ├─ channel-web-Df2rAcQX.js
│  │  ├─ chrome-BB7CQiQT.js
│  │  ├─ chrome-DMMos29X.js
│  │  ├─ command-poll-backoff-CMQInecI.js
│  │  ├─ command-poll-backoff-D4ZR4dPr.js
│  │  ├─ command-poll-backoff.runtime-BUbLmsTQ.js
│  │  ├─ command-poll-backoff.runtime-DdXVdzdI.js
│  │  ├─ commands-registry-BcoYPCsz.js
│  │  ├─ commands-registry-r1CUc5WH.js
│  │  ├─ common-wZxqzli_.js
│  │  ├─ compat.js
│  │  ├─ config-ChZqDS6X.js
│  │  ├─ config-YN-hHN4d.js
│  │  ├─ copilot-proxy.js
│  │  ├─ core.js
│  │  ├─ deliver-CvKXq-Re.js
│  │  ├─ deliver-gbSn3l74.js
│  │  ├─ deliver-runtime-BEjs5cik.js
│  │  ├─ deliver-runtime-BMNf2Qn1.js
│  │  ├─ deps-send-discord.runtime-CAe13kGl.js
│  │  ├─ deps-send-discord.runtime-Cg0fPbZl.js
│  │  ├─ deps-send-imessage.runtime-C94NpMmy.js
│  │  ├─ deps-send-imessage.runtime-CPCQNfqF.js
│  │  ├─ deps-send-signal.runtime-BX3lb4OU.js
│  │  ├─ deps-send-signal.runtime-n0KYBpXZ.js
│  │  ├─ deps-send-slack.runtime-DaAr3R5p.js
│  │  ├─ deps-send-slack.runtime-DOIEytlL.js
│  │  ├─ deps-send-telegram.runtime-Bo_9-po_.js
│  │  ├─ deps-send-telegram.runtime-c0UScHmU.js
│  │  ├─ deps-send-whatsapp.runtime-Bblgb6O5.js
│  │  ├─ deps-send-whatsapp.runtime-CK0KmuTR.js
│  │  ├─ device-pair.js
│  │  ├─ diagnostic-BZS1B-o9.js
│  │  ├─ diagnostic-C19Z_10P.js
│  │  ├─ diagnostics-otel.js
│  │  ├─ diffs.js
│  │  ├─ discord.js
│  │  ├─ errors-DP2BErLZ.js
│  │  ├─ errors-qNrP7yKK.js
│  │  ├─ feishu.js
│  │  ├─ fetch-Cy06AahD.js
│  │  ├─ fetch-CzhebCBG.js
│  │  ├─ fetch-guard-59F8K08t.js
│  │  ├─ fetch-guard-C1Zp8_I3.js
│  │  ├─ fetch-timeout-B_Wivh-n.js
│  │  ├─ fetch-timeout-BZzAoyap.js
│  │  ├─ fs-safe-7BUz7YI2.js
│  │  ├─ fs-safe-D18qO9vm.js
│  │  ├─ github-copilot-token-C8q4hDIm.js
│  │  ├─ github-copilot-token-N9Yy7V1a.js
│  │  ├─ google-gemini-cli-auth.js
│  │  ├─ googlechat.js
│  │  ├─ image-B6HNAu74.js
│  │  ├─ image-C_5FVvCn.js
│  │  ├─ image-ops-CZ4WcBGh.js
│  │  ├─ image-ops-DTol1-4Z.js
│  │  ├─ image-runtime-CR2yt86s.js
│  │  ├─ image-runtime-D0OckVyB.js
│  │  ├─ imessage.js
│  │  ├─ index.js
│  │  ├─ ir-CJCp1p4s.js
│  │  ├─ ir-CUZH5ggA.js
│  │  ├─ irc.js
│  │  ├─ json-files-Aie52U1w.js
│  │  ├─ json-files-Dhmud8Yn.js
│  │  ├─ keyed-async-queue.js
│  │  ├─ line.js
│  │  ├─ llm-task.js
│  │  ├─ load-options-CYmZWskt.js
│  │  ├─ load-options-DZ-XDKqT.js
│  │  ├─ lobster.js
│  │  ├─ local-roots-C1F9sWiV.js
│  │  ├─ local-roots-CenLrfCK.js
│  │  ├─ logger-CxTRqqI6.js
│  │  ├─ logger-fRdp2gns.js
│  │  ├─ login-DkY2FYOz.js
│  │  ├─ login-DLjC31v1.js
│  │  ├─ login-qr-C4v4SJQQ.js
│  │  ├─ login-qr-UdCdYF6H.js
│  │  ├─ manager-B-fXXLQX.js
│  │  ├─ manager-CfQYUHrF.js
│  │  ├─ manager-runtime-Cv5rRheg.js
│  │  ├─ manager-runtime-CvQ8A7dj.js
│  │  ├─ matrix.js
│  │  ├─ mattermost.js
│  │  ├─ memory-core.js
│  │  ├─ memory-lancedb.js
│  │  ├─ minimax-portal-auth.js
│  │  ├─ msteams.js
│  │  ├─ nextcloud-talk.js
│  │  ├─ nostr.js
│  │  ├─ open-prose.js
│  │  ├─ outbound-attachment-B_OVbbPV.js
│  │  ├─ outbound-attachment-CAYOixKb.js
│  │  ├─ outbound-BCmNGvQV.js
│  │  ├─ outbound-CCS0kZnw.js
│  │  ├─ path-alias-guards-C8JwvQKY.js
│  │  ├─ path-alias-guards-Cv32sFCP.js
│  │  ├─ paths-B7y0kIs4.js
│  │  ├─ paths-CljwcxR8.js
│  │  ├─ paths-D7qK4fQ2.js
│  │  ├─ paths-Dy1WwvWU.js
│  │  ├─ phone-control.js
│  │  ├─ pi-embedded-helpers-CAFZh_OP.js
│  │  ├─ pi-embedded-helpers-CMK_q1Z5.js
│  │  ├─ pi-model-discovery-By88WA4y.js
│  │  ├─ pi-model-discovery-C1lInPNo.js
│  │  ├─ pi-model-discovery-runtime-2U-3NAdc.js
│  │  ├─ pi-model-discovery-runtime-B3K68s9j.js
│  │  ├─ pi-tools.before-tool-call.runtime-BSOGk-b3.js
│  │  ├─ pi-tools.before-tool-call.runtime-C2eANggh.js
│  │  ├─ plugins-DJBVO68R.js
│  │  ├─ plugins-RdgnsQgX.js
│  │  ├─ polls-C2_UwDhD.js
│  │  ├─ polls-Ca4cBoA_.js
│  │  ├─ proxy-DNZXaj7f.js
│  │  ├─ proxy-env-DfgdLv5h.js
│  │  ├─ proxy-fetch-BG_O0d-A.js
│  │  ├─ proxy-fetch-DYgv-_Ao.js
│  │  ├─ proxy-hr3uCDTK.js
│  │  ├─ pw-ai-BMO9fFP2.js
│  │  ├─ pw-ai-kduAwtOs.js
│  │  ├─ qmd-manager-jGp6tVRe.js
│  │  ├─ qmd-manager-rlIyqg8A.js
│  │  ├─ query-expansion-BOaAhF_z.js
│  │  ├─ query-expansion-Q6P3Wa-_.js
│  │  ├─ qwen-portal-auth.js
│  │  ├─ redact-D4S-I3NR.js
│  │  ├─ redact-sX43fMV1.js
│  │  ├─ render-A563BsDG.js
│  │  ├─ render-BZdJrUxT.js
│  │  ├─ reply-5tHcV9BW.js
│  │  ├─ reply-BiAoVEey.js
│  │  ├─ resolve-outbound-target-BJf44Bb1.js
│  │  ├─ resolve-outbound-target-BWb7hDyJ.js
│  │  ├─ rolldown-runtime-Cbj13DAv.js
│  │  ├─ run-with-concurrency-D4u3H0yp.js
│  │  ├─ run-with-concurrency-Dfxzp5Ct.js
│  │  ├─ runtime-whatsapp-login.runtime-CGsVMbWM.js
│  │  ├─ runtime-whatsapp-login.runtime-Dire0OVb.js
│  │  ├─ runtime-whatsapp-outbound.runtime-D4SzhNhc.js
│  │  ├─ runtime-whatsapp-outbound.runtime-DF-jBN1r.js
│  │  ├─ secure-random-18hq3O1a.js
│  │  ├─ secure-random-B2UrD2xa.js
│  │  ├─ send-b8c4Dg83.js
│  │  ├─ send-BgNE4fjc.js
│  │  ├─ send-BS-Q_zDw.js
│  │  ├─ send-Cbh36Myo.js
│  │  ├─ send-D87BuUJB.js
│  │  ├─ send-DbTtN3Q7.js
│  │  ├─ send-DCW28ZjD.js
│  │  ├─ send-DG83vi6z.js
│  │  ├─ send-Dz7HSibD.js
│  │  ├─ send-SZ04hsxN.js
│  │  ├─ session-DDnDGsTJ.js
│  │  ├─ session-DL_gAN_p.js
│  │  ├─ signal.js
│  │  ├─ skill-commands-nW7574Gs.js
│  │  ├─ skill-commands-w7pg-4VQ.js
│  │  ├─ skills-DySat38m.js
│  │  ├─ skills-nBPues0b.js
│  │  ├─ slack.js
│  │  ├─ slash-commands.runtime-B6W8cC4s.js
│  │  ├─ slash-commands.runtime-zCfZRYlX.js
│  │  ├─ slash-dispatch.runtime-Bdzd0yHO.js
│  │  ├─ slash-dispatch.runtime-DMryOmnw.js
│  │  ├─ slash-skill-commands.runtime-C4Ve9reW.js
│  │  ├─ slash-skill-commands.runtime-CwDIncHG.js
│  │  ├─ ssrf-CCTPoAlZ.js
│  │  ├─ store-5OV3z2ZZ.js
│  │  ├─ store-DAGcvjsB.js
│  │  ├─ subagent-registry-runtime-C13TJF2n.js
│  │  ├─ subagent-registry-runtime-ZW9f2NJ6.js
│  │  ├─ synology-chat.js
│  │  ├─ tables-BKU--Ds1.js
│  │  ├─ tables-ZTBLDXMJ.js
│  │  ├─ talk-voice.js
│  │  ├─ target-errors-C2Xm_2gZ.js
│  │  ├─ targets-CExphG7Z.js
│  │  ├─ targets-D5glKwE4.js
│  │  ├─ targets-hp9k8jFG.js
│  │  ├─ telegram.js
│  │  ├─ test-utils.js
│  │  ├─ thinking-C4g1qVnL.js
│  │  ├─ thinking-DmRrHvgl.js
│  │  ├─ thread-ownership.js
│  │  ├─ tlon.js
│  │  ├─ tokens-B8h5wDOj.js
│  │  ├─ tokens-JbmbvbwV.js
│  │  ├─ tool-images-5nMXNFEt.js
│  │  ├─ tool-images-Dd3OykKO.js
│  │  ├─ transcript-events-CVLLUhfw.js
│  │  ├─ transcript-events-Dbj9lt_y.js
│  │  ├─ twitch.js
│  │  ├─ voice-call.js
│  │  ├─ web-BP-DgaR0.js
│  │  ├─ web-DDmIEiTx.js
│  │  ├─ whatsapp-actions-BU9ty3jL.js
│  │  ├─ whatsapp-actions-DS3fOOc-.js
│  │  ├─ whatsapp.js
│  │  ├─ windows-spawn-Cj9KShLj.js
│  │  ├─ windows-spawn-CjNYeBcQ.js
│  │  ├─ zalo.js
│  │  └─ zalouser.js
│  ├─ telegram/
│  │  ├─ audit.js
│  │  └─ token.js
│  ├─ account-helpers-BqSrsCej.js
│  ├─ account-id-JwW97xNZ.js
│  ├─ account-lookup-Dr1S5Vra.js
│  ├─ accounts-BBalHL6C.js
│  ├─ accounts-BMuunqOS.js
│  ├─ accounts-BqdEG4uZ.js
│  ├─ accounts-Bsch7QP-.js
│  ├─ accounts-C6TH9XWP.js
│  ├─ accounts-DEaNIE0Y.js
│  ├─ accounts-Dglo34gi.js
│  ├─ accounts-DIzTmwlw.js
│  ├─ accounts-DQj4GURA.js
│  ├─ accounts-EM_wndKQ.js
│  ├─ accounts-F1jmiu3k.js
│  ├─ accounts-XYaPUGjQ.js
│  ├─ accounts-YVXYUgbW.js
│  ├─ acp-cli-Btej4Z-k.js
│  ├─ acp-cli-Dge45nML.js
│  ├─ active-listener-B-4Luyck.js
│  ├─ active-listener-BJXkENgs.js
│  ├─ active-listener-Bqt7Nin0.js
│  ├─ active-listener-BuFW_Fjj.js
│  ├─ agent-scope-BE3kv-R7.js
│  ├─ agent-scope-Cezno7_M.js
│  ├─ agents-042AwnGK.js
│  ├─ agents.config-Dtl1H0ur.js
│  ├─ agents.config-qy8pqykh.js
│  ├─ allow-from-CeTt9ZgH.js
│  ├─ allow-from-Zvq5OS7N.js
│  ├─ api-B6LOM4h7.js
│  ├─ api-BkPDMdG2.js
│  ├─ api-key-rotation-8r2qLPG0.js
│  ├─ api-key-rotation-CTxgA2l5.js
│  ├─ api-key-rotation-DITIVPB-.js
│  ├─ api-key-rotation-Dx71n9BZ.js
│  ├─ audio-preflight-CP1qvlwK.js
│  ├─ audio-preflight-DKmBwwQX.js
│  ├─ audio-preflight-Dxqmw0rx.js
│  ├─ audio-preflight-KET4KCLz.js
│  ├─ audio-transcription-runner-CJ1wRRgC.js
│  ├─ audio-transcription-runner-DcPcg6CZ.js
│  ├─ audio-transcription-runner-DT6bkM7r.js
│  ├─ audio-transcription-runner-SX78CV-Z.js
│  ├─ audit-B-YcWl_a.js
│  ├─ audit-BsRvzHBF.js
│  ├─ audit-membership-runtime-B3mx3N_E.js
│  ├─ audit-membership-runtime-Bih9KQLf.js
│  ├─ audit-membership-runtime-BNoDbryd.js
│  ├─ audit-membership-runtime-DmiEMxmo.js
│  ├─ audit-membership-runtime-OVB11XM6.js
│  ├─ auth-BMztaCPk.js
│  ├─ auth-choice-BWF9fXiG.js
│  ├─ auth-choice-BYAMSfaV.js
│  ├─ auth-choice-DGX_Lfzc.js
│  ├─ auth-choice-DklkgXrT.js
│  ├─ auth-choice-options-CGmIbFIW.js
│  ├─ auth-choice-options-s91FlKzn.js
│  ├─ auth-choice-prompt-Dd7OSFuz.js
│  ├─ auth-choice-prompt-xyBPKfYw.js
│  ├─ auth-choice.apply-helpers-B6SfGhRy.js
│  ├─ auth-choice.apply-helpers-Bj-3SbHr.js
│  ├─ auth-hu-9ACWf.js
│  ├─ auth-mode-policy-OE2HtlHj.js
│  ├─ auth-mode-policy-tencwNHm.js
│  ├─ auth-profiles-BdePV0-r.js
│  ├─ auth-token-BNU-J6wI.js
│  ├─ auth-token-C9f0lkuZ.js
│  ├─ banner-TOb51hwE.js
│  ├─ bonjour-discovery-BGiS59Ip.js
│  ├─ bonjour-discovery-CZJYOmRn.js
│  ├─ boolean-C6Pbt2Ue.js
│  ├─ brew-20A2fctI.js
│  ├─ brew-KV30BfBF.js
│  ├─ browser-cli-BAkFAyi8.js
│  ├─ browser-cli-NWKcJH5U.js
│  ├─ build-info.json
│  ├─ call-aUpgoN4l.js
│  ├─ call-JBW3Buil.js
│  ├─ channel-account-context-CnXbzTH5.js
│  ├─ channel-account-context-DCTH3ys8.js
│  ├─ channel-activity-BXSPob-l.js
│  ├─ channel-activity-CANhQ-re.js
│  ├─ channel-activity-CgR9zt5v.js
│  ├─ channel-activity-Cw8y1OLZ.js
│  ├─ channel-activity-DUOy6BRw.js
│  ├─ channel-options-CK2GpNZf.js
│  ├─ channel-options-D8XnCIvm.js
│  ├─ channel-selection-CcBrVf8T.js
│  ├─ channel-selection-CccMG0Tp.js
│  ├─ channel-web-BEbZK4uZ.js
│  ├─ channel-web-DxvwCYf8.js
│  ├─ channels-cli-FD2Rbx8d.js
│  ├─ channels-cli-x4DRNlEQ.js
│  ├─ channels-status-issues-C3dLa1H5.js
│  ├─ channels-status-issues-Cqa-_BSS.js
│  ├─ chat-envelope-BUdriZB0.js
│  ├─ chat-envelope-DjXKeY_Z.js
│  ├─ chrome-Bz2gUvgd.js
│  ├─ chrome-Dfjg_rJX.js
│  ├─ chrome-DyWhDIHf.js
│  ├─ chrome-QjNPLobw.js
│  ├─ clack-prompter-sJ-THPG4.js
│  ├─ clack-prompter-xERNpNNL.js
│  ├─ clawbot-cli-C8Z4TtYr.js
│  ├─ clawbot-cli-giPQKgLi.js
│  ├─ cli-CACTD2KX.js
│  ├─ cli-DQG62HUb.js
│  ├─ cli-utils-CuyGL3rq.js
│  ├─ cli-utils-DWSfnwCw.js
│  ├─ client-BnLitgS6.js
│  ├─ client-DQKAOyEp.js
│  ├─ clipboard-DdaiNl_W.js
│  ├─ clipboard-isJYshqH.js
│  ├─ command-format-BUhchepc.js
│  ├─ command-format-CRiwV99s.js
│  ├─ command-options-BVmaCunF.js
│  ├─ command-options-CRqZtG5w.js
│  ├─ command-poll-backoff-B9ZBcWsD.js
│  ├─ command-poll-backoff-BdRYhnP1.js
│  ├─ command-poll-backoff-Bh5XEjG4.js
│  ├─ command-poll-backoff-Dphe1Cwx.js
│  ├─ command-poll-backoff.runtime-CPwjhzWp.js
│  ├─ command-poll-backoff.runtime-Cra3PvcR.js
│  ├─ command-poll-backoff.runtime-DRwgjWEw.js
│  ├─ command-poll-backoff.runtime-r9226fXR.js
│  ├─ command-registry-Dy6BLXI1.js
│  ├─ command-secret-targets-Boe3pbFR.js
│  ├─ command-secret-targets-CyCJrfAK.js
│  ├─ commands-CmZqo7n4.js
│  ├─ commands-registry-CGJIyP7h.js
│  ├─ commands-registry-CQmHLIG3.js
│  ├─ commands-registry-CwADREy-.js
│  ├─ commands-registry-TDYMvApx.js
│  ├─ commands-xbT4d8l4.js
│  ├─ compact-D2TPKBPm.js
│  ├─ completion-cli-BdP_tkMe.js
│  ├─ completion-cli-BJCGDKA6.js
│  ├─ config-CBhDjgJZ.js
│  ├─ config-cli-C_SZuXdI.js
│  ├─ config-cli-rzT0WjQj.js
│  ├─ config-CupunLfb.js
│  ├─ config-guard-KtK0sI2V.js
│  ├─ config-guard-lPIfGzQH.js
│  ├─ config-validation-CwJPEK2h.js
│  ├─ config-validation-DFvi0IA7.js
│  ├─ configure-BgW53i8L.js
│  ├─ configure-UkLYTl5v.js
│  ├─ constants-DeR4814t.js
│  ├─ constants-DKbO7hYq.js
│  ├─ context-window-guard-BB_38nqj.js
│  ├─ context-window-guard-DDl3zszn.js
│  ├─ control-ui-assets-BnptsKIb.js
│  ├─ control-ui-assets-CX1Lq4PF.js
│  ├─ core-root-CmA71BTT.js
│  ├─ core-root-CZmnNiKO.js
│  ├─ credentials-3Wh-1p2V.js
│  ├─ credentials-BbtUU3EU.js
│  ├─ cron-cli-B5OQiUg7.js
│  ├─ cron-cli-w_A3TUJO.js
│  ├─ daemon-cli-CO7AztkA.js
│  ├─ daemon-cli-DxsaQsrU.js
│  ├─ daemon-cli.js
│  ├─ daemon-install-B921KNpQ.js
│  ├─ daemon-install-Caq6hzdd.js
│  ├─ daemon-install-helpers-BtBBUjMU.js
│  ├─ daemon-install-helpers-Cmfugw9e.js
│  ├─ daemon-runtime-CMnbwryP.js
│  ├─ daemon-runtime-mYDSc4SR.js
│  ├─ dangerous-name-matching-DF0beqiy.js
│  ├─ dangerous-name-matching-J-SeKkxz.js
│  ├─ dangerous-tools-CcEHmNno.js
│  ├─ dangerous-tools-DXsoQGGg.js
│  ├─ deliver-C--9XY5l.js
│  ├─ deliver-CJZar1sI.js
│  ├─ deliver-mhQ_G0Bw.js
│  ├─ deliver-runtime-3PuhUnnT.js
│  ├─ deliver-runtime-B08E44_S.js
│  ├─ deliver-runtime-CIi1ymXX.js
│  ├─ deliver-runtime-hPTua6G1.js
│  ├─ deliver-sfEoPs-p.js
│  ├─ delivery-queue-BEhfSqnG.js
│  ├─ delivery-queue-BU5OeQMD.js
│  ├─ deps-send-discord.runtime-BcXxFnnP.js
│  ├─ deps-send-discord.runtime-Bgfu5s0a.js
│  ├─ deps-send-discord.runtime-CzkaPDGG.js
│  ├─ deps-send-discord.runtime-S_i3gkvt.js
│  ├─ deps-send-imessage.runtime-B3ZZFqp4.js
│  ├─ deps-send-imessage.runtime-BB4pkpLB.js
│  ├─ deps-send-imessage.runtime-hHY-tf-z.js
│  ├─ deps-send-imessage.runtime-SWoideg3.js
│  ├─ deps-send-signal.runtime-BahSKoiF.js
│  ├─ deps-send-signal.runtime-Bke5Hqeg.js
│  ├─ deps-send-signal.runtime-DpdB--pr.js
│  ├─ deps-send-signal.runtime-DrIpU4VA.js
│  ├─ deps-send-slack.runtime-COYRrhUV.js
│  ├─ deps-send-slack.runtime-Di9dDtEa.js
│  ├─ deps-send-slack.runtime-DJdG9paW.js
│  ├─ deps-send-slack.runtime-DQawTgTM.js
│  ├─ deps-send-telegram.runtime-BNXHUKlV.js
│  ├─ deps-send-telegram.runtime-CTkXOein.js
│  ├─ deps-send-telegram.runtime-DZwzIBTx.js
│  ├─ deps-send-telegram.runtime-kmeq6zJJ.js
│  ├─ deps-send-whatsapp.runtime-BGvTa4Se.js
│  ├─ deps-send-whatsapp.runtime-C5eRkQIg.js
│  ├─ deps-send-whatsapp.runtime-Cbg1AlUM.js
│  ├─ deps-send-whatsapp.runtime-IIZnoXT6.js
│  ├─ devices-cli-CzQcuwYe.js
│  ├─ devices-cli-Ds7z01FX.js
│  ├─ diagnostic-c8UUaof0.js
│  ├─ diagnostic-D1VX4Nlz.js
│  ├─ diagnostic-mT-9LS8P.js
│  ├─ diagnostic-Tfe2uPwY.js
│  ├─ diagnostics-Byi3Go0p.js
│  ├─ diagnostics-Ccf10LdH.js
│  ├─ directory-cli-BAyfPN-g.js
│  ├─ directory-cli-Cjl7D5HT.js
│  ├─ dns-cli-BnzAeOUT.js
│  ├─ dns-cli-CKTYtcDa.js
│  ├─ dock-MGfYkqVd.js
│  ├─ dock-UaydaggJ.js
│  ├─ docs-cli-BrrUfhZh.js
│  ├─ docs-cli-CsCjnDUT.js
│  ├─ doctor-completion-beV-rYX_.js
│  ├─ doctor-completion-DwMmiM_I.js
│  ├─ doctor-config-flow-CBv9OhCi.js
│  ├─ doctor-config-flow-plq-7sc4.js
│  ├─ enable-CKOt78KR.js
│  ├─ enable-FzOQQQJK.js
│  ├─ entry-status-B4rI3w4G.js
│  ├─ entry-status-DnHKH7yX.js
│  ├─ entry.js
│  ├─ env-D3eA4r2n.js
│  ├─ errors-CaQu6hjT.js
│  ├─ errors-D2aogITB.js
│  ├─ errors-DAcI6n_m.js
│  ├─ errors-DtMXuwMd.js
│  ├─ exec-approvals-allowlist-D2DgRwoK.js
│  ├─ exec-approvals-allowlist-DmZNLUcm.js
│  ├─ exec-approvals-B2nfDOCa.js
│  ├─ exec-approvals-C8Ra1A3C.js
│  ├─ exec-approvals-cli-B-b6ym1Z.js
│  ├─ exec-approvals-cli-CM-kga87.js
│  ├─ exec-Bvzmovpq.js
│  ├─ exec-CaapFZaD.js
│  ├─ exec-safe-bin-runtime-policy-DCxVTCZD.js
│  ├─ exec-safe-bin-runtime-policy-GljZvsR-.js
│  ├─ extensionAPI.js
│  ├─ fetch-1d1K1Sbw.js
│  ├─ fetch-BAzGA01Q.js
│  ├─ fetch-C_5TvvU5.js
│  ├─ fetch-EzjTrfz-.js
│  ├─ fetch-guard-8JvaFYP-.js
│  ├─ fetch-guard-CS9Fhach.js
│  ├─ fetch-guard-DJDpdYwe.js
│  ├─ fetch-guard-DrcZZ19C.js
│  ├─ fetch-h3daHZqj.js
│  ├─ fetch-MguOSqpo.js
│  ├─ fetch-timeout-B8G1gNsB.js
│  ├─ fetch-timeout-Bghlv-lk.js
│  ├─ fetch-timeout-BshLAVgx.js
│  ├─ fetch-timeout-CSL6-58b.js
│  ├─ fetch-timeout-Dtlf2N0l.js
│  ├─ fetch-yR79-XZc.js
│  ├─ format-BA34aCFd.js
│  ├─ format-CTmea3zf.js
│  ├─ format-duration-BUg_QUd4.js
│  ├─ format-duration-CpprnllM.js
│  ├─ format-relative-8dpVUfzZ.js
│  ├─ format-relative-BXoxEQVN.js
│  ├─ frontmatter-B5GM2mXS.js
│  ├─ frontmatter-BqvyjOGD.js
│  ├─ frontmatter-wvk5Gwyc.js
│  ├─ fs-safe-BsF5hBZf.js
│  ├─ fs-safe-DLFU_2Jt.js
│  ├─ fs-safe-Dr-lapsz.js
│  ├─ fs-safe-qdP8sV7U.js
│  ├─ gateway-cli-CDG_3RUn.js
│  ├─ gateway-cli-DmWmYY6Z.js
│  ├─ gateway-install-token-MYZ16nPh.js
│  ├─ gateway-install-token-odCwN17h.js
│  ├─ gateway-rpc-BjNeq-Ht.js
│  ├─ gateway-rpc-DPMqrhWT.js
│  ├─ github-copilot-token-DG2sYnVk.js
│  ├─ github-copilot-token-DHTToceK.js
│  ├─ github-copilot-token-DqwKrrmK.js
│  ├─ github-copilot-token-y2JyCRga.js
│  ├─ globals-o4Hkf2nH.js
│  ├─ gmail-setup-utils-Bwm8nlMC.js
│  ├─ gmail-setup-utils-CHcnAIQh.js
│  ├─ health-BLZ94CHj.js
│  ├─ health-DA0mdEV_.js
│  ├─ health-format-BM1-cBqH.js
│  ├─ health-format-DxMIKtVr.js
│  ├─ heartbeat-visibility-C-JNqmyd.js
│  ├─ heartbeat-visibility-Dxc5AXit.js
│  ├─ help-format-BuSfnjUn.js
│  ├─ help-format-Cwn7EEhh.js
│  ├─ helpers-BT0Wvz1d.js
│  ├─ helpers-CAHQ-4Mb.js
│  ├─ helpers-DHkLEWKI.js
│  ├─ helpers-DYN-5CJP.js
│  ├─ hooks-cli-1w6Bh2YA.js
│  ├─ hooks-cli-ClFEe5wT.js
│  ├─ hooks-status-_AzhGlTw.js
│  ├─ hooks-status-DrZ2LLAf.js
│  ├─ image-C8p6zLSO.js
│  ├─ image-CUhVX6bB.js
│  ├─ image-HnAtzDrm.js
│  ├─ image-ops-CN-Dyog0.js
│  ├─ image-ops-DH8guWTZ.js
│  ├─ image-ops-DxLQocoR.js
│  ├─ image-ops-fESsiiVK.js
│  ├─ image-runtime-9S_VffeM.js
│  ├─ image-runtime-BdCqsowO.js
│  ├─ image-runtime-BHodUERf.js
│  ├─ image-runtime-soTNcGDd.js
│  ├─ image-z5pEBz3c.js
│  ├─ index.js
│  ├─ input-provenance-CPCyYP4I.js
│  ├─ input-provenance-CrQfrobW.js
│  ├─ inspect-D3otXLFE.js
│  ├─ inspect-DF3OO1cz.js
│  ├─ install-safe-path-BgP-Lt6B.js
│  ├─ install-safe-path-C0tRyCvs.js
│  ├─ installs-_DVKes3h.js
│  ├─ installs-uGlrdGBP.js
│  ├─ ipv4-_UNa_qI-.js
│  ├─ ipv4-CZVC6cIr.js
│  ├─ ir-D40-DmHq.js
│  ├─ ir-D4dX9qgW.js
│  ├─ ir-DiGZ6qg4.js
│  ├─ ir-Gp9Tjs0b.js
│  ├─ is-main-KU6jxc5L.js
│  ├─ issue-format-rNN2hCUU.js
│  ├─ issue-format-yORkr17O.js
│  ├─ json-files-C7p5SEie.js
│  ├─ json-files-CPI39eGk.js
│  ├─ json-files-D2dc4Wmw.js
│  ├─ json-files-Gz2v23hw.js
│  ├─ kill-tree-D_cyH_T3.js
│  ├─ kill-tree-DpnY0UEb.js
│  ├─ legacy-names-B22TPnKt.js
│  ├─ legacy-names-DEoEk9jn.js
│  ├─ legacy-names-DZQP0LKp.js
│  ├─ lifecycle-core-CDdAVwhN.js
│  ├─ lifecycle-core-Xi9Xq8AT.js
│  ├─ links-C87Xouo6.js
│  ├─ links-DRjWcKgy.js
│  ├─ llm-slug-generator.js
│  ├─ load-options-BDl1-EZ9.js
│  ├─ load-options-Dh_7Dk4j.js
│  ├─ load-options-RC5CVNKb.js
│  ├─ load-options-rTYeyI1k.js
│  ├─ local-roots-CoVMnwcA.js
│  ├─ logger-B4_TThxB.js
│  ├─ logger-BcqRk323.js
│  ├─ logger-CMXU2lzj.js
│  ├─ logger-n2Gpq0AH.js
│  ├─ logging-DUBdyhZC.js
│  ├─ logging-DW8_VTnZ.js
│  ├─ logging-JZEg5nDp.js
│  ├─ logging-w5jq5901.js
│  ├─ login-CTLU6OWU.js
│  ├─ login-D7nBUhZM.js
│  ├─ login-DcvEcOm6.js
│  ├─ login-Dk0NZYwK.js
│  ├─ login-qr-B7bLrK--.js
│  ├─ login-qr-BpLTOKmW.js
│  ├─ login-qr-CQcw6p6e.js
│  ├─ login-qr-D4hkn-8O.js
│  ├─ login-qr-DEqzTV4J.js
│  ├─ logs-cli-DEscw8MZ.js
│  ├─ logs-cli-DqX9UQnd.js
│  ├─ manager--E3O4LWU.js
│  ├─ manager-C2p3pStB.js
│  ├─ manager-CpxJSAQz.js
│  ├─ manager-CUp2sqGU.js
│  ├─ manager-runtime-BLq1EXFW.js
│  ├─ manager-runtime-DvZ3xtdZ.js
│  ├─ manager-runtime-DWdkgnC1.js
│  ├─ manager-runtime-N4aCgrBT.js
│  ├─ manifest-registry-DdFBL-mx.js
│  ├─ manifest-registry-POcl_9v5.js
│  ├─ memory-cli-BHPsApv-.js
│  ├─ memory-cli-DDkhHjE-.js
│  ├─ message-channel-B7if8_Ss.js
│  ├─ message-channel-DelDwlJy.js
│  ├─ model-catalog-8aLzXgeX.js
│  ├─ model-catalog-BCcVY6SX.js
│  ├─ model-param-b-CMJBkHox.js
│  ├─ model-param-b-CrBJZsiI.js
│  ├─ model-picker-CEFhny3_.js
│  ├─ model-picker-CEhHBpRN.js
│  ├─ model-selection-C3zcUDCR.js
│  ├─ model-selection-Cqpzy7LB.js
│  ├─ model-selection-wPq_-8A-.js
│  ├─ models-BwcbJSbv.js
│  ├─ models-cli-DUZL_LQh.js
│  ├─ models-cli-zH-dIir2.js
│  ├─ models-config-904DOx1w.js
│  ├─ models-config-C4Bgwd3r.js
│  ├─ mutable-allowlist-detectors-7oJa2b5V.js
│  ├─ mutable-allowlist-detectors-C7fvoibT.js
│  ├─ node-cli-D7irEghM.js
│  ├─ node-cli-RgPjVSZV.js
│  ├─ node-command-policy-B1XU3f0L.js
│  ├─ node-command-policy-BYigcCfg.js
│  ├─ node-commands-976aGzqS.js
│  ├─ node-commands-Fl5znfxA.js
│  ├─ node-resolve-BcqR8Gpg.js
│  ├─ node-resolve-D6gGiiv2.js
│  ├─ node-service-Cw1VEpm6.js
│  ├─ node-service-l5GvbU9u.js
│  ├─ nodes-cli-BJ4Oo9Yx.js
│  ├─ nodes-cli-DbCpLJ_1.js
│  ├─ nodes-screen-Cl-pnRKn.js
│  ├─ nodes-screen-CQEV8zDD.js
│  ├─ note-BUcnHAZz.js
│  ├─ note-BxgUVS4k.js
│  ├─ npm-pack-install-CT0StISY.js
│  ├─ npm-pack-install-DhQLXOOC.js
│  ├─ npm-resolution-BMEjdUYx.js
│  ├─ npm-resolution-DI0RYZw5.js
│  ├─ oauth-env-BboBF1zT.js
│  ├─ oauth-env-D1DAFZqN.js
│  ├─ oauth-tls-preflight-BPApzpql.js
│  ├─ oauth-tls-preflight-Ds-yenf5.js
│  ├─ ollama-setup-CjKR1rlO.js
│  ├─ ollama-setup-Dzn990VC.js
│  ├─ onboard-asi-qyqU.js
│  ├─ onboard-channels-BZH3HXCs.js
│  ├─ onboard-channels-DWLRUnns.js
│  ├─ onboard-config-B26TTAWf.js
│  ├─ onboard-config-C0pbcxsR.js
│  ├─ onboard-custom-BsGLvF_T.js
│  ├─ onboard-custom-CSVRXGGU.js
│  ├─ onboard-DUUxe7wk.js
│  ├─ onboard-helpers-BBacl5Ve.js
│  ├─ onboard-helpers-BoHsfj-h.js
│  ├─ onboard-hooks-D0qYLys5.js
│  ├─ onboard-hooks-D7m-hzO_.js
│  ├─ onboard-provider-auth-flags-BhguRz5V.js
│  ├─ onboard-provider-auth-flags-BTK_m1tY.js
│  ├─ onboard-remote-BAY2rGFY.js
│  ├─ onboard-remote-CMf4QV78.js
│  ├─ onboard-skills-CcTjeegG.js
│  ├─ onboard-skills-DNC4uuqX.js
│  ├─ onboarding-BgysLzPL.js
│  ├─ onboarding-YJwjP08H.js
│  ├─ onboarding.finalize-CtRvv0jr.js
│  ├─ onboarding.finalize-D10066Gr.js
│  ├─ onboarding.gateway-config-DY7aCM1y.js
│  ├─ onboarding.gateway-config-o2sVj45C.js
│  ├─ onboarding.secret-input-BJiaJQby.js
│  ├─ onboarding.secret-input-ea4xjj4G.js
│  ├─ openai-codex-model-default-C9d2-i9w.js
│  ├─ openai-codex-model-default-DSiHIhuK.js
│  ├─ openai-model-default-CxmoOb9r.js
│  ├─ openai-model-default-hPhKlREu.js
│  ├─ outbound-attachment-BMYe4Nit.js
│  ├─ outbound-attachment-COTVaukx.js
│  ├─ outbound-attachment-CvGu0Bue.js
│  ├─ outbound-attachment-DPALF87R.js
│  ├─ outbound-BycGDtxU.js
│  ├─ outbound-Cr_yPuR7.js
│  ├─ outbound-DkpGrM29.js
│  ├─ outbound-DW4Mx3L9.js
│  ├─ pairing-cli-B7NGgyEI.js
│  ├─ pairing-cli-DGmemQqq.js
│  ├─ pairing-labels-BBhPX8M_.js
│  ├─ pairing-labels-DI-34A3d.js
│  ├─ pairing-store-D1xridcb.js
│  ├─ pairing-store-DBYwpB-R.js
│  ├─ pairing-token-01jjmach.js
│  ├─ pairing-token-BbiCPOiP.js
│  ├─ parse-log-line-BrrE4onI.js
│  ├─ parse-log-line-C2bNfwG3.js
│  ├─ parse-port-CJyaQqbX.js
│  ├─ parse-port-CzTewNTY.js
│  ├─ parse-timeout-DhzruDDW.js
│  ├─ parse-timeout-widuTpq9.js
│  ├─ path-alias-guards-Bj2dz01O.js
│  ├─ path-alias-guards-C5g_bJHv.js
│  ├─ path-alias-guards-CNxRjVah.js
│  ├─ path-alias-guards-CVSO8ytB.js
│  ├─ path-env-BV14fVCJ.js
│  ├─ path-env-DjSEbJ4L.js
│  ├─ path-safety-ClRyk2nd.js
│  ├─ path-safety-DWsvfaoN.js
│  ├─ paths-BANciGCS.js
│  ├─ paths-BDDFj5Fw.js
│  ├─ paths-C5zPqp7F.js
│  ├─ paths-Ci0O5IXU.js
│  ├─ paths-CKi-ndjc.js
│  ├─ paths-COzEpwhO.js
│  ├─ paths-DiVFtCJv.js
│  ├─ paths-DyjDYWsu.js
│  ├─ paths-y4sJOBPW.js
│  ├─ pi-embedded-D-kQDxKC.js
│  ├─ pi-embedded-DTCGn_2V.js
│  ├─ pi-embedded-helpers-Bwd1_tI5.js
│  ├─ pi-embedded-helpers-CoUQ5bCn.js
│  ├─ pi-embedded-helpers-DFaSuOdL.js
│  ├─ pi-embedded-helpers-yOWw1sGr.js
│  ├─ pi-model-discovery-2wmGx6H9.js
│  ├─ pi-model-discovery-BzacNcXY.js
│  ├─ pi-model-discovery-C8Uh55Cj.js
│  ├─ pi-model-discovery-D0fzT5e1.js
│  ├─ pi-model-discovery-runtime-Cs3R-Hv-.js
│  ├─ pi-model-discovery-runtime-dSoH7R0I.js
│  ├─ pi-model-discovery-runtime-DT3vlrJW.js
│  ├─ pi-model-discovery-runtime-Dx_xBorM.js
│  ├─ pi-tools.before-tool-call.runtime-36GIh_ux.js
│  ├─ pi-tools.before-tool-call.runtime-BDzRLMoo.js
│  ├─ pi-tools.before-tool-call.runtime-Dv1qoQ0j.js
│  ├─ pi-tools.before-tool-call.runtime-Dx6wH3gj.js
│  ├─ pi-tools.policy-CmDy7rLl.js
│  ├─ plugin-auto-enable-BcWyql3_.js
│  ├─ plugin-auto-enable-D1xR139u.js
│  ├─ plugin-registry-E1cgnySz.js
│  ├─ plugin-registry-pv8sGE0Z.js
│  ├─ plugins-BI4Svrw8.js
│  ├─ plugins-BnE7x7eK.js
│  ├─ plugins-cli-B6WthUDg.js
│  ├─ plugins-cli-DIDcgGsp.js
│  ├─ plugins-D7VGnP8X.js
│  ├─ plugins-LSd5-wtp.js
│  ├─ polls-B14l2NGQ.js
│  ├─ polls-BzvxJZsC.js
│  ├─ polls-DurzLS25.js
│  ├─ polls-u7_-ozLV.js
│  ├─ ports-Cbdv5_Vq.js
│  ├─ ports-D8nInYfq.js
│  ├─ ports-DkCplam9.js
│  ├─ ports-HPItCXON.js
│  ├─ probe-BADJxozg.js
│  ├─ probe-DpIzIwFw.js
│  ├─ program-context-COiVfSLD.js
│  ├─ program-context-D0mpNLn5.js
│  ├─ program-Dp7BvM-d.js
│  ├─ progress-CSvLovC9.js
│  ├─ progress-DiO7soys.js
│  ├─ prompt-select-styled-D-lkaomk.js
│  ├─ prompt-select-styled-DodGTLkK.js
│  ├─ prompt-style-Bi8LEJM5.js
│  ├─ prompt-style-C3CFmIhm.js
│  ├─ prompts-B1yi9mCM.js
│  ├─ prompts-D3It0LQu.js
│  ├─ provider-auth-helpers-D1088TD7.js
│  ├─ provider-auth-helpers-WolvfF5q.js
│  ├─ provider-env-vars-D4N6bAU7.js
│  ├─ provider-env-vars-Dq0wYGo6.js
│  ├─ proxy-CxX0Fl2x.js
│  ├─ proxy-Dgwoliym.js
│  ├─ proxy-DNZXaj7f.js
│  ├─ proxy-DULbDMaI.js
│  ├─ proxy-env-Bi0PoOsW.js
│  ├─ proxy-env-DbeUYzcp.js
│  ├─ proxy-env-DeuL1E-R.js
│  ├─ proxy-env-DvSrlNfM.js
│  ├─ proxy-fetch-1Erku4sd.js
│  ├─ proxy-fetch-D8ON61si.js
│  ├─ proxy-fetch-p_6D326r.js
│  ├─ proxy-fetch-TWpl-yhl.js
│  ├─ proxy-j8BltAEx.js
│  ├─ push-apns-CCC2ajaI.js
│  ├─ push-apns-CxZDBrQS.js
│  ├─ pw-ai-BP748DRD.js
│  ├─ pw-ai-DzXX2I1K.js
│  ├─ pw-ai-Eov2pXpg.js
│  ├─ pw-ai-YnoSPN2G.js
│  ├─ qmd-manager-BizN656V.js
│  ├─ qmd-manager-CD5dKUpO.js
│  ├─ qmd-manager-CjOMzPWS.js
│  ├─ qmd-manager-D8WOolC0.js
│  ├─ qr-cli-6x8wG9T0.js
│  ├─ qr-cli-BCjRryWR.js
│  ├─ query-expansion-Cst5aqAq.js
│  ├─ query-expansion-DSXtYSpj.js
│  ├─ query-expansion-QJ9XWql0.js
│  ├─ reaction-message-id-C0lr_xna.js
│  ├─ read-only-account-inspect-JuqUrxQx.js
│  ├─ redact-Asry9UBT.js
│  ├─ redact-CC_d52A1.js
│  ├─ redact-Dta3ii7t.js
│  ├─ redact-Nl4LWTUL.js
│  ├─ redact-snapshot-2NqE3VKC.js
│  ├─ redact-snapshot-DhaWATXv.js
│  ├─ register.agent-CJGzy_T9.js
│  ├─ register.agent-D8VnECgL.js
│  ├─ register.configure-CTUwWquB.js
│  ├─ register.configure-MKJaIlJQ.js
│  ├─ register.maintenance-BsfbNcfj.js
│  ├─ register.maintenance-DpZvnqUp.js
│  ├─ register.message-BDLNJrBp.js
│  ├─ register.message-DjUa4BxN.js
│  ├─ register.onboard-BSOo2nrC.js
│  ├─ register.onboard-UpE9q33O.js
│  ├─ register.setup-BbJIPuBr.js
│  ├─ register.setup-DV5c6m8-.js
│  ├─ register.status-health-sessions-Bq2TZyOs.js
│  ├─ register.status-health-sessions-C6BkhuH9.js
│  ├─ register.subclis-DiOOcflr.js
│  ├─ registry-CBFkaKwt.js
│  ├─ registry-CZfQ-snX.js
│  ├─ render-95l30zcf.js
│  ├─ render-BRr7caFG.js
│  ├─ render-C9LkRUhd.js
│  ├─ render-CUAKPmvZ.js
│  ├─ reply-CQV03vP4.js
│  ├─ resolve-configured-secret-input-string-D0cQTHRk.js
│  ├─ resolve-configured-secret-input-string-tRO0Em5V.js
│  ├─ rolldown-runtime-Cbj13DAv.js
│  ├─ rpc-CaAQDr3M.js
│  ├─ rpc-D6XGBNqL.js
│  ├─ run-main-Cm1JDeUo.js
│  ├─ run-with-concurrency-C3sn1gEK.js
│  ├─ run-with-concurrency-CEV6qf-x.js
│  ├─ run-with-concurrency-CfVwrq0X.js
│  ├─ run-with-concurrency-KRm2JLiI.js
│  ├─ runtime-BmG-7WAJ.js
│  ├─ runtime-config-collectors-6RHMxaPw.js
│  ├─ runtime-config-collectors-D_u7T2wA.js
│  ├─ runtime-guard-DRPIdCHk.js
│  ├─ runtime-guard-kCSrmbox.js
│  ├─ runtime-q69hvaGa.js
│  ├─ runtime-status-CcDMsddE.js
│  ├─ runtime-status-HRho5EYb.js
│  ├─ runtime-whatsapp-login.runtime-c6Jf8Oc9.js
│  ├─ runtime-whatsapp-login.runtime-CdRbtXEH.js
│  ├─ runtime-whatsapp-login.runtime-CrkFY1g5.js
│  ├─ runtime-whatsapp-login.runtime-DdZk-TAB.js
│  ├─ runtime-whatsapp-outbound.runtime-Brsh5MmR.js
│  ├─ runtime-whatsapp-outbound.runtime-D2Luqz0t.js
│  ├─ runtime-whatsapp-outbound.runtime-DKW2-7pN.js
│  ├─ runtime-whatsapp-outbound.runtime-ZXL2P2ko.js
│  ├─ sandbox-cli-CcCxWoIG.js
│  ├─ sandbox-cli-SrF4MXy8.js
│  ├─ sandbox-DX-H4kpF.js
│  ├─ sandbox-gv66G0EY.js
│  ├─ secret-equal-CDUVxXmp.js
│  ├─ secret-equal-DgMIVT4d.js
│  ├─ secrets-cli-Dlr44tMG.js
│  ├─ secrets-cli-z_0xSwnF.js
│  ├─ secure-random-Behs0EjU.js
│  ├─ secure-random-BEYczWtd.js
│  ├─ secure-random-CAcbtr_w.js
│  ├─ secure-random-CruxVpoI.js
│  ├─ secure-random-MmeD9IFa.js
│  ├─ security-cli-BBiSXz1x.js
│  ├─ security-cli-ve19q8sK.js
│  ├─ send-B2-Y1C-H.js
│  ├─ send-B3J95a9l.js
│  ├─ send-BL-qtt9K.js
│  ├─ send-BMLbokAq.js
│  ├─ send-BSI-2RDf.js
│  ├─ send-C8F_kZp1.js
│  ├─ send-CIPk3QXg.js
│  ├─ send-CPFVkPk4.js
│  ├─ send-CR0TgNqu.js
│  ├─ send-Cu7lHyl6.js
│  ├─ send-D2zofTLX.js
│  ├─ send-DCyLNjTT.js
│  ├─ send-DflfHTGj.js
│  ├─ send-DgQvjhQ6.js
│  ├─ send-DrEWdpM8.js
│  ├─ send-Dyvhynki.js
│  ├─ send-mc5lagxa.js
│  ├─ send-pJxwAOYf.js
│  ├─ send-Y-bvS1rZ.js
│  ├─ send-zcl8oSkb.js
│  ├─ server-context-BAAAr75D.js
│  ├─ server-context-WeR06Xyp.js
│  ├─ server-DwyLDG8F.js
│  ├─ server-lifecycle-CCCOKprs.js
│  ├─ server-lifecycle-CZ7IbB7Z.js
│  ├─ server-LU7iXQQc.js
│  ├─ server-middleware-B18l8CQy.js
│  ├─ server-middleware-CvnElqLG.js
│  ├─ server-node-events-b-87RZia.js
│  ├─ server-node-events-CoOu3x3j.js
│  ├─ service-BepYSS9U.js
│  ├─ service-Bew1C9AA.js
│  ├─ session-BLuHYBwg.js
│  ├─ session-C4t1nt0A.js
│  ├─ session-C9UGFOTO.js
│  ├─ session-cost-usage-qv_Px0s6.js
│  ├─ session-cost-usage-WqkA7nWJ.js
│  ├─ session-CQTTpGzn.js
│  ├─ session-key-9-yI-GU_.js
│  ├─ session-key-CIXZm7v4.js
│  ├─ session-utils-DoUUInkO.js
│  ├─ sessions-0EOALgZ-.js
│  ├─ sessions-CzqZa58X.js
│  ├─ sessions-Dtov6UKL.js
│  ├─ shared-AaHhK1Rj.js
│  ├─ shared-CDKsKgeN.js
│  ├─ shared-DHBKJ8gr.js
│  ├─ skill-commands-bjH1WLTk.js
│  ├─ skill-commands-CAUtzhWZ.js
│  ├─ skill-commands-CzznXL04.js
│  ├─ skill-commands-LC37tR21.js
│  ├─ skill-scanner-Bb6LWuTZ.js
│  ├─ skill-scanner-rXTaspKl.js
│  ├─ skills-C2MKKqJO.js
│  ├─ skills-CE-unP39.js
│  ├─ skills-cli-DUQXf1cH.js
│  ├─ skills-cli-gLNBqNGW.js
│  ├─ skills-DmBDW6y-.js
│  ├─ skills-DNwFCgnJ.js
│  ├─ skills-install--VBw7o9u.js
│  ├─ skills-install-D-WzkHR5.js
│  ├─ skills-status-B-UB-O32.js
│  ├─ skills-status-CWMXFEJp.js
│  ├─ slash-commands.runtime-BNFYpTLm.js
│  ├─ slash-commands.runtime-CcFWIxtT.js
│  ├─ slash-commands.runtime-Cp1IuhT2.js
│  ├─ slash-commands.runtime-V0EO0Q_6.js
│  ├─ slash-dispatch.runtime-ByYU9Jmo.js
│  ├─ slash-dispatch.runtime-DxlVCWjJ.js
│  ├─ slash-dispatch.runtime-DYhdh_bD.js
│  ├─ slash-dispatch.runtime-NhYEw2Va.js
│  ├─ slash-skill-commands.runtime-B5G_NwXM.js
│  ├─ slash-skill-commands.runtime-Ci3QmE1g.js
│  ├─ slash-skill-commands.runtime-DvcYzotd.js
│  ├─ slash-skill-commands.runtime-vLw4teFW.js
│  ├─ sqlite-BkaDx2XJ.js
│  ├─ stagger-C4U8O7GM.js
│  ├─ stagger-F4n43mMH.js
│  ├─ status-5YI2q9Pm.js
│  ├─ status-CkUcHeVu.js
│  ├─ status-O3GddBL4.js
│  ├─ status-WgXOUcxz.js
│  ├─ status.update-0rJSNjPP.js
│  ├─ status.update-JDxp5SY-.js
│  ├─ store-B5eeaWQa.js
│  ├─ store-DIAL62TM.js
│  ├─ store-PrEE6zbY.js
│  ├─ store-wFhXFlwH.js
│  ├─ subagent-registry-runtime-BnVqVKsA.js
│  ├─ subagent-registry-runtime-DWz5vhZm.js
│  ├─ subagent-registry-runtime-jBu2N1qk.js
│  ├─ subagent-registry-runtime-xM4koRgn.js
│  ├─ subsystem-CgTeEziN.js
│  ├─ subsystem-CocLsF9M.js
│  ├─ system-cli-BuHn2m9u.js
│  ├─ system-cli-DDEfAUNP.js
│  ├─ system-run-command-B8L8HYui.js
│  ├─ system-run-command-CNViRziV.js
│  ├─ systemd-CfCex-1t.js
│  ├─ systemd-hints-DJ1pK2H6.js
│  ├─ systemd-hints-N8iISgPk.js
│  ├─ systemd-linger-CU10x_7c.js
│  ├─ systemd-linger-DNH6yR1i.js
│  ├─ systemd-Sa3xjs6z.js
│  ├─ table-1Y5hIMzl.js
│  ├─ table-ClJ8xIil.js
│  ├─ tables-CF3NVOdF.js
│  ├─ tables-D7oXE3m6.js
│  ├─ tables-Djxjy89f.js
│  ├─ tables-Dn3HOzH4.js
│  ├─ tailnet-CJaJ78yK.js
│  ├─ tailnet-DjNXG4QF.js
│  ├─ tailscale-5K9XNlhO.js
│  ├─ tailscale-BxdRBeK_.js
│  ├─ target-errors-B2L0mI2Y.js
│  ├─ target-errors-Ci3M951J.js
│  ├─ target-errors-CmVO3000.js
│  ├─ target-errors-DLi9GaL3.js
│  ├─ targets-B5BJmNgG.js
│  ├─ targets-Bjh8Ncy8.js
│  ├─ targets-CR9eYOQy.js
│  ├─ targets-DFlXO5Ps.js
│  ├─ targets-DrCSoQkm.js
│  ├─ targets-Li6U9bGq.js
│  ├─ targets-PrHL3e-f.js
│  ├─ targets-xSi-e-_L.js
│  ├─ text-format-BDPmowJY.js
│  ├─ text-format-zL4BWx_P.js
│  ├─ thinking-BPXIDp0x.js
│  ├─ thinking-BYXvmTqG.js
│  ├─ thinking-D4XhM4vb.js
│  ├─ thinking-Fqckw03T.js
│  ├─ timeouts-3s3tygPw.js
│  ├─ timeouts-BNjB4b5v.js
│  ├─ tokens-CQyDX0_9.js
│  ├─ tokens-czQj3CIQ.js
│  ├─ tokens-DDwNxggx.js
│  ├─ tokens-RCFQ-amj.js
│  ├─ tool-catalog-7XRC3klR.js
│  ├─ tool-catalog-DwAGTRaX.js
│  ├─ tool-display-B_FNOYTS.js
│  ├─ tool-display-DtW9AC9y.js
│  ├─ tool-images-BFTxrbJe.js
│  ├─ tool-images-C51fgPrd.js
│  ├─ tool-images-Dtu-s5JK.js
│  ├─ tool-images-Tw8vFKNH.js
│  ├─ transcript-events-CVgytyRx.js
│  ├─ transcript-events-CWugx9Y3.js
│  ├─ transcript-events-Db-3GZzv.js
│  ├─ transcript-events-DENAGPZH.js
│  ├─ trash-C57Djqhz.js
│  ├─ trash-CrF5N5Zh.js
│  ├─ tui-B-TsCdrN.js
│  ├─ tui-BtDnOLcy.js
│  ├─ tui-cli-8aB6_gLy.js
│  ├─ tui-cli-sNmvFutT.js
│  ├─ types.secrets-CnuIGXr5.js
│  ├─ update-BiZNaMTb.js
│  ├─ update-BRorSe8Z.js
│  ├─ update-cli-DIq-GwvN.js
│  ├─ update-cli-JLakLt1l.js
│  ├─ update-runner-DzrvHcoJ.js
│  ├─ update-runner-XOjIw1mF.js
│  ├─ usage-format-CKspHcUl.js
│  ├─ usage-format-DmCdWNdr.js
│  ├─ utils-BtDYyj9L.js
│  ├─ utils-CD6tCvSG.js
│  ├─ utils-DXDZXfi2.js
│  ├─ version-sf9dgjHP.js
│  ├─ warning-filter.js
│  ├─ web-BAgU8G-7.js
│  ├─ web-CAsjnIt_.js
│  ├─ web-CKHThpge.js
│  ├─ web-CtqUQX_7.js
│  ├─ webhooks-cli-nQFmwuVu.js
│  ├─ webhooks-cli-RYRni8eP.js
│  ├─ whatsapp-actions-B1bZcPFX.js
│  ├─ whatsapp-actions-CfOSM6UW.js
│  ├─ whatsapp-actions-DUgFFNYD.js
│  ├─ whatsapp-actions-eSZQV8EW.js
│  ├─ widearea-dns-C8ly6VMR.js
│  ├─ widearea-dns-DObOrEl_.js
│  ├─ windows-spawn-CaO4Xg-L.js
│  ├─ windows-spawn-CjNYeBcQ.js
│  ├─ windows-spawn-De2cBnWX.js
│  ├─ windows-spawn-DU59RVJI.js
│  ├─ with-timeout-Bz4U9fB7.js
│  ├─ with-timeout-q9nCa-sr.js
│  ├─ workspace-Bd0njcXd.js
│  ├─ workspace-Cf_FbQuR.js
│  ├─ workspace-dirs-CEAXZCb7.js
│  ├─ workspace-dirs-Dsqf_7fg.js
│  ├─ workspace-Djtb7zJj.js
│  ├─ ws-6d-Td7Jw.js
│  ├─ ws-BVI9psRt.js
│  ├─ wsl-CvQfS6aU.js
│  └─ wsl-D4ZLKU7Y.js
├─ docs/
│  ├─ .i18n/
│  │  ├─ glossary.ja-JP.json
│  │  ├─ glossary.zh-CN.json
│  │  ├─ ja-JP.tm.jsonl
│  │  ├─ README.md
│  │  └─ zh-CN.tm.jsonl
│  ├─ assets/
│  │  ├─ macos-onboarding/
│  │  │  ├─ 01-macos-warning.jpeg
│  │  │  ├─ 02-local-networks.jpeg
│  │  │  ├─ 03-security-notice.png
│  │  │  ├─ 04-choose-gateway.png
│  │  │  └─ 05-permissions.png
│  │  ├─ showcase/
│  │  │  ├─ agents-ui.jpg
│  │  │  ├─ bambu-cli.png
│  │  │  ├─ codexmonitor.png
│  │  │  ├─ gohome-grafana.png
│  │  │  ├─ ios-testflight.jpg
│  │  │  ├─ oura-health.png
│  │  │  ├─ padel-cli.svg
│  │  │  ├─ padel-screenshot.jpg
│  │  │  ├─ papla-tts.jpg
│  │  │  ├─ pr-review-telegram.jpg
│  │  │  ├─ roborock-screenshot.jpg
│  │  │  ├─ roborock-status.svg
│  │  │  ├─ roof-camera-sky.jpg
│  │  │  ├─ snag.png
│  │  │  ├─ tesco-shop.jpg
│  │  │  ├─ wienerlinien.png
│  │  │  ├─ wine-cellar-skill.jpg
│  │  │  ├─ winix-air-purifier.jpg
│  │  │  └─ xuezh-pronunciation.jpeg
│  │  ├─ sponsors/
│  │  │  ├─ blacksmith.svg
│  │  │  ├─ convex.svg
│  │  │  ├─ openai.svg
│  │  │  └─ vercel.svg
│  │  ├─ gensparx-logo-text-dark.png
│  │  ├─ gensparx-logo-text.png
│  │  ├─ gensparx-new.png
│  │  ├─ install-script.svg
│  │  └─ pixel-lobster.svg
│  ├─ automation/
│  │  ├─ auth-monitoring.md
│  │  ├─ cron-jobs.md
│  │  ├─ cron-vs-heartbeat.md
│  │  ├─ gmail-pubsub.md
│  │  ├─ hooks.md
│  │  ├─ poll.md
│  │  ├─ troubleshooting.md
│  │  └─ webhook.md
│  ├─ channels/
│  │  ├─ bluebubbles.md
│  │  ├─ broadcast-groups.md
│  │  ├─ channel-routing.md
│  │  ├─ discord.md
│  │  ├─ feishu.md
│  │  ├─ googlechat.md
│  │  ├─ group-messages.md
│  │  ├─ groups.md
│  │  ├─ imessage.md
│  │  ├─ index.md
│  │  ├─ irc.md
│  │  ├─ line.md
│  │  ├─ location.md
│  │  ├─ matrix.md
│  │  ├─ mattermost.md
│  │  ├─ msteams.md
│  │  ├─ nextcloud-talk.md
│  │  ├─ nostr.md
│  │  ├─ pairing.md
│  │  ├─ signal.md
│  │  ├─ slack.md
│  │  ├─ synology-chat.md
│  │  ├─ telegram.md
│  │  ├─ tlon.md
│  │  ├─ troubleshooting.md
│  │  ├─ twitch.md
│  │  ├─ whatsapp.md
│  │  ├─ zalo.md
│  │  └─ zalouser.md
│  ├─ cli/
│  │  ├─ acp.md
│  │  ├─ agent.md
│  │  ├─ agents.md
│  │  ├─ approvals.md
│  │  ├─ browser.md
│  │  ├─ channels.md
│  │  ├─ clawbot.md
│  │  ├─ completion.md
│  │  ├─ config.md
│  │  ├─ configure.md
│  │  ├─ cron.md
│  │  ├─ daemon.md
│  │  ├─ dashboard.md
│  │  ├─ devices.md
│  │  ├─ directory.md
│  │  ├─ dns.md
│  │  ├─ docs.md
│  │  ├─ doctor.md
│  │  ├─ gateway.md
│  │  ├─ health.md
│  │  ├─ hooks.md
│  │  ├─ index.md
│  │  ├─ logs.md
│  │  ├─ memory.md
│  │  ├─ message.md
│  │  ├─ models.md
│  │  ├─ node.md
│  │  ├─ nodes.md
│  │  ├─ onboard.md
│  │  ├─ pairing.md
│  │  ├─ plugins.md
│  │  ├─ qr.md
│  │  ├─ reset.md
│  │  ├─ sandbox.md
│  │  ├─ secrets.md
│  │  ├─ security.md
│  │  ├─ sessions.md
│  │  ├─ setup.md
│  │  ├─ skills.md
│  │  ├─ status.md
│  │  ├─ system.md
│  │  ├─ tui.md
│  │  ├─ uninstall.md
│  │  ├─ update.md
│  │  ├─ voicecall.md
│  │  └─ webhooks.md
│  ├─ concepts/
│  │  ├─ agent-loop.md
│  │  ├─ agent-workspace.md
│  │  ├─ agent.md
│  │  ├─ architecture.md
│  │  ├─ compaction.md
│  │  ├─ context.md
│  │  ├─ features.md
│  │  ├─ markdown-formatting.md
│  │  ├─ memory.md
│  │  ├─ messages.md
│  │  ├─ model-failover.md
│  │  ├─ model-providers.md
│  │  ├─ models.md
│  │  ├─ multi-agent.md
│  │  ├─ oauth.md
│  │  ├─ presence.md
│  │  ├─ queue.md
│  │  ├─ retry.md
│  │  ├─ session-pruning.md
│  │  ├─ session-tool.md
│  │  ├─ session.md
│  │  ├─ streaming.md
│  │  ├─ system-prompt.md
│  │  ├─ timezone.md
│  │  ├─ typebox.md
│  │  ├─ typing-indicators.md
│  │  └─ usage-tracking.md
│  ├─ debug/
│  │  └─ node-issue.md
│  ├─ design/
│  │  └─ kilo-gateway-integration.md
│  ├─ diagnostics/
│  │  └─ flags.md
│  ├─ experiments/
│  │  ├─ plans/
│  │  │  ├─ acp-persistent-bindings-discord-channels-telegram-topics.md
│  │  │  ├─ acp-thread-bound-agents.md
│  │  │  ├─ acp-unified-streaming-refactor.md
│  │  │  ├─ browser-evaluate-cdp-refactor.md
│  │  │  ├─ discord-async-inbound-worker.md
│  │  │  ├─ openresponses-gateway.md
│  │  │  ├─ pty-process-supervision.md
│  │  │  └─ session-binding-channel-agnostic.md
│  │  ├─ proposals/
│  │  │  ├─ acp-bound-command-auth.md
│  │  │  └─ model-config.md
│  │  ├─ research/
│  │  │  └─ memory.md
│  │  └─ onboarding-config-protocol.md
│  ├─ gateway/
│  │  ├─ security/
│  │  │  └─ index.md
│  │  ├─ authentication.md
│  │  ├─ background-process.md
│  │  ├─ bonjour.md
│  │  ├─ bridge-protocol.md
│  │  ├─ cli-backends.md
│  │  ├─ configuration-examples.md
│  │  ├─ configuration-reference.md
│  │  ├─ configuration.md
│  │  ├─ discovery.md
│  │  ├─ doctor.md
│  │  ├─ gateway-lock.md
│  │  ├─ health.md
│  │  ├─ heartbeat.md
│  │  ├─ index.md
│  │  ├─ local-models.md
│  │  ├─ logging.md
│  │  ├─ multiple-gateways.md
│  │  ├─ network-model.md
│  │  ├─ openai-http-api.md
│  │  ├─ openresponses-http-api.md
│  │  ├─ pairing.md
│  │  ├─ protocol.md
│  │  ├─ remote-gateway-readme.md
│  │  ├─ remote.md
│  │  ├─ sandbox-vs-tool-policy-vs-elevated.md
│  │  ├─ sandboxing.md
│  │  ├─ secrets-plan-contract.md
│  │  ├─ secrets.md
│  │  ├─ tailscale.md
│  │  ├─ tools-invoke-http-api.md
│  │  ├─ troubleshooting.md
│  │  └─ trusted-proxy-auth.md
│  ├─ help/
│  │  ├─ debugging.md
│  │  ├─ environment.md
│  │  ├─ faq.md
│  │  ├─ index.md
│  │  ├─ scripts.md
│  │  ├─ testing.md
│  │  └─ troubleshooting.md
│  ├─ images/
│  │  ├─ configure-model-picker-unsearchable.png
│  │  ├─ feishu-step2-create-app.png
│  │  ├─ feishu-step3-credentials.png
│  │  ├─ feishu-step4-permissions.png
│  │  ├─ feishu-step5-bot-capability.png
│  │  ├─ feishu-step6-event-subscription.png
│  │  ├─ feishu-verification-token.png
│  │  ├─ groups-flow.svg
│  │  └─ mobile-ui-screenshot.png
│  ├─ install/
│  │  ├─ ansible.md
│  │  ├─ bun.md
│  │  ├─ development-channels.md
│  │  ├─ docker.md
│  │  ├─ exe-dev.md
│  │  ├─ fly.md
│  │  ├─ gcp.md
│  │  ├─ hetzner.md
│  │  ├─ index.md
│  │  ├─ installer.md
│  │  ├─ macos-vm.md
│  │  ├─ migrating.md
│  │  ├─ nix.md
│  │  ├─ node.md
│  │  ├─ northflank.mdx
│  │  ├─ podman.md
│  │  ├─ railway.mdx
│  │  ├─ render.mdx
│  │  ├─ uninstall.md
│  │  └─ updating.md
│  ├─ ja-JP/
│  │  ├─ start/
│  │  │  ├─ getting-started.md
│  │  │  └─ wizard.md
│  │  └─ index.md
│  ├─ nodes/
│  │  ├─ audio.md
│  │  ├─ camera.md
│  │  ├─ images.md
│  │  ├─ index.md
│  │  ├─ location-command.md
│  │  ├─ media-understanding.md
│  │  ├─ talk.md
│  │  ├─ troubleshooting.md
│  │  └─ voicewake.md
│  ├─ platforms/
│  │  ├─ mac/
│  │  │  ├─ bundled-gateway.md
│  │  │  ├─ canvas.md
│  │  │  ├─ child-process.md
│  │  │  ├─ dev-setup.md
│  │  │  ├─ health.md
│  │  │  ├─ icon.md
│  │  │  ├─ logging.md
│  │  │  ├─ menu-bar.md
│  │  │  ├─ peekaboo.md
│  │  │  ├─ permissions.md
│  │  │  ├─ release.md
│  │  │  ├─ remote.md
│  │  │  ├─ signing.md
│  │  │  ├─ skills.md
│  │  │  ├─ voice-overlay.md
│  │  │  ├─ voicewake.md
│  │  │  ├─ webchat.md
│  │  │  └─ xpc.md
│  │  ├─ android.md
│  │  ├─ digitalocean.md
│  │  ├─ index.md
│  │  ├─ ios.md
│  │  ├─ linux.md
│  │  ├─ macos.md
│  │  ├─ oracle.md
│  │  ├─ raspberry-pi.md
│  │  └─ windows.md
│  ├─ plugins/
│  │  ├─ agent-tools.md
│  │  ├─ community.md
│  │  ├─ manifest.md
│  │  ├─ voice-call.md
│  │  └─ zalouser.md
│  ├─ providers/
│  │  ├─ anthropic.md
│  │  ├─ bedrock.md
│  │  ├─ claude-max-api-proxy.md
│  │  ├─ cloudflare-ai-gateway.md
│  │  ├─ deepgram.md
│  │  ├─ github-copilot.md
│  │  ├─ glm.md
│  │  ├─ huggingface.md
│  │  ├─ index.md
│  │  ├─ kilocode.md
│  │  ├─ litellm.md
│  │  ├─ minimax.md
│  │  ├─ mistral.md
│  │  ├─ models.md
│  │  ├─ moonshot.md
│  │  ├─ nvidia.md
│  │  ├─ ollama.md
│  │  ├─ openai.md
│  │  ├─ opencode.md
│  │  ├─ openrouter.md
│  │  ├─ qianfan.md
│  │  ├─ qwen.md
│  │  ├─ synthetic.md
│  │  ├─ together.md
│  │  ├─ venice.md
│  │  ├─ vercel-ai-gateway.md
│  │  ├─ vllm.md
│  │  ├─ xiaomi.md
│  │  └─ zai.md
│  ├─ refactor/
│  │  ├─ clawnet.md
│  │  ├─ exec-host.md
│  │  ├─ outbound-session-mirroring.md
│  │  ├─ plugin-sdk.md
│  │  └─ strict-config.md
│  ├─ reference/
│  │  ├─ templates/
│  │  │  ├─ AGENTS.dev.md
│  │  │  ├─ AGENTS.md
│  │  │  ├─ BOOT.md
│  │  │  ├─ BOOTSTRAP.md
│  │  │  ├─ HEARTBEAT.md
│  │  │  ├─ IDENTITY.dev.md
│  │  │  ├─ IDENTITY.md
│  │  │  ├─ SOUL.dev.md
│  │  │  ├─ SOUL.md
│  │  │  ├─ TOOLS.dev.md
│  │  │  ├─ TOOLS.md
│  │  │  ├─ USER.dev.md
│  │  │  └─ USER.md
│  │  ├─ AGENTS.default.md
│  │  ├─ api-usage-costs.md
│  │  ├─ credits.md
│  │  ├─ device-models.md
│  │  ├─ prompt-caching.md
│  │  ├─ RELEASING.md
│  │  ├─ rpc.md
│  │  ├─ secretref-credential-surface.md
│  │  ├─ secretref-user-supplied-credentials-matrix.json
│  │  ├─ session-management-compaction.md
│  │  ├─ test.md
│  │  ├─ token-use.md
│  │  ├─ transcript-hygiene.md
│  │  └─ wizard.md
│  ├─ security/
│  │  ├─ CONTRIBUTING-THREAT-MODEL.md
│  │  ├─ formal-verification.md
│  │  ├─ README.md
│  │  └─ THREAT-MODEL-ATLAS.md
│  ├─ start/
│  │  ├─ bootstrapping.md
│  │  ├─ docs-directory.md
│  │  ├─ getting-started.md
│  │  ├─ hubs.md
│  │  ├─ lore.md
│  │  ├─ onboarding-overview.md
│  │  ├─ onboarding.md
│  │  ├─ personal-assistant.md
│  │  ├─ quickstart.md
│  │  ├─ setup.md
│  │  ├─ showcase.md
│  │  ├─ wizard-cli-automation.md
│  │  ├─ wizard-cli-reference.md
│  │  └─ wizard.md
│  ├─ tools/
│  │  ├─ acp-agents.md
│  │  ├─ agent-send.md
│  │  ├─ apply-patch.md
│  │  ├─ browser-linux-troubleshooting.md
│  │  ├─ browser-login.md
│  │  ├─ browser.md
│  │  ├─ chrome-extension.md
│  │  ├─ clawhub.md
│  │  ├─ creating-skills.md
│  │  ├─ diffs.md
│  │  ├─ elevated.md
│  │  ├─ exec-approvals.md
│  │  ├─ exec.md
│  │  ├─ firecrawl.md
│  │  ├─ index.md
│  │  ├─ llm-task.md
│  │  ├─ lobster.md
│  │  ├─ loop-detection.md
│  │  ├─ multi-agent-sandbox-tools.md
│  │  ├─ pdf.md
│  │  ├─ plugin.md
│  │  ├─ reactions.md
│  │  ├─ skills-config.md
│  │  ├─ skills.md
│  │  ├─ slash-commands.md
│  │  ├─ subagents.md
│  │  ├─ thinking.md
│  │  └─ web.md
│  ├─ web/
│  │  ├─ control-ui.md
│  │  ├─ dashboard.md
│  │  ├─ index.md
│  │  ├─ tui.md
│  │  └─ webchat.md
│  ├─ zh-CN/
│  │  ├─ automation/
│  │  │  ├─ auth-monitoring.md
│  │  │  ├─ cron-jobs.md
│  │  │  ├─ cron-vs-heartbeat.md
│  │  │  ├─ gmail-pubsub.md
│  │  │  ├─ hooks.md
│  │  │  ├─ poll.md
│  │  │  ├─ troubleshooting.md
│  │  │  └─ webhook.md
│  │  ├─ channels/
│  │  │  ├─ bluebubbles.md
│  │  │  ├─ broadcast-groups.md
│  │  │  ├─ channel-routing.md
│  │  │  ├─ discord.md
│  │  │  ├─ feishu.md
│  │  │  ├─ googlechat.md
│  │  │  ├─ grammy.md
│  │  │  ├─ group-messages.md
│  │  │  ├─ groups.md
│  │  │  ├─ imessage.md
│  │  │  ├─ index.md
│  │  │  ├─ line.md
│  │  │  ├─ location.md
│  │  │  ├─ matrix.md
│  │  │  ├─ mattermost.md
│  │  │  ├─ msteams.md
│  │  │  ├─ nextcloud-talk.md
│  │  │  ├─ nostr.md
│  │  │  ├─ pairing.md
│  │  │  ├─ signal.md
│  │  │  ├─ slack.md
│  │  │  ├─ telegram.md
│  │  │  ├─ tlon.md
│  │  │  ├─ troubleshooting.md
│  │  │  ├─ twitch.md
│  │  │  ├─ whatsapp.md
│  │  │  ├─ zalo.md
│  │  │  └─ zalouser.md
│  │  ├─ cli/
│  │  │  ├─ acp.md
│  │  │  ├─ agent.md
│  │  │  ├─ agents.md
│  │  │  ├─ approvals.md
│  │  │  ├─ browser.md
│  │  │  ├─ channels.md
│  │  │  ├─ config.md
│  │  │  ├─ configure.md
│  │  │  ├─ cron.md
│  │  │  ├─ dashboard.md
│  │  │  ├─ devices.md
│  │  │  ├─ directory.md
│  │  │  ├─ dns.md
│  │  │  ├─ docs.md
│  │  │  ├─ doctor.md
│  │  │  ├─ gateway.md
│  │  │  ├─ health.md
│  │  │  ├─ hooks.md
│  │  │  ├─ index.md
│  │  │  ├─ logs.md
│  │  │  ├─ memory.md
│  │  │  ├─ message.md
│  │  │  ├─ models.md
│  │  │  ├─ node.md
│  │  │  ├─ nodes.md
│  │  │  ├─ onboard.md
│  │  │  ├─ pairing.md
│  │  │  ├─ plugins.md
│  │  │  ├─ reset.md
│  │  │  ├─ sandbox.md
│  │  │  ├─ security.md
│  │  │  ├─ sessions.md
│  │  │  ├─ setup.md
│  │  │  ├─ skills.md
│  │  │  ├─ status.md
│  │  │  ├─ system.md
│  │  │  ├─ tui.md
│  │  │  ├─ uninstall.md
│  │  │  ├─ update.md
│  │  │  ├─ voicecall.md
│  │  │  └─ webhooks.md
│  │  ├─ concepts/
│  │  │  ├─ agent-loop.md
│  │  │  ├─ agent-workspace.md
│  │  │  ├─ agent.md
│  │  │  ├─ architecture.md
│  │  │  ├─ compaction.md
│  │  │  ├─ context.md
│  │  │  ├─ features.md
│  │  │  ├─ markdown-formatting.md
│  │  │  ├─ memory.md
│  │  │  ├─ messages.md
│  │  │  ├─ model-failover.md
│  │  │  ├─ model-providers.md
│  │  │  ├─ models.md
│  │  │  ├─ multi-agent.md
│  │  │  ├─ oauth.md
│  │  │  ├─ presence.md
│  │  │  ├─ queue.md
│  │  │  ├─ retry.md
│  │  │  ├─ session-pruning.md
│  │  │  ├─ session-tool.md
│  │  │  ├─ session.md
│  │  │  ├─ streaming.md
│  │  │  ├─ system-prompt.md
│  │  │  ├─ timezone.md
│  │  │  ├─ typebox.md
│  │  │  ├─ typing-indicators.md
│  │  │  └─ usage-tracking.md
│  │  ├─ debug/
│  │  │  └─ node-issue.md
│  │  ├─ diagnostics/
│  │  │  └─ flags.md
│  │  ├─ experiments/
│  │  │  ├─ plans/
│  │  │  │  ├─ cron-add-hardening.md
│  │  │  │  ├─ group-policy-hardening.md
│  │  │  │  └─ openresponses-gateway.md
│  │  │  ├─ proposals/
│  │  │  │  └─ model-config.md
│  │  │  ├─ research/
│  │  │  │  └─ memory.md
│  │  │  └─ onboarding-config-protocol.md
│  │  ├─ gateway/
│  │  │  ├─ security/
│  │  │  │  └─ index.md
│  │  │  ├─ authentication.md
│  │  │  ├─ background-process.md
│  │  │  ├─ bonjour.md
│  │  │  ├─ bridge-protocol.md
│  │  │  ├─ cli-backends.md
│  │  │  ├─ configuration-examples.md
│  │  │  ├─ configuration.md
│  │  │  ├─ discovery.md
│  │  │  ├─ doctor.md
│  │  │  ├─ gateway-lock.md
│  │  │  ├─ health.md
│  │  │  ├─ heartbeat.md
│  │  │  ├─ index.md
│  │  │  ├─ local-models.md
│  │  │  ├─ logging.md
│  │  │  ├─ multiple-gateways.md
│  │  │  ├─ network-model.md
│  │  │  ├─ openai-http-api.md
│  │  │  ├─ openresponses-http-api.md
│  │  │  ├─ pairing.md
│  │  │  ├─ protocol.md
│  │  │  ├─ remote-gateway-readme.md
│  │  │  ├─ remote.md
│  │  │  ├─ sandbox-vs-tool-policy-vs-elevated.md
│  │  │  ├─ sandboxing.md
│  │  │  ├─ tailscale.md
│  │  │  ├─ tools-invoke-http-api.md
│  │  │  └─ troubleshooting.md
│  │  ├─ help/
│  │  │  ├─ debugging.md
│  │  │  ├─ environment.md
│  │  │  ├─ faq.md
│  │  │  ├─ index.md
│  │  │  ├─ scripts.md
│  │  │  ├─ testing.md
│  │  │  └─ troubleshooting.md
│  │  ├─ install/
│  │  │  ├─ ansible.md
│  │  │  ├─ bun.md
│  │  │  ├─ development-channels.md
│  │  │  ├─ docker.md
│  │  │  ├─ exe-dev.md
│  │  │  ├─ fly.md
│  │  │  ├─ gcp.md
│  │  │  ├─ hetzner.md
│  │  │  ├─ index.md
│  │  │  ├─ installer.md
│  │  │  ├─ macos-vm.md
│  │  │  ├─ migrating.md
│  │  │  ├─ nix.md
│  │  │  ├─ node.md
│  │  │  ├─ northflank.mdx
│  │  │  ├─ railway.mdx
│  │  │  ├─ render.mdx
│  │  │  ├─ uninstall.md
│  │  │  └─ updating.md
│  │  ├─ nodes/
│  │  │  ├─ audio.md
│  │  │  ├─ camera.md
│  │  │  ├─ images.md
│  │  │  ├─ index.md
│  │  │  ├─ location-command.md
│  │  │  ├─ media-understanding.md
│  │  │  ├─ talk.md
│  │  │  ├─ troubleshooting.md
│  │  │  └─ voicewake.md
│  │  ├─ platforms/
│  │  │  ├─ mac/
│  │  │  │  ├─ bundled-gateway.md
│  │  │  │  ├─ canvas.md
│  │  │  │  ├─ child-process.md
│  │  │  │  ├─ dev-setup.md
│  │  │  │  ├─ health.md
│  │  │  │  ├─ icon.md
│  │  │  │  ├─ logging.md
│  │  │  │  ├─ menu-bar.md
│  │  │  │  ├─ peekaboo.md
│  │  │  │  ├─ permissions.md
│  │  │  │  ├─ release.md
│  │  │  │  ├─ remote.md
│  │  │  │  ├─ signing.md
│  │  │  │  ├─ skills.md
│  │  │  │  ├─ voice-overlay.md
│  │  │  │  ├─ voicewake.md
│  │  │  │  ├─ webchat.md
│  │  │  │  └─ xpc.md
│  │  │  ├─ android.md
│  │  │  ├─ digitalocean.md
│  │  │  ├─ index.md
│  │  │  ├─ ios.md
│  │  │  ├─ linux.md
│  │  │  ├─ macos.md
│  │  │  ├─ oracle.md
│  │  │  ├─ raspberry-pi.md
│  │  │  └─ windows.md
│  │  ├─ plugins/
│  │  │  ├─ agent-tools.md
│  │  │  ├─ manifest.md
│  │  │  ├─ voice-call.md
│  │  │  └─ zalouser.md
│  │  ├─ providers/
│  │  │  ├─ anthropic.md
│  │  │  ├─ bedrock.md
│  │  │  ├─ claude-max-api-proxy.md
│  │  │  ├─ deepgram.md
│  │  │  ├─ github-copilot.md
│  │  │  ├─ glm.md
│  │  │  ├─ index.md
│  │  │  ├─ minimax.md
│  │  │  ├─ models.md
│  │  │  ├─ moonshot.md
│  │  │  ├─ ollama.md
│  │  │  ├─ openai.md
│  │  │  ├─ opencode.md
│  │  │  ├─ openrouter.md
│  │  │  ├─ qianfan.md
│  │  │  ├─ qwen.md
│  │  │  ├─ synthetic.md
│  │  │  ├─ venice.md
│  │  │  ├─ vercel-ai-gateway.md
│  │  │  ├─ xiaomi.md
│  │  │  └─ zai.md
│  │  ├─ refactor/
│  │  │  ├─ clawnet.md
│  │  │  ├─ exec-host.md
│  │  │  ├─ outbound-session-mirroring.md
│  │  │  ├─ plugin-sdk.md
│  │  │  └─ strict-config.md
│  │  ├─ reference/
│  │  │  ├─ templates/
│  │  │  │  ├─ AGENTS.dev.md
│  │  │  │  ├─ AGENTS.md
│  │  │  │  ├─ BOOT.md
│  │  │  │  ├─ BOOTSTRAP.md
│  │  │  │  ├─ HEARTBEAT.md
│  │  │  │  ├─ IDENTITY.dev.md
│  │  │  │  ├─ IDENTITY.md
│  │  │  │  ├─ SOUL.dev.md
│  │  │  │  ├─ SOUL.md
│  │  │  │  ├─ TOOLS.dev.md
│  │  │  │  ├─ TOOLS.md
│  │  │  │  ├─ USER.dev.md
│  │  │  │  └─ USER.md
│  │  │  ├─ AGENTS.default.md
│  │  │  ├─ api-usage-costs.md
│  │  │  ├─ credits.md
│  │  │  ├─ device-models.md
│  │  │  ├─ RELEASING.md
│  │  │  ├─ rpc.md
│  │  │  ├─ session-management-compaction.md
│  │  │  ├─ test.md
│  │  │  ├─ token-use.md
│  │  │  ├─ transcript-hygiene.md
│  │  │  └─ wizard.md
│  │  ├─ security/
│  │  │  └─ formal-verification.md
│  │  ├─ start/
│  │  │  ├─ bootstrapping.md
│  │  │  ├─ docs-directory.md
│  │  │  ├─ getting-started.md
│  │  │  ├─ hubs.md
│  │  │  ├─ lore.md
│  │  │  ├─ onboarding.md
│  │  │  ├─ personal-assistant.md
│  │  │  ├─ quickstart.md
│  │  │  ├─ setup.md
│  │  │  ├─ showcase.md
│  │  │  └─ wizard.md
│  │  ├─ tools/
│  │  │  ├─ agent-send.md
│  │  │  ├─ apply-patch.md
│  │  │  ├─ browser-linux-troubleshooting.md
│  │  │  ├─ browser-login.md
│  │  │  ├─ browser.md
│  │  │  ├─ chrome-extension.md
│  │  │  ├─ clawhub.md
│  │  │  ├─ creating-skills.md
│  │  │  ├─ elevated.md
│  │  │  ├─ exec-approvals.md
│  │  │  ├─ exec.md
│  │  │  ├─ firecrawl.md
│  │  │  ├─ index.md
│  │  │  ├─ llm-task.md
│  │  │  ├─ lobster.md
│  │  │  ├─ multi-agent-sandbox-tools.md
│  │  │  ├─ plugin.md
│  │  │  ├─ reactions.md
│  │  │  ├─ skills-config.md
│  │  │  ├─ skills.md
│  │  │  ├─ slash-commands.md
│  │  │  ├─ subagents.md
│  │  │  ├─ thinking.md
│  │  │  └─ web.md
│  │  ├─ web/
│  │  │  ├─ control-ui.md
│  │  │  ├─ dashboard.md
│  │  │  ├─ index.md
│  │  │  ├─ tui.md
│  │  │  └─ webchat.md
│  │  ├─ AGENTS.md
│  │  ├─ brave-search.md
│  │  ├─ date-time.md
│  │  ├─ index.md
│  │  ├─ logging.md
│  │  ├─ network.md
│  │  ├─ perplexity.md
│  │  ├─ pi-dev.md
│  │  ├─ pi.md
│  │  ├─ prose.md
│  │  ├─ tts.md
│  │  └─ vps.md
│  ├─ auth-credential-semantics.md
│  ├─ brave-search.md
│  ├─ ci.md
│  ├─ CNAME
│  ├─ date-time.md
│  ├─ docs.json
│  ├─ index.md
│  ├─ logging.md
│  ├─ nav-tabs-underline.js
│  ├─ network.md
│  ├─ perplexity.md
│  ├─ pi-dev.md
│  ├─ pi.md
│  ├─ prose.md
│  ├─ style.css
│  ├─ tts.md
│  ├─ vps.md
│  ├─ whatsapp-gensparx-ai-zh.jpg
│  └─ whatsapp-gensparx.jpg
├─ extensions/
│  ├─ acpx/
│  │  ├─ skills/
│  │  │  └─ acp-router/
│  │  │     └─ SKILL.md
│  │  ├─ src/
│  │  │  ├─ runtime-internals/
│  │  │  │  ├─ control-errors.test.ts
│  │  │  │  ├─ control-errors.ts
│  │  │  │  ├─ events.test.ts
│  │  │  │  ├─ events.ts
│  │  │  │  ├─ jsonrpc.test.ts
│  │  │  │  ├─ jsonrpc.ts
│  │  │  │  ├─ process.test.ts
│  │  │  │  ├─ process.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  └─ test-fixtures.ts
│  │  │  ├─ config.test.ts
│  │  │  ├─ config.ts
│  │  │  ├─ ensure.test.ts
│  │  │  ├─ ensure.ts
│  │  │  ├─ runtime.test.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ service.test.ts
│  │  │  └─ service.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ bluebubbles/
│  │  ├─ src/
│  │  │  ├─ account-resolve.ts
│  │  │  ├─ accounts.test.ts
│  │  │  ├─ accounts.ts
│  │  │  ├─ actions.test.ts
│  │  │  ├─ actions.ts
│  │  │  ├─ attachments.test.ts
│  │  │  ├─ attachments.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ chat.test.ts
│  │  │  ├─ chat.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ history.ts
│  │  │  ├─ media-send.test.ts
│  │  │  ├─ media-send.ts
│  │  │  ├─ monitor-debounce.ts
│  │  │  ├─ monitor-normalize.test.ts
│  │  │  ├─ monitor-normalize.ts
│  │  │  ├─ monitor-processing.ts
│  │  │  ├─ monitor-reply-cache.ts
│  │  │  ├─ monitor-shared.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ monitor.webhook-auth.test.ts
│  │  │  ├─ monitor.webhook-route.test.ts
│  │  │  ├─ multipart.ts
│  │  │  ├─ onboarding.secret-input.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ reactions.test.ts
│  │  │  ├─ reactions.ts
│  │  │  ├─ request-url.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ send-helpers.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ targets.test.ts
│  │  │  ├─ targets.ts
│  │  │  ├─ test-harness.ts
│  │  │  ├─ test-mocks.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ copilot-proxy/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ device-pair/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ notify.ts
│  ├─ diagnostics-otel/
│  │  ├─ src/
│  │  │  ├─ service.test.ts
│  │  │  └─ service.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ diffs/
│  │  ├─ assets/
│  │  │  └─ viewer-runtime.js
│  │  ├─ skills/
│  │  │  └─ diffs/
│  │  │     └─ SKILL.md
│  │  ├─ src/
│  │  │  ├─ browser.test.ts
│  │  │  ├─ browser.ts
│  │  │  ├─ config.test.ts
│  │  │  ├─ config.ts
│  │  │  ├─ http.test.ts
│  │  │  ├─ http.ts
│  │  │  ├─ prompt-guidance.ts
│  │  │  ├─ render.test.ts
│  │  │  ├─ render.ts
│  │  │  ├─ store.test.ts
│  │  │  ├─ store.ts
│  │  │  ├─ tool.test.ts
│  │  │  ├─ tool.ts
│  │  │  ├─ types.ts
│  │  │  ├─ url.test.ts
│  │  │  ├─ url.ts
│  │  │  ├─ viewer-assets.test.ts
│  │  │  ├─ viewer-assets.ts
│  │  │  ├─ viewer-client.ts
│  │  │  ├─ viewer-payload.test.ts
│  │  │  └─ viewer-payload.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.test.ts
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ discord/
│  │  ├─ src/
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ subagent-hooks.test.ts
│  │  │  └─ subagent-hooks.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ feishu/
│  │  ├─ skills/
│  │  │  ├─ feishu-doc/
│  │  │  │  ├─ references/
│  │  │  │  │  └─ block-types.md
│  │  │  │  └─ SKILL.md
│  │  │  ├─ feishu-drive/
│  │  │  │  └─ SKILL.md
│  │  │  ├─ feishu-perm/
│  │  │  │  └─ SKILL.md
│  │  │  └─ feishu-wiki/
│  │  │     └─ SKILL.md
│  │  ├─ src/
│  │  │  ├─ accounts.test.ts
│  │  │  ├─ accounts.ts
│  │  │  ├─ async.ts
│  │  │  ├─ bitable.ts
│  │  │  ├─ bot.card-action.test.ts
│  │  │  ├─ bot.checkBotMentioned.test.ts
│  │  │  ├─ bot.stripBotMention.test.ts
│  │  │  ├─ bot.test.ts
│  │  │  ├─ bot.ts
│  │  │  ├─ card-action.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ chat-schema.ts
│  │  │  ├─ chat.test.ts
│  │  │  ├─ chat.ts
│  │  │  ├─ client.test.ts
│  │  │  ├─ client.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ dedup.ts
│  │  │  ├─ directory.ts
│  │  │  ├─ doc-schema.ts
│  │  │  ├─ docx-batch-insert.ts
│  │  │  ├─ docx-color-text.ts
│  │  │  ├─ docx-table-ops.ts
│  │  │  ├─ docx.account-selection.test.ts
│  │  │  ├─ docx.test.ts
│  │  │  ├─ docx.ts
│  │  │  ├─ drive-schema.ts
│  │  │  ├─ drive.ts
│  │  │  ├─ dynamic-agent.ts
│  │  │  ├─ external-keys.test.ts
│  │  │  ├─ external-keys.ts
│  │  │  ├─ feishu-command-handler.ts
│  │  │  ├─ media.test.ts
│  │  │  ├─ media.ts
│  │  │  ├─ mention.ts
│  │  │  ├─ monitor.account.ts
│  │  │  ├─ monitor.reaction.test.ts
│  │  │  ├─ monitor.startup.test.ts
│  │  │  ├─ monitor.startup.ts
│  │  │  ├─ monitor.state.defaults.test.ts
│  │  │  ├─ monitor.state.ts
│  │  │  ├─ monitor.test-mocks.ts
│  │  │  ├─ monitor.transport.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ monitor.webhook-security.test.ts
│  │  │  ├─ onboarding.status.test.ts
│  │  │  ├─ onboarding.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ outbound.test.ts
│  │  │  ├─ outbound.ts
│  │  │  ├─ perm-schema.ts
│  │  │  ├─ perm.ts
│  │  │  ├─ policy.test.ts
│  │  │  ├─ policy.ts
│  │  │  ├─ post.test.ts
│  │  │  ├─ post.ts
│  │  │  ├─ probe.test.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ reactions.ts
│  │  │  ├─ reply-dispatcher.test.ts
│  │  │  ├─ reply-dispatcher.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ send-result.ts
│  │  │  ├─ send-target.test.ts
│  │  │  ├─ send-target.ts
│  │  │  ├─ send.reply-fallback.test.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ streaming-card.test.ts
│  │  │  ├─ streaming-card.ts
│  │  │  ├─ targets.test.ts
│  │  │  ├─ targets.ts
│  │  │  ├─ tool-account-routing.test.ts
│  │  │  ├─ tool-account.ts
│  │  │  ├─ tool-factory-test-harness.ts
│  │  │  ├─ tools-config.test.ts
│  │  │  ├─ tools-config.ts
│  │  │  ├─ types.ts
│  │  │  ├─ typing.test.ts
│  │  │  ├─ typing.ts
│  │  │  ├─ wiki-schema.ts
│  │  │  └─ wiki.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ google-antigravity-auth/
│  ├─ google-gemini-cli-auth/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ oauth.test.ts
│  │  ├─ oauth.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ googlechat/
│  │  ├─ src/
│  │  │  ├─ accounts.ts
│  │  │  ├─ actions.ts
│  │  │  ├─ api.test.ts
│  │  │  ├─ api.ts
│  │  │  ├─ auth.ts
│  │  │  ├─ channel.outbound.test.ts
│  │  │  ├─ channel.startup.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ monitor-access.ts
│  │  │  ├─ monitor-types.ts
│  │  │  ├─ monitor-webhook.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ monitor.webhook-routing.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ resolve-target.test.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ targets.test.ts
│  │  │  ├─ targets.ts
│  │  │  ├─ types.config.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ imessage/
│  │  ├─ src/
│  │  │  ├─ channel.outbound.test.ts
│  │  │  ├─ channel.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ irc/
│  │  ├─ src/
│  │  │  ├─ accounts.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ client.test.ts
│  │  │  ├─ client.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ connect-options.ts
│  │  │  ├─ control-chars.ts
│  │  │  ├─ inbound.policy.test.ts
│  │  │  ├─ inbound.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ normalize.test.ts
│  │  │  ├─ normalize.ts
│  │  │  ├─ onboarding.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ policy.test.ts
│  │  │  ├─ policy.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ protocol.test.ts
│  │  │  ├─ protocol.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ line/
│  │  ├─ src/
│  │  │  ├─ card-command.ts
│  │  │  ├─ channel.logout.test.ts
│  │  │  ├─ channel.sendPayload.test.ts
│  │  │  ├─ channel.startup.test.ts
│  │  │  ├─ channel.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ llm-task/
│  │  ├─ src/
│  │  │  ├─ llm-task-tool.test.ts
│  │  │  └─ llm-task-tool.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ lobster/
│  │  ├─ src/
│  │  │  ├─ lobster-tool.test.ts
│  │  │  ├─ lobster-tool.ts
│  │  │  ├─ test-helpers.ts
│  │  │  ├─ windows-spawn.test.ts
│  │  │  └─ windows-spawn.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  ├─ README.md
│  │  └─ SKILL.md
│  ├─ matrix/
│  │  ├─ src/
│  │  │  ├─ matrix/
│  │  │  │  ├─ actions/
│  │  │  │  │  ├─ client.ts
│  │  │  │  │  ├─ limits.test.ts
│  │  │  │  │  ├─ limits.ts
│  │  │  │  │  ├─ messages.ts
│  │  │  │  │  ├─ pins.test.ts
│  │  │  │  │  ├─ pins.ts
│  │  │  │  │  ├─ reactions.test.ts
│  │  │  │  │  ├─ reactions.ts
│  │  │  │  │  ├─ room.ts
│  │  │  │  │  ├─ summary.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ client/
│  │  │  │  │  ├─ config.ts
│  │  │  │  │  ├─ create-client.ts
│  │  │  │  │  ├─ logging.ts
│  │  │  │  │  ├─ runtime.ts
│  │  │  │  │  ├─ shared.test.ts
│  │  │  │  │  ├─ shared.ts
│  │  │  │  │  ├─ startup.test.ts
│  │  │  │  │  ├─ startup.ts
│  │  │  │  │  ├─ storage.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ monitor/
│  │  │  │  │  ├─ access-policy.ts
│  │  │  │  │  ├─ allowlist.test.ts
│  │  │  │  │  ├─ allowlist.ts
│  │  │  │  │  ├─ auto-join.ts
│  │  │  │  │  ├─ direct.test.ts
│  │  │  │  │  ├─ direct.ts
│  │  │  │  │  ├─ events.test.ts
│  │  │  │  │  ├─ events.ts
│  │  │  │  │  ├─ handler.body-for-agent.test.ts
│  │  │  │  │  ├─ handler.ts
│  │  │  │  │  ├─ inbound-body.test.ts
│  │  │  │  │  ├─ inbound-body.ts
│  │  │  │  │  ├─ index.test.ts
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ location.ts
│  │  │  │  │  ├─ media.test.ts
│  │  │  │  │  ├─ media.ts
│  │  │  │  │  ├─ mentions.test.ts
│  │  │  │  │  ├─ mentions.ts
│  │  │  │  │  ├─ replies.test.ts
│  │  │  │  │  ├─ replies.ts
│  │  │  │  │  ├─ room-info.ts
│  │  │  │  │  ├─ rooms.test.ts
│  │  │  │  │  ├─ rooms.ts
│  │  │  │  │  ├─ threads.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ send/
│  │  │  │  │  ├─ client.ts
│  │  │  │  │  ├─ formatting.ts
│  │  │  │  │  ├─ media.ts
│  │  │  │  │  ├─ targets.test.ts
│  │  │  │  │  ├─ targets.ts
│  │  │  │  │  └─ types.ts
│  │  │  │  ├─ accounts.test.ts
│  │  │  │  ├─ accounts.ts
│  │  │  │  ├─ actions.ts
│  │  │  │  ├─ active-client.ts
│  │  │  │  ├─ client-bootstrap.ts
│  │  │  │  ├─ client.test.ts
│  │  │  │  ├─ client.ts
│  │  │  │  ├─ credentials.ts
│  │  │  │  ├─ deps.test.ts
│  │  │  │  ├─ deps.ts
│  │  │  │  ├─ format.test.ts
│  │  │  │  ├─ format.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ poll-types.test.ts
│  │  │  │  ├─ poll-types.ts
│  │  │  │  ├─ probe.ts
│  │  │  │  ├─ sdk-runtime.ts
│  │  │  │  ├─ send-queue.test.ts
│  │  │  │  ├─ send-queue.ts
│  │  │  │  ├─ send.test.ts
│  │  │  │  └─ send.ts
│  │  │  ├─ actions.ts
│  │  │  ├─ channel.directory.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ directory-live.test.ts
│  │  │  ├─ directory-live.ts
│  │  │  ├─ group-mentions.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ outbound.test.ts
│  │  │  ├─ outbound.ts
│  │  │  ├─ resolve-targets.test.ts
│  │  │  ├─ resolve-targets.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ tool-actions.ts
│  │  │  └─ types.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ mattermost/
│  │  ├─ src/
│  │  │  ├─ mattermost/
│  │  │  │  ├─ accounts.test.ts
│  │  │  │  ├─ accounts.ts
│  │  │  │  ├─ client.test.ts
│  │  │  │  ├─ client.ts
│  │  │  │  ├─ directory.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ interactions.test.ts
│  │  │  │  ├─ interactions.ts
│  │  │  │  ├─ monitor-auth.ts
│  │  │  │  ├─ monitor-helpers.ts
│  │  │  │  ├─ monitor-onchar.ts
│  │  │  │  ├─ monitor-websocket.test.ts
│  │  │  │  ├─ monitor-websocket.ts
│  │  │  │  ├─ monitor.authz.test.ts
│  │  │  │  ├─ monitor.channel-kind.test.ts
│  │  │  │  ├─ monitor.test.ts
│  │  │  │  ├─ monitor.ts
│  │  │  │  ├─ probe.test.ts
│  │  │  │  ├─ probe.ts
│  │  │  │  ├─ reactions.test-helpers.ts
│  │  │  │  ├─ reactions.test.ts
│  │  │  │  ├─ reactions.ts
│  │  │  │  ├─ reconnect.test.ts
│  │  │  │  ├─ reconnect.ts
│  │  │  │  ├─ send.test.ts
│  │  │  │  ├─ send.ts
│  │  │  │  ├─ slash-commands.test.ts
│  │  │  │  ├─ slash-commands.ts
│  │  │  │  ├─ slash-http.test.ts
│  │  │  │  ├─ slash-http.ts
│  │  │  │  ├─ slash-state.test.ts
│  │  │  │  └─ slash-state.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ group-mentions.test.ts
│  │  │  ├─ group-mentions.ts
│  │  │  ├─ normalize.test.ts
│  │  │  ├─ normalize.ts
│  │  │  ├─ onboarding-helpers.ts
│  │  │  ├─ onboarding.status.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ memory-core/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ memory-lancedb/
│  │  ├─ config.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.test.ts
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ minimax-portal-auth/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ oauth.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ msteams/
│  │  ├─ src/
│  │  │  ├─ attachments/
│  │  │  │  ├─ download.ts
│  │  │  │  ├─ graph.ts
│  │  │  │  ├─ html.ts
│  │  │  │  ├─ payload.ts
│  │  │  │  ├─ remote-media.ts
│  │  │  │  ├─ shared.test.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ monitor-handler/
│  │  │  │  ├─ inbound-media.ts
│  │  │  │  ├─ message-handler.authz.test.ts
│  │  │  │  └─ message-handler.ts
│  │  │  ├─ attachments.test.ts
│  │  │  ├─ attachments.ts
│  │  │  ├─ channel.directory.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ conversation-store-fs.test.ts
│  │  │  ├─ conversation-store-fs.ts
│  │  │  ├─ conversation-store-memory.ts
│  │  │  ├─ conversation-store.ts
│  │  │  ├─ directory-live.ts
│  │  │  ├─ errors.test.ts
│  │  │  ├─ errors.ts
│  │  │  ├─ file-consent-helpers.test.ts
│  │  │  ├─ file-consent-helpers.ts
│  │  │  ├─ file-consent.ts
│  │  │  ├─ file-lock.ts
│  │  │  ├─ graph-chat.ts
│  │  │  ├─ graph-upload.ts
│  │  │  ├─ graph-users.test.ts
│  │  │  ├─ graph-users.ts
│  │  │  ├─ graph.ts
│  │  │  ├─ inbound.test.ts
│  │  │  ├─ inbound.ts
│  │  │  ├─ index.ts
│  │  │  ├─ media-helpers.test.ts
│  │  │  ├─ media-helpers.ts
│  │  │  ├─ mentions.test.ts
│  │  │  ├─ mentions.ts
│  │  │  ├─ messenger.test.ts
│  │  │  ├─ messenger.ts
│  │  │  ├─ monitor-handler.file-consent.test.ts
│  │  │  ├─ monitor-handler.ts
│  │  │  ├─ monitor-types.ts
│  │  │  ├─ monitor.lifecycle.test.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ outbound.test.ts
│  │  │  ├─ outbound.ts
│  │  │  ├─ pending-uploads.ts
│  │  │  ├─ policy.test.ts
│  │  │  ├─ policy.ts
│  │  │  ├─ polls-store-memory.ts
│  │  │  ├─ polls-store.test.ts
│  │  │  ├─ polls.test.ts
│  │  │  ├─ polls.ts
│  │  │  ├─ probe.test.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ reply-dispatcher.ts
│  │  │  ├─ resolve-allowlist.ts
│  │  │  ├─ revoked-context.test.ts
│  │  │  ├─ revoked-context.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ sdk-types.ts
│  │  │  ├─ sdk.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ send-context.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ sent-message-cache.test.ts
│  │  │  ├─ sent-message-cache.ts
│  │  │  ├─ storage.ts
│  │  │  ├─ store-fs.ts
│  │  │  ├─ test-runtime.ts
│  │  │  ├─ token-response.test.ts
│  │  │  ├─ token-response.ts
│  │  │  ├─ token.test.ts
│  │  │  └─ token.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ nextcloud-talk/
│  │  ├─ src/
│  │  │  ├─ accounts.ts
│  │  │  ├─ channel.startup.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ format.ts
│  │  │  ├─ inbound.authz.test.ts
│  │  │  ├─ inbound.ts
│  │  │  ├─ monitor.auth-order.test.ts
│  │  │  ├─ monitor.backend.test.ts
│  │  │  ├─ monitor.read-body.test.ts
│  │  │  ├─ monitor.replay.test.ts
│  │  │  ├─ monitor.test-fixtures.ts
│  │  │  ├─ monitor.test-harness.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ normalize.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ policy.test.ts
│  │  │  ├─ policy.ts
│  │  │  ├─ replay-guard.test.ts
│  │  │  ├─ replay-guard.ts
│  │  │  ├─ room-info.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ signature.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ nostr/
│  │  ├─ src/
│  │  │  ├─ channel.outbound.test.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ metrics.ts
│  │  │  ├─ nostr-bus.fuzz.test.ts
│  │  │  ├─ nostr-bus.integration.test.ts
│  │  │  ├─ nostr-bus.test.ts
│  │  │  ├─ nostr-bus.ts
│  │  │  ├─ nostr-profile-http.test.ts
│  │  │  ├─ nostr-profile-http.ts
│  │  │  ├─ nostr-profile-import.test.ts
│  │  │  ├─ nostr-profile-import.ts
│  │  │  ├─ nostr-profile.fuzz.test.ts
│  │  │  ├─ nostr-profile.test.ts
│  │  │  ├─ nostr-profile.ts
│  │  │  ├─ nostr-state-store.test.ts
│  │  │  ├─ nostr-state-store.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ seen-tracker.ts
│  │  │  ├─ types.test.ts
│  │  │  └─ types.ts
│  │  ├─ test/
│  │  │  └─ setup.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ open-prose/
│  │  ├─ skills/
│  │  │  └─ prose/
│  │  │     ├─ alts/
│  │  │     │  ├─ arabian-nights.md
│  │  │     │  ├─ borges.md
│  │  │     │  ├─ folk.md
│  │  │     │  ├─ homer.md
│  │  │     │  └─ kafka.md
│  │  │     ├─ examples/
│  │  │     │  ├─ roadmap/
│  │  │     │  │  ├─ syntax/
│  │  │     │  │  │  └─ open-prose-syntax.prose
│  │  │     │  │  ├─ iterative-refinement.prose
│  │  │     │  │  ├─ parallel-review.prose
│  │  │     │  │  ├─ README.md
│  │  │     │  │  └─ simple-pipeline.prose
│  │  │     │  ├─ 01-hello-world.prose
│  │  │     │  ├─ 02-research-and-summarize.prose
│  │  │     │  ├─ 03-code-review.prose
│  │  │     │  ├─ 04-write-and-refine.prose
│  │  │     │  ├─ 05-debug-issue.prose
│  │  │     │  ├─ 06-explain-codebase.prose
│  │  │     │  ├─ 07-refactor.prose
│  │  │     │  ├─ 08-blog-post.prose
│  │  │     │  ├─ 09-research-with-agents.prose
│  │  │     │  ├─ 10-code-review-agents.prose
│  │  │     │  ├─ 11-skills-and-imports.prose
│  │  │     │  ├─ 12-secure-agent-permissions.prose
│  │  │     │  ├─ 13-variables-and-context.prose
│  │  │     │  ├─ 14-composition-blocks.prose
│  │  │     │  ├─ 15-inline-sequences.prose
│  │  │     │  ├─ 16-parallel-reviews.prose
│  │  │     │  ├─ 17-parallel-research.prose
│  │  │     │  ├─ 18-mixed-parallel-sequential.prose
│  │  │     │  ├─ 19-advanced-parallel.prose
│  │  │     │  ├─ 20-fixed-loops.prose
│  │  │     │  ├─ 21-pipeline-operations.prose
│  │  │     │  ├─ 22-error-handling.prose
│  │  │     │  ├─ 23-retry-with-backoff.prose
│  │  │     │  ├─ 24-choice-blocks.prose
│  │  │     │  ├─ 25-conditionals.prose
│  │  │     │  ├─ 26-parameterized-blocks.prose
│  │  │     │  ├─ 27-string-interpolation.prose
│  │  │     │  ├─ 28-automated-pr-review.prose
│  │  │     │  ├─ 28-gas-town.prose
│  │  │     │  ├─ 29-captains-chair.prose
│  │  │     │  ├─ 30-captains-chair-simple.prose
│  │  │     │  ├─ 31-captains-chair-with-memory.prose
│  │  │     │  ├─ 33-pr-review-autofix.prose
│  │  │     │  ├─ 34-content-pipeline.prose
│  │  │     │  ├─ 35-feature-factory.prose
│  │  │     │  ├─ 36-bug-hunter.prose
│  │  │     │  ├─ 37-the-forge.prose
│  │  │     │  ├─ 38-skill-scan.prose
│  │  │     │  ├─ 39-architect-by-simulation.prose
│  │  │     │  ├─ 40-rlm-self-refine.prose
│  │  │     │  ├─ 41-rlm-divide-conquer.prose
│  │  │     │  ├─ 42-rlm-filter-recurse.prose
│  │  │     │  ├─ 43-rlm-pairwise.prose
│  │  │     │  ├─ 44-run-endpoint-ux-test.prose
│  │  │     │  ├─ 45-plugin-release.prose
│  │  │     │  ├─ 45-run-endpoint-ux-test-with-remediation.prose
│  │  │     │  ├─ 46-run-endpoint-ux-test-fast.prose
│  │  │     │  ├─ 46-workflow-crystallizer.prose
│  │  │     │  ├─ 47-language-self-improvement.prose
│  │  │     │  ├─ 48-habit-miner.prose
│  │  │     │  ├─ 49-prose-run-retrospective.prose
│  │  │     │  └─ README.md
│  │  │     ├─ guidance/
│  │  │     │  ├─ antipatterns.md
│  │  │     │  ├─ patterns.md
│  │  │     │  └─ system-prompt.md
│  │  │     ├─ lib/
│  │  │     │  ├─ calibrator.prose
│  │  │     │  ├─ cost-analyzer.prose
│  │  │     │  ├─ error-forensics.prose
│  │  │     │  ├─ inspector.prose
│  │  │     │  ├─ profiler.prose
│  │  │     │  ├─ program-improver.prose
│  │  │     │  ├─ project-memory.prose
│  │  │     │  ├─ README.md
│  │  │     │  ├─ user-memory.prose
│  │  │     │  └─ vm-improver.prose
│  │  │     ├─ primitives/
│  │  │     │  └─ session.md
│  │  │     ├─ state/
│  │  │     │  ├─ filesystem.md
│  │  │     │  ├─ in-context.md
│  │  │     │  ├─ postgres.md
│  │  │     │  └─ sqlite.md
│  │  │     ├─ alt-borges.md
│  │  │     ├─ compiler.md
│  │  │     ├─ help.md
│  │  │     ├─ LICENSE
│  │  │     ├─ prose.md
│  │  │     └─ SKILL.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ phone-control/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.test.ts
│  │  └─ index.ts
│  ├─ qwen-portal-auth/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ oauth.ts
│  │  └─ README.md
│  ├─ shared/
│  │  ├─ resolve-target-test-helpers.ts
│  │  └─ windows-cmd-shim-test-fixtures.ts
│  ├─ signal/
│  │  ├─ src/
│  │  │  ├─ channel.outbound.test.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ slack/
│  │  ├─ src/
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ synology-chat/
│  │  ├─ src/
│  │  │  ├─ accounts.test.ts
│  │  │  ├─ accounts.ts
│  │  │  ├─ channel.integration.test.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ client.test.ts
│  │  │  ├─ client.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ security.test.ts
│  │  │  ├─ security.ts
│  │  │  ├─ test-http-utils.ts
│  │  │  ├─ types.ts
│  │  │  ├─ webhook-handler.test.ts
│  │  │  └─ webhook-handler.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ talk-voice/
│  │  ├─ gensparx.plugin.json
│  │  └─ index.ts
│  ├─ telegram/
│  │  ├─ src/
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ test-utils/
│  │  ├─ plugin-runtime-mock.ts
│  │  ├─ runtime-env.ts
│  │  └─ start-account-context.ts
│  ├─ thread-ownership/
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.test.ts
│  │  └─ index.ts
│  ├─ tlon/
│  │  ├─ src/
│  │  │  ├─ monitor/
│  │  │  │  ├─ approval.ts
│  │  │  │  ├─ discovery.ts
│  │  │  │  ├─ history.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ media.ts
│  │  │  │  ├─ processed-messages.test.ts
│  │  │  │  ├─ processed-messages.ts
│  │  │  │  └─ utils.ts
│  │  │  ├─ urbit/
│  │  │  │  ├─ auth.ssrf.test.ts
│  │  │  │  ├─ auth.ts
│  │  │  │  ├─ base-url.test.ts
│  │  │  │  ├─ base-url.ts
│  │  │  │  ├─ channel-ops.ts
│  │  │  │  ├─ context.ts
│  │  │  │  ├─ errors.ts
│  │  │  │  ├─ fetch.ts
│  │  │  │  ├─ foreigns.ts
│  │  │  │  ├─ send.test.ts
│  │  │  │  ├─ send.ts
│  │  │  │  ├─ sse-client.test.ts
│  │  │  │  ├─ sse-client.ts
│  │  │  │  ├─ story.ts
│  │  │  │  ├─ upload.test.ts
│  │  │  │  └─ upload.ts
│  │  │  ├─ account-fields.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ security.test.ts
│  │  │  ├─ settings.ts
│  │  │  ├─ targets.ts
│  │  │  └─ types.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ twitch/
│  │  ├─ src/
│  │  │  ├─ utils/
│  │  │  │  ├─ markdown.ts
│  │  │  │  └─ twitch.ts
│  │  │  ├─ access-control.test.ts
│  │  │  ├─ access-control.ts
│  │  │  ├─ actions.ts
│  │  │  ├─ client-manager-registry.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ config.test.ts
│  │  │  ├─ config.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ onboarding.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ outbound.test.ts
│  │  │  ├─ outbound.ts
│  │  │  ├─ plugin.test.ts
│  │  │  ├─ plugin.ts
│  │  │  ├─ probe.test.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ resolver.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ status.test.ts
│  │  │  ├─ status.ts
│  │  │  ├─ test-fixtures.ts
│  │  │  ├─ token.test.ts
│  │  │  ├─ token.ts
│  │  │  ├─ twitch-client.test.ts
│  │  │  ├─ twitch-client.ts
│  │  │  └─ types.ts
│  │  ├─ test/
│  │  │  └─ setup.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ voice-call/
│  │  ├─ src/
│  │  │  ├─ manager/
│  │  │  │  ├─ context.ts
│  │  │  │  ├─ events.test.ts
│  │  │  │  ├─ events.ts
│  │  │  │  ├─ lookup.ts
│  │  │  │  ├─ outbound.ts
│  │  │  │  ├─ state.ts
│  │  │  │  ├─ store.ts
│  │  │  │  ├─ timers.ts
│  │  │  │  └─ twiml.ts
│  │  │  ├─ providers/
│  │  │  │  ├─ shared/
│  │  │  │  │  ├─ call-status.test.ts
│  │  │  │  │  ├─ call-status.ts
│  │  │  │  │  └─ guarded-json-api.ts
│  │  │  │  ├─ twilio/
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ twiml-policy.test.ts
│  │  │  │  │  ├─ twiml-policy.ts
│  │  │  │  │  └─ webhook.ts
│  │  │  │  ├─ base.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ mock.ts
│  │  │  │  ├─ plivo.test.ts
│  │  │  │  ├─ plivo.ts
│  │  │  │  ├─ stt-openai-realtime.ts
│  │  │  │  ├─ telnyx.test.ts
│  │  │  │  ├─ telnyx.ts
│  │  │  │  ├─ tts-openai.ts
│  │  │  │  ├─ twilio.test.ts
│  │  │  │  └─ twilio.ts
│  │  │  ├─ webhook/
│  │  │  │  ├─ stale-call-reaper.ts
│  │  │  │  └─ tailscale.ts
│  │  │  ├─ allowlist.ts
│  │  │  ├─ cli.ts
│  │  │  ├─ config.test.ts
│  │  │  ├─ config.ts
│  │  │  ├─ core-bridge.ts
│  │  │  ├─ http-headers.test.ts
│  │  │  ├─ http-headers.ts
│  │  │  ├─ manager.closed-loop.test.ts
│  │  │  ├─ manager.inbound-allowlist.test.ts
│  │  │  ├─ manager.notify.test.ts
│  │  │  ├─ manager.restore.test.ts
│  │  │  ├─ manager.test-harness.ts
│  │  │  ├─ manager.ts
│  │  │  ├─ media-stream.test.ts
│  │  │  ├─ media-stream.ts
│  │  │  ├─ response-generator.ts
│  │  │  ├─ runtime.test.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ telephony-audio.ts
│  │  │  ├─ telephony-tts.test.ts
│  │  │  ├─ telephony-tts.ts
│  │  │  ├─ tunnel.ts
│  │  │  ├─ types.ts
│  │  │  ├─ utils.ts
│  │  │  ├─ voice-mapping.ts
│  │  │  ├─ webhook-security.test.ts
│  │  │  ├─ webhook-security.ts
│  │  │  ├─ webhook.test.ts
│  │  │  └─ webhook.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  ├─ whatsapp/
│  │  ├─ src/
│  │  │  ├─ channel.outbound.test.ts
│  │  │  ├─ channel.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ resolve-target.test.ts
│  │  │  └─ runtime.ts
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  └─ package.json
│  ├─ zalo/
│  │  ├─ src/
│  │  │  ├─ accounts.ts
│  │  │  ├─ actions.ts
│  │  │  ├─ api.ts
│  │  │  ├─ channel.directory.test.ts
│  │  │  ├─ channel.sendpayload.test.ts
│  │  │  ├─ channel.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ group-access.ts
│  │  │  ├─ monitor.group-policy.test.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ monitor.webhook.test.ts
│  │  │  ├─ monitor.webhook.ts
│  │  │  ├─ onboarding.status.test.ts
│  │  │  ├─ onboarding.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ proxy.ts
│  │  │  ├─ runtime.ts
│  │  │  ├─ secret-input.ts
│  │  │  ├─ send.ts
│  │  │  ├─ status-issues.ts
│  │  │  ├─ token.test.ts
│  │  │  ├─ token.ts
│  │  │  └─ types.ts
│  │  ├─ CHANGELOG.md
│  │  ├─ gensparx.plugin.json
│  │  ├─ index.ts
│  │  ├─ package.json
│  │  └─ README.md
│  └─ zalouser/
│     ├─ src/
│     │  ├─ accounts.test.ts
│     │  ├─ accounts.ts
│     │  ├─ channel.sendpayload.test.ts
│     │  ├─ channel.test.ts
│     │  ├─ channel.ts
│     │  ├─ config-schema.ts
│     │  ├─ group-policy.test.ts
│     │  ├─ group-policy.ts
│     │  ├─ message-sid.test.ts
│     │  ├─ message-sid.ts
│     │  ├─ monitor.account-scope.test.ts
│     │  ├─ monitor.group-gating.test.ts
│     │  ├─ monitor.ts
│     │  ├─ onboarding.ts
│     │  ├─ probe.test.ts
│     │  ├─ probe.ts
│     │  ├─ reaction.test.ts
│     │  ├─ reaction.ts
│     │  ├─ runtime.ts
│     │  ├─ send.test.ts
│     │  ├─ send.ts
│     │  ├─ status-issues.test.ts
│     │  ├─ status-issues.ts
│     │  ├─ tool.test.ts
│     │  ├─ tool.ts
│     │  ├─ types.ts
│     │  ├─ zalo-js.ts
│     │  ├─ zca-client.ts
│     │  └─ zca-js-exports.d.ts
│     ├─ CHANGELOG.md
│     ├─ gensparx.plugin.json
│     ├─ index.ts
│     ├─ package.json
│     └─ README.md
├─ git-hooks/
│  └─ pre-commit
├─ packages/
│  ├─ clawdbot/
│  │  ├─ scripts/
│  │  │  └─ postinstall.js
│  │  ├─ index.js
│  │  └─ package.json
│  └─ moltbot/
│     ├─ scripts/
│     │  └─ postinstall.js
│     ├─ index.js
│     └─ package.json
├─ patches/
│  └─ .gitkeep
├─ scripts/
│  ├─ dev/
│  │  ├─ discord-acp-plain-language-smoke.ts
│  │  ├─ gateway-smoke.ts
│  │  ├─ gateway-ws-client.ts
│  │  ├─ ios-node-e2e.ts
│  │  ├─ ios-pull-gateway-log.sh
│  │  └─ test-device-pair-telegram.ts
│  ├─ docker/
│  │  ├─ cleanup-smoke/
│  │  │  ├─ Dockerfile
│  │  │  └─ run.sh
│  │  ├─ install-sh-common/
│  │  │  └─ cli-verify.sh
│  │  ├─ install-sh-e2e/
│  │  │  ├─ Dockerfile
│  │  │  └─ run.sh
│  │  ├─ install-sh-nonroot/
│  │  │  ├─ Dockerfile
│  │  │  └─ run.sh
│  │  └─ install-sh-smoke/
│  │     ├─ Dockerfile
│  │     └─ run.sh
│  ├─ docs-i18n/
│  │  ├─ doc_mode.go
│  │  ├─ glossary.go
│  │  ├─ go.mod
│  │  ├─ go.sum
│  │  ├─ html_translate.go
│  │  ├─ main.go
│  │  ├─ markdown_segments.go
│  │  ├─ masking.go
│  │  ├─ order.go
│  │  ├─ placeholders.go
│  │  ├─ process.go
│  │  ├─ prompt.go
│  │  ├─ segment.go
│  │  ├─ tm.go
│  │  ├─ translator.go
│  │  └─ util.go
│  ├─ e2e/
│  │  ├─ Dockerfile
│  │  ├─ Dockerfile.qr-import
│  │  ├─ doctor-install-switch-docker.sh
│  │  ├─ gateway-network-docker.sh
│  │  ├─ onboard-docker.sh
│  │  ├─ plugins-docker.sh
│  │  └─ qr-import-docker.sh
│  ├─ lib/
│  │  ├─ callsite-guard.mjs
│  │  ├─ pairing-guard-context.mjs
│  │  └─ ts-guard-utils.mjs
│  ├─ podman/
│  │  └─ gensparx.container.in
│  ├─ pre-commit/
│  │  ├─ filter-staged-files.mjs
│  │  └─ run-node-tool.sh
│  ├─ repro/
│  │  └─ tsx-name-repro.ts
│  ├─ shell-helpers/
│  │  ├─ clawdock-helpers.sh
│  │  └─ README.md
│  ├─ systemd/
│  │  ├─ gensparx-auth-monitor.service
│  │  └─ gensparx-auth-monitor.timer
│  ├─ auth-monitor.sh
│  ├─ bench-cli-startup.ts
│  ├─ bench-model.ts
│  ├─ build_icon.sh
│  ├─ build-and-run-mac.sh
│  ├─ build-docs-list.mjs
│  ├─ bundle-a2ui.mjs
│  ├─ bundle-a2ui.sh
│  ├─ canvas-a2ui-copy.ts
│  ├─ changelog-to-html.sh
│  ├─ check-channel-agnostic-boundaries.mjs
│  ├─ check-composite-action-input-interpolation.py
│  ├─ check-ingress-agent-owner-context.mjs
│  ├─ check-no-monolithic-plugin-sdk-entry-imports.ts
│  ├─ check-no-pairing-store-group-auth.mjs
│  ├─ check-no-random-messaging-tmp.mjs
│  ├─ check-no-raw-channel-fetch.mjs
│  ├─ check-no-raw-window-open.mjs
│  ├─ check-no-register-http-handler.mjs
│  ├─ check-pairing-account-scope.mjs
│  ├─ check-plugin-sdk-exports.mjs
│  ├─ check-ts-max-loc.ts
│  ├─ check-webhook-auth-body-order.mjs
│  ├─ ci-changed-scope.d.mts
│  ├─ ci-changed-scope.mjs
│  ├─ claude-auth-status.sh
│  ├─ clawlog.sh
│  ├─ clawtributors-map.json
│  ├─ codesign-mac-app.sh
│  ├─ codespell-dictionary.txt
│  ├─ codespell-ignore.txt
│  ├─ committer
│  ├─ copy-export-html-templates.ts
│  ├─ copy-hook-metadata.ts
│  ├─ copy-plugin-sdk-root-alias.mjs
│  ├─ create-dmg.sh
│  ├─ cron_usage_report.ts
│  ├─ debug-claude-usage.ts
│  ├─ dev.mjs
│  ├─ docs-link-audit.mjs
│  ├─ docs-list.js
│  ├─ docs-spellcheck.sh
│  ├─ firecrawl-compare.ts
│  ├─ generate-host-env-security-policy-swift.mjs
│  ├─ generate-secretref-credential-matrix.ts
│  ├─ ghsa-patch.mjs
│  ├─ install.ps1
│  ├─ install.sh
│  ├─ ios-configure-signing.sh
│  ├─ ios-team-id.sh
│  ├─ label-open-issues.ts
│  ├─ make_appcast.sh
│  ├─ mobile-reauth.sh
│  ├─ notarize-mac-artifact.sh
│  ├─ package-mac-app.sh
│  ├─ package-mac-dist.sh
│  ├─ pr
│  ├─ pr-merge
│  ├─ pr-prepare
│  ├─ pr-review
│  ├─ protocol-gen-swift.ts
│  ├─ protocol-gen.ts
│  ├─ readability-basic-compare.ts
│  ├─ recover-orphaned-processes.sh
│  ├─ release-check.ts
│  ├─ restart-mac.sh
│  ├─ run-gensparx-podman.sh
│  ├─ run-node.d.mts
│  ├─ run-node.mjs
│  ├─ sandbox-browser-entrypoint.sh
│  ├─ sandbox-browser-setup.sh
│  ├─ sandbox-common-setup.sh
│  ├─ sandbox-setup.sh
│  ├─ setup-auth-system.sh
│  ├─ sparkle-build.ts
│  ├─ sqlite-vec-smoke.mjs
│  ├─ sync-labels.ts
│  ├─ sync-moonshot-docs.ts
│  ├─ sync-plugin-versions.ts
│  ├─ termux-auth-widget.sh
│  ├─ termux-quick-auth.sh
│  ├─ termux-sync-widget.sh
│  ├─ test-cleanup-docker.sh
│  ├─ test-force.ts
│  ├─ test-hotspots.mjs
│  ├─ test-install-sh-docker.sh
│  ├─ test-install-sh-e2e-docker.sh
│  ├─ test-live-gateway-models-docker.sh
│  ├─ test-live-models-docker.sh
│  ├─ test-parallel.mjs
│  ├─ test-perf-budget.mjs
│  ├─ test-shell-completion.ts
│  ├─ ui.js
│  ├─ update-clawtributors.ts
│  ├─ update-clawtributors.types.ts
│  ├─ watch-node.d.mts
│  ├─ watch-node.mjs
│  ├─ write-build-info.ts
│  ├─ write-cli-compat.ts
│  ├─ write-cli-startup-metadata.ts
│  ├─ write-plugin-sdk-entry-dts.ts
│  └─ zai-fallback-repro.ts
├─ skills/
│  ├─ 1password/
│  │  ├─ references/
│  │  │  ├─ cli-examples.md
│  │  │  └─ get-started.md
│  │  └─ SKILL.md
│  ├─ apple-notes/
│  │  └─ SKILL.md
│  ├─ apple-reminders/
│  │  └─ SKILL.md
│  ├─ bear-notes/
│  │  └─ SKILL.md
│  ├─ blogwatcher/
│  │  └─ SKILL.md
│  ├─ blucli/
│  │  └─ SKILL.md
│  ├─ bluebubbles/
│  │  └─ SKILL.md
│  ├─ camsnap/
│  │  └─ SKILL.md
│  ├─ canvas/
│  │  └─ SKILL.md
│  ├─ clawhub/
│  │  └─ SKILL.md
│  ├─ coding-agent/
│  │  └─ SKILL.md
│  ├─ discord/
│  │  └─ SKILL.md
│  ├─ eightctl/
│  │  └─ SKILL.md
│  ├─ gemini/
│  │  └─ SKILL.md
│  ├─ gh-issues/
│  │  └─ SKILL.md
│  ├─ gifgrep/
│  │  └─ SKILL.md
│  ├─ github/
│  │  └─ SKILL.md
│  ├─ gog/
│  │  └─ SKILL.md
│  ├─ goplaces/
│  │  └─ SKILL.md
│  ├─ healthcheck/
│  │  └─ SKILL.md
│  ├─ himalaya/
│  │  ├─ references/
│  │  │  ├─ configuration.md
│  │  │  └─ message-composition.md
│  │  └─ SKILL.md
│  ├─ imsg/
│  │  └─ SKILL.md
│  ├─ mcporter/
│  │  └─ SKILL.md
│  ├─ model-usage/
│  │  ├─ references/
│  │  │  └─ codexbar-cli.md
│  │  ├─ scripts/
│  │  │  ├─ model_usage.py
│  │  │  └─ test_model_usage.py
│  │  └─ SKILL.md
│  ├─ nano-banana-pro/
│  │  ├─ scripts/
│  │  │  ├─ generate_image.py
│  │  │  └─ test_generate_image.py
│  │  └─ SKILL.md
│  ├─ nano-pdf/
│  │  └─ SKILL.md
│  ├─ node-connect/
│  │  └─ SKILL.md
│  ├─ notion/
│  │  └─ SKILL.md
│  ├─ obsidian/
│  │  └─ SKILL.md
│  ├─ openai-image-gen/
│  │  ├─ scripts/
│  │  │  ├─ gen.py
│  │  │  └─ test_gen.py
│  │  └─ SKILL.md
│  ├─ openai-whisper/
│  │  └─ SKILL.md
│  ├─ openai-whisper-api/
│  │  ├─ scripts/
│  │  │  └─ transcribe.sh
│  │  └─ SKILL.md
│  ├─ openhue/
│  │  └─ SKILL.md
│  ├─ oracle/
│  │  └─ SKILL.md
│  ├─ ordercli/
│  │  └─ SKILL.md
│  ├─ peekaboo/
│  │  └─ SKILL.md
│  ├─ sag/
│  │  └─ SKILL.md
│  ├─ session-logs/
│  │  └─ SKILL.md
│  ├─ sherpa-onnx-tts/
│  │  ├─ bin/
│  │  │  └─ sherpa-onnx-tts
│  │  └─ SKILL.md
│  ├─ skill-creator/
│  │  ├─ scripts/
│  │  │  ├─ init_skill.py
│  │  │  ├─ package_skill.py
│  │  │  ├─ quick_validate.py
│  │  │  ├─ test_package_skill.py
│  │  │  └─ test_quick_validate.py
│  │  ├─ license.txt
│  │  └─ SKILL.md
│  ├─ slack/
│  │  └─ SKILL.md
│  ├─ songsee/
│  │  └─ SKILL.md
│  ├─ sonoscli/
│  │  └─ SKILL.md
│  ├─ spotify-player/
│  │  └─ SKILL.md
│  ├─ summarize/
│  │  └─ SKILL.md
│  ├─ things-mac/
│  │  └─ SKILL.md
│  ├─ tmux/
│  │  ├─ scripts/
│  │  │  ├─ find-sessions.sh
│  │  │  └─ wait-for-text.sh
│  │  └─ SKILL.md
│  ├─ trello/
│  │  └─ SKILL.md
│  ├─ video-frames/
│  │  ├─ scripts/
│  │  │  └─ frame.sh
│  │  └─ SKILL.md
│  ├─ voice-call/
│  │  └─ SKILL.md
│  ├─ wacli/
│  │  └─ SKILL.md
│  ├─ weather/
│  │  └─ SKILL.md
│  └─ xurl/
│     └─ SKILL.md
├─ src/
│  ├─ acp/
│  │  ├─ control-plane/
│  │  │  ├─ manager.core.ts
│  │  │  ├─ manager.identity-reconcile.ts
│  │  │  ├─ manager.runtime-controls.ts
│  │  │  ├─ manager.test.ts
│  │  │  ├─ manager.ts
│  │  │  ├─ manager.types.ts
│  │  │  ├─ manager.utils.ts
│  │  │  ├─ runtime-cache.test.ts
│  │  │  ├─ runtime-cache.ts
│  │  │  ├─ runtime-options.ts
│  │  │  ├─ session-actor-queue.ts
│  │  │  └─ spawn.ts
│  │  ├─ runtime/
│  │  │  ├─ adapter-contract.testkit.ts
│  │  │  ├─ error-text.test.ts
│  │  │  ├─ error-text.ts
│  │  │  ├─ errors.test.ts
│  │  │  ├─ errors.ts
│  │  │  ├─ registry.test.ts
│  │  │  ├─ registry.ts
│  │  │  ├─ session-identifiers.test.ts
│  │  │  ├─ session-identifiers.ts
│  │  │  ├─ session-identity.ts
│  │  │  ├─ session-meta.ts
│  │  │  └─ types.ts
│  │  ├─ client.test.ts
│  │  ├─ client.ts
│  │  ├─ commands.ts
│  │  ├─ conversation-id.ts
│  │  ├─ event-mapper.ts
│  │  ├─ meta.ts
│  │  ├─ persistent-bindings.lifecycle.ts
│  │  ├─ persistent-bindings.resolve.ts
│  │  ├─ persistent-bindings.route.ts
│  │  ├─ persistent-bindings.test.ts
│  │  ├─ persistent-bindings.ts
│  │  ├─ persistent-bindings.types.ts
│  │  ├─ policy.test.ts
│  │  ├─ policy.ts
│  │  ├─ secret-file.ts
│  │  ├─ server.startup.test.ts
│  │  ├─ server.ts
│  │  ├─ session-mapper.test.ts
│  │  ├─ session-mapper.ts
│  │  ├─ session.test.ts
│  │  ├─ session.ts
│  │  ├─ translator.prompt-prefix.test.ts
│  │  ├─ translator.session-rate-limit.test.ts
│  │  ├─ translator.test-helpers.ts
│  │  ├─ translator.ts
│  │  └─ types.ts
│  ├─ agents/
│  │  ├─ auth-profiles/
│  │  │  ├─ constants.ts
│  │  │  ├─ credential-state.test.ts
│  │  │  ├─ credential-state.ts
│  │  │  ├─ display.ts
│  │  │  ├─ doctor.ts
│  │  │  ├─ external-cli-sync.ts
│  │  │  ├─ oauth.fallback-to-main-agent.test.ts
│  │  │  ├─ oauth.openai-codex-refresh-fallback.test.ts
│  │  │  ├─ oauth.test.ts
│  │  │  ├─ oauth.ts
│  │  │  ├─ order.test.ts
│  │  │  ├─ order.ts
│  │  │  ├─ paths.ts
│  │  │  ├─ profiles.ts
│  │  │  ├─ repair.ts
│  │  │  ├─ session-override.test.ts
│  │  │  ├─ session-override.ts
│  │  │  ├─ store.ts
│  │  │  ├─ types.ts
│  │  │  ├─ usage.test.ts
│  │  │  └─ usage.ts
│  │  ├─ cli-runner/
│  │  │  ├─ helpers.ts
│  │  │  └─ reliability.ts
│  │  ├─ pi-embedded-helpers/
│  │  │  ├─ bootstrap.ts
│  │  │  ├─ errors.ts
│  │  │  ├─ failover-matches.ts
│  │  │  ├─ google.ts
│  │  │  ├─ images.ts
│  │  │  ├─ messaging-dedupe.ts
│  │  │  ├─ openai.ts
│  │  │  ├─ thinking.test.ts
│  │  │  ├─ thinking.ts
│  │  │  ├─ turns.ts
│  │  │  └─ types.ts
│  │  ├─ pi-embedded-runner/
│  │  │  ├─ run/
│  │  │  │  ├─ attempt.test.ts
│  │  │  │  ├─ attempt.ts
│  │  │  │  ├─ compaction-timeout.test.ts
│  │  │  │  ├─ compaction-timeout.ts
│  │  │  │  ├─ history-image-prune.test.ts
│  │  │  │  ├─ history-image-prune.ts
│  │  │  │  ├─ images.test.ts
│  │  │  │  ├─ images.ts
│  │  │  │  ├─ params.ts
│  │  │  │  ├─ payloads.errors.test.ts
│  │  │  │  ├─ payloads.test-helpers.ts
│  │  │  │  ├─ payloads.test.ts
│  │  │  │  ├─ payloads.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ abort.ts
│  │  │  ├─ cache-ttl.test.ts
│  │  │  ├─ cache-ttl.ts
│  │  │  ├─ compact.hooks.test.ts
│  │  │  ├─ compact.ts
│  │  │  ├─ compaction-safety-timeout.ts
│  │  │  ├─ extensions.test.ts
│  │  │  ├─ extensions.ts
│  │  │  ├─ extra-params.cache-retention-default.test.ts
│  │  │  ├─ extra-params.openrouter-cache-control.test.ts
│  │  │  ├─ extra-params.ts
│  │  │  ├─ extra-params.zai-tool-stream.test.ts
│  │  │  ├─ google.test.ts
│  │  │  ├─ google.ts
│  │  │  ├─ history.ts
│  │  │  ├─ kilocode.test.ts
│  │  │  ├─ lanes.ts
│  │  │  ├─ logger.ts
│  │  │  ├─ model.forward-compat.test.ts
│  │  │  ├─ model.test-harness.ts
│  │  │  ├─ model.test.ts
│  │  │  ├─ model.ts
│  │  │  ├─ run.overflow-compaction.fixture.ts
│  │  │  ├─ run.overflow-compaction.loop.test.ts
│  │  │  ├─ run.overflow-compaction.mocks.shared.ts
│  │  │  ├─ run.overflow-compaction.shared-test.ts
│  │  │  ├─ run.overflow-compaction.test.ts
│  │  │  ├─ run.ts
│  │  │  ├─ runs.ts
│  │  │  ├─ sandbox-info.ts
│  │  │  ├─ sanitize-session-history.tool-result-details.test.ts
│  │  │  ├─ session-manager-cache.ts
│  │  │  ├─ session-manager-init.ts
│  │  │  ├─ skills-runtime.integration.test.ts
│  │  │  ├─ skills-runtime.test.ts
│  │  │  ├─ skills-runtime.ts
│  │  │  ├─ system-prompt.test.ts
│  │  │  ├─ system-prompt.ts
│  │  │  ├─ thinking.test.ts
│  │  │  ├─ thinking.ts
│  │  │  ├─ tool-name-allowlist.ts
│  │  │  ├─ tool-result-char-estimator.ts
│  │  │  ├─ tool-result-context-guard.test.ts
│  │  │  ├─ tool-result-context-guard.ts
│  │  │  ├─ tool-result-truncation.test.ts
│  │  │  ├─ tool-result-truncation.ts
│  │  │  ├─ tool-split.ts
│  │  │  ├─ types.ts
│  │  │  ├─ usage-reporting.test.ts
│  │  │  ├─ utils.ts
│  │  │  └─ wait-for-idle-before-flush.ts
│  │  ├─ pi-extensions/
│  │  │  ├─ context-pruning/
│  │  │  │  ├─ extension.ts
│  │  │  │  ├─ pruner.test.ts
│  │  │  │  ├─ pruner.ts
│  │  │  │  ├─ runtime.ts
│  │  │  │  ├─ settings.ts
│  │  │  │  └─ tools.ts
│  │  │  ├─ compaction-safeguard-runtime.ts
│  │  │  ├─ compaction-safeguard.test.ts
│  │  │  ├─ compaction-safeguard.ts
│  │  │  ├─ context-pruning.test.ts
│  │  │  ├─ context-pruning.ts
│  │  │  └─ session-manager-runtime-registry.ts
│  │  ├─ sandbox/
│  │  │  ├─ bind-spec.test.ts
│  │  │  ├─ bind-spec.ts
│  │  │  ├─ browser-bridges.ts
│  │  │  ├─ browser.create.test.ts
│  │  │  ├─ browser.novnc-url.test.ts
│  │  │  ├─ browser.ts
│  │  │  ├─ config-hash.test.ts
│  │  │  ├─ config-hash.ts
│  │  │  ├─ config.ts
│  │  │  ├─ constants.ts
│  │  │  ├─ context.ts
│  │  │  ├─ context.user-fallback.test.ts
│  │  │  ├─ docker.config-hash-recreate.test.ts
│  │  │  ├─ docker.execDockerRaw.enoent.test.ts
│  │  │  ├─ docker.ts
│  │  │  ├─ docker.windows.test.ts
│  │  │  ├─ fs-bridge.test.ts
│  │  │  ├─ fs-bridge.ts
│  │  │  ├─ fs-paths.test.ts
│  │  │  ├─ fs-paths.ts
│  │  │  ├─ hash.ts
│  │  │  ├─ host-paths.test.ts
│  │  │  ├─ host-paths.ts
│  │  │  ├─ manage.ts
│  │  │  ├─ network-mode.ts
│  │  │  ├─ novnc-auth.ts
│  │  │  ├─ path-utils.ts
│  │  │  ├─ prune.ts
│  │  │  ├─ registry.test.ts
│  │  │  ├─ registry.ts
│  │  │  ├─ runtime-status.ts
│  │  │  ├─ sanitize-env-vars.test.ts
│  │  │  ├─ sanitize-env-vars.ts
│  │  │  ├─ shared.ts
│  │  │  ├─ test-args.ts
│  │  │  ├─ test-fixtures.ts
│  │  │  ├─ tool-policy.ts
│  │  │  ├─ types.docker.ts
│  │  │  ├─ types.ts
│  │  │  ├─ validate-sandbox-security.test.ts
│  │  │  ├─ validate-sandbox-security.ts
│  │  │  ├─ workspace-mounts.test.ts
│  │  │  ├─ workspace-mounts.ts
│  │  │  ├─ workspace.test.ts
│  │  │  └─ workspace.ts
│  │  ├─ schema/
│  │  │  ├─ clean-for-gemini.test.ts
│  │  │  ├─ clean-for-gemini.ts
│  │  │  ├─ clean-for-xai.test.ts
│  │  │  ├─ clean-for-xai.ts
│  │  │  └─ typebox.ts
│  │  ├─ skills/
│  │  │  ├─ bundled-context.ts
│  │  │  ├─ bundled-dir.test.ts
│  │  │  ├─ bundled-dir.ts
│  │  │  ├─ config.ts
│  │  │  ├─ env-overrides.ts
│  │  │  ├─ filter.test.ts
│  │  │  ├─ filter.ts
│  │  │  ├─ frontmatter.test.ts
│  │  │  ├─ frontmatter.ts
│  │  │  ├─ plugin-skills.test.ts
│  │  │  ├─ plugin-skills.ts
│  │  │  ├─ refresh.test.ts
│  │  │  ├─ refresh.ts
│  │  │  ├─ serialize.ts
│  │  │  ├─ tools-dir.ts
│  │  │  ├─ types.ts
│  │  │  └─ workspace.ts
│  │  ├─ test-helpers/
│  │  │  ├─ agent-message-fixtures.ts
│  │  │  ├─ assistant-message-fixtures.ts
│  │  │  ├─ fast-coding-tools.ts
│  │  │  ├─ fast-core-tools.ts
│  │  │  ├─ fast-tool-stubs.ts
│  │  │  ├─ host-sandbox-fs-bridge.ts
│  │  │  ├─ model-fallback-config-fixture.ts
│  │  │  ├─ pi-tool-stubs.ts
│  │  │  ├─ pi-tools-fs-helpers.ts
│  │  │  ├─ pi-tools-sandbox-context.test.ts
│  │  │  ├─ pi-tools-sandbox-context.ts
│  │  │  ├─ sandbox-agent-config-fixtures.ts
│  │  │  ├─ session-config.ts
│  │  │  └─ unsafe-mounted-sandbox.ts
│  │  ├─ tools/
│  │  │  ├─ agent-step.test.ts
│  │  │  ├─ agent-step.ts
│  │  │  ├─ agents-list-tool.ts
│  │  │  ├─ browser-tool.actions.ts
│  │  │  ├─ browser-tool.schema.ts
│  │  │  ├─ browser-tool.test.ts
│  │  │  ├─ browser-tool.ts
│  │  │  ├─ canvas-tool.ts
│  │  │  ├─ common.params.test.ts
│  │  │  ├─ common.test.ts
│  │  │  ├─ common.ts
│  │  │  ├─ cron-tool.flat-params.test.ts
│  │  │  ├─ cron-tool.test.ts
│  │  │  ├─ cron-tool.ts
│  │  │  ├─ discord-actions-guild.ts
│  │  │  ├─ discord-actions-messaging.ts
│  │  │  ├─ discord-actions-moderation-shared.ts
│  │  │  ├─ discord-actions-moderation.authz.test.ts
│  │  │  ├─ discord-actions-moderation.ts
│  │  │  ├─ discord-actions-presence.test.ts
│  │  │  ├─ discord-actions-presence.ts
│  │  │  ├─ discord-actions-shared.ts
│  │  │  ├─ discord-actions.test.ts
│  │  │  ├─ discord-actions.ts
│  │  │  ├─ gateway-tool.ts
│  │  │  ├─ gateway.test.ts
│  │  │  ├─ gateway.ts
│  │  │  ├─ image-tool.helpers.ts
│  │  │  ├─ image-tool.test.ts
│  │  │  ├─ image-tool.ts
│  │  │  ├─ media-tool-shared.ts
│  │  │  ├─ memory-tool.citations.test.ts
│  │  │  ├─ memory-tool.test.ts
│  │  │  ├─ memory-tool.ts
│  │  │  ├─ message-tool.test.ts
│  │  │  ├─ message-tool.ts
│  │  │  ├─ model-config.helpers.ts
│  │  │  ├─ nodes-tool.test.ts
│  │  │  ├─ nodes-tool.ts
│  │  │  ├─ nodes-utils.test.ts
│  │  │  ├─ nodes-utils.ts
│  │  │  ├─ pdf-native-providers.ts
│  │  │  ├─ pdf-tool.helpers.ts
│  │  │  ├─ pdf-tool.test.ts
│  │  │  ├─ pdf-tool.ts
│  │  │  ├─ session-status-tool.ts
│  │  │  ├─ sessions-access.test.ts
│  │  │  ├─ sessions-access.ts
│  │  │  ├─ sessions-announce-target.ts
│  │  │  ├─ sessions-helpers.ts
│  │  │  ├─ sessions-history-tool.ts
│  │  │  ├─ sessions-list-tool.ts
│  │  │  ├─ sessions-resolution.test.ts
│  │  │  ├─ sessions-resolution.ts
│  │  │  ├─ sessions-send-helpers.ts
│  │  │  ├─ sessions-send-tool.a2a.ts
│  │  │  ├─ sessions-send-tool.ts
│  │  │  ├─ sessions-spawn-tool.test.ts
│  │  │  ├─ sessions-spawn-tool.ts
│  │  │  ├─ sessions.test.ts
│  │  │  ├─ slack-actions.test.ts
│  │  │  ├─ slack-actions.ts
│  │  │  ├─ subagents-tool.ts
│  │  │  ├─ telegram-actions.test.ts
│  │  │  ├─ telegram-actions.ts
│  │  │  ├─ tool-runtime.helpers.ts
│  │  │  ├─ tts-tool.test.ts
│  │  │  ├─ tts-tool.ts
│  │  │  ├─ web-fetch-utils.ts
│  │  │  ├─ web-fetch-visibility.test.ts
│  │  │  ├─ web-fetch-visibility.ts
│  │  │  ├─ web-fetch.cf-markdown.test.ts
│  │  │  ├─ web-fetch.ssrf.test.ts
│  │  │  ├─ web-fetch.test-harness.ts
│  │  │  ├─ web-fetch.test-mocks.ts
│  │  │  ├─ web-fetch.ts
│  │  │  ├─ web-guarded-fetch.test.ts
│  │  │  ├─ web-guarded-fetch.ts
│  │  │  ├─ web-search-citation-redirect.ts
│  │  │  ├─ web-search.redirect.test.ts
│  │  │  ├─ web-search.test.ts
│  │  │  ├─ web-search.ts
│  │  │  ├─ web-shared.ts
│  │  │  ├─ web-tools.enabled-defaults.test.ts
│  │  │  ├─ web-tools.fetch.test.ts
│  │  │  ├─ web-tools.readability.test.ts
│  │  │  ├─ web-tools.ts
│  │  │  ├─ whatsapp-actions.test.ts
│  │  │  ├─ whatsapp-actions.ts
│  │  │  └─ whatsapp-target-auth.ts
│  │  ├─ acp-binding-architecture.guardrail.test.ts
│  │  ├─ acp-spawn-parent-stream.test.ts
│  │  ├─ acp-spawn-parent-stream.ts
│  │  ├─ acp-spawn.test.ts
│  │  ├─ acp-spawn.ts
│  │  ├─ agent-paths.test.ts
│  │  ├─ agent-paths.ts
│  │  ├─ agent-scope.test.ts
│  │  ├─ agent-scope.ts
│  │  ├─ announce-idempotency.ts
│  │  ├─ anthropic-payload-log.test.ts
│  │  ├─ anthropic-payload-log.ts
│  │  ├─ anthropic.setup-token.live.test.ts
│  │  ├─ api-key-rotation.ts
│  │  ├─ apply-patch-update.ts
│  │  ├─ apply-patch.test.ts
│  │  ├─ apply-patch.ts
│  │  ├─ auth-health.test.ts
│  │  ├─ auth-health.ts
│  │  ├─ auth-profiles.chutes.test.ts
│  │  ├─ auth-profiles.cooldown-auto-expiry.test.ts
│  │  ├─ auth-profiles.ensureauthprofilestore.test.ts
│  │  ├─ auth-profiles.getsoonestcooldownexpiry.test.ts
│  │  ├─ auth-profiles.markauthprofilefailure.test.ts
│  │  ├─ auth-profiles.readonly-sync.test.ts
│  │  ├─ auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts
│  │  ├─ auth-profiles.resolve-auth-profile-order.fixtures.ts
│  │  ├─ auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts
│  │  ├─ auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts
│  │  ├─ auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts
│  │  ├─ auth-profiles.runtime-snapshot-save.test.ts
│  │  ├─ auth-profiles.store.save.test.ts
│  │  ├─ auth-profiles.ts
│  │  ├─ bash-process-registry.test-helpers.ts
│  │  ├─ bash-process-registry.test.ts
│  │  ├─ bash-process-registry.ts
│  │  ├─ bash-tools.build-docker-exec-args.test.ts
│  │  ├─ bash-tools.exec-approval-request.test.ts
│  │  ├─ bash-tools.exec-approval-request.ts
│  │  ├─ bash-tools.exec-host-gateway.ts
│  │  ├─ bash-tools.exec-host-node.ts
│  │  ├─ bash-tools.exec-host-shared.ts
│  │  ├─ bash-tools.exec-runtime.test.ts
│  │  ├─ bash-tools.exec-runtime.ts
│  │  ├─ bash-tools.exec-types.ts
│  │  ├─ bash-tools.exec.approval-id.test.ts
│  │  ├─ bash-tools.exec.background-abort.test.ts
│  │  ├─ bash-tools.exec.path.test.ts
│  │  ├─ bash-tools.exec.pty-cleanup.test.ts
│  │  ├─ bash-tools.exec.pty-fallback-failure.test.ts
│  │  ├─ bash-tools.exec.pty-fallback.test.ts
│  │  ├─ bash-tools.exec.pty.test.ts
│  │  ├─ bash-tools.exec.script-preflight.test.ts
│  │  ├─ bash-tools.exec.ts
│  │  ├─ bash-tools.process.poll-timeout.test.ts
│  │  ├─ bash-tools.process.send-keys.test.ts
│  │  ├─ bash-tools.process.supervisor.test.ts
│  │  ├─ bash-tools.process.ts
│  │  ├─ bash-tools.shared.test.ts
│  │  ├─ bash-tools.shared.ts
│  │  ├─ bash-tools.test.ts
│  │  ├─ bash-tools.ts
│  │  ├─ bedrock-discovery.test.ts
│  │  ├─ bedrock-discovery.ts
│  │  ├─ bootstrap-budget.test.ts
│  │  ├─ bootstrap-budget.ts
│  │  ├─ bootstrap-cache.test.ts
│  │  ├─ bootstrap-cache.ts
│  │  ├─ bootstrap-files.test.ts
│  │  ├─ bootstrap-files.ts
│  │  ├─ bootstrap-hooks.test.ts
│  │  ├─ bootstrap-hooks.ts
│  │  ├─ byteplus-models.ts
│  │  ├─ byteplus.live.test.ts
│  │  ├─ cache-trace.test.ts
│  │  ├─ cache-trace.ts
│  │  ├─ channel-tools.test.ts
│  │  ├─ channel-tools.ts
│  │  ├─ chutes-oauth.flow.test.ts
│  │  ├─ chutes-oauth.test.ts
│  │  ├─ chutes-oauth.ts
│  │  ├─ claude-cli-runner.test.ts
│  │  ├─ claude-cli-runner.ts
│  │  ├─ cli-backends.test.ts
│  │  ├─ cli-backends.ts
│  │  ├─ cli-credentials.test.ts
│  │  ├─ cli-credentials.ts
│  │  ├─ cli-runner.test.ts
│  │  ├─ cli-runner.ts
│  │  ├─ cli-session.ts
│  │  ├─ cli-watchdog-defaults.ts
│  │  ├─ cloudflare-ai-gateway.ts
│  │  ├─ command-poll-backoff.runtime.ts
│  │  ├─ command-poll-backoff.test.ts
│  │  ├─ command-poll-backoff.ts
│  │  ├─ compaction.identifier-policy.test.ts
│  │  ├─ compaction.identifier-preservation.test.ts
│  │  ├─ compaction.retry.test.ts
│  │  ├─ compaction.test.ts
│  │  ├─ compaction.token-sanitize.test.ts
│  │  ├─ compaction.tool-result-details.test.ts
│  │  ├─ compaction.ts
│  │  ├─ content-blocks.test.ts
│  │  ├─ content-blocks.ts
│  │  ├─ context-window-guard.test.ts
│  │  ├─ context-window-guard.ts
│  │  ├─ context.lookup.test.ts
│  │  ├─ context.test.ts
│  │  ├─ context.ts
│  │  ├─ core-tools.subagents.sessions-spawn.test-harness.ts
│  │  ├─ core-tools.subagents.test-harness.ts
│  │  ├─ core-tools.ts
│  │  ├─ current-time.ts
│  │  ├─ date-time.ts
│  │  ├─ defaults.ts
│  │  ├─ docs-path.ts
│  │  ├─ doubao-models.ts
│  │  ├─ failover-error.test.ts
│  │  ├─ failover-error.ts
│  │  ├─ gensparx-gateway-tool.test.ts
│  │  ├─ gensparx-tools.agents.test.ts
│  │  ├─ gensparx-tools.camera.test.ts
│  │  ├─ gensparx-tools.pdf-registration.test.ts
│  │  ├─ gensparx-tools.plugin-context.test.ts
│  │  ├─ gensparx-tools.session-status.test.ts
│  │  ├─ gensparx-tools.sessions-visibility.test.ts
│  │  ├─ gensparx-tools.sessions.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn-applies-thinking-default.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn-default-timeout-absent.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn-default-timeout.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn-depth-limits.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn.allowlist.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn.cron-note.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn.lifecycle.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn.model.test.ts
│  │  ├─ gensparx-tools.subagents.sessions-spawn.test-harness.ts
│  │  ├─ gensparx-tools.subagents.steer-failure-clears-suppression.test.ts
│  │  ├─ gensparx-tools.subagents.test-harness.ts
│  │  ├─ gensparx-tools.ts
│  │  ├─ glob-pattern.ts
│  │  ├─ google-gemini-switch.live.test.ts
│  │  ├─ huggingface-models.test.ts
│  │  ├─ huggingface-models.ts
│  │  ├─ identity-avatar.test.ts
│  │  ├─ identity-avatar.ts
│  │  ├─ identity-file.test.ts
│  │  ├─ identity-file.ts
│  │  ├─ identity.human-delay.test.ts
│  │  ├─ identity.per-channel-prefix.test.ts
│  │  ├─ identity.test.ts
│  │  ├─ identity.ts
│  │  ├─ image-sanitization.test.ts
│  │  ├─ image-sanitization.ts
│  │  ├─ internal-events.ts
│  │  ├─ lanes.ts
│  │  ├─ live-auth-keys.ts
│  │  ├─ live-model-filter.ts
│  │  ├─ live-test-helpers.ts
│  │  ├─ memory-search.test.ts
│  │  ├─ memory-search.ts
│  │  ├─ minimax-vlm.normalizes-api-key.test.ts
│  │  ├─ minimax-vlm.ts
│  │  ├─ minimax.live.test.ts
│  │  ├─ model-alias-lines.ts
│  │  ├─ model-auth-label.test.ts
│  │  ├─ model-auth-label.ts
│  │  ├─ model-auth.profiles.test.ts
│  │  ├─ model-auth.test.ts
│  │  ├─ model-auth.ts
│  │  ├─ model-catalog.test-harness.ts
│  │  ├─ model-catalog.test.ts
│  │  ├─ model-catalog.ts
│  │  ├─ model-compat.test.ts
│  │  ├─ model-compat.ts
│  │  ├─ model-fallback.probe.test.ts
│  │  ├─ model-fallback.test.ts
│  │  ├─ model-fallback.ts
│  │  ├─ model-forward-compat.ts
│  │  ├─ model-ref-profile.test.ts
│  │  ├─ model-ref-profile.ts
│  │  ├─ model-scan.test.ts
│  │  ├─ model-scan.ts
│  │  ├─ model-selection.test.ts
│  │  ├─ model-selection.ts
│  │  ├─ models-config.applies-config-env-vars.test.ts
│  │  ├─ models-config.auto-injects-github-copilot-provider-token-is.test.ts
│  │  ├─ models-config.e2e-harness.ts
│  │  ├─ models-config.falls-back-default-baseurl-token-exchange-fails.test.ts
│  │  ├─ models-config.fills-missing-provider-apikey-from-env-var.test.ts
│  │  ├─ models-config.normalizes-gemini-3-ids-preview-google-providers.test.ts
│  │  ├─ models-config.preserves-explicit-reasoning-override.test.ts
│  │  ├─ models-config.providers.google-antigravity.test.ts
│  │  ├─ models-config.providers.kilocode.test.ts
│  │  ├─ models-config.providers.kimi-coding.test.ts
│  │  ├─ models-config.providers.normalize-keys.test.ts
│  │  ├─ models-config.providers.nvidia.test.ts
│  │  ├─ models-config.providers.ollama-autodiscovery.test.ts
│  │  ├─ models-config.providers.ollama.test.ts
│  │  ├─ models-config.providers.qianfan.test.ts
│  │  ├─ models-config.providers.ts
│  │  ├─ models-config.providers.volcengine-byteplus.test.ts
│  │  ├─ models-config.skips-writing-models-json-no-env-token.test.ts
│  │  ├─ models-config.test-utils.ts
│  │  ├─ models-config.ts
│  │  ├─ models-config.uses-first-github-copilot-profile-env-tokens.test.ts
│  │  ├─ models.profiles.live.test.ts
│  │  ├─ moonshot.live.test.ts
│  │  ├─ ollama-models.ts
│  │  ├─ ollama-stream.test.ts
│  │  ├─ ollama-stream.ts
│  │  ├─ openai-responses.reasoning-replay.test.ts
│  │  ├─ openai-ws-connection.test.ts
│  │  ├─ openai-ws-connection.ts
│  │  ├─ openai-ws-stream.e2e.test.ts
│  │  ├─ openai-ws-stream.test.ts
│  │  ├─ openai-ws-stream.ts
│  │  ├─ opencode-zen-models.test.ts
│  │  ├─ opencode-zen-models.ts
│  │  ├─ owner-display.test.ts
│  │  ├─ owner-display.ts
│  │  ├─ path-policy.test.ts
│  │  ├─ path-policy.ts
│  │  ├─ payload-redaction.ts
│  │  ├─ pi-auth-credentials.ts
│  │  ├─ pi-auth-json.test.ts
│  │  ├─ pi-auth-json.ts
│  │  ├─ pi-embedded-block-chunker.test.ts
│  │  ├─ pi-embedded-block-chunker.ts
│  │  ├─ pi-embedded-helpers.buildbootstrapcontextfiles.test.ts
│  │  ├─ pi-embedded-helpers.formatassistanterrortext.test.ts
│  │  ├─ pi-embedded-helpers.isbillingerrormessage.test.ts
│  │  ├─ pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts
│  │  ├─ pi-embedded-helpers.sanitizeuserfacingtext.test.ts
│  │  ├─ pi-embedded-helpers.ts
│  │  ├─ pi-embedded-helpers.validate-turns.test.ts
│  │  ├─ pi-embedded-messaging.ts
│  │  ├─ pi-embedded-payloads.ts
│  │  ├─ pi-embedded-runner-extraparams.live.test.ts
│  │  ├─ pi-embedded-runner-extraparams.test.ts
│  │  ├─ pi-embedded-runner.applygoogleturnorderingfix.test.ts
│  │  ├─ pi-embedded-runner.buildembeddedsandboxinfo.test.ts
│  │  ├─ pi-embedded-runner.compaction-safety-timeout.test.ts
│  │  ├─ pi-embedded-runner.createsystempromptoverride.test.ts
│  │  ├─ pi-embedded-runner.e2e.test.ts
│  │  ├─ pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts
│  │  ├─ pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts
│  │  ├─ pi-embedded-runner.guard.test.ts
│  │  ├─ pi-embedded-runner.guard.waitforidle-before-flush.test.ts
│  │  ├─ pi-embedded-runner.history-limit-from-session-key.test.ts
│  │  ├─ pi-embedded-runner.limithistoryturns.test.ts
│  │  ├─ pi-embedded-runner.openai-tool-id-preservation.test.ts
│  │  ├─ pi-embedded-runner.resolvesessionagentids.test.ts
│  │  ├─ pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts
│  │  ├─ pi-embedded-runner.sanitize-session-history.policy.test.ts
│  │  ├─ pi-embedded-runner.sanitize-session-history.test-harness.ts
│  │  ├─ pi-embedded-runner.sanitize-session-history.test.ts
│  │  ├─ pi-embedded-runner.splitsdktools.test.ts
│  │  ├─ pi-embedded-runner.ts
│  │  ├─ pi-embedded-subscribe.code-span-awareness.test.ts
│  │  ├─ pi-embedded-subscribe.e2e-harness.ts
│  │  ├─ pi-embedded-subscribe.handlers.compaction.ts
│  │  ├─ pi-embedded-subscribe.handlers.lifecycle.test.ts
│  │  ├─ pi-embedded-subscribe.handlers.lifecycle.ts
│  │  ├─ pi-embedded-subscribe.handlers.messages.test.ts
│  │  ├─ pi-embedded-subscribe.handlers.messages.ts
│  │  ├─ pi-embedded-subscribe.handlers.tools.media.test.ts
│  │  ├─ pi-embedded-subscribe.handlers.tools.test.ts
│  │  ├─ pi-embedded-subscribe.handlers.tools.ts
│  │  ├─ pi-embedded-subscribe.handlers.ts
│  │  ├─ pi-embedded-subscribe.handlers.types.ts
│  │  ├─ pi-embedded-subscribe.lifecycle-billing-error.test.ts
│  │  ├─ pi-embedded-subscribe.raw-stream.ts
│  │  ├─ pi-embedded-subscribe.reply-tags.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.calls-onblockreplyflush-before-tool-execution-start-preserve.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-append-text-end-content-is.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-call-onblockreplyflush-callback-is-not.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-duplicate-text-end-repeats-full.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-emit-duplicate-block-replies-text.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.emits-block-replies-text-end-does-not.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.emits-reasoning-as-separate-message-enabled.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.includes-canvas-action-metadata-tool-summaries.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.keeps-assistanttexts-final-answer-block-replies-are.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.keeps-indented-fenced-blocks-intact.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.reopens-fenced-blocks-splitting-inside-them.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.splits-long-single-line-fenced-blocks-reopen.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.streams-soft-chunks-paragraph-preference.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts
│  │  ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts
│  │  ├─ pi-embedded-subscribe.tools.extract.test.ts
│  │  ├─ pi-embedded-subscribe.tools.media.test.ts
│  │  ├─ pi-embedded-subscribe.tools.test.ts
│  │  ├─ pi-embedded-subscribe.tools.ts
│  │  ├─ pi-embedded-subscribe.ts
│  │  ├─ pi-embedded-subscribe.types.ts
│  │  ├─ pi-embedded-utils.test.ts
│  │  ├─ pi-embedded-utils.ts
│  │  ├─ pi-embedded.ts
│  │  ├─ pi-model-discovery-runtime.ts
│  │  ├─ pi-model-discovery.auth.test.ts
│  │  ├─ pi-model-discovery.compat.e2e.test.ts
│  │  ├─ pi-model-discovery.ts
│  │  ├─ pi-project-settings.test.ts
│  │  ├─ pi-project-settings.ts
│  │  ├─ pi-settings.test.ts
│  │  ├─ pi-settings.ts
│  │  ├─ pi-tool-definition-adapter.after-tool-call.fires-once.test.ts
│  │  ├─ pi-tool-definition-adapter.after-tool-call.test.ts
│  │  ├─ pi-tool-definition-adapter.test.ts
│  │  ├─ pi-tool-definition-adapter.ts
│  │  ├─ pi-tools-agent-config.test.ts
│  │  ├─ pi-tools.abort.ts
│  │  ├─ pi-tools.before-tool-call.e2e.test.ts
│  │  ├─ pi-tools.before-tool-call.integration.e2e.test.ts
│  │  ├─ pi-tools.before-tool-call.runtime.ts
│  │  ├─ pi-tools.before-tool-call.ts
│  │  ├─ pi-tools.create-gensparx-coding-tools.adds-claude-style-aliases-schemas-without-dropping-b.test.ts
│  │  ├─ pi-tools.create-gensparx-coding-tools.adds-claude-style-aliases-schemas-without-dropping-d.test.ts
│  │  ├─ pi-tools.create-gensparx-coding-tools.adds-claude-style-aliases-schemas-without-dropping-f.test.ts
│  │  ├─ pi-tools.create-gensparx-coding-tools.adds-claude-style-aliases-schemas-without-dropping.test.ts
│  │  ├─ pi-tools.host-edit.ts
│  │  ├─ pi-tools.message-provider-policy.test.ts
│  │  ├─ pi-tools.model-provider-collision.test.ts
│  │  ├─ pi-tools.params.ts
│  │  ├─ pi-tools.policy.test.ts
│  │  ├─ pi-tools.policy.ts
│  │  ├─ pi-tools.read.host-edit-access.test.ts
│  │  ├─ pi-tools.read.host-edit-recovery.test.ts
│  │  ├─ pi-tools.read.ts
│  │  ├─ pi-tools.read.workspace-root-guard.test.ts
│  │  ├─ pi-tools.safe-bins.test.ts
│  │  ├─ pi-tools.sandbox-mounted-paths.workspace-only.test.ts
│  │  ├─ pi-tools.schema.ts
│  │  ├─ pi-tools.ts
│  │  ├─ pi-tools.types.ts
│  │  ├─ pi-tools.whatsapp-login-gating.test.ts
│  │  ├─ pi-tools.workspace-only-false.test.ts
│  │  ├─ pi-tools.workspace-paths.test.ts
│  │  ├─ pty-dsr.ts
│  │  ├─ pty-keys.test.ts
│  │  ├─ pty-keys.ts
│  │  ├─ queued-file-writer.ts
│  │  ├─ sandbox-agent-config.agent-specific-sandbox-config.e2e.test.ts
│  │  ├─ sandbox-create-args.test.ts
│  │  ├─ sandbox-explain.test.ts
│  │  ├─ sandbox-media-paths.test.ts
│  │  ├─ sandbox-media-paths.ts
│  │  ├─ sandbox-merge.test.ts
│  │  ├─ sandbox-paths.test.ts
│  │  ├─ sandbox-paths.ts
│  │  ├─ sandbox-skills.test.ts
│  │  ├─ sandbox-tool-policy.ts
│  │  ├─ sandbox.resolveSandboxContext.test.ts
│  │  ├─ sandbox.ts
│  │  ├─ sanitize-for-prompt.test.ts
│  │  ├─ sanitize-for-prompt.ts
│  │  ├─ session-dirs.ts
│  │  ├─ session-file-repair.test.ts
│  │  ├─ session-file-repair.ts
│  │  ├─ session-slug.test.ts
│  │  ├─ session-slug.ts
│  │  ├─ session-tool-result-guard-wrapper.ts
│  │  ├─ session-tool-result-guard.test.ts
│  │  ├─ session-tool-result-guard.tool-result-persist-hook.test.ts
│  │  ├─ session-tool-result-guard.ts
│  │  ├─ session-tool-result-state.ts
│  │  ├─ session-transcript-repair.attachments.test.ts
│  │  ├─ session-transcript-repair.test.ts
│  │  ├─ session-transcript-repair.ts
│  │  ├─ session-write-lock.test.ts
│  │  ├─ session-write-lock.ts
│  │  ├─ sessions-spawn-hooks.test.ts
│  │  ├─ sessions-spawn-threadid.test.ts
│  │  ├─ shell-utils.test.ts
│  │  ├─ shell-utils.ts
│  │  ├─ skills-install-download.ts
│  │  ├─ skills-install-extract.ts
│  │  ├─ skills-install-fallback.test.ts
│  │  ├─ skills-install-output.ts
│  │  ├─ skills-install-tar-verbose.ts
│  │  ├─ skills-install.download-test-utils.ts
│  │  ├─ skills-install.download.test.ts
│  │  ├─ skills-install.test-mocks.ts
│  │  ├─ skills-install.test.ts
│  │  ├─ skills-install.ts
│  │  ├─ skills-status.test.ts
│  │  ├─ skills-status.ts
│  │  ├─ skills.agents-skills-directory.test.ts
│  │  ├─ skills.build-workspace-skills-prompt.applies-bundled-allowlist-without-affecting-workspace-skills.test.ts
│  │  ├─ skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts
│  │  ├─ skills.build-workspace-skills-prompt.syncs-merged-skills-into-target-workspace.test.ts
│  │  ├─ skills.buildworkspaceskillsnapshot.test.ts
│  │  ├─ skills.buildworkspaceskillstatus.test.ts
│  │  ├─ skills.compact-skill-paths.test.ts
│  │  ├─ skills.e2e-test-helpers.test.ts
│  │  ├─ skills.e2e-test-helpers.ts
│  │  ├─ skills.loadworkspaceskillentries.test.ts
│  │  ├─ skills.resolveskillspromptforrun.test.ts
│  │  ├─ skills.sherpa-onnx-tts-bin.test.ts
│  │  ├─ skills.summarize-skill-description.test.ts
│  │  ├─ skills.test-helpers.ts
│  │  ├─ skills.test.ts
│  │  ├─ skills.ts
│  │  ├─ stable-stringify.ts
│  │  ├─ stream-message-shared.ts
│  │  ├─ subagent-announce-dispatch.test.ts
│  │  ├─ subagent-announce-dispatch.ts
│  │  ├─ subagent-announce-queue.test.ts
│  │  ├─ subagent-announce-queue.ts
│  │  ├─ subagent-announce.capture-completion-reply.test.ts
│  │  ├─ subagent-announce.format.e2e.test.ts
│  │  ├─ subagent-announce.timeout.test.ts
│  │  ├─ subagent-announce.ts
│  │  ├─ subagent-depth.test.ts
│  │  ├─ subagent-depth.ts
│  │  ├─ subagent-lifecycle-events.ts
│  │  ├─ subagent-registry-cleanup.test.ts
│  │  ├─ subagent-registry-cleanup.ts
│  │  ├─ subagent-registry-completion.test.ts
│  │  ├─ subagent-registry-completion.ts
│  │  ├─ subagent-registry-queries.test.ts
│  │  ├─ subagent-registry-queries.ts
│  │  ├─ subagent-registry-runtime.ts
│  │  ├─ subagent-registry-state.ts
│  │  ├─ subagent-registry.announce-loop-guard.test.ts
│  │  ├─ subagent-registry.archive.e2e.test.ts
│  │  ├─ subagent-registry.lifecycle-retry-grace.e2e.test.ts
│  │  ├─ subagent-registry.mocks.shared.ts
│  │  ├─ subagent-registry.nested.e2e.test.ts
│  │  ├─ subagent-registry.persistence.test.ts
│  │  ├─ subagent-registry.steer-restart.test.ts
│  │  ├─ subagent-registry.store.ts
│  │  ├─ subagent-registry.ts
│  │  ├─ subagent-registry.types.ts
│  │  ├─ subagent-spawn.attachments.test.ts
│  │  ├─ subagent-spawn.ts
│  │  ├─ synthetic-models.ts
│  │  ├─ system-prompt-params.test.ts
│  │  ├─ system-prompt-params.ts
│  │  ├─ system-prompt-report.test.ts
│  │  ├─ system-prompt-report.ts
│  │  ├─ system-prompt-stability.test.ts
│  │  ├─ system-prompt.test.ts
│  │  ├─ system-prompt.ts
│  │  ├─ timeout.ts
│  │  ├─ together-models.ts
│  │  ├─ tool-call-id.test.ts
│  │  ├─ tool-call-id.ts
│  │  ├─ tool-catalog.ts
│  │  ├─ tool-display-common.ts
│  │  ├─ tool-display-overrides.json
│  │  ├─ tool-display.test.ts
│  │  ├─ tool-display.ts
│  │  ├─ tool-fs-policy.test.ts
│  │  ├─ tool-fs-policy.ts
│  │  ├─ tool-images.log.test.ts
│  │  ├─ tool-images.test.ts
│  │  ├─ tool-images.ts
│  │  ├─ tool-loop-detection.test.ts
│  │  ├─ tool-loop-detection.ts
│  │  ├─ tool-mutation.test.ts
│  │  ├─ tool-mutation.ts
│  │  ├─ tool-policy-pipeline.test.ts
│  │  ├─ tool-policy-pipeline.ts
│  │  ├─ tool-policy-shared.ts
│  │  ├─ tool-policy.conformance.ts
│  │  ├─ tool-policy.plugin-only-allowlist.test.ts
│  │  ├─ tool-policy.test.ts
│  │  ├─ tool-policy.ts
│  │  ├─ tool-summaries.ts
│  │  ├─ transcript-policy.policy.test.ts
│  │  ├─ transcript-policy.test.ts
│  │  ├─ transcript-policy.ts
│  │  ├─ usage.normalization.test.ts
│  │  ├─ usage.test.ts
│  │  ├─ usage.ts
│  │  ├─ venice-models.test.ts
│  │  ├─ venice-models.ts
│  │  ├─ volc-models.shared.ts
│  │  ├─ workspace-dir.ts
│  │  ├─ workspace-dirs.ts
│  │  ├─ workspace-run.test.ts
│  │  ├─ workspace-run.ts
│  │  ├─ workspace-templates.test.ts
│  │  ├─ workspace-templates.ts
│  │  ├─ workspace.bootstrap-cache.test.ts
│  │  ├─ workspace.defaults.test.ts
│  │  ├─ workspace.load-extra-bootstrap-files.test.ts
│  │  ├─ workspace.test.ts
│  │  ├─ workspace.ts
│  │  └─ zai.live.test.ts
│  ├─ auto-reply/
│  │  ├─ reply/
│  │  │  ├─ commands-acp/
│  │  │  │  ├─ context.test.ts
│  │  │  │  ├─ context.ts
│  │  │  │  ├─ diagnostics.ts
│  │  │  │  ├─ install-hints.test.ts
│  │  │  │  ├─ install-hints.ts
│  │  │  │  ├─ lifecycle.ts
│  │  │  │  ├─ runtime-options.ts
│  │  │  │  ├─ shared.test.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  └─ targets.ts
│  │  │  ├─ commands-subagents/
│  │  │  │  ├─ action-agents.ts
│  │  │  │  ├─ action-focus.ts
│  │  │  │  ├─ action-help.ts
│  │  │  │  ├─ action-info.ts
│  │  │  │  ├─ action-kill.ts
│  │  │  │  ├─ action-list.ts
│  │  │  │  ├─ action-log.ts
│  │  │  │  ├─ action-send.ts
│  │  │  │  ├─ action-spawn.ts
│  │  │  │  ├─ action-unfocus.ts
│  │  │  │  └─ shared.ts
│  │  │  ├─ exec/
│  │  │  │  └─ directive.ts
│  │  │  ├─ export-html/
│  │  │  │  ├─ vendor/
│  │  │  │  │  ├─ highlight.min.js
│  │  │  │  │  └─ marked.min.js
│  │  │  │  ├─ template.css
│  │  │  │  ├─ template.html
│  │  │  │  ├─ template.js
│  │  │  │  └─ template.security.test.ts
│  │  │  ├─ queue/
│  │  │  │  ├─ cleanup.ts
│  │  │  │  ├─ directive.ts
│  │  │  │  ├─ drain.ts
│  │  │  │  ├─ enqueue.ts
│  │  │  │  ├─ normalize.ts
│  │  │  │  ├─ settings.ts
│  │  │  │  ├─ state.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ test-fixtures/
│  │  │  │  └─ acp-runtime.ts
│  │  │  ├─ abort-cutoff.ts
│  │  │  ├─ abort.test.ts
│  │  │  ├─ abort.ts
│  │  │  ├─ acp-projector.test.ts
│  │  │  ├─ acp-projector.ts
│  │  │  ├─ acp-reset-target.ts
│  │  │  ├─ acp-stream-settings.test.ts
│  │  │  ├─ acp-stream-settings.ts
│  │  │  ├─ agent-runner-execution.ts
│  │  │  ├─ agent-runner-helpers.test.ts
│  │  │  ├─ agent-runner-helpers.ts
│  │  │  ├─ agent-runner-memory.ts
│  │  │  ├─ agent-runner-payloads.test.ts
│  │  │  ├─ agent-runner-payloads.ts
│  │  │  ├─ agent-runner-reminder-guard.ts
│  │  │  ├─ agent-runner-utils.test.ts
│  │  │  ├─ agent-runner-utils.ts
│  │  │  ├─ agent-runner.misc.runreplyagent.test.ts
│  │  │  ├─ agent-runner.runreplyagent.e2e.test.ts
│  │  │  ├─ agent-runner.ts
│  │  │  ├─ audio-tags.ts
│  │  │  ├─ bash-command.ts
│  │  │  ├─ block-reply-coalescer.ts
│  │  │  ├─ block-reply-pipeline.ts
│  │  │  ├─ block-streaming.test.ts
│  │  │  ├─ block-streaming.ts
│  │  │  ├─ body.ts
│  │  │  ├─ channel-context.ts
│  │  │  ├─ command-gates.ts
│  │  │  ├─ commands-acp.test.ts
│  │  │  ├─ commands-acp.ts
│  │  │  ├─ commands-allowlist.ts
│  │  │  ├─ commands-approve.ts
│  │  │  ├─ commands-bash.ts
│  │  │  ├─ commands-compact.ts
│  │  │  ├─ commands-config.ts
│  │  │  ├─ commands-context-report.test.ts
│  │  │  ├─ commands-context-report.ts
│  │  │  ├─ commands-context.ts
│  │  │  ├─ commands-core.ts
│  │  │  ├─ commands-export-session.ts
│  │  │  ├─ commands-info.ts
│  │  │  ├─ commands-models.ts
│  │  │  ├─ commands-plugin.ts
│  │  │  ├─ commands-session-abort.ts
│  │  │  ├─ commands-session-lifecycle.test.ts
│  │  │  ├─ commands-session-store.ts
│  │  │  ├─ commands-session.ts
│  │  │  ├─ commands-setunset-standard.ts
│  │  │  ├─ commands-setunset.test.ts
│  │  │  ├─ commands-setunset.ts
│  │  │  ├─ commands-slash-parse.ts
│  │  │  ├─ commands-spawn.test-harness.ts
│  │  │  ├─ commands-status.ts
│  │  │  ├─ commands-subagents-focus.test.ts
│  │  │  ├─ commands-subagents-spawn.test.ts
│  │  │  ├─ commands-subagents.test-mocks.ts
│  │  │  ├─ commands-subagents.ts
│  │  │  ├─ commands-system-prompt.ts
│  │  │  ├─ commands-tts.ts
│  │  │  ├─ commands-types.ts
│  │  │  ├─ commands.test-harness.ts
│  │  │  ├─ commands.test.ts
│  │  │  ├─ commands.ts
│  │  │  ├─ config-commands.ts
│  │  │  ├─ config-value.ts
│  │  │  ├─ debug-commands.ts
│  │  │  ├─ directive-handling.auth.test.ts
│  │  │  ├─ directive-handling.auth.ts
│  │  │  ├─ directive-handling.fast-lane.ts
│  │  │  ├─ directive-handling.impl.ts
│  │  │  ├─ directive-handling.levels.test.ts
│  │  │  ├─ directive-handling.levels.ts
│  │  │  ├─ directive-handling.model-picker.ts
│  │  │  ├─ directive-handling.model.test.ts
│  │  │  ├─ directive-handling.model.ts
│  │  │  ├─ directive-handling.params.ts
│  │  │  ├─ directive-handling.parse.ts
│  │  │  ├─ directive-handling.persist.ts
│  │  │  ├─ directive-handling.queue-validation.ts
│  │  │  ├─ directive-handling.shared.ts
│  │  │  ├─ directive-handling.ts
│  │  │  ├─ directive-parsing.ts
│  │  │  ├─ directives.ts
│  │  │  ├─ dispatch-acp-delivery.test.ts
│  │  │  ├─ dispatch-acp-delivery.ts
│  │  │  ├─ dispatch-acp.test.ts
│  │  │  ├─ dispatch-acp.ts
│  │  │  ├─ dispatch-from-config.test.ts
│  │  │  ├─ dispatch-from-config.ts
│  │  │  ├─ dispatcher-registry.ts
│  │  │  ├─ elevated-allowlist-matcher.ts
│  │  │  ├─ elevated-unavailable.ts
│  │  │  ├─ exec.ts
│  │  │  ├─ followup-runner.test.ts
│  │  │  ├─ followup-runner.ts
│  │  │  ├─ get-reply-directives-apply.ts
│  │  │  ├─ get-reply-directives-utils.ts
│  │  │  ├─ get-reply-directives.ts
│  │  │  ├─ get-reply-inline-actions.skip-when-config-empty.test.ts
│  │  │  ├─ get-reply-inline-actions.ts
│  │  │  ├─ get-reply-run.media-only.test.ts
│  │  │  ├─ get-reply-run.ts
│  │  │  ├─ get-reply.message-hooks.test.ts
│  │  │  ├─ get-reply.reset-hooks-fallback.test.ts
│  │  │  ├─ get-reply.ts
│  │  │  ├─ groups.ts
│  │  │  ├─ history.ts
│  │  │  ├─ inbound-context.ts
│  │  │  ├─ inbound-dedupe.ts
│  │  │  ├─ inbound-meta.test.ts
│  │  │  ├─ inbound-meta.ts
│  │  │  ├─ inbound-text.ts
│  │  │  ├─ line-directives.ts
│  │  │  ├─ memory-flush.test.ts
│  │  │  ├─ memory-flush.ts
│  │  │  ├─ mentions.test.ts
│  │  │  ├─ mentions.ts
│  │  │  ├─ message-preprocess-hooks.test.ts
│  │  │  ├─ message-preprocess-hooks.ts
│  │  │  ├─ model-selection.test.ts
│  │  │  ├─ model-selection.ts
│  │  │  ├─ normalize-reply.ts
│  │  │  ├─ origin-routing.test.ts
│  │  │  ├─ origin-routing.ts
│  │  │  ├─ post-compaction-context.test.ts
│  │  │  ├─ post-compaction-context.ts
│  │  │  ├─ provider-dispatcher.ts
│  │  │  ├─ queue-policy.test.ts
│  │  │  ├─ queue-policy.ts
│  │  │  ├─ queue.ts
│  │  │  ├─ reply-delivery.ts
│  │  │  ├─ reply-directives.ts
│  │  │  ├─ reply-dispatcher.ts
│  │  │  ├─ reply-elevated.test.ts
│  │  │  ├─ reply-elevated.ts
│  │  │  ├─ reply-flow.test.ts
│  │  │  ├─ reply-inline-whitespace.test.ts
│  │  │  ├─ reply-inline-whitespace.ts
│  │  │  ├─ reply-inline.test.ts
│  │  │  ├─ reply-inline.ts
│  │  │  ├─ reply-payloads.test.ts
│  │  │  ├─ reply-payloads.ts
│  │  │  ├─ reply-plumbing.test.ts
│  │  │  ├─ reply-reference.ts
│  │  │  ├─ reply-state.test.ts
│  │  │  ├─ reply-tags.ts
│  │  │  ├─ reply-threading.ts
│  │  │  ├─ reply-utils.test.ts
│  │  │  ├─ response-prefix-template.ts
│  │  │  ├─ route-reply.test.ts
│  │  │  ├─ route-reply.ts
│  │  │  ├─ session-delivery.test.ts
│  │  │  ├─ session-delivery.ts
│  │  │  ├─ session-fork.ts
│  │  │  ├─ session-hooks-context.test.ts
│  │  │  ├─ session-hooks.ts
│  │  │  ├─ session-reset-model.ts
│  │  │  ├─ session-reset-prompt.test.ts
│  │  │  ├─ session-reset-prompt.ts
│  │  │  ├─ session-run-accounting.ts
│  │  │  ├─ session-updates.ts
│  │  │  ├─ session-usage.ts
│  │  │  ├─ session.test.ts
│  │  │  ├─ session.ts
│  │  │  ├─ stage-sandbox-media.ts
│  │  │  ├─ streaming-directives.ts
│  │  │  ├─ strip-inbound-meta.test.ts
│  │  │  ├─ strip-inbound-meta.ts
│  │  │  ├─ subagents-utils.test.ts
│  │  │  ├─ subagents-utils.ts
│  │  │  ├─ telegram-context.test.ts
│  │  │  ├─ telegram-context.ts
│  │  │  ├─ test-ctx.ts
│  │  │  ├─ test-helpers.ts
│  │  │  ├─ typing-mode.ts
│  │  │  ├─ typing-persistence.test.ts
│  │  │  ├─ typing-policy.test.ts
│  │  │  ├─ typing-policy.ts
│  │  │  ├─ typing.ts
│  │  │  └─ untrusted-context.ts
│  │  ├─ chunk.test.ts
│  │  ├─ chunk.ts
│  │  ├─ command-auth.ts
│  │  ├─ command-control.test.ts
│  │  ├─ command-detection.ts
│  │  ├─ commands-args.test.ts
│  │  ├─ commands-args.ts
│  │  ├─ commands-registry.data.ts
│  │  ├─ commands-registry.test.ts
│  │  ├─ commands-registry.ts
│  │  ├─ commands-registry.types.ts
│  │  ├─ dispatch.test.ts
│  │  ├─ dispatch.ts
│  │  ├─ envelope.test.ts
│  │  ├─ envelope.ts
│  │  ├─ fallback-state.test.ts
│  │  ├─ fallback-state.ts
│  │  ├─ group-activation.ts
│  │  ├─ heartbeat-reply-payload.ts
│  │  ├─ heartbeat.test.ts
│  │  ├─ heartbeat.ts
│  │  ├─ inbound-debounce.ts
│  │  ├─ inbound.test.ts
│  │  ├─ media-note.test.ts
│  │  ├─ media-note.ts
│  │  ├─ media-understanding.test-fixtures.ts
│  │  ├─ model-runtime.ts
│  │  ├─ model.test.ts
│  │  ├─ model.ts
│  │  ├─ reply.block-streaming.test.ts
│  │  ├─ reply.directive.directive-behavior.applies-inline-reasoning-mixed-messages-acks-immediately.test.ts
│  │  ├─ reply.directive.directive-behavior.defaults-think-low-reasoning-capable-models-no.test.ts
│  │  ├─ reply.directive.directive-behavior.e2e-harness.ts
│  │  ├─ reply.directive.directive-behavior.e2e-mocks.ts
│  │  ├─ reply.directive.directive-behavior.model-directive-test-utils.ts
│  │  ├─ reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts
│  │  ├─ reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.test.ts
│  │  ├─ reply.directive.parse.test.ts
│  │  ├─ reply.heartbeat-typing.test.ts
│  │  ├─ reply.media-note.test.ts
│  │  ├─ reply.raw-body.test.ts
│  │  ├─ reply.test-harness.ts
│  │  ├─ reply.triggers.group-intro-prompts.cases.ts
│  │  ├─ reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.cases.ts
│  │  ├─ reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts
│  │  ├─ reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts
│  │  ├─ reply.triggers.trigger-handling.test-harness.ts
│  │  ├─ reply.ts
│  │  ├─ send-policy.ts
│  │  ├─ skill-commands.test.ts
│  │  ├─ skill-commands.ts
│  │  ├─ stage-sandbox-media.test-harness.ts
│  │  ├─ status.test.ts
│  │  ├─ status.ts
│  │  ├─ templating.ts
│  │  ├─ thinking.test.ts
│  │  ├─ thinking.ts
│  │  ├─ tokens.test.ts
│  │  ├─ tokens.ts
│  │  ├─ tool-meta.test.ts
│  │  ├─ tool-meta.ts
│  │  └─ types.ts
│  ├─ browser/
│  │  ├─ routes/
│  │  │  ├─ agent.act.download.ts
│  │  │  ├─ agent.act.hooks.ts
│  │  │  ├─ agent.act.shared.ts
│  │  │  ├─ agent.act.ts
│  │  │  ├─ agent.debug.ts
│  │  │  ├─ agent.shared.test.ts
│  │  │  ├─ agent.shared.ts
│  │  │  ├─ agent.snapshot.test.ts
│  │  │  ├─ agent.snapshot.ts
│  │  │  ├─ agent.storage.test.ts
│  │  │  ├─ agent.storage.ts
│  │  │  ├─ agent.ts
│  │  │  ├─ basic.ts
│  │  │  ├─ dispatcher.abort.test.ts
│  │  │  ├─ dispatcher.ts
│  │  │  ├─ index.ts
│  │  │  ├─ output-paths.ts
│  │  │  ├─ path-output.ts
│  │  │  ├─ tabs.ts
│  │  │  ├─ types.ts
│  │  │  └─ utils.ts
│  │  ├─ bridge-auth-registry.ts
│  │  ├─ bridge-server.auth.test.ts
│  │  ├─ bridge-server.ts
│  │  ├─ browser-utils.test.ts
│  │  ├─ cdp-proxy-bypass.test.ts
│  │  ├─ cdp-proxy-bypass.ts
│  │  ├─ cdp-timeouts.test.ts
│  │  ├─ cdp-timeouts.ts
│  │  ├─ cdp.helpers.ts
│  │  ├─ cdp.test.ts
│  │  ├─ cdp.ts
│  │  ├─ chrome-extension-background-utils.test.ts
│  │  ├─ chrome-extension-manifest.test.ts
│  │  ├─ chrome-extension-options-validation.test.ts
│  │  ├─ chrome-user-data-dir.test-harness.ts
│  │  ├─ chrome.default-browser.test.ts
│  │  ├─ chrome.executables.ts
│  │  ├─ chrome.profile-decoration.ts
│  │  ├─ chrome.test.ts
│  │  ├─ chrome.ts
│  │  ├─ client-actions-core.ts
│  │  ├─ client-actions-observe.ts
│  │  ├─ client-actions-state.ts
│  │  ├─ client-actions-types.ts
│  │  ├─ client-actions-url.ts
│  │  ├─ client-actions.ts
│  │  ├─ client-fetch.loopback-auth.test.ts
│  │  ├─ client-fetch.ts
│  │  ├─ client.test.ts
│  │  ├─ client.ts
│  │  ├─ config.test.ts
│  │  ├─ config.ts
│  │  ├─ constants.ts
│  │  ├─ control-auth.auto-token.test.ts
│  │  ├─ control-auth.test.ts
│  │  ├─ control-auth.ts
│  │  ├─ control-service.ts
│  │  ├─ csrf.ts
│  │  ├─ extension-relay-auth.secretref.test.ts
│  │  ├─ extension-relay-auth.test.ts
│  │  ├─ extension-relay-auth.ts
│  │  ├─ extension-relay.test.ts
│  │  ├─ extension-relay.ts
│  │  ├─ form-fields.ts
│  │  ├─ http-auth.ts
│  │  ├─ navigation-guard.test.ts
│  │  ├─ navigation-guard.ts
│  │  ├─ output-atomic.ts
│  │  ├─ paths.test.ts
│  │  ├─ paths.ts
│  │  ├─ profiles-service.test.ts
│  │  ├─ profiles-service.ts
│  │  ├─ profiles.test.ts
│  │  ├─ profiles.ts
│  │  ├─ proxy-files.ts
│  │  ├─ pw-ai-module.ts
│  │  ├─ pw-ai-state.ts
│  │  ├─ pw-ai.e2e.test.ts
│  │  ├─ pw-ai.ts
│  │  ├─ pw-role-snapshot.test.ts
│  │  ├─ pw-role-snapshot.ts
│  │  ├─ pw-session.browserless.live.test.ts
│  │  ├─ pw-session.create-page.navigation-guard.test.ts
│  │  ├─ pw-session.get-page-for-targetid.extension-fallback.test.ts
│  │  ├─ pw-session.mock-setup.ts
│  │  ├─ pw-session.test.ts
│  │  ├─ pw-session.ts
│  │  ├─ pw-tools-core.activity.ts
│  │  ├─ pw-tools-core.clamps-timeoutms-scrollintoview.test.ts
│  │  ├─ pw-tools-core.downloads.ts
│  │  ├─ pw-tools-core.interactions.evaluate.abort.test.ts
│  │  ├─ pw-tools-core.interactions.set-input-files.test.ts
│  │  ├─ pw-tools-core.interactions.ts
│  │  ├─ pw-tools-core.last-file-chooser-arm-wins.test.ts
│  │  ├─ pw-tools-core.responses.ts
│  │  ├─ pw-tools-core.screenshots-element-selector.test.ts
│  │  ├─ pw-tools-core.shared.ts
│  │  ├─ pw-tools-core.snapshot.navigate-guard.test.ts
│  │  ├─ pw-tools-core.snapshot.ts
│  │  ├─ pw-tools-core.state.ts
│  │  ├─ pw-tools-core.storage.ts
│  │  ├─ pw-tools-core.test-harness.ts
│  │  ├─ pw-tools-core.trace.ts
│  │  ├─ pw-tools-core.ts
│  │  ├─ pw-tools-core.waits-next-download-saves-it.test.ts
│  │  ├─ resolved-config-refresh.ts
│  │  ├─ safe-filename.ts
│  │  ├─ screenshot.test.ts
│  │  ├─ screenshot.ts
│  │  ├─ server-context.availability.ts
│  │  ├─ server-context.chrome-test-harness.ts
│  │  ├─ server-context.constants.ts
│  │  ├─ server-context.ensure-browser-available.waits-for-cdp-ready.test.ts
│  │  ├─ server-context.ensure-tab-available.prefers-last-target.test.ts
│  │  ├─ server-context.hot-reload-profiles.test.ts
│  │  ├─ server-context.remote-profile-tab-ops.suite.ts
│  │  ├─ server-context.remote-profile-tab-ops.test.ts
│  │  ├─ server-context.remote-tab-ops.harness.ts
│  │  ├─ server-context.remote-tab-ops.test.ts
│  │  ├─ server-context.reset.test.ts
│  │  ├─ server-context.reset.ts
│  │  ├─ server-context.selection.ts
│  │  ├─ server-context.tab-ops.ts
│  │  ├─ server-context.tab-selection-state.suite.ts
│  │  ├─ server-context.tab-selection-state.test.ts
│  │  ├─ server-context.ts
│  │  ├─ server-context.types.ts
│  │  ├─ server-lifecycle.test.ts
│  │  ├─ server-lifecycle.ts
│  │  ├─ server-middleware.ts
│  │  ├─ server.agent-contract-form-layout-act-commands.test.ts
│  │  ├─ server.agent-contract-snapshot-endpoints.test.ts
│  │  ├─ server.agent-contract.test-harness.ts
│  │  ├─ server.auth-fail-closed.test.ts
│  │  ├─ server.auth-token-gates-http.test.ts
│  │  ├─ server.control-server.test-harness.ts
│  │  ├─ server.evaluate-disabled-does-not-block-storage.test.ts
│  │  ├─ server.post-tabs-open-profile-unknown-returns-404.test.ts
│  │  ├─ server.ts
│  │  ├─ session-tab-registry.test.ts
│  │  ├─ session-tab-registry.ts
│  │  ├─ target-id.ts
│  │  ├─ test-port.ts
│  │  └─ trash.ts
│  ├─ canvas-host/
│  │  ├─ a2ui/
│  │  │  ├─ .bundle.hash
│  │  │  ├─ a2ui.bundle.js
│  │  │  └─ index.html
│  │  ├─ a2ui.ts
│  │  ├─ file-resolver.ts
│  │  ├─ server.state-dir.test.ts
│  │  ├─ server.test.ts
│  │  └─ server.ts
│  ├─ channels/
│  │  ├─ allowlists/
│  │  │  ├─ resolve-utils.test.ts
│  │  │  └─ resolve-utils.ts
│  │  ├─ plugins/
│  │  │  ├─ actions/
│  │  │  │  ├─ discord/
│  │  │  │  │  ├─ handle-action.guild-admin.ts
│  │  │  │  │  └─ handle-action.ts
│  │  │  │  ├─ actions.test.ts
│  │  │  │  ├─ discord.ts
│  │  │  │  ├─ reaction-message-id.test.ts
│  │  │  │  ├─ reaction-message-id.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  ├─ signal.ts
│  │  │  │  └─ telegram.ts
│  │  │  ├─ agent-tools/
│  │  │  │  └─ whatsapp-login.ts
│  │  │  ├─ normalize/
│  │  │  │  ├─ discord.ts
│  │  │  │  ├─ imessage.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  ├─ signal.ts
│  │  │  │  ├─ slack.ts
│  │  │  │  ├─ targets.test.ts
│  │  │  │  ├─ telegram.test.ts
│  │  │  │  ├─ telegram.ts
│  │  │  │  └─ whatsapp.ts
│  │  │  ├─ onboarding/
│  │  │  │  ├─ channel-access-configure.test.ts
│  │  │  │  ├─ channel-access-configure.ts
│  │  │  │  ├─ channel-access.test.ts
│  │  │  │  ├─ channel-access.ts
│  │  │  │  ├─ discord.ts
│  │  │  │  ├─ helpers.test.ts
│  │  │  │  ├─ helpers.ts
│  │  │  │  ├─ imessage.test.ts
│  │  │  │  ├─ imessage.ts
│  │  │  │  ├─ signal.test.ts
│  │  │  │  ├─ signal.ts
│  │  │  │  ├─ slack.ts
│  │  │  │  ├─ telegram.test.ts
│  │  │  │  ├─ telegram.ts
│  │  │  │  ├─ whatsapp.test.ts
│  │  │  │  └─ whatsapp.ts
│  │  │  ├─ outbound/
│  │  │  │  ├─ direct-text-media.sendpayload.test.ts
│  │  │  │  ├─ direct-text-media.ts
│  │  │  │  ├─ discord.sendpayload.test.ts
│  │  │  │  ├─ discord.test.ts
│  │  │  │  ├─ discord.ts
│  │  │  │  ├─ imessage.test.ts
│  │  │  │  ├─ imessage.ts
│  │  │  │  ├─ load.ts
│  │  │  │  ├─ signal.test.ts
│  │  │  │  ├─ signal.ts
│  │  │  │  ├─ slack.sendpayload.test.ts
│  │  │  │  ├─ slack.test.ts
│  │  │  │  ├─ slack.ts
│  │  │  │  ├─ telegram.test.ts
│  │  │  │  ├─ telegram.ts
│  │  │  │  ├─ whatsapp.poll.test.ts
│  │  │  │  ├─ whatsapp.sendpayload.test.ts
│  │  │  │  └─ whatsapp.ts
│  │  │  ├─ status-issues/
│  │  │  │  ├─ bluebubbles.test.ts
│  │  │  │  ├─ bluebubbles.ts
│  │  │  │  ├─ discord.ts
│  │  │  │  ├─ shared.ts
│  │  │  │  ├─ telegram.ts
│  │  │  │  ├─ whatsapp.test.ts
│  │  │  │  └─ whatsapp.ts
│  │  │  ├─ account-action-gate.test.ts
│  │  │  ├─ account-action-gate.ts
│  │  │  ├─ account-helpers.test.ts
│  │  │  ├─ account-helpers.ts
│  │  │  ├─ allowlist-match.ts
│  │  │  ├─ bluebubbles-actions.ts
│  │  │  ├─ catalog.ts
│  │  │  ├─ channel-config.ts
│  │  │  ├─ config-helpers.ts
│  │  │  ├─ config-schema.test.ts
│  │  │  ├─ config-schema.ts
│  │  │  ├─ config-writes.ts
│  │  │  ├─ directory-config.ts
│  │  │  ├─ group-mentions.test.ts
│  │  │  ├─ group-mentions.ts
│  │  │  ├─ helpers.ts
│  │  │  ├─ index.ts
│  │  │  ├─ load.ts
│  │  │  ├─ media-limits.ts
│  │  │  ├─ media-payload.ts
│  │  │  ├─ message-action-names.ts
│  │  │  ├─ message-actions.security.test.ts
│  │  │  ├─ message-actions.test.ts
│  │  │  ├─ message-actions.ts
│  │  │  ├─ onboarding-types.ts
│  │  │  ├─ pairing-message.ts
│  │  │  ├─ pairing.ts
│  │  │  ├─ plugins-channel.test.ts
│  │  │  ├─ plugins-core.test.ts
│  │  │  ├─ registry-loader.ts
│  │  │  ├─ setup-helpers.ts
│  │  │  ├─ slack.actions.ts
│  │  │  ├─ status.ts
│  │  │  ├─ types.adapters.ts
│  │  │  ├─ types.core.ts
│  │  │  ├─ types.plugin.ts
│  │  │  ├─ types.ts
│  │  │  ├─ whatsapp-heartbeat.test.ts
│  │  │  ├─ whatsapp-heartbeat.ts
│  │  │  └─ whatsapp-shared.ts
│  │  ├─ telegram/
│  │  │  ├─ allow-from.test.ts
│  │  │  ├─ allow-from.ts
│  │  │  ├─ api.test.ts
│  │  │  └─ api.ts
│  │  ├─ transport/
│  │  │  ├─ stall-watchdog.test.ts
│  │  │  └─ stall-watchdog.ts
│  │  ├─ web/
│  │  │  └─ index.ts
│  │  ├─ account-snapshot-fields.test.ts
│  │  ├─ account-snapshot-fields.ts
│  │  ├─ account-summary.ts
│  │  ├─ ack-reactions.test.ts
│  │  ├─ ack-reactions.ts
│  │  ├─ allow-from.test.ts
│  │  ├─ allow-from.ts
│  │  ├─ allowlist-match.ts
│  │  ├─ channel-config.test.ts
│  │  ├─ channel-config.ts
│  │  ├─ channels-misc.test.ts
│  │  ├─ chat-type.ts
│  │  ├─ command-gating.test.ts
│  │  ├─ command-gating.ts
│  │  ├─ conversation-label.test.ts
│  │  ├─ conversation-label.ts
│  │  ├─ dock.test.ts
│  │  ├─ dock.ts
│  │  ├─ draft-stream-controls.test.ts
│  │  ├─ draft-stream-controls.ts
│  │  ├─ draft-stream-loop.ts
│  │  ├─ inbound-debounce-policy.test.ts
│  │  ├─ inbound-debounce-policy.ts
│  │  ├─ location.test.ts
│  │  ├─ location.ts
│  │  ├─ logging.ts
│  │  ├─ mention-gating.test.ts
│  │  ├─ mention-gating.ts
│  │  ├─ model-overrides.test.ts
│  │  ├─ model-overrides.ts
│  │  ├─ read-only-account-inspect.ts
│  │  ├─ registry.helpers.test.ts
│  │  ├─ registry.ts
│  │  ├─ reply-prefix.ts
│  │  ├─ run-state-machine.test.ts
│  │  ├─ run-state-machine.ts
│  │  ├─ sender-identity.ts
│  │  ├─ sender-label.test.ts
│  │  ├─ sender-label.ts
│  │  ├─ session-envelope.ts
│  │  ├─ session-meta.ts
│  │  ├─ session.test.ts
│  │  ├─ session.ts
│  │  ├─ status-reactions.test.ts
│  │  ├─ status-reactions.ts
│  │  ├─ targets.test.ts
│  │  ├─ targets.ts
│  │  ├─ thread-bindings-messages.ts
│  │  ├─ thread-bindings-policy.ts
│  │  ├─ typing-lifecycle.ts
│  │  ├─ typing-start-guard.test.ts
│  │  ├─ typing-start-guard.ts
│  │  ├─ typing.test.ts
│  │  └─ typing.ts
│  ├─ cli/
│  │  ├─ browser-cli-actions-input/
│  │  │  ├─ register.element.ts
│  │  │  ├─ register.files-downloads.ts
│  │  │  ├─ register.form-wait-eval.ts
│  │  │  ├─ register.navigation.ts
│  │  │  ├─ register.ts
│  │  │  ├─ shared.test.ts
│  │  │  └─ shared.ts
│  │  ├─ cron-cli/
│  │  │  ├─ register.cron-add.ts
│  │  │  ├─ register.cron-edit.ts
│  │  │  ├─ register.cron-simple.ts
│  │  │  ├─ register.ts
│  │  │  ├─ shared.test.ts
│  │  │  └─ shared.ts
│  │  ├─ daemon-cli/
│  │  │  ├─ install.integration.test.ts
│  │  │  ├─ install.test.ts
│  │  │  ├─ install.ts
│  │  │  ├─ lifecycle-core.test.ts
│  │  │  ├─ lifecycle-core.ts
│  │  │  ├─ lifecycle.test.ts
│  │  │  ├─ lifecycle.ts
│  │  │  ├─ probe.ts
│  │  │  ├─ register-service-commands.test.ts
│  │  │  ├─ register-service-commands.ts
│  │  │  ├─ register.ts
│  │  │  ├─ response.ts
│  │  │  ├─ restart-health.test.ts
│  │  │  ├─ restart-health.ts
│  │  │  ├─ runners.ts
│  │  │  ├─ shared.test.ts
│  │  │  ├─ shared.ts
│  │  │  ├─ status.gather.test.ts
│  │  │  ├─ status.gather.ts
│  │  │  ├─ status.print.ts
│  │  │  ├─ status.ts
│  │  │  └─ types.ts
│  │  ├─ gateway-cli/
│  │  │  ├─ call.ts
│  │  │  ├─ dev.ts
│  │  │  ├─ discover.ts
│  │  │  ├─ register.option-collisions.test.ts
│  │  │  ├─ register.ts
│  │  │  ├─ run-loop.test.ts
│  │  │  ├─ run-loop.ts
│  │  │  ├─ run.option-collisions.test.ts
│  │  │  ├─ run.ts
│  │  │  └─ shared.ts
│  │  ├─ node-cli/
│  │  │  ├─ daemon.ts
│  │  │  └─ register.ts
│  │  ├─ nodes-cli/
│  │  │  ├─ a2ui-jsonl.ts
│  │  │  ├─ cli-utils.ts
│  │  │  ├─ format.ts
│  │  │  ├─ pairing-render.ts
│  │  │  ├─ register.camera.ts
│  │  │  ├─ register.canvas.ts
│  │  │  ├─ register.invoke.nodes-run-approval-timeout.test.ts
│  │  │  ├─ register.invoke.ts
│  │  │  ├─ register.location.ts
│  │  │  ├─ register.notify.ts
│  │  │  ├─ register.pairing.ts
│  │  │  ├─ register.push.ts
│  │  │  ├─ register.screen.ts
│  │  │  ├─ register.status.ts
│  │  │  ├─ register.ts
│  │  │  ├─ rpc.ts
│  │  │  └─ types.ts
│  │  ├─ program/
│  │  │  ├─ message/
│  │  │  │  ├─ helpers.test.ts
│  │  │  │  ├─ helpers.ts
│  │  │  │  ├─ register.broadcast.ts
│  │  │  │  ├─ register.discord-admin.ts
│  │  │  │  ├─ register.emoji-sticker.ts
│  │  │  │  ├─ register.permissions-search.ts
│  │  │  │  ├─ register.pins.ts
│  │  │  │  ├─ register.poll.ts
│  │  │  │  ├─ register.reactions.ts
│  │  │  │  ├─ register.read-edit-delete.ts
│  │  │  │  ├─ register.send.ts
│  │  │  │  └─ register.thread.ts
│  │  │  ├─ action-reparse.test.ts
│  │  │  ├─ action-reparse.ts
│  │  │  ├─ build-program.test.ts
│  │  │  ├─ build-program.ts
│  │  │  ├─ build-program.version-alias.test.ts
│  │  │  ├─ command-registry.test.ts
│  │  │  ├─ command-registry.ts
│  │  │  ├─ command-tree.test.ts
│  │  │  ├─ command-tree.ts
│  │  │  ├─ config-guard.test.ts
│  │  │  ├─ config-guard.ts
│  │  │  ├─ context.test.ts
│  │  │  ├─ context.ts
│  │  │  ├─ help.test.ts
│  │  │  ├─ help.ts
│  │  │  ├─ helpers.test.ts
│  │  │  ├─ helpers.ts
│  │  │  ├─ preaction.test.ts
│  │  │  ├─ preaction.ts
│  │  │  ├─ program-context.test.ts
│  │  │  ├─ program-context.ts
│  │  │  ├─ register.agent.test.ts
│  │  │  ├─ register.agent.ts
│  │  │  ├─ register.configure.test.ts
│  │  │  ├─ register.configure.ts
│  │  │  ├─ register.maintenance.test.ts
│  │  │  ├─ register.maintenance.ts
│  │  │  ├─ register.message.test.ts
│  │  │  ├─ register.message.ts
│  │  │  ├─ register.onboard.test.ts
│  │  │  ├─ register.onboard.ts
│  │  │  ├─ register.setup.test.ts
│  │  │  ├─ register.setup.ts
│  │  │  ├─ register.status-health-sessions.test.ts
│  │  │  ├─ register.status-health-sessions.ts
│  │  │  ├─ register.subclis.test.ts
│  │  │  ├─ register.subclis.ts
│  │  │  ├─ routes.test.ts
│  │  │  └─ routes.ts
│  │  ├─ shared/
│  │  │  └─ parse-port.ts
│  │  ├─ update-cli/
│  │  │  ├─ progress.test.ts
│  │  │  ├─ progress.ts
│  │  │  ├─ restart-helper.test.ts
│  │  │  ├─ restart-helper.ts
│  │  │  ├─ shared.command-runner.test.ts
│  │  │  ├─ shared.ts
│  │  │  ├─ status.ts
│  │  │  ├─ suppress-deprecations.ts
│  │  │  ├─ update-command.ts
│  │  │  └─ wizard.ts
│  │  ├─ acp-cli.option-collisions.test.ts
│  │  ├─ acp-cli.ts
│  │  ├─ argv.test.ts
│  │  ├─ argv.ts
│  │  ├─ banner.test.ts
│  │  ├─ banner.ts
│  │  ├─ browser-cli-actions-input.ts
│  │  ├─ browser-cli-actions-observe.ts
│  │  ├─ browser-cli-debug.ts
│  │  ├─ browser-cli-examples.ts
│  │  ├─ browser-cli-extension.test.ts
│  │  ├─ browser-cli-extension.ts
│  │  ├─ browser-cli-inspect.test.ts
│  │  ├─ browser-cli-inspect.ts
│  │  ├─ browser-cli-manage.timeout-option.test.ts
│  │  ├─ browser-cli-manage.ts
│  │  ├─ browser-cli-resize.ts
│  │  ├─ browser-cli-shared.ts
│  │  ├─ browser-cli-state.cookies-storage.ts
│  │  ├─ browser-cli-state.option-collisions.test.ts
│  │  ├─ browser-cli-state.ts
│  │  ├─ browser-cli-test-helpers.ts
│  │  ├─ browser-cli.test.ts
│  │  ├─ browser-cli.ts
│  │  ├─ channel-auth.test.ts
│  │  ├─ channel-auth.ts
│  │  ├─ channel-options.test.ts
│  │  ├─ channel-options.ts
│  │  ├─ channels-cli.ts
│  │  ├─ clawbot-cli.ts
│  │  ├─ cli-name.ts
│  │  ├─ cli-utils.test.ts
│  │  ├─ cli-utils.ts
│  │  ├─ command-format.ts
│  │  ├─ command-options.test.ts
│  │  ├─ command-options.ts
│  │  ├─ command-secret-gateway.test.ts
│  │  ├─ command-secret-gateway.ts
│  │  ├─ command-secret-resolution.coverage.test.ts
│  │  ├─ command-secret-targets.test.ts
│  │  ├─ command-secret-targets.ts
│  │  ├─ completion-cli.ts
│  │  ├─ completion-fish.test.ts
│  │  ├─ completion-fish.ts
│  │  ├─ config-cli.test.ts
│  │  ├─ config-cli.ts
│  │  ├─ cron-cli.test.ts
│  │  ├─ cron-cli.ts
│  │  ├─ daemon-cli-compat.test.ts
│  │  ├─ daemon-cli-compat.ts
│  │  ├─ daemon-cli.coverage.test.ts
│  │  ├─ daemon-cli.ts
│  │  ├─ deps-send-discord.runtime.ts
│  │  ├─ deps-send-imessage.runtime.ts
│  │  ├─ deps-send-signal.runtime.ts
│  │  ├─ deps-send-slack.runtime.ts
│  │  ├─ deps-send-telegram.runtime.ts
│  │  ├─ deps-send-whatsapp.runtime.ts
│  │  ├─ deps.test.ts
│  │  ├─ deps.ts
│  │  ├─ devices-cli.test.ts
│  │  ├─ devices-cli.ts
│  │  ├─ directory-cli.ts
│  │  ├─ dns-cli.ts
│  │  ├─ docs-cli.ts
│  │  ├─ exec-approvals-cli.test.ts
│  │  ├─ exec-approvals-cli.ts
│  │  ├─ gateway-cli.coverage.test.ts
│  │  ├─ gateway-cli.ts
│  │  ├─ gateway-rpc.ts
│  │  ├─ gateway.sigterm.test.ts
│  │  ├─ help-format.ts
│  │  ├─ hooks-cli.test.ts
│  │  ├─ hooks-cli.ts
│  │  ├─ install-spec.ts
│  │  ├─ log-level-option.test.ts
│  │  ├─ log-level-option.ts
│  │  ├─ logs-cli.test.ts
│  │  ├─ logs-cli.ts
│  │  ├─ memory-cli.test.ts
│  │  ├─ memory-cli.ts
│  │  ├─ models-cli.test.ts
│  │  ├─ models-cli.ts
│  │  ├─ node-cli.ts
│  │  ├─ nodes-camera.test.ts
│  │  ├─ nodes-camera.ts
│  │  ├─ nodes-canvas.ts
│  │  ├─ nodes-cli.coverage.test.ts
│  │  ├─ nodes-cli.ts
│  │  ├─ nodes-media-utils.test.ts
│  │  ├─ nodes-media-utils.ts
│  │  ├─ nodes-run.ts
│  │  ├─ nodes-screen.ts
│  │  ├─ npm-resolution.test.ts
│  │  ├─ npm-resolution.ts
│  │  ├─ outbound-send-deps.ts
│  │  ├─ outbound-send-mapping.test.ts
│  │  ├─ outbound-send-mapping.ts
│  │  ├─ pairing-cli.test.ts
│  │  ├─ pairing-cli.ts
│  │  ├─ parse-bytes.ts
│  │  ├─ parse-duration.ts
│  │  ├─ parse-timeout.ts
│  │  ├─ plugin-install-plan.test.ts
│  │  ├─ plugin-install-plan.ts
│  │  ├─ plugin-registry.ts
│  │  ├─ plugins-cli.ts
│  │  ├─ plugins-config.test.ts
│  │  ├─ plugins-config.ts
│  │  ├─ ports.test.ts
│  │  ├─ ports.ts
│  │  ├─ profile-utils.ts
│  │  ├─ profile.test.ts
│  │  ├─ profile.ts
│  │  ├─ program.force.test.ts
│  │  ├─ program.nodes-basic.e2e.test.ts
│  │  ├─ program.nodes-media.e2e.test.ts
│  │  ├─ program.nodes-test-helpers.test.ts
│  │  ├─ program.nodes-test-helpers.ts
│  │  ├─ program.smoke.test.ts
│  │  ├─ program.test-mocks.ts
│  │  ├─ program.ts
│  │  ├─ progress.test.ts
│  │  ├─ progress.ts
│  │  ├─ prompt.test.ts
│  │  ├─ prompt.ts
│  │  ├─ qr-cli.test.ts
│  │  ├─ qr-cli.ts
│  │  ├─ qr-dashboard.integration.test.ts
│  │  ├─ requirements-test-fixtures.ts
│  │  ├─ respawn-policy.ts
│  │  ├─ route.test.ts
│  │  ├─ route.ts
│  │  ├─ run-main.exit.test.ts
│  │  ├─ run-main.profile-env.test.ts
│  │  ├─ run-main.test.ts
│  │  ├─ run-main.ts
│  │  ├─ sandbox-cli.ts
│  │  ├─ secrets-cli.test.ts
│  │  ├─ secrets-cli.ts
│  │  ├─ security-cli.ts
│  │  ├─ skills-cli.commands.test.ts
│  │  ├─ skills-cli.format.ts
│  │  ├─ skills-cli.formatting.test.ts
│  │  ├─ skills-cli.test.ts
│  │  ├─ skills-cli.ts
│  │  ├─ system-cli.test.ts
│  │  ├─ system-cli.ts
│  │  ├─ tagline.test.ts
│  │  ├─ tagline.ts
│  │  ├─ test-runtime-capture.ts
│  │  ├─ tui-cli.ts
│  │  ├─ update-cli.option-collisions.test.ts
│  │  ├─ update-cli.test.ts
│  │  ├─ update-cli.ts
│  │  ├─ wait.ts
│  │  ├─ webhooks-cli.ts
│  │  └─ windows-argv.ts
│  ├─ commands/
│  │  ├─ agent/
│  │  │  ├─ delivery.ts
│  │  │  ├─ run-context.ts
│  │  │  ├─ session-store.test.ts
│  │  │  ├─ session-store.ts
│  │  │  ├─ session.test.ts
│  │  │  ├─ session.ts
│  │  │  └─ types.ts
│  │  ├─ channels/
│  │  │  ├─ add-mutators.ts
│  │  │  ├─ add.ts
│  │  │  ├─ capabilities.test.ts
│  │  │  ├─ capabilities.ts
│  │  │  ├─ list.ts
│  │  │  ├─ logs.ts
│  │  │  ├─ remove.ts
│  │  │  ├─ resolve.ts
│  │  │  ├─ shared.ts
│  │  │  └─ status.ts
│  │  ├─ gateway-status/
│  │  │  ├─ helpers.test.ts
│  │  │  └─ helpers.ts
│  │  ├─ models/
│  │  │  ├─ aliases.ts
│  │  │  ├─ auth-order.ts
│  │  │  ├─ auth.test.ts
│  │  │  ├─ auth.ts
│  │  │  ├─ fallbacks-shared.ts
│  │  │  ├─ fallbacks.ts
│  │  │  ├─ image-fallbacks.ts
│  │  │  ├─ list.auth-overview.test.ts
│  │  │  ├─ list.auth-overview.ts
│  │  │  ├─ list.configured.ts
│  │  │  ├─ list.errors.ts
│  │  │  ├─ list.format.ts
│  │  │  ├─ list.list-command.forward-compat.test.ts
│  │  │  ├─ list.list-command.ts
│  │  │  ├─ list.probe.targets.test.ts
│  │  │  ├─ list.probe.test.ts
│  │  │  ├─ list.probe.ts
│  │  │  ├─ list.registry.ts
│  │  │  ├─ list.status-command.ts
│  │  │  ├─ list.status.test.ts
│  │  │  ├─ list.table.ts
│  │  │  ├─ list.ts
│  │  │  ├─ list.types.ts
│  │  │  ├─ load-config.ts
│  │  │  ├─ scan.ts
│  │  │  ├─ set-image.ts
│  │  │  ├─ set.ts
│  │  │  ├─ shared.test.ts
│  │  │  └─ shared.ts
│  │  ├─ onboard-non-interactive/
│  │  │  ├─ local/
│  │  │  │  ├─ auth-choice-inference.ts
│  │  │  │  ├─ auth-choice.ts
│  │  │  │  ├─ daemon-install.test.ts
│  │  │  │  ├─ daemon-install.ts
│  │  │  │  ├─ gateway-config.ts
│  │  │  │  ├─ output.ts
│  │  │  │  ├─ skills-config.ts
│  │  │  │  └─ workspace.ts
│  │  │  ├─ api-keys.ts
│  │  │  ├─ local.ts
│  │  │  └─ remote.ts
│  │  ├─ onboarding/
│  │  │  ├─ __tests__/
│  │  │  │  └─ test-utils.ts
│  │  │  ├─ plugin-install.test.ts
│  │  │  ├─ plugin-install.ts
│  │  │  ├─ registry.ts
│  │  │  └─ types.ts
│  │  ├─ status-all/
│  │  │  ├─ agents.ts
│  │  │  ├─ channel-issues.ts
│  │  │  ├─ channels.mattermost-token-summary.test.ts
│  │  │  ├─ channels.ts
│  │  │  ├─ diagnosis.ts
│  │  │  ├─ format.ts
│  │  │  ├─ gateway.ts
│  │  │  ├─ report-lines.test.ts
│  │  │  └─ report-lines.ts
│  │  ├─ agent-via-gateway.test.ts
│  │  ├─ agent-via-gateway.ts
│  │  ├─ agent.acp.test.ts
│  │  ├─ agent.delivery.test.ts
│  │  ├─ agent.test.ts
│  │  ├─ agent.ts
│  │  ├─ agents.add.test.ts
│  │  ├─ agents.bind.commands.test.ts
│  │  ├─ agents.bindings.ts
│  │  ├─ agents.command-shared.ts
│  │  ├─ agents.commands.add.ts
│  │  ├─ agents.commands.bind.ts
│  │  ├─ agents.commands.delete.ts
│  │  ├─ agents.commands.identity.ts
│  │  ├─ agents.commands.list.ts
│  │  ├─ agents.config.ts
│  │  ├─ agents.identity.test.ts
│  │  ├─ agents.providers.ts
│  │  ├─ agents.test.ts
│  │  ├─ agents.ts
│  │  ├─ auth-choice-legacy.ts
│  │  ├─ auth-choice-options.test.ts
│  │  ├─ auth-choice-options.ts
│  │  ├─ auth-choice-prompt.ts
│  │  ├─ auth-choice.api-key.ts
│  │  ├─ auth-choice.apply-helpers.test.ts
│  │  ├─ auth-choice.apply-helpers.ts
│  │  ├─ auth-choice.apply.anthropic.test.ts
│  │  ├─ auth-choice.apply.anthropic.ts
│  │  ├─ auth-choice.apply.api-providers.ts
│  │  ├─ auth-choice.apply.byteplus.ts
│  │  ├─ auth-choice.apply.copilot-proxy.ts
│  │  ├─ auth-choice.apply.github-copilot.ts
│  │  ├─ auth-choice.apply.google-gemini-cli.test.ts
│  │  ├─ auth-choice.apply.google-gemini-cli.ts
│  │  ├─ auth-choice.apply.huggingface.test.ts
│  │  ├─ auth-choice.apply.huggingface.ts
│  │  ├─ auth-choice.apply.minimax.test.ts
│  │  ├─ auth-choice.apply.minimax.ts
│  │  ├─ auth-choice.apply.oauth.ts
│  │  ├─ auth-choice.apply.ollama.test.ts
│  │  ├─ auth-choice.apply.ollama.ts
│  │  ├─ auth-choice.apply.openai.test.ts
│  │  ├─ auth-choice.apply.openai.ts
│  │  ├─ auth-choice.apply.openrouter.ts
│  │  ├─ auth-choice.apply.plugin-provider.ts
│  │  ├─ auth-choice.apply.qwen-portal.ts
│  │  ├─ auth-choice.apply.ts
│  │  ├─ auth-choice.apply.vllm.ts
│  │  ├─ auth-choice.apply.volcengine-byteplus.test.ts
│  │  ├─ auth-choice.apply.volcengine.ts
│  │  ├─ auth-choice.apply.xai.ts
│  │  ├─ auth-choice.default-model.ts
│  │  ├─ auth-choice.model-check.ts
│  │  ├─ auth-choice.moonshot.test.ts
│  │  ├─ auth-choice.preferred-provider.ts
│  │  ├─ auth-choice.test.ts
│  │  ├─ auth-choice.ts
│  │  ├─ auth-token.ts
│  │  ├─ channel-account-context.test.ts
│  │  ├─ channel-account-context.ts
│  │  ├─ channel-test-helpers.ts
│  │  ├─ channels.add.test.ts
│  │  ├─ channels.adds-non-default-telegram-account.test.ts
│  │  ├─ channels.config-only-status-output.test.ts
│  │  ├─ channels.mock-harness.ts
│  │  ├─ channels.surfaces-signal-runtime-errors-channels-status-output.test.ts
│  │  ├─ channels.ts
│  │  ├─ chutes-oauth.test.ts
│  │  ├─ chutes-oauth.ts
│  │  ├─ cleanup-plan.ts
│  │  ├─ cleanup-utils.test.ts
│  │  ├─ cleanup-utils.ts
│  │  ├─ config-validation.ts
│  │  ├─ configure.channels.ts
│  │  ├─ configure.commands.ts
│  │  ├─ configure.daemon.test.ts
│  │  ├─ configure.daemon.ts
│  │  ├─ configure.gateway-auth.prompt-auth-config.test.ts
│  │  ├─ configure.gateway-auth.test.ts
│  │  ├─ configure.gateway-auth.ts
│  │  ├─ configure.gateway.test.ts
│  │  ├─ configure.gateway.ts
│  │  ├─ configure.shared.ts
│  │  ├─ configure.ts
│  │  ├─ configure.wizard.test.ts
│  │  ├─ configure.wizard.ts
│  │  ├─ daemon-install-helpers.test.ts
│  │  ├─ daemon-install-helpers.ts
│  │  ├─ daemon-install-runtime-warning.test.ts
│  │  ├─ daemon-install-runtime-warning.ts
│  │  ├─ daemon-runtime.ts
│  │  ├─ dashboard.links.test.ts
│  │  ├─ dashboard.test.ts
│  │  ├─ dashboard.ts
│  │  ├─ docs.ts
│  │  ├─ doctor-auth.deprecated-cli-profiles.test.ts
│  │  ├─ doctor-auth.hints.test.ts
│  │  ├─ doctor-auth.ts
│  │  ├─ doctor-bootstrap-size.test.ts
│  │  ├─ doctor-bootstrap-size.ts
│  │  ├─ doctor-completion.ts
│  │  ├─ doctor-config-flow.include-warning.test.ts
│  │  ├─ doctor-config-flow.missing-default-account-bindings.integration.test.ts
│  │  ├─ doctor-config-flow.missing-default-account-bindings.test.ts
│  │  ├─ doctor-config-flow.missing-explicit-default-account.test.ts
│  │  ├─ doctor-config-flow.safe-bins.test.ts
│  │  ├─ doctor-config-flow.test-utils.ts
│  │  ├─ doctor-config-flow.test.ts
│  │  ├─ doctor-config-flow.ts
│  │  ├─ doctor-format.ts
│  │  ├─ doctor-gateway-auth-token.test.ts
│  │  ├─ doctor-gateway-auth-token.ts
│  │  ├─ doctor-gateway-daemon-flow.ts
│  │  ├─ doctor-gateway-health.ts
│  │  ├─ doctor-gateway-services.test.ts
│  │  ├─ doctor-gateway-services.ts
│  │  ├─ doctor-install.ts
│  │  ├─ doctor-legacy-config.migrations.test.ts
│  │  ├─ doctor-legacy-config.test.ts
│  │  ├─ doctor-legacy-config.ts
│  │  ├─ doctor-memory-search.test.ts
│  │  ├─ doctor-memory-search.ts
│  │  ├─ doctor-platform-notes.launchctl-env-overrides.test.ts
│  │  ├─ doctor-platform-notes.startup-optimization.test.ts
│  │  ├─ doctor-platform-notes.ts
│  │  ├─ doctor-prompter.ts
│  │  ├─ doctor-sandbox.ts
│  │  ├─ doctor-sandbox.warns-sandbox-enabled-without-docker.test.ts
│  │  ├─ doctor-security.test.ts
│  │  ├─ doctor-security.ts
│  │  ├─ doctor-session-locks.test.ts
│  │  ├─ doctor-session-locks.ts
│  │  ├─ doctor-state-integrity.cloud-storage.test.ts
│  │  ├─ doctor-state-integrity.linux-storage.test.ts
│  │  ├─ doctor-state-integrity.test.ts
│  │  ├─ doctor-state-integrity.ts
│  │  ├─ doctor-state-migrations.test.ts
│  │  ├─ doctor-state-migrations.ts
│  │  ├─ doctor-ui.ts
│  │  ├─ doctor-update.ts
│  │  ├─ doctor-workspace-status.ts
│  │  ├─ doctor-workspace.ts
│  │  ├─ doctor.e2e-harness.ts
│  │  ├─ doctor.fast-path-mocks.ts
│  │  ├─ doctor.migrates-routing-allowfrom-channels-whatsapp-allowfrom.test.ts
│  │  ├─ doctor.migrates-slack-discord-dm-policy-aliases.test.ts
│  │  ├─ doctor.runs-legacy-state-migrations-yes-mode-without.e2e.test.ts
│  │  ├─ doctor.ts
│  │  ├─ doctor.warns-per-agent-sandbox-docker-browser-prune.e2e.test.ts
│  │  ├─ doctor.warns-state-directory-is-missing.e2e.test.ts
│  │  ├─ gateway-install-token.test.ts
│  │  ├─ gateway-install-token.ts
│  │  ├─ gateway-presence.ts
│  │  ├─ gateway-status.test.ts
│  │  ├─ gateway-status.ts
│  │  ├─ google-gemini-model-default.ts
│  │  ├─ health-format.ts
│  │  ├─ health.command.coverage.test.ts
│  │  ├─ health.snapshot.test.ts
│  │  ├─ health.test.ts
│  │  ├─ health.ts
│  │  ├─ message-format.ts
│  │  ├─ message.test.ts
│  │  ├─ message.ts
│  │  ├─ model-allowlist.ts
│  │  ├─ model-default.ts
│  │  ├─ model-picker.test.ts
│  │  ├─ model-picker.ts
│  │  ├─ models.auth.provider-resolution.test.ts
│  │  ├─ models.list.auth-sync.test.ts
│  │  ├─ models.list.e2e.test.ts
│  │  ├─ models.set.e2e.test.ts
│  │  ├─ models.ts
│  │  ├─ node-daemon-install-helpers.ts
│  │  ├─ node-daemon-runtime.ts
│  │  ├─ oauth-env.ts
│  │  ├─ oauth-flow.ts
│  │  ├─ oauth-tls-preflight.doctor.test.ts
│  │  ├─ oauth-tls-preflight.test.ts
│  │  ├─ oauth-tls-preflight.ts
│  │  ├─ ollama-setup.test.ts
│  │  ├─ ollama-setup.ts
│  │  ├─ onboard-auth.config-core.kilocode.test.ts
│  │  ├─ onboard-auth.config-core.ts
│  │  ├─ onboard-auth.config-gateways.ts
│  │  ├─ onboard-auth.config-litellm.ts
│  │  ├─ onboard-auth.config-minimax.ts
│  │  ├─ onboard-auth.config-opencode.ts
│  │  ├─ onboard-auth.config-shared.test.ts
│  │  ├─ onboard-auth.config-shared.ts
│  │  ├─ onboard-auth.credentials.test.ts
│  │  ├─ onboard-auth.credentials.ts
│  │  ├─ onboard-auth.models.ts
│  │  ├─ onboard-auth.test.ts
│  │  ├─ onboard-auth.ts
│  │  ├─ onboard-channels.e2e.test.ts
│  │  ├─ onboard-channels.ts
│  │  ├─ onboard-config.test.ts
│  │  ├─ onboard-config.ts
│  │  ├─ onboard-custom.test.ts
│  │  ├─ onboard-custom.ts
│  │  ├─ onboard-helpers.test.ts
│  │  ├─ onboard-helpers.ts
│  │  ├─ onboard-hooks.test.ts
│  │  ├─ onboard-hooks.ts
│  │  ├─ onboard-interactive.test.ts
│  │  ├─ onboard-interactive.ts
│  │  ├─ onboard-non-interactive.gateway.test.ts
│  │  ├─ onboard-non-interactive.provider-auth.test.ts
│  │  ├─ onboard-non-interactive.test-helpers.ts
│  │  ├─ onboard-non-interactive.ts
│  │  ├─ onboard-provider-auth-flags.ts
│  │  ├─ onboard-remote.test.ts
│  │  ├─ onboard-remote.ts
│  │  ├─ onboard-skills.test.ts
│  │  ├─ onboard-skills.ts
│  │  ├─ onboard-types.ts
│  │  ├─ onboard.test.ts
│  │  ├─ onboard.ts
│  │  ├─ openai-codex-model-default.ts
│  │  ├─ openai-codex-oauth.test.ts
│  │  ├─ openai-codex-oauth.ts
│  │  ├─ openai-model-default.test.ts
│  │  ├─ openai-model-default.ts
│  │  ├─ opencode-zen-model-default.ts
│  │  ├─ provider-auth-helpers.ts
│  │  ├─ reset.ts
│  │  ├─ sandbox-display.ts
│  │  ├─ sandbox-explain.test.ts
│  │  ├─ sandbox-explain.ts
│  │  ├─ sandbox-formatters.test.ts
│  │  ├─ sandbox-formatters.ts
│  │  ├─ sandbox.test.ts
│  │  ├─ sandbox.ts
│  │  ├─ session-store-targets.test.ts
│  │  ├─ session-store-targets.ts
│  │  ├─ sessions-cleanup.test.ts
│  │  ├─ sessions-cleanup.ts
│  │  ├─ sessions-table.ts
│  │  ├─ sessions.default-agent-store.test.ts
│  │  ├─ sessions.model-resolution.test.ts
│  │  ├─ sessions.test-helpers.ts
│  │  ├─ sessions.test.ts
│  │  ├─ sessions.ts
│  │  ├─ setup.ts
│  │  ├─ signal-install.test.ts
│  │  ├─ signal-install.ts
│  │  ├─ status-all.ts
│  │  ├─ status.agent-local.ts
│  │  ├─ status.command.ts
│  │  ├─ status.daemon.ts
│  │  ├─ status.format.ts
│  │  ├─ status.gateway-probe.ts
│  │  ├─ status.link-channel.ts
│  │  ├─ status.scan.test.ts
│  │  ├─ status.scan.ts
│  │  ├─ status.summary.redaction.test.ts
│  │  ├─ status.summary.ts
│  │  ├─ status.test.ts
│  │  ├─ status.ts
│  │  ├─ status.types.ts
│  │  ├─ status.update.test.ts
│  │  ├─ status.update.ts
│  │  ├─ systemd-linger.ts
│  │  ├─ test-runtime-config-helpers.ts
│  │  ├─ test-wizard-helpers.ts
│  │  ├─ text-format.test.ts
│  │  ├─ text-format.ts
│  │  ├─ uninstall.ts
│  │  ├─ vllm-setup.ts
│  │  ├─ zai-endpoint-detect.test.ts
│  │  └─ zai-endpoint-detect.ts
│  ├─ compat/
│  │  └─ legacy-names.ts
│  ├─ config/
│  │  ├─ sessions/
│  │  │  ├─ artifacts.test.ts
│  │  │  ├─ artifacts.ts
│  │  │  ├─ cache-fields.test.ts
│  │  │  ├─ delivery-info.test.ts
│  │  │  ├─ delivery-info.ts
│  │  │  ├─ disk-budget.test.ts
│  │  │  ├─ disk-budget.ts
│  │  │  ├─ group.ts
│  │  │  ├─ main-session.ts
│  │  │  ├─ metadata.ts
│  │  │  ├─ paths.ts
│  │  │  ├─ reset.ts
│  │  │  ├─ session-file.ts
│  │  │  ├─ session-key.ts
│  │  │  ├─ sessions.test.ts
│  │  │  ├─ store-cache.ts
│  │  │  ├─ store-maintenance.ts
│  │  │  ├─ store-migrations.ts
│  │  │  ├─ store.pruning.integration.test.ts
│  │  │  ├─ store.pruning.test.ts
│  │  │  ├─ store.session-key-normalization.test.ts
│  │  │  ├─ store.ts
│  │  │  ├─ transcript.ts
│  │  │  └─ types.ts
│  │  ├─ agent-dirs.test.ts
│  │  ├─ agent-dirs.ts
│  │  ├─ agent-limits.ts
│  │  ├─ allowed-values.test.ts
│  │  ├─ allowed-values.ts
│  │  ├─ backup-rotation.ts
│  │  ├─ bindings.ts
│  │  ├─ byte-size.ts
│  │  ├─ cache-utils.ts
│  │  ├─ channel-capabilities.test.ts
│  │  ├─ channel-capabilities.ts
│  │  ├─ commands.test.ts
│  │  ├─ commands.ts
│  │  ├─ config-misc.test.ts
│  │  ├─ config-paths.ts
│  │  ├─ config.acp-binding-cutover.test.ts
│  │  ├─ config.agent-concurrency-defaults.test.ts
│  │  ├─ config.allowlist-requires-allowfrom.test.ts
│  │  ├─ config.backup-rotation.test-helpers.ts
│  │  ├─ config.backup-rotation.test.ts
│  │  ├─ config.compaction-settings.test.ts
│  │  ├─ config.discord-presence.test.ts
│  │  ├─ config.discord.test.ts
│  │  ├─ config.dm-policy-alias.test.ts
│  │  ├─ config.env-vars.test.ts
│  │  ├─ config.gateway-tailscale-bind.test.ts
│  │  ├─ config.hooks-module-paths.test.ts
│  │  ├─ config.identity-avatar.test.ts
│  │  ├─ config.identity-defaults.test.ts
│  │  ├─ config.irc.test.ts
│  │  ├─ config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts
│  │  ├─ config.legacy-config-detection.rejects-routing-allowfrom.test.ts
│  │  ├─ config.meta-timestamp-coercion.test.ts
│  │  ├─ config.msteams.test.ts
│  │  ├─ config.multi-agent-agentdir-validation.test.ts
│  │  ├─ config.nix-integration-u3-u5-u9.test.ts
│  │  ├─ config.plugin-validation.test.ts
│  │  ├─ config.pruning-defaults.test.ts
│  │  ├─ config.sandbox-docker.test.ts
│  │  ├─ config.schema-regressions.test.ts
│  │  ├─ config.secrets-schema.test.ts
│  │  ├─ config.skills-entries-config.test.ts
│  │  ├─ config.talk-api-key-fallback.test.ts
│  │  ├─ config.telegram-audio-preflight.test.ts
│  │  ├─ config.telegram-custom-commands.test.ts
│  │  ├─ config.telegram-topic-agentid.test.ts
│  │  ├─ config.tools-alsoAllow.test.ts
│  │  ├─ config.ts
│  │  ├─ config.web-search-provider.test.ts
│  │  ├─ dangerous-name-matching.ts
│  │  ├─ defaults.ts
│  │  ├─ discord-preview-streaming.ts
│  │  ├─ env-preserve-io.test.ts
│  │  ├─ env-preserve.test.ts
│  │  ├─ env-preserve.ts
│  │  ├─ env-substitution.test.ts
│  │  ├─ env-substitution.ts
│  │  ├─ env-vars.ts
│  │  ├─ gateway-control-ui-origins.ts
│  │  ├─ group-policy.test.ts
│  │  ├─ group-policy.ts
│  │  ├─ home-env.test-harness.ts
│  │  ├─ includes-scan.ts
│  │  ├─ includes.test.ts
│  │  ├─ includes.ts
│  │  ├─ io.compat.test.ts
│  │  ├─ io.eacces.test.ts
│  │  ├─ io.owner-display-secret.test.ts
│  │  ├─ io.runtime-snapshot-write.test.ts
│  │  ├─ io.ts
│  │  ├─ io.write-config.test.ts
│  │  ├─ issue-format.test.ts
│  │  ├─ issue-format.ts
│  │  ├─ legacy-migrate.test-helpers.ts
│  │  ├─ legacy-migrate.test.ts
│  │  ├─ legacy-migrate.ts
│  │  ├─ legacy.migrations.part-1.ts
│  │  ├─ legacy.migrations.part-2.ts
│  │  ├─ legacy.migrations.part-3.ts
│  │  ├─ legacy.migrations.ts
│  │  ├─ legacy.rules.ts
│  │  ├─ legacy.shared.test.ts
│  │  ├─ legacy.shared.ts
│  │  ├─ legacy.ts
│  │  ├─ logging-max-file-bytes.test.ts
│  │  ├─ logging.ts
│  │  ├─ markdown-tables.ts
│  │  ├─ media-audio-field-metadata.ts
│  │  ├─ merge-config.ts
│  │  ├─ merge-patch.proto-pollution.test.ts
│  │  ├─ merge-patch.test.ts
│  │  ├─ merge-patch.ts
│  │  ├─ model-alias-defaults.test.ts
│  │  ├─ model-input.ts
│  │  ├─ normalize-exec-safe-bin.ts
│  │  ├─ normalize-paths.test.ts
│  │  ├─ normalize-paths.ts
│  │  ├─ paths.test.ts
│  │  ├─ paths.ts
│  │  ├─ plugin-auto-enable.test.ts
│  │  ├─ plugin-auto-enable.ts
│  │  ├─ plugins-allowlist.ts
│  │  ├─ plugins-runtime-boundary.test.ts
│  │  ├─ port-defaults.ts
│  │  ├─ prototype-keys.ts
│  │  ├─ redact-snapshot.raw.ts
│  │  ├─ redact-snapshot.secret-ref.ts
│  │  ├─ redact-snapshot.test.ts
│  │  ├─ redact-snapshot.ts
│  │  ├─ runtime-group-policy-provider.ts
│  │  ├─ runtime-group-policy.test.ts
│  │  ├─ runtime-group-policy.ts
│  │  ├─ runtime-overrides.test.ts
│  │  ├─ runtime-overrides.ts
│  │  ├─ schema.help.quality.test.ts
│  │  ├─ schema.help.ts
│  │  ├─ schema.hints.test.ts
│  │  ├─ schema.hints.ts
│  │  ├─ schema.irc.ts
│  │  ├─ schema.labels.ts
│  │  ├─ schema.tags.ts
│  │  ├─ schema.test.ts
│  │  ├─ schema.ts
│  │  ├─ sessions.cache.test.ts
│  │  ├─ sessions.test.ts
│  │  ├─ sessions.ts
│  │  ├─ slack-http-config.test.ts
│  │  ├─ slack-token-validation.test.ts
│  │  ├─ talk.normalize.test.ts
│  │  ├─ talk.ts
│  │  ├─ telegram-actions-poll.test.ts
│  │  ├─ telegram-custom-commands.ts
│  │  ├─ telegram-webhook-port.test.ts
│  │  ├─ telegram-webhook-secret.test.ts
│  │  ├─ test-helpers.ts
│  │  ├─ thread-bindings-config-keys.test.ts
│  │  ├─ types.acp.ts
│  │  ├─ types.agent-defaults.ts
│  │  ├─ types.agents-shared.ts
│  │  ├─ types.agents.ts
│  │  ├─ types.approvals.ts
│  │  ├─ types.auth.ts
│  │  ├─ types.base.ts
│  │  ├─ types.browser.ts
│  │  ├─ types.channel-messaging-common.ts
│  │  ├─ types.channels.ts
│  │  ├─ types.cli.ts
│  │  ├─ types.core.ts
│  │  ├─ types.cron.ts
│  │  ├─ types.discord.ts
│  │  ├─ types.gateway.ts
│  │  ├─ types.gensparx.ts
│  │  ├─ types.googlechat.ts
│  │  ├─ types.hooks.ts
│  │  ├─ types.imessage.ts
│  │  ├─ types.installs.ts
│  │  ├─ types.irc.ts
│  │  ├─ types.memory.ts
│  │  ├─ types.messages.ts
│  │  ├─ types.models.ts
│  │  ├─ types.msteams.ts
│  │  ├─ types.node-host.ts
│  │  ├─ types.plugins.ts
│  │  ├─ types.queue.ts
│  │  ├─ types.sandbox.ts
│  │  ├─ types.secrets.ts
│  │  ├─ types.signal.ts
│  │  ├─ types.skills.ts
│  │  ├─ types.slack.ts
│  │  ├─ types.telegram.ts
│  │  ├─ types.tools.ts
│  │  ├─ types.ts
│  │  ├─ types.tts.ts
│  │  ├─ types.whatsapp.ts
│  │  ├─ validation.allowed-values.test.ts
│  │  ├─ validation.ts
│  │  ├─ version.ts
│  │  ├─ zod-schema.agent-defaults.ts
│  │  ├─ zod-schema.agent-model.ts
│  │  ├─ zod-schema.agent-runtime.ts
│  │  ├─ zod-schema.agents.ts
│  │  ├─ zod-schema.allowdeny.ts
│  │  ├─ zod-schema.approvals.ts
│  │  ├─ zod-schema.channels.ts
│  │  ├─ zod-schema.core.ts
│  │  ├─ zod-schema.cron-retention.test.ts
│  │  ├─ zod-schema.hooks.ts
│  │  ├─ zod-schema.installs.ts
│  │  ├─ zod-schema.logging-levels.test.ts
│  │  ├─ zod-schema.providers-core.ts
│  │  ├─ zod-schema.providers-whatsapp.ts
│  │  ├─ zod-schema.providers.ts
│  │  ├─ zod-schema.secret-input-validation.ts
│  │  ├─ zod-schema.sensitive.ts
│  │  ├─ zod-schema.session-maintenance-extensions.test.ts
│  │  ├─ zod-schema.session.ts
│  │  ├─ zod-schema.ts
│  │  └─ zod-schema.typing-mode.test.ts
│  ├─ context-engine/
│  │  ├─ context-engine.test.ts
│  │  ├─ index.ts
│  │  ├─ init.ts
│  │  ├─ legacy.ts
│  │  ├─ registry.ts
│  │  └─ types.ts
│  ├─ cron/
│  │  ├─ isolated-agent/
│  │  │  ├─ delivery-dispatch.named-agent.test.ts
│  │  │  ├─ delivery-dispatch.ts
│  │  │  ├─ delivery-target.test.ts
│  │  │  ├─ delivery-target.ts
│  │  │  ├─ helpers.test.ts
│  │  │  ├─ helpers.ts
│  │  │  ├─ job-fixtures.ts
│  │  │  ├─ run.cron-model-override.test.ts
│  │  │  ├─ run.interim-retry.test.ts
│  │  │  ├─ run.payload-fallbacks.test.ts
│  │  │  ├─ run.session-key.test.ts
│  │  │  ├─ run.skill-filter.test.ts
│  │  │  ├─ run.suite-helpers.ts
│  │  │  ├─ run.test-harness.ts
│  │  │  ├─ run.ts
│  │  │  ├─ session-key.ts
│  │  │  ├─ session.test.ts
│  │  │  ├─ session.ts
│  │  │  ├─ skills-snapshot.ts
│  │  │  ├─ subagent-followup.test.ts
│  │  │  └─ subagent-followup.ts
│  │  ├─ service/
│  │  │  ├─ jobs.schedule-error-isolation.test.ts
│  │  │  ├─ jobs.ts
│  │  │  ├─ locked.ts
│  │  │  ├─ normalize.ts
│  │  │  ├─ ops.ts
│  │  │  ├─ state.ts
│  │  │  ├─ store.ts
│  │  │  ├─ timeout-policy.test.ts
│  │  │  ├─ timeout-policy.ts
│  │  │  └─ timer.ts
│  │  ├─ cron-protocol-conformance.test.ts
│  │  ├─ delivery.test.ts
│  │  ├─ delivery.ts
│  │  ├─ heartbeat-policy.test.ts
│  │  ├─ heartbeat-policy.ts
│  │  ├─ isolated-agent.auth-profile-propagation.test.ts
│  │  ├─ isolated-agent.delivers-response-has-heartbeat-ok-but-includes.test.ts
│  │  ├─ isolated-agent.delivery-target-thread-session.test.ts
│  │  ├─ isolated-agent.delivery.test-helpers.ts
│  │  ├─ isolated-agent.direct-delivery-forum-topics.test.ts
│  │  ├─ isolated-agent.mocks.ts
│  │  ├─ isolated-agent.model-formatting.test.ts
│  │  ├─ isolated-agent.skips-delivery-without-whatsapp-recipient-besteffortdeliver-true.test.ts
│  │  ├─ isolated-agent.subagent-model.test.ts
│  │  ├─ isolated-agent.test-harness.ts
│  │  ├─ isolated-agent.test-setup.ts
│  │  ├─ isolated-agent.ts
│  │  ├─ isolated-agent.uses-last-non-empty-agent-text-as.test.ts
│  │  ├─ legacy-delivery.ts
│  │  ├─ normalize.test.ts
│  │  ├─ normalize.ts
│  │  ├─ parse.ts
│  │  ├─ payload-migration.ts
│  │  ├─ run-log.test.ts
│  │  ├─ run-log.ts
│  │  ├─ schedule.test.ts
│  │  ├─ schedule.ts
│  │  ├─ service.armtimer-tight-loop.test.ts
│  │  ├─ service.delivery-plan.test.ts
│  │  ├─ service.every-jobs-fire.test.ts
│  │  ├─ service.failure-alert.test.ts
│  │  ├─ service.get-job.test.ts
│  │  ├─ service.heartbeat-ok-summary-suppressed.test.ts
│  │  ├─ service.issue-13992-regression.test.ts
│  │  ├─ service.issue-16156-list-skips-cron.test.ts
│  │  ├─ service.issue-17852-daily-skip.test.ts
│  │  ├─ service.issue-19676-at-reschedule.test.ts
│  │  ├─ service.issue-22895-every-next-run.test.ts
│  │  ├─ service.issue-35195-backup-timing.test.ts
│  │  ├─ service.issue-regressions.test-helpers.ts
│  │  ├─ service.issue-regressions.test.ts
│  │  ├─ service.jobs.test.ts
│  │  ├─ service.jobs.top-of-hour-stagger.test.ts
│  │  ├─ service.list-page-sort-guards.test.ts
│  │  ├─ service.main-job-passes-heartbeat-target-last.test.ts
│  │  ├─ service.persists-delivered-status.test.ts
│  │  ├─ service.prevents-duplicate-timers.test.ts
│  │  ├─ service.read-ops-nonblocking.test.ts
│  │  ├─ service.rearm-timer-when-running.test.ts
│  │  ├─ service.restart-catchup.test.ts
│  │  ├─ service.runs-one-shot-main-job-disables-it.test.ts
│  │  ├─ service.session-reaper-in-finally.test.ts
│  │  ├─ service.skips-main-jobs-empty-systemevent-text.test.ts
│  │  ├─ service.store-migration.test.ts
│  │  ├─ service.store.migration.test.ts
│  │  ├─ service.test-harness.ts
│  │  ├─ service.ts
│  │  ├─ session-reaper.test.ts
│  │  ├─ session-reaper.ts
│  │  ├─ stagger.test.ts
│  │  ├─ stagger.ts
│  │  ├─ store.test.ts
│  │  ├─ store.ts
│  │  ├─ types-shared.ts
│  │  ├─ types.ts
│  │  ├─ validate-timestamp.ts
│  │  └─ webhook-url.ts
│  ├─ daemon/
│  │  ├─ arg-split.ts
│  │  ├─ cmd-argv.test.ts
│  │  ├─ cmd-argv.ts
│  │  ├─ cmd-set.ts
│  │  ├─ constants.test.ts
│  │  ├─ constants.ts
│  │  ├─ diagnostics.ts
│  │  ├─ exec-file.ts
│  │  ├─ inspect.test.ts
│  │  ├─ inspect.ts
│  │  ├─ launchd-plist.ts
│  │  ├─ launchd.integration.e2e.test.ts
│  │  ├─ launchd.test.ts
│  │  ├─ launchd.ts
│  │  ├─ node-service.ts
│  │  ├─ output.ts
│  │  ├─ paths.ts
│  │  ├─ program-args.test.ts
│  │  ├─ program-args.ts
│  │  ├─ runtime-binary.test.ts
│  │  ├─ runtime-binary.ts
│  │  ├─ runtime-format.ts
│  │  ├─ runtime-parse.ts
│  │  ├─ runtime-paths.test.ts
│  │  ├─ runtime-paths.ts
│  │  ├─ schtasks-exec.ts
│  │  ├─ schtasks.install.test.ts
│  │  ├─ schtasks.test.ts
│  │  ├─ schtasks.ts
│  │  ├─ service-audit.test.ts
│  │  ├─ service-audit.ts
│  │  ├─ service-env.test.ts
│  │  ├─ service-env.ts
│  │  ├─ service-runtime.ts
│  │  ├─ service-types.ts
│  │  ├─ service.ts
│  │  ├─ systemd-hints.ts
│  │  ├─ systemd-linger.ts
│  │  ├─ systemd-unit.test.ts
│  │  ├─ systemd-unit.ts
│  │  ├─ systemd.test.ts
│  │  └─ systemd.ts
│  ├─ discord/
│  │  ├─ monitor/
│  │  │  ├─ agent-components.ts
│  │  │  ├─ agent-components.wildcard.test.ts
│  │  │  ├─ allow-list.ts
│  │  │  ├─ auto-presence.test.ts
│  │  │  ├─ auto-presence.ts
│  │  │  ├─ commands.test.ts
│  │  │  ├─ commands.ts
│  │  │  ├─ dm-command-auth.test.ts
│  │  │  ├─ dm-command-auth.ts
│  │  │  ├─ dm-command-decision.test.ts
│  │  │  ├─ dm-command-decision.ts
│  │  │  ├─ exec-approvals.test.ts
│  │  │  ├─ exec-approvals.ts
│  │  │  ├─ format.ts
│  │  │  ├─ gateway-error-guard.test.ts
│  │  │  ├─ gateway-error-guard.ts
│  │  │  ├─ gateway-plugin.ts
│  │  │  ├─ gateway-registry.ts
│  │  │  ├─ inbound-job.test.ts
│  │  │  ├─ inbound-job.ts
│  │  │  ├─ inbound-worker.ts
│  │  │  ├─ listeners.test.ts
│  │  │  ├─ listeners.ts
│  │  │  ├─ message-handler.bot-self-filter.test.ts
│  │  │  ├─ message-handler.inbound-contract.test.ts
│  │  │  ├─ message-handler.preflight.acp-bindings.test.ts
│  │  │  ├─ message-handler.preflight.test.ts
│  │  │  ├─ message-handler.preflight.ts
│  │  │  ├─ message-handler.preflight.types.ts
│  │  │  ├─ message-handler.process.test.ts
│  │  │  ├─ message-handler.process.ts
│  │  │  ├─ message-handler.queue.test.ts
│  │  │  ├─ message-handler.test-harness.ts
│  │  │  ├─ message-handler.ts
│  │  │  ├─ message-utils.test.ts
│  │  │  ├─ message-utils.ts
│  │  │  ├─ model-picker-preferences.test.ts
│  │  │  ├─ model-picker-preferences.ts
│  │  │  ├─ model-picker.test-utils.ts
│  │  │  ├─ model-picker.test.ts
│  │  │  ├─ model-picker.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ native-command.model-picker.test.ts
│  │  │  ├─ native-command.options.test.ts
│  │  │  ├─ native-command.plugin-dispatch.test.ts
│  │  │  ├─ native-command.ts
│  │  │  ├─ preflight-audio.ts
│  │  │  ├─ presence-cache.ts
│  │  │  ├─ presence.test.ts
│  │  │  ├─ presence.ts
│  │  │  ├─ provider.allowlist.test.ts
│  │  │  ├─ provider.allowlist.ts
│  │  │  ├─ provider.group-policy.test.ts
│  │  │  ├─ provider.lifecycle.test.ts
│  │  │  ├─ provider.lifecycle.ts
│  │  │  ├─ provider.proxy.test.ts
│  │  │  ├─ provider.rest-proxy.test.ts
│  │  │  ├─ provider.skill-dedupe.test.ts
│  │  │  ├─ provider.test.ts
│  │  │  ├─ provider.ts
│  │  │  ├─ reply-context.ts
│  │  │  ├─ reply-delivery.test.ts
│  │  │  ├─ reply-delivery.ts
│  │  │  ├─ rest-fetch.ts
│  │  │  ├─ sender-identity.ts
│  │  │  ├─ status.ts
│  │  │  ├─ system-events.ts
│  │  │  ├─ thread-bindings.config.ts
│  │  │  ├─ thread-bindings.discord-api.test.ts
│  │  │  ├─ thread-bindings.discord-api.ts
│  │  │  ├─ thread-bindings.lifecycle.test.ts
│  │  │  ├─ thread-bindings.lifecycle.ts
│  │  │  ├─ thread-bindings.manager.ts
│  │  │  ├─ thread-bindings.messages.ts
│  │  │  ├─ thread-bindings.persona.test.ts
│  │  │  ├─ thread-bindings.persona.ts
│  │  │  ├─ thread-bindings.shared-state.test.ts
│  │  │  ├─ thread-bindings.state.ts
│  │  │  ├─ thread-bindings.ts
│  │  │  ├─ thread-bindings.types.ts
│  │  │  ├─ thread-session-close.test.ts
│  │  │  ├─ thread-session-close.ts
│  │  │  ├─ threading.auto-thread.test.ts
│  │  │  ├─ threading.parent-info.test.ts
│  │  │  ├─ threading.starter.test.ts
│  │  │  ├─ threading.ts
│  │  │  ├─ timeouts.ts
│  │  │  └─ typing.ts
│  │  ├─ voice/
│  │  │  ├─ command.test.ts
│  │  │  ├─ command.ts
│  │  │  ├─ manager.e2e.test.ts
│  │  │  └─ manager.ts
│  │  ├─ account-inspect.ts
│  │  ├─ accounts.test.ts
│  │  ├─ accounts.ts
│  │  ├─ api.test.ts
│  │  ├─ api.ts
│  │  ├─ audit.test.ts
│  │  ├─ audit.ts
│  │  ├─ chunk.test.ts
│  │  ├─ chunk.ts
│  │  ├─ client.ts
│  │  ├─ components-registry.ts
│  │  ├─ components.test.ts
│  │  ├─ components.ts
│  │  ├─ directory-cache.ts
│  │  ├─ directory-live.test.ts
│  │  ├─ directory-live.ts
│  │  ├─ draft-chunking.ts
│  │  ├─ draft-stream.ts
│  │  ├─ gateway-logging.test.ts
│  │  ├─ gateway-logging.ts
│  │  ├─ guilds.ts
│  │  ├─ mentions.test.ts
│  │  ├─ mentions.ts
│  │  ├─ monitor.gateway.test.ts
│  │  ├─ monitor.gateway.ts
│  │  ├─ monitor.test.ts
│  │  ├─ monitor.tool-result.accepts-guild-messages-mentionpatterns-match.e2e.test.ts
│  │  ├─ monitor.tool-result.sends-status-replies-responseprefix.test.ts
│  │  ├─ monitor.tool-result.test-harness.ts
│  │  ├─ monitor.ts
│  │  ├─ pluralkit.test.ts
│  │  ├─ pluralkit.ts
│  │  ├─ probe.intents.test.ts
│  │  ├─ probe.parse-token.test.ts
│  │  ├─ probe.ts
│  │  ├─ resolve-channels.test.ts
│  │  ├─ resolve-channels.ts
│  │  ├─ resolve-users.test.ts
│  │  ├─ resolve-users.ts
│  │  ├─ send.channels.ts
│  │  ├─ send.components.test.ts
│  │  ├─ send.components.ts
│  │  ├─ send.creates-thread.test.ts
│  │  ├─ send.emojis-stickers.ts
│  │  ├─ send.guild.ts
│  │  ├─ send.messages.ts
│  │  ├─ send.outbound.ts
│  │  ├─ send.permissions.authz.test.ts
│  │  ├─ send.permissions.ts
│  │  ├─ send.reactions.ts
│  │  ├─ send.sends-basic-channel-messages.test.ts
│  │  ├─ send.shared.ts
│  │  ├─ send.test-harness.ts
│  │  ├─ send.ts
│  │  ├─ send.types.ts
│  │  ├─ send.webhook-activity.test.ts
│  │  ├─ targets.test.ts
│  │  ├─ targets.ts
│  │  ├─ test-http-helpers.ts
│  │  ├─ token.test.ts
│  │  ├─ token.ts
│  │  ├─ ui.ts
│  │  ├─ voice-message.test.ts
│  │  └─ voice-message.ts
│  ├─ docs/
│  │  └─ slash-commands-doc.test.ts
│  ├─ gateway/
│  │  ├─ protocol/
│  │  │  ├─ schema/
│  │  │  │  ├─ agent.ts
│  │  │  │  ├─ agents-models-skills.ts
│  │  │  │  ├─ channels.ts
│  │  │  │  ├─ config.ts
│  │  │  │  ├─ cron.ts
│  │  │  │  ├─ devices.ts
│  │  │  │  ├─ error-codes.ts
│  │  │  │  ├─ exec-approvals.ts
│  │  │  │  ├─ frames.ts
│  │  │  │  ├─ logs-chat.ts
│  │  │  │  ├─ nodes.ts
│  │  │  │  ├─ primitives.ts
│  │  │  │  ├─ protocol-schemas.ts
│  │  │  │  ├─ push.ts
│  │  │  │  ├─ secrets.ts
│  │  │  │  ├─ sessions.ts
│  │  │  │  ├─ snapshot.ts
│  │  │  │  ├─ types.ts
│  │  │  │  └─ wizard.ts
│  │  │  ├─ client-info.ts
│  │  │  ├─ connect-error-details.ts
│  │  │  ├─ cron-validators.test.ts
│  │  │  ├─ index.test.ts
│  │  │  ├─ index.ts
│  │  │  └─ schema.ts
│  │  ├─ server/
│  │  │  ├─ __tests__/
│  │  │  │  └─ test-utils.ts
│  │  │  ├─ plugins-http/
│  │  │  │  ├─ path-context.ts
│  │  │  │  ├─ route-auth.ts
│  │  │  │  └─ route-match.ts
│  │  │  ├─ ws-connection/
│  │  │  │  ├─ auth-context.test.ts
│  │  │  │  ├─ auth-context.ts
│  │  │  │  ├─ auth-messages.ts
│  │  │  │  ├─ connect-policy.test.ts
│  │  │  │  ├─ connect-policy.ts
│  │  │  │  ├─ message-handler.ts
│  │  │  │  ├─ unauthorized-flood-guard.test.ts
│  │  │  │  └─ unauthorized-flood-guard.ts
│  │  │  ├─ close-reason.ts
│  │  │  ├─ health-state.ts
│  │  │  ├─ hooks.ts
│  │  │  ├─ http-auth.ts
│  │  │  ├─ http-listen.test.ts
│  │  │  ├─ http-listen.ts
│  │  │  ├─ plugins-http.test.ts
│  │  │  ├─ plugins-http.ts
│  │  │  ├─ presence-events.test.ts
│  │  │  ├─ presence-events.ts
│  │  │  ├─ tls.ts
│  │  │  ├─ ws-connection.ts
│  │  │  └─ ws-types.ts
│  │  ├─ server-methods/
│  │  │  ├─ agent-job.ts
│  │  │  ├─ agent-timestamp.ts
│  │  │  ├─ agent-wait-dedupe.test.ts
│  │  │  ├─ agent-wait-dedupe.ts
│  │  │  ├─ agent.test.ts
│  │  │  ├─ agent.ts
│  │  │  ├─ agents-mutate.test.ts
│  │  │  ├─ AGENTS.md
│  │  │  ├─ agents.ts
│  │  │  ├─ attachment-normalize.ts
│  │  │  ├─ base-hash.ts
│  │  │  ├─ browser.profile-from-body.test.ts
│  │  │  ├─ browser.ts
│  │  │  ├─ channels.ts
│  │  │  ├─ chat-transcript-inject.ts
│  │  │  ├─ chat.abort-persistence.test.ts
│  │  │  ├─ chat.directive-tags.test.ts
│  │  │  ├─ chat.inject.parentid.test.ts
│  │  │  ├─ chat.test-helpers.ts
│  │  │  ├─ chat.ts
│  │  │  ├─ CLAUDE.md
│  │  │  ├─ config.ts
│  │  │  ├─ connect.ts
│  │  │  ├─ cron.ts
│  │  │  ├─ devices.ts
│  │  │  ├─ doctor.test.ts
│  │  │  ├─ doctor.ts
│  │  │  ├─ exec-approval.ts
│  │  │  ├─ exec-approvals.ts
│  │  │  ├─ health.ts
│  │  │  ├─ logs.ts
│  │  │  ├─ models.ts
│  │  │  ├─ nodes.canvas-capability-refresh.test.ts
│  │  │  ├─ nodes.handlers.invoke-result.ts
│  │  │  ├─ nodes.helpers.ts
│  │  │  ├─ nodes.invoke-wake.test.ts
│  │  │  ├─ nodes.ts
│  │  │  ├─ push.test.ts
│  │  │  ├─ push.ts
│  │  │  ├─ restart-request.ts
│  │  │  ├─ secrets.test.ts
│  │  │  ├─ secrets.ts
│  │  │  ├─ send.test.ts
│  │  │  ├─ send.ts
│  │  │  ├─ server-methods.test.ts
│  │  │  ├─ sessions.ts
│  │  │  ├─ skills.ts
│  │  │  ├─ skills.update.normalizes-api-key.test.ts
│  │  │  ├─ system.ts
│  │  │  ├─ talk.ts
│  │  │  ├─ tools-catalog.test.ts
│  │  │  ├─ tools-catalog.ts
│  │  │  ├─ tts.ts
│  │  │  ├─ types.ts
│  │  │  ├─ update.test.ts
│  │  │  ├─ update.ts
│  │  │  ├─ usage.sessions-usage.test.ts
│  │  │  ├─ usage.test.ts
│  │  │  ├─ usage.ts
│  │  │  ├─ validation.ts
│  │  │  ├─ voicewake.ts
│  │  │  ├─ web.ts
│  │  │  └─ wizard.ts
│  │  ├─ agent-event-assistant-text.ts
│  │  ├─ agent-prompt.test.ts
│  │  ├─ agent-prompt.ts
│  │  ├─ android-node.capabilities.live.test.ts
│  │  ├─ assistant-identity.test.ts
│  │  ├─ assistant-identity.ts
│  │  ├─ auth-install-policy.ts
│  │  ├─ auth-mode-policy.test.ts
│  │  ├─ auth-mode-policy.ts
│  │  ├─ auth-rate-limit.test.ts
│  │  ├─ auth-rate-limit.ts
│  │  ├─ auth.test.ts
│  │  ├─ auth.ts
│  │  ├─ boot.test.ts
│  │  ├─ boot.ts
│  │  ├─ call.test.ts
│  │  ├─ call.ts
│  │  ├─ canvas-capability.ts
│  │  ├─ channel-health-monitor.test.ts
│  │  ├─ channel-health-monitor.ts
│  │  ├─ channel-health-policy.test.ts
│  │  ├─ channel-health-policy.ts
│  │  ├─ chat-abort.test.ts
│  │  ├─ chat-abort.ts
│  │  ├─ chat-attachments.test.ts
│  │  ├─ chat-attachments.ts
│  │  ├─ chat-sanitize.test.ts
│  │  ├─ chat-sanitize.ts
│  │  ├─ client.test.ts
│  │  ├─ client.ts
│  │  ├─ client.watchdog.test.ts
│  │  ├─ config-reload-plan.ts
│  │  ├─ config-reload.test.ts
│  │  ├─ config-reload.ts
│  │  ├─ control-plane-audit.ts
│  │  ├─ control-plane-rate-limit.ts
│  │  ├─ control-ui-contract.ts
│  │  ├─ control-ui-csp.test.ts
│  │  ├─ control-ui-csp.ts
│  │  ├─ control-ui-http-utils.ts
│  │  ├─ control-ui-routing.test.ts
│  │  ├─ control-ui-routing.ts
│  │  ├─ control-ui-shared.ts
│  │  ├─ control-ui.http.test.ts
│  │  ├─ control-ui.ts
│  │  ├─ credential-precedence.parity.test.ts
│  │  ├─ credentials.test.ts
│  │  ├─ credentials.ts
│  │  ├─ device-auth.test.ts
│  │  ├─ device-auth.ts
│  │  ├─ device-metadata-normalization.ts
│  │  ├─ events.ts
│  │  ├─ exec-approval-manager.ts
│  │  ├─ gateway-cli-backend.live.test.ts
│  │  ├─ gateway-config-prompts.shared.ts
│  │  ├─ gateway-connection.test-mocks.ts
│  │  ├─ gateway-misc.test.ts
│  │  ├─ gateway-models.profiles.live.test.ts
│  │  ├─ gateway.test.ts
│  │  ├─ hooks-mapping.test.ts
│  │  ├─ hooks-mapping.ts
│  │  ├─ hooks-test-helpers.ts
│  │  ├─ hooks.test.ts
│  │  ├─ hooks.ts
│  │  ├─ http-auth-helpers.test.ts
│  │  ├─ http-auth-helpers.ts
│  │  ├─ http-common.test.ts
│  │  ├─ http-common.ts
│  │  ├─ http-endpoint-helpers.test.ts
│  │  ├─ http-endpoint-helpers.ts
│  │  ├─ http-utils.request-context.test.ts
│  │  ├─ http-utils.ts
│  │  ├─ live-image-probe.ts
│  │  ├─ live-tool-probe-utils.test.ts
│  │  ├─ live-tool-probe-utils.ts
│  │  ├─ method-scopes.test.ts
│  │  ├─ method-scopes.ts
│  │  ├─ net.test.ts
│  │  ├─ net.ts
│  │  ├─ node-command-policy.ts
│  │  ├─ node-invoke-sanitize.ts
│  │  ├─ node-invoke-system-run-approval-errors.ts
│  │  ├─ node-invoke-system-run-approval-match.test.ts
│  │  ├─ node-invoke-system-run-approval-match.ts
│  │  ├─ node-invoke-system-run-approval.test.ts
│  │  ├─ node-invoke-system-run-approval.ts
│  │  ├─ node-registry.ts
│  │  ├─ open-responses.schema.ts
│  │  ├─ openai-http.message-channel.test.ts
│  │  ├─ openai-http.test.ts
│  │  ├─ openai-http.ts
│  │  ├─ openresponses-http.test.ts
│  │  ├─ openresponses-http.ts
│  │  ├─ openresponses-parity.test.ts
│  │  ├─ openresponses-prompt.ts
│  │  ├─ origin-check.test.ts
│  │  ├─ origin-check.ts
│  │  ├─ probe-auth.test.ts
│  │  ├─ probe-auth.ts
│  │  ├─ probe.test.ts
│  │  ├─ probe.ts
│  │  ├─ resolve-configured-secret-input-string.ts
│  │  ├─ role-policy.test.ts
│  │  ├─ role-policy.ts
│  │  ├─ security-path.test.ts
│  │  ├─ security-path.ts
│  │  ├─ server-broadcast.ts
│  │  ├─ server-browser.ts
│  │  ├─ server-channels.test.ts
│  │  ├─ server-channels.ts
│  │  ├─ server-chat.agent-events.test.ts
│  │  ├─ server-chat.ts
│  │  ├─ server-close.ts
│  │  ├─ server-constants.ts
│  │  ├─ server-cron.test.ts
│  │  ├─ server-cron.ts
│  │  ├─ server-discovery-runtime.ts
│  │  ├─ server-discovery.test.ts
│  │  ├─ server-discovery.ts
│  │  ├─ server-http.hooks-request-timeout.test.ts
│  │  ├─ server-http.test-harness.ts
│  │  ├─ server-http.ts
│  │  ├─ server-lanes.ts
│  │  ├─ server-maintenance.ts
│  │  ├─ server-methods-list.ts
│  │  ├─ server-methods.control-plane-rate-limit.test.ts
│  │  ├─ server-methods.ts
│  │  ├─ server-mobile-nodes.ts
│  │  ├─ server-model-catalog.ts
│  │  ├─ server-node-events-types.ts
│  │  ├─ server-node-events.test.ts
│  │  ├─ server-node-events.ts
│  │  ├─ server-node-subscriptions.ts
│  │  ├─ server-plugins.test.ts
│  │  ├─ server-plugins.ts
│  │  ├─ server-reload-handlers.ts
│  │  ├─ server-restart-deferral.test.ts
│  │  ├─ server-restart-sentinel.test.ts
│  │  ├─ server-restart-sentinel.ts
│  │  ├─ server-runtime-config.test.ts
│  │  ├─ server-runtime-config.ts
│  │  ├─ server-runtime-state.ts
│  │  ├─ server-session-key.ts
│  │  ├─ server-shared.ts
│  │  ├─ server-startup-log.test.ts
│  │  ├─ server-startup-log.ts
│  │  ├─ server-startup-memory.test.ts
│  │  ├─ server-startup-memory.ts
│  │  ├─ server-startup.ts
│  │  ├─ server-tailscale.ts
│  │  ├─ server-utils.ts
│  │  ├─ server-wizard-sessions.ts
│  │  ├─ server-ws-runtime.ts
│  │  ├─ server.agent.gateway-server-agent-a.test.ts
│  │  ├─ server.agent.gateway-server-agent-b.test.ts
│  │  ├─ server.agent.gateway-server-agent.mocks.ts
│  │  ├─ server.auth.browser-hardening.test.ts
│  │  ├─ server.auth.control-ui.suite.ts
│  │  ├─ server.auth.control-ui.test.ts
│  │  ├─ server.auth.default-token.suite.ts
│  │  ├─ server.auth.default-token.test.ts
│  │  ├─ server.auth.modes.suite.ts
│  │  ├─ server.auth.modes.test.ts
│  │  ├─ server.auth.shared.ts
│  │  ├─ server.canvas-auth.test.ts
│  │  ├─ server.channels.test.ts
│  │  ├─ server.chat.gateway-server-chat-b.test.ts
│  │  ├─ server.chat.gateway-server-chat.test.ts
│  │  ├─ server.config-apply.test.ts
│  │  ├─ server.config-patch.test.ts
│  │  ├─ server.cron.test.ts
│  │  ├─ server.e2e-registry-helpers.ts
│  │  ├─ server.e2e-ws-harness.ts
│  │  ├─ server.health.test.ts
│  │  ├─ server.hooks.test.ts
│  │  ├─ server.impl.ts
│  │  ├─ server.ios-client-id.test.ts
│  │  ├─ server.legacy-migration.test.ts
│  │  ├─ server.models-voicewake-misc.test.ts
│  │  ├─ server.node-invoke-approval-bypass.test.ts
│  │  ├─ server.plugin-http-auth.test.ts
│  │  ├─ server.reload.test.ts
│  │  ├─ server.roles-allowlist-update.test.ts
│  │  ├─ server.sessions-send.test.ts
│  │  ├─ server.sessions.gateway-server-sessions-a.test.ts
│  │  ├─ server.skills-status.test.ts
│  │  ├─ server.talk-config.test.ts
│  │  ├─ server.tools-catalog.test.ts
│  │  ├─ server.ts
│  │  ├─ session-preview.test-helpers.ts
│  │  ├─ session-utils.fs.test.ts
│  │  ├─ session-utils.fs.ts
│  │  ├─ session-utils.test.ts
│  │  ├─ session-utils.ts
│  │  ├─ session-utils.types.ts
│  │  ├─ sessions-patch.test.ts
│  │  ├─ sessions-patch.ts
│  │  ├─ sessions-resolve.ts
│  │  ├─ startup-auth.test.ts
│  │  ├─ startup-auth.ts
│  │  ├─ startup-control-ui-origins.ts
│  │  ├─ system-run-approval-binding.contract.test.ts
│  │  ├─ system-run-approval-binding.test.ts
│  │  ├─ test-helpers.agent-results.ts
│  │  ├─ test-helpers.e2e.ts
│  │  ├─ test-helpers.mocks.ts
│  │  ├─ test-helpers.openai-mock.ts
│  │  ├─ test-helpers.server.ts
│  │  ├─ test-helpers.ts
│  │  ├─ test-http-response.ts
│  │  ├─ test-openai-responses-model.ts
│  │  ├─ test-temp-config.ts
│  │  ├─ test-with-server.ts
│  │  ├─ tools-invoke-http.cron-regression.test.ts
│  │  ├─ tools-invoke-http.test.ts
│  │  ├─ tools-invoke-http.ts
│  │  ├─ ws-log.test.ts
│  │  ├─ ws-log.ts
│  │  └─ ws-logging.ts
│  ├─ hooks/
│  │  ├─ bundled/
│  │  │  ├─ boot-md/
│  │  │  │  ├─ handler.gateway-startup.integration.test.ts
│  │  │  │  ├─ handler.test.ts
│  │  │  │  ├─ handler.ts
│  │  │  │  └─ HOOK.md
│  │  │  ├─ bootstrap-extra-files/
│  │  │  │  ├─ handler.test.ts
│  │  │  │  ├─ handler.ts
│  │  │  │  └─ HOOK.md
│  │  │  ├─ command-logger/
│  │  │  │  ├─ handler.ts
│  │  │  │  └─ HOOK.md
│  │  │  ├─ session-memory/
│  │  │  │  ├─ handler.test.ts
│  │  │  │  ├─ handler.ts
│  │  │  │  └─ HOOK.md
│  │  │  └─ README.md
│  │  ├─ bundled-dir.ts
│  │  ├─ config.ts
│  │  ├─ fire-and-forget.test.ts
│  │  ├─ fire-and-forget.ts
│  │  ├─ frontmatter.test.ts
│  │  ├─ frontmatter.ts
│  │  ├─ gmail-ops.ts
│  │  ├─ gmail-setup-utils.test.ts
│  │  ├─ gmail-setup-utils.ts
│  │  ├─ gmail-watcher-lifecycle.test.ts
│  │  ├─ gmail-watcher-lifecycle.ts
│  │  ├─ gmail-watcher.ts
│  │  ├─ gmail.test.ts
│  │  ├─ gmail.ts
│  │  ├─ hooks-install.test.ts
│  │  ├─ hooks-status.ts
│  │  ├─ hooks.ts
│  │  ├─ import-url.test.ts
│  │  ├─ import-url.ts
│  │  ├─ install.test.ts
│  │  ├─ install.ts
│  │  ├─ installs.ts
│  │  ├─ internal-hooks.test.ts
│  │  ├─ internal-hooks.ts
│  │  ├─ llm-slug-generator.ts
│  │  ├─ loader.test.ts
│  │  ├─ loader.ts
│  │  ├─ message-hook-mappers.test.ts
│  │  ├─ message-hook-mappers.ts
│  │  ├─ message-hooks.test.ts
│  │  ├─ module-loader.test.ts
│  │  ├─ module-loader.ts
│  │  ├─ types.ts
│  │  ├─ workspace.test.ts
│  │  └─ workspace.ts
│  ├─ i18n/
│  │  └─ registry.test.ts
│  ├─ imessage/
│  │  ├─ monitor/
│  │  │  ├─ abort-handler.ts
│  │  │  ├─ deliver.test.ts
│  │  │  ├─ deliver.ts
│  │  │  ├─ echo-cache.ts
│  │  │  ├─ inbound-processing.test.ts
│  │  │  ├─ inbound-processing.ts
│  │  │  ├─ monitor-provider.echo-cache.test.ts
│  │  │  ├─ monitor-provider.ts
│  │  │  ├─ parse-notification.ts
│  │  │  ├─ provider.group-policy.test.ts
│  │  │  ├─ runtime.ts
│  │  │  └─ types.ts
│  │  ├─ accounts.ts
│  │  ├─ client.ts
│  │  ├─ constants.ts
│  │  ├─ monitor.gating.test.ts
│  │  ├─ monitor.shutdown.unhandled-rejection.test.ts
│  │  ├─ monitor.ts
│  │  ├─ probe.test.ts
│  │  ├─ probe.ts
│  │  ├─ send.test.ts
│  │  ├─ send.ts
│  │  ├─ target-parsing-helpers.ts
│  │  ├─ targets.test.ts
│  │  └─ targets.ts
│  ├─ infra/
│  │  ├─ format-time/
│  │  │  ├─ format-datetime.ts
│  │  │  ├─ format-duration.ts
│  │  │  ├─ format-relative.ts
│  │  │  └─ format-time.test.ts
│  │  ├─ net/
│  │  │  ├─ fetch-guard.ssrf.test.ts
│  │  │  ├─ fetch-guard.ts
│  │  │  ├─ hostname.ts
│  │  │  ├─ proxy-env.ts
│  │  │  ├─ proxy-fetch.test.ts
│  │  │  ├─ proxy-fetch.ts
│  │  │  ├─ ssrf.dispatcher.test.ts
│  │  │  ├─ ssrf.pinning.test.ts
│  │  │  ├─ ssrf.test.ts
│  │  │  ├─ ssrf.ts
│  │  │  ├─ undici-global-dispatcher.test.ts
│  │  │  └─ undici-global-dispatcher.ts
│  │  ├─ outbound/
│  │  │  ├─ abort.ts
│  │  │  ├─ agent-delivery.test.ts
│  │  │  ├─ agent-delivery.ts
│  │  │  ├─ bound-delivery-router.test.ts
│  │  │  ├─ bound-delivery-router.ts
│  │  │  ├─ cfg-threading.guard.test.ts
│  │  │  ├─ channel-adapters.ts
│  │  │  ├─ channel-resolution.ts
│  │  │  ├─ channel-selection.test.ts
│  │  │  ├─ channel-selection.ts
│  │  │  ├─ channel-target.ts
│  │  │  ├─ conversation-id.test.ts
│  │  │  ├─ conversation-id.ts
│  │  │  ├─ deliver-runtime.ts
│  │  │  ├─ deliver.test.ts
│  │  │  ├─ deliver.ts
│  │  │  ├─ delivery-queue.ts
│  │  │  ├─ directory-cache.ts
│  │  │  ├─ envelope.ts
│  │  │  ├─ format.ts
│  │  │  ├─ identity.ts
│  │  │  ├─ message-action-normalization.test.ts
│  │  │  ├─ message-action-normalization.ts
│  │  │  ├─ message-action-params.test.ts
│  │  │  ├─ message-action-params.ts
│  │  │  ├─ message-action-runner.test.ts
│  │  │  ├─ message-action-runner.threading.test.ts
│  │  │  ├─ message-action-runner.ts
│  │  │  ├─ message-action-spec.ts
│  │  │  ├─ message.channels.test.ts
│  │  │  ├─ message.test.ts
│  │  │  ├─ message.ts
│  │  │  ├─ outbound-policy.ts
│  │  │  ├─ outbound-send-service.test.ts
│  │  │  ├─ outbound-send-service.ts
│  │  │  ├─ outbound-session.ts
│  │  │  ├─ outbound.test.ts
│  │  │  ├─ payloads.ts
│  │  │  ├─ sanitize-text.test.ts
│  │  │  ├─ sanitize-text.ts
│  │  │  ├─ session-binding-service.test.ts
│  │  │  ├─ session-binding-service.ts
│  │  │  ├─ session-context.ts
│  │  │  ├─ target-errors.ts
│  │  │  ├─ target-normalization.ts
│  │  │  ├─ target-resolver.test.ts
│  │  │  ├─ target-resolver.ts
│  │  │  ├─ targets.channel-resolution.test.ts
│  │  │  ├─ targets.shared-test.ts
│  │  │  ├─ targets.test.ts
│  │  │  ├─ targets.ts
│  │  │  └─ tool-payload.ts
│  │  ├─ tls/
│  │  │  ├─ fingerprint.ts
│  │  │  └─ gateway.ts
│  │  ├─ abort-pattern.test.ts
│  │  ├─ abort-signal.test.ts
│  │  ├─ abort-signal.ts
│  │  ├─ agent-events.test.ts
│  │  ├─ agent-events.ts
│  │  ├─ archive-path.test.ts
│  │  ├─ archive-path.ts
│  │  ├─ archive.test.ts
│  │  ├─ archive.ts
│  │  ├─ backoff.ts
│  │  ├─ binaries.ts
│  │  ├─ bonjour-ciao.ts
│  │  ├─ bonjour-discovery.test.ts
│  │  ├─ bonjour-discovery.ts
│  │  ├─ bonjour-errors.ts
│  │  ├─ bonjour.test.ts
│  │  ├─ bonjour.ts
│  │  ├─ boundary-file-read.ts
│  │  ├─ boundary-path.test.ts
│  │  ├─ boundary-path.ts
│  │  ├─ brew.test.ts
│  │  ├─ brew.ts
│  │  ├─ canvas-host-url.ts
│  │  ├─ channel-activity.ts
│  │  ├─ channel-summary.test.ts
│  │  ├─ channel-summary.ts
│  │  ├─ channels-status-issues.ts
│  │  ├─ cli-root-options.test.ts
│  │  ├─ cli-root-options.ts
│  │  ├─ clipboard.ts
│  │  ├─ control-ui-assets.test.ts
│  │  ├─ control-ui-assets.ts
│  │  ├─ core-root.ts
│  │  ├─ dedupe.ts
│  │  ├─ detect-package-manager.ts
│  │  ├─ device-auth-store.ts
│  │  ├─ device-identity.state-dir.test.ts
│  │  ├─ device-identity.ts
│  │  ├─ device-pairing.test.ts
│  │  ├─ device-pairing.ts
│  │  ├─ diagnostic-events.ts
│  │  ├─ diagnostic-flags.ts
│  │  ├─ dotenv.test.ts
│  │  ├─ dotenv.ts
│  │  ├─ env-file.ts
│  │  ├─ env.test.ts
│  │  ├─ env.ts
│  │  ├─ errors.ts
│  │  ├─ exec-allowlist-pattern.ts
│  │  ├─ exec-approval-forwarder.test.ts
│  │  ├─ exec-approval-forwarder.ts
│  │  ├─ exec-approvals-allow-always.test.ts
│  │  ├─ exec-approvals-allowlist.ts
│  │  ├─ exec-approvals-analysis.ts
│  │  ├─ exec-approvals-config.test.ts
│  │  ├─ exec-approvals-parity.test.ts
│  │  ├─ exec-approvals-safe-bins.test.ts
│  │  ├─ exec-approvals-test-helpers.ts
│  │  ├─ exec-approvals.test.ts
│  │  ├─ exec-approvals.ts
│  │  ├─ exec-command-resolution.ts
│  │  ├─ exec-host.ts
│  │  ├─ exec-obfuscation-detect.test.ts
│  │  ├─ exec-obfuscation-detect.ts
│  │  ├─ exec-safe-bin-policy-profiles.ts
│  │  ├─ exec-safe-bin-policy-validator.ts
│  │  ├─ exec-safe-bin-policy.test.ts
│  │  ├─ exec-safe-bin-policy.ts
│  │  ├─ exec-safe-bin-runtime-policy.test.ts
│  │  ├─ exec-safe-bin-runtime-policy.ts
│  │  ├─ exec-safe-bin-trust.test.ts
│  │  ├─ exec-safe-bin-trust.ts
│  │  ├─ exec-safety.ts
│  │  ├─ exec-wrapper-resolution.ts
│  │  ├─ executable-path.ts
│  │  ├─ fetch.test.ts
│  │  ├─ fetch.ts
│  │  ├─ file-identity.test.ts
│  │  ├─ file-identity.ts
│  │  ├─ file-lock.ts
│  │  ├─ fixed-window-rate-limit.test.ts
│  │  ├─ fixed-window-rate-limit.ts
│  │  ├─ fs-safe.test.ts
│  │  ├─ fs-safe.ts
│  │  ├─ gateway-lock.test.ts
│  │  ├─ gateway-lock.ts
│  │  ├─ gemini-auth.ts
│  │  ├─ gensparx-root.test.ts
│  │  ├─ gensparx-root.ts
│  │  ├─ git-commit.ts
│  │  ├─ git-root.test.ts
│  │  ├─ git-root.ts
│  │  ├─ hardlink-guards.ts
│  │  ├─ heartbeat-active-hours.test.ts
│  │  ├─ heartbeat-active-hours.ts
│  │  ├─ heartbeat-events-filter.test.ts
│  │  ├─ heartbeat-events-filter.ts
│  │  ├─ heartbeat-events.ts
│  │  ├─ heartbeat-reason.test.ts
│  │  ├─ heartbeat-reason.ts
│  │  ├─ heartbeat-runner.ghost-reminder.test.ts
│  │  ├─ heartbeat-runner.model-override.test.ts
│  │  ├─ heartbeat-runner.respects-ackmaxchars-heartbeat-acks.test.ts
│  │  ├─ heartbeat-runner.returns-default-unset.test.ts
│  │  ├─ heartbeat-runner.scheduler.test.ts
│  │  ├─ heartbeat-runner.sender-prefers-delivery-target.test.ts
│  │  ├─ heartbeat-runner.test-harness.ts
│  │  ├─ heartbeat-runner.test-utils.ts
│  │  ├─ heartbeat-runner.transcript-prune.test.ts
│  │  ├─ heartbeat-runner.ts
│  │  ├─ heartbeat-visibility.test.ts
│  │  ├─ heartbeat-visibility.ts
│  │  ├─ heartbeat-wake.test.ts
│  │  ├─ heartbeat-wake.ts
│  │  ├─ home-dir.test.ts
│  │  ├─ home-dir.ts
│  │  ├─ host-env-security-policy.json
│  │  ├─ host-env-security.policy-parity.test.ts
│  │  ├─ host-env-security.test.ts
│  │  ├─ host-env-security.ts
│  │  ├─ http-body.test.ts
│  │  ├─ http-body.ts
│  │  ├─ infra-parsing.test.ts
│  │  ├─ infra-runtime.test.ts
│  │  ├─ infra-store.test.ts
│  │  ├─ install-flow.test.ts
│  │  ├─ install-flow.ts
│  │  ├─ install-from-npm-spec.ts
│  │  ├─ install-mode-options.test.ts
│  │  ├─ install-mode-options.ts
│  │  ├─ install-package-dir.ts
│  │  ├─ install-safe-path.test.ts
│  │  ├─ install-safe-path.ts
│  │  ├─ install-source-utils.test.ts
│  │  ├─ install-source-utils.ts
│  │  ├─ install-target.ts
│  │  ├─ is-main.ts
│  │  ├─ json-file.ts
│  │  ├─ json-files.ts
│  │  ├─ json-utf8-bytes.test.ts
│  │  ├─ json-utf8-bytes.ts
│  │  ├─ jsonl-socket.ts
│  │  ├─ machine-name.ts
│  │  ├─ map-size.ts
│  │  ├─ node-commands.ts
│  │  ├─ node-pairing.test.ts
│  │  ├─ node-pairing.ts
│  │  ├─ node-shell.ts
│  │  ├─ npm-integrity.test.ts
│  │  ├─ npm-integrity.ts
│  │  ├─ npm-pack-install.test.ts
│  │  ├─ npm-pack-install.ts
│  │  ├─ npm-registry-spec.ts
│  │  ├─ os-summary.ts
│  │  ├─ package-json.ts
│  │  ├─ package-tag.ts
│  │  ├─ pairing-files.ts
│  │  ├─ pairing-pending.ts
│  │  ├─ pairing-token.ts
│  │  ├─ path-alias-guards.test.ts
│  │  ├─ path-alias-guards.ts
│  │  ├─ path-env.test.ts
│  │  ├─ path-env.ts
│  │  ├─ path-guards.ts
│  │  ├─ path-prepend.ts
│  │  ├─ path-safety.test.ts
│  │  ├─ path-safety.ts
│  │  ├─ plain-object.test.ts
│  │  ├─ plain-object.ts
│  │  ├─ ports-format.ts
│  │  ├─ ports-inspect.ts
│  │  ├─ ports-lsof.ts
│  │  ├─ ports-probe.ts
│  │  ├─ ports-types.ts
│  │  ├─ ports.test.ts
│  │  ├─ ports.ts
│  │  ├─ process-respawn.test.ts
│  │  ├─ process-respawn.ts
│  │  ├─ prototype-keys.ts
│  │  ├─ provider-usage.auth.normalizes-keys.test.ts
│  │  ├─ provider-usage.auth.ts
│  │  ├─ provider-usage.fetch.claude.test.ts
│  │  ├─ provider-usage.fetch.claude.ts
│  │  ├─ provider-usage.fetch.codex.test.ts
│  │  ├─ provider-usage.fetch.codex.ts
│  │  ├─ provider-usage.fetch.copilot.test.ts
│  │  ├─ provider-usage.fetch.copilot.ts
│  │  ├─ provider-usage.fetch.gemini.test.ts
│  │  ├─ provider-usage.fetch.gemini.ts
│  │  ├─ provider-usage.fetch.minimax.test.ts
│  │  ├─ provider-usage.fetch.minimax.ts
│  │  ├─ provider-usage.fetch.shared.test.ts
│  │  ├─ provider-usage.fetch.shared.ts
│  │  ├─ provider-usage.fetch.ts
│  │  ├─ provider-usage.fetch.zai.test.ts
│  │  ├─ provider-usage.fetch.zai.ts
│  │  ├─ provider-usage.format.test.ts
│  │  ├─ provider-usage.format.ts
│  │  ├─ provider-usage.load.ts
│  │  ├─ provider-usage.shared.test.ts
│  │  ├─ provider-usage.shared.ts
│  │  ├─ provider-usage.test.ts
│  │  ├─ provider-usage.ts
│  │  ├─ provider-usage.types.ts
│  │  ├─ push-apns.test.ts
│  │  ├─ push-apns.ts
│  │  ├─ restart-sentinel.test.ts
│  │  ├─ restart-sentinel.ts
│  │  ├─ restart-stale-pids.test.ts
│  │  ├─ restart-stale-pids.ts
│  │  ├─ restart.test.ts
│  │  ├─ restart.ts
│  │  ├─ retry-policy.ts
│  │  ├─ retry.test.ts
│  │  ├─ retry.ts
│  │  ├─ run-node.test.ts
│  │  ├─ runtime-guard.test.ts
│  │  ├─ runtime-guard.ts
│  │  ├─ runtime-status.ts
│  │  ├─ safe-open-sync.test.ts
│  │  ├─ safe-open-sync.ts
│  │  ├─ scp-host.test.ts
│  │  ├─ scp-host.ts
│  │  ├─ scripts-modules.d.ts
│  │  ├─ secure-random.test.ts
│  │  ├─ secure-random.ts
│  │  ├─ session-cost-usage.test.ts
│  │  ├─ session-cost-usage.ts
│  │  ├─ session-cost-usage.types.ts
│  │  ├─ session-maintenance-warning.test.ts
│  │  ├─ session-maintenance-warning.ts
│  │  ├─ shell-env.test.ts
│  │  ├─ shell-env.ts
│  │  ├─ shell-inline-command.ts
│  │  ├─ skills-remote.test.ts
│  │  ├─ skills-remote.ts
│  │  ├─ ssh-config.test.ts
│  │  ├─ ssh-config.ts
│  │  ├─ ssh-tunnel.ts
│  │  ├─ stable-node-path.ts
│  │  ├─ state-migrations.fs.ts
│  │  ├─ state-migrations.state-dir.test.ts
│  │  ├─ state-migrations.ts
│  │  ├─ supervisor-markers.ts
│  │  ├─ system-events.test.ts
│  │  ├─ system-events.ts
│  │  ├─ system-message.test.ts
│  │  ├─ system-message.ts
│  │  ├─ system-presence.test.ts
│  │  ├─ system-presence.ts
│  │  ├─ system-presence.version.test.ts
│  │  ├─ system-run-approval-binding.ts
│  │  ├─ system-run-approval-context.ts
│  │  ├─ system-run-approval-mismatch.contract.test.ts
│  │  ├─ system-run-command.contract.test.ts
│  │  ├─ system-run-command.test.ts
│  │  ├─ system-run-command.ts
│  │  ├─ system-run-normalize.ts
│  │  ├─ tailnet.ts
│  │  ├─ tailscale.test.ts
│  │  ├─ tailscale.ts
│  │  ├─ tmp-core-dir.ts
│  │  ├─ tmp-gensparx-dir.test.ts
│  │  ├─ tmp-gensparx-dir.ts
│  │  ├─ transport-ready.test.ts
│  │  ├─ transport-ready.ts
│  │  ├─ unhandled-rejections.fatal-detection.test.ts
│  │  ├─ unhandled-rejections.test.ts
│  │  ├─ unhandled-rejections.ts
│  │  ├─ update-channels.test.ts
│  │  ├─ update-channels.ts
│  │  ├─ update-check.test.ts
│  │  ├─ update-check.ts
│  │  ├─ update-global.ts
│  │  ├─ update-runner.test.ts
│  │  ├─ update-runner.ts
│  │  ├─ update-startup.test.ts
│  │  ├─ update-startup.ts
│  │  ├─ voicewake.ts
│  │  ├─ warning-filter.test.ts
│  │  ├─ warning-filter.ts
│  │  ├─ watch-node.test.ts
│  │  ├─ widearea-dns.test.ts
│  │  ├─ widearea-dns.ts
│  │  ├─ ws.ts
│  │  └─ wsl.ts
│  ├─ line/
│  │  ├─ flex-templates/
│  │  │  ├─ basic-cards.ts
│  │  │  ├─ common.ts
│  │  │  ├─ media-control-cards.ts
│  │  │  ├─ message.ts
│  │  │  ├─ schedule-cards.ts
│  │  │  └─ types.ts
│  │  ├─ accounts.test.ts
│  │  ├─ accounts.ts
│  │  ├─ actions.ts
│  │  ├─ auto-reply-delivery.test.ts
│  │  ├─ auto-reply-delivery.ts
│  │  ├─ bot-access.ts
│  │  ├─ bot-handlers.test.ts
│  │  ├─ bot-handlers.ts
│  │  ├─ bot-message-context.test.ts
│  │  ├─ bot-message-context.ts
│  │  ├─ bot.ts
│  │  ├─ channel-access-token.ts
│  │  ├─ config-schema.ts
│  │  ├─ download.test.ts
│  │  ├─ download.ts
│  │  ├─ flex-templates.test.ts
│  │  ├─ flex-templates.ts
│  │  ├─ markdown-to-line.test.ts
│  │  ├─ markdown-to-line.ts
│  │  ├─ monitor.fail-closed.test.ts
│  │  ├─ monitor.lifecycle.test.ts
│  │  ├─ monitor.read-body.test.ts
│  │  ├─ monitor.ts
│  │  ├─ probe.test.ts
│  │  ├─ probe.ts
│  │  ├─ reply-chunks.test.ts
│  │  ├─ reply-chunks.ts
│  │  ├─ rich-menu.test.ts
│  │  ├─ rich-menu.ts
│  │  ├─ send.test.ts
│  │  ├─ send.ts
│  │  ├─ signature.ts
│  │  ├─ template-messages.test.ts
│  │  ├─ template-messages.ts
│  │  ├─ types.ts
│  │  ├─ webhook-node.test.ts
│  │  ├─ webhook-node.ts
│  │  ├─ webhook-utils.ts
│  │  ├─ webhook.test.ts
│  │  └─ webhook.ts
│  ├─ link-understanding/
│  │  ├─ apply.ts
│  │  ├─ defaults.ts
│  │  ├─ detect.test.ts
│  │  ├─ detect.ts
│  │  ├─ format.ts
│  │  └─ runner.ts
│  ├─ logging/
│  │  ├─ test-helpers/
│  │  │  └─ console-snapshot.ts
│  │  ├─ config.ts
│  │  ├─ console-capture.test.ts
│  │  ├─ console-settings.test.ts
│  │  ├─ console-timestamp.test.ts
│  │  ├─ console.ts
│  │  ├─ diagnostic-session-state.ts
│  │  ├─ diagnostic.test.ts
│  │  ├─ diagnostic.ts
│  │  ├─ env-log-level.ts
│  │  ├─ levels.ts
│  │  ├─ log-file-size-cap.test.ts
│  │  ├─ logger-env.test.ts
│  │  ├─ logger-settings.test.ts
│  │  ├─ logger-timestamp.test.ts
│  │  ├─ logger.settings.test.ts
│  │  ├─ logger.ts
│  │  ├─ node-require.ts
│  │  ├─ parse-log-line.test.ts
│  │  ├─ parse-log-line.ts
│  │  ├─ redact-bounded.ts
│  │  ├─ redact-identifier.ts
│  │  ├─ redact.test.ts
│  │  ├─ redact.ts
│  │  ├─ state.ts
│  │  ├─ subsystem.test.ts
│  │  ├─ subsystem.ts
│  │  ├─ timestamps.test.ts
│  │  └─ timestamps.ts
│  ├─ markdown/
│  │  ├─ code-spans.ts
│  │  ├─ fences.ts
│  │  ├─ frontmatter.test.ts
│  │  ├─ frontmatter.ts
│  │  ├─ ir.blockquote-spacing.test.ts
│  │  ├─ ir.hr-spacing.test.ts
│  │  ├─ ir.nested-lists.test.ts
│  │  ├─ ir.table-bullets.test.ts
│  │  ├─ ir.table-code.test.ts
│  │  ├─ ir.ts
│  │  ├─ render.ts
│  │  ├─ tables.ts
│  │  ├─ whatsapp.test.ts
│  │  └─ whatsapp.ts
│  ├─ media/
│  │  ├─ audio-tags.ts
│  │  ├─ audio.test.ts
│  │  ├─ audio.ts
│  │  ├─ base64.test.ts
│  │  ├─ base64.ts
│  │  ├─ constants.ts
│  │  ├─ fetch.test.ts
│  │  ├─ fetch.ts
│  │  ├─ ffmpeg-exec.test.ts
│  │  ├─ ffmpeg-exec.ts
│  │  ├─ ffmpeg-limits.ts
│  │  ├─ host.test.ts
│  │  ├─ host.ts
│  │  ├─ image-ops.helpers.test.ts
│  │  ├─ image-ops.ts
│  │  ├─ inbound-path-policy.test.ts
│  │  ├─ inbound-path-policy.ts
│  │  ├─ input-files.fetch-guard.test.ts
│  │  ├─ input-files.ts
│  │  ├─ load-options.test.ts
│  │  ├─ load-options.ts
│  │  ├─ local-roots.ts
│  │  ├─ mime.test.ts
│  │  ├─ mime.ts
│  │  ├─ outbound-attachment.ts
│  │  ├─ parse.test.ts
│  │  ├─ parse.ts
│  │  ├─ pdf-extract.ts
│  │  ├─ png-encode.ts
│  │  ├─ read-response-with-limit.ts
│  │  ├─ server.outside-workspace.test.ts
│  │  ├─ server.test.ts
│  │  ├─ server.ts
│  │  ├─ sniff-mime-from-base64.ts
│  │  ├─ store.outside-workspace.test.ts
│  │  ├─ store.redirect.test.ts
│  │  ├─ store.test.ts
│  │  ├─ store.ts
│  │  └─ temp-files.ts
│  ├─ media-understanding/
│  │  ├─ providers/
│  │  │  ├─ anthropic/
│  │  │  │  └─ index.ts
│  │  │  ├─ deepgram/
│  │  │  │  ├─ audio.live.test.ts
│  │  │  │  ├─ audio.test.ts
│  │  │  │  ├─ audio.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ google/
│  │  │  │  ├─ audio.ts
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ inline-data.ts
│  │  │  │  ├─ video.test.ts
│  │  │  │  └─ video.ts
│  │  │  ├─ groq/
│  │  │  │  └─ index.ts
│  │  │  ├─ minimax/
│  │  │  │  └─ index.ts
│  │  │  ├─ mistral/
│  │  │  │  ├─ index.test.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ moonshot/
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ video.test.ts
│  │  │  │  └─ video.ts
│  │  │  ├─ openai/
│  │  │  │  ├─ audio.test.ts
│  │  │  │  ├─ audio.ts
│  │  │  │  └─ index.ts
│  │  │  ├─ zai/
│  │  │  │  └─ index.ts
│  │  │  ├─ audio.test-helpers.ts
│  │  │  ├─ image-runtime.ts
│  │  │  ├─ image.ts
│  │  │  ├─ index.test.ts
│  │  │  ├─ index.ts
│  │  │  └─ shared.ts
│  │  ├─ apply.echo-transcript.test.ts
│  │  ├─ apply.test.ts
│  │  ├─ apply.ts
│  │  ├─ attachments.cache.ts
│  │  ├─ attachments.guards.test.ts
│  │  ├─ attachments.normalize.ts
│  │  ├─ attachments.select.ts
│  │  ├─ attachments.ts
│  │  ├─ audio-preflight.ts
│  │  ├─ audio-transcription-runner.ts
│  │  ├─ concurrency.ts
│  │  ├─ defaults.test.ts
│  │  ├─ defaults.ts
│  │  ├─ echo-transcript.ts
│  │  ├─ errors.ts
│  │  ├─ format.test.ts
│  │  ├─ format.ts
│  │  ├─ fs.ts
│  │  ├─ media-understanding-misc.test.ts
│  │  ├─ output-extract.ts
│  │  ├─ resolve.test.ts
│  │  ├─ resolve.ts
│  │  ├─ runner.auto-audio.test.ts
│  │  ├─ runner.deepgram.test.ts
│  │  ├─ runner.entries.guards.test.ts
│  │  ├─ runner.entries.ts
│  │  ├─ runner.proxy.test.ts
│  │  ├─ runner.skip-tiny-audio.test.ts
│  │  ├─ runner.test-utils.ts
│  │  ├─ runner.ts
│  │  ├─ runner.video.test.ts
│  │  ├─ runner.vision-skip.test.ts
│  │  ├─ scope.ts
│  │  ├─ transcribe-audio.test.ts
│  │  ├─ transcribe-audio.ts
│  │  ├─ types.ts
│  │  └─ video.ts
│  ├─ memory/
│  │  ├─ backend-config.test.ts
│  │  ├─ backend-config.ts
│  │  ├─ batch-embedding-common.ts
│  │  ├─ batch-error-utils.test.ts
│  │  ├─ batch-error-utils.ts
│  │  ├─ batch-gemini.ts
│  │  ├─ batch-http.test.ts
│  │  ├─ batch-http.ts
│  │  ├─ batch-openai.ts
│  │  ├─ batch-output.test.ts
│  │  ├─ batch-output.ts
│  │  ├─ batch-provider-common.ts
│  │  ├─ batch-runner.ts
│  │  ├─ batch-upload.ts
│  │  ├─ batch-utils.ts
│  │  ├─ batch-voyage.test.ts
│  │  ├─ batch-voyage.ts
│  │  ├─ embedding-chunk-limits.test.ts
│  │  ├─ embedding-chunk-limits.ts
│  │  ├─ embedding-input-limits.ts
│  │  ├─ embedding-manager.test-harness.ts
│  │  ├─ embedding-model-limits.ts
│  │  ├─ embedding.test-mocks.ts
│  │  ├─ embeddings-debug.ts
│  │  ├─ embeddings-gemini.ts
│  │  ├─ embeddings-mistral.test.ts
│  │  ├─ embeddings-mistral.ts
│  │  ├─ embeddings-ollama.test.ts
│  │  ├─ embeddings-ollama.ts
│  │  ├─ embeddings-openai.ts
│  │  ├─ embeddings-remote-client.ts
│  │  ├─ embeddings-remote-fetch.test.ts
│  │  ├─ embeddings-remote-fetch.ts
│  │  ├─ embeddings-remote-provider.ts
│  │  ├─ embeddings-voyage.test.ts
│  │  ├─ embeddings-voyage.ts
│  │  ├─ embeddings.test.ts
│  │  ├─ embeddings.ts
│  │  ├─ fs-utils.ts
│  │  ├─ hybrid.test.ts
│  │  ├─ hybrid.ts
│  │  ├─ index.test.ts
│  │  ├─ index.ts
│  │  ├─ internal.test.ts
│  │  ├─ internal.ts
│  │  ├─ manager-embedding-ops.ts
│  │  ├─ manager-runtime.ts
│  │  ├─ manager-search.ts
│  │  ├─ manager-sync-ops.ts
│  │  ├─ manager.async-search.test.ts
│  │  ├─ manager.atomic-reindex.test.ts
│  │  ├─ manager.batch.test.ts
│  │  ├─ manager.embedding-batches.test.ts
│  │  ├─ manager.get-concurrency.test.ts
│  │  ├─ manager.mistral-provider.test.ts
│  │  ├─ manager.read-file.test.ts
│  │  ├─ manager.readonly-recovery.test.ts
│  │  ├─ manager.sync-errors-do-not-crash.test.ts
│  │  ├─ manager.ts
│  │  ├─ manager.vector-dedupe.test.ts
│  │  ├─ manager.watcher-config.test.ts
│  │  ├─ memory-schema.ts
│  │  ├─ mmr.test.ts
│  │  ├─ mmr.ts
│  │  ├─ node-llama.ts
│  │  ├─ post-json.test.ts
│  │  ├─ post-json.ts
│  │  ├─ qmd-manager.test.ts
│  │  ├─ qmd-manager.ts
│  │  ├─ qmd-query-parser.test.ts
│  │  ├─ qmd-query-parser.ts
│  │  ├─ qmd-scope.test.ts
│  │  ├─ qmd-scope.ts
│  │  ├─ query-expansion.test.ts
│  │  ├─ query-expansion.ts
│  │  ├─ remote-http.ts
│  │  ├─ search-manager.test.ts
│  │  ├─ search-manager.ts
│  │  ├─ secret-input.ts
│  │  ├─ session-files.test.ts
│  │  ├─ session-files.ts
│  │  ├─ sqlite-vec.ts
│  │  ├─ sqlite.ts
│  │  ├─ status-format.ts
│  │  ├─ temporal-decay.test.ts
│  │  ├─ temporal-decay.ts
│  │  ├─ test-embeddings-mock.ts
│  │  ├─ test-manager-helpers.ts
│  │  ├─ test-manager.ts
│  │  ├─ test-runtime-mocks.ts
│  │  └─ types.ts
│  ├─ node-host/
│  │  ├─ config.ts
│  │  ├─ exec-policy.test.ts
│  │  ├─ exec-policy.ts
│  │  ├─ invoke-browser.ts
│  │  ├─ invoke-system-run-allowlist.ts
│  │  ├─ invoke-system-run-plan.test.ts
│  │  ├─ invoke-system-run-plan.ts
│  │  ├─ invoke-system-run.test.ts
│  │  ├─ invoke-system-run.ts
│  │  ├─ invoke-types.ts
│  │  ├─ invoke.sanitize-env.test.ts
│  │  ├─ invoke.ts
│  │  ├─ runner.credentials.test.ts
│  │  ├─ runner.ts
│  │  └─ with-timeout.ts
│  ├─ pairing/
│  │  ├─ pairing-challenge.ts
│  │  ├─ pairing-labels.ts
│  │  ├─ pairing-messages.test.ts
│  │  ├─ pairing-messages.ts
│  │  ├─ pairing-store.test.ts
│  │  ├─ pairing-store.ts
│  │  ├─ setup-code.test.ts
│  │  └─ setup-code.ts
│  ├─ plugin-sdk/
│  │  ├─ account-id.ts
│  │  ├─ account-resolution.ts
│  │  ├─ acpx.ts
│  │  ├─ agent-media-payload.ts
│  │  ├─ allow-from.test.ts
│  │  ├─ allow-from.ts
│  │  ├─ bluebubbles.ts
│  │  ├─ boolean-param.ts
│  │  ├─ channel-config-helpers.ts
│  │  ├─ channel-lifecycle.test.ts
│  │  ├─ channel-lifecycle.ts
│  │  ├─ command-auth.test.ts
│  │  ├─ command-auth.ts
│  │  ├─ compat.ts
│  │  ├─ config-paths.ts
│  │  ├─ copilot-proxy.ts
│  │  ├─ core.ts
│  │  ├─ device-pair.ts
│  │  ├─ diagnostics-otel.ts
│  │  ├─ diffs.ts
│  │  ├─ discord.ts
│  │  ├─ feishu.ts
│  │  ├─ fetch-auth.test.ts
│  │  ├─ fetch-auth.ts
│  │  ├─ file-lock.ts
│  │  ├─ google-gemini-cli-auth.ts
│  │  ├─ googlechat.ts
│  │  ├─ group-access.test.ts
│  │  ├─ group-access.ts
│  │  ├─ imessage.ts
│  │  ├─ inbound-envelope.ts
│  │  ├─ index.test.ts
│  │  ├─ index.ts
│  │  ├─ irc.ts
│  │  ├─ json-store.ts
│  │  ├─ keyed-async-queue.test.ts
│  │  ├─ keyed-async-queue.ts
│  │  ├─ line.ts
│  │  ├─ llm-task.ts
│  │  ├─ lobster.ts
│  │  ├─ matrix.ts
│  │  ├─ mattermost.ts
│  │  ├─ memory-core.ts
│  │  ├─ memory-lancedb.ts
│  │  ├─ minimax-portal-auth.ts
│  │  ├─ msteams.ts
│  │  ├─ nextcloud-talk.ts
│  │  ├─ nostr.ts
│  │  ├─ oauth-utils.ts
│  │  ├─ onboarding.ts
│  │  ├─ open-prose.ts
│  │  ├─ outbound-media.test.ts
│  │  ├─ outbound-media.ts
│  │  ├─ pairing-access.ts
│  │  ├─ persistent-dedupe.test.ts
│  │  ├─ persistent-dedupe.ts
│  │  ├─ phone-control.ts
│  │  ├─ provider-auth-result.ts
│  │  ├─ qwen-portal-auth.ts
│  │  ├─ reply-payload.ts
│  │  ├─ resolution-notes.ts
│  │  ├─ root-alias.cjs
│  │  ├─ root-alias.test.ts
│  │  ├─ run-command.ts
│  │  ├─ runtime.ts
│  │  ├─ signal.ts
│  │  ├─ slack-message-actions.test.ts
│  │  ├─ slack-message-actions.ts
│  │  ├─ slack.ts
│  │  ├─ ssrf-policy.test.ts
│  │  ├─ ssrf-policy.ts
│  │  ├─ status-helpers.test.ts
│  │  ├─ status-helpers.ts
│  │  ├─ subpaths.test.ts
│  │  ├─ synology-chat.ts
│  │  ├─ talk-voice.ts
│  │  ├─ telegram.ts
│  │  ├─ temp-path.test.ts
│  │  ├─ temp-path.ts
│  │  ├─ test-utils.ts
│  │  ├─ text-chunking.test.ts
│  │  ├─ text-chunking.ts
│  │  ├─ thread-ownership.ts
│  │  ├─ tlon.ts
│  │  ├─ tool-send.ts
│  │  ├─ twitch.ts
│  │  ├─ voice-call.ts
│  │  ├─ webhook-memory-guards.test.ts
│  │  ├─ webhook-memory-guards.ts
│  │  ├─ webhook-path.ts
│  │  ├─ webhook-request-guards.test.ts
│  │  ├─ webhook-request-guards.ts
│  │  ├─ webhook-targets.test.ts
│  │  ├─ webhook-targets.ts
│  │  ├─ whatsapp.ts
│  │  ├─ windows-spawn.ts
│  │  ├─ zalo.ts
│  │  └─ zalouser.ts
│  ├─ plugins/
│  │  ├─ runtime/
│  │  │  ├─ gateway-request-scope.test.ts
│  │  │  ├─ gateway-request-scope.ts
│  │  │  ├─ index.test.ts
│  │  │  ├─ index.ts
│  │  │  ├─ native-deps.ts
│  │  │  ├─ runtime-channel.ts
│  │  │  ├─ runtime-config.ts
│  │  │  ├─ runtime-events.ts
│  │  │  ├─ runtime-logging.ts
│  │  │  ├─ runtime-media.ts
│  │  │  ├─ runtime-system.ts
│  │  │  ├─ runtime-tools.ts
│  │  │  ├─ runtime-whatsapp-login.runtime.ts
│  │  │  ├─ runtime-whatsapp-outbound.runtime.ts
│  │  │  ├─ runtime-whatsapp.ts
│  │  │  ├─ types-channel.ts
│  │  │  ├─ types-core.ts
│  │  │  ├─ types.contract.test.ts
│  │  │  └─ types.ts
│  │  ├─ bundled-dir.ts
│  │  ├─ bundled-sources.test.ts
│  │  ├─ bundled-sources.ts
│  │  ├─ cli.test.ts
│  │  ├─ cli.ts
│  │  ├─ commands.test.ts
│  │  ├─ commands.ts
│  │  ├─ config-schema.ts
│  │  ├─ config-state.test.ts
│  │  ├─ config-state.ts
│  │  ├─ discovery.test.ts
│  │  ├─ discovery.ts
│  │  ├─ enable.test.ts
│  │  ├─ enable.ts
│  │  ├─ hook-runner-global.ts
│  │  ├─ hooks.before-agent-start.test.ts
│  │  ├─ hooks.model-override-wiring.test.ts
│  │  ├─ hooks.phase-hooks.test.ts
│  │  ├─ hooks.test-helpers.ts
│  │  ├─ hooks.ts
│  │  ├─ http-path.ts
│  │  ├─ http-registry.test.ts
│  │  ├─ http-registry.ts
│  │  ├─ install.test.ts
│  │  ├─ install.ts
│  │  ├─ installs.test.ts
│  │  ├─ installs.ts
│  │  ├─ loader.test.ts
│  │  ├─ loader.ts
│  │  ├─ logger.test.ts
│  │  ├─ logger.ts
│  │  ├─ manifest-registry.test.ts
│  │  ├─ manifest-registry.ts
│  │  ├─ manifest.ts
│  │  ├─ path-safety.ts
│  │  ├─ providers.ts
│  │  ├─ registry.ts
│  │  ├─ runtime.ts
│  │  ├─ schema-validator.test.ts
│  │  ├─ schema-validator.ts
│  │  ├─ services.test.ts
│  │  ├─ services.ts
│  │  ├─ slots.test.ts
│  │  ├─ slots.ts
│  │  ├─ source-display.test.ts
│  │  ├─ source-display.ts
│  │  ├─ status.ts
│  │  ├─ toggle-config.ts
│  │  ├─ tools.optional.test.ts
│  │  ├─ tools.ts
│  │  ├─ types.ts
│  │  ├─ uninstall.test.ts
│  │  ├─ uninstall.ts
│  │  ├─ update.test.ts
│  │  ├─ update.ts
│  │  ├─ voice-call.plugin.test.ts
│  │  ├─ wired-hooks-after-tool-call.e2e.test.ts
│  │  ├─ wired-hooks-compaction.test.ts
│  │  ├─ wired-hooks-gateway.test.ts
│  │  ├─ wired-hooks-llm.test.ts
│  │  ├─ wired-hooks-message.test.ts
│  │  ├─ wired-hooks-session.test.ts
│  │  └─ wired-hooks-subagent.test.ts
│  ├─ process/
│  │  ├─ supervisor/
│  │  │  ├─ adapters/
│  │  │  │  ├─ child.test.ts
│  │  │  │  ├─ child.ts
│  │  │  │  ├─ env.ts
│  │  │  │  ├─ pty.test.ts
│  │  │  │  └─ pty.ts
│  │  │  ├─ index.ts
│  │  │  ├─ registry.test.ts
│  │  │  ├─ registry.ts
│  │  │  ├─ supervisor.pty-command.test.ts
│  │  │  ├─ supervisor.test.ts
│  │  │  ├─ supervisor.ts
│  │  │  └─ types.ts
│  │  ├─ child-process-bridge.ts
│  │  ├─ command-queue.test.ts
│  │  ├─ command-queue.ts
│  │  ├─ exec.no-output-timer.test.ts
│  │  ├─ exec.test.ts
│  │  ├─ exec.ts
│  │  ├─ exec.windows.test.ts
│  │  ├─ kill-tree.test.ts
│  │  ├─ kill-tree.ts
│  │  ├─ lanes.ts
│  │  ├─ restart-recovery.ts
│  │  ├─ spawn-utils.test.ts
│  │  ├─ spawn-utils.ts
│  │  └─ test-timeouts.ts
│  ├─ providers/
│  │  ├─ github-copilot-auth.ts
│  │  ├─ github-copilot-models.test.ts
│  │  ├─ github-copilot-models.ts
│  │  ├─ github-copilot-token.test.ts
│  │  ├─ github-copilot-token.ts
│  │  ├─ google-shared.ensures-function-call-comes-after-user-turn.test.ts
│  │  ├─ google-shared.preserves-parameters-type-is-missing.test.ts
│  │  ├─ google-shared.test-helpers.ts
│  │  ├─ kilocode-shared.ts
│  │  ├─ qwen-portal-oauth.test.ts
│  │  └─ qwen-portal-oauth.ts
│  ├─ routing/
│  │  ├─ account-id.test.ts
│  │  ├─ account-id.ts
│  │  ├─ account-lookup.test.ts
│  │  ├─ account-lookup.ts
│  │  ├─ bindings.ts
│  │  ├─ default-account-warnings.ts
│  │  ├─ resolve-route.test.ts
│  │  ├─ resolve-route.ts
│  │  ├─ session-key.continuity.test.ts
│  │  ├─ session-key.test.ts
│  │  └─ session-key.ts
│  ├─ scripts/
│  │  ├─ canvas-a2ui-copy.test.ts
│  │  └─ ci-changed-scope.test.ts
│  ├─ secrets/
│  │  ├─ apply.test.ts
│  │  ├─ apply.ts
│  │  ├─ audit.test.ts
│  │  ├─ audit.ts
│  │  ├─ auth-profiles-scan.ts
│  │  ├─ auth-store-paths.ts
│  │  ├─ command-config.test.ts
│  │  ├─ command-config.ts
│  │  ├─ config-io.ts
│  │  ├─ configure-plan.test.ts
│  │  ├─ configure-plan.ts
│  │  ├─ configure.test.ts
│  │  ├─ configure.ts
│  │  ├─ credential-matrix.ts
│  │  ├─ json-pointer.ts
│  │  ├─ path-utils.test.ts
│  │  ├─ path-utils.ts
│  │  ├─ plan.test.ts
│  │  ├─ plan.ts
│  │  ├─ provider-env-vars.ts
│  │  ├─ ref-contract.ts
│  │  ├─ resolve.test.ts
│  │  ├─ resolve.ts
│  │  ├─ runtime-auth-collectors.ts
│  │  ├─ runtime-config-collectors-channels.ts
│  │  ├─ runtime-config-collectors-core.ts
│  │  ├─ runtime-config-collectors-tts.ts
│  │  ├─ runtime-config-collectors.ts
│  │  ├─ runtime-gateway-auth-surfaces.test.ts
│  │  ├─ runtime-gateway-auth-surfaces.ts
│  │  ├─ runtime-shared.ts
│  │  ├─ runtime.coverage.test.ts
│  │  ├─ runtime.test.ts
│  │  ├─ runtime.ts
│  │  ├─ secret-value.ts
│  │  ├─ shared.ts
│  │  ├─ storage-scan.ts
│  │  ├─ target-registry-data.ts
│  │  ├─ target-registry-pattern.test.ts
│  │  ├─ target-registry-pattern.ts
│  │  ├─ target-registry-query.ts
│  │  ├─ target-registry-types.ts
│  │  ├─ target-registry.test.ts
│  │  └─ target-registry.ts
│  ├─ security/
│  │  ├─ audit-channel.ts
│  │  ├─ audit-extra.async.ts
│  │  ├─ audit-extra.sync.test.ts
│  │  ├─ audit-extra.sync.ts
│  │  ├─ audit-extra.ts
│  │  ├─ audit-fs.ts
│  │  ├─ audit-tool-policy.ts
│  │  ├─ audit.test.ts
│  │  ├─ audit.ts
│  │  ├─ channel-metadata.ts
│  │  ├─ dangerous-config-flags.ts
│  │  ├─ dangerous-tools.ts
│  │  ├─ dm-policy-channel-smoke.test.ts
│  │  ├─ dm-policy-shared.test.ts
│  │  ├─ dm-policy-shared.ts
│  │  ├─ external-content.test.ts
│  │  ├─ external-content.ts
│  │  ├─ fix.test.ts
│  │  ├─ fix.ts
│  │  ├─ mutable-allowlist-detectors.ts
│  │  ├─ safe-regex.test.ts
│  │  ├─ safe-regex.ts
│  │  ├─ scan-paths.ts
│  │  ├─ secret-equal.ts
│  │  ├─ skill-scanner.test.ts
│  │  ├─ skill-scanner.ts
│  │  ├─ temp-path-guard.test.ts
│  │  ├─ windows-acl.test.ts
│  │  └─ windows-acl.ts
│  ├─ sessions/
│  │  ├─ input-provenance.ts
│  │  ├─ level-overrides.ts
│  │  ├─ model-overrides.test.ts
│  │  ├─ model-overrides.ts
│  │  ├─ send-policy.test.ts
│  │  ├─ send-policy.ts
│  │  ├─ session-key-utils.ts
│  │  ├─ session-label.ts
│  │  ├─ transcript-events.test.ts
│  │  └─ transcript-events.ts
│  ├─ shared/
│  │  ├─ net/
│  │  │  ├─ ip-test-fixtures.ts
│  │  │  ├─ ip.test.ts
│  │  │  ├─ ip.ts
│  │  │  └─ ipv4.ts
│  │  ├─ text/
│  │  │  ├─ assistant-visible-text.test.ts
│  │  │  ├─ assistant-visible-text.ts
│  │  │  ├─ code-regions.ts
│  │  │  ├─ join-segments.test.ts
│  │  │  ├─ join-segments.ts
│  │  │  ├─ reasoning-tags.test.ts
│  │  │  └─ reasoning-tags.ts
│  │  ├─ assistant-identity-values.ts
│  │  ├─ avatar-policy.test.ts
│  │  ├─ avatar-policy.ts
│  │  ├─ chat-content.ts
│  │  ├─ chat-envelope.ts
│  │  ├─ chat-message-content.ts
│  │  ├─ config-eval.test.ts
│  │  ├─ config-eval.ts
│  │  ├─ config-ui-hints-types.ts
│  │  ├─ device-auth-store.ts
│  │  ├─ device-auth.ts
│  │  ├─ entry-metadata.ts
│  │  ├─ entry-status.ts
│  │  ├─ frontmatter.ts
│  │  ├─ gateway-bind-url.ts
│  │  ├─ model-param-b.ts
│  │  ├─ node-list-parse.test.ts
│  │  ├─ node-list-parse.ts
│  │  ├─ node-list-types.ts
│  │  ├─ node-match.ts
│  │  ├─ node-resolve.ts
│  │  ├─ operator-scope-compat.test.ts
│  │  ├─ operator-scope-compat.ts
│  │  ├─ pid-alive.test.ts
│  │  ├─ pid-alive.ts
│  │  ├─ process-scoped-map.ts
│  │  ├─ requirements.test.ts
│  │  ├─ requirements.ts
│  │  ├─ session-types.ts
│  │  ├─ session-usage-timeseries-types.ts
│  │  ├─ shared-misc.test.ts
│  │  ├─ string-normalization.test.ts
│  │  ├─ string-normalization.ts
│  │  ├─ subagents-format.ts
│  │  ├─ tailscale-status.ts
│  │  ├─ text-chunking.ts
│  │  ├─ usage-aggregates.ts
│  │  └─ usage-types.ts
│  ├─ signal/
│  │  ├─ monitor/
│  │  │  ├─ access-policy.ts
│  │  │  ├─ event-handler.inbound-contract.test.ts
│  │  │  ├─ event-handler.mention-gating.test.ts
│  │  │  ├─ event-handler.test-harness.ts
│  │  │  ├─ event-handler.ts
│  │  │  ├─ event-handler.types.ts
│  │  │  └─ mentions.ts
│  │  ├─ accounts.ts
│  │  ├─ client.test.ts
│  │  ├─ client.ts
│  │  ├─ daemon.ts
│  │  ├─ format.chunking.test.ts
│  │  ├─ format.links.test.ts
│  │  ├─ format.test.ts
│  │  ├─ format.ts
│  │  ├─ format.visual.test.ts
│  │  ├─ identity.test.ts
│  │  ├─ identity.ts
│  │  ├─ index.ts
│  │  ├─ monitor.test.ts
│  │  ├─ monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts
│  │  ├─ monitor.tool-result.sends-tool-summaries-responseprefix.test.ts
│  │  ├─ monitor.tool-result.test-harness.ts
│  │  ├─ monitor.ts
│  │  ├─ probe.test.ts
│  │  ├─ probe.ts
│  │  ├─ reaction-level.ts
│  │  ├─ rpc-context.ts
│  │  ├─ send-reactions.test.ts
│  │  ├─ send-reactions.ts
│  │  ├─ send.ts
│  │  └─ sse-reconnect.ts
│  ├─ slack/
│  │  ├─ http/
│  │  │  ├─ index.ts
│  │  │  ├─ registry.test.ts
│  │  │  └─ registry.ts
│  │  ├─ monitor/
│  │  │  ├─ events/
│  │  │  │  ├─ channels.test.ts
│  │  │  │  ├─ channels.ts
│  │  │  │  ├─ interactions.modal.ts
│  │  │  │  ├─ interactions.test.ts
│  │  │  │  ├─ interactions.ts
│  │  │  │  ├─ members.test.ts
│  │  │  │  ├─ members.ts
│  │  │  │  ├─ message-subtype-handlers.test.ts
│  │  │  │  ├─ message-subtype-handlers.ts
│  │  │  │  ├─ messages.test.ts
│  │  │  │  ├─ messages.ts
│  │  │  │  ├─ pins.test.ts
│  │  │  │  ├─ pins.ts
│  │  │  │  ├─ reactions.test.ts
│  │  │  │  ├─ reactions.ts
│  │  │  │  ├─ system-event-context.ts
│  │  │  │  └─ system-event-test-harness.ts
│  │  │  ├─ message-handler/
│  │  │  │  ├─ dispatch.streaming.test.ts
│  │  │  │  ├─ dispatch.ts
│  │  │  │  ├─ prepare-content.ts
│  │  │  │  ├─ prepare-thread-context.ts
│  │  │  │  ├─ prepare.test-helpers.ts
│  │  │  │  ├─ prepare.test.ts
│  │  │  │  ├─ prepare.thread-session-key.test.ts
│  │  │  │  ├─ prepare.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ allow-list.test.ts
│  │  │  ├─ allow-list.ts
│  │  │  ├─ auth.test.ts
│  │  │  ├─ auth.ts
│  │  │  ├─ channel-config.ts
│  │  │  ├─ channel-type.ts
│  │  │  ├─ commands.ts
│  │  │  ├─ context.test.ts
│  │  │  ├─ context.ts
│  │  │  ├─ dm-auth.ts
│  │  │  ├─ events.ts
│  │  │  ├─ external-arg-menu-store.ts
│  │  │  ├─ media.test.ts
│  │  │  ├─ media.ts
│  │  │  ├─ message-handler.app-mention-race.test.ts
│  │  │  ├─ message-handler.debounce-key.test.ts
│  │  │  ├─ message-handler.test.ts
│  │  │  ├─ message-handler.ts
│  │  │  ├─ monitor.test.ts
│  │  │  ├─ mrkdwn.ts
│  │  │  ├─ policy.ts
│  │  │  ├─ provider.auth-errors.test.ts
│  │  │  ├─ provider.group-policy.test.ts
│  │  │  ├─ provider.reconnect.test.ts
│  │  │  ├─ provider.ts
│  │  │  ├─ reconnect-policy.ts
│  │  │  ├─ replies.test.ts
│  │  │  ├─ replies.ts
│  │  │  ├─ room-context.ts
│  │  │  ├─ slash-commands.runtime.ts
│  │  │  ├─ slash-dispatch.runtime.ts
│  │  │  ├─ slash-skill-commands.runtime.ts
│  │  │  ├─ slash.test-harness.ts
│  │  │  ├─ slash.test.ts
│  │  │  ├─ slash.ts
│  │  │  ├─ thread-resolution.ts
│  │  │  └─ types.ts
│  │  ├─ account-inspect.ts
│  │  ├─ accounts.test.ts
│  │  ├─ accounts.ts
│  │  ├─ actions.blocks.test.ts
│  │  ├─ actions.download-file.test.ts
│  │  ├─ actions.read.test.ts
│  │  ├─ actions.ts
│  │  ├─ blocks-fallback.test.ts
│  │  ├─ blocks-fallback.ts
│  │  ├─ blocks-input.test.ts
│  │  ├─ blocks-input.ts
│  │  ├─ blocks.test-helpers.ts
│  │  ├─ channel-migration.test.ts
│  │  ├─ channel-migration.ts
│  │  ├─ client.test.ts
│  │  ├─ client.ts
│  │  ├─ directory-live.ts
│  │  ├─ draft-stream.test.ts
│  │  ├─ draft-stream.ts
│  │  ├─ format.test.ts
│  │  ├─ format.ts
│  │  ├─ index.ts
│  │  ├─ message-actions.test.ts
│  │  ├─ message-actions.ts
│  │  ├─ modal-metadata.test.ts
│  │  ├─ modal-metadata.ts
│  │  ├─ monitor.test-helpers.ts
│  │  ├─ monitor.test.ts
│  │  ├─ monitor.threading.missing-thread-ts.test.ts
│  │  ├─ monitor.tool-result.test.ts
│  │  ├─ monitor.ts
│  │  ├─ probe.ts
│  │  ├─ resolve-channels.test.ts
│  │  ├─ resolve-channels.ts
│  │  ├─ resolve-users.ts
│  │  ├─ scopes.ts
│  │  ├─ send.blocks.test.ts
│  │  ├─ send.ts
│  │  ├─ send.upload.test.ts
│  │  ├─ sent-thread-cache.test.ts
│  │  ├─ sent-thread-cache.ts
│  │  ├─ stream-mode.test.ts
│  │  ├─ stream-mode.ts
│  │  ├─ streaming.ts
│  │  ├─ targets.test.ts
│  │  ├─ targets.ts
│  │  ├─ threading-tool-context.test.ts
│  │  ├─ threading-tool-context.ts
│  │  ├─ threading.test.ts
│  │  ├─ threading.ts
│  │  ├─ token.ts
│  │  └─ types.ts
│  ├─ telegram/
│  │  ├─ bot/
│  │  │  ├─ delivery.replies.ts
│  │  │  ├─ delivery.resolve-media-retry.test.ts
│  │  │  ├─ delivery.resolve-media.ts
│  │  │  ├─ delivery.send.ts
│  │  │  ├─ delivery.test.ts
│  │  │  ├─ delivery.ts
│  │  │  ├─ helpers.test.ts
│  │  │  ├─ helpers.ts
│  │  │  ├─ reply-threading.ts
│  │  │  └─ types.ts
│  │  ├─ account-inspect.ts
│  │  ├─ accounts.test.ts
│  │  ├─ accounts.ts
│  │  ├─ allowed-updates.ts
│  │  ├─ api-logging.ts
│  │  ├─ audit-membership-runtime.ts
│  │  ├─ audit.test.ts
│  │  ├─ audit.ts
│  │  ├─ bot-access.ts
│  │  ├─ bot-handlers.ts
│  │  ├─ bot-message-context.acp-bindings.test.ts
│  │  ├─ bot-message-context.audio-transcript.test.ts
│  │  ├─ bot-message-context.dm-threads.test.ts
│  │  ├─ bot-message-context.dm-topic-threadid.test.ts
│  │  ├─ bot-message-context.implicit-mention.test.ts
│  │  ├─ bot-message-context.sender-prefix.test.ts
│  │  ├─ bot-message-context.test-harness.ts
│  │  ├─ bot-message-context.thread-binding.test.ts
│  │  ├─ bot-message-context.topic-agentid.test.ts
│  │  ├─ bot-message-context.ts
│  │  ├─ bot-message-dispatch.sticker-media.test.ts
│  │  ├─ bot-message-dispatch.test.ts
│  │  ├─ bot-message-dispatch.ts
│  │  ├─ bot-message.test.ts
│  │  ├─ bot-message.ts
│  │  ├─ bot-native-command-menu.test.ts
│  │  ├─ bot-native-command-menu.ts
│  │  ├─ bot-native-commands.plugin-auth.test.ts
│  │  ├─ bot-native-commands.session-meta.test.ts
│  │  ├─ bot-native-commands.skills-allowlist.test.ts
│  │  ├─ bot-native-commands.test-helpers.ts
│  │  ├─ bot-native-commands.test.ts
│  │  ├─ bot-native-commands.ts
│  │  ├─ bot-updates.ts
│  │  ├─ bot.create-telegram-bot.test-harness.ts
│  │  ├─ bot.create-telegram-bot.test.ts
│  │  ├─ bot.helpers.test.ts
│  │  ├─ bot.media.downloads-media-file-path-no-file-download.e2e.test.ts
│  │  ├─ bot.media.e2e-harness.ts
│  │  ├─ bot.media.stickers-and-fragments.e2e.test.ts
│  │  ├─ bot.media.test-utils.ts
│  │  ├─ bot.test.ts
│  │  ├─ bot.ts
│  │  ├─ button-types.ts
│  │  ├─ caption.ts
│  │  ├─ dm-access.ts
│  │  ├─ draft-chunking.test.ts
│  │  ├─ draft-chunking.ts
│  │  ├─ draft-stream.test-helpers.ts
│  │  ├─ draft-stream.test.ts
│  │  ├─ draft-stream.ts
│  │  ├─ fetch.test.ts
│  │  ├─ fetch.ts
│  │  ├─ format.test.ts
│  │  ├─ format.ts
│  │  ├─ format.wrap-md.test.ts
│  │  ├─ forum-service-message.ts
│  │  ├─ group-access.base-access.test.ts
│  │  ├─ group-access.group-policy.test.ts
│  │  ├─ group-access.policy-access.test.ts
│  │  ├─ group-access.ts
│  │  ├─ group-config-helpers.ts
│  │  ├─ group-migration.test.ts
│  │  ├─ group-migration.ts
│  │  ├─ inline-buttons.test.ts
│  │  ├─ inline-buttons.ts
│  │  ├─ lane-delivery.test.ts
│  │  ├─ lane-delivery.ts
│  │  ├─ model-buttons.test.ts
│  │  ├─ model-buttons.ts
│  │  ├─ monitor.test.ts
│  │  ├─ monitor.ts
│  │  ├─ network-config.test.ts
│  │  ├─ network-config.ts
│  │  ├─ network-errors.test.ts
│  │  ├─ network-errors.ts
│  │  ├─ outbound-params.ts
│  │  ├─ probe.test.ts
│  │  ├─ probe.ts
│  │  ├─ proxy.test.ts
│  │  ├─ proxy.ts
│  │  ├─ reaction-level.test.ts
│  │  ├─ reaction-level.ts
│  │  ├─ reasoning-lane-coordinator.test.ts
│  │  ├─ reasoning-lane-coordinator.ts
│  │  ├─ send.proxy.test.ts
│  │  ├─ send.test-harness.ts
│  │  ├─ send.test.ts
│  │  ├─ send.ts
│  │  ├─ sendchataction-401-backoff.test.ts
│  │  ├─ sendchataction-401-backoff.ts
│  │  ├─ sent-message-cache.ts
│  │  ├─ sequential-key.test.ts
│  │  ├─ sequential-key.ts
│  │  ├─ status-reaction-variants.test.ts
│  │  ├─ status-reaction-variants.ts
│  │  ├─ sticker-cache.test.ts
│  │  ├─ sticker-cache.ts
│  │  ├─ target-writeback.test.ts
│  │  ├─ target-writeback.ts
│  │  ├─ targets.test.ts
│  │  ├─ targets.ts
│  │  ├─ thread-bindings.test.ts
│  │  ├─ thread-bindings.ts
│  │  ├─ token.test.ts
│  │  ├─ token.ts
│  │  ├─ update-offset-store.test.ts
│  │  ├─ update-offset-store.ts
│  │  ├─ voice.test.ts
│  │  ├─ voice.ts
│  │  ├─ webhook.test.ts
│  │  └─ webhook.ts
│  ├─ terminal/
│  │  ├─ ansi.ts
│  │  ├─ health-style.ts
│  │  ├─ links.ts
│  │  ├─ note.ts
│  │  ├─ palette.ts
│  │  ├─ progress-line.ts
│  │  ├─ prompt-select-styled.test.ts
│  │  ├─ prompt-select-styled.ts
│  │  ├─ prompt-style.ts
│  │  ├─ restore.test.ts
│  │  ├─ restore.ts
│  │  ├─ safe-text.test.ts
│  │  ├─ safe-text.ts
│  │  ├─ stream-writer.test.ts
│  │  ├─ stream-writer.ts
│  │  ├─ table.test.ts
│  │  ├─ table.ts
│  │  └─ theme.ts
│  ├─ test-helpers/
│  │  ├─ ssrf.ts
│  │  ├─ state-dir-env.test.ts
│  │  ├─ state-dir-env.ts
│  │  └─ workspace.ts
│  ├─ test-utils/
│  │  ├─ auth-token-assertions.ts
│  │  ├─ camera-url-test-helpers.ts
│  │  ├─ channel-plugins.test.ts
│  │  ├─ channel-plugins.ts
│  │  ├─ chunk-test-helpers.ts
│  │  ├─ command-runner.ts
│  │  ├─ env.test.ts
│  │  ├─ env.ts
│  │  ├─ exec-assertions.ts
│  │  ├─ fetch-mock.ts
│  │  ├─ fixture-suite.ts
│  │  ├─ frozen-time.ts
│  │  ├─ imessage-test-plugin.ts
│  │  ├─ internal-hook-event-payload.ts
│  │  ├─ mock-http-response.ts
│  │  ├─ model-auth-mock.ts
│  │  ├─ model-fallback.mock.ts
│  │  ├─ npm-spec-install-test-helpers.ts
│  │  ├─ ports.ts
│  │  ├─ provider-usage-fetch.ts
│  │  ├─ repo-scan.ts
│  │  ├─ runtime-source-guardrail-scan.ts
│  │  ├─ symlink-rebind-race.ts
│  │  ├─ system-run-prepare-payload.ts
│  │  ├─ temp-dir.ts
│  │  ├─ temp-home.test.ts
│  │  ├─ temp-home.ts
│  │  ├─ tracked-temp-dirs.ts
│  │  ├─ typed-cases.ts
│  │  └─ vitest-mock-fn.ts
│  ├─ tts/
│  │  ├─ prepare-text.test.ts
│  │  ├─ tts-core.ts
│  │  ├─ tts.test.ts
│  │  └─ tts.ts
│  ├─ tui/
│  │  ├─ components/
│  │  │  ├─ assistant-message.ts
│  │  │  ├─ chat-log.test.ts
│  │  │  ├─ chat-log.ts
│  │  │  ├─ custom-editor.ts
│  │  │  ├─ filterable-select-list.ts
│  │  │  ├─ fuzzy-filter.ts
│  │  │  ├─ hyperlink-markdown.ts
│  │  │  ├─ markdown-message.ts
│  │  │  ├─ searchable-select-list.test.ts
│  │  │  ├─ searchable-select-list.ts
│  │  │  ├─ selectors.ts
│  │  │  ├─ tool-execution.ts
│  │  │  └─ user-message.ts
│  │  ├─ theme/
│  │  │  ├─ syntax-theme.ts
│  │  │  ├─ theme.test.ts
│  │  │  └─ theme.ts
│  │  ├─ commands.test.ts
│  │  ├─ commands.ts
│  │  ├─ gateway-chat.test.ts
│  │  ├─ gateway-chat.ts
│  │  ├─ osc8-hyperlinks.test.ts
│  │  ├─ osc8-hyperlinks.ts
│  │  ├─ tui-command-handlers.test.ts
│  │  ├─ tui-command-handlers.ts
│  │  ├─ tui-event-handlers.test.ts
│  │  ├─ tui-event-handlers.ts
│  │  ├─ tui-formatters.test.ts
│  │  ├─ tui-formatters.ts
│  │  ├─ tui-input-history.test.ts
│  │  ├─ tui-local-shell.test.ts
│  │  ├─ tui-local-shell.ts
│  │  ├─ tui-overlays.test.ts
│  │  ├─ tui-overlays.ts
│  │  ├─ tui-session-actions.test.ts
│  │  ├─ tui-session-actions.ts
│  │  ├─ tui-status-summary.ts
│  │  ├─ tui-stream-assembler.test.ts
│  │  ├─ tui-stream-assembler.ts
│  │  ├─ tui-submit-test-helpers.ts
│  │  ├─ tui-types.ts
│  │  ├─ tui-waiting.test.ts
│  │  ├─ tui-waiting.ts
│  │  ├─ tui.submit-handler.test.ts
│  │  ├─ tui.test.ts
│  │  └─ tui.ts
│  ├─ types/
│  │  ├─ cli-highlight.d.ts
│  │  ├─ extension-api.d.ts
│  │  ├─ lydell-node-pty.d.ts
│  │  ├─ napi-rs-canvas.d.ts
│  │  ├─ node-edge-tts.d.ts
│  │  ├─ node-llama-cpp.d.ts
│  │  ├─ osc-progress.d.ts
│  │  ├─ pdfjs-dist-legacy.d.ts
│  │  └─ qrcode-terminal.d.ts
│  ├─ utils/
│  │  ├─ account-id.ts
│  │  ├─ boolean.ts
│  │  ├─ chunk-items.ts
│  │  ├─ delivery-context.test.ts
│  │  ├─ delivery-context.ts
│  │  ├─ directive-tags.test.ts
│  │  ├─ directive-tags.ts
│  │  ├─ fetch-timeout.ts
│  │  ├─ mask-api-key.test.ts
│  │  ├─ mask-api-key.ts
│  │  ├─ message-channel.test.ts
│  │  ├─ message-channel.ts
│  │  ├─ normalize-secret-input.test.ts
│  │  ├─ normalize-secret-input.ts
│  │  ├─ provider-utils.ts
│  │  ├─ queue-helpers.test.ts
│  │  ├─ queue-helpers.ts
│  │  ├─ reaction-level.test.ts
│  │  ├─ reaction-level.ts
│  │  ├─ run-with-concurrency.test.ts
│  │  ├─ run-with-concurrency.ts
│  │  ├─ safe-json.ts
│  │  ├─ shell-argv.ts
│  │  ├─ transcript-tools.test.ts
│  │  ├─ transcript-tools.ts
│  │  ├─ usage-format.test.ts
│  │  ├─ usage-format.ts
│  │  ├─ utils-misc.test.ts
│  │  └─ with-timeout.ts
│  ├─ web/
│  │  ├─ auto-reply/
│  │  │  ├─ monitor/
│  │  │  │  ├─ ack-reaction.ts
│  │  │  │  ├─ broadcast.ts
│  │  │  │  ├─ commands.ts
│  │  │  │  ├─ echo.ts
│  │  │  │  ├─ group-activation.ts
│  │  │  │  ├─ group-gating.ts
│  │  │  │  ├─ group-members.test.ts
│  │  │  │  ├─ group-members.ts
│  │  │  │  ├─ last-route.ts
│  │  │  │  ├─ message-line.ts
│  │  │  │  ├─ on-message.ts
│  │  │  │  ├─ peer.ts
│  │  │  │  ├─ process-message.inbound-contract.test.ts
│  │  │  │  └─ process-message.ts
│  │  │  ├─ constants.ts
│  │  │  ├─ deliver-reply.test.ts
│  │  │  ├─ deliver-reply.ts
│  │  │  ├─ heartbeat-runner.test.ts
│  │  │  ├─ heartbeat-runner.ts
│  │  │  ├─ loggers.ts
│  │  │  ├─ mentions.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ session-snapshot.ts
│  │  │  ├─ types.ts
│  │  │  ├─ util.ts
│  │  │  ├─ web-auto-reply-monitor.test.ts
│  │  │  └─ web-auto-reply-utils.test.ts
│  │  ├─ inbound/
│  │  │  ├─ access-control.group-policy.test.ts
│  │  │  ├─ access-control.test-harness.ts
│  │  │  ├─ access-control.test.ts
│  │  │  ├─ access-control.ts
│  │  │  ├─ dedupe.ts
│  │  │  ├─ extract.ts
│  │  │  ├─ media.node.test.ts
│  │  │  ├─ media.ts
│  │  │  ├─ monitor.ts
│  │  │  ├─ send-api.test.ts
│  │  │  ├─ send-api.ts
│  │  │  └─ types.ts
│  │  ├─ accounts.test.ts
│  │  ├─ accounts.ts
│  │  ├─ accounts.whatsapp-auth.test.ts
│  │  ├─ active-listener.ts
│  │  ├─ auth-store.ts
│  │  ├─ auto-reply.broadcast-groups.combined.test.ts
│  │  ├─ auto-reply.broadcast-groups.test-harness.ts
│  │  ├─ auto-reply.impl.ts
│  │  ├─ auto-reply.test-harness.ts
│  │  ├─ auto-reply.ts
│  │  ├─ auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts
│  │  ├─ auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts
│  │  ├─ auto-reply.web-auto-reply.last-route.test.ts
│  │  ├─ inbound.media.test.ts
│  │  ├─ inbound.test.ts
│  │  ├─ inbound.ts
│  │  ├─ login-qr.test.ts
│  │  ├─ login-qr.ts
│  │  ├─ login.coverage.test.ts
│  │  ├─ login.test.ts
│  │  ├─ login.ts
│  │  ├─ logout.test.ts
│  │  ├─ media.test.ts
│  │  ├─ media.ts
│  │  ├─ monitor-inbox.allows-messages-from-senders-allowfrom-list.test.ts
│  │  ├─ monitor-inbox.blocks-messages-from-unauthorized-senders-not-allowfrom.test.ts
│  │  ├─ monitor-inbox.captures-media-path-image-messages.test.ts
│  │  ├─ monitor-inbox.streams-inbound-messages.test.ts
│  │  ├─ monitor-inbox.test-harness.ts
│  │  ├─ outbound.test.ts
│  │  ├─ outbound.ts
│  │  ├─ qr-image.ts
│  │  ├─ reconnect.test.ts
│  │  ├─ reconnect.ts
│  │  ├─ session.test.ts
│  │  ├─ session.ts
│  │  ├─ test-helpers.ts
│  │  └─ vcard.ts
│  ├─ whatsapp/
│  │  ├─ normalize.test.ts
│  │  ├─ normalize.ts
│  │  ├─ resolve-outbound-target.test.ts
│  │  └─ resolve-outbound-target.ts
│  ├─ wizard/
│  │  ├─ clack-prompter.test.ts
│  │  ├─ clack-prompter.ts
│  │  ├─ onboarding.completion.test.ts
│  │  ├─ onboarding.completion.ts
│  │  ├─ onboarding.finalize.test.ts
│  │  ├─ onboarding.finalize.ts
│  │  ├─ onboarding.gateway-config.test.ts
│  │  ├─ onboarding.gateway-config.ts
│  │  ├─ onboarding.secret-input.test.ts
│  │  ├─ onboarding.secret-input.ts
│  │  ├─ onboarding.test.ts
│  │  ├─ onboarding.ts
│  │  ├─ onboarding.types.ts
│  │  ├─ prompts.ts
│  │  ├─ session.test.ts
│  │  └─ session.ts
│  ├─ channel-web.ts
│  ├─ docker-image-digests.test.ts
│  ├─ docker-setup.e2e.test.ts
│  ├─ dockerfile.test.ts
│  ├─ entry.ts
│  ├─ extensionAPI.ts
│  ├─ globals.ts
│  ├─ index.ts
│  ├─ logger.test.ts
│  ├─ logger.ts
│  ├─ logging.ts
│  ├─ poll-params.test.ts
│  ├─ poll-params.ts
│  ├─ polls.test.ts
│  ├─ polls.ts
│  ├─ runtime.ts
│  ├─ utils.test.ts
│  ├─ utils.ts
│  ├─ version.test.ts
│  └─ version.ts
├─ Swabble/
│  ├─ .github/
│  │  └─ workflows/
│  │     └─ ci.yml
│  ├─ docs/
│  │  └─ spec.md
│  ├─ scripts/
│  │  ├─ format.sh
│  │  └─ lint.sh
│  ├─ Sources/
│  │  ├─ swabble/
│  │  │  ├─ CLI/
│  │  │  │  └─ CLIRegistry.swift
│  │  │  ├─ Commands/
│  │  │  │  ├─ DoctorCommand.swift
│  │  │  │  ├─ HealthCommand.swift
│  │  │  │  ├─ MicCommands.swift
│  │  │  │  ├─ ServeCommand.swift
│  │  │  │  ├─ ServiceCommands.swift
│  │  │  │  ├─ SetupCommand.swift
│  │  │  │  ├─ StartStopCommands.swift
│  │  │  │  ├─ StatusCommand.swift
│  │  │  │  ├─ TailLogCommand.swift
│  │  │  │  ├─ TestHookCommand.swift
│  │  │  │  └─ TranscribeCommand.swift
│  │  │  └─ main.swift
│  │  ├─ SwabbleCore/
│  │  │  ├─ Config/
│  │  │  │  └─ Config.swift
│  │  │  ├─ Hooks/
│  │  │  │  └─ HookExecutor.swift
│  │  │  ├─ Speech/
│  │  │  │  ├─ BufferConverter.swift
│  │  │  │  └─ SpeechPipeline.swift
│  │  │  └─ Support/
│  │  │     ├─ AttributedString+Sentences.swift
│  │  │     ├─ Logging.swift
│  │  │     ├─ OutputFormat.swift
│  │  │     └─ TranscriptsStore.swift
│  │  └─ SwabbleKit/
│  │     └─ WakeWordGate.swift
│  ├─ Tests/
│  │  ├─ SwabbleKitTests/
│  │  │  └─ WakeWordGateTests.swift
│  │  └─ swabbleTests/
│  │     └─ ConfigTests.swift
│  ├─ .gitignore
│  ├─ .swiftformat
│  ├─ .swiftlint.yml
│  ├─ CHANGELOG.md
│  ├─ LICENSE
│  ├─ Package.resolved
│  ├─ Package.swift
│  └─ README.md
├─ test/
│  ├─ fixtures/
│  │  ├─ child-process-bridge/
│  │  │  └─ child.js
│  │  ├─ hooks-install/
│  │  │  ├─ npm-pack-hooks.tgz
│  │  │  ├─ tar-evil-id.tar
│  │  │  ├─ tar-hooks.tar
│  │  │  ├─ tar-reserved-id.tar
│  │  │  ├─ tar-traversal.tar
│  │  │  ├─ zip-hooks.zip
│  │  │  └─ zip-traversal.zip
│  │  ├─ plugins-install/
│  │  │  ├─ voice-call-0.0.1.tgz
│  │  │  ├─ voice-call-0.0.2.tgz
│  │  │  └─ zipper-0.0.1.zip
│  │  ├─ exec-allowlist-shell-parser-parity.json
│  │  ├─ exec-wrapper-resolution-parity.json
│  │  ├─ system-run-approval-binding-contract.json
│  │  ├─ system-run-approval-mismatch-contract.json
│  │  └─ system-run-command-contract.json
│  ├─ helpers/
│  │  ├─ dispatch-inbound-capture.ts
│  │  ├─ envelope-timestamp.ts
│  │  ├─ fast-short-timeouts.ts
│  │  ├─ gateway-e2e-harness.ts
│  │  ├─ inbound-contract-capture.ts
│  │  ├─ inbound-contract-dispatch-mock.ts
│  │  ├─ inbound-contract.ts
│  │  ├─ memory-tool-manager-mock.ts
│  │  ├─ mock-incoming-request.ts
│  │  ├─ normalize-text.ts
│  │  ├─ paths.ts
│  │  ├─ poll.ts
│  │  ├─ temp-home.ts
│  │  └─ wizard-prompter.ts
│  ├─ mocks/
│  │  └─ baileys.ts
│  ├─ scripts/
│  │  ├─ check-channel-agnostic-boundaries.test.ts
│  │  ├─ check-no-random-messaging-tmp.test.ts
│  │  ├─ check-no-raw-window-open.test.ts
│  │  ├─ ios-team-id.test.ts
│  │  └─ ui.test.ts
│  ├─ appcast.test.ts
│  ├─ cli-json-stdout.e2e.test.ts
│  ├─ gateway.multi.e2e.test.ts
│  ├─ git-hooks-pre-commit.test.ts
│  ├─ global-setup.ts
│  ├─ release-check.test.ts
│  ├─ setup.ts
│  ├─ test-env.ts
│  └─ ui.presenter-next-run.test.ts
├─ ui/
│  ├─ public/
│  │  ├─ apple-touch-icon.png
│  │  ├─ favicon-32.png
│  │  ├─ favicon.ico
│  │  └─ favicon.svg
│  ├─ src/
│  │  ├─ i18n/
│  │  │  ├─ lib/
│  │  │  │  ├─ lit-controller.ts
│  │  │  │  ├─ registry.ts
│  │  │  │  ├─ translate.ts
│  │  │  │  └─ types.ts
│  │  │  ├─ locales/
│  │  │  │  ├─ de.ts
│  │  │  │  ├─ en.ts
│  │  │  │  ├─ es.ts
│  │  │  │  ├─ pt-BR.ts
│  │  │  │  ├─ zh-CN.ts
│  │  │  │  └─ zh-TW.ts
│  │  │  ├─ test/
│  │  │  │  └─ translate.test.ts
│  │  │  └─ index.ts
│  │  ├─ styles/
│  │  │  ├─ chat/
│  │  │  │  ├─ grouped.css
│  │  │  │  ├─ layout.css
│  │  │  │  ├─ sidebar.css
│  │  │  │  ├─ text.css
│  │  │  │  └─ tool-cards.css
│  │  │  ├─ base.css
│  │  │  ├─ chat.css
│  │  │  ├─ components.css
│  │  │  ├─ config.css
│  │  │  ├─ layout.css
│  │  │  └─ layout.mobile.css
│  │  ├─ ui/
│  │  │  ├─ __screenshots__/
│  │  │  │  ├─ config-form.browser.test.ts/
│  │  │  │  │  ├─ config-form-renderer-flags-unsupported-unions-1.png
│  │  │  │  │  ├─ config-form-renderer-renders-inputs-and-patches-values-1.png
│  │  │  │  │  └─ config-form-renderer-renders-union-literals-as-select-options-1.png
│  │  │  │  └─ navigation.browser.test.ts/
│  │  │  │     └─ control-UI-routing-auto-scrolls-chat-history-to-the-latest-message-1.png
│  │  │  ├─ chat/
│  │  │  │  ├─ attachment-support.ts
│  │  │  │  ├─ constants.ts
│  │  │  │  ├─ copy-as-markdown.ts
│  │  │  │  ├─ deleted-messages.ts
│  │  │  │  ├─ export.node.test.ts
│  │  │  │  ├─ export.ts
│  │  │  │  ├─ grouped-render.ts
│  │  │  │  ├─ input-history.ts
│  │  │  │  ├─ message-extract.test.ts
│  │  │  │  ├─ message-extract.ts
│  │  │  │  ├─ message-normalizer.test.ts
│  │  │  │  ├─ message-normalizer.ts
│  │  │  │  ├─ pinned-messages.ts
│  │  │  │  ├─ pinned-summary.ts
│  │  │  │  ├─ search-match.ts
│  │  │  │  ├─ session-cache.ts
│  │  │  │  ├─ slash-command-executor.node.test.ts
│  │  │  │  ├─ slash-command-executor.ts
│  │  │  │  ├─ slash-commands.node.test.ts
│  │  │  │  ├─ slash-commands.ts
│  │  │  │  ├─ speech.ts
│  │  │  │  ├─ tool-cards.ts
│  │  │  │  ├─ tool-helpers.test.ts
│  │  │  │  └─ tool-helpers.ts
│  │  │  ├─ components/
│  │  │  │  ├─ dashboard-header.ts
│  │  │  │  └─ resizable-divider.ts
│  │  │  ├─ controllers/
│  │  │  │  ├─ config/
│  │  │  │  │  ├─ form-coerce.ts
│  │  │  │  │  ├─ form-utils.node.test.ts
│  │  │  │  │  └─ form-utils.ts
│  │  │  │  ├─ agent-files.ts
│  │  │  │  ├─ agent-identity.ts
│  │  │  │  ├─ agent-skills.ts
│  │  │  │  ├─ agents.test.ts
│  │  │  │  ├─ agents.ts
│  │  │  │  ├─ assistant-identity.ts
│  │  │  │  ├─ channels.ts
│  │  │  │  ├─ channels.types.ts
│  │  │  │  ├─ chat.test.ts
│  │  │  │  ├─ chat.ts
│  │  │  │  ├─ config.test.ts
│  │  │  │  ├─ config.ts
│  │  │  │  ├─ control-ui-bootstrap.test.ts
│  │  │  │  ├─ control-ui-bootstrap.ts
│  │  │  │  ├─ cron-filters.test.ts
│  │  │  │  ├─ cron.test.ts
│  │  │  │  ├─ cron.ts
│  │  │  │  ├─ debug.ts
│  │  │  │  ├─ devices.ts
│  │  │  │  ├─ exec-approval.ts
│  │  │  │  ├─ exec-approvals.ts
│  │  │  │  ├─ health.ts
│  │  │  │  ├─ logs.test.ts
│  │  │  │  ├─ logs.ts
│  │  │  │  ├─ models.ts
│  │  │  │  ├─ nodes.ts
│  │  │  │  ├─ presence.ts
│  │  │  │  ├─ sessions.test.ts
│  │  │  │  ├─ sessions.ts
│  │  │  │  ├─ skills.ts
│  │  │  │  ├─ usage.node.test.ts
│  │  │  │  └─ usage.ts
│  │  │  ├─ data/
│  │  │  │  └─ moonshot-kimi-k2.ts
│  │  │  ├─ test-helpers/
│  │  │  │  └─ app-mount.ts
│  │  │  ├─ types/
│  │  │  │  └─ chat-types.ts
│  │  │  ├─ views/
│  │  │  │  ├─ usage-styles/
│  │  │  │  │  ├─ usageStyles-part1.ts
│  │  │  │  │  ├─ usageStyles-part2.ts
│  │  │  │  │  └─ usageStyles-part3.ts
│  │  │  │  ├─ agents-panels-overview.ts
│  │  │  │  ├─ agents-panels-status-files.ts
│  │  │  │  ├─ agents-panels-tools-skills.browser.test.ts
│  │  │  │  ├─ agents-panels-tools-skills.ts
│  │  │  │  ├─ agents-utils.test.ts
│  │  │  │  ├─ agents-utils.ts
│  │  │  │  ├─ agents.test.ts
│  │  │  │  ├─ agents.ts
│  │  │  │  ├─ bottom-tabs.ts
│  │  │  │  ├─ channel-config-extras.ts
│  │  │  │  ├─ channels.config.ts
│  │  │  │  ├─ channels.discord.ts
│  │  │  │  ├─ channels.googlechat.ts
│  │  │  │  ├─ channels.imessage.ts
│  │  │  │  ├─ channels.nostr-profile-form.ts
│  │  │  │  ├─ channels.nostr.ts
│  │  │  │  ├─ channels.shared.ts
│  │  │  │  ├─ channels.signal.ts
│  │  │  │  ├─ channels.slack.ts
│  │  │  │  ├─ channels.telegram.ts
│  │  │  │  ├─ channels.ts
│  │  │  │  ├─ channels.types.ts
│  │  │  │  ├─ channels.whatsapp.ts
│  │  │  │  ├─ chat-image-open.browser.test.ts
│  │  │  │  ├─ chat.browser.test.ts
│  │  │  │  ├─ chat.test.ts
│  │  │  │  ├─ chat.ts
│  │  │  │  ├─ command-palette.ts
│  │  │  │  ├─ config-form.analyze.ts
│  │  │  │  ├─ config-form.node.ts
│  │  │  │  ├─ config-form.render.ts
│  │  │  │  ├─ config-form.search.node.test.ts
│  │  │  │  ├─ config-form.shared.ts
│  │  │  │  ├─ config-form.ts
│  │  │  │  ├─ config-search.node.test.ts
│  │  │  │  ├─ config-search.ts
│  │  │  │  ├─ config.browser.test.ts
│  │  │  │  ├─ config.ts
│  │  │  │  ├─ cron.test.ts
│  │  │  │  ├─ cron.ts
│  │  │  │  ├─ debug.ts
│  │  │  │  ├─ exec-approval.ts
│  │  │  │  ├─ gateway-url-confirmation.ts
│  │  │  │  ├─ instances.ts
│  │  │  │  ├─ login-gate.ts
│  │  │  │  ├─ logs.ts
│  │  │  │  ├─ markdown-sidebar.ts
│  │  │  │  ├─ nodes-exec-approvals.ts
│  │  │  │  ├─ nodes-shared.ts
│  │  │  │  ├─ nodes.ts
│  │  │  │  ├─ overview-attention.ts
│  │  │  │  ├─ overview-cards.ts
│  │  │  │  ├─ overview-event-log.ts
│  │  │  │  ├─ overview-hints.ts
│  │  │  │  ├─ overview-log-tail.ts
│  │  │  │  ├─ overview-quick-actions.ts
│  │  │  │  ├─ overview.node.test.ts
│  │  │  │  ├─ overview.ts
│  │  │  │  ├─ sessions.test.ts
│  │  │  │  ├─ sessions.ts
│  │  │  │  ├─ skills-grouping.ts
│  │  │  │  ├─ skills-shared.ts
│  │  │  │  ├─ skills.ts
│  │  │  │  ├─ usage-metrics.ts
│  │  │  │  ├─ usage-query.ts
│  │  │  │  ├─ usage-render-details.test.ts
│  │  │  │  ├─ usage-render-details.ts
│  │  │  │  ├─ usage-render-overview.ts
│  │  │  │  ├─ usage.ts
│  │  │  │  ├─ usageStyles.ts
│  │  │  │  └─ usageTypes.ts
│  │  │  ├─ app-channels.ts
│  │  │  ├─ app-chat.test.ts
│  │  │  ├─ app-chat.ts
│  │  │  ├─ app-defaults.ts
│  │  │  ├─ app-events.ts
│  │  │  ├─ app-gateway.node.test.ts
│  │  │  ├─ app-gateway.ts
│  │  │  ├─ app-lifecycle-connect.node.test.ts
│  │  │  ├─ app-lifecycle.node.test.ts
│  │  │  ├─ app-lifecycle.ts
│  │  │  ├─ app-polling.ts
│  │  │  ├─ app-render-usage-tab.ts
│  │  │  ├─ app-render.helpers.node.test.ts
│  │  │  ├─ app-render.helpers.ts
│  │  │  ├─ app-render.ts
│  │  │  ├─ app-scroll.test.ts
│  │  │  ├─ app-scroll.ts
│  │  │  ├─ app-settings.test.ts
│  │  │  ├─ app-settings.ts
│  │  │  ├─ app-tool-stream.node.test.ts
│  │  │  ├─ app-tool-stream.ts
│  │  │  ├─ app-view-state.ts
│  │  │  ├─ app.ts
│  │  │  ├─ assistant-identity.ts
│  │  │  ├─ chat-event-reload.test.ts
│  │  │  ├─ chat-event-reload.ts
│  │  │  ├─ chat-export.ts
│  │  │  ├─ chat-markdown.browser.test.ts
│  │  │  ├─ config-form.browser.test.ts
│  │  │  ├─ device-auth.ts
│  │  │  ├─ device-identity.ts
│  │  │  ├─ external-link.test.ts
│  │  │  ├─ external-link.ts
│  │  │  ├─ focus-mode.browser.test.ts
│  │  │  ├─ format.test.ts
│  │  │  ├─ format.ts
│  │  │  ├─ gateway.node.test.ts
│  │  │  ├─ gateway.ts
│  │  │  ├─ icons.ts
│  │  │  ├─ markdown.test.ts
│  │  │  ├─ markdown.ts
│  │  │  ├─ navigation-groups.test.ts
│  │  │  ├─ navigation.browser.test.ts
│  │  │  ├─ navigation.test.ts
│  │  │  ├─ navigation.ts
│  │  │  ├─ open-external-url.test.ts
│  │  │  ├─ open-external-url.ts
│  │  │  ├─ presenter.ts
│  │  │  ├─ sidebar-status.browser.test.ts
│  │  │  ├─ storage.node.test.ts
│  │  │  ├─ storage.ts
│  │  │  ├─ text-direction.test.ts
│  │  │  ├─ text-direction.ts
│  │  │  ├─ theme-transition.ts
│  │  │  ├─ theme.test.ts
│  │  │  ├─ theme.ts
│  │  │  ├─ tool-display.ts
│  │  │  ├─ tool-labels.ts
│  │  │  ├─ types.ts
│  │  │  ├─ ui-types.ts
│  │  │  ├─ usage-helpers.node.test.ts
│  │  │  ├─ usage-helpers.ts
│  │  │  ├─ usage-types.ts
│  │  │  ├─ uuid.test.ts
│  │  │  └─ uuid.ts
│  │  ├─ css.d.ts
│  │  ├─ main.ts
│  │  └─ styles.css
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.ts
│  ├─ vitest.config.ts
│  └─ vitest.node.config.ts
├─ vendor/
│  └─ a2ui/
│     ├─ .gemini/
│     │  └─ GEMINI.md
│     ├─ .github/
│     │  └─ workflows/
│     │     ├─ docs.yml
│     │     ├─ editor_build.yml
│     │     ├─ inspector_build.yml
│     │     ├─ java_build_and_test.yml
│     │     ├─ lit_samples_build.yml
│     │     ├─ ng_build_and_test.yml
│     │     ├─ python_samples_build.yml
│     │     └─ web_build_and_test.yml
│     ├─ renderers/
│     │  ├─ angular/
│     │  │  ├─ src/
│     │  │  │  ├─ lib/
│     │  │  │  │  ├─ catalog/
│     │  │  │  │  │  ├─ audio.ts
│     │  │  │  │  │  ├─ button.ts
│     │  │  │  │  │  ├─ card.ts
│     │  │  │  │  │  ├─ checkbox.ts
│     │  │  │  │  │  ├─ column.ts
│     │  │  │  │  │  ├─ datetime-input.ts
│     │  │  │  │  │  ├─ default.ts
│     │  │  │  │  │  ├─ divider.ts
│     │  │  │  │  │  ├─ icon.ts
│     │  │  │  │  │  ├─ image.ts
│     │  │  │  │  │  ├─ list.ts
│     │  │  │  │  │  ├─ modal.ts
│     │  │  │  │  │  ├─ multiple-choice.ts
│     │  │  │  │  │  ├─ row.ts
│     │  │  │  │  │  ├─ slider.ts
│     │  │  │  │  │  ├─ surface.ts
│     │  │  │  │  │  ├─ tabs.ts
│     │  │  │  │  │  ├─ text-field.ts
│     │  │  │  │  │  ├─ text.ts
│     │  │  │  │  │  └─ video.ts
│     │  │  │  │  ├─ data/
│     │  │  │  │  │  ├─ index.ts
│     │  │  │  │  │  ├─ markdown.ts
│     │  │  │  │  │  ├─ processor.ts
│     │  │  │  │  │  └─ types.ts
│     │  │  │  │  ├─ rendering/
│     │  │  │  │  │  ├─ catalog.ts
│     │  │  │  │  │  ├─ dynamic-component.ts
│     │  │  │  │  │  ├─ index.ts
│     │  │  │  │  │  ├─ renderer.ts
│     │  │  │  │  │  └─ theming.ts
│     │  │  │  │  └─ config.ts
│     │  │  │  └─ public-api.ts
│     │  │  ├─ .npmrc
│     │  │  ├─ angular.json
│     │  │  ├─ ng-package.json
│     │  │  ├─ package-lock.json
│     │  │  ├─ package.json
│     │  │  ├─ README.md
│     │  │  ├─ tsconfig.json
│     │  │  ├─ tsconfig.lib.json
│     │  │  ├─ tsconfig.lib.prod.json
│     │  │  └─ tsconfig.spec.json
│     │  └─ lit/
│     │     ├─ dist/
│     │     │  ├─ src/
│     │     │  │  ├─ 0.8/
│     │     │  │  │  ├─ data/
│     │     │  │  │  │  ├─ guards.d.ts
│     │     │  │  │  │  ├─ guards.d.ts.map
│     │     │  │  │  │  ├─ guards.js
│     │     │  │  │  │  ├─ guards.js.map
│     │     │  │  │  │  ├─ model-processor.d.ts
│     │     │  │  │  │  ├─ model-processor.d.ts.map
│     │     │  │  │  │  ├─ model-processor.js
│     │     │  │  │  │  ├─ model-processor.js.map
│     │     │  │  │  │  ├─ signal-model-processor.d.ts
│     │     │  │  │  │  ├─ signal-model-processor.d.ts.map
│     │     │  │  │  │  ├─ signal-model-processor.js
│     │     │  │  │  │  └─ signal-model-processor.js.map
│     │     │  │  │  ├─ events/
│     │     │  │  │  │  ├─ a2ui.d.ts
│     │     │  │  │  │  ├─ a2ui.d.ts.map
│     │     │  │  │  │  ├─ a2ui.js
│     │     │  │  │  │  ├─ a2ui.js.map
│     │     │  │  │  │  ├─ base.d.ts
│     │     │  │  │  │  ├─ base.d.ts.map
│     │     │  │  │  │  ├─ base.js
│     │     │  │  │  │  ├─ base.js.map
│     │     │  │  │  │  ├─ events.d.ts
│     │     │  │  │  │  ├─ events.d.ts.map
│     │     │  │  │  │  ├─ events.js
│     │     │  │  │  │  └─ events.js.map
│     │     │  │  │  ├─ schemas/
│     │     │  │  │  │  └─ server_to_client_with_standard_catalog.json
│     │     │  │  │  ├─ styles/
│     │     │  │  │  │  ├─ behavior.d.ts
│     │     │  │  │  │  ├─ behavior.d.ts.map
│     │     │  │  │  │  ├─ behavior.js
│     │     │  │  │  │  ├─ behavior.js.map
│     │     │  │  │  │  ├─ border.d.ts
│     │     │  │  │  │  ├─ border.d.ts.map
│     │     │  │  │  │  ├─ border.js
│     │     │  │  │  │  ├─ border.js.map
│     │     │  │  │  │  ├─ colors.d.ts
│     │     │  │  │  │  ├─ colors.d.ts.map
│     │     │  │  │  │  ├─ colors.js
│     │     │  │  │  │  ├─ colors.js.map
│     │     │  │  │  │  ├─ icons.d.ts
│     │     │  │  │  │  ├─ icons.d.ts.map
│     │     │  │  │  │  ├─ icons.js
│     │     │  │  │  │  ├─ icons.js.map
│     │     │  │  │  │  ├─ index.d.ts
│     │     │  │  │  │  ├─ index.d.ts.map
│     │     │  │  │  │  ├─ index.js
│     │     │  │  │  │  ├─ index.js.map
│     │     │  │  │  │  ├─ layout.d.ts
│     │     │  │  │  │  ├─ layout.d.ts.map
│     │     │  │  │  │  ├─ layout.js
│     │     │  │  │  │  ├─ layout.js.map
│     │     │  │  │  │  ├─ opacity.d.ts
│     │     │  │  │  │  ├─ opacity.d.ts.map
│     │     │  │  │  │  ├─ opacity.js
│     │     │  │  │  │  ├─ opacity.js.map
│     │     │  │  │  │  ├─ shared.d.ts
│     │     │  │  │  │  ├─ shared.d.ts.map
│     │     │  │  │  │  ├─ shared.js
│     │     │  │  │  │  ├─ shared.js.map
│     │     │  │  │  │  ├─ type.d.ts
│     │     │  │  │  │  ├─ type.d.ts.map
│     │     │  │  │  │  ├─ type.js
│     │     │  │  │  │  ├─ type.js.map
│     │     │  │  │  │  ├─ utils.d.ts
│     │     │  │  │  │  ├─ utils.d.ts.map
│     │     │  │  │  │  ├─ utils.js
│     │     │  │  │  │  └─ utils.js.map
│     │     │  │  │  ├─ types/
│     │     │  │  │  │  ├─ client-event.d.ts
│     │     │  │  │  │  ├─ client-event.d.ts.map
│     │     │  │  │  │  ├─ client-event.js
│     │     │  │  │  │  ├─ client-event.js.map
│     │     │  │  │  │  ├─ colors.d.ts
│     │     │  │  │  │  ├─ colors.d.ts.map
│     │     │  │  │  │  ├─ colors.js
│     │     │  │  │  │  ├─ colors.js.map
│     │     │  │  │  │  ├─ components.d.ts
│     │     │  │  │  │  ├─ components.d.ts.map
│     │     │  │  │  │  ├─ components.js
│     │     │  │  │  │  ├─ components.js.map
│     │     │  │  │  │  ├─ primitives.d.ts
│     │     │  │  │  │  ├─ primitives.d.ts.map
│     │     │  │  │  │  ├─ primitives.js
│     │     │  │  │  │  ├─ primitives.js.map
│     │     │  │  │  │  ├─ types.d.ts
│     │     │  │  │  │  ├─ types.d.ts.map
│     │     │  │  │  │  ├─ types.js
│     │     │  │  │  │  └─ types.js.map
│     │     │  │  │  ├─ ui/
│     │     │  │  │  │  ├─ context/
│     │     │  │  │  │  │  ├─ theme.d.ts
│     │     │  │  │  │  │  ├─ theme.d.ts.map
│     │     │  │  │  │  │  ├─ theme.js
│     │     │  │  │  │  │  └─ theme.js.map
│     │     │  │  │  │  ├─ custom-components/
│     │     │  │  │  │  │  ├─ index.d.ts
│     │     │  │  │  │  │  ├─ index.d.ts.map
│     │     │  │  │  │  │  ├─ index.js
│     │     │  │  │  │  │  └─ index.js.map
│     │     │  │  │  │  ├─ directives/
│     │     │  │  │  │  │  ├─ directives.d.ts
│     │     │  │  │  │  │  ├─ directives.d.ts.map
│     │     │  │  │  │  │  ├─ directives.js
│     │     │  │  │  │  │  ├─ directives.js.map
│     │     │  │  │  │  │  ├─ markdown.d.ts
│     │     │  │  │  │  │  ├─ markdown.d.ts.map
│     │     │  │  │  │  │  ├─ markdown.js
│     │     │  │  │  │  │  ├─ markdown.js.map
│     │     │  │  │  │  │  ├─ sanitizer.d.ts
│     │     │  │  │  │  │  ├─ sanitizer.d.ts.map
│     │     │  │  │  │  │  ├─ sanitizer.js
│     │     │  │  │  │  │  └─ sanitizer.js.map
│     │     │  │  │  │  ├─ utils/
│     │     │  │  │  │  │  ├─ utils.d.ts
│     │     │  │  │  │  │  ├─ utils.d.ts.map
│     │     │  │  │  │  │  ├─ utils.js
│     │     │  │  │  │  │  ├─ utils.js.map
│     │     │  │  │  │  │  ├─ youtube.d.ts
│     │     │  │  │  │  │  ├─ youtube.d.ts.map
│     │     │  │  │  │  │  ├─ youtube.js
│     │     │  │  │  │  │  └─ youtube.js.map
│     │     │  │  │  │  ├─ audio.d.ts
│     │     │  │  │  │  ├─ audio.d.ts.map
│     │     │  │  │  │  ├─ audio.js
│     │     │  │  │  │  ├─ audio.js.map
│     │     │  │  │  │  ├─ button.d.ts
│     │     │  │  │  │  ├─ button.d.ts.map
│     │     │  │  │  │  ├─ button.js
│     │     │  │  │  │  ├─ button.js.map
│     │     │  │  │  │  ├─ card.d.ts
│     │     │  │  │  │  ├─ card.d.ts.map
│     │     │  │  │  │  ├─ card.js
│     │     │  │  │  │  ├─ card.js.map
│     │     │  │  │  │  ├─ checkbox.d.ts
│     │     │  │  │  │  ├─ checkbox.d.ts.map
│     │     │  │  │  │  ├─ checkbox.js
│     │     │  │  │  │  ├─ checkbox.js.map
│     │     │  │  │  │  ├─ column.d.ts
│     │     │  │  │  │  ├─ column.d.ts.map
│     │     │  │  │  │  ├─ column.js
│     │     │  │  │  │  ├─ column.js.map
│     │     │  │  │  │  ├─ component-registry.d.ts
│     │     │  │  │  │  ├─ component-registry.d.ts.map
│     │     │  │  │  │  ├─ component-registry.js
│     │     │  │  │  │  ├─ component-registry.js.map
│     │     │  │  │  │  ├─ datetime-input.d.ts
│     │     │  │  │  │  ├─ datetime-input.d.ts.map
│     │     │  │  │  │  ├─ datetime-input.js
│     │     │  │  │  │  ├─ datetime-input.js.map
│     │     │  │  │  │  ├─ divider.d.ts
│     │     │  │  │  │  ├─ divider.d.ts.map
│     │     │  │  │  │  ├─ divider.js
│     │     │  │  │  │  ├─ divider.js.map
│     │     │  │  │  │  ├─ icon.d.ts
│     │     │  │  │  │  ├─ icon.d.ts.map
│     │     │  │  │  │  ├─ icon.js
│     │     │  │  │  │  ├─ icon.js.map
│     │     │  │  │  │  ├─ image.d.ts
│     │     │  │  │  │  ├─ image.d.ts.map
│     │     │  │  │  │  ├─ image.js
│     │     │  │  │  │  ├─ image.js.map
│     │     │  │  │  │  ├─ list.d.ts
│     │     │  │  │  │  ├─ list.d.ts.map
│     │     │  │  │  │  ├─ list.js
│     │     │  │  │  │  ├─ list.js.map
│     │     │  │  │  │  ├─ modal.d.ts
│     │     │  │  │  │  ├─ modal.d.ts.map
│     │     │  │  │  │  ├─ modal.js
│     │     │  │  │  │  ├─ modal.js.map
│     │     │  │  │  │  ├─ multiple-choice.d.ts
│     │     │  │  │  │  ├─ multiple-choice.d.ts.map
│     │     │  │  │  │  ├─ multiple-choice.js
│     │     │  │  │  │  ├─ multiple-choice.js.map
│     │     │  │  │  │  ├─ root.d.ts
│     │     │  │  │  │  ├─ root.d.ts.map
│     │     │  │  │  │  ├─ root.js
│     │     │  │  │  │  ├─ root.js.map
│     │     │  │  │  │  ├─ row.d.ts
│     │     │  │  │  │  ├─ row.d.ts.map
│     │     │  │  │  │  ├─ row.js
│     │     │  │  │  │  ├─ row.js.map
│     │     │  │  │  │  ├─ slider.d.ts
│     │     │  │  │  │  ├─ slider.d.ts.map
│     │     │  │  │  │  ├─ slider.js
│     │     │  │  │  │  ├─ slider.js.map
│     │     │  │  │  │  ├─ styles.d.ts
│     │     │  │  │  │  ├─ styles.d.ts.map
│     │     │  │  │  │  ├─ styles.js
│     │     │  │  │  │  ├─ styles.js.map
│     │     │  │  │  │  ├─ surface.d.ts
│     │     │  │  │  │  ├─ surface.d.ts.map
│     │     │  │  │  │  ├─ surface.js
│     │     │  │  │  │  ├─ surface.js.map
│     │     │  │  │  │  ├─ tabs.d.ts
│     │     │  │  │  │  ├─ tabs.d.ts.map
│     │     │  │  │  │  ├─ tabs.js
│     │     │  │  │  │  ├─ tabs.js.map
│     │     │  │  │  │  ├─ text-field.d.ts
│     │     │  │  │  │  ├─ text-field.d.ts.map
│     │     │  │  │  │  ├─ text-field.js
│     │     │  │  │  │  ├─ text-field.js.map
│     │     │  │  │  │  ├─ text.d.ts
│     │     │  │  │  │  ├─ text.d.ts.map
│     │     │  │  │  │  ├─ text.js
│     │     │  │  │  │  ├─ text.js.map
│     │     │  │  │  │  ├─ ui.d.ts
│     │     │  │  │  │  ├─ ui.d.ts.map
│     │     │  │  │  │  ├─ ui.js
│     │     │  │  │  │  ├─ ui.js.map
│     │     │  │  │  │  ├─ video.d.ts
│     │     │  │  │  │  ├─ video.d.ts.map
│     │     │  │  │  │  ├─ video.js
│     │     │  │  │  │  └─ video.js.map
│     │     │  │  │  ├─ core.d.ts
│     │     │  │  │  ├─ core.d.ts.map
│     │     │  │  │  ├─ core.js
│     │     │  │  │  ├─ core.js.map
│     │     │  │  │  ├─ index.d.ts
│     │     │  │  │  ├─ index.d.ts.map
│     │     │  │  │  ├─ index.js
│     │     │  │  │  ├─ index.js.map
│     │     │  │  │  ├─ model.test.d.ts
│     │     │  │  │  ├─ model.test.d.ts.map
│     │     │  │  │  ├─ model.test.js
│     │     │  │  │  └─ model.test.js.map
│     │     │  │  ├─ index.d.ts
│     │     │  │  ├─ index.d.ts.map
│     │     │  │  ├─ index.js
│     │     │  │  └─ index.js.map
│     │     │  └─ .tsbuildinfo
│     │     ├─ src/
│     │     │  ├─ 0.8/
│     │     │  │  ├─ data/
│     │     │  │  │  ├─ guards.ts
│     │     │  │  │  ├─ model-processor.ts
│     │     │  │  │  └─ signal-model-processor.ts
│     │     │  │  ├─ events/
│     │     │  │  │  ├─ a2ui.ts
│     │     │  │  │  ├─ base.ts
│     │     │  │  │  └─ events.ts
│     │     │  │  ├─ schemas/
│     │     │  │  │  ├─ .gitignore
│     │     │  │  │  └─ server_to_client_with_standard_catalog.json
│     │     │  │  ├─ styles/
│     │     │  │  │  ├─ behavior.ts
│     │     │  │  │  ├─ border.ts
│     │     │  │  │  ├─ colors.ts
│     │     │  │  │  ├─ icons.ts
│     │     │  │  │  ├─ index.ts
│     │     │  │  │  ├─ layout.ts
│     │     │  │  │  ├─ opacity.ts
│     │     │  │  │  ├─ shared.ts
│     │     │  │  │  ├─ type.ts
│     │     │  │  │  └─ utils.ts
│     │     │  │  ├─ types/
│     │     │  │  │  ├─ client-event.ts
│     │     │  │  │  ├─ colors.ts
│     │     │  │  │  ├─ components.ts
│     │     │  │  │  ├─ primitives.ts
│     │     │  │  │  └─ types.ts
│     │     │  │  ├─ ui/
│     │     │  │  │  ├─ context/
│     │     │  │  │  │  └─ theme.ts
│     │     │  │  │  ├─ custom-components/
│     │     │  │  │  │  └─ index.ts
│     │     │  │  │  ├─ directives/
│     │     │  │  │  │  ├─ directives.ts
│     │     │  │  │  │  ├─ markdown.ts
│     │     │  │  │  │  └─ sanitizer.ts
│     │     │  │  │  ├─ utils/
│     │     │  │  │  │  ├─ utils.ts
│     │     │  │  │  │  └─ youtube.ts
│     │     │  │  │  ├─ audio.ts
│     │     │  │  │  ├─ button.ts
│     │     │  │  │  ├─ card.ts
│     │     │  │  │  ├─ checkbox.ts
│     │     │  │  │  ├─ column.ts
│     │     │  │  │  ├─ component-registry.ts
│     │     │  │  │  ├─ datetime-input.ts
│     │     │  │  │  ├─ divider.ts
│     │     │  │  │  ├─ icon.ts
│     │     │  │  │  ├─ image.ts
│     │     │  │  │  ├─ list.ts
│     │     │  │  │  ├─ modal.ts
│     │     │  │  │  ├─ multiple-choice.ts
│     │     │  │  │  ├─ root.ts
│     │     │  │  │  ├─ row.ts
│     │     │  │  │  ├─ slider.ts
│     │     │  │  │  ├─ styles.ts
│     │     │  │  │  ├─ surface.ts
│     │     │  │  │  ├─ tabs.ts
│     │     │  │  │  ├─ text-field.ts
│     │     │  │  │  ├─ text.ts
│     │     │  │  │  ├─ ui.ts
│     │     │  │  │  └─ video.ts
│     │     │  │  ├─ core.ts
│     │     │  │  ├─ index.ts
│     │     │  │  └─ model.test.ts
│     │     │  └─ index.ts
│     │     ├─ .npmrc
│     │     ├─ package-lock.json
│     │     ├─ package.json
│     │     ├─ README
│     │     ├─ README.md
│     │     └─ tsconfig.json
│     ├─ specification/
│     │  ├─ 0.8/
│     │  │  ├─ eval/
│     │  │  │  ├─ src/
│     │  │  │  │  ├─ basic_schema_matcher.ts
│     │  │  │  │  ├─ dev.ts
│     │  │  │  │  ├─ flows.ts
│     │  │  │  │  ├─ index.ts
│     │  │  │  │  ├─ message_type_matcher.ts
│     │  │  │  │  ├─ models.ts
│     │  │  │  │  ├─ prompts.ts
│     │  │  │  │  ├─ schema_matcher.ts
│     │  │  │  │  ├─ surface_update_schema_matcher.ts
│     │  │  │  │  └─ validator.ts
│     │  │  │  ├─ .gitignore
│     │  │  │  ├─ GEMINI.md
│     │  │  │  ├─ genkit.conf.js
│     │  │  │  ├─ package.json
│     │  │  │  ├─ pnpm-lock.yaml
│     │  │  │  ├─ pnpm-workspace.yaml
│     │  │  │  ├─ README.md
│     │  │  │  └─ tsconfig.json
│     │  │  └─ json/
│     │  │     ├─ a2ui_client_capabilities_schema.json
│     │  │     ├─ catalog_description_schema.json
│     │  │     ├─ client_to_server.json
│     │  │     ├─ README.md
│     │  │     ├─ server_to_client_with_standard_catalog.json
│     │  │     ├─ server_to_client.json
│     │  │     └─ standard_catalog_definition.json
│     │  └─ 0.9/
│     │     ├─ eval/
│     │     │  ├─ src/
│     │     │  │  ├─ ai.ts
│     │     │  │  ├─ analysis_flow.ts
│     │     │  │  ├─ dev.ts
│     │     │  │  ├─ evaluation_flow.ts
│     │     │  │  ├─ evaluator.ts
│     │     │  │  ├─ generation_flow.ts
│     │     │  │  ├─ generator.ts
│     │     │  │  ├─ index.ts
│     │     │  │  ├─ logger.ts
│     │     │  │  ├─ models.ts
│     │     │  │  ├─ prompts.ts
│     │     │  │  ├─ rateLimiter.ts
│     │     │  │  ├─ types.ts
│     │     │  │  ├─ utils.ts
│     │     │  │  └─ validator.ts
│     │     │  ├─ .gitignore
│     │     │  ├─ genkit.conf.js
│     │     │  ├─ package.json
│     │     │  ├─ pnpm-lock.yaml
│     │     │  ├─ pnpm-workspace.yaml
│     │     │  ├─ README.md
│     │     │  └─ tsconfig.json
│     │     ├─ json/
│     │     │  ├─ client_to_server.json
│     │     │  ├─ common_types.json
│     │     │  ├─ contact_form_example.jsonl
│     │     │  ├─ server_to_client.json
│     │     │  ├─ standard_catalog_definition.json
│     │     │  └─ standard_catalog_rules.txt
│     │     └─ validate.sh
│     ├─ .gitignore
│     ├─ CONTRIBUTING.md
│     ├─ LICENSE
│     ├─ mkdocs.yaml
│     ├─ README.md
│     └─ requirements-docs.txt
├─ .detect-secrets.cfg
├─ .dockerignore
├─ .env.example
├─ .gitattributes
├─ .gitignore
├─ .mailmap
├─ .markdownlint-cli2.jsonc
├─ .npmrc
├─ .oxfmtrc.jsonc
├─ .oxlintrc.json
├─ .pre-commit-config.yaml
├─ .secrets.baseline
├─ .shellcheckrc
├─ .swiftformat
├─ .swiftlint.yml
├─ AGENTS.md
├─ appcast.xml
├─ CHANGELOG.md
├─ CLAUDE.md
├─ docker-compose.yml
├─ docker-setup.sh
├─ Dockerfile
├─ Dockerfile.sandbox
├─ Dockerfile.sandbox-browser
├─ Dockerfile.sandbox-common
├─ docs.acp.md
├─ fly.private.toml
├─ fly.toml
├─ FUTURE_REBRAND_RELEASE_ROADMAP.md
├─ gensparx.mjs
├─ gensparx.podman.env
├─ LICENSE
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ pyproject.toml
├─ README.md
├─ REBRAND_WORK_REPORT.md
├─ render.yaml
├─ SECURITY.md
├─ setup-podman.sh
├─ tsconfig.json
├─ tsconfig.plugin-sdk.dts.json
├─ tsdown.config.ts
├─ VISION.md
├─ vitest.channels.config.ts
├─ vitest.config.ts
├─ vitest.e2e.config.ts
├─ vitest.extensions.config.ts
├─ vitest.gateway.config.ts
├─ vitest.live.config.ts
├─ vitest.scoped-config.ts
├─ vitest.unit.config.ts
└─ zizmor.yml
