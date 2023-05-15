const element_supprimer = 'absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2';

function removeElementsByClassName(className) {
    let elements = document.getElementsByClassName(className);
    elements = Array.from(elements);
    for (const element of elements) {
        element.parentNode.removeChild(element);
    }
}

function createPdf() {
    removeElementsByClassName(element_supprimer);
    const element = document.querySelector('main');
    if (element) {
        let opt = {
            margin:       [1, 1], //marges [haut, gauche, bas, droite] ou [vertical, horizontal]
            filename:     'monGPT.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 3, dpi: 300, letterRendering: true }, // augmenter dpi et scale pour améliorer la qualité
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
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