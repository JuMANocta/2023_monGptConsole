// Description: Bookmarklet to modif DOM HTML
javascript:(function(){function removeElementsByClassName(e){const n=document.getElementsByClassName(e);for(;n[0];)n[0].parentNode.removeChild(n[0])}function updateElementsByClassSelector(e,n){const t=document.querySelectorAll(e);for(let e=0;e<t.length;e++)t[e].setAttribute("class",n)}removeElementsByClassName("dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"),updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0");function updateElementsOnMutation(e){for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)e.nodeType===Node.ELEMENT_NODE&&"DIV"===e.nodeName&&(updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"))}const e=document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');if(e){const n=new MutationObserver(updateElementsOnMutation);n.observe(e,{childList:!0,subtree:!0})}})();

// Description: Bookmarklet to download a PDF from a DOM HTML
javascript:(function() {
    function createPdf() {
        removeElementsByClassName('absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2');
        const element = document.querySelector('main');
        if (element) {
            html2pdf().from(element).save();
        } else {
            alert("Élément non trouvé");
        }
    }

    function removeElementsByClassName(className) {
        const elements = document.getElementsByClassName(className);
        while (elements[0]) {
            elements[0].parentNode.removeChild(elements[0]);
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
})();

//javascript:(function(){function removeElementsByClassName(e){const n=document.getElementsByClassName(e);for(;n[0];)n[0].parentNode.removeChild(n[0])}function updateElementsByClassSelector(e,n){const t=document.querySelectorAll(e);for(let e=0;e<t.length;e++)t[e].setAttribute("class",n)}removeElementsByClassName("dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"),updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0");function updateElementsOnMutation(e){for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)e.nodeType===Node.ELEMENT_NODE&&"DIV"===e.nodeName&&(updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"))}const e=document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');if(e){const n=new MutationObserver(updateElementsOnMutation);n.observe(e,{childList:!0,subtree:!0})}})();
