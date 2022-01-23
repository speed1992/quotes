import { currentData } from "../../common/utils/staticDataUtils";

export async function play(index) {
    var synth = window.speechSynthesis;
    var isSpeaking = synth.speaking;
    var stop = false;
    console.log("synth.speaking", isSpeaking)
    if (isSpeaking) {
        stop = true;
        console.log("synth.speaking")
    }
    else {
        console.log("playing audio")
        for (let i = index; i < currentData.length; i++) {
            if (stop) break;
            await getNextAudio(currentData[i])
        }
    }



    function getNextAudio(message) {
        let audio = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(audio);
        return new Promise((resolve, reject) => {
            audio.onend = resolve;
        });
    }
}

