import Foundation
import SwabbleKit
import Testing
@testable import Gensparx

private let gensparxTranscript = "hey gensparx do thing"

private func gensparxSegments(postTriggerStart: TimeInterval) -> [WakeWordSegment] {
    makeSegments(
        transcript: gensparxTranscript,
        words: [
            ("hey", 0.0, 0.1),
            ("gensparx", 0.2, 0.1),
            ("do", postTriggerStart, 0.1),
            ("thing", postTriggerStart + 0.2, 0.1),
        ])
}

@Suite struct VoiceWakeManagerExtractCommandTests {
    @Test func extractCommandReturnsNilWhenNoTriggerFound() {
        let transcript = "hello world"
        let segments = makeSegments(
            transcript: transcript,
            words: [("hello", 0.0, 0.1), ("world", 0.2, 0.1)])
        #expect(VoiceWakeManager.extractCommand(from: transcript, segments: segments, triggers: ["gensparx"]) == nil)
    }

    @Test func extractCommandTrimsTokensAndResult() {
        let segments = gensparxSegments(postTriggerStart: 0.9)
        let cmd = VoiceWakeManager.extractCommand(
            from: gensparxTranscript,
            segments: segments,
            triggers: ["  gensparx  "],
            minPostTriggerGap: 0.3)
        #expect(cmd == "do thing")
    }

    @Test func extractCommandReturnsNilWhenGapTooShort() {
        let segments = gensparxSegments(postTriggerStart: 0.35)
        let cmd = VoiceWakeManager.extractCommand(
            from: gensparxTranscript,
            segments: segments,
            triggers: ["gensparx"],
            minPostTriggerGap: 0.3)
        #expect(cmd == nil)
    }

    @Test func extractCommandReturnsNilWhenNothingAfterTrigger() {
        let transcript = "hey gensparx"
        let segments = makeSegments(
            transcript: transcript,
            words: [("hey", 0.0, 0.1), ("gensparx", 0.2, 0.1)])
        #expect(VoiceWakeManager.extractCommand(from: transcript, segments: segments, triggers: ["gensparx"]) == nil)
    }

    @Test func extractCommandIgnoresEmptyTriggers() {
        let segments = gensparxSegments(postTriggerStart: 0.9)
        let cmd = VoiceWakeManager.extractCommand(
            from: gensparxTranscript,
            segments: segments,
            triggers: ["", "   ", "gensparx"],
            minPostTriggerGap: 0.3)
        #expect(cmd == "do thing")
    }
}

private func makeSegments(
    transcript: String,
    words: [(String, TimeInterval, TimeInterval)])
-> [WakeWordSegment] {
    var searchStart = transcript.startIndex
    var output: [WakeWordSegment] = []
    for (word, start, duration) in words {
        let range = transcript.range(of: word, range: searchStart..<transcript.endIndex)
        output.append(WakeWordSegment(text: word, start: start, duration: duration, range: range))
        if let range { searchStart = range.upperBound }
    }
    return output
}
