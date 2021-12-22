// libretranslate.com
// libretranslate.de	
// translate.mentality.rip	
// translate.astian.org	
// translate.argosopentech.com	
// translate.api.skitzen.com	
// trans.zillyhuhn.com

export function hitTranslationAPI({ from, to, inputText, signal }) {
    return fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        body: JSON.stringify({ q: inputText, source: from, target: to, format: "text", api_key: "" }),
        headers: { "Content-Type": "application/json" },
        signal
    }).catch((e) => { })
}