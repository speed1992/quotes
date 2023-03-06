import { currentData } from "../../../common/utils/staticDataUtils";

export async function play(index) {
  var synth = window.speechSynthesis,
    isSpeaking = synth.speaking;

  let cancel = () => { };
  cancel();

  let p = new Promise(resolve => cancel = resolve);

  console.log("synth.speaking", isSpeaking)
  if (isSpeaking) {
    console.log("synth.speaking", isSpeaking)
    console.log("cancelling all the promises")
  }
  else {
    for (let i = index; i < currentData.length; i++) {
      console.log("playing audio");
      console.log(currentData[i]["quote"]);
      await Promise.race([p, getNextAudio(currentData[i]["quote"])])
    }
  }
}

function getNextAudio(message) {
  let audio = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(audio);
  return new Promise((resolve, reject) => audio.onend = resolve);
}