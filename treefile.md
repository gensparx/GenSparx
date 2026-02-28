openclaw/
├─ .agent/
│ └─ workflows/
│ └─ update*clawdbot.md
├─ .github/
│ ├─ ISSUE_TEMPLATE/
│ │ ├─ bug_report.md
│ │ ├─ config.yml
│ │ └─ feature_request.md
│ ├─ workflows/
│ │ ├─ auto-response.yml
│ │ ├─ ci.yml
│ │ ├─ docker-release.yml
│ │ ├─ formal-conformance.yml
│ │ ├─ install-smoke.yml
│ │ ├─ labeler.yml
│ │ └─ workflow-sanity.yml
│ ├─ actionlint.yaml
│ ├─ dependabot.yml
│ ├─ FUNDING.yml
│ └─ labeler.yml
├─ .pi/
│ ├─ extensions/
│ │ ├─ diff.ts
│ │ ├─ files.ts
│ │ ├─ prompt-url-widget.ts
│ │ └─ redraws.ts
│ ├─ git/
│ │ └─ .gitignore
│ └─ prompts/
│ ├─ cl.md
│ ├─ is.md
│ ├─ landpr.md
│ └─ reviewpr.md
├─ apps/
│ ├─ android/
│ │ ├─ app/
│ │ │ ├─ src/
│ │ │ │ ├─ main/
│ │ │ │ │ ├─ java/
│ │ │ │ │ │ └─ ai/
│ │ │ │ │ │ └─ openclaw/
│ │ │ │ │ │ └─ android/
│ │ │ │ │ │ ├─ chat/
│ │ │ │ │ │ │ ├─ ChatController.kt
│ │ │ │ │ │ │ └─ ChatModels.kt
│ │ │ │ │ │ ├─ gateway/
│ │ │ │ │ │ │ ├─ BonjourEscapes.kt
│ │ │ │ │ │ │ ├─ DeviceAuthStore.kt
│ │ │ │ │ │ │ ├─ DeviceIdentityStore.kt
│ │ │ │ │ │ │ ├─ GatewayDiscovery.kt
│ │ │ │ │ │ │ ├─ GatewayEndpoint.kt
│ │ │ │ │ │ │ ├─ GatewayProtocol.kt
│ │ │ │ │ │ │ ├─ GatewaySession.kt
│ │ │ │ │ │ │ └─ GatewayTls.kt
│ │ │ │ │ │ ├─ node/
│ │ │ │ │ │ │ ├─ CameraCaptureManager.kt
│ │ │ │ │ │ │ ├─ CanvasController.kt
│ │ │ │ │ │ │ ├─ JpegSizeLimiter.kt
│ │ │ │ │ │ │ ├─ LocationCaptureManager.kt
│ │ │ │ │ │ │ ├─ ScreenRecordManager.kt
│ │ │ │ │ │ │ └─ SmsManager.kt
│ │ │ │ │ │ ├─ protocol/
│ │ │ │ │ │ │ ├─ OpenClawCanvasA2UIAction.kt
│ │ │ │ │ │ │ └─ OpenClawProtocolConstants.kt
│ │ │ │ │ │ ├─ tools/
│ │ │ │ │ │ │ └─ ToolDisplay.kt
│ │ │ │ │ │ ├─ ui/
│ │ │ │ │ │ │ ├─ chat/
│ │ │ │ │ │ │ │ ├─ ChatComposer.kt
│ │ │ │ │ │ │ │ ├─ ChatMarkdown.kt
│ │ │ │ │ │ │ │ ├─ ChatMessageListCard.kt
│ │ │ │ │ │ │ │ ├─ ChatMessageViews.kt
│ │ │ │ │ │ │ │ ├─ ChatSessionsDialog.kt
│ │ │ │ │ │ │ │ ├─ ChatSheetContent.kt
│ │ │ │ │ │ │ │ └─ SessionFilters.kt
│ │ │ │ │ │ │ ├─ CameraHudOverlay.kt
│ │ │ │ │ │ │ ├─ ChatSheet.kt
│ │ │ │ │ │ │ ├─ OpenClawTheme.kt
│ │ │ │ │ │ │ ├─ RootScreen.kt
│ │ │ │ │ │ │ ├─ SettingsSheet.kt
│ │ │ │ │ │ │ ├─ StatusPill.kt
│ │ │ │ │ │ │ └─ TalkOrbOverlay.kt
│ │ │ │ │ │ ├─ voice/
│ │ │ │ │ │ │ ├─ StreamingMediaDataSource.kt
│ │ │ │ │ │ │ ├─ TalkDirectiveParser.kt
│ │ │ │ │ │ │ ├─ TalkModeManager.kt
│ │ │ │ │ │ │ ├─ VoiceWakeCommandExtractor.kt
│ │ │ │ │ │ │ └─ VoiceWakeManager.kt
│ │ │ │ │ │ ├─ CameraHudState.kt
│ │ │ │ │ │ ├─ DeviceNames.kt
│ │ │ │ │ │ ├─ LocationMode.kt
│ │ │ │ │ │ ├─ MainActivity.kt
│ │ │ │ │ │ ├─ MainViewModel.kt
│ │ │ │ │ │ ├─ NodeApp.kt
│ │ │ │ │ │ ├─ NodeForegroundService.kt
│ │ │ │ │ │ ├─ NodeRuntime.kt
│ │ │ │ │ │ ├─ PermissionRequester.kt
│ │ │ │ │ │ ├─ ScreenCaptureRequester.kt
│ │ │ │ │ │ ├─ SecurePrefs.kt
│ │ │ │ │ │ ├─ SessionKey.kt
│ │ │ │ │ │ ├─ VoiceWakeMode.kt
│ │ │ │ │ │ └─ WakeWords.kt
│ │ │ │ │ ├─ res/
│ │ │ │ │ │ ├─ mipmap-anydpi/
│ │ │ │ │ │ │ ├─ ic_launcher_round.xml
│ │ │ │ │ │ │ └─ ic_launcher.xml
│ │ │ │ │ │ ├─ mipmap-hdpi/
│ │ │ │ │ │ │ ├─ ic_launcher_foreground.png
│ │ │ │ │ │ │ └─ ic_launcher.png
│ │ │ │ │ │ ├─ mipmap-mdpi/
│ │ │ │ │ │ │ ├─ ic_launcher_foreground.png
│ │ │ │ │ │ │ └─ ic_launcher.png
│ │ │ │ │ │ ├─ mipmap-xhdpi/
│ │ │ │ │ │ │ ├─ ic_launcher_foreground.png
│ │ │ │ │ │ │ └─ ic_launcher.png
│ │ │ │ │ │ ├─ mipmap-xxhdpi/
│ │ │ │ │ │ │ ├─ ic_launcher_foreground.png
│ │ │ │ │ │ │ └─ ic_launcher.png
│ │ │ │ │ │ ├─ mipmap-xxxhdpi/
│ │ │ │ │ │ │ ├─ ic_launcher_foreground.png
│ │ │ │ │ │ │ └─ ic_launcher.png
│ │ │ │ │ │ ├─ values/
│ │ │ │ │ │ │ ├─ colors.xml
│ │ │ │ │ │ │ ├─ strings.xml
│ │ │ │ │ │ │ └─ themes.xml
│ │ │ │ │ │ └─ xml/
│ │ │ │ │ │ ├─ backup_rules.xml
│ │ │ │ │ │ ├─ data_extraction_rules.xml
│ │ │ │ │ │ └─ network_security_config.xml
│ │ │ │ │ └─ AndroidManifest.xml
│ │ │ │ └─ test/
│ │ │ │ └─ java/
│ │ │ │ └─ ai/
│ │ │ │ └─ openclaw/
│ │ │ │ └─ android/
│ │ │ │ ├─ gateway/
│ │ │ │ │ └─ BonjourEscapesTest.kt
│ │ │ │ ├─ node/
│ │ │ │ │ ├─ CanvasControllerSnapshotParamsTest.kt
│ │ │ │ │ ├─ JpegSizeLimiterTest.kt
│ │ │ │ │ └─ SmsManagerTest.kt
│ │ │ │ ├─ protocol/
│ │ │ │ │ ├─ OpenClawCanvasA2UIActionTest.kt
│ │ │ │ │ └─ OpenClawProtocolConstantsTest.kt
│ │ │ │ ├─ ui/
│ │ │ │ │ └─ chat/
│ │ │ │ │ └─ SessionFiltersTest.kt
│ │ │ │ ├─ voice/
│ │ │ │ │ ├─ TalkDirectiveParserTest.kt
│ │ │ │ │ └─ VoiceWakeCommandExtractorTest.kt
│ │ │ │ ├─ NodeForegroundServiceTest.kt
│ │ │ │ └─ WakeWordsTest.kt
│ │ │ └─ build.gradle.kts
│ │ ├─ gradle/
│ │ │ └─ wrapper/
│ │ │ ├─ gradle-wrapper.jar
│ │ │ └─ gradle-wrapper.properties
│ │ ├─ .gitignore
│ │ ├─ build.gradle.kts
│ │ ├─ gradle.properties
│ │ ├─ gradlew
│ │ ├─ gradlew.bat
│ │ ├─ README.md
│ │ └─ settings.gradle.kts
│ ├─ ios/
│ │ ├─ fastlane/
│ │ │ ├─ .env.example
│ │ │ ├─ Appfile
│ │ │ ├─ Fastfile
│ │ │ └─ SETUP.md
│ │ ├─ Sources/
│ │ │ ├─ Assets.xcassets/
│ │ │ │ ├─ AppIcon.appiconset/
│ │ │ │ │ ├─ Contents.json
│ │ │ │ │ ├─ icon-1024.png
│ │ │ │ │ ├─ icon-20@1x.png
│ │ │ │ │ ├─ icon-20@2x.png
│ │ │ │ │ ├─ icon-20@3x.png
│ │ │ │ │ ├─ icon-29@1x.png
│ │ │ │ │ ├─ icon-29@2x.png
│ │ │ │ │ ├─ icon-29@3x.png
│ │ │ │ │ ├─ icon-40@1x.png
│ │ │ │ │ ├─ icon-40@2x.png
│ │ │ │ │ ├─ icon-40@3x.png
│ │ │ │ │ ├─ icon-60@2x.png
│ │ │ │ │ ├─ icon-60@3x.png
│ │ │ │ │ ├─ icon-76@2x.png
│ │ │ │ │ └─ icon-83.5@2x.png
│ │ │ │ └─ Contents.json
│ │ │ ├─ Camera/
│ │ │ │ └─ CameraController.swift
│ │ │ ├─ Chat/
│ │ │ │ ├─ ChatSheet.swift
│ │ │ │ └─ IOSGatewayChatTransport.swift
│ │ │ ├─ Gateway/
│ │ │ │ ├─ GatewayConnectionController.swift
│ │ │ │ ├─ GatewayDiscoveryDebugLogView.swift
│ │ │ │ ├─ GatewayDiscoveryModel.swift
│ │ │ │ ├─ GatewaySettingsStore.swift
│ │ │ │ └─ KeychainStore.swift
│ │ │ ├─ Location/
│ │ │ │ └─ LocationService.swift
│ │ │ ├─ Model/
│ │ │ │ └─ NodeAppModel.swift
│ │ │ ├─ Screen/
│ │ │ │ ├─ ScreenController.swift
│ │ │ │ ├─ ScreenRecordService.swift
│ │ │ │ ├─ ScreenTab.swift
│ │ │ │ └─ ScreenWebView.swift
│ │ │ ├─ Settings/
│ │ │ │ ├─ SettingsNetworkingHelpers.swift
│ │ │ │ ├─ SettingsTab.swift
│ │ │ │ └─ VoiceWakeWordsSettingsView.swift
│ │ │ ├─ Status/
│ │ │ │ ├─ StatusPill.swift
│ │ │ │ └─ VoiceWakeToast.swift
│ │ │ ├─ Voice/
│ │ │ │ ├─ TalkModeManager.swift
│ │ │ │ ├─ TalkOrbOverlay.swift
│ │ │ │ ├─ VoiceTab.swift
│ │ │ │ ├─ VoiceWakeManager.swift
│ │ │ │ └─ VoiceWakePreferences.swift
│ │ │ ├─ Info.plist
│ │ │ ├─ OpenClawApp.swift
│ │ │ ├─ RootCanvas.swift
│ │ │ ├─ RootTabs.swift
│ │ │ └─ SessionKey.swift
│ │ ├─ Tests/
│ │ │ ├─ AppCoverageTests.swift
│ │ │ ├─ CameraControllerClampTests.swift
│ │ │ ├─ CameraControllerErrorTests.swift
│ │ │ ├─ DeepLinkParserTests.swift
│ │ │ ├─ GatewayConnectionControllerTests.swift
│ │ │ ├─ GatewayDiscoveryModelTests.swift
│ │ │ ├─ GatewayEndpointIDTests.swift
│ │ │ ├─ GatewaySettingsStoreTests.swift
│ │ │ ├─ Info.plist
│ │ │ ├─ IOSGatewayChatTransportTests.swift
│ │ │ ├─ KeychainStoreTests.swift
│ │ │ ├─ NodeAppModelInvokeTests.swift
│ │ │ ├─ ScreenControllerTests.swift
│ │ │ ├─ ScreenRecordServiceTests.swift
│ │ │ ├─ SettingsNetworkingHelpersTests.swift
│ │ │ ├─ SwiftUIRenderSmokeTests.swift
│ │ │ ├─ VoiceWakeGatewaySyncTests.swift
│ │ │ ├─ VoiceWakeManagerExtractCommandTests.swift
│ │ │ ├─ VoiceWakeManagerStateTests.swift
│ │ │ └─ VoiceWakePreferencesTests.swift
│ │ ├─ .swiftlint.yml
│ │ ├─ project.yml
│ │ ├─ README.md
│ │ └─ SwiftSources.input.xcfilelist
│ ├─ macos/
│ │ ├─ Icon.icon/
│ │ │ ├─ Assets/
│ │ │ │ └─ openclaw-mac.png
│ │ │ └─ icon.json
│ │ ├─ Sources/
│ │ │ ├─ OpenClaw/
│ │ │ │ ├─ Logging/
│ │ │ │ │ └─ OpenClawLogging.swift
│ │ │ │ ├─ NodeMode/
│ │ │ │ │ ├─ MacNodeLocationService.swift
│ │ │ │ │ ├─ MacNodeModeCoordinator.swift
│ │ │ │ │ ├─ MacNodeRuntime.swift
│ │ │ │ │ ├─ MacNodeRuntimeMainActorServices.swift
│ │ │ │ │ └─ MacNodeScreenCommands.swift
│ │ │ │ ├─ Resources/
│ │ │ │ │ ├─ DeviceModels/
│ │ │ │ │ │ ├─ ios-device-identifiers.json
│ │ │ │ │ │ ├─ LICENSE.apple-device-identifiers.txt
│ │ │ │ │ │ ├─ mac-device-identifiers.json
│ │ │ │ │ │ └─ NOTICE.md
│ │ │ │ │ ├─ Info.plist
│ │ │ │ │ └─ OpenClaw.icns
│ │ │ │ ├─ AboutSettings.swift
│ │ │ │ ├─ AgeFormatting.swift
│ │ │ │ ├─ AgentEventStore.swift
│ │ │ │ ├─ AgentEventsWindow.swift
│ │ │ │ ├─ AgentWorkspace.swift
│ │ │ │ ├─ AnthropicAuthControls.swift
│ │ │ │ ├─ AnthropicOAuth.swift
│ │ │ │ ├─ AnthropicOAuthCodeState.swift
│ │ │ │ ├─ AnyCodable+Helpers.swift
│ │ │ │ ├─ AppState.swift
│ │ │ │ ├─ AudioInputDeviceObserver.swift
│ │ │ │ ├─ CameraCaptureService.swift
│ │ │ │ ├─ CanvasA2UIActionMessageHandler.swift
│ │ │ │ ├─ CanvasChromeContainerView.swift
│ │ │ │ ├─ CanvasFileWatcher.swift
│ │ │ │ ├─ CanvasManager.swift
│ │ │ │ ├─ CanvasScheme.swift
│ │ │ │ ├─ CanvasSchemeHandler.swift
│ │ │ │ ├─ CanvasWindow.swift
│ │ │ │ ├─ CanvasWindowController.swift
│ │ │ │ ├─ CanvasWindowController+Helpers.swift
│ │ │ │ ├─ CanvasWindowController+Navigation.swift
│ │ │ │ ├─ CanvasWindowController+Testing.swift
│ │ │ │ ├─ CanvasWindowController+Window.swift
│ │ │ │ ├─ ChannelConfigForm.swift
│ │ │ │ ├─ ChannelsSettings.swift
│ │ │ │ ├─ ChannelsSettings+ChannelSections.swift
│ │ │ │ ├─ ChannelsSettings+ChannelState.swift
│ │ │ │ ├─ ChannelsSettings+Helpers.swift
│ │ │ │ ├─ ChannelsSettings+View.swift
│ │ │ │ ├─ ChannelsStore.swift
│ │ │ │ ├─ ChannelsStore+Config.swift
│ │ │ │ ├─ ChannelsStore+Lifecycle.swift
│ │ │ │ ├─ CLIInstaller.swift
│ │ │ │ ├─ CLIInstallPrompter.swift
│ │ │ │ ├─ CommandResolver.swift
│ │ │ │ ├─ ConfigFileWatcher.swift
│ │ │ │ ├─ ConfigSchemaSupport.swift
│ │ │ │ ├─ ConfigSettings.swift
│ │ │ │ ├─ ConfigStore.swift
│ │ │ │ ├─ ConnectionModeCoordinator.swift
│ │ │ │ ├─ ConnectionModeResolver.swift
│ │ │ │ ├─ Constants.swift
│ │ │ │ ├─ ContextMenuCardView.swift
│ │ │ │ ├─ ContextUsageBar.swift
│ │ │ │ ├─ ControlChannel.swift
│ │ │ │ ├─ CostUsageMenuView.swift
│ │ │ │ ├─ CritterIconRenderer.swift
│ │ │ │ ├─ CritterStatusLabel.swift
│ │ │ │ ├─ CritterStatusLabel+Behavior.swift
│ │ │ │ ├─ CronJobEditor.swift
│ │ │ │ ├─ CronJobEditor+Helpers.swift
│ │ │ │ ├─ CronJobEditor+Testing.swift
│ │ │ │ ├─ CronJobsStore.swift
│ │ │ │ ├─ CronModels.swift
│ │ │ │ ├─ CronSettings.swift
│ │ │ │ ├─ CronSettings+Actions.swift
│ │ │ │ ├─ CronSettings+Helpers.swift
│ │ │ │ ├─ CronSettings+Layout.swift
│ │ │ │ ├─ CronSettings+Rows.swift
│ │ │ │ ├─ CronSettings+Testing.swift
│ │ │ │ ├─ DebugActions.swift
│ │ │ │ ├─ DebugSettings.swift
│ │ │ │ ├─ DeepLinks.swift
│ │ │ │ ├─ DeviceModelCatalog.swift
│ │ │ │ ├─ DevicePairingApprovalPrompter.swift
│ │ │ │ ├─ DiagnosticsFileLog.swift
│ │ │ │ ├─ DockIconManager.swift
│ │ │ │ ├─ ExecApprovals.swift
│ │ │ │ ├─ ExecApprovalsGatewayPrompter.swift
│ │ │ │ ├─ ExecApprovalsSocket.swift
│ │ │ │ ├─ FileHandle+SafeRead.swift
│ │ │ │ ├─ GatewayAutostartPolicy.swift
│ │ │ │ ├─ GatewayConnection.swift
│ │ │ │ ├─ GatewayConnectivityCoordinator.swift
│ │ │ │ ├─ GatewayDiscoveryHelpers.swift
│ │ │ │ ├─ GatewayDiscoveryMenu.swift
│ │ │ │ ├─ GatewayDiscoveryPreferences.swift
│ │ │ │ ├─ GatewayEndpointStore.swift
│ │ │ │ ├─ GatewayEnvironment.swift
│ │ │ │ ├─ GatewayLaunchAgentManager.swift
│ │ │ │ ├─ GatewayProcessManager.swift
│ │ │ │ ├─ GatewayRemoteConfig.swift
│ │ │ │ ├─ GeneralSettings.swift
│ │ │ │ ├─ HealthStore.swift
│ │ │ │ ├─ HeartbeatStore.swift
│ │ │ │ ├─ HoverHUD.swift
│ │ │ │ ├─ IconState.swift
│ │ │ │ ├─ InstancesSettings.swift
│ │ │ │ ├─ InstancesStore.swift
│ │ │ │ ├─ LaunchAgentManager.swift
│ │ │ │ ├─ Launchctl.swift
│ │ │ │ ├─ LaunchdManager.swift
│ │ │ │ ├─ LogLocator.swift
│ │ │ │ ├─ MenuBar.swift
│ │ │ │ ├─ MenuContentView.swift
│ │ │ │ ├─ MenuContextCardInjector.swift
│ │ │ │ ├─ MenuHighlightedHostView.swift
│ │ │ │ ├─ MenuHostedItem.swift
│ │ │ │ ├─ MenuSessionsHeaderView.swift
│ │ │ │ ├─ MenuSessionsInjector.swift
│ │ │ │ ├─ MenuUsageHeaderView.swift
│ │ │ │ ├─ MicLevelMonitor.swift
│ │ │ │ ├─ ModelCatalogLoader.swift
│ │ │ │ ├─ NodePairingApprovalPrompter.swift
│ │ │ │ ├─ NodeServiceManager.swift
│ │ │ │ ├─ NodesMenu.swift
│ │ │ │ ├─ NodesStore.swift
│ │ │ │ ├─ NotificationManager.swift
│ │ │ │ ├─ NotifyOverlay.swift
│ │ │ │ ├─ NSAttributedString+VoiceWake.swift
│ │ │ │ ├─ Onboarding.swift
│ │ │ │ ├─ OnboardingView+Actions.swift
│ │ │ │ ├─ OnboardingView+Chat.swift
│ │ │ │ ├─ OnboardingView+Layout.swift
│ │ │ │ ├─ OnboardingView+Monitoring.swift
│ │ │ │ ├─ OnboardingView+Pages.swift
│ │ │ │ ├─ OnboardingView+Testing.swift
│ │ │ │ ├─ OnboardingView+Wizard.swift
│ │ │ │ ├─ OnboardingView+Workspace.swift
│ │ │ │ ├─ OnboardingWidgets.swift
│ │ │ │ ├─ OnboardingWizard.swift
│ │ │ │ ├─ OpenClawConfigFile.swift
│ │ │ │ ├─ OpenClawPaths.swift
│ │ │ │ ├─ PeekabooBridgeHostCoordinator.swift
│ │ │ │ ├─ PermissionManager.swift
│ │ │ │ ├─ PermissionsSettings.swift
│ │ │ │ ├─ PointingHandCursor.swift
│ │ │ │ ├─ PortGuardian.swift
│ │ │ │ ├─ PresenceReporter.swift
│ │ │ │ ├─ Process+PipeRead.swift
│ │ │ │ ├─ ProcessInfo+OpenClaw.swift
│ │ │ │ ├─ RemotePortTunnel.swift
│ │ │ │ ├─ RemoteTunnelManager.swift
│ │ │ │ ├─ RuntimeLocator.swift
│ │ │ │ ├─ ScreenRecordService.swift
│ │ │ │ ├─ ScreenshotSize.swift
│ │ │ │ ├─ SessionActions.swift
│ │ │ │ ├─ SessionData.swift
│ │ │ │ ├─ SessionMenuLabelView.swift
│ │ │ │ ├─ SessionMenuPreviewView.swift
│ │ │ │ ├─ SessionsSettings.swift
│ │ │ │ ├─ SettingsComponents.swift
│ │ │ │ ├─ SettingsRootView.swift
│ │ │ │ ├─ SettingsWindowOpener.swift
│ │ │ │ ├─ ShellExecutor.swift
│ │ │ │ ├─ SkillsModels.swift
│ │ │ │ ├─ SkillsSettings.swift
│ │ │ │ ├─ SoundEffects.swift
│ │ │ │ ├─ StatusPill.swift
│ │ │ │ ├─ String+NonEmpty.swift
│ │ │ │ ├─ SystemRunSettingsView.swift
│ │ │ │ ├─ TailscaleIntegrationSection.swift
│ │ │ │ ├─ TailscaleService.swift
│ │ │ │ ├─ TalkAudioPlayer.swift
│ │ │ │ ├─ TalkModeController.swift
│ │ │ │ ├─ TalkModeRuntime.swift
│ │ │ │ ├─ TalkModeTypes.swift
│ │ │ │ ├─ TalkOverlay.swift
│ │ │ │ ├─ TalkOverlayView.swift
│ │ │ │ ├─ TerminationSignalWatcher.swift
│ │ │ │ ├─ UsageCostData.swift
│ │ │ │ ├─ UsageData.swift
│ │ │ │ ├─ UsageMenuLabelView.swift
│ │ │ │ ├─ UserDefaultsMigration.swift
│ │ │ │ ├─ ViewMetrics.swift
│ │ │ │ ├─ VisualEffectView.swift
│ │ │ │ ├─ VoicePushToTalk.swift
│ │ │ │ ├─ VoiceSessionCoordinator.swift
│ │ │ │ ├─ VoiceWakeChime.swift
│ │ │ │ ├─ VoiceWakeForwarder.swift
│ │ │ │ ├─ VoiceWakeGlobalSettingsSync.swift
│ │ │ │ ├─ VoiceWakeHelpers.swift
│ │ │ │ ├─ VoiceWakeOverlay.swift
│ │ │ │ ├─ VoiceWakeOverlayController+Session.swift
│ │ │ │ ├─ VoiceWakeOverlayController+Testing.swift
│ │ │ │ ├─ VoiceWakeOverlayController+Window.swift
│ │ │ │ ├─ VoiceWakeOverlayTextViews.swift
│ │ │ │ ├─ VoiceWakeOverlayView.swift
│ │ │ │ ├─ VoiceWakeRuntime.swift
│ │ │ │ ├─ VoiceWakeSettings.swift
│ │ │ │ ├─ VoiceWakeTestCard.swift
│ │ │ │ ├─ VoiceWakeTester.swift
│ │ │ │ ├─ VoiceWakeTextUtils.swift
│ │ │ │ ├─ WebChatManager.swift
│ │ │ │ ├─ WebChatSwiftUI.swift
│ │ │ │ ├─ WindowPlacement.swift
│ │ │ │ └─ WorkActivityStore.swift
│ │ │ ├─ OpenClawDiscovery/
│ │ │ │ ├─ GatewayDiscoveryModel.swift
│ │ │ │ └─ WideAreaGatewayDiscovery.swift
│ │ │ ├─ OpenClawIPC/
│ │ │ │ └─ IPC.swift
│ │ │ ├─ OpenClawMacCLI/
│ │ │ │ ├─ ConnectCommand.swift
│ │ │ │ ├─ DiscoverCommand.swift
│ │ │ │ ├─ EntryPoint.swift
│ │ │ │ ├─ GatewayConfig.swift
│ │ │ │ ├─ TypeAliases.swift
│ │ │ │ └─ WizardCommand.swift
│ │ │ └─ OpenClawProtocol/
│ │ │ └─ GatewayModels.swift
│ │ ├─ Tests/
│ │ │ └─ OpenClawIPCTests/
│ │ │ ├─ AgentEventStoreTests.swift
│ │ │ ├─ AgentWorkspaceTests.swift
│ │ │ ├─ AnthropicAuthControlsSmokeTests.swift
│ │ │ ├─ AnthropicAuthResolverTests.swift
│ │ │ ├─ AnthropicOAuthCodeStateTests.swift
│ │ │ ├─ AnyCodableEncodingTests.swift
│ │ │ ├─ CameraCaptureServiceTests.swift
│ │ │ ├─ CameraIPCTests.swift
│ │ │ ├─ CanvasFileWatcherTests.swift
│ │ │ ├─ CanvasIPCTests.swift
│ │ │ ├─ CanvasWindowSmokeTests.swift
│ │ │ ├─ ChannelsSettingsSmokeTests.swift
│ │ │ ├─ CLIInstallerTests.swift
│ │ │ ├─ CommandResolverTests.swift
│ │ │ ├─ ConfigStoreTests.swift
│ │ │ ├─ CoverageDumpTests.swift
│ │ │ ├─ CritterIconRendererTests.swift
│ │ │ ├─ CronJobEditorSmokeTests.swift
│ │ │ ├─ CronModelsTests.swift
│ │ │ ├─ DeviceModelCatalogTests.swift
│ │ │ ├─ ExecAllowlistTests.swift
│ │ │ ├─ ExecApprovalHelpersTests.swift
│ │ │ ├─ ExecApprovalsGatewayPrompterTests.swift
│ │ │ ├─ FileHandleLegacyAPIGuardTests.swift
│ │ │ ├─ FileHandleSafeReadTests.swift
│ │ │ ├─ GatewayAgentChannelTests.swift
│ │ │ ├─ GatewayAutostartPolicyTests.swift
│ │ │ ├─ GatewayChannelConfigureTests.swift
│ │ │ ├─ GatewayChannelConnectTests.swift
│ │ │ ├─ GatewayChannelRequestTests.swift
│ │ │ ├─ GatewayChannelShutdownTests.swift
│ │ │ ├─ GatewayConnectionControlTests.swift
│ │ │ ├─ GatewayDiscoveryModelTests.swift
│ │ │ ├─ GatewayEndpointStoreTests.swift
│ │ │ ├─ GatewayEnvironmentTests.swift
│ │ │ ├─ GatewayFrameDecodeTests.swift
│ │ │ ├─ GatewayLaunchAgentManagerTests.swift
│ │ │ ├─ GatewayProcessManagerTests.swift
│ │ │ ├─ HealthDecodeTests.swift
│ │ │ ├─ HealthStoreStateTests.swift
│ │ │ ├─ HoverHUDControllerTests.swift
│ │ │ ├─ InstancesSettingsSmokeTests.swift
│ │ │ ├─ InstancesStoreTests.swift
│ │ │ ├─ LogLocatorTests.swift
│ │ │ ├─ LowCoverageHelperTests.swift
│ │ │ ├─ LowCoverageViewSmokeTests.swift
│ │ │ ├─ MacGatewayChatTransportMappingTests.swift
│ │ │ ├─ MacNodeRuntimeTests.swift
│ │ │ ├─ MasterDiscoveryMenuSmokeTests.swift
│ │ │ ├─ MenuContentSmokeTests.swift
│ │ │ ├─ MenuSessionsInjectorTests.swift
│ │ │ ├─ ModelCatalogLoaderTests.swift
│ │ │ ├─ NodeManagerPathsTests.swift
│ │ │ ├─ NodePairingApprovalPrompterTests.swift
│ │ │ ├─ NodePairingReconcilePolicyTests.swift
│ │ │ ├─ OnboardingCoverageTests.swift
│ │ │ ├─ OnboardingViewSmokeTests.swift
│ │ │ ├─ OnboardingWizardStepViewTests.swift
│ │ │ ├─ OpenClawConfigFileTests.swift
│ │ │ ├─ OpenClawOAuthStoreTests.swift
│ │ │ ├─ PermissionManagerLocationTests.swift
│ │ │ ├─ PermissionManagerTests.swift
│ │ │ ├─ Placeholder.swift
│ │ │ ├─ RemotePortTunnelTests.swift
│ │ │ ├─ RuntimeLocatorTests.swift
│ │ │ ├─ ScreenshotSizeTests.swift
│ │ │ ├─ SemverTests.swift
│ │ │ ├─ SessionDataTests.swift
│ │ │ ├─ SessionMenuPreviewTests.swift
│ │ │ ├─ SettingsViewSmokeTests.swift
│ │ │ ├─ SkillsSettingsSmokeTests.swift
│ │ │ ├─ TailscaleIntegrationSectionTests.swift
│ │ │ ├─ TalkAudioPlayerTests.swift
│ │ │ ├─ TestIsolation.swift
│ │ │ ├─ UtilitiesTests.swift
│ │ │ ├─ VoicePushToTalkHotkeyTests.swift
│ │ │ ├─ VoicePushToTalkTests.swift
│ │ │ ├─ VoiceWakeForwarderTests.swift
│ │ │ ├─ VoiceWakeGlobalSettingsSyncTests.swift
│ │ │ ├─ VoiceWakeHelpersTests.swift
│ │ │ ├─ VoiceWakeOverlayControllerTests.swift
│ │ │ ├─ VoiceWakeOverlayTests.swift
│ │ │ ├─ VoiceWakeOverlayViewSmokeTests.swift
│ │ │ ├─ VoiceWakeRuntimeTests.swift
│ │ │ ├─ VoiceWakeTesterTests.swift
│ │ │ ├─ WebChatMainSessionKeyTests.swift
│ │ │ ├─ WebChatManagerTests.swift
│ │ │ ├─ WebChatSwiftUISmokeTests.swift
│ │ │ ├─ WideAreaGatewayDiscoveryTests.swift
│ │ │ ├─ WindowPlacementTests.swift
│ │ │ └─ WorkActivityStoreTests.swift
│ │ ├─ Package.resolved
│ │ ├─ Package.swift
│ │ └─ README.md
│ └─ shared/
│ └─ OpenClawKit/
│ ├─ Sources/
│ │ ├─ OpenClawChatUI/
│ │ │ ├─ AssistantTextParser.swift
│ │ │ ├─ ChatComposer.swift
│ │ │ ├─ ChatMarkdownPreprocessor.swift
│ │ │ ├─ ChatMarkdownRenderer.swift
│ │ │ ├─ ChatMessageViews.swift
│ │ │ ├─ ChatModels.swift
│ │ │ ├─ ChatPayloadDecoding.swift
│ │ │ ├─ ChatSessions.swift
│ │ │ ├─ ChatSheets.swift
│ │ │ ├─ ChatTheme.swift
│ │ │ ├─ ChatTransport.swift
│ │ │ ├─ ChatView.swift
│ │ │ └─ ChatViewModel.swift
│ │ ├─ OpenClawKit/
│ │ │ ├─ Resources/
│ │ │ │ ├─ CanvasScaffold/
│ │ │ │ │ └─ scaffold.html
│ │ │ │ └─ tool-display.json
│ │ │ ├─ AnyCodable.swift
│ │ │ ├─ AsyncTimeout.swift
│ │ │ ├─ AudioStreamingProtocols.swift
│ │ │ ├─ BonjourEscapes.swift
│ │ │ ├─ BonjourTypes.swift
│ │ │ ├─ BridgeFrames.swift
│ │ │ ├─ CameraCommands.swift
│ │ │ ├─ CanvasA2UIAction.swift
│ │ │ ├─ CanvasA2UICommands.swift
│ │ │ ├─ CanvasA2UIJSONL.swift
│ │ │ ├─ CanvasCommandParams.swift
│ │ │ ├─ CanvasCommands.swift
│ │ │ ├─ Capabilities.swift
│ │ │ ├─ DeepLinks.swift
│ │ │ ├─ DeviceAuthStore.swift
│ │ │ ├─ DeviceIdentity.swift
│ │ │ ├─ ElevenLabsKitShim.swift
│ │ │ ├─ GatewayChannel.swift
│ │ │ ├─ GatewayEndpointID.swift
│ │ │ ├─ GatewayErrors.swift
│ │ │ ├─ GatewayNodeSession.swift
│ │ │ ├─ GatewayPayloadDecoding.swift
│ │ │ ├─ GatewayPush.swift
│ │ │ ├─ GatewayTLSPinning.swift
│ │ │ ├─ InstanceIdentity.swift
│ │ │ ├─ JPEGTranscoder.swift
│ │ │ ├─ LocationCommands.swift
│ │ │ ├─ LocationSettings.swift
│ │ │ ├─ NodeError.swift
│ │ │ ├─ OpenClawKitResources.swift
│ │ │ ├─ ScreenCommands.swift
│ │ │ ├─ StoragePaths.swift
│ │ │ ├─ SystemCommands.swift
│ │ │ ├─ TalkDirective.swift
│ │ │ ├─ TalkHistoryTimestamp.swift
│ │ │ ├─ TalkPromptBuilder.swift
│ │ │ ├─ TalkSystemSpeechSynthesizer.swift
│ │ │ └─ ToolDisplay.swift
│ │ └─ OpenClawProtocol/
│ │ ├─ AnyCodable.swift
│ │ ├─ GatewayModels.swift
│ │ └─ WizardHelpers.swift
│ ├─ Tests/
│ │ └─ OpenClawKitTests/
│ │ ├─ AssistantTextParserTests.swift
│ │ ├─ BonjourEscapesTests.swift
│ │ ├─ CanvasA2UIActionTests.swift
│ │ ├─ CanvasA2UITests.swift
│ │ ├─ CanvasSnapshotFormatTests.swift
│ │ ├─ ChatMarkdownPreprocessorTests.swift
│ │ ├─ ChatThemeTests.swift
│ │ ├─ ChatViewModelTests.swift
│ │ ├─ ElevenLabsTTSValidationTests.swift
│ │ ├─ GatewayNodeSessionTests.swift
│ │ ├─ JPEGTranscoderTests.swift
│ │ ├─ TalkDirectiveTests.swift
│ │ ├─ TalkHistoryTimestampTests.swift
│ │ ├─ TalkPromptBuilderTests.swift
│ │ └─ ToolDisplayRegistryTests.swift
│ ├─ Tools/
│ │ └─ CanvasA2UI/
│ │ ├─ bootstrap.js
│ │ └─ rolldown.config.mjs
│ └─ Package.swift
├─ assets/
│ ├─ chrome-extension/
│ │ ├─ icons/
│ │ │ ├─ icon128.png
│ │ │ ├─ icon16.png
│ │ │ ├─ icon32.png
│ │ │ └─ icon48.png
│ │ ├─ background.js
│ │ ├─ manifest.json
│ │ ├─ options.html
│ │ ├─ options.js
│ │ └─ README.md
│ ├─ avatar-placeholder.svg
│ ├─ dmg-background-small.png
│ └─ dmg-background.png
├─ dist/
│ ├─ canvas-host/
│ │ └─ a2ui/
│ │ ├─ .bundle.hash
│ │ ├─ a2ui.bundle.js
│ │ └─ index.html
│ ├─ cli/
│ │ └─ daemon-cli.js
│ ├─ control-ui/
│ │ ├─ assets/
│ │ │ ├─ index-Bo-Isy5b.js
│ │ │ ├─ index-Bo-Isy5b.js.map
│ │ │ └─ index-Dk7BHpaT.css
│ │ ├─ apple-touch-icon.png
│ │ ├─ favicon-32.png
│ │ ├─ favicon.ico
│ │ ├─ favicon.svg
│ │ └─ index.html
│ ├─ hooks/
│ │ └─ bundled/
│ │ ├─ boot-md/
│ │ │ └─ HOOK.md
│ │ ├─ command-logger/
│ │ │ └─ HOOK.md
│ │ ├─ session-memory/
│ │ │ └─ HOOK.md
│ │ └─ soul-evil/
│ │ └─ HOOK.md
│ ├─ plugin-sdk/
│ │ ├─ agent-scope-Xc6gBaz4.js
│ │ ├─ chrome-DiaefN9K.js
│ │ ├─ command-format-zAVvufIZ.js
│ │ ├─ config-NZjIAxxZ.js
│ │ ├─ deliver-Babx0HEI.js
│ │ ├─ exec-DHVMmxiG.js
│ │ ├─ github-copilot-token-DPzGD8wx.js
│ │ ├─ image-Cwp2EC7U.js
│ │ ├─ index.d.ts
│ │ ├─ index.js
│ │ ├─ login-qr-BaQ5LEKZ.js
│ │ ├─ manager-BDklsJ_B.js
│ │ ├─ model-selection-\_gjkPUMF.js
│ │ ├─ paths-BlW1SyXH.js
│ │ ├─ paths-Cr6r3YBm.js
│ │ ├─ pi-embedded-helpers-DuomQA5t.js
│ │ ├─ pi-model-discovery-BUGEht9A.js
│ │ ├─ pw-ai-VUFazT9w.js
│ │ ├─ qmd-manager-u7E4mbD2.js
│ │ ├─ redact-2AzjOfk2.js
│ │ ├─ rolldown-runtime-Cbj13DAv.js
│ │ ├─ sqlite-gCW7MlLs.js
│ │ └─ transcript-events-DGF257vD.js
│ ├─ accounts-CCV8586x.js
│ ├─ accounts-Dui9LmPq.js
│ ├─ acp-cli-BGRFVC_f.js
│ ├─ acp-cli-EKSO7mOd.js
│ ├─ agent-3xuBhT7u.js
│ ├─ agent-CFRdWN9F.js
│ ├─ agent-scope-BcDvavpz.js
│ ├─ agent-scope-ByT_CUjD.js
│ ├─ agent-scope-Cyj2Dmx1.js
│ ├─ archive-ccN9aDgq.js
│ ├─ archive-CWrnG1CH.js
│ ├─ audit-DEMULaZx.js
│ ├─ audit-T7_NRpGT.js
│ ├─ auth-C2whrM18.js
│ ├─ auth-DxAKcUYN.js
│ ├─ auth-health-2hyW3pAv.js
│ ├─ auth-health-CI4I0Agb.js
│ ├─ auth-profiles-DAFQKk3x.js
│ ├─ boolean-Wzu0-e0P.js
│ ├─ brew-Cqi8b49*.js
│ ├─ brew-DyBGNK8A.js
│ ├─ build-info.json
│ ├─ call-B1B6eSyD.js
│ ├─ call-BnqktITB.js
│ ├─ channel-options-BgZWLRk6.js
│ ├─ channel-options-VNfXkH7F.js
│ ├─ channel-selection-D2J1*ulC.js
│ ├─ channel-selection-f9PoyQnr.js
│ ├─ channel-summary-euteeqpz.js
│ ├─ channel-summary-VILwovUj.js
│ ├─ channels-cli-7rxOsR-X.js
│ ├─ channels-cli-BKE_QQJa.js
│ ├─ channels-status-issues-B6oFU36k.js
│ ├─ channels-status-issues-DiSamIfu.js
│ ├─ chrome--EG-GewH.js
│ ├─ chrome-BbPJ-rdR.js
│ ├─ clack-prompter-B9yLhyOm.js
│ ├─ clack-prompter-BpjYJqKx.js
│ ├─ cli-B-N2tcDW.js
│ ├─ cli-BhBuSTx4.js
│ ├─ cli-utils-CO4jEMn0.js
│ ├─ cli-utils-gtE-0a0D.js
│ ├─ client-BrTRetcH.js
│ ├─ client-DA5hsT7x.js
│ ├─ command-format-CovneLEz.js
│ ├─ command-format-DoT2WXpH.js
│ ├─ command-format-DYtKdzSU.js
│ ├─ command-options-iAN9Fl1*.js
│ ├─ commands-BtlMbIum.js
│ ├─ completion-cli-CHdQ7GjC.js
│ ├─ completion-cli-Ct3*kHFn.js
│ ├─ config-1ItAIgtN.js
│ ├─ config-BPA5ma97.js
│ ├─ config-C6q5Jf5V.js
│ ├─ config-guard-NZy1gIeK.js
│ ├─ configure-Ce2yTcrm.js
│ ├─ configure-CrDUyrqi.js
│ ├─ constants-BXp6m-5D.js
│ ├─ constants-DjbPY1FK.js
│ ├─ control-service-rmT2xQ7j.js
│ ├─ control-service-Vb5tn6f*.js
│ ├─ cron-cli-DzO4oUjk.js
│ ├─ cron-cli-SmsmjkP-.js
│ ├─ daemon-cli-BCw45*-G.js
│ ├─ daemon-cli-CvVCDGtZ.js
│ ├─ daemon-runtime-B-v5VxQH.js
│ ├─ daemon-runtime-hpBEl-2A.js
│ ├─ deliver-Bh994obg.js
│ ├─ deliver-BO--II6e.js
│ ├─ deliver-uOO-290i.js
│ ├─ deps-2ONToE_R.js
│ ├─ deps-cWlPwc58.js
│ ├─ devices-cli-vN72ecB5.js
│ ├─ devices-cli-yJ-5xEg4.js
│ ├─ directory-cli-DDVB9E3y.js
│ ├─ directory-cli-lQz6V3AG.js
│ ├─ dispatcher-DRJlHKaA.js
│ ├─ dns-cli-Dgae8gef.js
│ ├─ dns-cli-DTP1M\_\_1.js
│ ├─ docs-cli-B4WVmj0E.js
│ ├─ docs-cli-BrGFsTcd.js
│ ├─ doctor-BPYniTm4.js
│ ├─ doctor-C3G48yhB.js
│ ├─ entry.js
│ ├─ env-Cqtdk5Lu.js
│ ├─ errors-Dli1u44*.js
│ ├─ exec-approvals-cli-B-unAHHH.js
│ ├─ exec-approvals-cli-DoOua*gU.js
│ ├─ exec-approvals-CWArHf-E.js
│ ├─ exec-approvals-DwSstxuB.js
│ ├─ exec-B8JKbXKW.js
│ ├─ exec-DhRc91zZ.js
│ ├─ exec-DXoV58TB.js
│ ├─ extensionAPI.js
│ ├─ format-BC7_EepG.js
│ ├─ format-Dzy9uRLE.js
│ ├─ gateway-cli-B_NdCFeM.js
│ ├─ gateway-cli-BXswWzk0.js
│ ├─ gateway-rpc-BKFuaHiz.js
│ ├─ gateway-rpc-GlNdzipO.js
│ ├─ github-copilot-auth-B2xxi9uz.js
│ ├─ github-copilot-auth-zhAaPRv*.js
│ ├─ github-copilot-token-C8XFYz0i.js
│ ├─ github-copilot-token-CEYYlFH0.js
│ ├─ github-copilot-token-DMwlald3.js
│ ├─ gmail-setup-utils-Chxgryfs.js
│ ├─ gmail-setup-utils-RYFb8nUi.js
│ ├─ health-format-CVlJEFvG.js
│ ├─ health-format-CWWda7ZV.js
│ ├─ help-format-Dm3Y6bcY.js
│ ├─ help-format-hT0EdANr.js
│ ├─ helpers-BEJ-phFf.js
│ ├─ helpers-CAKnStnV.js
│ ├─ helpers-CjnUxULo.js
│ ├─ helpers-CzjGJZmJ.js
│ ├─ hooks-cli-CZHTHapT.js
│ ├─ hooks-cli-D6ocMbz2.js
│ ├─ hooks-status-CBF1ZXa9.js
│ ├─ hooks-status-DlNDWoD1.js
│ ├─ image-BzTuwAAf.js
│ ├─ image-CHJkM4N0.js
│ ├─ image-ya3jLjtI.js
│ ├─ index.js
│ ├─ installs-CBBToWoJ.js
│ ├─ installs-CPY72NUo.js
│ ├─ is-main-B4o72sqg.js
│ ├─ is-main-PYGa3tDA.js
│ ├─ links-BoiPrzb1.js
│ ├─ links-Wfx7VPyF.js
│ ├─ loader-DzI4rD1f.js
│ ├─ logging-BCungXhr.js
│ ├─ logging-BUKKTbeo.js
│ ├─ logging-CY-Q5cwf.js
│ ├─ logging-pqyrk15z.js
│ ├─ login-qr-BEZv-gUV.js
│ ├─ login-qr-BraDB3v0.js
│ ├─ login-qr-Ck2Y4esY.js
│ ├─ logs-cli--rcGy7vK.js
│ ├─ logs-cli-MZErU_7J.js
│ ├─ manager-BnKDplnV.js
│ ├─ manager-D7vVcMuB.js
│ ├─ manager-pDodTLeN.js
│ ├─ manifest-registry-DFkGnLaL.js
│ ├─ manifest-registry-jEAb6QQb.js
│ ├─ message-channel-BCrt_uA5.js
│ ├─ message-channel-CrxJEB69.js
│ ├─ model-selection-B4qwB91L.js
│ ├─ model-selection-o7FwIsPo.js
│ ├─ models-cli-N3G3BIm7.js
│ ├─ models-cli-vM34-VIw.js
│ ├─ net-CFCxaipF.js
│ ├─ net-DKJPqXuW.js
│ ├─ node-cli-3CFJVPzT.js
│ ├─ node-cli-Bw7bp0s2.js
│ ├─ node-service-B6843whB.js
│ ├─ node-service-DzB-p3JI.js
│ ├─ nodes-cli-CE8FhEkS.js
│ ├─ nodes-cli-Dl-jwZgg.js
│ ├─ nodes-screen-B4Ev2kTE.js
│ ├─ nodes-screen-RlrCp7IB.js
│ ├─ note-\_C44YfAQ.js
│ ├─ note-B5qg7oqm.js
│ ├─ onboard-channels-B26EROSQ.js
│ ├─ onboard-channels-CHt4WWzu.js
│ ├─ onboard-skills-CBxRTMlF.js
│ ├─ onboard-skills-CxbuRQxA.js
│ ├─ onboarding-Bdn3a2aA.js
│ ├─ openclaw-root-C4U29XUH.js
│ ├─ openclaw-root-CKQbjILP.js
│ ├─ pairing-cli-BlXhH7JA.js
│ ├─ pairing-cli-BVpyu8ZJ.js
│ ├─ pairing-labels-C4Tjx5YZ.js
│ ├─ pairing-labels-Ersr_UYd.js
│ ├─ pairing-store-BkUmWRCC.js
│ ├─ pairing-store-CmH6a28M.js
│ ├─ parse-87ybtYW1.js
│ ├─ parse-log-line-DSvJi17i.js
│ ├─ parse-log-line-DxRaGzQb.js
│ ├─ parse-OCFfznr3.js
│ ├─ parse-timeout-CFqNj7No.js
│ ├─ parse-timeout-DV8NQQWk.js
│ ├─ path-env-DEj4CiFN.js
│ ├─ path-env-DQFTQc5U.js
│ ├─ paths-BT7dYXvM.js
│ ├─ paths-Dr1sURR4.js
│ ├─ paths-DRNzvJAC.js
│ ├─ paths-DTLOarSV.js
│ ├─ paths-K9y5cmav.js
│ ├─ pi-embedded-helpers-BRLdric6.js
│ ├─ pi-embedded-helpers-DSCRIHqa.js
│ ├─ pi-embedded-helpers-DvzGTL7f.js
│ ├─ pi-model-discovery-B6CsmK6Y.js
│ ├─ pi-model-discovery-DsRqYJLy.js
│ ├─ pi-model-discovery-EhM2JAQo.js
│ ├─ pi-tools.policy-xFQwu360.js
│ ├─ plugin-auto-enable-\_rFu5jCq.js
│ ├─ plugin-auto-enable-MQd2uG6u.js
│ ├─ plugins-BnHKIn00.js
│ ├─ plugins-cli-408A9p_B.js
│ ├─ plugins-cli-DFmxF86f.js
│ ├─ plugins-DgoLtswn.js
│ ├─ ports-DZ0NAiF6.js
│ ├─ program-BjWRm1p5.js
│ ├─ progress-Bcjniu7m.js
│ ├─ progress-BNZo7RS9.js
│ ├─ prompt-style-CFsleyxV.js
│ ├─ prompt-style-CJsf8L7U.js
│ ├─ prompts-Bt9fwsg2.js
│ ├─ prompts-CudpZgTI.js
│ ├─ pw-ai-\_m-m5tIK.js
│ ├─ pw-ai-BeH-jqKY.js
│ ├─ pw-ai-DL6mMo3v.js
│ ├─ qmd-manager-BViiivmX.js
│ ├─ qmd-manager-CLnU4f9e.js
│ ├─ qmd-manager-PJujBkWN.js
│ ├─ redact-BICFkpn7.js
│ ├─ redact-BIMJ3ntQ.js
│ ├─ redact-KzWHRS5J.js
│ ├─ register.subclis-BTZEiAFt.js
│ ├─ reply-pLFbJxhI.js
│ ├─ restart-sentinel-C1OuniUK.js
│ ├─ restart-sentinel-DCZ1D24-.js
│ ├─ rolldown-runtime-Cbj13DAv.js
│ ├─ routes-CCHDlZ1m.js
│ ├─ routes-DbxZzNK-.js
│ ├─ rpc-CjWjF4Ln.js
│ ├─ rpc-CqzZAarT.js
│ ├─ run-main-BOiu3Lzw.js
│ ├─ runtime-guard-T2UTDpEy.js
│ ├─ runtime-guard-X5t_VXaZ.js
│ ├─ sandbox-CHY4KvzA.js
│ ├─ sandbox-cli-BGmAxHeF.js
│ ├─ sandbox-cli-CeKalfGM.js
│ ├─ sandbox-Cm6I4kPb.js
│ ├─ security-cli-BkOsj4el.js
│ ├─ security-cli-Bq5_KhlE.js
│ ├─ server-context-c8bOcloT.js
│ ├─ server-context-iL1ubUP4.js
│ ├─ server-node-events-\_JFuvVg0.js
│ ├─ server-node-events-B3QRcFzX.js
│ ├─ service-audit-C-cdq1wL.js
│ ├─ service-audit-DouQLrzd.js
│ ├─ service-BHkdZ5zK.js
│ ├─ service-Cn5YRm8o.js
│ ├─ shared-80cFwd5E.js
│ ├─ shared-BMUgGGBO.js
│ ├─ shared-BNzFB7ai.js
│ ├─ shared-fCH_n386.js
│ ├─ skills-Bt2jslaw.js
│ ├─ skills-cli-BHdmeRkp.js
│ ├─ skills-cli-DY2PrNIb.js
│ ├─ skills-D8-lbNgT.js
│ ├─ skills-status-B7vq83XC.js
│ ├─ skills-status-DyOAtyKG.js
│ ├─ sqlite-CmdZSZRx.js
│ ├─ sqlite-Dnmf3LS7.js
│ ├─ sqlite-QDf0yuU0.js
│ ├─ status-BF8IVV7c.js
│ ├─ status-BlIAd0EF.js
│ ├─ status-DB_CY8aR.js
│ ├─ status-DQC6bUYt.js
│ ├─ status-Vuqbw2Bb.js
│ ├─ status.update-Dlpe6tyk.js
│ ├─ status.update-DS72DeOd.js
│ ├─ subsystem-B2hq8LDD.js
│ ├─ system-cli-C6-3p9jS.js
│ ├─ system-cli-CzYfNc4M.js
│ ├─ systemd-BPtAWUmn.js
│ ├─ systemd-hints-B5YNhQEd.js
│ ├─ systemd-hints-BGv63Q8y.js
│ ├─ systemd-linger-C_qd1h-4.js
│ ├─ systemd-linger-ONbLiaza.js
│ ├─ systemd-X88lAgq6.js
│ ├─ table-BQQ3gj_r.js
│ ├─ table-CH0XD8gJ.js
│ ├─ tailnet-Bg_vE5qi.js
│ ├─ tailnet-CrNWlQRJ.js
│ ├─ tailscale-DCnMs7_q.js
│ ├─ tailscale-qOzXMJr2.js
│ ├─ tool-display-DEe-dGQ6.js
│ ├─ tool-display-DhQEEdAB.js
│ ├─ transcript-events-CsB1Saa6.js
│ ├─ transcript-events-DDYvbmRV.js
│ ├─ transcript-events-JLH5W4He.js
│ ├─ tui-CILKk5iF.js
│ ├─ tui-cli-CICgDgDV.js
│ ├─ tui-cli-DYxtz-1D.js
│ ├─ tui-i-7Iundg.js
│ ├─ update-BB2R6T_P.js
│ ├─ update-BbvzyLQj.js
│ ├─ update-cli-DTnhEFlf.js
│ ├─ update-cli-DVyQ4WKo.js
│ ├─ update-runner-CKXJyHPT.js
│ ├─ update-runner-or0p88ag.js
│ ├─ utils-DXKGE15t.js
│ ├─ utils-tXgXE8PO.js
│ ├─ webhooks-cli-BTUue0MJ.js
│ ├─ webhooks-cli-ClMmyOXw.js
│ ├─ widearea-dns-B5nORUQH.js
│ ├─ widearea-dns-Dwu4nw3R.js
│ ├─ ws-3zr8WUwL.js
│ ├─ ws-log-BwGIQWuf.js
│ ├─ ws-log-CWoVCHjQ.js
│ ├─ ws-lzrgabja.js
│ └─ wsl-8nKQtFcJ.js
├─ docs/
│ ├─ .i18n/
│ │ ├─ glossary.zh-CN.json
│ │ ├─ README.md
│ │ └─ zh-CN.tm.jsonl
│ ├─ assets/
│ │ ├─ macos-onboarding/
│ │ │ ├─ 01-macos-warning.jpeg
│ │ │ ├─ 02-local-networks.jpeg
│ │ │ ├─ 03-security-notice.png
│ │ │ ├─ 04-choose-gateway.png
│ │ │ └─ 05-permissions.png
│ │ ├─ showcase/
│ │ │ ├─ agents-ui.jpg
│ │ │ ├─ bambu-cli.png
│ │ │ ├─ codexmonitor.png
│ │ │ ├─ gohome-grafana.png
│ │ │ ├─ ios-testflight.jpg
│ │ │ ├─ oura-health.png
│ │ │ ├─ padel-cli.svg
│ │ │ ├─ padel-screenshot.jpg
│ │ │ ├─ papla-tts.jpg
│ │ │ ├─ pr-review-telegram.jpg
│ │ │ ├─ roborock-screenshot.jpg
│ │ │ ├─ roborock-status.svg
│ │ │ ├─ roof-camera-sky.jpg
│ │ │ ├─ snag.png
│ │ │ ├─ tesco-shop.jpg
│ │ │ ├─ wienerlinien.png
│ │ │ ├─ wine-cellar-skill.jpg
│ │ │ ├─ winix-air-purifier.jpg
│ │ │ └─ xuezh-pronunciation.jpeg
│ │ ├─ openclaw-logo-text-dark.png
│ │ ├─ openclaw-logo-text.png
│ │ └─ pixel-lobster.svg
│ ├─ automation/
│ │ ├─ auth-monitoring.md
│ │ ├─ cron-jobs.md
│ │ ├─ cron-vs-heartbeat.md
│ │ ├─ gmail-pubsub.md
│ │ ├─ poll.md
│ │ └─ webhook.md
│ ├─ channels/
│ │ ├─ bluebubbles.md
│ │ ├─ discord.md
│ │ ├─ feishu.md
│ │ ├─ googlechat.md
│ │ ├─ grammy.md
│ │ ├─ imessage.md
│ │ ├─ index.md
│ │ ├─ line.md
│ │ ├─ location.md
│ │ ├─ matrix.md
│ │ ├─ mattermost.md
│ │ ├─ msteams.md
│ │ ├─ nextcloud-talk.md
│ │ ├─ nostr.md
│ │ ├─ signal.md
│ │ ├─ slack.md
│ │ ├─ telegram.md
│ │ ├─ tlon.md
│ │ ├─ troubleshooting.md
│ │ ├─ twitch.md
│ │ ├─ whatsapp.md
│ │ ├─ zalo.md
│ │ └─ zalouser.md
│ ├─ cli/
│ │ ├─ acp.md
│ │ ├─ agent.md
│ │ ├─ agents.md
│ │ ├─ approvals.md
│ │ ├─ browser.md
│ │ ├─ channels.md
│ │ ├─ config.md
│ │ ├─ configure.md
│ │ ├─ cron.md
│ │ ├─ dashboard.md
│ │ ├─ devices.md
│ │ ├─ directory.md
│ │ ├─ dns.md
│ │ ├─ docs.md
│ │ ├─ doctor.md
│ │ ├─ gateway.md
│ │ ├─ health.md
│ │ ├─ hooks.md
│ │ ├─ index.md
│ │ ├─ logs.md
│ │ ├─ memory.md
│ │ ├─ message.md
│ │ ├─ models.md
│ │ ├─ node.md
│ │ ├─ nodes.md
│ │ ├─ onboard.md
│ │ ├─ pairing.md
│ │ ├─ plugins.md
│ │ ├─ reset.md
│ │ ├─ sandbox.md
│ │ ├─ security.md
│ │ ├─ sessions.md
│ │ ├─ setup.md
│ │ ├─ skills.md
│ │ ├─ status.md
│ │ ├─ system.md
│ │ ├─ tui.md
│ │ ├─ uninstall.md
│ │ ├─ update.md
│ │ ├─ voicecall.md
│ │ └─ webhooks.md
│ ├─ concepts/
│ │ ├─ agent-loop.md
│ │ ├─ agent-workspace.md
│ │ ├─ agent.md
│ │ ├─ architecture.md
│ │ ├─ channel-routing.md
│ │ ├─ compaction.md
│ │ ├─ context.md
│ │ ├─ features.md
│ │ ├─ group-messages.md
│ │ ├─ groups.md
│ │ ├─ markdown-formatting.md
│ │ ├─ memory.md
│ │ ├─ messages.md
│ │ ├─ model-failover.md
│ │ ├─ model-providers.md
│ │ ├─ models.md
│ │ ├─ multi-agent.md
│ │ ├─ oauth.md
│ │ ├─ presence.md
│ │ ├─ queue.md
│ │ ├─ retry.md
│ │ ├─ session-pruning.md
│ │ ├─ session-tool.md
│ │ ├─ session.md
│ │ ├─ sessions.md
│ │ ├─ streaming.md
│ │ ├─ system-prompt.md
│ │ ├─ timezone.md
│ │ ├─ typebox.md
│ │ ├─ typing-indicators.md
│ │ └─ usage-tracking.md
│ ├─ debug/
│ │ └─ node-issue.md
│ ├─ diagnostics/
│ │ └─ flags.md
│ ├─ experiments/
│ │ ├─ plans/
│ │ │ ├─ cron-add-hardening.md
│ │ │ ├─ group-policy-hardening.md
│ │ │ └─ openresponses-gateway.md
│ │ ├─ proposals/
│ │ │ └─ model-config.md
│ │ ├─ research/
│ │ │ └─ memory.md
│ │ └─ onboarding-config-protocol.md
│ ├─ gateway/
│ │ ├─ security/
│ │ │ ├─ formal-verification.md
│ │ │ └─ index.md
│ │ ├─ authentication.md
│ │ ├─ background-process.md
│ │ ├─ bonjour.md
│ │ ├─ bridge-protocol.md
│ │ ├─ cli-backends.md
│ │ ├─ configuration-examples.md
│ │ ├─ configuration.md
│ │ ├─ discovery.md
│ │ ├─ doctor.md
│ │ ├─ gateway-lock.md
│ │ ├─ health.md
│ │ ├─ heartbeat.md
│ │ ├─ index.md
│ │ ├─ local-models.md
│ │ ├─ logging.md
│ │ ├─ multiple-gateways.md
│ │ ├─ network-model.md
│ │ ├─ openai-http-api.md
│ │ ├─ openresponses-http-api.md
│ │ ├─ pairing.md
│ │ ├─ protocol.md
│ │ ├─ remote-gateway-readme.md
│ │ ├─ remote.md
│ │ ├─ sandbox-vs-tool-policy-vs-elevated.md
│ │ ├─ sandboxing.md
│ │ ├─ tailscale.md
│ │ ├─ tools-invoke-http-api.md
│ │ └─ troubleshooting.md
│ ├─ help/
│ │ ├─ faq.md
│ │ ├─ index.md
│ │ └─ troubleshooting.md
│ ├─ hooks/
│ │ └─ soul-evil.md
│ ├─ images/
│ │ ├─ feishu-step2-create-app.png
│ │ ├─ feishu-step3-credentials.png
│ │ ├─ feishu-step4-permissions.png
│ │ ├─ feishu-step5-bot-capability.png
│ │ ├─ feishu-step6-event-subscription.png
│ │ ├─ groups-flow.svg
│ │ └─ mobile-ui-screenshot.png
│ ├─ install/
│ │ ├─ ansible.md
│ │ ├─ bun.md
│ │ ├─ development-channels.md
│ │ ├─ docker.md
│ │ ├─ index.md
│ │ ├─ installer.md
│ │ ├─ migrating.md
│ │ ├─ nix.md
│ │ ├─ node.md
│ │ ├─ uninstall.md
│ │ └─ updating.md
│ ├─ nodes/
│ │ ├─ audio.md
│ │ ├─ camera.md
│ │ ├─ images.md
│ │ ├─ index.md
│ │ ├─ location-command.md
│ │ ├─ media-understanding.md
│ │ ├─ talk.md
│ │ └─ voicewake.md
│ ├─ platforms/
│ │ ├─ mac/
│ │ │ ├─ bundled-gateway.md
│ │ │ ├─ canvas.md
│ │ │ ├─ child-process.md
│ │ │ ├─ dev-setup.md
│ │ │ ├─ health.md
│ │ │ ├─ icon.md
│ │ │ ├─ logging.md
│ │ │ ├─ menu-bar.md
│ │ │ ├─ peekaboo.md
│ │ │ ├─ permissions.md
│ │ │ ├─ release.md
│ │ │ ├─ remote.md
│ │ │ ├─ signing.md
│ │ │ ├─ skills.md
│ │ │ ├─ voice-overlay.md
│ │ │ ├─ voicewake.md
│ │ │ ├─ webchat.md
│ │ │ └─ xpc.md
│ │ ├─ android.md
│ │ ├─ digitalocean.md
│ │ ├─ exe-dev.md
│ │ ├─ fly.md
│ │ ├─ gcp.md
│ │ ├─ hetzner.md
│ │ ├─ index.md
│ │ ├─ ios.md
│ │ ├─ linux.md
│ │ ├─ macos-vm.md
│ │ ├─ macos.md
│ │ ├─ oracle.md
│ │ ├─ raspberry-pi.md
│ │ └─ windows.md
│ ├─ plugins/
│ │ ├─ agent-tools.md
│ │ ├─ manifest.md
│ │ ├─ voice-call.md
│ │ └─ zalouser.md
│ ├─ providers/
│ │ ├─ anthropic.md
│ │ ├─ claude-max-api-proxy.md
│ │ ├─ cloudflare-ai-gateway.md
│ │ ├─ deepgram.md
│ │ ├─ github-copilot.md
│ │ ├─ glm.md
│ │ ├─ index.md
│ │ ├─ minimax.md
│ │ ├─ models.md
│ │ ├─ moonshot.md
│ │ ├─ ollama.md
│ │ ├─ openai.md
│ │ ├─ opencode.md
│ │ ├─ openrouter.md
│ │ ├─ qwen.md
│ │ ├─ synthetic.md
│ │ ├─ venice.md
│ │ ├─ vercel-ai-gateway.md
│ │ ├─ xiaomi.md
│ │ └─ zai.md
│ ├─ refactor/
│ │ ├─ clawnet.md
│ │ ├─ exec-host.md
│ │ ├─ outbound-session-mirroring.md
│ │ ├─ plugin-sdk.md
│ │ └─ strict-config.md
│ ├─ reference/
│ │ ├─ templates/
│ │ │ ├─ AGENTS.dev.md
│ │ │ ├─ AGENTS.md
│ │ │ ├─ BOOT.md
│ │ │ ├─ BOOTSTRAP.md
│ │ │ ├─ HEARTBEAT.md
│ │ │ ├─ IDENTITY.dev.md
│ │ │ ├─ IDENTITY.md
│ │ │ ├─ SOUL.dev.md
│ │ │ ├─ SOUL.md
│ │ │ ├─ TOOLS.dev.md
│ │ │ ├─ TOOLS.md
│ │ │ ├─ USER.dev.md
│ │ │ └─ USER.md
│ │ ├─ AGENTS.default.md
│ │ ├─ api-usage-costs.md
│ │ ├─ credits.md
│ │ ├─ device-models.md
│ │ ├─ RELEASING.md
│ │ ├─ rpc.md
│ │ ├─ session-management-compaction.md
│ │ ├─ test.md
│ │ └─ transcript-hygiene.md
│ ├─ security/
│ │ └─ formal-verification.md
│ ├─ start/
│ │ ├─ bootstrapping.md
│ │ ├─ docs-directory.md
│ │ ├─ getting-started.md
│ │ ├─ hubs.md
│ │ ├─ lore.md
│ │ ├─ onboarding.md
│ │ ├─ openclaw.md
│ │ ├─ pairing.md
│ │ ├─ quickstart.md
│ │ ├─ setup.md
│ │ ├─ showcase.md
│ │ └─ wizard.md
│ ├─ tools/
│ │ ├─ agent-send.md
│ │ ├─ apply-patch.md
│ │ ├─ browser-linux-troubleshooting.md
│ │ ├─ browser-login.md
│ │ ├─ browser.md
│ │ ├─ chrome-extension.md
│ │ ├─ clawhub.md
│ │ ├─ creating-skills.md
│ │ ├─ elevated.md
│ │ ├─ exec-approvals.md
│ │ ├─ exec.md
│ │ ├─ firecrawl.md
│ │ ├─ index.md
│ │ ├─ llm-task.md
│ │ ├─ lobster.md
│ │ ├─ reactions.md
│ │ ├─ skills-config.md
│ │ ├─ skills.md
│ │ ├─ slash-commands.md
│ │ ├─ subagents.md
│ │ ├─ thinking.md
│ │ └─ web.md
│ ├─ web/
│ │ ├─ control-ui.md
│ │ ├─ dashboard.md
│ │ ├─ index.md
│ │ └─ webchat.md
│ ├─ zh-CN/
│ │ ├─ automation/
│ │ │ ├─ auth-monitoring.md
│ │ │ ├─ cron-jobs.md
│ │ │ ├─ cron-vs-heartbeat.md
│ │ │ ├─ gmail-pubsub.md
│ │ │ ├─ poll.md
│ │ │ └─ webhook.md
│ │ ├─ channels/
│ │ │ ├─ bluebubbles.md
│ │ │ ├─ discord.md
│ │ │ ├─ feishu.md
│ │ │ ├─ googlechat.md
│ │ │ ├─ grammy.md
│ │ │ ├─ imessage.md
│ │ │ ├─ index.md
│ │ │ ├─ line.md
│ │ │ ├─ location.md
│ │ │ ├─ matrix.md
│ │ │ ├─ mattermost.md
│ │ │ ├─ msteams.md
│ │ │ ├─ nextcloud-talk.md
│ │ │ ├─ nostr.md
│ │ │ ├─ signal.md
│ │ │ ├─ slack.md
│ │ │ ├─ telegram.md
│ │ │ ├─ tlon.md
│ │ │ ├─ troubleshooting.md
│ │ │ ├─ twitch.md
│ │ │ ├─ whatsapp.md
│ │ │ ├─ zalo.md
│ │ │ └─ zalouser.md
│ │ ├─ cli/
│ │ │ ├─ acp.md
│ │ │ ├─ agent.md
│ │ │ ├─ agents.md
│ │ │ ├─ approvals.md
│ │ │ ├─ browser.md
│ │ │ ├─ channels.md
│ │ │ ├─ config.md
│ │ │ ├─ configure.md
│ │ │ ├─ cron.md
│ │ │ ├─ dashboard.md
│ │ │ ├─ devices.md
│ │ │ ├─ directory.md
│ │ │ ├─ dns.md
│ │ │ ├─ docs.md
│ │ │ ├─ doctor.md
│ │ │ ├─ gateway.md
│ │ │ ├─ health.md
│ │ │ ├─ hooks.md
│ │ │ ├─ index.md
│ │ │ ├─ logs.md
│ │ │ ├─ memory.md
│ │ │ ├─ message.md
│ │ │ ├─ models.md
│ │ │ ├─ node.md
│ │ │ ├─ nodes.md
│ │ │ ├─ onboard.md
│ │ │ ├─ pairing.md
│ │ │ ├─ plugins.md
│ │ │ ├─ reset.md
│ │ │ ├─ sandbox.md
│ │ │ ├─ security.md
│ │ │ ├─ sessions.md
│ │ │ ├─ setup.md
│ │ │ ├─ skills.md
│ │ │ ├─ status.md
│ │ │ ├─ system.md
│ │ │ ├─ tui.md
│ │ │ ├─ uninstall.md
│ │ │ ├─ update.md
│ │ │ ├─ voicecall.md
│ │ │ └─ webhooks.md
│ │ ├─ concepts/
│ │ │ ├─ agent-loop.md
│ │ │ ├─ agent-workspace.md
│ │ │ ├─ agent.md
│ │ │ ├─ architecture.md
│ │ │ ├─ channel-routing.md
│ │ │ ├─ compaction.md
│ │ │ ├─ context.md
│ │ │ ├─ features.md
│ │ │ ├─ group-messages.md
│ │ │ ├─ groups.md
│ │ │ ├─ markdown-formatting.md
│ │ │ ├─ memory.md
│ │ │ ├─ messages.md
│ │ │ ├─ model-failover.md
│ │ │ ├─ model-providers.md
│ │ │ ├─ models.md
│ │ │ ├─ multi-agent.md
│ │ │ ├─ oauth.md
│ │ │ ├─ presence.md
│ │ │ ├─ queue.md
│ │ │ ├─ retry.md
│ │ │ ├─ session-pruning.md
│ │ │ ├─ session-tool.md
│ │ │ ├─ session.md
│ │ │ ├─ sessions.md
│ │ │ ├─ streaming.md
│ │ │ ├─ system-prompt.md
│ │ │ ├─ timezone.md
│ │ │ ├─ typebox.md
│ │ │ ├─ typing-indicators.md
│ │ │ └─ usage-tracking.md
│ │ ├─ debug/
│ │ │ └─ node-issue.md
│ │ ├─ diagnostics/
│ │ │ └─ flags.md
│ │ ├─ experiments/
│ │ │ ├─ plans/
│ │ │ │ ├─ cron-add-hardening.md
│ │ │ │ ├─ group-policy-hardening.md
│ │ │ │ └─ openresponses-gateway.md
│ │ │ ├─ proposals/
│ │ │ │ └─ model-config.md
│ │ │ ├─ research/
│ │ │ │ └─ memory.md
│ │ │ └─ onboarding-config-protocol.md
│ │ ├─ gateway/
│ │ │ ├─ security/
│ │ │ │ ├─ formal-verification.md
│ │ │ │ └─ index.md
│ │ │ ├─ authentication.md
│ │ │ ├─ background-process.md
│ │ │ ├─ bonjour.md
│ │ │ ├─ bridge-protocol.md
│ │ │ ├─ cli-backends.md
│ │ │ ├─ configuration-examples.md
│ │ │ ├─ configuration.md
│ │ │ ├─ discovery.md
│ │ │ ├─ doctor.md
│ │ │ ├─ gateway-lock.md
│ │ │ ├─ health.md
│ │ │ ├─ heartbeat.md
│ │ │ ├─ index.md
│ │ │ ├─ local-models.md
│ │ │ ├─ logging.md
│ │ │ ├─ multiple-gateways.md
│ │ │ ├─ network-model.md
│ │ │ ├─ openai-http-api.md
│ │ │ ├─ openresponses-http-api.md
│ │ │ ├─ pairing.md
│ │ │ ├─ protocol.md
│ │ │ ├─ remote-gateway-readme.md
│ │ │ ├─ remote.md
│ │ │ ├─ sandbox-vs-tool-policy-vs-elevated.md
│ │ │ ├─ sandboxing.md
│ │ │ ├─ tailscale.md
│ │ │ ├─ tools-invoke-http-api.md
│ │ │ └─ troubleshooting.md
│ │ ├─ help/
│ │ │ ├─ faq.md
│ │ │ ├─ index.md
│ │ │ └─ troubleshooting.md
│ │ ├─ hooks/
│ │ │ └─ soul-evil.md
│ │ ├─ install/
│ │ │ ├─ ansible.md
│ │ │ ├─ bun.md
│ │ │ ├─ development-channels.md
│ │ │ ├─ docker.md
│ │ │ ├─ index.md
│ │ │ ├─ installer.md
│ │ │ ├─ migrating.md
│ │ │ ├─ nix.md
│ │ │ ├─ node.md
│ │ │ ├─ uninstall.md
│ │ │ └─ updating.md
│ │ ├─ nodes/
│ │ │ ├─ audio.md
│ │ │ ├─ camera.md
│ │ │ ├─ images.md
│ │ │ ├─ index.md
│ │ │ ├─ location-command.md
│ │ │ ├─ media-understanding.md
│ │ │ ├─ talk.md
│ │ │ └─ voicewake.md
│ │ ├─ platforms/
│ │ │ ├─ mac/
│ │ │ │ ├─ bundled-gateway.md
│ │ │ │ ├─ canvas.md
│ │ │ │ ├─ child-process.md
│ │ │ │ ├─ dev-setup.md
│ │ │ │ ├─ health.md
│ │ │ │ ├─ icon.md
│ │ │ │ ├─ logging.md
│ │ │ │ ├─ menu-bar.md
│ │ │ │ ├─ peekaboo.md
│ │ │ │ ├─ permissions.md
│ │ │ │ ├─ release.md
│ │ │ │ ├─ remote.md
│ │ │ │ ├─ signing.md
│ │ │ │ ├─ skills.md
│ │ │ │ ├─ voice-overlay.md
│ │ │ │ ├─ voicewake.md
│ │ │ │ ├─ webchat.md
│ │ │ │ └─ xpc.md
│ │ │ ├─ android.md
│ │ │ ├─ digitalocean.md
│ │ │ ├─ exe-dev.md
│ │ │ ├─ fly.md
│ │ │ ├─ gcp.md
│ │ │ ├─ hetzner.md
│ │ │ ├─ index.md
│ │ │ ├─ ios.md
│ │ │ ├─ linux.md
│ │ │ ├─ macos-vm.md
│ │ │ ├─ macos.md
│ │ │ ├─ oracle.md
│ │ │ ├─ raspberry-pi.md
│ │ │ └─ windows.md
│ │ ├─ plugins/
│ │ │ ├─ agent-tools.md
│ │ │ ├─ manifest.md
│ │ │ ├─ voice-call.md
│ │ │ └─ zalouser.md
│ │ ├─ providers/
│ │ │ ├─ anthropic.md
│ │ │ ├─ claude-max-api-proxy.md
│ │ │ ├─ deepgram.md
│ │ │ ├─ github-copilot.md
│ │ │ ├─ glm.md
│ │ │ ├─ index.md
│ │ │ ├─ minimax.md
│ │ │ ├─ models.md
│ │ │ ├─ moonshot.md
│ │ │ ├─ ollama.md
│ │ │ ├─ openai.md
│ │ │ ├─ opencode.md
│ │ │ ├─ openrouter.md
│ │ │ ├─ qwen.md
│ │ │ ├─ synthetic.md
│ │ │ ├─ venice.md
│ │ │ ├─ vercel-ai-gateway.md
│ │ │ ├─ xiaomi.md
│ │ │ └─ zai.md
│ │ ├─ refactor/
│ │ │ ├─ clawnet.md
│ │ │ ├─ exec-host.md
│ │ │ ├─ outbound-session-mirroring.md
│ │ │ ├─ plugin-sdk.md
│ │ │ └─ strict-config.md
│ │ ├─ reference/
│ │ │ ├─ templates/
│ │ │ │ ├─ AGENTS.dev.md
│ │ │ │ ├─ AGENTS.md
│ │ │ │ ├─ BOOT.md
│ │ │ │ ├─ BOOTSTRAP.md
│ │ │ │ ├─ HEARTBEAT.md
│ │ │ │ ├─ IDENTITY.dev.md
│ │ │ │ ├─ IDENTITY.md
│ │ │ │ ├─ SOUL.dev.md
│ │ │ │ ├─ SOUL.md
│ │ │ │ ├─ TOOLS.dev.md
│ │ │ │ ├─ TOOLS.md
│ │ │ │ ├─ USER.dev.md
│ │ │ │ └─ USER.md
│ │ │ ├─ AGENTS.default.md
│ │ │ ├─ api-usage-costs.md
│ │ │ ├─ credits.md
│ │ │ ├─ device-models.md
│ │ │ ├─ RELEASING.md
│ │ │ ├─ rpc.md
│ │ │ ├─ session-management-compaction.md
│ │ │ ├─ test.md
│ │ │ └─ transcript-hygiene.md
│ │ ├─ security/
│ │ │ └─ formal-verification.md
│ │ ├─ start/
│ │ │ ├─ docs-directory.md
│ │ │ ├─ getting-started.md
│ │ │ ├─ hubs.md
│ │ │ ├─ lore.md
│ │ │ ├─ onboarding.md
│ │ │ ├─ openclaw.md
│ │ │ ├─ pairing.md
│ │ │ ├─ quickstart.md
│ │ │ ├─ setup.md
│ │ │ ├─ showcase.md
│ │ │ └─ wizard.md
│ │ ├─ tools/
│ │ │ ├─ agent-send.md
│ │ │ ├─ apply-patch.md
│ │ │ ├─ browser-linux-troubleshooting.md
│ │ │ ├─ browser-login.md
│ │ │ ├─ browser.md
│ │ │ ├─ chrome-extension.md
│ │ │ ├─ clawhub.md
│ │ │ ├─ creating-skills.md
│ │ │ ├─ elevated.md
│ │ │ ├─ exec-approvals.md
│ │ │ ├─ exec.md
│ │ │ ├─ firecrawl.md
│ │ │ ├─ index.md
│ │ │ ├─ llm-task.md
│ │ │ ├─ lobster.md
│ │ │ ├─ reactions.md
│ │ │ ├─ skills-config.md
│ │ │ ├─ skills.md
│ │ │ ├─ slash-commands.md
│ │ │ ├─ subagents.md
│ │ │ ├─ thinking.md
│ │ │ └─ web.md
│ │ ├─ web/
│ │ │ ├─ control-ui.md
│ │ │ ├─ dashboard.md
│ │ │ ├─ index.md
│ │ │ └─ webchat.md
│ │ ├─ AGENTS.md
│ │ ├─ bedrock.md
│ │ ├─ brave-search.md
│ │ ├─ broadcast-groups.md
│ │ ├─ date-time.md
│ │ ├─ debugging.md
│ │ ├─ environment.md
│ │ ├─ hooks.md
│ │ ├─ index.md
│ │ ├─ logging.md
│ │ ├─ multi-agent-sandbox-tools.md
│ │ ├─ network.md
│ │ ├─ northflank.mdx
│ │ ├─ perplexity.md
│ │ ├─ pi-dev.md
│ │ ├─ pi.md
│ │ ├─ plugin.md
│ │ ├─ prose.md
│ │ ├─ railway.mdx
│ │ ├─ render.mdx
│ │ ├─ scripts.md
│ │ ├─ testing.md
│ │ ├─ token-use.md
│ │ ├─ tts.md
│ │ ├─ tui.md
│ │ └─ vps.md
│ ├─ bedrock.md
│ ├─ brave-search.md
│ ├─ broadcast-groups.md
│ ├─ CNAME
│ ├─ date-time.md
│ ├─ debugging.md
│ ├─ docs.json
│ ├─ environment.md
│ ├─ hooks.md
│ ├─ index.md
│ ├─ logging.md
│ ├─ multi-agent-sandbox-tools.md
│ ├─ network.md
│ ├─ northflank.mdx
│ ├─ perplexity.md
│ ├─ pi-dev.md
│ ├─ pi.md
│ ├─ plugin.md
│ ├─ prose.md
│ ├─ railway.mdx
│ ├─ render.mdx
│ ├─ scripts.md
│ ├─ style.css
│ ├─ testing.md
│ ├─ token-use.md
│ ├─ tts.md
│ ├─ tui.md
│ ├─ vps.md
│ ├─ whatsapp-openclaw-ai-zh.jpg
│ └─ whatsapp-openclaw.jpg
├─ extensions/
│ ├─ bluebubbles/
│ │ ├─ src/
│ │ │ ├─ accounts.ts
│ │ │ ├─ actions.test.ts
│ │ │ ├─ actions.ts
│ │ │ ├─ attachments.test.ts
│ │ │ ├─ attachments.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ chat.test.ts
│ │ │ ├─ chat.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ media-send.ts
│ │ │ ├─ monitor.test.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ probe.ts
│ │ │ ├─ reactions.test.ts
│ │ │ ├─ reactions.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ send.test.ts
│ │ │ ├─ send.ts
│ │ │ ├─ targets.test.ts
│ │ │ ├─ targets.ts
│ │ │ └─ types.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ copilot-proxy/
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ diagnostics-otel/
│ │ ├─ src/
│ │ │ ├─ service.test.ts
│ │ │ └─ service.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ discord/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ feishu/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ └─ onboarding.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ google-antigravity-auth/
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ google-gemini-cli-auth/
│ │ ├─ index.ts
│ │ ├─ oauth.test.ts
│ │ ├─ oauth.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ googlechat/
│ │ ├─ src/
│ │ │ ├─ accounts.ts
│ │ │ ├─ actions.ts
│ │ │ ├─ api.test.ts
│ │ │ ├─ api.ts
│ │ │ ├─ auth.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ monitor.test.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ targets.test.ts
│ │ │ ├─ targets.ts
│ │ │ ├─ types.config.ts
│ │ │ └─ types.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ imessage/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ line/
│ │ ├─ src/
│ │ │ ├─ card-command.ts
│ │ │ ├─ channel.logout.test.ts
│ │ │ ├─ channel.sendPayload.test.ts
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ llm-task/
│ │ ├─ src/
│ │ │ ├─ llm-task-tool.test.ts
│ │ │ └─ llm-task-tool.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ lobster/
│ │ ├─ src/
│ │ │ ├─ lobster-tool.test.ts
│ │ │ └─ lobster-tool.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ ├─ README.md
│ │ └─ SKILL.md
│ ├─ matrix/
│ │ ├─ src/
│ │ │ ├─ matrix/
│ │ │ │ ├─ actions/
│ │ │ │ │ ├─ client.ts
│ │ │ │ │ ├─ messages.ts
│ │ │ │ │ ├─ pins.ts
│ │ │ │ │ ├─ reactions.ts
│ │ │ │ │ ├─ room.ts
│ │ │ │ │ ├─ summary.ts
│ │ │ │ │ └─ types.ts
│ │ │ │ ├─ client/
│ │ │ │ │ ├─ config.ts
│ │ │ │ │ ├─ create-client.ts
│ │ │ │ │ ├─ logging.ts
│ │ │ │ │ ├─ runtime.ts
│ │ │ │ │ ├─ shared.ts
│ │ │ │ │ ├─ storage.ts
│ │ │ │ │ └─ types.ts
│ │ │ │ ├─ monitor/
│ │ │ │ │ ├─ allowlist.test.ts
│ │ │ │ │ ├─ allowlist.ts
│ │ │ │ │ ├─ auto-join.ts
│ │ │ │ │ ├─ direct.ts
│ │ │ │ │ ├─ events.ts
│ │ │ │ │ ├─ handler.ts
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ location.ts
│ │ │ │ │ ├─ media.test.ts
│ │ │ │ │ ├─ media.ts
│ │ │ │ │ ├─ mentions.ts
│ │ │ │ │ ├─ replies.ts
│ │ │ │ │ ├─ room-info.ts
│ │ │ │ │ ├─ rooms.test.ts
│ │ │ │ │ ├─ rooms.ts
│ │ │ │ │ ├─ threads.ts
│ │ │ │ │ └─ types.ts
│ │ │ │ ├─ send/
│ │ │ │ │ ├─ client.ts
│ │ │ │ │ ├─ formatting.ts
│ │ │ │ │ ├─ media.ts
│ │ │ │ │ ├─ targets.test.ts
│ │ │ │ │ ├─ targets.ts
│ │ │ │ │ └─ types.ts
│ │ │ │ ├─ accounts.test.ts
│ │ │ │ ├─ accounts.ts
│ │ │ │ ├─ actions.ts
│ │ │ │ ├─ active-client.ts
│ │ │ │ ├─ client.test.ts
│ │ │ │ ├─ client.ts
│ │ │ │ ├─ credentials.ts
│ │ │ │ ├─ deps.ts
│ │ │ │ ├─ format.test.ts
│ │ │ │ ├─ format.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ poll-types.test.ts
│ │ │ │ ├─ poll-types.ts
│ │ │ │ ├─ probe.ts
│ │ │ │ ├─ send.test.ts
│ │ │ │ └─ send.ts
│ │ │ ├─ actions.ts
│ │ │ ├─ channel.directory.test.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ directory-live.ts
│ │ │ ├─ group-mentions.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ outbound.ts
│ │ │ ├─ resolve-targets.test.ts
│ │ │ ├─ resolve-targets.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ tool-actions.ts
│ │ │ └─ types.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ mattermost/
│ │ ├─ src/
│ │ │ ├─ mattermost/
│ │ │ │ ├─ accounts.ts
│ │ │ │ ├─ client.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ monitor-helpers.ts
│ │ │ │ ├─ monitor.ts
│ │ │ │ ├─ probe.ts
│ │ │ │ └─ send.ts
│ │ │ ├─ channel.test.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ group-mentions.ts
│ │ │ ├─ normalize.ts
│ │ │ ├─ onboarding-helpers.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ runtime.ts
│ │ │ └─ types.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ memory-core/
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ memory-lancedb/
│ │ ├─ config.ts
│ │ ├─ index.test.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ minimax-portal-auth/
│ │ ├─ index.ts
│ │ ├─ oauth.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ msteams/
│ │ ├─ src/
│ │ │ ├─ attachments/
│ │ │ │ ├─ download.ts
│ │ │ │ ├─ graph.ts
│ │ │ │ ├─ html.ts
│ │ │ │ ├─ payload.ts
│ │ │ │ ├─ shared.ts
│ │ │ │ └─ types.ts
│ │ │ ├─ monitor-handler/
│ │ │ │ ├─ inbound-media.ts
│ │ │ │ └─ message-handler.ts
│ │ │ ├─ attachments.test.ts
│ │ │ ├─ attachments.ts
│ │ │ ├─ channel.directory.test.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ conversation-store-fs.test.ts
│ │ │ ├─ conversation-store-fs.ts
│ │ │ ├─ conversation-store-memory.ts
│ │ │ ├─ conversation-store.ts
│ │ │ ├─ directory-live.ts
│ │ │ ├─ errors.test.ts
│ │ │ ├─ errors.ts
│ │ │ ├─ file-consent-helpers.test.ts
│ │ │ ├─ file-consent-helpers.ts
│ │ │ ├─ file-consent.ts
│ │ │ ├─ graph-chat.ts
│ │ │ ├─ graph-upload.ts
│ │ │ ├─ inbound.test.ts
│ │ │ ├─ inbound.ts
│ │ │ ├─ index.ts
│ │ │ ├─ media-helpers.test.ts
│ │ │ ├─ media-helpers.ts
│ │ │ ├─ messenger.test.ts
│ │ │ ├─ messenger.ts
│ │ │ ├─ monitor-handler.ts
│ │ │ ├─ monitor-types.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ outbound.ts
│ │ │ ├─ pending-uploads.ts
│ │ │ ├─ policy.test.ts
│ │ │ ├─ policy.ts
│ │ │ ├─ polls-store-memory.ts
│ │ │ ├─ polls-store.test.ts
│ │ │ ├─ polls.test.ts
│ │ │ ├─ polls.ts
│ │ │ ├─ probe.test.ts
│ │ │ ├─ probe.ts
│ │ │ ├─ reply-dispatcher.ts
│ │ │ ├─ resolve-allowlist.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ sdk-types.ts
│ │ │ ├─ sdk.ts
│ │ │ ├─ send-context.ts
│ │ │ ├─ send.ts
│ │ │ ├─ sent-message-cache.test.ts
│ │ │ ├─ sent-message-cache.ts
│ │ │ ├─ storage.ts
│ │ │ ├─ store-fs.ts
│ │ │ └─ token.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ nextcloud-talk/
│ │ ├─ src/
│ │ │ ├─ accounts.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ format.ts
│ │ │ ├─ inbound.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ normalize.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ policy.test.ts
│ │ │ ├─ policy.ts
│ │ │ ├─ room-info.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ send.ts
│ │ │ ├─ signature.ts
│ │ │ └─ types.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ nostr/
│ │ ├─ src/
│ │ │ ├─ channel.test.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ metrics.ts
│ │ │ ├─ nostr-bus.fuzz.test.ts
│ │ │ ├─ nostr-bus.integration.test.ts
│ │ │ ├─ nostr-bus.test.ts
│ │ │ ├─ nostr-bus.ts
│ │ │ ├─ nostr-profile-http.test.ts
│ │ │ ├─ nostr-profile-http.ts
│ │ │ ├─ nostr-profile-import.test.ts
│ │ │ ├─ nostr-profile-import.ts
│ │ │ ├─ nostr-profile.fuzz.test.ts
│ │ │ ├─ nostr-profile.test.ts
│ │ │ ├─ nostr-profile.ts
│ │ │ ├─ nostr-state-store.test.ts
│ │ │ ├─ nostr-state-store.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ seen-tracker.ts
│ │ │ ├─ types.test.ts
│ │ │ └─ types.ts
│ │ ├─ test/
│ │ │ └─ setup.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ open-prose/
│ │ ├─ skills/
│ │ │ └─ prose/
│ │ │ ├─ alts/
│ │ │ │ ├─ arabian-nights.md
│ │ │ │ ├─ borges.md
│ │ │ │ ├─ folk.md
│ │ │ │ ├─ homer.md
│ │ │ │ └─ kafka.md
│ │ │ ├─ examples/
│ │ │ │ ├─ roadmap/
│ │ │ │ │ ├─ syntax/
│ │ │ │ │ │ └─ open-prose-syntax.prose
│ │ │ │ │ ├─ iterative-refinement.prose
│ │ │ │ │ ├─ parallel-review.prose
│ │ │ │ │ ├─ README.md
│ │ │ │ │ └─ simple-pipeline.prose
│ │ │ │ ├─ 01-hello-world.prose
│ │ │ │ ├─ 02-research-and-summarize.prose
│ │ │ │ ├─ 03-code-review.prose
│ │ │ │ ├─ 04-write-and-refine.prose
│ │ │ │ ├─ 05-debug-issue.prose
│ │ │ │ ├─ 06-explain-codebase.prose
│ │ │ │ ├─ 07-refactor.prose
│ │ │ │ ├─ 08-blog-post.prose
│ │ │ │ ├─ 09-research-with-agents.prose
│ │ │ │ ├─ 10-code-review-agents.prose
│ │ │ │ ├─ 11-skills-and-imports.prose
│ │ │ │ ├─ 12-secure-agent-permissions.prose
│ │ │ │ ├─ 13-variables-and-context.prose
│ │ │ │ ├─ 14-composition-blocks.prose
│ │ │ │ ├─ 15-inline-sequences.prose
│ │ │ │ ├─ 16-parallel-reviews.prose
│ │ │ │ ├─ 17-parallel-research.prose
│ │ │ │ ├─ 18-mixed-parallel-sequential.prose
│ │ │ │ ├─ 19-advanced-parallel.prose
│ │ │ │ ├─ 20-fixed-loops.prose
│ │ │ │ ├─ 21-pipeline-operations.prose
│ │ │ │ ├─ 22-error-handling.prose
│ │ │ │ ├─ 23-retry-with-backoff.prose
│ │ │ │ ├─ 24-choice-blocks.prose
│ │ │ │ ├─ 25-conditionals.prose
│ │ │ │ ├─ 26-parameterized-blocks.prose
│ │ │ │ ├─ 27-string-interpolation.prose
│ │ │ │ ├─ 28-automated-pr-review.prose
│ │ │ │ ├─ 28-gas-town.prose
│ │ │ │ ├─ 29-captains-chair.prose
│ │ │ │ ├─ 30-captains-chair-simple.prose
│ │ │ │ ├─ 31-captains-chair-with-memory.prose
│ │ │ │ ├─ 33-pr-review-autofix.prose
│ │ │ │ ├─ 34-content-pipeline.prose
│ │ │ │ ├─ 35-feature-factory.prose
│ │ │ │ ├─ 36-bug-hunter.prose
│ │ │ │ ├─ 37-the-forge.prose
│ │ │ │ ├─ 38-skill-scan.prose
│ │ │ │ ├─ 39-architect-by-simulation.prose
│ │ │ │ ├─ 40-rlm-self-refine.prose
│ │ │ │ ├─ 41-rlm-divide-conquer.prose
│ │ │ │ ├─ 42-rlm-filter-recurse.prose
│ │ │ │ ├─ 43-rlm-pairwise.prose
│ │ │ │ ├─ 44-run-endpoint-ux-test.prose
│ │ │ │ ├─ 45-plugin-release.prose
│ │ │ │ ├─ 45-run-endpoint-ux-test-with-remediation.prose
│ │ │ │ ├─ 46-run-endpoint-ux-test-fast.prose
│ │ │ │ ├─ 46-workflow-crystallizer.prose
│ │ │ │ ├─ 47-language-self-improvement.prose
│ │ │ │ ├─ 48-habit-miner.prose
│ │ │ │ ├─ 49-prose-run-retrospective.prose
│ │ │ │ └─ README.md
│ │ │ ├─ guidance/
│ │ │ │ ├─ antipatterns.md
│ │ │ │ ├─ patterns.md
│ │ │ │ └─ system-prompt.md
│ │ │ ├─ lib/
│ │ │ │ ├─ calibrator.prose
│ │ │ │ ├─ cost-analyzer.prose
│ │ │ │ ├─ error-forensics.prose
│ │ │ │ ├─ inspector.prose
│ │ │ │ ├─ profiler.prose
│ │ │ │ ├─ program-improver.prose
│ │ │ │ ├─ project-memory.prose
│ │ │ │ ├─ README.md
│ │ │ │ ├─ user-memory.prose
│ │ │ │ └─ vm-improver.prose
│ │ │ ├─ primitives/
│ │ │ │ └─ session.md
│ │ │ ├─ state/
│ │ │ │ ├─ filesystem.md
│ │ │ │ ├─ in-context.md
│ │ │ │ ├─ postgres.md
│ │ │ │ └─ sqlite.md
│ │ │ ├─ alt-borges.md
│ │ │ ├─ compiler.md
│ │ │ ├─ help.md
│ │ │ ├─ LICENSE
│ │ │ ├─ prose.md
│ │ │ └─ SKILL.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ qwen-portal-auth/
│ │ ├─ index.ts
│ │ ├─ oauth.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ README.md
│ ├─ signal/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ slack/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ telegram/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ tlon/
│ │ ├─ src/
│ │ │ ├─ monitor/
│ │ │ │ ├─ discovery.ts
│ │ │ │ ├─ history.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ processed-messages.test.ts
│ │ │ │ ├─ processed-messages.ts
│ │ │ │ └─ utils.ts
│ │ │ ├─ urbit/
│ │ │ │ ├─ auth.ts
│ │ │ │ ├─ http-api.ts
│ │ │ │ ├─ send.test.ts
│ │ │ │ ├─ send.ts
│ │ │ │ ├─ sse-client.test.ts
│ │ │ │ └─ sse-client.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.test.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ targets.ts
│ │ │ └─ types.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ twitch/
│ │ ├─ src/
│ │ │ ├─ utils/
│ │ │ │ ├─ markdown.ts
│ │ │ │ └─ twitch.ts
│ │ │ ├─ access-control.test.ts
│ │ │ ├─ access-control.ts
│ │ │ ├─ actions.ts
│ │ │ ├─ client-manager-registry.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ config.test.ts
│ │ │ ├─ config.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ onboarding.test.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ outbound.test.ts
│ │ │ ├─ outbound.ts
│ │ │ ├─ plugin.test.ts
│ │ │ ├─ plugin.ts
│ │ │ ├─ probe.test.ts
│ │ │ ├─ probe.ts
│ │ │ ├─ resolver.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ send.test.ts
│ │ │ ├─ send.ts
│ │ │ ├─ status.test.ts
│ │ │ ├─ status.ts
│ │ │ ├─ token.test.ts
│ │ │ ├─ token.ts
│ │ │ ├─ twitch-client.test.ts
│ │ │ ├─ twitch-client.ts
│ │ │ └─ types.ts
│ │ ├─ test/
│ │ │ └─ setup.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ voice-call/
│ │ ├─ src/
│ │ │ ├─ manager/
│ │ │ │ ├─ context.ts
│ │ │ │ ├─ events.ts
│ │ │ │ ├─ lookup.ts
│ │ │ │ ├─ outbound.ts
│ │ │ │ ├─ state.ts
│ │ │ │ ├─ store.ts
│ │ │ │ ├─ timers.ts
│ │ │ │ └─ twiml.ts
│ │ │ ├─ providers/
│ │ │ │ ├─ twilio/
│ │ │ │ │ ├─ api.ts
│ │ │ │ │ └─ webhook.ts
│ │ │ │ ├─ base.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ mock.ts
│ │ │ │ ├─ plivo.test.ts
│ │ │ │ ├─ plivo.ts
│ │ │ │ ├─ stt-openai-realtime.ts
│ │ │ │ ├─ telnyx.ts
│ │ │ │ ├─ tts-openai.ts
│ │ │ │ ├─ twilio.test.ts
│ │ │ │ └─ twilio.ts
│ │ │ ├─ allowlist.ts
│ │ │ ├─ cli.ts
│ │ │ ├─ config.test.ts
│ │ │ ├─ config.ts
│ │ │ ├─ core-bridge.ts
│ │ │ ├─ manager.test.ts
│ │ │ ├─ manager.ts
│ │ │ ├─ media-stream.test.ts
│ │ │ ├─ media-stream.ts
│ │ │ ├─ response-generator.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ telephony-audio.ts
│ │ │ ├─ telephony-tts.ts
│ │ │ ├─ tunnel.ts
│ │ │ ├─ types.ts
│ │ │ ├─ utils.ts
│ │ │ ├─ voice-mapping.ts
│ │ │ ├─ webhook-security.test.ts
│ │ │ ├─ webhook-security.ts
│ │ │ └─ webhook.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ ├─ whatsapp/
│ │ ├─ src/
│ │ │ ├─ channel.ts
│ │ │ └─ runtime.ts
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ └─ package.json
│ ├─ zalo/
│ │ ├─ src/
│ │ │ ├─ accounts.ts
│ │ │ ├─ actions.ts
│ │ │ ├─ api.ts
│ │ │ ├─ channel.directory.test.ts
│ │ │ ├─ channel.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ monitor.webhook.test.ts
│ │ │ ├─ onboarding.ts
│ │ │ ├─ probe.ts
│ │ │ ├─ proxy.ts
│ │ │ ├─ runtime.ts
│ │ │ ├─ send.ts
│ │ │ ├─ status-issues.ts
│ │ │ ├─ token.ts
│ │ │ └─ types.ts
│ │ ├─ CHANGELOG.md
│ │ ├─ index.ts
│ │ ├─ openclaw.plugin.json
│ │ ├─ package.json
│ │ └─ README.md
│ └─ zalouser/
│ ├─ src/
│ │ ├─ accounts.ts
│ │ ├─ channel.test.ts
│ │ ├─ channel.ts
│ │ ├─ config-schema.ts
│ │ ├─ monitor.ts
│ │ ├─ onboarding.ts
│ │ ├─ probe.ts
│ │ ├─ runtime.ts
│ │ ├─ send.ts
│ │ ├─ status-issues.test.ts
│ │ ├─ status-issues.ts
│ │ ├─ tool.ts
│ │ ├─ types.ts
│ │ └─ zca.ts
│ ├─ CHANGELOG.md
│ ├─ index.ts
│ ├─ openclaw.plugin.json
│ ├─ package.json
│ └─ README.md
├─ git-hooks/
│ └─ pre-commit
├─ packages/
│ ├─ clawdbot/
│ │ ├─ scripts/
│ │ │ └─ postinstall.js
│ │ ├─ index.js
│ │ └─ package.json
│ └─ moltbot/
│ ├─ scripts/
│ │ └─ postinstall.js
│ ├─ index.js
│ └─ package.json
├─ patches/
│ └─ .gitkeep
├─ scripts/
│ ├─ docker/
│ │ ├─ cleanup-smoke/
│ │ │ ├─ Dockerfile
│ │ │ └─ run.sh
│ │ ├─ install-sh-e2e/
│ │ │ ├─ Dockerfile
│ │ │ └─ run.sh
│ │ ├─ install-sh-nonroot/
│ │ │ ├─ Dockerfile
│ │ │ └─ run.sh
│ │ └─ install-sh-smoke/
│ │ ├─ Dockerfile
│ │ └─ run.sh
│ ├─ docs-i18n/
│ │ ├─ doc_mode.go
│ │ ├─ glossary.go
│ │ ├─ go.mod
│ │ ├─ go.sum
│ │ ├─ html_translate.go
│ │ ├─ main.go
│ │ ├─ markdown_segments.go
│ │ ├─ masking.go
│ │ ├─ order.go
│ │ ├─ placeholders.go
│ │ ├─ process.go
│ │ ├─ segment.go
│ │ ├─ tm.go
│ │ ├─ translator.go
│ │ └─ util.go
│ ├─ e2e/
│ │ ├─ Dockerfile
│ │ ├─ Dockerfile.qr-import
│ │ ├─ doctor-install-switch-docker.sh
│ │ ├─ gateway-network-docker.sh
│ │ ├─ onboard-docker.sh
│ │ ├─ plugins-docker.sh
│ │ └─ qr-import-docker.sh
│ ├─ pre-commit/
│ │ └─ run-node-tool.sh
│ ├─ repro/
│ │ └─ tsx-name-repro.ts
│ ├─ systemd/
│ │ ├─ openclaw-auth-monitor.service
│ │ └─ openclaw-auth-monitor.timer
│ ├─ auth-monitor.sh
│ ├─ bench-model.ts
│ ├─ build_icon.sh
│ ├─ build-and-run-mac.sh
│ ├─ build-docs-list.mjs
│ ├─ bundle-a2ui.mjs
│ ├─ bundle-a2ui.sh
│ ├─ canvas-a2ui-copy.ts
│ ├─ changelog-to-html.sh
│ ├─ check-ts-max-loc.ts
│ ├─ claude-auth-status.sh
│ ├─ clawlog.sh
│ ├─ clawtributors-map.json
│ ├─ codesign-mac-app.sh
│ ├─ committer
│ ├─ copy-hook-metadata.ts
│ ├─ create-dmg.sh
│ ├─ debug-claude-usage.ts
│ ├─ docs-list.js
│ ├─ firecrawl-compare.ts
│ ├─ ios-team-id.sh
│ ├─ make_appcast.sh
│ ├─ mobile-reauth.sh
│ ├─ notarize-mac-artifact.sh
│ ├─ package-mac-app.sh
│ ├─ package-mac-dist.sh
│ ├─ protocol-gen-swift.ts
│ ├─ protocol-gen.ts
│ ├─ readability-basic-compare.ts
│ ├─ release-check.ts
│ ├─ restart-mac.sh
│ ├─ run-node.mjs
│ ├─ sandbox-browser-entrypoint.sh
│ ├─ sandbox-browser-setup.sh
│ ├─ sandbox-common-setup.sh
│ ├─ sandbox-setup.sh
│ ├─ setup-auth-system.sh
│ ├─ sqlite-vec-smoke.mjs
│ ├─ sync-labels.ts
│ ├─ sync-moonshot-docs.ts
│ ├─ sync-plugin-versions.ts
│ ├─ termux-auth-widget.sh
│ ├─ termux-quick-auth.sh
│ ├─ termux-sync-widget.sh
│ ├─ test-cleanup-docker.sh
│ ├─ test-force.ts
│ ├─ test-install-sh-docker.sh
│ ├─ test-install-sh-e2e-docker.sh
│ ├─ test-live-gateway-models-docker.sh
│ ├─ test-live-models-docker.sh
│ ├─ test-parallel.mjs
│ ├─ test-shell-completion.ts
│ ├─ ui.js
│ ├─ update-clawtributors.ts
│ ├─ update-clawtributors.types.ts
│ ├─ watch-node.mjs
│ ├─ write-build-info.ts
│ ├─ write-cli-compat.ts
│ └─ zai-fallback-repro.ts
├─ skills/
│ ├─ 1password/
│ │ ├─ references/
│ │ │ ├─ cli-examples.md
│ │ │ └─ get-started.md
│ │ └─ SKILL.md
│ ├─ apple-notes/
│ │ └─ SKILL.md
│ ├─ apple-reminders/
│ │ └─ SKILL.md
│ ├─ bear-notes/
│ │ └─ SKILL.md
│ ├─ bird/
│ │ └─ SKILL.md
│ ├─ blogwatcher/
│ │ └─ SKILL.md
│ ├─ blucli/
│ │ └─ SKILL.md
│ ├─ bluebubbles/
│ │ └─ SKILL.md
│ ├─ camsnap/
│ │ └─ SKILL.md
│ ├─ canvas/
│ │ └─ SKILL.md
│ ├─ clawhub/
│ │ └─ SKILL.md
│ ├─ coding-agent/
│ │ └─ SKILL.md
│ ├─ discord/
│ │ └─ SKILL.md
│ ├─ eightctl/
│ │ └─ SKILL.md
│ ├─ food-order/
│ │ └─ SKILL.md
│ ├─ gemini/
│ │ └─ SKILL.md
│ ├─ gifgrep/
│ │ └─ SKILL.md
│ ├─ github/
│ │ └─ SKILL.md
│ ├─ gog/
│ │ └─ SKILL.md
│ ├─ goplaces/
│ │ └─ SKILL.md
│ ├─ healthcheck/
│ │ └─ SKILL.md
│ ├─ himalaya/
│ │ ├─ references/
│ │ │ ├─ configuration.md
│ │ │ └─ message-composition.md
│ │ └─ SKILL.md
│ ├─ imsg/
│ │ └─ SKILL.md
│ ├─ local-places/
│ │ ├─ src/
│ │ │ └─ local_places/
│ │ │ ├─ **init**.py
│ │ │ ├─ google_places.py
│ │ │ ├─ main.py
│ │ │ └─ schemas.py
│ │ ├─ pyproject.toml
│ │ ├─ SERVER_README.md
│ │ └─ SKILL.md
│ ├─ mcporter/
│ │ └─ SKILL.md
│ ├─ model-usage/
│ │ ├─ references/
│ │ │ └─ codexbar-cli.md
│ │ ├─ scripts/
│ │ │ └─ model_usage.py
│ │ └─ SKILL.md
│ ├─ nano-banana-pro/
│ │ ├─ scripts/
│ │ │ └─ generate_image.py
│ │ └─ SKILL.md
│ ├─ nano-pdf/
│ │ └─ SKILL.md
│ ├─ notion/
│ │ └─ SKILL.md
│ ├─ obsidian/
│ │ └─ SKILL.md
│ ├─ openai-image-gen/
│ │ ├─ scripts/
│ │ │ └─ gen.py
│ │ └─ SKILL.md
│ ├─ openai-whisper/
│ │ └─ SKILL.md
│ ├─ openai-whisper-api/
│ │ ├─ scripts/
│ │ │ └─ transcribe.sh
│ │ └─ SKILL.md
│ ├─ openhue/
│ │ └─ SKILL.md
│ ├─ oracle/
│ │ └─ SKILL.md
│ ├─ ordercli/
│ │ └─ SKILL.md
│ ├─ peekaboo/
│ │ └─ SKILL.md
│ ├─ sag/
│ │ └─ SKILL.md
│ ├─ session-logs/
│ │ └─ SKILL.md
│ ├─ sherpa-onnx-tts/
│ │ ├─ bin/
│ │ │ └─ sherpa-onnx-tts
│ │ └─ SKILL.md
│ ├─ skill-creator/
│ │ ├─ scripts/
│ │ │ ├─ init_skill.py
│ │ │ ├─ package_skill.py
│ │ │ └─ quick_validate.py
│ │ ├─ license.txt
│ │ └─ SKILL.md
│ ├─ slack/
│ │ └─ SKILL.md
│ ├─ songsee/
│ │ └─ SKILL.md
│ ├─ sonoscli/
│ │ └─ SKILL.md
│ ├─ spotify-player/
│ │ └─ SKILL.md
│ ├─ summarize/
│ │ └─ SKILL.md
│ ├─ things-mac/
│ │ └─ SKILL.md
│ ├─ tmux/
│ │ ├─ scripts/
│ │ │ ├─ find-sessions.sh
│ │ │ └─ wait-for-text.sh
│ │ └─ SKILL.md
│ ├─ trello/
│ │ └─ SKILL.md
│ ├─ video-frames/
│ │ ├─ scripts/
│ │ │ └─ frame.sh
│ │ └─ SKILL.md
│ ├─ voice-call/
│ │ └─ SKILL.md
│ ├─ wacli/
│ │ └─ SKILL.md
│ └─ weather/
│ └─ SKILL.md
├─ src/
│ ├─ acp/
│ │ ├─ client.ts
│ │ ├─ commands.ts
│ │ ├─ event-mapper.test.ts
│ │ ├─ event-mapper.ts
│ │ ├─ index.ts
│ │ ├─ meta.ts
│ │ ├─ server.ts
│ │ ├─ session-mapper.test.ts
│ │ ├─ session-mapper.ts
│ │ ├─ session.test.ts
│ │ ├─ session.ts
│ │ ├─ translator.ts
│ │ └─ types.ts
│ ├─ agents/
│ │ ├─ auth-profiles/
│ │ │ ├─ constants.ts
│ │ │ ├─ display.ts
│ │ │ ├─ doctor.ts
│ │ │ ├─ external-cli-sync.ts
│ │ │ ├─ oauth.fallback-to-main-agent.test.ts
│ │ │ ├─ oauth.ts
│ │ │ ├─ order.ts
│ │ │ ├─ paths.ts
│ │ │ ├─ profiles.ts
│ │ │ ├─ repair.ts
│ │ │ ├─ session-override.test.ts
│ │ │ ├─ session-override.ts
│ │ │ ├─ store.ts
│ │ │ ├─ types.ts
│ │ │ └─ usage.ts
│ │ ├─ cli-runner/
│ │ │ └─ helpers.ts
│ │ ├─ pi-embedded-helpers/
│ │ │ ├─ bootstrap.ts
│ │ │ ├─ errors.ts
│ │ │ ├─ google.ts
│ │ │ ├─ images.ts
│ │ │ ├─ messaging-dedupe.ts
│ │ │ ├─ openai.ts
│ │ │ ├─ thinking.ts
│ │ │ ├─ turns.ts
│ │ │ └─ types.ts
│ │ ├─ pi-embedded-runner/
│ │ │ ├─ run/
│ │ │ │ ├─ attempt.test.ts
│ │ │ │ ├─ attempt.ts
│ │ │ │ ├─ images.test.ts
│ │ │ │ ├─ images.ts
│ │ │ │ ├─ params.ts
│ │ │ │ ├─ payloads.test.ts
│ │ │ │ ├─ payloads.ts
│ │ │ │ └─ types.ts
│ │ │ ├─ abort.ts
│ │ │ ├─ cache-ttl.ts
│ │ │ ├─ compact.ts
│ │ │ ├─ extensions.ts
│ │ │ ├─ extra-params.ts
│ │ │ ├─ google.test.ts
│ │ │ ├─ google.ts
│ │ │ ├─ history.ts
│ │ │ ├─ lanes.ts
│ │ │ ├─ logger.ts
│ │ │ ├─ model.test.ts
│ │ │ ├─ model.ts
│ │ │ ├─ run.overflow-compaction.test.ts
│ │ │ ├─ run.ts
│ │ │ ├─ runs.ts
│ │ │ ├─ sandbox-info.ts
│ │ │ ├─ session-manager-cache.ts
│ │ │ ├─ session-manager-init.ts
│ │ │ ├─ system-prompt.ts
│ │ │ ├─ tool-split.ts
│ │ │ ├─ types.ts
│ │ │ └─ utils.ts
│ │ ├─ pi-extensions/
│ │ │ ├─ context-pruning/
│ │ │ │ ├─ extension.ts
│ │ │ │ ├─ pruner.ts
│ │ │ │ ├─ runtime.ts
│ │ │ │ ├─ settings.ts
│ │ │ │ └─ tools.ts
│ │ │ ├─ compaction-safeguard-runtime.ts
│ │ │ ├─ compaction-safeguard.test.ts
│ │ │ ├─ compaction-safeguard.ts
│ │ │ ├─ context-pruning.test.ts
│ │ │ └─ context-pruning.ts
│ │ ├─ sandbox/
│ │ │ ├─ browser-bridges.ts
│ │ │ ├─ browser.ts
│ │ │ ├─ config-hash.ts
│ │ │ ├─ config.ts
│ │ │ ├─ constants.ts
│ │ │ ├─ context.ts
│ │ │ ├─ docker.ts
│ │ │ ├─ manage.ts
│ │ │ ├─ prune.ts
│ │ │ ├─ registry.ts
│ │ │ ├─ runtime-status.ts
│ │ │ ├─ shared.ts
│ │ │ ├─ tool-policy.test.ts
│ │ │ ├─ tool-policy.ts
│ │ │ ├─ types.docker.ts
│ │ │ ├─ types.ts
│ │ │ └─ workspace.ts
│ │ ├─ schema/
│ │ │ ├─ clean-for-gemini.ts
│ │ │ └─ typebox.ts
│ │ ├─ skills/
│ │ │ ├─ bundled-context.ts
│ │ │ ├─ bundled-dir.test.ts
│ │ │ ├─ bundled-dir.ts
│ │ │ ├─ config.ts
│ │ │ ├─ env-overrides.ts
│ │ │ ├─ frontmatter.test.ts
│ │ │ ├─ frontmatter.ts
│ │ │ ├─ plugin-skills.ts
│ │ │ ├─ refresh.test.ts
│ │ │ ├─ refresh.ts
│ │ │ ├─ serialize.ts
│ │ │ ├─ types.ts
│ │ │ └─ workspace.ts
│ │ ├─ test-helpers/
│ │ │ ├─ fast-coding-tools.ts
│ │ │ └─ fast-core-tools.ts
│ │ ├─ tools/
│ │ │ ├─ agent-step.ts
│ │ │ ├─ agents-list-tool.ts
│ │ │ ├─ browser-tool.schema.ts
│ │ │ ├─ browser-tool.test.ts
│ │ │ ├─ browser-tool.ts
│ │ │ ├─ canvas-tool.ts
│ │ │ ├─ common.test.ts
│ │ │ ├─ common.ts
│ │ │ ├─ cron-tool.test.ts
│ │ │ ├─ cron-tool.ts
│ │ │ ├─ discord-actions-guild.ts
│ │ │ ├─ discord-actions-messaging.ts
│ │ │ ├─ discord-actions-moderation.ts
│ │ │ ├─ discord-actions-presence.test.ts
│ │ │ ├─ discord-actions-presence.ts
│ │ │ ├─ discord-actions.test.ts
│ │ │ ├─ discord-actions.ts
│ │ │ ├─ gateway-tool.ts
│ │ │ ├─ gateway.test.ts
│ │ │ ├─ gateway.ts
│ │ │ ├─ image-tool.helpers.ts
│ │ │ ├─ image-tool.test.ts
│ │ │ ├─ image-tool.ts
│ │ │ ├─ memory-tool.citations.test.ts
│ │ │ ├─ memory-tool.does-not-crash-on-errors.test.ts
│ │ │ ├─ memory-tool.ts
│ │ │ ├─ message-tool.test.ts
│ │ │ ├─ message-tool.ts
│ │ │ ├─ nodes-tool.ts
│ │ │ ├─ nodes-utils.ts
│ │ │ ├─ session-status-tool.ts
│ │ │ ├─ sessions-announce-target.test.ts
│ │ │ ├─ sessions-announce-target.ts
│ │ │ ├─ sessions-helpers.test.ts
│ │ │ ├─ sessions-helpers.ts
│ │ │ ├─ sessions-history-tool.ts
│ │ │ ├─ sessions-list-tool.gating.test.ts
│ │ │ ├─ sessions-list-tool.ts
│ │ │ ├─ sessions-send-helpers.ts
│ │ │ ├─ sessions-send-tool.a2a.ts
│ │ │ ├─ sessions-send-tool.gating.test.ts
│ │ │ ├─ sessions-send-tool.ts
│ │ │ ├─ sessions-spawn-tool.ts
│ │ │ ├─ slack-actions.test.ts
│ │ │ ├─ slack-actions.ts
│ │ │ ├─ telegram-actions.test.ts
│ │ │ ├─ telegram-actions.ts
│ │ │ ├─ tts-tool.ts
│ │ │ ├─ web-fetch-utils.ts
│ │ │ ├─ web-fetch.ssrf.test.ts
│ │ │ ├─ web-fetch.ts
│ │ │ ├─ web-search.test.ts
│ │ │ ├─ web-search.ts
│ │ │ ├─ web-shared.ts
│ │ │ ├─ web-tools.enabled-defaults.test.ts
│ │ │ ├─ web-tools.fetch.test.ts
│ │ │ ├─ web-tools.readability.test.ts
│ │ │ ├─ web-tools.ts
│ │ │ ├─ whatsapp-actions.test.ts
│ │ │ └─ whatsapp-actions.ts
│ │ ├─ agent-paths.test.ts
│ │ ├─ agent-paths.ts
│ │ ├─ agent-scope.test.ts
│ │ ├─ agent-scope.ts
│ │ ├─ anthropic-payload-log.ts
│ │ ├─ anthropic.setup-token.live.test.ts
│ │ ├─ apply-patch-update.ts
│ │ ├─ apply-patch.test.ts
│ │ ├─ apply-patch.ts
│ │ ├─ auth-health.test.ts
│ │ ├─ auth-health.ts
│ │ ├─ auth-profiles.auth-profile-cooldowns.test.ts
│ │ ├─ auth-profiles.chutes.test.ts
│ │ ├─ auth-profiles.ensureauthprofilestore.test.ts
│ │ ├─ auth-profiles.markauthprofilefailure.test.ts
│ │ ├─ auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts
│ │ ├─ auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts
│ │ ├─ auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts
│ │ ├─ auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts
│ │ ├─ auth-profiles.ts
│ │ ├─ bash-process-registry.test.ts
│ │ ├─ bash-process-registry.ts
│ │ ├─ bash-tools.exec.approval-id.test.ts
│ │ ├─ bash-tools.exec.background-abort.test.ts
│ │ ├─ bash-tools.exec.path.test.ts
│ │ ├─ bash-tools.exec.pty-fallback.test.ts
│ │ ├─ bash-tools.exec.pty.test.ts
│ │ ├─ bash-tools.exec.ts
│ │ ├─ bash-tools.process.send-keys.test.ts
│ │ ├─ bash-tools.process.ts
│ │ ├─ bash-tools.shared.ts
│ │ ├─ bash-tools.test.ts
│ │ ├─ bash-tools.ts
│ │ ├─ bedrock-discovery.test.ts
│ │ ├─ bedrock-discovery.ts
│ │ ├─ bootstrap-files.test.ts
│ │ ├─ bootstrap-files.ts
│ │ ├─ bootstrap-hooks.test.ts
│ │ ├─ bootstrap-hooks.ts
│ │ ├─ cache-trace.test.ts
│ │ ├─ cache-trace.ts
│ │ ├─ channel-tools.test.ts
│ │ ├─ channel-tools.ts
│ │ ├─ chutes-oauth.test.ts
│ │ ├─ chutes-oauth.ts
│ │ ├─ claude-cli-runner.test.ts
│ │ ├─ claude-cli-runner.ts
│ │ ├─ cli-backends.ts
│ │ ├─ cli-credentials.test.ts
│ │ ├─ cli-credentials.ts
│ │ ├─ cli-runner.test.ts
│ │ ├─ cli-runner.ts
│ │ ├─ cli-session.ts
│ │ ├─ cloudflare-ai-gateway.ts
│ │ ├─ compaction.test.ts
│ │ ├─ compaction.ts
│ │ ├─ context-window-guard.test.ts
│ │ ├─ context-window-guard.ts
│ │ ├─ context.ts
│ │ ├─ date-time.ts
│ │ ├─ defaults.ts
│ │ ├─ docs-path.ts
│ │ ├─ failover-error.test.ts
│ │ ├─ failover-error.ts
│ │ ├─ gensparx-tools.ts
│ │ ├─ google-gemini-switch.live.test.ts
│ │ ├─ identity-avatar.test.ts
│ │ ├─ identity-avatar.ts
│ │ ├─ identity-file.test.ts
│ │ ├─ identity-file.ts
│ │ ├─ identity.per-channel-prefix.test.ts
│ │ ├─ identity.test.ts
│ │ ├─ identity.ts
│ │ ├─ lanes.ts
│ │ ├─ live-auth-keys.ts
│ │ ├─ live-model-filter.ts
│ │ ├─ memory-search.test.ts
│ │ ├─ memory-search.ts
│ │ ├─ minimax-vlm.ts
│ │ ├─ minimax.live.test.ts
│ │ ├─ model-auth.test.ts
│ │ ├─ model-auth.ts
│ │ ├─ model-catalog.test.ts
│ │ ├─ model-catalog.ts
│ │ ├─ model-compat.test.ts
│ │ ├─ model-compat.ts
│ │ ├─ model-fallback.test.ts
│ │ ├─ model-fallback.ts
│ │ ├─ model-scan.test.ts
│ │ ├─ model-scan.ts
│ │ ├─ model-selection.test.ts
│ │ ├─ model-selection.ts
│ │ ├─ models-config.auto-injects-github-copilot-provider-token-is.test.ts
│ │ ├─ models-config.falls-back-default-baseurl-token-exchange-fails.test.ts
│ │ ├─ models-config.fills-missing-provider-apikey-from-env-var.test.ts
│ │ ├─ models-config.normalizes-gemini-3-ids-preview-google-providers.test.ts
│ │ ├─ models-config.providers.ollama.test.ts
│ │ ├─ models-config.providers.ts
│ │ ├─ models-config.skips-writing-models-json-no-env-token.test.ts
│ │ ├─ models-config.ts
│ │ ├─ models-config.uses-first-github-copilot-profile-env-tokens.test.ts
│ │ ├─ models.profiles.live.test.ts
│ │ ├─ openai-responses.reasoning-replay.test.ts
│ │ ├─ openclaw-gateway-tool.test.ts
│ │ ├─ openclaw-tools.agents.test.ts
│ │ ├─ openclaw-tools.camera.test.ts
│ │ ├─ openclaw-tools.session-status.test.ts
│ │ ├─ openclaw-tools.sessions.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-allows-cross-agent-spawning-configured.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-announces-agent-wait-lifecycle-events.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-applies-model-child-session.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-applies-thinking-default.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-normalizes-allowlisted-agent-ids.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-prefers-per-agent-subagent-model.test.ts
│ │ ├─ openclaw-tools.subagents.sessions-spawn-resolves-main-announce-target-from.test.ts
│ │ ├─ openclaw-tools.ts
│ │ ├─ opencode-zen-models.test.ts
│ │ ├─ opencode-zen-models.ts
│ │ ├─ pi-embedded-block-chunker.test.ts
│ │ ├─ pi-embedded-block-chunker.ts
│ │ ├─ pi-embedded-helpers.buildbootstrapcontextfiles.test.ts
│ │ ├─ pi-embedded-helpers.classifyfailoverreason.test.ts
│ │ ├─ pi-embedded-helpers.downgradeopenai-reasoning.test.ts
│ │ ├─ pi-embedded-helpers.formatassistanterrortext.test.ts
│ │ ├─ pi-embedded-helpers.formatrawassistanterrorforui.test.ts
│ │ ├─ pi-embedded-helpers.image-dimension-error.test.ts
│ │ ├─ pi-embedded-helpers.image-size-error.test.ts
│ │ ├─ pi-embedded-helpers.isautherrormessage.test.ts
│ │ ├─ pi-embedded-helpers.isbillingerrormessage.test.ts
│ │ ├─ pi-embedded-helpers.iscloudcodeassistformaterror.test.ts
│ │ ├─ pi-embedded-helpers.iscompactionfailureerror.test.ts
│ │ ├─ pi-embedded-helpers.iscontextoverflowerror.test.ts
│ │ ├─ pi-embedded-helpers.isfailovererrormessage.test.ts
│ │ ├─ pi-embedded-helpers.islikelycontextoverflowerror.test.ts
│ │ ├─ pi-embedded-helpers.ismessagingtoolduplicate.test.ts
│ │ ├─ pi-embedded-helpers.messaging-duplicate.test.ts
│ │ ├─ pi-embedded-helpers.normalizetextforcomparison.test.ts
│ │ ├─ pi-embedded-helpers.resolvebootstrapmaxchars.test.ts
│ │ ├─ pi-embedded-helpers.sanitize-session-messages-images.keeps-tool-call-tool-result-ids-unchanged.test.ts
│ │ ├─ pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts
│ │ ├─ pi-embedded-helpers.sanitizegoogleturnordering.test.ts
│ │ ├─ pi-embedded-helpers.sanitizesessionmessagesimages-thought-signature-stripping.test.ts
│ │ ├─ pi-embedded-helpers.sanitizetoolcallid.test.ts
│ │ ├─ pi-embedded-helpers.sanitizeuserfacingtext.test.ts
│ │ ├─ pi-embedded-helpers.stripthoughtsignatures.test.ts
│ │ ├─ pi-embedded-helpers.ts
│ │ ├─ pi-embedded-helpers.validate-turns.test.ts
│ │ ├─ pi-embedded-messaging.ts
│ │ ├─ pi-embedded-runner-extraparams.live.test.ts
│ │ ├─ pi-embedded-runner-extraparams.test.ts
│ │ ├─ pi-embedded-runner.applygoogleturnorderingfix.test.ts
│ │ ├─ pi-embedded-runner.buildembeddedsandboxinfo.test.ts
│ │ ├─ pi-embedded-runner.createsystempromptoverride.test.ts
│ │ ├─ pi-embedded-runner.get-dm-history-limit-from-session-key.falls-back-provider-default-per-dm-not.test.ts
│ │ ├─ pi-embedded-runner.get-dm-history-limit-from-session-key.returns-undefined-sessionkey-is-undefined.test.ts
│ │ ├─ pi-embedded-runner.google-sanitize-thinking.test.ts
│ │ ├─ pi-embedded-runner.guard.test.ts
│ │ ├─ pi-embedded-runner.limithistoryturns.test.ts
│ │ ├─ pi-embedded-runner.resolvesessionagentids.test.ts
│ │ ├─ pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.test.ts
│ │ ├─ pi-embedded-runner.sanitize-session-history.test.ts
│ │ ├─ pi-embedded-runner.splitsdktools.test.ts
│ │ ├─ pi-embedded-runner.test.ts
│ │ ├─ pi-embedded-runner.ts
│ │ ├─ pi-embedded-subscribe.code-span-awareness.test.ts
│ │ ├─ pi-embedded-subscribe.handlers.lifecycle.ts
│ │ ├─ pi-embedded-subscribe.handlers.messages.ts
│ │ ├─ pi-embedded-subscribe.handlers.tools.ts
│ │ ├─ pi-embedded-subscribe.handlers.ts
│ │ ├─ pi-embedded-subscribe.handlers.types.ts
│ │ ├─ pi-embedded-subscribe.raw-stream.ts
│ │ ├─ pi-embedded-subscribe.reply-tags.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.calls-onblockreplyflush-before-tool-execution-start-preserve.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-append-text-end-content-is.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-call-onblockreplyflush-callback-is-not.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-duplicate-text-end-repeats-full.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.does-not-emit-duplicate-block-replies-text.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.emits-block-replies-text-end-does-not.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.emits-reasoning-as-separate-message-enabled.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.includes-canvas-action-metadata-tool-summaries.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.keeps-assistanttexts-final-answer-block-replies-are.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.keeps-indented-fenced-blocks-intact.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.reopens-fenced-blocks-splitting-inside-them.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.splits-long-single-line-fenced-blocks-reopen.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.streams-soft-chunks-paragraph-preference.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts
│ │ ├─ pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts
│ │ ├─ pi-embedded-subscribe.tools.test.ts
│ │ ├─ pi-embedded-subscribe.tools.ts
│ │ ├─ pi-embedded-subscribe.ts
│ │ ├─ pi-embedded-subscribe.types.ts
│ │ ├─ pi-embedded-utils.test.ts
│ │ ├─ pi-embedded-utils.ts
│ │ ├─ pi-embedded.ts
│ │ ├─ pi-model-discovery.ts
│ │ ├─ pi-settings.test.ts
│ │ ├─ pi-settings.ts
│ │ ├─ pi-tool-definition-adapter.test.ts
│ │ ├─ pi-tool-definition-adapter.ts
│ │ ├─ pi-tools-agent-config.test.ts
│ │ ├─ pi-tools.abort.ts
│ │ ├─ pi-tools.before-tool-call.test.ts
│ │ ├─ pi-tools.before-tool-call.ts
│ │ ├─ pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-b.test.ts
│ │ ├─ pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-d.test.ts
│ │ ├─ pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping-f.test.ts
│ │ ├─ pi-tools.create-openclaw-coding-tools.adds-claude-style-aliases-schemas-without-dropping.test.ts
│ │ ├─ pi-tools.policy.test.ts
│ │ ├─ pi-tools.policy.ts
│ │ ├─ pi-tools.read.ts
│ │ ├─ pi-tools.safe-bins.test.ts
│ │ ├─ pi-tools.schema.ts
│ │ ├─ pi-tools.ts
│ │ ├─ pi-tools.types.ts
│ │ ├─ pi-tools.whatsapp-login-gating.test.ts
│ │ ├─ pi-tools.workspace-paths.test.ts
│ │ ├─ pty-dsr.test.ts
│ │ ├─ pty-dsr.ts
│ │ ├─ pty-keys.test.ts
│ │ ├─ pty-keys.ts
│ │ ├─ sandbox-agent-config.agent-specific-sandbox-config.includes-session-status-default-sandbox-allowlist.test.ts
│ │ ├─ sandbox-agent-config.agent-specific-sandbox-config.should-allow-agent-specific-docker-settings-beyond.test.ts
│ │ ├─ sandbox-agent-config.agent-specific-sandbox-config.should-use-agent-specific-workspaceroot.test.ts
│ │ ├─ sandbox-agent-config.agent-specific-sandbox-config.should-use-global-sandbox-config-no-agent.test.ts
│ │ ├─ sandbox-create-args.test.ts
│ │ ├─ sandbox-explain.test.ts
│ │ ├─ sandbox-merge.test.ts
│ │ ├─ sandbox-paths.ts
│ │ ├─ sandbox-skills.test.ts
│ │ ├─ sandbox.resolveSandboxContext.test.ts
│ │ ├─ sandbox.ts
│ │ ├─ session-file-repair.test.ts
│ │ ├─ session-file-repair.ts
│ │ ├─ session-slug.test.ts
│ │ ├─ session-slug.ts
│ │ ├─ session-tool-result-guard-wrapper.ts
│ │ ├─ session-tool-result-guard.test.ts
│ │ ├─ session-tool-result-guard.tool-result-persist-hook.test.ts
│ │ ├─ session-tool-result-guard.ts
│ │ ├─ session-transcript-repair.test.ts
│ │ ├─ session-transcript-repair.ts
│ │ ├─ session-write-lock.test.ts
│ │ ├─ session-write-lock.ts
│ │ ├─ shell-utils.test.ts
│ │ ├─ shell-utils.ts
│ │ ├─ skills-install.ts
│ │ ├─ skills-status.ts
│ │ ├─ skills.build-workspace-skills-prompt.applies-bundled-allowlist-without-affecting-workspace-skills.test.ts
│ │ ├─ skills.build-workspace-skills-prompt.prefers-workspace-skills-managed-skills.test.ts
│ │ ├─ skills.build-workspace-skills-prompt.syncs-merged-skills-into-target-workspace.test.ts
│ │ ├─ skills.buildworkspaceskillsnapshot.test.ts
│ │ ├─ skills.buildworkspaceskillstatus.test.ts
│ │ ├─ skills.loadworkspaceskillentries.test.ts
│ │ ├─ skills.resolveskillspromptforrun.test.ts
│ │ ├─ skills.summarize-skill-description.test.ts
│ │ ├─ skills.test.ts
│ │ ├─ skills.ts
│ │ ├─ subagent-announce-queue.ts
│ │ ├─ subagent-announce.format.test.ts
│ │ ├─ subagent-announce.ts
│ │ ├─ subagent-registry.persistence.test.ts
│ │ ├─ subagent-registry.store.ts
│ │ ├─ subagent-registry.ts
│ │ ├─ synthetic-models.ts
│ │ ├─ system-prompt-params.test.ts
│ │ ├─ system-prompt-params.ts
│ │ ├─ system-prompt-report.ts
│ │ ├─ system-prompt.test.ts
│ │ ├─ system-prompt.ts
│ │ ├─ timeout.ts
│ │ ├─ tool-call-id.test.ts
│ │ ├─ tool-call-id.ts
│ │ ├─ tool-display.json
│ │ ├─ tool-display.test.ts
│ │ ├─ tool-display.ts
│ │ ├─ tool-images.test.ts
│ │ ├─ tool-images.ts
│ │ ├─ tool-policy.conformance.test.ts
│ │ ├─ tool-policy.conformance.ts
│ │ ├─ tool-policy.plugin-only-allowlist.test.ts
│ │ ├─ tool-policy.test.ts
│ │ ├─ tool-policy.ts
│ │ ├─ tool-summaries.ts
│ │ ├─ transcript-policy.ts
│ │ ├─ usage.test.ts
│ │ ├─ usage.ts
│ │ ├─ venice-models.ts
│ │ ├─ workspace-templates.test.ts
│ │ ├─ workspace-templates.ts
│ │ ├─ workspace.test.ts
│ │ ├─ workspace.ts
│ │ └─ zai.live.test.ts
│ ├─ auto-reply/
│ │ ├─ reply/
│ │ │ ├─ exec/
│ │ │ │ └─ directive.ts
│ │ │ ├─ queue/
│ │ │ │ ├─ cleanup.ts
│ │ │ │ ├─ directive.ts
│ │ │ │ ├─ drain.ts
│ │ │ │ ├─ enqueue.ts
│ │ │ │ ├─ normalize.ts
│ │ │ │ ├─ settings.ts
│ │ │ │ ├─ state.ts
│ │ │ │ └─ types.ts
│ │ │ ├─ abort.test.ts
│ │ │ ├─ abort.ts
│ │ │ ├─ agent-runner-execution.ts
│ │ │ ├─ agent-runner-helpers.ts
│ │ │ ├─ agent-runner-memory.ts
│ │ │ ├─ agent-runner-payloads.ts
│ │ │ ├─ agent-runner-utils.test.ts
│ │ │ ├─ agent-runner-utils.ts
│ │ │ ├─ agent-runner.authprofileid-fallback.test.ts
│ │ │ ├─ agent-runner.block-streaming.test.ts
│ │ │ ├─ agent-runner.claude-cli.test.ts
│ │ │ ├─ agent-runner.heartbeat-typing.runreplyagent-typing-heartbeat.resets-corrupted-gemini-sessions-deletes-transcripts.test.ts
│ │ │ ├─ agent-runner.heartbeat-typing.runreplyagent-typing-heartbeat.retries-after-compaction-failure-by-resetting-session.test.ts
│ │ │ ├─ agent-runner.heartbeat-typing.runreplyagent-typing-heartbeat.signals-typing-block-replies.test.ts
│ │ │ ├─ agent-runner.heartbeat-typing.runreplyagent-typing-heartbeat.signals-typing-normal-runs.test.ts
│ │ │ ├─ agent-runner.heartbeat-typing.runreplyagent-typing-heartbeat.still-replies-even-if-session-reset-fails.test.ts
│ │ │ ├─ agent-runner.memory-flush.runreplyagent-memory-flush.increments-compaction-count-flush-compaction-completes.test.ts
│ │ │ ├─ agent-runner.memory-flush.runreplyagent-memory-flush.runs-memory-flush-turn-updates-session-metadata.test.ts
│ │ │ ├─ agent-runner.memory-flush.runreplyagent-memory-flush.skips-memory-flush-cli-providers.test.ts
│ │ │ ├─ agent-runner.memory-flush.runreplyagent-memory-flush.skips-memory-flush-sandbox-workspace-is-read.test.ts
│ │ │ ├─ agent-runner.memory-flush.runreplyagent-memory-flush.uses-configured-prompts-memory-flush-runs.test.ts
│ │ │ ├─ agent-runner.messaging-tools.test.ts
│ │ │ ├─ agent-runner.reasoning-tags.test.ts
│ │ │ ├─ agent-runner.response-usage-footer.test.ts
│ │ │ ├─ agent-runner.ts
│ │ │ ├─ audio-tags.ts
│ │ │ ├─ bash-command.ts
│ │ │ ├─ block-reply-coalescer.ts
│ │ │ ├─ block-reply-pipeline.ts
│ │ │ ├─ block-streaming.ts
│ │ │ ├─ body.ts
│ │ │ ├─ commands-allowlist.ts
│ │ │ ├─ commands-approve.test.ts
│ │ │ ├─ commands-approve.ts
│ │ │ ├─ commands-bash.ts
│ │ │ ├─ commands-compact.ts
│ │ │ ├─ commands-config.ts
│ │ │ ├─ commands-context-report.ts
│ │ │ ├─ commands-context.ts
│ │ │ ├─ commands-core.ts
│ │ │ ├─ commands-info.test.ts
│ │ │ ├─ commands-info.ts
│ │ │ ├─ commands-models.ts
│ │ │ ├─ commands-parsing.test.ts
│ │ │ ├─ commands-plugin.ts
│ │ │ ├─ commands-policy.test.ts
│ │ │ ├─ commands-ptt.ts
│ │ │ ├─ commands-session.ts
│ │ │ ├─ commands-status.ts
│ │ │ ├─ commands-subagents.ts
│ │ │ ├─ commands-tts.ts
│ │ │ ├─ commands-types.ts
│ │ │ ├─ commands.test.ts
│ │ │ ├─ commands.ts
│ │ │ ├─ config-commands.ts
│ │ │ ├─ config-value.ts
│ │ │ ├─ debug-commands.ts
│ │ │ ├─ directive-handling.auth.ts
│ │ │ ├─ directive-handling.fast-lane.ts
│ │ │ ├─ directive-handling.impl.ts
│ │ │ ├─ directive-handling.model-picker.ts
│ │ │ ├─ directive-handling.model.test.ts
│ │ │ ├─ directive-handling.model.ts
│ │ │ ├─ directive-handling.parse.ts
│ │ │ ├─ directive-handling.persist.ts
│ │ │ ├─ directive-handling.queue-validation.ts
│ │ │ ├─ directive-handling.shared.ts
│ │ │ ├─ directive-handling.ts
│ │ │ ├─ directives.ts
│ │ │ ├─ dispatch-from-config.test.ts
│ │ │ ├─ dispatch-from-config.ts
│ │ │ ├─ exec.ts
│ │ │ ├─ followup-runner.test.ts
│ │ │ ├─ followup-runner.ts
│ │ │ ├─ formatting.test.ts
│ │ │ ├─ get-reply-directives-apply.ts
│ │ │ ├─ get-reply-directives-utils.ts
│ │ │ ├─ get-reply-directives.ts
│ │ │ ├─ get-reply-inline-actions.ts
│ │ │ ├─ get-reply-run.ts
│ │ │ ├─ get-reply.ts
│ │ │ ├─ groups.ts
│ │ │ ├─ history.test.ts
│ │ │ ├─ history.ts
│ │ │ ├─ inbound-context.ts
│ │ │ ├─ inbound-dedupe.ts
│ │ │ ├─ inbound-sender-meta.ts
│ │ │ ├─ inbound-text.ts
│ │ │ ├─ line-directives.test.ts
│ │ │ ├─ line-directives.ts
│ │ │ ├─ memory-flush.test.ts
│ │ │ ├─ memory-flush.ts
│ │ │ ├─ mentions.test.ts
│ │ │ ├─ mentions.ts
│ │ │ ├─ model-selection.inherit-parent.test.ts
│ │ │ ├─ model-selection.ts
│ │ │ ├─ normalize-reply.test.ts
│ │ │ ├─ normalize-reply.ts
│ │ │ ├─ provider-dispatcher.ts
│ │ │ ├─ queue.collect-routing.test.ts
│ │ │ ├─ queue.ts
│ │ │ ├─ reply-directives.ts
│ │ │ ├─ reply-dispatcher.ts
│ │ │ ├─ reply-elevated.ts
│ │ │ ├─ reply-inline.ts
│ │ │ ├─ reply-payloads.ts
│ │ │ ├─ reply-reference.ts
│ │ │ ├─ reply-routing.test.ts
│ │ │ ├─ reply-tags.ts
│ │ │ ├─ reply-threading.ts
│ │ │ ├─ response-prefix-template.test.ts
│ │ │ ├─ response-prefix-template.ts
│ │ │ ├─ route-reply.test.ts
│ │ │ ├─ route-reply.ts
│ │ │ ├─ session-reset-model.ts
│ │ │ ├─ session-resets.test.ts
│ │ │ ├─ session-updates.ts
│ │ │ ├─ session-usage.ts
│ │ │ ├─ session.test.ts
│ │ │ ├─ session.ts
│ │ │ ├─ stage-sandbox-media.ts
│ │ │ ├─ streaming-directives.ts
│ │ │ ├─ subagents-utils.test.ts
│ │ │ ├─ subagents-utils.ts
│ │ │ ├─ test-ctx.ts
│ │ │ ├─ test-helpers.ts
│ │ │ ├─ typing-mode.ts
│ │ │ ├─ typing.test.ts
│ │ │ ├─ typing.ts
│ │ │ └─ untrusted-context.ts
│ │ ├─ chunk.test.ts
│ │ ├─ chunk.ts
│ │ ├─ command-auth.ts
│ │ ├─ command-control.test.ts
│ │ ├─ command-detection.ts
│ │ ├─ commands-args.ts
│ │ ├─ commands-registry.data.ts
│ │ ├─ commands-registry.test.ts
│ │ ├─ commands-registry.ts
│ │ ├─ commands-registry.types.ts
│ │ ├─ dispatch.ts
│ │ ├─ envelope.test.ts
│ │ ├─ envelope.ts
│ │ ├─ group-activation.ts
│ │ ├─ heartbeat.test.ts
│ │ ├─ heartbeat.ts
│ │ ├─ inbound-debounce.ts
│ │ ├─ inbound.test.ts
│ │ ├─ media-note.test.ts
│ │ ├─ media-note.ts
│ │ ├─ model.test.ts
│ │ ├─ model.ts
│ │ ├─ reply.block-streaming.test.ts
│ │ ├─ reply.directive.directive-behavior.accepts-thinking-xhigh-codex-models.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.applies-inline-reasoning-mixed-messages-acks-immediately.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.defaults-think-low-reasoning-capable-models-no.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.ignores-inline-model-uses-default-model.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.lists-allowlisted-models-model-list.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.requires-per-agent-allowlist-addition-global.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.returns-status-alongside-directive-only-acks.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.shows-current-elevated-level-as-off-after.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.supports-fuzzy-model-matches-model-directive.e2e.test.ts
│ │ ├─ reply.directive.directive-behavior.updates-tool-verbose-during-flight-run-toggle.e2e.test.ts
│ │ ├─ reply.directive.parse.test.ts
│ │ ├─ reply.heartbeat-typing.test.ts
│ │ ├─ reply.media-note.test.ts
│ │ ├─ reply.queue.test.ts
│ │ ├─ reply.raw-body.test.ts
│ │ ├─ reply.triggers.group-intro-prompts.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.allows-activation-from-allowfrom-groups.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.allows-approved-sender-toggle-elevated-mode.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.allows-elevated-off-groups-without-mention.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.handles-inline-commands-strips-it-before-agent.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.ignores-inline-elevated-directive-unapproved-sender.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.includes-error-cause-embedded-agent-throws.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.keeps-inline-status-unauthorized-senders.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.reports-active-auth-profile-key-snippet-status.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.runs-compact-as-gated-command.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.runs-greeting-prompt-bare-reset.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.shows-endpoint-default-model-status-not-configured.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.shows-quick-model-picker-grouped-by-model.e2e.test.ts
│ │ ├─ reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.security.test.ts
│ │ ├─ reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts
│ │ ├─ reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts
│ │ ├─ reply.ts
│ │ ├─ send-policy.ts
│ │ ├─ skill-commands.test.ts
│ │ ├─ skill-commands.ts
│ │ ├─ status.test.ts
│ │ ├─ status.ts
│ │ ├─ templating.ts
│ │ ├─ thinking.test.ts
│ │ ├─ thinking.ts
│ │ ├─ tokens.ts
│ │ ├─ tool-meta.test.ts
│ │ ├─ tool-meta.ts
│ │ └─ types.ts
│ ├─ browser/
│ │ ├─ routes/
│ │ │ ├─ agent.act.shared.ts
│ │ │ ├─ agent.act.ts
│ │ │ ├─ agent.debug.ts
│ │ │ ├─ agent.shared.ts
│ │ │ ├─ agent.snapshot.ts
│ │ │ ├─ agent.storage.ts
│ │ │ ├─ agent.ts
│ │ │ ├─ basic.ts
│ │ │ ├─ dispatcher.ts
│ │ │ ├─ index.ts
│ │ │ ├─ tabs.ts
│ │ │ ├─ types.ts
│ │ │ ├─ utils.test.ts
│ │ │ └─ utils.ts
│ │ ├─ bridge-server.ts
│ │ ├─ cdp.helpers.test.ts
│ │ ├─ cdp.helpers.ts
│ │ ├─ cdp.test.ts
│ │ ├─ cdp.ts
│ │ ├─ chrome.default-browser.test.ts
│ │ ├─ chrome.executables.ts
│ │ ├─ chrome.profile-decoration.ts
│ │ ├─ chrome.test.ts
│ │ ├─ chrome.ts
│ │ ├─ client-actions-core.ts
│ │ ├─ client-actions-observe.ts
│ │ ├─ client-actions-state.ts
│ │ ├─ client-actions-types.ts
│ │ ├─ client-actions.ts
│ │ ├─ client-fetch.ts
│ │ ├─ client.test.ts
│ │ ├─ client.ts
│ │ ├─ config.test.ts
│ │ ├─ config.ts
│ │ ├─ constants.ts
│ │ ├─ control-service.ts
│ │ ├─ extension-relay.test.ts
│ │ ├─ extension-relay.ts
│ │ ├─ profiles-service.test.ts
│ │ ├─ profiles-service.ts
│ │ ├─ profiles.test.ts
│ │ ├─ profiles.ts
│ │ ├─ pw-ai-module.ts
│ │ ├─ pw-ai.test.ts
│ │ ├─ pw-ai.ts
│ │ ├─ pw-role-snapshot.test.ts
│ │ ├─ pw-role-snapshot.ts
│ │ ├─ pw-session.browserless.live.test.ts
│ │ ├─ pw-session.get-page-for-targetid.extension-fallback.test.ts
│ │ ├─ pw-session.test.ts
│ │ ├─ pw-session.ts
│ │ ├─ pw-tools-core.activity.ts
│ │ ├─ pw-tools-core.clamps-timeoutms-scrollintoview.test.ts
│ │ ├─ pw-tools-core.downloads.ts
│ │ ├─ pw-tools-core.interactions.ts
│ │ ├─ pw-tools-core.last-file-chooser-arm-wins.test.ts
│ │ ├─ pw-tools-core.responses.ts
│ │ ├─ pw-tools-core.screenshots-element-selector.test.ts
│ │ ├─ pw-tools-core.shared.ts
│ │ ├─ pw-tools-core.snapshot.ts
│ │ ├─ pw-tools-core.state.ts
│ │ ├─ pw-tools-core.storage.ts
│ │ ├─ pw-tools-core.trace.ts
│ │ ├─ pw-tools-core.ts
│ │ ├─ pw-tools-core.waits-next-download-saves-it.test.ts
│ │ ├─ screenshot.test.ts
│ │ ├─ screenshot.ts
│ │ ├─ server-context.ensure-tab-available.prefers-last-target.test.ts
│ │ ├─ server-context.remote-tab-ops.test.ts
│ │ ├─ server-context.ts
│ │ ├─ server-context.types.ts
│ │ ├─ server.agent-contract-form-layout-act-commands.test.ts
│ │ ├─ server.agent-contract-snapshot-endpoints.test.ts
│ │ ├─ server.covers-additional-endpoint-branches.test.ts
│ │ ├─ server.post-tabs-open-profile-unknown-returns-404.test.ts
│ │ ├─ server.serves-status-starts-browser-requested.test.ts
│ │ ├─ server.skips-default-maxchars-explicitly-set-zero.test.ts
│ │ ├─ server.ts
│ │ ├─ target-id.test.ts
│ │ ├─ target-id.ts
│ │ └─ trash.ts
│ ├─ canvas-host/
│ │ ├─ a2ui/
│ │ │ ├─ .bundle.hash
│ │ │ ├─ a2ui.bundle.js
│ │ │ └─ index.html
│ │ ├─ a2ui.ts
│ │ ├─ server.test.ts
│ │ └─ server.ts
│ ├─ channels/
│ │ ├─ allowlists/
│ │ │ └─ resolve-utils.ts
│ │ ├─ plugins/
│ │ │ ├─ actions/
│ │ │ │ ├─ discord/
│ │ │ │ │ ├─ handle-action.guild-admin.ts
│ │ │ │ │ └─ handle-action.ts
│ │ │ │ ├─ discord.test.ts
│ │ │ │ ├─ discord.ts
│ │ │ │ ├─ signal.test.ts
│ │ │ │ ├─ signal.ts
│ │ │ │ ├─ telegram.test.ts
│ │ │ │ └─ telegram.ts
│ │ │ ├─ agent-tools/
│ │ │ │ └─ whatsapp-login.ts
│ │ │ ├─ normalize/
│ │ │ │ ├─ discord.ts
│ │ │ │ ├─ feishu.ts
│ │ │ │ ├─ imessage.test.ts
│ │ │ │ ├─ imessage.ts
│ │ │ │ ├─ signal.test.ts
│ │ │ │ ├─ signal.ts
│ │ │ │ ├─ slack.ts
│ │ │ │ ├─ telegram.ts
│ │ │ │ └─ whatsapp.ts
│ │ │ ├─ onboarding/
│ │ │ │ ├─ channel-access.ts
│ │ │ │ ├─ discord.ts
│ │ │ │ ├─ helpers.ts
│ │ │ │ ├─ imessage.ts
│ │ │ │ ├─ signal.ts
│ │ │ │ ├─ slack.ts
│ │ │ │ ├─ telegram.ts
│ │ │ │ └─ whatsapp.ts
│ │ │ ├─ outbound/
│ │ │ │ ├─ discord.ts
│ │ │ │ ├─ feishu.ts
│ │ │ │ ├─ imessage.ts
│ │ │ │ ├─ load.ts
│ │ │ │ ├─ signal.ts
│ │ │ │ ├─ slack.ts
│ │ │ │ ├─ telegram.test.ts
│ │ │ │ ├─ telegram.ts
│ │ │ │ └─ whatsapp.ts
│ │ │ ├─ status-issues/
│ │ │ │ ├─ bluebubbles.ts
│ │ │ │ ├─ discord.ts
│ │ │ │ ├─ shared.ts
│ │ │ │ ├─ telegram.ts
│ │ │ │ └─ whatsapp.ts
│ │ │ ├─ allowlist-match.ts
│ │ │ ├─ bluebubbles-actions.ts
│ │ │ ├─ catalog.test.ts
│ │ │ ├─ catalog.ts
│ │ │ ├─ channel-config.ts
│ │ │ ├─ config-helpers.ts
│ │ │ ├─ config-schema.ts
│ │ │ ├─ config-writes.test.ts
│ │ │ ├─ config-writes.ts
│ │ │ ├─ directory-config.test.ts
│ │ │ ├─ directory-config.ts
│ │ │ ├─ group-mentions.ts
│ │ │ ├─ helpers.ts
│ │ │ ├─ index.test.ts
│ │ │ ├─ index.ts
│ │ │ ├─ load.test.ts
│ │ │ ├─ load.ts
│ │ │ ├─ media-limits.ts
│ │ │ ├─ message-action-names.ts
│ │ │ ├─ message-actions.ts
│ │ │ ├─ onboarding-types.ts
│ │ │ ├─ pairing-message.ts
│ │ │ ├─ pairing.ts
│ │ │ ├─ setup-helpers.ts
│ │ │ ├─ slack.actions.test.ts
│ │ │ ├─ slack.actions.ts
│ │ │ ├─ status.ts
│ │ │ ├─ types.adapters.ts
│ │ │ ├─ types.core.ts
│ │ │ ├─ types.plugin.ts
│ │ │ ├─ types.ts
│ │ │ └─ whatsapp-heartbeat.ts
│ │ ├─ web/
│ │ │ ├─ index.test.ts
│ │ │ └─ index.ts
│ │ ├─ ack-reactions.test.ts
│ │ ├─ ack-reactions.ts
│ │ ├─ allowlist-match.ts
│ │ ├─ channel-config.test.ts
│ │ ├─ channel-config.ts
│ │ ├─ chat-type.test.ts
│ │ ├─ chat-type.ts
│ │ ├─ command-gating.test.ts
│ │ ├─ command-gating.ts
│ │ ├─ conversation-label.test.ts
│ │ ├─ conversation-label.ts
│ │ ├─ dock.ts
│ │ ├─ location.test.ts
│ │ ├─ location.ts
│ │ ├─ logging.ts
│ │ ├─ mention-gating.test.ts
│ │ ├─ mention-gating.ts
│ │ ├─ registry.test.ts
│ │ ├─ registry.ts
│ │ ├─ reply-prefix.ts
│ │ ├─ sender-identity.test.ts
│ │ ├─ sender-identity.ts
│ │ ├─ sender-label.ts
│ │ ├─ session.ts
│ │ ├─ targets.test.ts
│ │ ├─ targets.ts
│ │ ├─ typing.test.ts
│ │ └─ typing.ts
│ ├─ cli/
│ │ ├─ browser-cli-actions-input/
│ │ │ ├─ register.element.ts
│ │ │ ├─ register.files-downloads.ts
│ │ │ ├─ register.form-wait-eval.ts
│ │ │ ├─ register.navigation.ts
│ │ │ ├─ register.ts
│ │ │ └─ shared.ts
│ │ ├─ cron-cli/
│ │ │ ├─ register.cron-add.ts
│ │ │ ├─ register.cron-edit.ts
│ │ │ ├─ register.cron-simple.ts
│ │ │ ├─ register.ts
│ │ │ └─ shared.ts
│ │ ├─ daemon-cli/
│ │ │ ├─ install.ts
│ │ │ ├─ lifecycle.ts
│ │ │ ├─ probe.ts
│ │ │ ├─ register.ts
│ │ │ ├─ response.ts
│ │ │ ├─ runners.ts
│ │ │ ├─ shared.ts
│ │ │ ├─ status.gather.ts
│ │ │ ├─ status.print.ts
│ │ │ ├─ status.ts
│ │ │ └─ types.ts
│ │ ├─ gateway-cli/
│ │ │ ├─ call.ts
│ │ │ ├─ dev.ts
│ │ │ ├─ discover.ts
│ │ │ ├─ register.ts
│ │ │ ├─ run-loop.ts
│ │ │ ├─ run.ts
│ │ │ └─ shared.ts
│ │ ├─ node-cli/
│ │ │ ├─ daemon.ts
│ │ │ └─ register.ts
│ │ ├─ nodes-cli/
│ │ │ ├─ a2ui-jsonl.ts
│ │ │ ├─ cli-utils.ts
│ │ │ ├─ format.ts
│ │ │ ├─ register.camera.ts
│ │ │ ├─ register.canvas.ts
│ │ │ ├─ register.invoke.ts
│ │ │ ├─ register.location.ts
│ │ │ ├─ register.notify.ts
│ │ │ ├─ register.pairing.ts
│ │ │ ├─ register.screen.ts
│ │ │ ├─ register.status.ts
│ │ │ ├─ register.ts
│ │ │ ├─ rpc.ts
│ │ │ └─ types.ts
│ │ ├─ program/
│ │ │ ├─ message/
│ │ │ │ ├─ helpers.ts
│ │ │ │ ├─ register.broadcast.ts
│ │ │ │ ├─ register.discord-admin.ts
│ │ │ │ ├─ register.emoji-sticker.ts
│ │ │ │ ├─ register.permissions-search.ts
│ │ │ │ ├─ register.pins.ts
│ │ │ │ ├─ register.poll.ts
│ │ │ │ ├─ register.reactions.ts
│ │ │ │ ├─ register.read-edit-delete.ts
│ │ │ │ ├─ register.send.ts
│ │ │ │ └─ register.thread.ts
│ │ │ ├─ build-program.ts
│ │ │ ├─ command-registry.ts
│ │ │ ├─ config-guard.ts
│ │ │ ├─ context.ts
│ │ │ ├─ help.ts
│ │ │ ├─ helpers.ts
│ │ │ ├─ preaction.ts
│ │ │ ├─ register.agent.ts
│ │ │ ├─ register.configure.ts
│ │ │ ├─ register.maintenance.ts
│ │ │ ├─ register.message.ts
│ │ │ ├─ register.onboard.ts
│ │ │ ├─ register.setup.ts
│ │ │ ├─ register.status-health-sessions.ts
│ │ │ ├─ register.subclis.test.ts
│ │ │ └─ register.subclis.ts
│ │ ├─ acp-cli.ts
│ │ ├─ argv.test.ts
│ │ ├─ argv.ts
│ │ ├─ banner.ts
│ │ ├─ browser-cli-actions-input.ts
│ │ ├─ browser-cli-actions-observe.ts
│ │ ├─ browser-cli-debug.ts
│ │ ├─ browser-cli-examples.ts
│ │ ├─ browser-cli-extension.test.ts
│ │ ├─ browser-cli-extension.ts
│ │ ├─ browser-cli-inspect.test.ts
│ │ ├─ browser-cli-inspect.ts
│ │ ├─ browser-cli-manage.ts
│ │ ├─ browser-cli-shared.ts
│ │ ├─ browser-cli-state.cookies-storage.ts
│ │ ├─ browser-cli-state.ts
│ │ ├─ browser-cli.test.ts
│ │ ├─ browser-cli.ts
│ │ ├─ channel-auth.ts
│ │ ├─ channel-options.ts
│ │ ├─ channels-cli.ts
│ │ ├─ cli-name.ts
│ │ ├─ cli-utils.ts
│ │ ├─ command-format.ts
│ │ ├─ command-options.ts
│ │ ├─ completion-cli.ts
│ │ ├─ config-cli.ts
│ │ ├─ cron-cli.test.ts
│ │ ├─ cron-cli.ts
│ │ ├─ daemon-cli.coverage.test.ts
│ │ ├─ daemon-cli.ts
│ │ ├─ deps.ts
│ │ ├─ devices-cli.ts
│ │ ├─ directory-cli.ts
│ │ ├─ dns-cli.test.ts
│ │ ├─ dns-cli.ts
│ │ ├─ docs-cli.ts
│ │ ├─ exec-approvals-cli.test.ts
│ │ ├─ exec-approvals-cli.ts
│ │ ├─ gateway-cli.coverage.test.ts
│ │ ├─ gateway-cli.ts
│ │ ├─ gateway-rpc.ts
│ │ ├─ gateway.sigterm.test.ts
│ │ ├─ help-format.ts
│ │ ├─ hooks-cli.test.ts
│ │ ├─ hooks-cli.ts
│ │ ├─ logs-cli.test.ts
│ │ ├─ logs-cli.ts
│ │ ├─ memory-cli.test.ts
│ │ ├─ memory-cli.ts
│ │ ├─ models-cli.test.ts
│ │ ├─ models-cli.ts
│ │ ├─ node-cli.ts
│ │ ├─ nodes-camera.test.ts
│ │ ├─ nodes-camera.ts
│ │ ├─ nodes-canvas.test.ts
│ │ ├─ nodes-canvas.ts
│ │ ├─ nodes-cli.coverage.test.ts
│ │ ├─ nodes-cli.ts
│ │ ├─ nodes-run.ts
│ │ ├─ nodes-screen.test.ts
│ │ ├─ nodes-screen.ts
│ │ ├─ outbound-send-deps.ts
│ │ ├─ pairing-cli.test.ts
│ │ ├─ pairing-cli.ts
│ │ ├─ parse-duration.test.ts
│ │ ├─ parse-duration.ts
│ │ ├─ parse-timeout.ts
│ │ ├─ plugin-registry.ts
│ │ ├─ plugins-cli.ts
│ │ ├─ ports.ts
│ │ ├─ profile-utils.ts
│ │ ├─ profile.test.ts
│ │ ├─ profile.ts
│ │ ├─ program.force.test.ts
│ │ ├─ program.nodes-basic.test.ts
│ │ ├─ program.nodes-media.test.ts
│ │ ├─ program.smoke.test.ts
│ │ ├─ program.ts
│ │ ├─ progress.test.ts
│ │ ├─ progress.ts
│ │ ├─ prompt.test.ts
│ │ ├─ prompt.ts
│ │ ├─ route.ts
│ │ ├─ run-main.test.ts
│ │ ├─ run-main.ts
│ │ ├─ sandbox-cli.ts
│ │ ├─ security-cli.ts
│ │ ├─ skills-cli.test.ts
│ │ ├─ skills-cli.ts
│ │ ├─ system-cli.ts
│ │ ├─ tagline.ts
│ │ ├─ tui-cli.ts
│ │ ├─ update-cli.test.ts
│ │ ├─ update-cli.ts
│ │ ├─ wait.test.ts
│ │ ├─ wait.ts
│ │ └─ webhooks-cli.ts
│ ├─ commands/
│ │ ├─ agent/
│ │ │ ├─ delivery.ts
│ │ │ ├─ run-context.ts
│ │ │ ├─ session-store.ts
│ │ │ ├─ session.ts
│ │ │ └─ types.ts
│ │ ├─ channels/
│ │ │ ├─ add-mutators.ts
│ │ │ ├─ add.ts
│ │ │ ├─ capabilities.test.ts
│ │ │ ├─ capabilities.ts
│ │ │ ├─ list.ts
│ │ │ ├─ logs.ts
│ │ │ ├─ remove.ts
│ │ │ ├─ resolve.ts
│ │ │ ├─ shared.ts
│ │ │ └─ status.ts
│ │ ├─ gateway-status/
│ │ │ └─ helpers.ts
│ │ ├─ models/
│ │ │ ├─ aliases.ts
│ │ │ ├─ auth-order.ts
│ │ │ ├─ auth.ts
│ │ │ ├─ fallbacks.ts
│ │ │ ├─ image-fallbacks.ts
│ │ │ ├─ list.auth-overview.ts
│ │ │ ├─ list.configured.ts
│ │ │ ├─ list.format.ts
│ │ │ ├─ list.list-command.ts
│ │ │ ├─ list.probe.ts
│ │ │ ├─ list.registry.ts
│ │ │ ├─ list.status-command.ts
│ │ │ ├─ list.status.test.ts
│ │ │ ├─ list.table.ts
│ │ │ ├─ list.ts
│ │ │ ├─ list.types.ts
│ │ │ ├─ scan.ts
│ │ │ ├─ set-image.ts
│ │ │ ├─ set.ts
│ │ │ └─ shared.ts
│ │ ├─ onboard-non-interactive/
│ │ │ ├─ local/
│ │ │ │ ├─ auth-choice-inference.ts
│ │ │ │ ├─ auth-choice.ts
│ │ │ │ ├─ daemon-install.ts
│ │ │ │ ├─ gateway-config.ts
│ │ │ │ ├─ output.ts
│ │ │ │ ├─ skills-config.ts
│ │ │ │ └─ workspace.ts
│ │ │ ├─ api-keys.ts
│ │ │ ├─ local.ts
│ │ │ └─ remote.ts
│ │ ├─ onboarding/
│ │ │ ├─ **tests**/
│ │ │ │ └─ test-utils.ts
│ │ │ ├─ plugin-install.test.ts
│ │ │ ├─ plugin-install.ts
│ │ │ ├─ registry.ts
│ │ │ └─ types.ts
│ │ ├─ status-all/
│ │ │ ├─ agents.ts
│ │ │ ├─ channels.ts
│ │ │ ├─ diagnosis.ts
│ │ │ ├─ format.ts
│ │ │ ├─ gateway.ts
│ │ │ └─ report-lines.ts
│ │ ├─ agent-via-gateway.test.ts
│ │ ├─ agent-via-gateway.ts
│ │ ├─ agent.delivery.test.ts
│ │ ├─ agent.test.ts
│ │ ├─ agent.ts
│ │ ├─ agents.add.test.ts
│ │ ├─ agents.bindings.ts
│ │ ├─ agents.command-shared.ts
│ │ ├─ agents.commands.add.ts
│ │ ├─ agents.commands.delete.ts
│ │ ├─ agents.commands.identity.ts
│ │ ├─ agents.commands.list.ts
│ │ ├─ agents.config.ts
│ │ ├─ agents.identity.test.ts
│ │ ├─ agents.providers.ts
│ │ ├─ agents.test.ts
│ │ ├─ agents.ts
│ │ ├─ auth-choice-options.test.ts
│ │ ├─ auth-choice-options.ts
│ │ ├─ auth-choice-prompt.ts
│ │ ├─ auth-choice.api-key.ts
│ │ ├─ auth-choice.apply.anthropic.ts
│ │ ├─ auth-choice.apply.api-providers.ts
│ │ ├─ auth-choice.apply.copilot-proxy.ts
│ │ ├─ auth-choice.apply.github-copilot.ts
│ │ ├─ auth-choice.apply.google-antigravity.ts
│ │ ├─ auth-choice.apply.google-gemini-cli.ts
│ │ ├─ auth-choice.apply.minimax.ts
│ │ ├─ auth-choice.apply.oauth.ts
│ │ ├─ auth-choice.apply.openai.ts
│ │ ├─ auth-choice.apply.plugin-provider.ts
│ │ ├─ auth-choice.apply.qwen-portal.ts
│ │ ├─ auth-choice.apply.ts
│ │ ├─ auth-choice.default-model.ts
│ │ ├─ auth-choice.model-check.ts
│ │ ├─ auth-choice.moonshot.test.ts
│ │ ├─ auth-choice.preferred-provider.ts
│ │ ├─ auth-choice.test.ts
│ │ ├─ auth-choice.ts
│ │ ├─ auth-token.ts
│ │ ├─ channels.adds-non-default-telegram-account.test.ts
│ │ ├─ channels.surfaces-signal-runtime-errors-channels-status-output.test.ts
│ │ ├─ channels.ts
│ │ ├─ chutes-oauth.test.ts
│ │ ├─ chutes-oauth.ts
│ │ ├─ cleanup-utils.ts
│ │ ├─ configure.channels.ts
│ │ ├─ configure.commands.ts
│ │ ├─ configure.daemon.ts
│ │ ├─ configure.gateway-auth.test.ts
│ │ ├─ configure.gateway-auth.ts
│ │ ├─ configure.gateway.test.ts
│ │ ├─ configure.gateway.ts
│ │ ├─ configure.shared.ts
│ │ ├─ configure.ts
│ │ ├─ configure.wizard.test.ts
│ │ ├─ configure.wizard.ts
│ │ ├─ daemon-install-helpers.test.ts
│ │ ├─ daemon-install-helpers.ts
│ │ ├─ daemon-runtime.ts
│ │ ├─ dashboard.test.ts
│ │ ├─ dashboard.ts
│ │ ├─ docs.ts
│ │ ├─ doctor-auth.deprecated-cli-profiles.test.ts
│ │ ├─ doctor-auth.ts
│ │ ├─ doctor-completion.ts
│ │ ├─ doctor-config-flow.test.ts
│ │ ├─ doctor-config-flow.ts
│ │ ├─ doctor-format.ts
│ │ ├─ doctor-gateway-daemon-flow.ts
│ │ ├─ doctor-gateway-health.ts
│ │ ├─ doctor-gateway-services.ts
│ │ ├─ doctor-install.ts
│ │ ├─ doctor-legacy-config.test.ts
│ │ ├─ doctor-legacy-config.ts
│ │ ├─ doctor-platform-notes.launchctl-env-overrides.test.ts
│ │ ├─ doctor-platform-notes.ts
│ │ ├─ doctor-prompter.ts
│ │ ├─ doctor-sandbox.ts
│ │ ├─ doctor-security.test.ts
│ │ ├─ doctor-security.ts
│ │ ├─ doctor-state-integrity.ts
│ │ ├─ doctor-state-migrations.test.ts
│ │ ├─ doctor-state-migrations.ts
│ │ ├─ doctor-ui.ts
│ │ ├─ doctor-update.ts
│ │ ├─ doctor-workspace-status.ts
│ │ ├─ doctor-workspace.test.ts
│ │ ├─ doctor-workspace.ts
│ │ ├─ doctor.falls-back-legacy-sandbox-image-missing.test.ts
│ │ ├─ doctor.migrates-routing-allowfrom-channels-whatsapp-allowfrom.test.ts
│ │ ├─ doctor.runs-legacy-state-migrations-yes-mode-without.test.ts
│ │ ├─ doctor.ts
│ │ ├─ doctor.warns-per-agent-sandbox-docker-browser-prune.test.ts
│ │ ├─ doctor.warns-state-directory-is-missing.test.ts
│ │ ├─ gateway-status.test.ts
│ │ ├─ gateway-status.ts
│ │ ├─ google-gemini-model-default.test.ts
│ │ ├─ google-gemini-model-default.ts
│ │ ├─ health-format.test.ts
│ │ ├─ health-format.ts
│ │ ├─ health.command.coverage.test.ts
│ │ ├─ health.snapshot.test.ts
│ │ ├─ health.test.ts
│ │ ├─ health.ts
│ │ ├─ message-format.ts
│ │ ├─ message.test.ts
│ │ ├─ message.ts
│ │ ├─ model-picker.test.ts
│ │ ├─ model-picker.ts
│ │ ├─ models.list.test.ts
│ │ ├─ models.set.test.ts
│ │ ├─ models.ts
│ │ ├─ node-daemon-install-helpers.ts
│ │ ├─ node-daemon-runtime.ts
│ │ ├─ oauth-env.ts
│ │ ├─ oauth-flow.ts
│ │ ├─ onboard-auth.config-core.ts
│ │ ├─ onboard-auth.config-minimax.ts
│ │ ├─ onboard-auth.config-opencode.ts
│ │ ├─ onboard-auth.credentials.ts
│ │ ├─ onboard-auth.models.ts
│ │ ├─ onboard-auth.test.ts
│ │ ├─ onboard-auth.ts
│ │ ├─ onboard-channels.test.ts
│ │ ├─ onboard-channels.ts
│ │ ├─ onboard-helpers.test.ts
│ │ ├─ onboard-helpers.ts
│ │ ├─ onboard-hooks.test.ts
│ │ ├─ onboard-hooks.ts
│ │ ├─ onboard-interactive.ts
│ │ ├─ onboard-non-interactive.ai-gateway.test.ts
│ │ ├─ onboard-non-interactive.cloudflare-ai-gateway.test.ts
│ │ ├─ onboard-non-interactive.gateway.test.ts
│ │ ├─ onboard-non-interactive.token.test.ts
│ │ ├─ onboard-non-interactive.ts
│ │ ├─ onboard-remote.ts
│ │ ├─ onboard-skills.ts
│ │ ├─ onboard-types.ts
│ │ ├─ onboard.ts
│ │ ├─ openai-codex-model-default.test.ts
│ │ ├─ openai-codex-model-default.ts
│ │ ├─ opencode-zen-model-default.test.ts
│ │ ├─ opencode-zen-model-default.ts
│ │ ├─ reset.ts
│ │ ├─ sandbox-display.ts
│ │ ├─ sandbox-explain.test.ts
│ │ ├─ sandbox-explain.ts
│ │ ├─ sandbox-formatters.test.ts
│ │ ├─ sandbox-formatters.ts
│ │ ├─ sandbox.test.ts
│ │ ├─ sandbox.ts
│ │ ├─ sessions.test.ts
│ │ ├─ sessions.ts
│ │ ├─ setup.ts
│ │ ├─ signal-install.ts
│ │ ├─ status-all.ts
│ │ ├─ status.agent-local.ts
│ │ ├─ status.command.ts
│ │ ├─ status.daemon.ts
│ │ ├─ status.format.ts
│ │ ├─ status.gateway-probe.ts
│ │ ├─ status.link-channel.ts
│ │ ├─ status.scan.ts
│ │ ├─ status.summary.ts
│ │ ├─ status.test.ts
│ │ ├─ status.ts
│ │ ├─ status.types.ts
│ │ ├─ status.update.ts
│ │ ├─ systemd-linger.ts
│ │ └─ uninstall.ts
│ ├─ compat/
│ │ └─ legacy-names.ts
│ ├─ config/
│ │ ├─ sessions/
│ │ │ ├─ group.ts
│ │ │ ├─ main-session.ts
│ │ │ ├─ metadata.test.ts
│ │ │ ├─ metadata.ts
│ │ │ ├─ paths.ts
│ │ │ ├─ reset.ts
│ │ │ ├─ session-key.ts
│ │ │ ├─ store.ts
│ │ │ ├─ transcript.test.ts
│ │ │ ├─ transcript.ts
│ │ │ └─ types.ts
│ │ ├─ agent-dirs.ts
│ │ ├─ agent-limits.ts
│ │ ├─ cache-utils.ts
│ │ ├─ channel-capabilities.test.ts
│ │ ├─ channel-capabilities.ts
│ │ ├─ commands.test.ts
│ │ ├─ commands.ts
│ │ ├─ config-paths.test.ts
│ │ ├─ config-paths.ts
│ │ ├─ config.agent-concurrency-defaults.test.ts
│ │ ├─ config.backup-rotation.test.ts
│ │ ├─ config.broadcast.test.ts
│ │ ├─ config.compaction-settings.test.ts
│ │ ├─ config.discord.test.ts
│ │ ├─ config.env-vars.test.ts
│ │ ├─ config.gateway-remote-transport.test.ts
│ │ ├─ config.identity-avatar.test.ts
│ │ ├─ config.identity-defaults.test.ts
│ │ ├─ config.legacy-config-detection.accepts-imessage-dmpolicy.test.ts
│ │ ├─ config.legacy-config-detection.rejects-routing-allowfrom.test.ts
│ │ ├─ config.msteams.test.ts
│ │ ├─ config.multi-agent-agentdir-validation.test.ts
│ │ ├─ config.nix-integration-u3-u5-u9.test.ts
│ │ ├─ config.plugin-validation.test.ts
│ │ ├─ config.preservation-on-validation-failure.test.ts
│ │ ├─ config.pruning-defaults.test.ts
│ │ ├─ config.sandbox-docker.test.ts
│ │ ├─ config.skills-entries-config.test.ts
│ │ ├─ config.talk-api-key-fallback.test.ts
│ │ ├─ config.talk-voicealiases.test.ts
│ │ ├─ config.telegram-custom-commands.test.ts
│ │ ├─ config.tools-alsoAllow.test.ts
│ │ ├─ config.ts
│ │ ├─ config.web-search-provider.test.ts
│ │ ├─ defaults.ts
│ │ ├─ env-substitution.test.ts
│ │ ├─ env-substitution.ts
│ │ ├─ env-vars.ts
│ │ ├─ group-policy.ts
│ │ ├─ includes.test.ts
│ │ ├─ includes.ts
│ │ ├─ io.compat.test.ts
│ │ ├─ io.ts
│ │ ├─ legacy-migrate.ts
│ │ ├─ legacy.migrations.part-1.ts
│ │ ├─ legacy.migrations.part-2.ts
│ │ ├─ legacy.migrations.part-3.ts
│ │ ├─ legacy.migrations.ts
│ │ ├─ legacy.rules.ts
│ │ ├─ legacy.shared.ts
│ │ ├─ legacy.ts
│ │ ├─ logging.ts
│ │ ├─ markdown-tables.ts
│ │ ├─ merge-config.ts
│ │ ├─ merge-patch.ts
│ │ ├─ model-alias-defaults.test.ts
│ │ ├─ normalize-paths.test.ts
│ │ ├─ normalize-paths.ts
│ │ ├─ paths.test.ts
│ │ ├─ paths.ts
│ │ ├─ plugin-auto-enable.test.ts
│ │ ├─ plugin-auto-enable.ts
│ │ ├─ port-defaults.ts
│ │ ├─ runtime-overrides.test.ts
│ │ ├─ runtime-overrides.ts
│ │ ├─ schema.test.ts
│ │ ├─ schema.ts
│ │ ├─ sessions.cache.test.ts
│ │ ├─ sessions.test.ts
│ │ ├─ sessions.ts
│ │ ├─ slack-http-config.test.ts
│ │ ├─ slack-token-validation.test.ts
│ │ ├─ talk.ts
│ │ ├─ telegram-custom-commands.ts
│ │ ├─ telegram-webhook-secret.test.ts
│ │ ├─ test-helpers.ts
│ │ ├─ types.agent-defaults.ts
│ │ ├─ types.agents.ts
│ │ ├─ types.approvals.ts
│ │ ├─ types.auth.ts
│ │ ├─ types.base.ts
│ │ ├─ types.browser.ts
│ │ ├─ types.channels.ts
│ │ ├─ types.cron.ts
│ │ ├─ types.discord.ts
│ │ ├─ types.feishu.ts
│ │ ├─ types.gateway.ts
│ │ ├─ types.googlechat.ts
│ │ ├─ types.hooks.ts
│ │ ├─ types.imessage.ts
│ │ ├─ types.memory.ts
│ │ ├─ types.messages.ts
│ │ ├─ types.models.ts
│ │ ├─ types.msteams.ts
│ │ ├─ types.node-host.ts
│ │ ├─ types.openclaw.ts
│ │ ├─ types.plugins.ts
│ │ ├─ types.queue.ts
│ │ ├─ types.sandbox.ts
│ │ ├─ types.signal.ts
│ │ ├─ types.skills.ts
│ │ ├─ types.slack.ts
│ │ ├─ types.telegram.ts
│ │ ├─ types.tools.ts
│ │ ├─ types.ts
│ │ ├─ types.tts.ts
│ │ ├─ types.whatsapp.ts
│ │ ├─ ui-seam-color.test.ts
│ │ ├─ validation.ts
│ │ ├─ version.ts
│ │ ├─ zod-schema.agent-defaults.ts
│ │ ├─ zod-schema.agent-runtime.ts
│ │ ├─ zod-schema.agents.ts
│ │ ├─ zod-schema.approvals.ts
│ │ ├─ zod-schema.channels.ts
│ │ ├─ zod-schema.core.ts
│ │ ├─ zod-schema.hooks.ts
│ │ ├─ zod-schema.providers-core.ts
│ │ ├─ zod-schema.providers-whatsapp.ts
│ │ ├─ zod-schema.providers.ts
│ │ ├─ zod-schema.session.ts
│ │ └─ zod-schema.ts
│ ├─ cron/
│ │ ├─ isolated-agent/
│ │ │ ├─ delivery-target.ts
│ │ │ ├─ helpers.ts
│ │ │ ├─ run.ts
│ │ │ └─ session.ts
│ │ ├─ service/
│ │ │ ├─ jobs.ts
│ │ │ ├─ locked.ts
│ │ │ ├─ normalize.ts
│ │ │ ├─ ops.ts
│ │ │ ├─ state.ts
│ │ │ ├─ store.ts
│ │ │ └─ timer.ts
│ │ ├─ cron-protocol-conformance.test.ts
│ │ ├─ delivery.ts
│ │ ├─ isolated-agent.delivers-response-has-heartbeat-ok-but-includes.test.ts
│ │ ├─ isolated-agent.skips-delivery-without-whatsapp-recipient-besteffortdeliver-true.test.ts
│ │ ├─ isolated-agent.ts
│ │ ├─ isolated-agent.uses-last-non-empty-agent-text-as.test.ts
│ │ ├─ normalize.test.ts
│ │ ├─ normalize.ts
│ │ ├─ parse.ts
│ │ ├─ payload-migration.ts
│ │ ├─ run-log.test.ts
│ │ ├─ run-log.ts
│ │ ├─ schedule.test.ts
│ │ ├─ schedule.ts
│ │ ├─ service.jobs.test.ts
│ │ ├─ service.prevents-duplicate-timers.test.ts
│ │ ├─ service.runs-one-shot-main-job-disables-it.test.ts
│ │ ├─ service.skips-main-jobs-empty-systemevent-text.test.ts
│ │ ├─ service.store.migration.test.ts
│ │ ├─ service.ts
│ │ ├─ store.ts
│ │ ├─ types.ts
│ │ └─ validate-timestamp.ts
│ ├─ daemon/
│ │ ├─ constants.test.ts
│ │ ├─ constants.ts
│ │ ├─ diagnostics.ts
│ │ ├─ inspect.ts
│ │ ├─ launchd-plist.ts
│ │ ├─ launchd.test.ts
│ │ ├─ launchd.ts
│ │ ├─ node-service.ts
│ │ ├─ paths.test.ts
│ │ ├─ paths.ts
│ │ ├─ program-args.test.ts
│ │ ├─ program-args.ts
│ │ ├─ runtime-parse.ts
│ │ ├─ runtime-paths.test.ts
│ │ ├─ runtime-paths.ts
│ │ ├─ schtasks.test.ts
│ │ ├─ schtasks.ts
│ │ ├─ service-audit.test.ts
│ │ ├─ service-audit.ts
│ │ ├─ service-env.test.ts
│ │ ├─ service-env.ts
│ │ ├─ service-runtime.ts
│ │ ├─ service.ts
│ │ ├─ systemd-availability.test.ts
│ │ ├─ systemd-hints.ts
│ │ ├─ systemd-linger.ts
│ │ ├─ systemd-unit.test.ts
│ │ ├─ systemd-unit.ts
│ │ ├─ systemd.test.ts
│ │ └─ systemd.ts
│ ├─ discord/
│ │ ├─ monitor/
│ │ │ ├─ allow-list.test.ts
│ │ │ ├─ allow-list.ts
│ │ │ ├─ exec-approvals.test.ts
│ │ │ ├─ exec-approvals.ts
│ │ │ ├─ format.ts
│ │ │ ├─ gateway-registry.test.ts
│ │ │ ├─ gateway-registry.ts
│ │ │ ├─ listeners.ts
│ │ │ ├─ message-handler.inbound-contract.test.ts
│ │ │ ├─ message-handler.preflight.ts
│ │ │ ├─ message-handler.preflight.types.ts
│ │ │ ├─ message-handler.process.test.ts
│ │ │ ├─ message-handler.process.ts
│ │ │ ├─ message-handler.ts
│ │ │ ├─ message-utils.ts
│ │ │ ├─ native-command.ts
│ │ │ ├─ presence-cache.test.ts
│ │ │ ├─ presence-cache.ts
│ │ │ ├─ provider.ts
│ │ │ ├─ reply-context.ts
│ │ │ ├─ reply-delivery.ts
│ │ │ ├─ sender-identity.ts
│ │ │ ├─ system-events.ts
│ │ │ ├─ threading.test.ts
│ │ │ ├─ threading.ts
│ │ │ └─ typing.ts
│ │ ├─ accounts.ts
│ │ ├─ api.test.ts
│ │ ├─ api.ts
│ │ ├─ audit.test.ts
│ │ ├─ audit.ts
│ │ ├─ chunk.test.ts
│ │ ├─ chunk.ts
│ │ ├─ directory-live.ts
│ │ ├─ gateway-logging.test.ts
│ │ ├─ gateway-logging.ts
│ │ ├─ index.ts
│ │ ├─ monitor.gateway.test.ts
│ │ ├─ monitor.gateway.ts
│ │ ├─ monitor.slash.test.ts
│ │ ├─ monitor.test.ts
│ │ ├─ monitor.tool-result.accepts-guild-messages-mentionpatterns-match.test.ts
│ │ ├─ monitor.tool-result.sends-status-replies-responseprefix.test.ts
│ │ ├─ monitor.ts
│ │ ├─ pluralkit.test.ts
│ │ ├─ pluralkit.ts
│ │ ├─ probe.intents.test.ts
│ │ ├─ probe.ts
│ │ ├─ resolve-channels.test.ts
│ │ ├─ resolve-channels.ts
│ │ ├─ resolve-users.ts
│ │ ├─ send.channels.ts
│ │ ├─ send.creates-thread.test.ts
│ │ ├─ send.emojis-stickers.ts
│ │ ├─ send.guild.ts
│ │ ├─ send.messages.ts
│ │ ├─ send.outbound.ts
│ │ ├─ send.permissions.ts
│ │ ├─ send.reactions.ts
│ │ ├─ send.sends-basic-channel-messages.test.ts
│ │ ├─ send.shared.ts
│ │ ├─ send.ts
│ │ ├─ send.types.ts
│ │ ├─ targets.test.ts
│ │ ├─ targets.ts
│ │ ├─ token.test.ts
│ │ └─ token.ts
│ ├─ docs/
│ │ └─ slash-commands-doc.test.ts
│ ├─ feishu/
│ │ ├─ access.ts
│ │ ├─ accounts.ts
│ │ ├─ bot.ts
│ │ ├─ client.ts
│ │ ├─ config.ts
│ │ ├─ domain.ts
│ │ ├─ download.ts
│ │ ├─ format.test.ts
│ │ ├─ format.ts
│ │ ├─ index.ts
│ │ ├─ message.ts
│ │ ├─ monitor.ts
│ │ ├─ pairing-store.ts
│ │ ├─ probe.ts
│ │ ├─ send.ts
│ │ ├─ streaming-card.ts
│ │ └─ types.ts
│ ├─ gateway/
│ │ ├─ protocol/
│ │ │ ├─ schema/
│ │ │ │ ├─ agent.ts
│ │ │ │ ├─ agents-models-skills.ts
│ │ │ │ ├─ channels.ts
│ │ │ │ ├─ config.ts
│ │ │ │ ├─ cron.ts
│ │ │ │ ├─ devices.ts
│ │ │ │ ├─ error-codes.ts
│ │ │ │ ├─ exec-approvals.ts
│ │ │ │ ├─ frames.ts
│ │ │ │ ├─ logs-chat.ts
│ │ │ │ ├─ nodes.ts
│ │ │ │ ├─ primitives.ts
│ │ │ │ ├─ protocol-schemas.ts
│ │ │ │ ├─ sessions.ts
│ │ │ │ ├─ snapshot.ts
│ │ │ │ ├─ types.ts
│ │ │ │ └─ wizard.ts
│ │ │ ├─ client-info.ts
│ │ │ ├─ index.test.ts
│ │ │ ├─ index.ts
│ │ │ └─ schema.ts
│ │ ├─ server/
│ │ │ ├─ **tests**/
│ │ │ │ └─ test-utils.ts
│ │ │ ├─ ws-connection/
│ │ │ │ └─ message-handler.ts
│ │ │ ├─ close-reason.ts
│ │ │ ├─ health-state.ts
│ │ │ ├─ hooks.ts
│ │ │ ├─ http-listen.ts
│ │ │ ├─ plugins-http.test.ts
│ │ │ ├─ plugins-http.ts
│ │ │ ├─ tls.ts
│ │ │ ├─ ws-connection.ts
│ │ │ └─ ws-types.ts
│ │ ├─ server-methods/
│ │ │ ├─ agent-job.ts
│ │ │ ├─ agent-timestamp.test.ts
│ │ │ ├─ agent-timestamp.ts
│ │ │ ├─ agent.test.ts
│ │ │ ├─ agent.ts
│ │ │ ├─ agents.ts
│ │ │ ├─ browser.ts
│ │ │ ├─ channels.ts
│ │ │ ├─ chat.ts
│ │ │ ├─ config.ts
│ │ │ ├─ connect.ts
│ │ │ ├─ cron.ts
│ │ │ ├─ devices.ts
│ │ │ ├─ exec-approval.test.ts
│ │ │ ├─ exec-approval.ts
│ │ │ ├─ exec-approvals.ts
│ │ │ ├─ health.ts
│ │ │ ├─ logs.test.ts
│ │ │ ├─ logs.ts
│ │ │ ├─ models.ts
│ │ │ ├─ nodes.helpers.ts
│ │ │ ├─ nodes.ts
│ │ │ ├─ send.test.ts
│ │ │ ├─ send.ts
│ │ │ ├─ sessions.ts
│ │ │ ├─ skills.ts
│ │ │ ├─ system.ts
│ │ │ ├─ talk.ts
│ │ │ ├─ tts.ts
│ │ │ ├─ types.ts
│ │ │ ├─ update.ts
│ │ │ ├─ usage.ts
│ │ │ ├─ voicewake.ts
│ │ │ ├─ web.ts
│ │ │ └─ wizard.ts
│ │ ├─ assistant-identity.test.ts
│ │ ├─ assistant-identity.ts
│ │ ├─ auth.test.ts
│ │ ├─ auth.ts
│ │ ├─ boot.test.ts
│ │ ├─ boot.ts
│ │ ├─ call.test.ts
│ │ ├─ call.ts
│ │ ├─ chat-abort.ts
│ │ ├─ chat-attachments.test.ts
│ │ ├─ chat-attachments.ts
│ │ ├─ chat-sanitize.test.ts
│ │ ├─ chat-sanitize.ts
│ │ ├─ client.maxpayload.test.ts
│ │ ├─ client.test.ts
│ │ ├─ client.ts
│ │ ├─ config-reload.test.ts
│ │ ├─ config-reload.ts
│ │ ├─ control-ui-shared.ts
│ │ ├─ control-ui.test.ts
│ │ ├─ control-ui.ts
│ │ ├─ device-auth.ts
│ │ ├─ exec-approval-manager.ts
│ │ ├─ gateway-cli-backend.live.test.ts
│ │ ├─ gateway-models.profiles.live.test.ts
│ │ ├─ gateway.e2e.test.ts
│ │ ├─ hooks-mapping.test.ts
│ │ ├─ hooks-mapping.ts
│ │ ├─ hooks.test.ts
│ │ ├─ hooks.ts
│ │ ├─ http-common.ts
│ │ ├─ http-utils.ts
│ │ ├─ live-image-probe.ts
│ │ ├─ net.test.ts
│ │ ├─ net.ts
│ │ ├─ node-command-policy.ts
│ │ ├─ node-registry.ts
│ │ ├─ open-responses.schema.ts
│ │ ├─ openai-http.e2e.test.ts
│ │ ├─ openai-http.ts
│ │ ├─ openresponses-http.e2e.test.ts
│ │ ├─ openresponses-http.ts
│ │ ├─ openresponses-parity.e2e.test.ts
│ │ ├─ origin-check.test.ts
│ │ ├─ origin-check.ts
│ │ ├─ probe.ts
│ │ ├─ server-broadcast.test.ts
│ │ ├─ server-broadcast.ts
│ │ ├─ server-browser.ts
│ │ ├─ server-channels.ts
│ │ ├─ server-chat-registry.test.ts
│ │ ├─ server-chat.agent-events.test.ts
│ │ ├─ server-chat.ts
│ │ ├─ server-close.ts
│ │ ├─ server-constants.ts
│ │ ├─ server-cron.ts
│ │ ├─ server-discovery-runtime.ts
│ │ ├─ server-discovery.test.ts
│ │ ├─ server-discovery.ts
│ │ ├─ server-http.ts
│ │ ├─ server-lanes.ts
│ │ ├─ server-maintenance.ts
│ │ ├─ server-methods-list.ts
│ │ ├─ server-methods.ts
│ │ ├─ server-mobile-nodes.ts
│ │ ├─ server-model-catalog.ts
│ │ ├─ server-node-events-types.ts
│ │ ├─ server-node-events.test.ts
│ │ ├─ server-node-events.ts
│ │ ├─ server-node-subscriptions.test.ts
│ │ ├─ server-node-subscriptions.ts
│ │ ├─ server-plugins.test.ts
│ │ ├─ server-plugins.ts
│ │ ├─ server-reload-handlers.ts
│ │ ├─ server-restart-sentinel.ts
│ │ ├─ server-runtime-config.ts
│ │ ├─ server-runtime-state.ts
│ │ ├─ server-session-key.ts
│ │ ├─ server-shared.ts
│ │ ├─ server-startup-log.ts
│ │ ├─ server-startup.ts
│ │ ├─ server-tailscale.ts
│ │ ├─ server-utils.test.ts
│ │ ├─ server-utils.ts
│ │ ├─ server-wizard-sessions.ts
│ │ ├─ server-ws-runtime.ts
│ │ ├─ server.agent.gateway-server-agent-a.e2e.test.ts
│ │ ├─ server.agent.gateway-server-agent-b.e2e.test.ts
│ │ ├─ server.auth.e2e.test.ts
│ │ ├─ server.channels.e2e.test.ts
│ │ ├─ server.chat.gateway-server-chat-b.e2e.test.ts
│ │ ├─ server.chat.gateway-server-chat.e2e.test.ts
│ │ ├─ server.config-apply.e2e.test.ts
│ │ ├─ server.config-patch.e2e.test.ts
│ │ ├─ server.cron.e2e.test.ts
│ │ ├─ server.health.e2e.test.ts
│ │ ├─ server.hooks.e2e.test.ts
│ │ ├─ server.impl.ts
│ │ ├─ server.ios-client-id.e2e.test.ts
│ │ ├─ server.models-voicewake-misc.e2e.test.ts
│ │ ├─ server.nodes.late-invoke.test.ts
│ │ ├─ server.reload.e2e.test.ts
│ │ ├─ server.roles-allowlist-update.e2e.test.ts
│ │ ├─ server.sessions-send.e2e.test.ts
│ │ ├─ server.sessions.gateway-server-sessions-a.e2e.test.ts
│ │ ├─ server.ts
│ │ ├─ session-utils.fs.test.ts
│ │ ├─ session-utils.fs.ts
│ │ ├─ session-utils.test.ts
│ │ ├─ session-utils.ts
│ │ ├─ session-utils.types.ts
│ │ ├─ sessions-patch.test.ts
│ │ ├─ sessions-patch.ts
│ │ ├─ sessions-resolve.ts
│ │ ├─ test-helpers.e2e.ts
│ │ ├─ test-helpers.mocks.ts
│ │ ├─ test-helpers.openai-mock.ts
│ │ ├─ test-helpers.server.ts
│ │ ├─ test-helpers.ts
│ │ ├─ tools-invoke-http.test.ts
│ │ ├─ tools-invoke-http.ts
│ │ ├─ ws-log.test.ts
│ │ ├─ ws-log.ts
│ │ └─ ws-logging.ts
│ ├─ hooks/
│ │ ├─ bundled/
│ │ │ ├─ boot-md/
│ │ │ │ ├─ handler.ts
│ │ │ │ └─ HOOK.md
│ │ │ ├─ command-logger/
│ │ │ │ ├─ handler.ts
│ │ │ │ └─ HOOK.md
│ │ │ ├─ session-memory/
│ │ │ │ ├─ handler.test.ts
│ │ │ │ ├─ handler.ts
│ │ │ │ └─ HOOK.md
│ │ │ ├─ soul-evil/
│ │ │ │ ├─ handler.test.ts
│ │ │ │ ├─ handler.ts
│ │ │ │ ├─ HOOK.md
│ │ │ │ └─ README.md
│ │ │ └─ README.md
│ │ ├─ bundled-dir.ts
│ │ ├─ config.ts
│ │ ├─ frontmatter.test.ts
│ │ ├─ frontmatter.ts
│ │ ├─ gmail-ops.ts
│ │ ├─ gmail-setup-utils.test.ts
│ │ ├─ gmail-setup-utils.ts
│ │ ├─ gmail-watcher.test.ts
│ │ ├─ gmail-watcher.ts
│ │ ├─ gmail.test.ts
│ │ ├─ gmail.ts
│ │ ├─ hooks-install.e2e.test.ts
│ │ ├─ hooks-status.ts
│ │ ├─ hooks.ts
│ │ ├─ install.test.ts
│ │ ├─ install.ts
│ │ ├─ installs.ts
│ │ ├─ internal-hooks.test.ts
│ │ ├─ internal-hooks.ts
│ │ ├─ llm-slug-generator.ts
│ │ ├─ loader.test.ts
│ │ ├─ loader.ts
│ │ ├─ plugin-hooks.ts
│ │ ├─ soul-evil.test.ts
│ │ ├─ soul-evil.ts
│ │ ├─ types.ts
│ │ └─ workspace.ts
│ ├─ imessage/
│ │ ├─ monitor/
│ │ │ ├─ deliver.ts
│ │ │ ├─ monitor-provider.ts
│ │ │ ├─ runtime.ts
│ │ │ └─ types.ts
│ │ ├─ accounts.ts
│ │ ├─ client.ts
│ │ ├─ constants.ts
│ │ ├─ index.ts
│ │ ├─ monitor.skips-group-messages-without-mention-by-default.test.ts
│ │ ├─ monitor.ts
│ │ ├─ monitor.updates-last-route-chat-id-direct-messages.test.ts
│ │ ├─ probe.test.ts
│ │ ├─ probe.ts
│ │ ├─ send.test.ts
│ │ ├─ send.ts
│ │ ├─ targets.test.ts
│ │ └─ targets.ts
│ ├─ infra/
│ │ ├─ net/
│ │ │ ├─ fetch-guard.ts
│ │ │ ├─ ssrf.pinning.test.ts
│ │ │ └─ ssrf.ts
│ │ ├─ outbound/
│ │ │ ├─ agent-delivery.test.ts
│ │ │ ├─ agent-delivery.ts
│ │ │ ├─ channel-adapters.ts
│ │ │ ├─ channel-selection.ts
│ │ │ ├─ channel-target.ts
│ │ │ ├─ deliver.test.ts
│ │ │ ├─ deliver.ts
│ │ │ ├─ directory-cache.ts
│ │ │ ├─ envelope.test.ts
│ │ │ ├─ envelope.ts
│ │ │ ├─ format.test.ts
│ │ │ ├─ format.ts
│ │ │ ├─ message-action-runner.test.ts
│ │ │ ├─ message-action-runner.threading.test.ts
│ │ │ ├─ message-action-runner.ts
│ │ │ ├─ message-action-spec.ts
│ │ │ ├─ message.test.ts
│ │ │ ├─ message.ts
│ │ │ ├─ outbound-policy.test.ts
│ │ │ ├─ outbound-policy.ts
│ │ │ ├─ outbound-send-service.ts
│ │ │ ├─ outbound-session.test.ts
│ │ │ ├─ outbound-session.ts
│ │ │ ├─ payloads.test.ts
│ │ │ ├─ payloads.ts
│ │ │ ├─ target-errors.ts
│ │ │ ├─ target-normalization.ts
│ │ │ ├─ target-resolver.test.ts
│ │ │ ├─ target-resolver.ts
│ │ │ ├─ targets.test.ts
│ │ │ └─ targets.ts
│ │ ├─ tls/
│ │ │ ├─ fingerprint.test.ts
│ │ │ ├─ fingerprint.ts
│ │ │ └─ gateway.ts
│ │ ├─ agent-events.test.ts
│ │ ├─ agent-events.ts
│ │ ├─ archive.test.ts
│ │ ├─ archive.ts
│ │ ├─ backoff.ts
│ │ ├─ binaries.test.ts
│ │ ├─ binaries.ts
│ │ ├─ bonjour-ciao.ts
│ │ ├─ bonjour-discovery.test.ts
│ │ ├─ bonjour-discovery.ts
│ │ ├─ bonjour-errors.ts
│ │ ├─ bonjour.test.ts
│ │ ├─ bonjour.ts
│ │ ├─ brew.test.ts
│ │ ├─ brew.ts
│ │ ├─ canvas-host-url.ts
│ │ ├─ channel-activity.test.ts
│ │ ├─ channel-activity.ts
│ │ ├─ channel-summary.ts
│ │ ├─ channels-status-issues.ts
│ │ ├─ clipboard.ts
│ │ ├─ control-ui-assets.test.ts
│ │ ├─ control-ui-assets.ts
│ │ ├─ dedupe.test.ts
│ │ ├─ dedupe.ts
│ │ ├─ device-auth-store.ts
│ │ ├─ device-identity.ts
│ │ ├─ device-pairing.test.ts
│ │ ├─ device-pairing.ts
│ │ ├─ diagnostic-events.test.ts
│ │ ├─ diagnostic-events.ts
│ │ ├─ diagnostic-flags.test.ts
│ │ ├─ diagnostic-flags.ts
│ │ ├─ dotenv.test.ts
│ │ ├─ dotenv.ts
│ │ ├─ env-file.ts
│ │ ├─ env.test.ts
│ │ ├─ env.ts
│ │ ├─ errors.ts
│ │ ├─ exec-approval-forwarder.test.ts
│ │ ├─ exec-approval-forwarder.ts
│ │ ├─ exec-approvals.test.ts
│ │ ├─ exec-approvals.ts
│ │ ├─ exec-host.ts
│ │ ├─ exec-safety.ts
│ │ ├─ fetch.test.ts
│ │ ├─ fetch.ts
│ │ ├─ format-duration.ts
│ │ ├─ fs-safe.ts
│ │ ├─ gateway-lock.test.ts
│ │ ├─ gateway-lock.ts
│ │ ├─ gensparx-root.ts
│ │ ├─ git-commit.ts
│ │ ├─ heartbeat-events.ts
│ │ ├─ heartbeat-runner.respects-ackmaxchars-heartbeat-acks.test.ts
│ │ ├─ heartbeat-runner.returns-default-unset.test.ts
│ │ ├─ heartbeat-runner.scheduler.test.ts
│ │ ├─ heartbeat-runner.sender-prefers-delivery-target.test.ts
│ │ ├─ heartbeat-runner.ts
│ │ ├─ heartbeat-visibility.test.ts
│ │ ├─ heartbeat-visibility.ts
│ │ ├─ heartbeat-wake.ts
│ │ ├─ is-main.test.ts
│ │ ├─ is-main.ts
│ │ ├─ json-file.ts
│ │ ├─ machine-name.ts
│ │ ├─ node-pairing.ts
│ │ ├─ node-shell.test.ts
│ │ ├─ node-shell.ts
│ │ ├─ openclaw-root.ts
│ │ ├─ os-summary.ts
│ │ ├─ path-env.test.ts
│ │ ├─ path-env.ts
│ │ ├─ ports-format.ts
│ │ ├─ ports-inspect.test.ts
│ │ ├─ ports-inspect.ts
│ │ ├─ ports-lsof.ts
│ │ ├─ ports-types.ts
│ │ ├─ ports.test.ts
│ │ ├─ ports.ts
│ │ ├─ provider-usage.auth.ts
│ │ ├─ provider-usage.fetch.antigravity.test.ts
│ │ ├─ provider-usage.fetch.antigravity.ts
│ │ ├─ provider-usage.fetch.claude.ts
│ │ ├─ provider-usage.fetch.codex.ts
│ │ ├─ provider-usage.fetch.copilot.ts
│ │ ├─ provider-usage.fetch.gemini.ts
│ │ ├─ provider-usage.fetch.minimax.ts
│ │ ├─ provider-usage.fetch.shared.ts
│ │ ├─ provider-usage.fetch.ts
│ │ ├─ provider-usage.fetch.zai.ts
│ │ ├─ provider-usage.format.ts
│ │ ├─ provider-usage.load.ts
│ │ ├─ provider-usage.shared.ts
│ │ ├─ provider-usage.test.ts
│ │ ├─ provider-usage.ts
│ │ ├─ provider-usage.types.ts
│ │ ├─ restart-sentinel.test.ts
│ │ ├─ restart-sentinel.ts
│ │ ├─ restart.test.ts
│ │ ├─ restart.ts
│ │ ├─ retry-policy.test.ts
│ │ ├─ retry-policy.ts
│ │ ├─ retry.test.ts
│ │ ├─ retry.ts
│ │ ├─ runtime-guard.test.ts
│ │ ├─ runtime-guard.ts
│ │ ├─ session-cost-usage.test.ts
│ │ ├─ session-cost-usage.ts
│ │ ├─ shell-env.path.test.ts
│ │ ├─ shell-env.test.ts
│ │ ├─ shell-env.ts
│ │ ├─ skills-remote.ts
│ │ ├─ ssh-config.test.ts
│ │ ├─ ssh-config.ts
│ │ ├─ ssh-tunnel.test.ts
│ │ ├─ ssh-tunnel.ts
│ │ ├─ state-migrations.fs.test.ts
│ │ ├─ state-migrations.fs.ts
│ │ ├─ state-migrations.ts
│ │ ├─ system-events.test.ts
│ │ ├─ system-events.ts
│ │ ├─ system-presence.test.ts
│ │ ├─ system-presence.ts
│ │ ├─ tailnet.test.ts
│ │ ├─ tailnet.ts
│ │ ├─ tailscale.test.ts
│ │ ├─ tailscale.ts
│ │ ├─ transport-ready.test.ts
│ │ ├─ transport-ready.ts
│ │ ├─ unhandled-rejections.fatal-detection.test.ts
│ │ ├─ unhandled-rejections.test.ts
│ │ ├─ unhandled-rejections.ts
│ │ ├─ update-channels.ts
│ │ ├─ update-check.test.ts
│ │ ├─ update-check.ts
│ │ ├─ update-global.ts
│ │ ├─ update-runner.test.ts
│ │ ├─ update-runner.ts
│ │ ├─ update-startup.test.ts
│ │ ├─ update-startup.ts
│ │ ├─ voicewake.test.ts
│ │ ├─ voicewake.ts
│ │ ├─ warnings.ts
│ │ ├─ widearea-dns.test.ts
│ │ ├─ widearea-dns.ts
│ │ ├─ ws.ts
│ │ └─ wsl.ts
│ ├─ line/
│ │ ├─ accounts.test.ts
│ │ ├─ accounts.ts
│ │ ├─ auto-reply-delivery.test.ts
│ │ ├─ auto-reply-delivery.ts
│ │ ├─ bot-access.ts
│ │ ├─ bot-handlers.test.ts
│ │ ├─ bot-handlers.ts
│ │ ├─ bot-message-context.test.ts
│ │ ├─ bot-message-context.ts
│ │ ├─ bot.ts
│ │ ├─ config-schema.ts
│ │ ├─ download.ts
│ │ ├─ flex-templates.test.ts
│ │ ├─ flex-templates.ts
│ │ ├─ http-registry.ts
│ │ ├─ index.ts
│ │ ├─ markdown-to-line.test.ts
│ │ ├─ markdown-to-line.ts
│ │ ├─ monitor.ts
│ │ ├─ probe.test.ts
│ │ ├─ probe.ts
│ │ ├─ reply-chunks.test.ts
│ │ ├─ reply-chunks.ts
│ │ ├─ rich-menu.test.ts
│ │ ├─ rich-menu.ts
│ │ ├─ send.test.ts
│ │ ├─ send.ts
│ │ ├─ signature.test.ts
│ │ ├─ signature.ts
│ │ ├─ template-messages.test.ts
│ │ ├─ template-messages.ts
│ │ ├─ types.ts
│ │ ├─ webhook.test.ts
│ │ └─ webhook.ts
│ ├─ link-understanding/
│ │ ├─ apply.ts
│ │ ├─ defaults.ts
│ │ ├─ detect.test.ts
│ │ ├─ detect.ts
│ │ ├─ format.ts
│ │ ├─ index.ts
│ │ └─ runner.ts
│ ├─ logging/
│ │ ├─ config.ts
│ │ ├─ console-capture.test.ts
│ │ ├─ console-prefix.test.ts
│ │ ├─ console-settings.test.ts
│ │ ├─ console.ts
│ │ ├─ diagnostic.ts
│ │ ├─ levels.ts
│ │ ├─ logger.ts
│ │ ├─ parse-log-line.test.ts
│ │ ├─ parse-log-line.ts
│ │ ├─ redact.test.ts
│ │ ├─ redact.ts
│ │ ├─ state.ts
│ │ └─ subsystem.ts
│ ├─ macos/
│ │ ├─ gateway-daemon.ts
│ │ ├─ relay-smoke.test.ts
│ │ ├─ relay-smoke.ts
│ │ └─ relay.ts
│ ├─ markdown/
│ │ ├─ code-spans.ts
│ │ ├─ fences.ts
│ │ ├─ frontmatter.test.ts
│ │ ├─ frontmatter.ts
│ │ ├─ ir.table-bullets.test.ts
│ │ ├─ ir.ts
│ │ ├─ render.ts
│ │ └─ tables.ts
│ ├─ media/
│ │ ├─ audio-tags.ts
│ │ ├─ audio.ts
│ │ ├─ constants.ts
│ │ ├─ fetch.test.ts
│ │ ├─ fetch.ts
│ │ ├─ host.test.ts
│ │ ├─ host.ts
│ │ ├─ image-ops.ts
│ │ ├─ input-files.ts
│ │ ├─ mime.test.ts
│ │ ├─ mime.ts
│ │ ├─ parse.test.ts
│ │ ├─ parse.ts
│ │ ├─ server.test.ts
│ │ ├─ server.ts
│ │ ├─ store.header-ext.test.ts
│ │ ├─ store.redirect.test.ts
│ │ ├─ store.test.ts
│ │ └─ store.ts
│ ├─ media-understanding/
│ │ ├─ providers/
│ │ │ ├─ anthropic/
│ │ │ │ └─ index.ts
│ │ │ ├─ deepgram/
│ │ │ │ ├─ audio.live.test.ts
│ │ │ │ ├─ audio.test.ts
│ │ │ │ ├─ audio.ts
│ │ │ │ └─ index.ts
│ │ │ ├─ google/
│ │ │ │ ├─ audio.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ video.test.ts
│ │ │ │ └─ video.ts
│ │ │ ├─ groq/
│ │ │ │ └─ index.ts
│ │ │ ├─ minimax/
│ │ │ │ └─ index.ts
│ │ │ ├─ openai/
│ │ │ │ ├─ audio.test.ts
│ │ │ │ ├─ audio.ts
│ │ │ │ └─ index.ts
│ │ │ ├─ image.ts
│ │ │ ├─ index.ts
│ │ │ └─ shared.ts
│ │ ├─ apply.test.ts
│ │ ├─ apply.ts
│ │ ├─ attachments.ssrf.test.ts
│ │ ├─ attachments.ts
│ │ ├─ concurrency.ts
│ │ ├─ defaults.ts
│ │ ├─ errors.ts
│ │ ├─ format.test.ts
│ │ ├─ format.ts
│ │ ├─ index.ts
│ │ ├─ resolve.test.ts
│ │ ├─ resolve.ts
│ │ ├─ runner.auto-audio.test.ts
│ │ ├─ runner.deepgram.test.ts
│ │ ├─ runner.ts
│ │ ├─ runner.vision-skip.test.ts
│ │ ├─ scope.test.ts
│ │ ├─ scope.ts
│ │ ├─ types.ts
│ │ └─ video.ts
│ ├─ memory/
│ │ ├─ backend-config.test.ts
│ │ ├─ backend-config.ts
│ │ ├─ batch-gemini.ts
│ │ ├─ batch-openai.ts
│ │ ├─ embeddings-gemini.ts
│ │ ├─ embeddings-openai.ts
│ │ ├─ embeddings.test.ts
│ │ ├─ embeddings.ts
│ │ ├─ headers-fingerprint.ts
│ │ ├─ hybrid.test.ts
│ │ ├─ hybrid.ts
│ │ ├─ index.test.ts
│ │ ├─ index.ts
│ │ ├─ internal.test.ts
│ │ ├─ internal.ts
│ │ ├─ manager-cache-key.ts
│ │ ├─ manager-search.ts
│ │ ├─ manager.async-search.test.ts
│ │ ├─ manager.atomic-reindex.test.ts
│ │ ├─ manager.batch.test.ts
│ │ ├─ manager.embedding-batches.test.ts
│ │ ├─ manager.sync-errors-do-not-crash.test.ts
│ │ ├─ manager.ts
│ │ ├─ manager.vector-dedupe.test.ts
│ │ ├─ memory-schema.ts
│ │ ├─ node-llama.ts
│ │ ├─ openai-batch.ts
│ │ ├─ provider-key.ts
│ │ ├─ qmd-manager.test.ts
│ │ ├─ qmd-manager.ts
│ │ ├─ search-manager.test.ts
│ │ ├─ search-manager.ts
│ │ ├─ session-files.ts
│ │ ├─ sqlite-vec.ts
│ │ ├─ sqlite.ts
│ │ ├─ status-format.ts
│ │ ├─ sync-memory-files.ts
│ │ ├─ sync-session-files.ts
│ │ ├─ test-helpers.ts
│ │ └─ types.ts
│ ├─ node-host/
│ │ ├─ config.ts
│ │ ├─ runner.test.ts
│ │ └─ runner.ts
│ ├─ pairing/
│ │ ├─ pairing-labels.ts
│ │ ├─ pairing-messages.test.ts
│ │ ├─ pairing-messages.ts
│ │ ├─ pairing-store.test.ts
│ │ └─ pairing-store.ts
│ ├─ plugin-sdk/
│ │ ├─ index.test.ts
│ │ └─ index.ts
│ ├─ plugins/
│ │ ├─ runtime/
│ │ │ ├─ index.ts
│ │ │ ├─ native-deps.ts
│ │ │ └─ types.ts
│ │ ├─ bundled-dir.ts
│ │ ├─ cli.test.ts
│ │ ├─ cli.ts
│ │ ├─ commands.ts
│ │ ├─ config-schema.ts
│ │ ├─ config-state.test.ts
│ │ ├─ config-state.ts
│ │ ├─ discovery.test.ts
│ │ ├─ discovery.ts
│ │ ├─ enable.ts
│ │ ├─ hook-runner-global.ts
│ │ ├─ hooks.ts
│ │ ├─ http-path.ts
│ │ ├─ http-registry.ts
│ │ ├─ install.test.ts
│ │ ├─ install.ts
│ │ ├─ installs.ts
│ │ ├─ loader.test.ts
│ │ ├─ loader.ts
│ │ ├─ manifest-registry.ts
│ │ ├─ manifest.ts
│ │ ├─ providers.ts
│ │ ├─ registry.ts
│ │ ├─ runtime.ts
│ │ ├─ schema-validator.ts
│ │ ├─ services.ts
│ │ ├─ slots.test.ts
│ │ ├─ slots.ts
│ │ ├─ status.ts
│ │ ├─ tools.optional.test.ts
│ │ ├─ tools.ts
│ │ ├─ types.ts
│ │ ├─ update.ts
│ │ └─ voice-call.plugin.test.ts
│ ├─ process/
│ │ ├─ child-process-bridge.test.ts
│ │ ├─ child-process-bridge.ts
│ │ ├─ command-queue.test.ts
│ │ ├─ command-queue.ts
│ │ ├─ exec.test.ts
│ │ ├─ exec.ts
│ │ ├─ lanes.ts
│ │ ├─ spawn-utils.test.ts
│ │ └─ spawn-utils.ts
│ ├─ providers/
│ │ ├─ github-copilot-auth.ts
│ │ ├─ github-copilot-models.ts
│ │ ├─ github-copilot-token.test.ts
│ │ ├─ github-copilot-token.ts
│ │ ├─ google-shared.ensures-function-call-comes-after-user-turn.test.ts
│ │ ├─ google-shared.preserves-parameters-type-is-missing.test.ts
│ │ ├─ qwen-portal-oauth.test.ts
│ │ └─ qwen-portal-oauth.ts
│ ├─ routing/
│ │ ├─ bindings.ts
│ │ ├─ resolve-route.test.ts
│ │ ├─ resolve-route.ts
│ │ └─ session-key.ts
│ ├─ scripts/
│ │ └─ canvas-a2ui-copy.test.ts
│ ├─ security/
│ │ ├─ audit-extra.ts
│ │ ├─ audit-fs.ts
│ │ ├─ audit.test.ts
│ │ ├─ audit.ts
│ │ ├─ channel-metadata.ts
│ │ ├─ external-content.test.ts
│ │ ├─ external-content.ts
│ │ ├─ fix.test.ts
│ │ ├─ fix.ts
│ │ ├─ windows-acl.test.ts
│ │ └─ windows-acl.ts
│ ├─ sessions/
│ │ ├─ level-overrides.ts
│ │ ├─ model-overrides.ts
│ │ ├─ send-policy.test.ts
│ │ ├─ send-policy.ts
│ │ ├─ session-key-utils.ts
│ │ ├─ session-label.ts
│ │ └─ transcript-events.ts
│ ├─ shared/
│ │ └─ text/
│ │ ├─ reasoning-tags.test.ts
│ │ └─ reasoning-tags.ts
│ ├─ signal/
│ │ ├─ monitor/
│ │ │ ├─ event-handler.inbound-contract.test.ts
│ │ │ ├─ event-handler.ts
│ │ │ └─ event-handler.types.ts
│ │ ├─ accounts.ts
│ │ ├─ client.ts
│ │ ├─ daemon.test.ts
│ │ ├─ daemon.ts
│ │ ├─ format.test.ts
│ │ ├─ format.ts
│ │ ├─ identity.ts
│ │ ├─ index.ts
│ │ ├─ monitor.event-handler.sender-prefix.test.ts
│ │ ├─ monitor.event-handler.typing-read-receipts.test.ts
│ │ ├─ monitor.test.ts
│ │ ├─ monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts
│ │ ├─ monitor.tool-result.sends-tool-summaries-responseprefix.test.ts
│ │ ├─ monitor.ts
│ │ ├─ probe.test.ts
│ │ ├─ probe.ts
│ │ ├─ reaction-level.ts
│ │ ├─ send-reactions.test.ts
│ │ ├─ send-reactions.ts
│ │ ├─ send.ts
│ │ └─ sse-reconnect.ts
│ ├─ slack/
│ │ ├─ http/
│ │ │ ├─ index.ts
│ │ │ ├─ registry.test.ts
│ │ │ └─ registry.ts
│ │ ├─ monitor/
│ │ │ ├─ events/
│ │ │ │ ├─ channels.ts
│ │ │ │ ├─ members.ts
│ │ │ │ ├─ messages.ts
│ │ │ │ ├─ pins.ts
│ │ │ │ └─ reactions.ts
│ │ │ ├─ message-handler/
│ │ │ │ ├─ dispatch.ts
│ │ │ │ ├─ prepare.inbound-contract.test.ts
│ │ │ │ ├─ prepare.sender-prefix.test.ts
│ │ │ │ ├─ prepare.ts
│ │ │ │ └─ types.ts
│ │ │ ├─ allow-list.ts
│ │ │ ├─ auth.ts
│ │ │ ├─ channel-config.test.ts
│ │ │ ├─ channel-config.ts
│ │ │ ├─ commands.ts
│ │ │ ├─ context.test.ts
│ │ │ ├─ context.ts
│ │ │ ├─ events.ts
│ │ │ ├─ media.test.ts
│ │ │ ├─ media.ts
│ │ │ ├─ message-handler.ts
│ │ │ ├─ policy.ts
│ │ │ ├─ provider.ts
│ │ │ ├─ replies.ts
│ │ │ ├─ slash.command-arg-menus.test.ts
│ │ │ ├─ slash.policy.test.ts
│ │ │ ├─ slash.ts
│ │ │ ├─ thread-resolution.test.ts
│ │ │ ├─ thread-resolution.ts
│ │ │ └─ types.ts
│ │ ├─ accounts.ts
│ │ ├─ actions.read.test.ts
│ │ ├─ actions.ts
│ │ ├─ channel-migration.test.ts
│ │ ├─ channel-migration.ts
│ │ ├─ client.test.ts
│ │ ├─ client.ts
│ │ ├─ directory-live.ts
│ │ ├─ format.test.ts
│ │ ├─ format.ts
│ │ ├─ index.ts
│ │ ├─ monitor.test-helpers.ts
│ │ ├─ monitor.test.ts
│ │ ├─ monitor.threading.missing-thread-ts.test.ts
│ │ ├─ monitor.tool-result.forces-thread-replies-replytoid-is-set.test.ts
│ │ ├─ monitor.tool-result.sends-tool-summaries-responseprefix.test.ts
│ │ ├─ monitor.tool-result.threads-top-level-replies-replytomode-is-all.test.ts
│ │ ├─ monitor.ts
│ │ ├─ probe.ts
│ │ ├─ resolve-channels.test.ts
│ │ ├─ resolve-channels.ts
│ │ ├─ resolve-users.ts
│ │ ├─ scopes.ts
│ │ ├─ send.ts
│ │ ├─ targets.test.ts
│ │ ├─ targets.ts
│ │ ├─ threading-tool-context.test.ts
│ │ ├─ threading-tool-context.ts
│ │ ├─ threading.test.ts
│ │ ├─ threading.ts
│ │ ├─ token.ts
│ │ └─ types.ts
│ ├─ telegram/
│ │ ├─ bot/
│ │ │ ├─ delivery.test.ts
│ │ │ ├─ delivery.ts
│ │ │ ├─ helpers.test.ts
│ │ │ ├─ helpers.ts
│ │ │ └─ types.ts
│ │ ├─ accounts.test.ts
│ │ ├─ accounts.ts
│ │ ├─ allowed-updates.ts
│ │ ├─ api-logging.ts
│ │ ├─ audit.test.ts
│ │ ├─ audit.ts
│ │ ├─ bot-access.ts
│ │ ├─ bot-handlers.ts
│ │ ├─ bot-message-context.dm-threads.test.ts
│ │ ├─ bot-message-context.dm-topic-threadid.test.ts
│ │ ├─ bot-message-context.sender-prefix.test.ts
│ │ ├─ bot-message-context.ts
│ │ ├─ bot-message-dispatch.test.ts
│ │ ├─ bot-message-dispatch.ts
│ │ ├─ bot-message.test.ts
│ │ ├─ bot-message.ts
│ │ ├─ bot-native-commands.plugin-auth.test.ts
│ │ ├─ bot-native-commands.test.ts
│ │ ├─ bot-native-commands.ts
│ │ ├─ bot-updates.ts
│ │ ├─ bot.create-telegram-bot.accepts-group-messages-mentionpatterns-match-without-botusername.test.ts
│ │ ├─ bot.create-telegram-bot.applies-topic-skill-filters-system-prompts.test.ts
│ │ ├─ bot.create-telegram-bot.blocks-all-group-messages-grouppolicy-is.test.ts
│ │ ├─ bot.create-telegram-bot.dedupes-duplicate-callback-query-updates-by-update.test.ts
│ │ ├─ bot.create-telegram-bot.installs-grammy-throttler.test.ts
│ │ ├─ bot.create-telegram-bot.matches-tg-prefixed-allowfrom-entries-case-insensitively.test.ts
│ │ ├─ bot.create-telegram-bot.matches-usernames-case-insensitively-grouppolicy-is.test.ts
│ │ ├─ bot.create-telegram-bot.routes-dms-by-telegram-accountid-binding.test.ts
│ │ ├─ bot.create-telegram-bot.sends-replies-without-native-reply-threading.test.ts
│ │ ├─ bot.media.downloads-media-file-path-no-file-download.test.ts
│ │ ├─ bot.media.includes-location-text-ctx-fields-pins.test.ts
│ │ ├─ bot.test.ts
│ │ ├─ bot.ts
│ │ ├─ caption.ts
│ │ ├─ download.test.ts
│ │ ├─ download.ts
│ │ ├─ draft-chunking.test.ts
│ │ ├─ draft-chunking.ts
│ │ ├─ draft-stream.test.ts
│ │ ├─ draft-stream.ts
│ │ ├─ fetch.test.ts
│ │ ├─ fetch.ts
│ │ ├─ format.test.ts
│ │ ├─ format.ts
│ │ ├─ group-migration.test.ts
│ │ ├─ group-migration.ts
│ │ ├─ index.ts
│ │ ├─ inline-buttons.test.ts
│ │ ├─ inline-buttons.ts
│ │ ├─ model-buttons.test.ts
│ │ ├─ model-buttons.ts
│ │ ├─ monitor.test.ts
│ │ ├─ monitor.ts
│ │ ├─ network-config.test.ts
│ │ ├─ network-config.ts
│ │ ├─ network-errors.test.ts
│ │ ├─ network-errors.ts
│ │ ├─ probe.ts
│ │ ├─ proxy.test.ts
│ │ ├─ proxy.ts
│ │ ├─ reaction-level.test.ts
│ │ ├─ reaction-level.ts
│ │ ├─ send.caption-split.test.ts
│ │ ├─ send.edit-message.test.ts
│ │ ├─ send.preserves-thread-params-plain-text-fallback.test.ts
│ │ ├─ send.proxy.test.ts
│ │ ├─ send.returns-undefined-empty-input.test.ts
│ │ ├─ send.ts
│ │ ├─ sent-message-cache.test.ts
│ │ ├─ sent-message-cache.ts
│ │ ├─ sticker-cache.test.ts
│ │ ├─ sticker-cache.ts
│ │ ├─ targets.test.ts
│ │ ├─ targets.ts
│ │ ├─ token.test.ts
│ │ ├─ token.ts
│ │ ├─ update-offset-store.test.ts
│ │ ├─ update-offset-store.ts
│ │ ├─ voice.test.ts
│ │ ├─ voice.ts
│ │ ├─ webhook-set.ts
│ │ ├─ webhook.test.ts
│ │ └─ webhook.ts
│ ├─ terminal/
│ │ ├─ ansi.ts
│ │ ├─ links.ts
│ │ ├─ note.ts
│ │ ├─ palette.ts
│ │ ├─ progress-line.ts
│ │ ├─ prompt-style.ts
│ │ ├─ restore.ts
│ │ ├─ stream-writer.test.ts
│ │ ├─ stream-writer.ts
│ │ ├─ table.test.ts
│ │ ├─ table.ts
│ │ └─ theme.ts
│ ├─ test-helpers/
│ │ └─ workspace.ts
│ ├─ test-utils/
│ │ ├─ channel-plugins.ts
│ │ └─ ports.ts
│ ├─ tts/
│ │ ├─ tts.test.ts
│ │ └─ tts.ts
│ ├─ tui/
│ │ ├─ components/
│ │ │ ├─ assistant-message.ts
│ │ │ ├─ chat-log.ts
│ │ │ ├─ custom-editor.ts
│ │ │ ├─ filterable-select-list.ts
│ │ │ ├─ fuzzy-filter.ts
│ │ │ ├─ searchable-select-list.test.ts
│ │ │ ├─ searchable-select-list.ts
│ │ │ ├─ selectors.ts
│ │ │ ├─ tool-execution.ts
│ │ │ └─ user-message.ts
│ │ ├─ theme/
│ │ │ ├─ syntax-theme.ts
│ │ │ ├─ theme.test.ts
│ │ │ └─ theme.ts
│ │ ├─ commands.test.ts
│ │ ├─ commands.ts
│ │ ├─ gateway-chat.test.ts
│ │ ├─ gateway-chat.ts
│ │ ├─ tui-command-handlers.test.ts
│ │ ├─ tui-command-handlers.ts
│ │ ├─ tui-event-handlers.test.ts
│ │ ├─ tui-event-handlers.ts
│ │ ├─ tui-formatters.test.ts
│ │ ├─ tui-formatters.ts
│ │ ├─ tui-input-history.test.ts
│ │ ├─ tui-local-shell.test.ts
│ │ ├─ tui-local-shell.ts
│ │ ├─ tui-overlays.test.ts
│ │ ├─ tui-overlays.ts
│ │ ├─ tui-session-actions.test.ts
│ │ ├─ tui-session-actions.ts
│ │ ├─ tui-status-summary.ts
│ │ ├─ tui-stream-assembler.test.ts
│ │ ├─ tui-stream-assembler.ts
│ │ ├─ tui-types.ts
│ │ ├─ tui-waiting.test.ts
│ │ ├─ tui-waiting.ts
│ │ ├─ tui.submit-handler.test.ts
│ │ ├─ tui.test.ts
│ │ └─ tui.ts
│ ├─ types/
│ │ ├─ cli-highlight.d.ts
│ │ ├─ lydell-node-pty.d.ts
│ │ ├─ napi-rs-canvas.d.ts
│ │ ├─ node-edge-tts.d.ts
│ │ ├─ node-llama-cpp.d.ts
│ │ ├─ osc-progress.d.ts
│ │ ├─ pdfjs-dist-legacy.d.ts
│ │ ├─ proper-lockfile.d.ts
│ │ └─ qrcode-terminal.d.ts
│ ├─ utils/
│ │ ├─ account-id.ts
│ │ ├─ boolean.test.ts
│ │ ├─ boolean.ts
│ │ ├─ delivery-context.test.ts
│ │ ├─ delivery-context.ts
│ │ ├─ directive-tags.ts
│ │ ├─ message-channel.test.ts
│ │ ├─ message-channel.ts
│ │ ├─ provider-utils.ts
│ │ ├─ queue-helpers.ts
│ │ ├─ shell-argv.ts
│ │ ├─ time-format.ts
│ │ ├─ usage-format.test.ts
│ │ └─ usage-format.ts
│ ├─ web/
│ │ ├─ auto-reply/
│ │ │ ├─ monitor/
│ │ │ │ ├─ ack-reaction.ts
│ │ │ │ ├─ broadcast.ts
│ │ │ │ ├─ commands.ts
│ │ │ │ ├─ echo.ts
│ │ │ │ ├─ group-activation.ts
│ │ │ │ ├─ group-gating.test.ts
│ │ │ │ ├─ group-gating.ts
│ │ │ │ ├─ group-members.ts
│ │ │ │ ├─ last-route.ts
│ │ │ │ ├─ message-line.test.ts
│ │ │ │ ├─ message-line.ts
│ │ │ │ ├─ on-message.ts
│ │ │ │ ├─ peer.ts
│ │ │ │ ├─ process-message.inbound-contract.test.ts
│ │ │ │ └─ process-message.ts
│ │ │ ├─ constants.ts
│ │ │ ├─ deliver-reply.ts
│ │ │ ├─ heartbeat-runner.ts
│ │ │ ├─ loggers.ts
│ │ │ ├─ mentions.test.ts
│ │ │ ├─ mentions.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ session-snapshot.test.ts
│ │ │ ├─ session-snapshot.ts
│ │ │ ├─ types.ts
│ │ │ └─ util.ts
│ │ ├─ inbound/
│ │ │ ├─ access-control.pairing-history.test.ts
│ │ │ ├─ access-control.ts
│ │ │ ├─ dedupe.ts
│ │ │ ├─ extract.ts
│ │ │ ├─ media.ts
│ │ │ ├─ monitor.ts
│ │ │ ├─ send-api.ts
│ │ │ └─ types.ts
│ │ ├─ accounts.test.ts
│ │ ├─ accounts.ts
│ │ ├─ accounts.whatsapp-auth.test.ts
│ │ ├─ active-listener.ts
│ │ ├─ auth-store.ts
│ │ ├─ auto-reply.broadcast-groups.broadcasts-sequentially-configured-order.test.ts
│ │ ├─ auto-reply.broadcast-groups.skips-unknown-broadcast-agent-ids-agents-list.test.ts
│ │ ├─ auto-reply.impl.ts
│ │ ├─ auto-reply.partial-reply-gating.test.ts
│ │ ├─ auto-reply.ts
│ │ ├─ auto-reply.typing-controller-idle.test.ts
│ │ ├─ auto-reply.web-auto-reply.compresses-common-formats-jpeg-cap.test.ts
│ │ ├─ auto-reply.web-auto-reply.falls-back-text-media-send-fails.test.ts
│ │ ├─ auto-reply.web-auto-reply.prefixes-body-same-phone-marker-from.test.ts
│ │ ├─ auto-reply.web-auto-reply.reconnects-after-connection-close.test.ts
│ │ ├─ auto-reply.web-auto-reply.requires-mention-group-chats-injects-history-replying.test.ts
│ │ ├─ auto-reply.web-auto-reply.sends-tool-summaries-immediately-responseprefix.test.ts
│ │ ├─ auto-reply.web-auto-reply.supports-always-group-activation-silent-token-preserves.test.ts
│ │ ├─ auto-reply.web-auto-reply.uses-per-agent-mention-patterns-group-gating.test.ts
│ │ ├─ inbound.media.test.ts
│ │ ├─ inbound.test.ts
│ │ ├─ inbound.ts
│ │ ├─ login-qr.test.ts
│ │ ├─ login-qr.ts
│ │ ├─ login.coverage.test.ts
│ │ ├─ login.test.ts
│ │ ├─ login.ts
│ │ ├─ logout.test.ts
│ │ ├─ media.test.ts
│ │ ├─ media.ts
│ │ ├─ monitor-inbox.allows-messages-from-senders-allowfrom-list.test.ts
│ │ ├─ monitor-inbox.blocks-messages-from-unauthorized-senders-not-allowfrom.test.ts
│ │ ├─ monitor-inbox.captures-media-path-image-messages.test.ts
│ │ ├─ monitor-inbox.streams-inbound-messages.test.ts
│ │ ├─ outbound.test.ts
│ │ ├─ outbound.ts
│ │ ├─ qr-image.test.ts
│ │ ├─ qr-image.ts
│ │ ├─ reconnect.test.ts
│ │ ├─ reconnect.ts
│ │ ├─ session.test.ts
│ │ ├─ session.ts
│ │ ├─ test-helpers.ts
│ │ └─ vcard.ts
│ ├─ whatsapp/
│ │ ├─ normalize.test.ts
│ │ └─ normalize.ts
│ ├─ wizard/
│ │ ├─ clack-prompter.ts
│ │ ├─ onboarding.finalize.ts
│ │ ├─ onboarding.gateway-config.test.ts
│ │ ├─ onboarding.gateway-config.ts
│ │ ├─ onboarding.test.ts
│ │ ├─ onboarding.ts
│ │ ├─ onboarding.types.ts
│ │ ├─ prompts.ts
│ │ ├─ session.test.ts
│ │ └─ session.ts
│ ├─ channel-web.barrel.test.ts
│ ├─ channel-web.ts
│ ├─ docker-setup.test.ts
│ ├─ entry.ts
│ ├─ extensionAPI.ts
│ ├─ globals.test.ts
│ ├─ globals.ts
│ ├─ index.test.ts
│ ├─ index.ts
│ ├─ logger.test.ts
│ ├─ logger.ts
│ ├─ logging.ts
│ ├─ polls.test.ts
│ ├─ polls.ts
│ ├─ runtime.ts
│ ├─ utils.test.ts
│ ├─ utils.ts
│ └─ version.ts
├─ Swabble/
│ ├─ .github/
│ │ └─ workflows/
│ │ └─ ci.yml
│ ├─ docs/
│ │ └─ spec.md
│ ├─ scripts/
│ │ ├─ format.sh
│ │ └─ lint.sh
│ ├─ Sources/
│ │ ├─ swabble/
│ │ │ ├─ CLI/
│ │ │ │ └─ CLIRegistry.swift
│ │ │ ├─ Commands/
│ │ │ │ ├─ DoctorCommand.swift
│ │ │ │ ├─ HealthCommand.swift
│ │ │ │ ├─ MicCommands.swift
│ │ │ │ ├─ ServeCommand.swift
│ │ │ │ ├─ ServiceCommands.swift
│ │ │ │ ├─ SetupCommand.swift
│ │ │ │ ├─ StartStopCommands.swift
│ │ │ │ ├─ StatusCommand.swift
│ │ │ │ ├─ TailLogCommand.swift
│ │ │ │ ├─ TestHookCommand.swift
│ │ │ │ └─ TranscribeCommand.swift
│ │ │ └─ main.swift
│ │ ├─ SwabbleCore/
│ │ │ ├─ Config/
│ │ │ │ └─ Config.swift
│ │ │ ├─ Hooks/
│ │ │ │ └─ HookExecutor.swift
│ │ │ ├─ Speech/
│ │ │ │ ├─ BufferConverter.swift
│ │ │ │ └─ SpeechPipeline.swift
│ │ │ └─ Support/
│ │ │ ├─ AttributedString+Sentences.swift
│ │ │ ├─ Logging.swift
│ │ │ ├─ OutputFormat.swift
│ │ │ └─ TranscriptsStore.swift
│ │ └─ SwabbleKit/
│ │ └─ WakeWordGate.swift
│ ├─ Tests/
│ │ ├─ SwabbleKitTests/
│ │ │ └─ WakeWordGateTests.swift
│ │ └─ swabbleTests/
│ │ └─ ConfigTests.swift
│ ├─ .gitignore
│ ├─ .swiftformat
│ ├─ .swiftlint.yml
│ ├─ CHANGELOG.md
│ ├─ LICENSE
│ ├─ Package.resolved
│ ├─ Package.swift
│ └─ README.md
├─ test/
│ ├─ fixtures/
│ │ └─ child-process-bridge/
│ │ └─ child.js
│ ├─ helpers/
│ │ ├─ envelope-timestamp.ts
│ │ ├─ inbound-contract.ts
│ │ ├─ normalize-text.ts
│ │ ├─ paths.ts
│ │ ├─ poll.ts
│ │ └─ temp-home.ts
│ ├─ mocks/
│ │ └─ baileys.ts
│ ├─ auto-reply.retry.test.ts
│ ├─ gateway.multi.e2e.test.ts
│ ├─ global-setup.ts
│ ├─ inbound-contract.providers.test.ts
│ ├─ media-understanding.auto.e2e.test.ts
│ ├─ provider-timeout.e2e.test.ts
│ ├─ setup.ts
│ └─ test-env.ts
├─ ui/
│ ├─ public/
│ │ ├─ apple-touch-icon.png
│ │ ├─ favicon-32.png
│ │ ├─ favicon.ico
│ │ └─ favicon.svg
│ ├─ src/
│ │ ├─ styles/
│ │ │ ├─ chat/
│ │ │ │ ├─ grouped.css
│ │ │ │ ├─ layout.css
│ │ │ │ ├─ sidebar.css
│ │ │ │ ├─ text.css
│ │ │ │ └─ tool-cards.css
│ │ │ ├─ base.css
│ │ │ ├─ chat.css
│ │ │ ├─ components.css
│ │ │ ├─ config.css
│ │ │ ├─ layout.css
│ │ │ └─ layout.mobile.css
│ │ ├─ ui/
│ │ │ ├─ **screenshots**/
│ │ │ │ ├─ config-form.browser.test.ts/
│ │ │ │ │ ├─ config-form-renderer-flags-unsupported-unions-1.png
│ │ │ │ │ ├─ config-form-renderer-renders-inputs-and-patches-values-1.png
│ │ │ │ │ └─ config-form-renderer-renders-union-literals-as-select-options-1.png
│ │ │ │ └─ navigation.browser.test.ts/
│ │ │ │ └─ control-UI-routing-auto-scrolls-chat-history-to-the-latest-message-1.png
│ │ │ ├─ chat/
│ │ │ │ ├─ constants.ts
│ │ │ │ ├─ copy-as-markdown.ts
│ │ │ │ ├─ grouped-render.ts
│ │ │ │ ├─ message-extract.test.ts
│ │ │ │ ├─ message-extract.ts
│ │ │ │ ├─ message-normalizer.test.ts
│ │ │ │ ├─ message-normalizer.ts
│ │ │ │ ├─ tool-cards.ts
│ │ │ │ ├─ tool-helpers.test.ts
│ │ │ │ └─ tool-helpers.ts
│ │ │ ├─ components/
│ │ │ │ └─ resizable-divider.ts
│ │ │ ├─ controllers/
│ │ │ │ ├─ config/
│ │ │ │ │ └─ form-utils.ts
│ │ │ │ ├─ agent-files.ts
│ │ │ │ ├─ agent-identity.ts
│ │ │ │ ├─ agent-skills.ts
│ │ │ │ ├─ agents.ts
│ │ │ │ ├─ assistant-identity.ts
│ │ │ │ ├─ channels.ts
│ │ │ │ ├─ channels.types.ts
│ │ │ │ ├─ chat.test.ts
│ │ │ │ ├─ chat.ts
│ │ │ │ ├─ config.test.ts
│ │ │ │ ├─ config.ts
│ │ │ │ ├─ cron.ts
│ │ │ │ ├─ debug.ts
│ │ │ │ ├─ devices.ts
│ │ │ │ ├─ exec-approval.ts
│ │ │ │ ├─ exec-approvals.ts
│ │ │ │ ├─ logs.ts
│ │ │ │ ├─ nodes.ts
│ │ │ │ ├─ presence.ts
│ │ │ │ ├─ sessions.ts
│ │ │ │ └─ skills.ts
│ │ │ ├─ data/
│ │ │ │ └─ moonshot-kimi-k2.ts
│ │ │ ├─ types/
│ │ │ │ └─ chat-types.ts
│ │ │ ├─ views/
│ │ │ │ ├─ agents.ts
│ │ │ │ ├─ channels.config.ts
│ │ │ │ ├─ channels.discord.ts
│ │ │ │ ├─ channels.googlechat.ts
│ │ │ │ ├─ channels.imessage.ts
│ │ │ │ ├─ channels.nostr-profile-form.ts
│ │ │ │ ├─ channels.nostr.ts
│ │ │ │ ├─ channels.shared.ts
│ │ │ │ ├─ channels.signal.ts
│ │ │ │ ├─ channels.slack.ts
│ │ │ │ ├─ channels.telegram.ts
│ │ │ │ ├─ channels.ts
│ │ │ │ ├─ channels.types.ts
│ │ │ │ ├─ channels.whatsapp.ts
│ │ │ │ ├─ chat.test.ts
│ │ │ │ ├─ chat.ts
│ │ │ │ ├─ config-form.analyze.ts
│ │ │ │ ├─ config-form.node.ts
│ │ │ │ ├─ config-form.render.ts
│ │ │ │ ├─ config-form.shared.ts
│ │ │ │ ├─ config-form.ts
│ │ │ │ ├─ config.browser.test.ts
│ │ │ │ ├─ config.ts
│ │ │ │ ├─ cron.test.ts
│ │ │ │ ├─ cron.ts
│ │ │ │ ├─ debug.ts
│ │ │ │ ├─ exec-approval.ts
│ │ │ │ ├─ gateway-url-confirmation.ts
│ │ │ │ ├─ instances.ts
│ │ │ │ ├─ logs.ts
│ │ │ │ ├─ markdown-sidebar.ts
│ │ │ │ ├─ nodes.ts
│ │ │ │ ├─ overview.ts
│ │ │ │ ├─ sessions.ts
│ │ │ │ └─ skills.ts
│ │ │ ├─ app-channels.ts
│ │ │ ├─ app-chat.ts
│ │ │ ├─ app-defaults.ts
│ │ │ ├─ app-events.ts
│ │ │ ├─ app-gateway.ts
│ │ │ ├─ app-lifecycle.ts
│ │ │ ├─ app-polling.ts
│ │ │ ├─ app-render.helpers.ts
│ │ │ ├─ app-render.ts
│ │ │ ├─ app-scroll.test.ts
│ │ │ ├─ app-scroll.ts
│ │ │ ├─ app-settings.test.ts
│ │ │ ├─ app-settings.ts
│ │ │ ├─ app-tool-stream.ts
│ │ │ ├─ app-view-state.ts
│ │ │ ├─ app.ts
│ │ │ ├─ assistant-identity.ts
│ │ │ ├─ chat-markdown.browser.test.ts
│ │ │ ├─ config-form.browser.test.ts
│ │ │ ├─ device-auth.ts
│ │ │ ├─ device-identity.ts
│ │ │ ├─ focus-mode.browser.test.ts
│ │ │ ├─ format.test.ts
│ │ │ ├─ format.ts
│ │ │ ├─ gateway.ts
│ │ │ ├─ icons.ts
│ │ │ ├─ markdown.test.ts
│ │ │ ├─ markdown.ts
│ │ │ ├─ navigation.browser.test.ts
│ │ │ ├─ navigation.test.ts
│ │ │ ├─ navigation.ts
│ │ │ ├─ presenter.ts
│ │ │ ├─ storage.ts
│ │ │ ├─ theme-transition.ts
│ │ │ ├─ theme.ts
│ │ │ ├─ tool-display.json
│ │ │ ├─ tool-display.ts
│ │ │ ├─ types.ts
│ │ │ ├─ ui-types.ts
│ │ │ ├─ uuid.test.ts
│ │ │ └─ uuid.ts
│ │ ├─ main.ts
│ │ └─ styles.css
│ ├─ index.html
│ ├─ package.json
│ ├─ vite.config.ts
│ └─ vitest.config.ts
├─ vendor/
│ └─ a2ui/
│ ├─ .gemini/
│ │ └─ GEMINI.md
│ ├─ .github/
│ │ └─ workflows/
│ │ ├─ docs.yml
│ │ ├─ editor_build.yml
│ │ ├─ inspector_build.yml
│ │ ├─ java_build_and_test.yml
│ │ ├─ lit_samples_build.yml
│ │ ├─ ng_build_and_test.yml
│ │ ├─ python_samples_build.yml
│ │ └─ web_build_and_test.yml
│ ├─ renderers/
│ │ ├─ angular/
│ │ │ ├─ src/
│ │ │ │ ├─ lib/
│ │ │ │ │ ├─ catalog/
│ │ │ │ │ │ ├─ audio.ts
│ │ │ │ │ │ ├─ button.ts
│ │ │ │ │ │ ├─ card.ts
│ │ │ │ │ │ ├─ checkbox.ts
│ │ │ │ │ │ ├─ column.ts
│ │ │ │ │ │ ├─ datetime-input.ts
│ │ │ │ │ │ ├─ default.ts
│ │ │ │ │ │ ├─ divider.ts
│ │ │ │ │ │ ├─ icon.ts
│ │ │ │ │ │ ├─ image.ts
│ │ │ │ │ │ ├─ list.ts
│ │ │ │ │ │ ├─ modal.ts
│ │ │ │ │ │ ├─ multiple-choice.ts
│ │ │ │ │ │ ├─ row.ts
│ │ │ │ │ │ ├─ slider.ts
│ │ │ │ │ │ ├─ surface.ts
│ │ │ │ │ │ ├─ tabs.ts
│ │ │ │ │ │ ├─ text-field.ts
│ │ │ │ │ │ ├─ text.ts
│ │ │ │ │ │ └─ video.ts
│ │ │ │ │ ├─ data/
│ │ │ │ │ │ ├─ index.ts
│ │ │ │ │ │ ├─ markdown.ts
│ │ │ │ │ │ ├─ processor.ts
│ │ │ │ │ │ └─ types.ts
│ │ │ │ │ ├─ rendering/
│ │ │ │ │ │ ├─ catalog.ts
│ │ │ │ │ │ ├─ dynamic-component.ts
│ │ │ │ │ │ ├─ index.ts
│ │ │ │ │ │ ├─ renderer.ts
│ │ │ │ │ │ └─ theming.ts
│ │ │ │ │ └─ config.ts
│ │ │ │ └─ public-api.ts
│ │ │ ├─ .npmrc
│ │ │ ├─ angular.json
│ │ │ ├─ ng-package.json
│ │ │ ├─ package-lock.json
│ │ │ ├─ package.json
│ │ │ ├─ README.md
│ │ │ ├─ tsconfig.json
│ │ │ ├─ tsconfig.lib.json
│ │ │ ├─ tsconfig.lib.prod.json
│ │ │ └─ tsconfig.spec.json
│ │ └─ lit/
│ │ ├─ dist/
│ │ │ ├─ src/
│ │ │ │ ├─ 0.8/
│ │ │ │ │ ├─ data/
│ │ │ │ │ │ ├─ guards.d.ts
│ │ │ │ │ │ ├─ guards.d.ts.map
│ │ │ │ │ │ ├─ guards.js
│ │ │ │ │ │ ├─ guards.js.map
│ │ │ │ │ │ ├─ model-processor.d.ts
│ │ │ │ │ │ ├─ model-processor.d.ts.map
│ │ │ │ │ │ ├─ model-processor.js
│ │ │ │ │ │ ├─ model-processor.js.map
│ │ │ │ │ │ ├─ signal-model-processor.d.ts
│ │ │ │ │ │ ├─ signal-model-processor.d.ts.map
│ │ │ │ │ │ ├─ signal-model-processor.js
│ │ │ │ │ │ └─ signal-model-processor.js.map
│ │ │ │ │ ├─ events/
│ │ │ │ │ │ ├─ a2ui.d.ts
│ │ │ │ │ │ ├─ a2ui.d.ts.map
│ │ │ │ │ │ ├─ a2ui.js
│ │ │ │ │ │ ├─ a2ui.js.map
│ │ │ │ │ │ ├─ base.d.ts
│ │ │ │ │ │ ├─ base.d.ts.map
│ │ │ │ │ │ ├─ base.js
│ │ │ │ │ │ ├─ base.js.map
│ │ │ │ │ │ ├─ events.d.ts
│ │ │ │ │ │ ├─ events.d.ts.map
│ │ │ │ │ │ ├─ events.js
│ │ │ │ │ │ └─ events.js.map
│ │ │ │ │ ├─ schemas/
│ │ │ │ │ │ └─ server_to_client_with_standard_catalog.json
│ │ │ │ │ ├─ styles/
│ │ │ │ │ │ ├─ behavior.d.ts
│ │ │ │ │ │ ├─ behavior.d.ts.map
│ │ │ │ │ │ ├─ behavior.js
│ │ │ │ │ │ ├─ behavior.js.map
│ │ │ │ │ │ ├─ border.d.ts
│ │ │ │ │ │ ├─ border.d.ts.map
│ │ │ │ │ │ ├─ border.js
│ │ │ │ │ │ ├─ border.js.map
│ │ │ │ │ │ ├─ colors.d.ts
│ │ │ │ │ │ ├─ colors.d.ts.map
│ │ │ │ │ │ ├─ colors.js
│ │ │ │ │ │ ├─ colors.js.map
│ │ │ │ │ │ ├─ icons.d.ts
│ │ │ │ │ │ ├─ icons.d.ts.map
│ │ │ │ │ │ ├─ icons.js
│ │ │ │ │ │ ├─ icons.js.map
│ │ │ │ │ │ ├─ index.d.ts
│ │ │ │ │ │ ├─ index.d.ts.map
│ │ │ │ │ │ ├─ index.js
│ │ │ │ │ │ ├─ index.js.map
│ │ │ │ │ │ ├─ layout.d.ts
│ │ │ │ │ │ ├─ layout.d.ts.map
│ │ │ │ │ │ ├─ layout.js
│ │ │ │ │ │ ├─ layout.js.map
│ │ │ │ │ │ ├─ opacity.d.ts
│ │ │ │ │ │ ├─ opacity.d.ts.map
│ │ │ │ │ │ ├─ opacity.js
│ │ │ │ │ │ ├─ opacity.js.map
│ │ │ │ │ │ ├─ shared.d.ts
│ │ │ │ │ │ ├─ shared.d.ts.map
│ │ │ │ │ │ ├─ shared.js
│ │ │ │ │ │ ├─ shared.js.map
│ │ │ │ │ │ ├─ type.d.ts
│ │ │ │ │ │ ├─ type.d.ts.map
│ │ │ │ │ │ ├─ type.js
│ │ │ │ │ │ ├─ type.js.map
│ │ │ │ │ │ ├─ utils.d.ts
│ │ │ │ │ │ ├─ utils.d.ts.map
│ │ │ │ │ │ ├─ utils.js
│ │ │ │ │ │ └─ utils.js.map
│ │ │ │ │ ├─ types/
│ │ │ │ │ │ ├─ client-event.d.ts
│ │ │ │ │ │ ├─ client-event.d.ts.map
│ │ │ │ │ │ ├─ client-event.js
│ │ │ │ │ │ ├─ client-event.js.map
│ │ │ │ │ │ ├─ colors.d.ts
│ │ │ │ │ │ ├─ colors.d.ts.map
│ │ │ │ │ │ ├─ colors.js
│ │ │ │ │ │ ├─ colors.js.map
│ │ │ │ │ │ ├─ components.d.ts
│ │ │ │ │ │ ├─ components.d.ts.map
│ │ │ │ │ │ ├─ components.js
│ │ │ │ │ │ ├─ components.js.map
│ │ │ │ │ │ ├─ primitives.d.ts
│ │ │ │ │ │ ├─ primitives.d.ts.map
│ │ │ │ │ │ ├─ primitives.js
│ │ │ │ │ │ ├─ primitives.js.map
│ │ │ │ │ │ ├─ types.d.ts
│ │ │ │ │ │ ├─ types.d.ts.map
│ │ │ │ │ │ ├─ types.js
│ │ │ │ │ │ └─ types.js.map
│ │ │ │ │ ├─ ui/
│ │ │ │ │ │ ├─ context/
│ │ │ │ │ │ │ ├─ theme.d.ts
│ │ │ │ │ │ │ ├─ theme.d.ts.map
│ │ │ │ │ │ │ ├─ theme.js
│ │ │ │ │ │ │ └─ theme.js.map
│ │ │ │ │ │ ├─ custom-components/
│ │ │ │ │ │ │ ├─ index.d.ts
│ │ │ │ │ │ │ ├─ index.d.ts.map
│ │ │ │ │ │ │ ├─ index.js
│ │ │ │ │ │ │ └─ index.js.map
│ │ │ │ │ │ ├─ directives/
│ │ │ │ │ │ │ ├─ directives.d.ts
│ │ │ │ │ │ │ ├─ directives.d.ts.map
│ │ │ │ │ │ │ ├─ directives.js
│ │ │ │ │ │ │ ├─ directives.js.map
│ │ │ │ │ │ │ ├─ markdown.d.ts
│ │ │ │ │ │ │ ├─ markdown.d.ts.map
│ │ │ │ │ │ │ ├─ markdown.js
│ │ │ │ │ │ │ ├─ markdown.js.map
│ │ │ │ │ │ │ ├─ sanitizer.d.ts
│ │ │ │ │ │ │ ├─ sanitizer.d.ts.map
│ │ │ │ │ │ │ ├─ sanitizer.js
│ │ │ │ │ │ │ └─ sanitizer.js.map
│ │ │ │ │ │ ├─ utils/
│ │ │ │ │ │ │ ├─ utils.d.ts
│ │ │ │ │ │ │ ├─ utils.d.ts.map
│ │ │ │ │ │ │ ├─ utils.js
│ │ │ │ │ │ │ ├─ utils.js.map
│ │ │ │ │ │ │ ├─ youtube.d.ts
│ │ │ │ │ │ │ ├─ youtube.d.ts.map
│ │ │ │ │ │ │ ├─ youtube.js
│ │ │ │ │ │ │ └─ youtube.js.map
│ │ │ │ │ │ ├─ audio.d.ts
│ │ │ │ │ │ ├─ audio.d.ts.map
│ │ │ │ │ │ ├─ audio.js
│ │ │ │ │ │ ├─ audio.js.map
│ │ │ │ │ │ ├─ button.d.ts
│ │ │ │ │ │ ├─ button.d.ts.map
│ │ │ │ │ │ ├─ button.js
│ │ │ │ │ │ ├─ button.js.map
│ │ │ │ │ │ ├─ card.d.ts
│ │ │ │ │ │ ├─ card.d.ts.map
│ │ │ │ │ │ ├─ card.js
│ │ │ │ │ │ ├─ card.js.map
│ │ │ │ │ │ ├─ checkbox.d.ts
│ │ │ │ │ │ ├─ checkbox.d.ts.map
│ │ │ │ │ │ ├─ checkbox.js
│ │ │ │ │ │ ├─ checkbox.js.map
│ │ │ │ │ │ ├─ column.d.ts
│ │ │ │ │ │ ├─ column.d.ts.map
│ │ │ │ │ │ ├─ column.js
│ │ │ │ │ │ ├─ column.js.map
│ │ │ │ │ │ ├─ component-registry.d.ts
│ │ │ │ │ │ ├─ component-registry.d.ts.map
│ │ │ │ │ │ ├─ component-registry.js
│ │ │ │ │ │ ├─ component-registry.js.map
│ │ │ │ │ │ ├─ datetime-input.d.ts
│ │ │ │ │ │ ├─ datetime-input.d.ts.map
│ │ │ │ │ │ ├─ datetime-input.js
│ │ │ │ │ │ ├─ datetime-input.js.map
│ │ │ │ │ │ ├─ divider.d.ts
│ │ │ │ │ │ ├─ divider.d.ts.map
│ │ │ │ │ │ ├─ divider.js
│ │ │ │ │ │ ├─ divider.js.map
│ │ │ │ │ │ ├─ icon.d.ts
│ │ │ │ │ │ ├─ icon.d.ts.map
│ │ │ │ │ │ ├─ icon.js
│ │ │ │ │ │ ├─ icon.js.map
│ │ │ │ │ │ ├─ image.d.ts
│ │ │ │ │ │ ├─ image.d.ts.map
│ │ │ │ │ │ ├─ image.js
│ │ │ │ │ │ ├─ image.js.map
│ │ │ │ │ │ ├─ list.d.ts
│ │ │ │ │ │ ├─ list.d.ts.map
│ │ │ │ │ │ ├─ list.js
│ │ │ │ │ │ ├─ list.js.map
│ │ │ │ │ │ ├─ modal.d.ts
│ │ │ │ │ │ ├─ modal.d.ts.map
│ │ │ │ │ │ ├─ modal.js
│ │ │ │ │ │ ├─ modal.js.map
│ │ │ │ │ │ ├─ multiple-choice.d.ts
│ │ │ │ │ │ ├─ multiple-choice.d.ts.map
│ │ │ │ │ │ ├─ multiple-choice.js
│ │ │ │ │ │ ├─ multiple-choice.js.map
│ │ │ │ │ │ ├─ root.d.ts
│ │ │ │ │ │ ├─ root.d.ts.map
│ │ │ │ │ │ ├─ root.js
│ │ │ │ │ │ ├─ root.js.map
│ │ │ │ │ │ ├─ row.d.ts
│ │ │ │ │ │ ├─ row.d.ts.map
│ │ │ │ │ │ ├─ row.js
│ │ │ │ │ │ ├─ row.js.map
│ │ │ │ │ │ ├─ slider.d.ts
│ │ │ │ │ │ ├─ slider.d.ts.map
│ │ │ │ │ │ ├─ slider.js
│ │ │ │ │ │ ├─ slider.js.map
│ │ │ │ │ │ ├─ styles.d.ts
│ │ │ │ │ │ ├─ styles.d.ts.map
│ │ │ │ │ │ ├─ styles.js
│ │ │ │ │ │ ├─ styles.js.map
│ │ │ │ │ │ ├─ surface.d.ts
│ │ │ │ │ │ ├─ surface.d.ts.map
│ │ │ │ │ │ ├─ surface.js
│ │ │ │ │ │ ├─ surface.js.map
│ │ │ │ │ │ ├─ tabs.d.ts
│ │ │ │ │ │ ├─ tabs.d.ts.map
│ │ │ │ │ │ ├─ tabs.js
│ │ │ │ │ │ ├─ tabs.js.map
│ │ │ │ │ │ ├─ text-field.d.ts
│ │ │ │ │ │ ├─ text-field.d.ts.map
│ │ │ │ │ │ ├─ text-field.js
│ │ │ │ │ │ ├─ text-field.js.map
│ │ │ │ │ │ ├─ text.d.ts
│ │ │ │ │ │ ├─ text.d.ts.map
│ │ │ │ │ │ ├─ text.js
│ │ │ │ │ │ ├─ text.js.map
│ │ │ │ │ │ ├─ ui.d.ts
│ │ │ │ │ │ ├─ ui.d.ts.map
│ │ │ │ │ │ ├─ ui.js
│ │ │ │ │ │ ├─ ui.js.map
│ │ │ │ │ │ ├─ video.d.ts
│ │ │ │ │ │ ├─ video.d.ts.map
│ │ │ │ │ │ ├─ video.js
│ │ │ │ │ │ └─ video.js.map
│ │ │ │ │ ├─ core.d.ts
│ │ │ │ │ ├─ core.d.ts.map
│ │ │ │ │ ├─ core.js
│ │ │ │ │ ├─ core.js.map
│ │ │ │ │ ├─ index.d.ts
│ │ │ │ │ ├─ index.d.ts.map
│ │ │ │ │ ├─ index.js
│ │ │ │ │ ├─ index.js.map
│ │ │ │ │ ├─ model.test.d.ts
│ │ │ │ │ ├─ model.test.d.ts.map
│ │ │ │ │ ├─ model.test.js
│ │ │ │ │ └─ model.test.js.map
│ │ │ │ ├─ index.d.ts
│ │ │ │ ├─ index.d.ts.map
│ │ │ │ ├─ index.js
│ │ │ │ └─ index.js.map
│ │ │ └─ .tsbuildinfo
│ │ ├─ src/
│ │ │ ├─ 0.8/
│ │ │ │ ├─ data/
│ │ │ │ │ ├─ guards.ts
│ │ │ │ │ ├─ model-processor.ts
│ │ │ │ │ └─ signal-model-processor.ts
│ │ │ │ ├─ events/
│ │ │ │ │ ├─ a2ui.ts
│ │ │ │ │ ├─ base.ts
│ │ │ │ │ └─ events.ts
│ │ │ │ ├─ schemas/
│ │ │ │ │ ├─ .gitignore
│ │ │ │ │ └─ server_to_client_with_standard_catalog.json
│ │ │ │ ├─ styles/
│ │ │ │ │ ├─ behavior.ts
│ │ │ │ │ ├─ border.ts
│ │ │ │ │ ├─ colors.ts
│ │ │ │ │ ├─ icons.ts
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ layout.ts
│ │ │ │ │ ├─ opacity.ts
│ │ │ │ │ ├─ shared.ts
│ │ │ │ │ ├─ type.ts
│ │ │ │ │ └─ utils.ts
│ │ │ │ ├─ types/
│ │ │ │ │ ├─ client-event.ts
│ │ │ │ │ ├─ colors.ts
│ │ │ │ │ ├─ components.ts
│ │ │ │ │ ├─ primitives.ts
│ │ │ │ │ └─ types.ts
│ │ │ │ ├─ ui/
│ │ │ │ │ ├─ context/
│ │ │ │ │ │ └─ theme.ts
│ │ │ │ │ ├─ custom-components/
│ │ │ │ │ │ └─ index.ts
│ │ │ │ │ ├─ directives/
│ │ │ │ │ │ ├─ directives.ts
│ │ │ │ │ │ ├─ markdown.ts
│ │ │ │ │ │ └─ sanitizer.ts
│ │ │ │ │ ├─ utils/
│ │ │ │ │ │ ├─ utils.ts
│ │ │ │ │ │ └─ youtube.ts
│ │ │ │ │ ├─ audio.ts
│ │ │ │ │ ├─ button.ts
│ │ │ │ │ ├─ card.ts
│ │ │ │ │ ├─ checkbox.ts
│ │ │ │ │ ├─ column.ts
│ │ │ │ │ ├─ component-registry.ts
│ │ │ │ │ ├─ datetime-input.ts
│ │ │ │ │ ├─ divider.ts
│ │ │ │ │ ├─ icon.ts
│ │ │ │ │ ├─ image.ts
│ │ │ │ │ ├─ list.ts
│ │ │ │ │ ├─ modal.ts
│ │ │ │ │ ├─ multiple-choice.ts
│ │ │ │ │ ├─ root.ts
│ │ │ │ │ ├─ row.ts
│ │ │ │ │ ├─ slider.ts
│ │ │ │ │ ├─ styles.ts
│ │ │ │ │ ├─ surface.ts
│ │ │ │ │ ├─ tabs.ts
│ │ │ │ │ ├─ text-field.ts
│ │ │ │ │ ├─ text.ts
│ │ │ │ │ ├─ ui.ts
│ │ │ │ │ └─ video.ts
│ │ │ │ ├─ core.ts
│ │ │ │ ├─ index.ts
│ │ │ │ └─ model.test.ts
│ │ │ └─ index.ts
│ │ ├─ .npmrc
│ │ ├─ package-lock.json
│ │ ├─ package.json
│ │ ├─ README
│ │ ├─ README.md
│ │ └─ tsconfig.json
│ ├─ specification/
│ │ ├─ 0.8/
│ │ │ ├─ eval/
│ │ │ │ ├─ src/
│ │ │ │ │ ├─ basic_schema_matcher.ts
│ │ │ │ │ ├─ dev.ts
│ │ │ │ │ ├─ flows.ts
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ message_type_matcher.ts
│ │ │ │ │ ├─ models.ts
│ │ │ │ │ ├─ prompts.ts
│ │ │ │ │ ├─ schema_matcher.ts
│ │ │ │ │ ├─ surface_update_schema_matcher.ts
│ │ │ │ │ └─ validator.ts
│ │ │ │ ├─ .gitignore
│ │ │ │ ├─ GEMINI.md
│ │ │ │ ├─ genkit.conf.js
│ │ │ │ ├─ package.json
│ │ │ │ ├─ pnpm-lock.yaml
│ │ │ │ ├─ pnpm-workspace.yaml
│ │ │ │ ├─ README.md
│ │ │ │ └─ tsconfig.json
│ │ │ └─ json/
│ │ │ ├─ a2ui_client_capabilities_schema.json
│ │ │ ├─ catalog_description_schema.json
│ │ │ ├─ client_to_server.json
│ │ │ ├─ README.md
│ │ │ ├─ server_to_client_with_standard_catalog.json
│ │ │ ├─ server_to_client.json
│ │ │ └─ standard_catalog_definition.json
│ │ └─ 0.9/
│ │ ├─ eval/
│ │ │ ├─ src/
│ │ │ │ ├─ ai.ts
│ │ │ │ ├─ analysis_flow.ts
│ │ │ │ ├─ dev.ts
│ │ │ │ ├─ evaluation_flow.ts
│ │ │ │ ├─ evaluator.ts
│ │ │ │ ├─ generation_flow.ts
│ │ │ │ ├─ generator.ts
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ logger.ts
│ │ │ │ ├─ models.ts
│ │ │ │ ├─ prompts.ts
│ │ │ │ ├─ rateLimiter.ts
│ │ │ │ ├─ types.ts
│ │ │ │ ├─ utils.ts
│ │ │ │ └─ validator.ts
│ │ │ ├─ .gitignore
│ │ │ ├─ genkit.conf.js
│ │ │ ├─ package.json
│ │ │ ├─ pnpm-lock.yaml
│ │ │ ├─ pnpm-workspace.yaml
│ │ │ ├─ README.md
│ │ │ └─ tsconfig.json
│ │ ├─ json/
│ │ │ ├─ client_to_server.json
│ │ │ ├─ common_types.json
│ │ │ ├─ contact_form_example.jsonl
│ │ │ ├─ server_to_client.json
│ │ │ ├─ standard_catalog_definition.json
│ │ │ └─ standard_catalog_rules.txt
│ │ └─ validate.sh
│ ├─ .gitignore
│ ├─ CONTRIBUTING.md
│ ├─ LICENSE
│ ├─ mkdocs.yaml
│ ├─ README.md
│ └─ requirements-docs.txt
├─ .detect-secrets.cfg
├─ .dockerignore
├─ .env.example
├─ .gitattributes
├─ .gitignore
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
├─ CONTRIBUTING.md
├─ debug-docker.cjs
├─ docker-compose.yml
├─ docker-setup.sh
├─ Dockerfile
├─ Dockerfile.sandbox
├─ Dockerfile.sandbox-browser
├─ docs.acp.md
├─ fly.private.toml
├─ fly.toml
├─ gensparx
├─ GENSPARX_IMPLEMENTATION_GUIDE.md
├─ GENSPARX_REBRANDING_CHECKLIST.md
├─ gensparx.mjs
├─ LICENSE
├─ openclaw.mjs
├─ package.json
├─ package.json.ours.bak
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ PRODUCTION_READINESS_REPORT.md
├─ QUICK_START_REBRANDING.md
├─ README-header.png
├─ README.md
├─ REBRANDING_CHECKLIST.md
├─ render.yaml
├─ repro.js
├─ repro.sh
├─ SECURITY.md
├─ START-GATEWAY.ps1
├─ STARTUP-GUIDE.md
├─ treefile.md
├─ tsconfig.json
├─ tsdown.config.ts
├─ vitest.config.ts
├─ vitest.e2e.config.ts
├─ vitest.extensions.config.ts
├─ vitest.gateway.config.ts
├─ vitest.live.config.ts
├─ vitest.unit.config.ts
├─ WHAT_WE_CHANGED_AND_HOW_TO_RUN.md
└─ zizmor.yml
