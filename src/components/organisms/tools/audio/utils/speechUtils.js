import { scrollToMemorizedRow } from '../../../../../common/utils/utils'

export async function play(index, currentData, voiceSpeed, voiceType, listRef, setScrollPosition) {
    const synth = window.speechSynthesis,
        isSpeaking = synth.speaking

    const voices = synth.getVoices()

    let cancel = () => {}
    cancel()

    let p = new Promise((resolve) => (cancel = resolve))

    if (!isSpeaking)
        for (let i = index; i < currentData.length; i++) {
            setScrollPosition(i)
            scrollToMemorizedRow(listRef, i, currentData)
            await Promise.race([p, getNextAudio(currentData[i]['quote'], voiceSpeed, voiceType, voices)])
        }
}

function getNextAudio(message, voiceSpeed, voiceType, voices) {
    let audio = new SpeechSynthesisUtterance(message)
    audio.rate = voiceSpeed
    audio.voice = voices[voiceType]
    audio.lang = voices[voiceType].lang
    window.speechSynthesis.speak(audio)

    return new Promise((resolve, reject) => (audio.onend = resolve))
}
