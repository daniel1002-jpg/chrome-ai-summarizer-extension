chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "summarizeText",
        title: "Resumir texto seleccionado",
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "summarizeText") {
        const selectedText = info.selectionText;
        console.log("Texto seleccionado para resumir:", selectedText);
        chrome.storage.local.set({"lastSelectedText": selectedText});
    }
});