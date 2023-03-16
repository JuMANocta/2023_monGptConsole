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
updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]', 'text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0');
