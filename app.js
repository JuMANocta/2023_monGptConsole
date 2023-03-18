function removeElementsByClassName(className) {
    const elements = document.getElementsByClassName(className);
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function updateElementsByClassSelector(selector, newClasses) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length; i++) {
        elements[i].setAttribute('class', newClasses);
    }
}

removeElementsByClassName("dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col");
updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]', 'flex h-full flex-1 flex-col');
updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]', 'text-base gap-4 md:gap-6 lg:max-w-full xl:max-w-full p-4 md:py-6 flex lg:px-0');

function updateElementsOnMutation(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'DIV') {
                    updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]', 'flex h-full flex-1 flex-col');
                    updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]', 'text-base gap-4 md:gap-6 lg:max-w-full xl:max-w-full p-4 md:py-6 flex lg:px-0');
                }
            });
        }
    }
}

// Sélectionner l'élément à observer
const targetNode = document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');

if (targetNode) {
    // Configurer l'observateur
    const observer = new MutationObserver(updateElementsOnMutation);
    const config = { childList: true, subtree: true };

    // Démarrer l'observation
    observer.observe(targetNode, config);
}

// const selector = 'div[class="overflow-hidden w-full h-full relative"]';
//     const element = document.querySelector('main');
//     if (element) {
//         html2pdf().from(element).save();
//     } else {
//         alert("Élément non trouvé");
//     }

// div main
// relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1
// old div 
// overflow-hidden w-full h-full relative
// div d'envoie
// absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2

function createPdf() {
    // suppréssion de la zone d'envoie
    removeElementsByClassName('absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2')
    // const selector = "#elementId"; // Remplacez cette valeur par le sélecteur de l'élément que vous souhaitez imprimer.
    // querySelector sur la partie balise main
    const element = document.querySelector('main');
    if (element) {
        html2pdf().from(element).save();
    } else {
        alert("Élément non trouvé");
    }
}

function loadScript(url, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

if (typeof html2pdf === "undefined") {
    const html2pdfUrl = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js";
    loadScript(html2pdfUrl, createPdf);
} else {
    createPdf();
}

// remove barre envoie
    //absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2