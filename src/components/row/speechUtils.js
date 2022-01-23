import { currentData } from "../../common/utils/staticDataUtils";

export async function play(index) {
    var synth = window.speechSynthesis;
    var isSpeaking = synth.speaking
    console.log("synth.speaking", isSpeaking)
    if (isSpeaking) {
        console.log("synth.speaking")
    }
    else {
        console.log("playing audio")
        let p = new Promise(resolve => cancel = resolve);
        for (let i = index; i < currentData.length; i++) {
            // if ()
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

