/**
 * Asistente ARCA - Background Service Worker
 * Abre la landing page oficial al hacer clic en el icono de la extensión.
 */

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({
        url: chrome.runtime.getURL("index.html")
    });
});
