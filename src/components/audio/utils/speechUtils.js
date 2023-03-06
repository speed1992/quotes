export async function play(index, currentData) {
    var synth = window.speechSynthesis,
        isSpeaking = synth.speaking

    let cancel = () => {}
    cancel()

    let p = new Promise((resolve) => (cancel = resolve))

    if (!isSpeaking) for (let i = index; i < currentData.length; i++) await Promise.race([p, getNextAudio(currentData[i]['quote'])])
}

function getNextAudio(message) {
    let audio = new SpeechSynthesisUtterance(message)
    window.speechSynthesis.speak(audio)
    return new Promise((resolve, reject) => (audio.onend = resolve))
}
