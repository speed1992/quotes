export function hitTranslationAPI({ from, to, inputText, signal }) {
    return fetch("https://translate.api.skitzen.com/translate", {
        method: "POST",
        body: JSON.stringify({ q: inputText, source: from, target: to, format: "text", api_key: "" }),
        headers: { "Content-Type": "application/json" },
        signal
    }).catch((e) => console.log(e))
}