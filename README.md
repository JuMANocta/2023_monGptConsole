# Modification du DOM HTML de ChatGPT pour le rendre plus lisible et imprimable

## Création d'un BookMarklet
Un bookmarklet est un favori qui contient du code JavaScript au lieu d'une URL classique. Pour créer un bookmarklet, vous devez préfixer votre code JavaScript par **javascript:** et l'ajouter comme favori dans votre navigateur.

### Création d'un bookmarklet avec un code JavaScript compressé
```javascript
javascript:(function(){function removeElementsByClassName(e){const n=document.getElementsByClassName(e);for(;n[0];)n[0].parentNode.removeChild(n[0])}function updateElementsByClassSelector(e,n){const t=document.querySelectorAll(e);for(let e=0;e<t.length;e++)t[e].setAttribute("class",n)}removeElementsByClassName("dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"),updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0");function updateElementsOnMutation(e){for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)e.nodeType===Node.ELEMENT_NODE&&"DIV"===e.nodeName&&(updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"))}const e=document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');if(e){const n=new MutationObserver(updateElementsOnMutation);n.observe(e,{childList:!0,subtree:!0})}})();
```
### Création d'un bookmarklet avec un code JavaScript non compressé
```javascript
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
```
1. Créez un **nouveau favori** dans votre navigateur et copiez le code compressé précédent dans **l'URL du favori**. Vous pouvez également donner un nom pertinent à votre favori, par exemple "MonBookmarkletGPT".
2. Lorsque vous souhaitez exécuter le code JavaScript sur une page, cliquez simplement sur le favori "MonBookmarkletGPT" que vous avez créé. Le code sera exécuté sur **la page Web en cours**.

## Explication de chaque fonctions javascript du bookmarklet
- *removeElementsByClassName* :
Cette fonction prend en paramètre un nom de classe et supprime tous les éléments ayant cette classe sur la page. Elle récupère tous les éléments avec cette classe en utilisant document.getElementsByClassName, puis elle parcourt ces éléments et les supprime un par un en utilisant parentNode.removeChild.

- *updateElementsByClassSelector* :
Cette fonction prend un sélecteur CSS et de nouvelles classes en arguments. Elle sélectionne tous les éléments HTML correspondant au sélecteur et remplace leurs classes par les nouvelles classes spécifiées.

- Appels aux fonctions *removeElementsByClassName* et *updateElementsByClassSelector* :
Ces appels de fonctions suppriment les éléments ayant une classe spécifique et mettent à jour les classes d'autres éléments en fonction de leurs sélecteurs CSS.

- *updateElementsOnMutation* :
Cette fonction est un gestionnaire d'événements qui sera utilisée en conjonction avec un **MutationObserver**. Elle examine la liste des mutations et vérifie si des éléments ont été ajoutés. Si des éléments de type "DIV" ont été ajoutés, elle appelle la fonction *updateElementsByClassSelector* pour mettre à jour les classes des éléments correspondants.

- Configuration du *MutationObserver* :
Un *MutationObserver* est utilisé pour surveiller les modifications apportées à un élément spécifique (dans ce cas, un élément ayant la classe "flex flex-col items-center text-sm dark:bg-gray-800"). Le code sélectionne cet élément et, s'il existe, crée un nouvel observateur avec la fonction *updateElementsOnMutation* en tant que gestionnaire d'événements. L'observateur est configuré pour surveiller les modifications de la liste d'enfants (childList) et les modifications apportées aux sous-arbres (subtree). L'observation commence en appelant la méthode observe de l'observateur.

- *createPdf* :
Cette fonction est responsable de la création du PDF. Tout d'abord, elle appelle la fonction removeElementsByClassName pour supprimer les éléments de la page ayant une classe spécifique. Ensuite, elle sélectionne l'élément de la page à l'aide de document.querySelector. Si cet élément est trouvé, la fonction utilise la bibliothèque html2pdf pour créer un PDF à partir de cet élément et le sauvegarder. Si l'élément n'est pas trouvé, elle affiche une alerte indiquant "Élément non trouvé".

- *loadScript* :
Cette fonction permet de charger dynamiquement un script externe dans la page en cours. Elle prend deux paramètres : l'URL du script et une fonction de rappel (callback) qui sera exécutée lorsque le script sera chargé. La fonction crée un nouvel élément, attribue l'URL et le type, puis ajoute un gestionnaire d'événement onload pour appeler la fonction de rappel une fois le script chargé. Finalement, elle ajoute l'élément à l'en-tête de la page (document.head).

---
En conclusion, le code effectue diverses opérations sur les éléments de la page, notamment la suppression, la mise à jour des classes et la surveillance des modifications pour des mises à jour dynamiques. De plus, il génère un PDF à partir d'un élément spécifique en utilisant la fonction createPdf, qui s'appuie sur la fonction loadScript pour charger dynamiquement un script externe et exécuter une fonction de rappel lorsqu'il est chargé. Ensemble, ces fonctions offrent une solution complète pour manipuler et exporter des éléments de la page web.