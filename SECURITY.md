# Security Policy

If you believe you've found a security issue in Gensparx, please report it privately so the team can address it quickly and responsibly.

## Reporting

Report vulnerabilities directly to the repository that best matches the affected component. The Gensparx core CLI and gateway, the macOS desktop app, the iOS app, and the Android app are all maintained in the primary Gensparx repository at [gensparx/gensparx](https://github.com/gensparx/gensparx). ClawHub issues should be reported to [gensparx/clawhub](https://github.com/gensparx/clawhub), and trust and threat model concerns belong in [gensparx/trust](https://github.com/gensparx/trust). For issues that don't fit a specific repository, or if you are unsure where to file, email [security@gensparx.com](mailto:security@gensparx.com) and the team will route it appropriately. For full reporting instructions, see the [Trust page](https://trust.gensparx.com).

## Required Report Fields

Every report should include a clear title, a severity assessment, a description of the impact, the affected component, step-by-step technical reproduction instructions, demonstrated impact, environment details, and remediation advice. Reports that omit reproduction steps, demonstrated impact, or remediation advice will be deprioritized. Given the volume of AI-generated scanner findings received, the team must ensure it is receiving vetted reports from researchers who genuinely understand the issues they are submitting.

## Report Acceptance Gate (Triage Fast Path)

For fastest triage, a report should include the exact vulnerable path (file, function, and line range) on a current revision; tested version details such as the Gensparx version and commit SHA; a reproducible proof-of-concept against the latest main branch or latest released version; demonstrated impact tied to Gensparx's documented trust boundaries; for exposed-secret reports, proof that the credential is Gensparx-owned or grants access to Gensparx-operated infrastructure; an explicit statement that the report does not rely on adversarial operators sharing one gateway host or config; a scope check explaining why the report is not covered by the Out of Scope section; and for command-risk or parity reports, a concrete boundary-bypass path covering auth, approval, allowlist, or sandbox. Parity-only findings are treated as hardening, not vulnerabilities. Reports missing these elements may be closed as invalid or no-action.

## Common False-Positive Patterns

The following are frequently reported but are typically closed with no code change. Prompt-injection-only chains without a boundary bypass are out of scope, as prompt injection alone does not constitute a vulnerability. Operator-intended local features such as the TUI local shell command presented as remote injection are not accepted. Authorized user-triggered local actions presented as privilege escalation are not accepted — for example, an allowlisted sender running an export command to write on the host is expected behavior in the Gensparx trust model unless an auth, sandbox, or boundary bypass is demonstrated. Reports that only show a malicious plugin executing privileged actions after a trusted operator installs or enables it are not accepted. Reports that assume per-user multi-tenant authorization on a shared gateway host or config are not accepted. Reports that only show differences in heuristic detection parity without demonstrating bypass of auth, approvals, allowlist enforcement, sandboxing, or other documented trust boundaries are not accepted. ReDoS or DoS claims that require trusted operator configuration input without a trust-boundary bypass are not accepted. Archive or install extraction claims that require pre-existing local filesystem priming in a trusted state without showing an untrusted path that can create or control that primitive are not accepted. Reports that depend on replacing or rewriting an already-approved executable path on a trusted host without showing an untrusted path to perform that write are not accepted. Reports that depend on pre-existing symlinked skill or workspace filesystem state without showing an untrusted path that can create or control that state are not accepted. Missing HSTS findings on default local or loopback deployments are not accepted. Slack webhook signature findings when HTTP mode already uses signing-secret verification are not accepted. Discord inbound webhook signature findings for paths not used by this repository's Discord integration are not accepted. Claims that Microsoft Teams fileConsent invoke uploadInfo.uploadUrl is attacker-controlled without demonstrating an auth boundary bypass, a real authenticated Teams or Bot Framework event carrying an attacker-chosen URL, or compromise of the Microsoft or Bot trust path are not accepted. Scanner-only claims against stale or nonexistent paths, or claims without a working reproduction, are not accepted.

## Duplicate Report Handling

Before filing, search existing advisories. Include likely duplicate GHSA IDs in your report when applicable. Maintainers may close lower-quality or later duplicates in favor of the earliest high-quality canonical report.

## Bug Bounties

Gensparx is a labor of love. There is no bug bounty program and no budget for paid reports. Responsible disclosure is still strongly encouraged so that issues can be fixed quickly. The best way to contribute to the project right now is by sending pull requests.

## Maintainer Note: GHSA Updates via CLI

When patching a GHSA via the GitHub API, include the header `X-GitHub-Api-Version: 2022-11-28` or newer. Without it, some fields — notably CVSS — may not persist even if the request returns a 200 status.

## Operator Trust Model

Gensparx does not model one gateway as a multi-tenant, adversarial user boundary. Authenticated gateway callers are treated as trusted operators for that gateway instance. Session identifiers such as sessionKey and session IDs are routing controls, not per-user authorization boundaries. If one operator can view data from another operator on the same gateway, that is expected behavior in this trust model. Gensparx can technically run multiple gateway instances on one machine, but the recommended approach is clean separation by trust boundary — one user per machine or host, one gateway for that user, and one or more agents inside that gateway. If multiple users need Gensparx, use one VPS or host-level OS user boundary per user. For advanced setups, multiple gateways on one machine are possible only with strict isolation and are not the recommended default. Exec behavior is host-first by default, with `agents.defaults.sandbox.mode` defaulting to off. The `tools.exec.host` setting defaults to sandbox as a routing preference, but if no sandbox runtime is active for the session, exec runs on the gateway host. Implicit exec calls with no explicit host in the tool call follow the same behavior. This is expected in Gensparx's one-user trusted-operator model. If isolation is needed, enable sandbox mode and maintain strict tool policy.

## Trusted Plugin Concept

Plugins and extensions are part of Gensparx's trusted computing base for a gateway. Installing or enabling a plugin grants it the same trust level as local code running on that gateway host. Plugin behavior such as reading environment variables, reading files, or running host commands is expected inside this trust boundary. Security reports must show a boundary bypass — for example an unauthenticated plugin load, an allowlist or policy bypass, or a sandbox or path-safety bypass — not only malicious behavior from a trusted-installed plugin.

## Out of Scope

The following are explicitly out of scope. Public internet exposure is out of scope. Using Gensparx in ways that the documentation recommends against is out of scope. Deployments where mutually untrusted or adversarial operators share one gateway host and config are out of scope, including reports expecting per-operator isolation for sessions.list, sessions.preview, chat.history, or similar control-plane reads. Prompt-injection-only attacks without a policy, auth, or sandbox boundary bypass are out of scope. Reports that require write access to trusted local state such as ~/.gensparx or workspace files like MEMORY.md and memory files are out of scope. Reports where exploitability depends on attacker-controlled pre-existing symlink or hardlink filesystem state in trusted local paths are out of scope unless a separate untrusted boundary bypass is shown that creates that state. Reports whose only claim is sandbox or workspace read expansion through trusted local skill or workspace symlink state are out of scope unless a separate untrusted boundary bypass creates or controls that state. Reports whose only claim is post-approval executable identity drift on a trusted host via same-path file replacement or rewrite are out of scope unless a separate untrusted boundary bypass is shown for that host write primitive. Reports where the only demonstrated impact is an already-authorized sender intentionally invoking a local-action command without bypassing auth, sandbox, or another documented boundary are out of scope. Reports where the only claim is that a trusted-installed or enabled plugin can execute with gateway or host privileges are out of scope as this is documented trust model behavior. Any report whose only claim is that an operator-enabled dangerous or dangerously prefixed config option weakens defaults is out of scope as these are explicit break-glass tradeoffs by design. Reports that depend on trusted operator-supplied configuration values to trigger availability impact are out of scope. Reports whose only claim is heuristic or parity drift in command-risk detection across exec surfaces without a demonstrated trust-boundary bypass are out of scope. Exposed secrets that are third-party or user-controlled credentials not owned by Gensparx and not granting access to Gensparx-operated infrastructure or services without demonstrated Gensparx impact are out of scope. Reports whose only claim is host-side exec when sandbox runtime is disabled or unavailable without a boundary bypass are out of scope. Reports whose only claim is that a platform-provided upload destination URL is untrusted without proving attacker control in an authenticated production flow are out of scope.

## Deployment Assumptions

Gensparx security guidance assumes the host where Gensparx runs is within a trusted OS and admin boundary; that anyone who can modify ~/.gensparx state or config including gensparx.json is effectively a trusted operator; that a single gateway shared by mutually untrusted people is not a recommended setup and that separate gateways or at minimum separate OS users or hosts per trust boundary should be used; that authenticated gateway callers are treated as trusted operators and that session identifiers such as sessionKey are routing controls and not per-user authorization boundaries; and that multiple gateway instances can run on one machine, though the recommended model is clean per-user isolation preferring one host or VPS per user.

## One-User Trust Model

Gensparx's security model is that of a personal assistant — one trusted operator, potentially many agents — not a shared multi-tenant bus. If multiple people can message the same tool-enabled agent such as in a shared Slack workspace, they can all steer that agent within its granted permissions. Session or memory scoping reduces context bleed but does not create per-user host authorization boundaries. For mixed-trust or adversarial users, isolation should be enforced at the OS user, host, or gateway level using separate credentials per boundary. A company-shared agent can be a valid setup when users are in the same trust boundary and the agent is strictly business-only. For company-shared setups, use a dedicated machine, VM, or container and dedicated accounts, and avoid mixing personal data on that runtime. If that host or browser profile is logged into personal accounts, the boundary has been collapsed and personal-data exposure risk increases.

## Agent and Model Assumptions

The model or agent is not a trusted principal. Assume prompt and content injection can manipulate behavior. Security boundaries come from host and config trust, auth, tool policy, sandboxing, and exec approvals. Prompt injection by itself is not a vulnerability report unless it crosses one of those boundaries. Hook and webhook-driven payloads should be treated as untrusted content, and unsafe bypass flags should remain disabled unless doing tightly scoped debugging. Weak model tiers are generally easier to prompt-inject. For tool-enabled or hook-driven agents, prefer strong modern model tiers and strict tool policy plus sandboxing where possible.

## Gateway and Node Trust

Gensparx separates routing from execution, but both remain inside the same operator trust boundary. The gateway is the control plane — if a caller passes gateway auth, they are treated as a trusted operator for that gateway. A node is an execution extension of the gateway, and pairing a node grants operator-level remote capability on that node. Exec approvals via allowlist or the approval UI are operator guardrails to reduce accidental command execution, not a multi-tenant authorization boundary. Differences in command-risk warning heuristics between exec surfaces do not by themselves constitute a security-boundary bypass. For untrusted-user isolation, split by trust boundary using separate gateways and separate OS users or hosts per boundary.

## Workspace Memory Trust Boundary

MEMORY.md and memory files under memory/ are plain workspace files treated as trusted local operator state. If someone can edit workspace memory files, they have already crossed the trusted operator boundary. Memory search indexing and recall over those files is expected behavior, not a sandbox or security boundary. If isolation between mutually untrusted users is needed, split by OS user or host and run separate gateways.

## Plugin Trust Boundary

Plugins and extensions are loaded in-process with the gateway and are treated as trusted code. Plugins can execute with the same OS privileges as the Gensparx process. Runtime helpers are convenience APIs, not a sandbox boundary. Only install plugins you trust, and prefer using the plugins allow list to pin explicit trusted plugin IDs.

## Temp Folder Boundary

Gensparx uses a dedicated temp root for local media handoff and sandbox-adjacent temp artifacts. The preferred temp root is /tmp/gensparx when available and safe on the host. The fallback temp root is the OS temp directory under a gensparx subdirectory, or gensparx-uid on multi-user hosts. Sandbox media validation allows absolute temp paths only under the Gensparx-managed temp root. Arbitrary host tmp paths are not treated as trusted media roots. Plugin and extension code should use Gensparx temp helpers rather than raw OS temp directory defaults when handling media files.

## Operational Guidance

For threat model and hardening guidance including the security audit command, see the Gensparx documentation at https://docs.gensparx.com/gateway/security.

For tool filesystem hardening, `tools.exec.applyPatch.workspaceOnly: true` is recommended and keeps apply_patch writes and deletes within the configured workspace directory. `tools.fs.workspaceOnly: true` is optional and restricts read, write, edit, and apply_patch paths along with native prompt image auto-load paths to the workspace directory. Avoid setting `tools.exec.applyPatch.workspaceOnly: false` unless you fully trust everyone who can trigger tool execution.

For sub-agent delegation hardening, keep sessions_spawn denied unless delegated runs are explicitly needed. Keep the subagents allowAgents setting narrow and include only agents with sandbox settings you trust. When delegation must stay sandboxed, call sessions_spawn with `sandbox: "require"` — the default is inherit — which rejects the spawn unless the target child runtime is sandboxed, preventing a less-restricted session from delegating work into an unsandboxed child by mistake.

## Web Interface Safety

Gensparx's web interface including the gateway control UI and HTTP endpoints is intended for local use only. The recommended configuration keeps the gateway loopback-only on 127.0.0.1 or ::1 using `gateway.bind="loopback"` as the default. The `gateway.controlUi.dangerouslyDisableDeviceAuth` option is intended for localhost-only break-glass use. Gensparx keeps deployment flexibility by design and does not hard-forbid non-local setups. Non-local and other risky configurations are surfaced by the security audit command as dangerous findings, and this operator-selected tradeoff is by design and not by itself a security vulnerability. Network-visible canvas is intentional for trusted node scenarios on LAN or tailnet, and this deployment model alone is not a security vulnerability. The gateway should not be exposed to the public internet via direct bind to 0.0.0.0 or a public reverse proxy, as it is not hardened for public exposure. For remote access, prefer an SSH tunnel or Tailscale serve and funnel so the gateway still binds to loopback with strong gateway auth. The gateway HTTP surface includes canvas routes and their content should be treated as sensitive and untrusted, and should not be exposed beyond loopback unless the risk is fully understood.

## Runtime Requirements

Gensparx requires Node.js 22.12.0 or later (LTS). This version includes important security patches including CVE-2025-59466 covering an async_hooks DoS vulnerability and CVE-2026-21636 covering a permission model bypass vulnerability. Verify your Node.js version by running `node --version`, which should report v22.12.0 or later.

When running Gensparx in Docker, the official image runs as a non-root user for a reduced attack surface. Use the `--read-only` flag when possible for additional filesystem protection, and limit container capabilities with `--cap-drop=ALL`. An example secure Docker run is:

```bash
docker run --read-only --cap-drop=ALL \
  -v gensparx-data:/app/data \
  gensparx/gensparx:latest
```

## Security Scanning

This project uses detect-secrets for automated secret detection in CI/CD. See .detect-secrets.cfg for configuration and .secrets.baseline for the baseline. To run locally, install detect-secrets version 1.5.0 via pip and run `detect-secrets scan --baseline .secrets.baseline`.
