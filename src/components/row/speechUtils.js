import { currentData } from "../../common/utils/staticDataUtils";

export function play(index) {
    var synth = window.speechSynthesis;
    var isSpeaking = synth.speaking;
    var stop = false;
    console.log("synth.speaking", isSpeaking)
    if (isSpeaking) {
        stop = true;
        console.log('Stop set to true', stop);
        console.log("synth.speaking")
    }
    else {
        console.log("playing audio");
        (async function (stop) {
            for (let i = index; i < currentData.length; i++) {
                console.log("Stop", stop);
                if (stop) {
                    console.log("breaking loop,stopping audio")
                    break;
                }
                await getNextAudio(currentData[i])
            }
        })(stop)

    }
}

function getNextAudio(message) {
    let audio = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(audio);
    return new Promise((resolve, reject) => {
        audio.onend = resolve;
    });
}

