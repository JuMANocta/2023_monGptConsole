const barre_navigation = 'dark flex-shrink-0 overflow-x-hidden bg-gray-900';
const elargir_contenu = 'div[class="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0 m-auto"]';
const contenu_elargir = 'flex p-4 gap-4 text-base lg:px-0 m-auto';
const element_observer = 'div[class="flex flex-col items-center text-sm dark:bg-gray-800"]'

function removeElementsByClassName(className) {
    let elements = document.getElementsByClassName(className);
    elements = Array.from(elements);
    for (const element of elements) {
        element.parentNode.removeChild(element);
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
            Array.from(mutation.addedNodes).forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'DIV') {
                    updateElementsByClassSelector(elargir_contenu, contenu_elargir);
                }
            });
        }
    }
}

removeElementsByClassName(barre_navigation);
updateElementsByClassSelector(elargir_contenu, contenu_elargir);

// Sélectionner l'élément à observer
const targetNode = document.querySelector(element_observer);

if (targetNode) {
    // Configurer l'observateur
    const observer = new MutationObserver(updateElementsOnMutation);
    const config = { childList: true, subtree: true };

    // Démarrer l'observation
    observer.observe(targetNode, config);
}