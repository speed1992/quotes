import { currentData } from "../../../common/utils/staticDataUtils";

export async function play(index, { isPlaying }) {
    console.log("isPlaying", isPlaying)
    var synth = speechSynthesis;

    for (let i = index; i < currentData.length; i++) {
        if (isPlaying === false) {
            console.log("playing audio");
            await getNextAudio(currentData[i])
        }
        else {
            console.log("Stopping audio");
            break;
        }
    }

    function getNextAudio(message) {
        let audio = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(audio);
        return new Promise((resolve, reject) => {
            audio.onend = function () {
                console.log("Audio end event fired");
                resolve();
            }
        });
    }
}

