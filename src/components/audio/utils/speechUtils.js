import { currentData } from "../../../common/utils/staticDataUtils";

export async function play(index, synth, setTriggerChange) {
    // console.log("index", index)
    console.log("synth inside play", synth.speaking)
    // synth.talking = true;
    setTriggerChange();

    try {
        for (let i = index; i < currentData.length; i++) {
            // console.log("Inside for loop")
            var message = currentData[index]['quote'];
            await playCurrentQuote(synth, message);
        }
    }
    catch (e) {
        console.log("inside catch")
    }
}

async function playCurrentQuote(synth, message) {

    return new Promise((resolve, reject) => {

        // console.log("Inside playCurrentQuote")
        const utterThis = new SpeechSynthesisUtterance(message);
        synth.speak(utterThis);

        utterThis.onend = function (event) {
            // console.log("SpeechSynthesisUtterance.onend");
            resolve();
        };

        utterThis.onpause = function (event) {
            // console.log("SpeechSynthesisUtterance.onend");
            reject();
        };

    });

}

export async function pause(synth, setTriggerChange) {
    synth.pause();
    // synth.cancel();
    console.log("synth inside pause", synth.speaking)
    setTriggerChange();
}