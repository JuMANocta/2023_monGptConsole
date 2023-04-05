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

removeElementsByClassName("dark bg-gray-900 md:flex md:w-[260px] md:flex-col");
updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]', 'flex h-full flex-1 flex-col');
updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]', 'text-base gap-4 md:gap-6 p-4 md:py-6 flex lg:px-0');

// Sélectionner l'élément à observer
const targetNode = document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');

if (targetNode) {
    // Configurer l'observateur
    const observer = new MutationObserver(updateElementsOnMutation);
    const config = { childList: true, subtree: true };

    // Démarrer l'observation
    observer.observe(targetNode, config);
}