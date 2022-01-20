import { currentData } from "../../utils/staticDataUtils";

export async function play(index) {
    for (let i = index; i < currentData.length; i++) {
        await getNextAudio(currentData[i])
    }
}

function getNextAudio(message) {
    let audio = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(audio);
    return new Promise(resolve => { audio.onend = resolve });
}