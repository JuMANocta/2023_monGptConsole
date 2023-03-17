function createPdf() {
    removeElementsByClassName('absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2')
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