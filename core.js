function loadScript(url, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

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

function updateElementsOnMutation(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'DIV') {
                    updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]', 'flex h-full flex-1 flex-col');
                    updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]', 'text-base gap-4 md:gap-6 p-4 md:py-6 flex lg:px-0');
                }
            });
        }
    }
}
