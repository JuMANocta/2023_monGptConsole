# Modification du DOM HTML et impression en PDF de ChatGPT

**pour le rendre plus lisible et exploitable OCR**

## **Création 2 2 `Bookmarklet`**

Un bookmarklet est un favori qui contient du code JavaScript au lieu d'une URL classique. Pour créer un bookmarklet, vous devez préfixer votre code JavaScript par ****javascript:**** et l'ajouter comme favori dans votre navigateur.

```jsx
// Création d'un bookmarklet de modification de page html un code JavaScript compressé
javascript:(function(){const barre_navigation='dark flex-shrink-0 overflow-x-hidden bg-gray-900',elargir_contenu='div[class="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl md:py-6 lg:px-0 m-auto"]',contenu_elargir='flex p-4 gap-4 text-base lg:px-0 m-auto',element_observer='div[class="flex flex-col items-center text-sm dark:bg-gray-800"]';function removeElementsByClassName(e){let n=document.getElementsByClassName(e);n=Array.from(n);for(const e of n)e.parentNode.removeChild(e)}function updateElementsByClassSelector(e,n){const l=document.querySelectorAll(e);for(let e=0;e<l.length;e++)l[e].setAttribute('class',n)}function updateElementsOnMutation(e){for(const n of e)'childList'===n.type&&Array.from(n.addedNodes).forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&'DIV'===e.nodeName&&updateElementsByClassSelector(elargir_contenu,contenu_elargir)})}removeElementsByClassName(barre_navigation),updateElementsByClassSelector(elargir_contenu,contenu_elargir);const n=document.querySelector(element_observer);n&&(new MutationObserver(updateElementsOnMutation).observe(n,{childList:!0,subtree:!0}))})();


// Création d'un bookmarklet pour imprimer la page en PDF avec un code JavaScript compressé
javascript:(function(){const e='absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2';function t(t){let n=document.getElementsByClassName(t);n=Array.from(n);for(const t of n)t.parentNode.removeChild(t)}function n(){t(e);const t=document.querySelector('main');t?((t,n)=>{const e=document.createElement('script');e.type='text/javascript',e.src=t,e.onload=n,document.head.appendChild(e)})('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js',()=>{let e={margin:[1,1],filename:'monGPT.pdf',image:{type:'jpeg',quality:.98},html2canvas:{scale:3,dpi:300,letterRendering:!0},jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}};html2pdf().set(e).from(t).save()}):alert('Élément non trouvé')}void 0===window.html2pdf?n():n()})();

```

1. Créez un **nouveau favori** dans votre navigateur et copiez le code compressé précédent dans **l'URL du favori**. Vous pouvez également donner un nom pertinent à votre favori, par exemple "MonBookmarkletGPT".
2. Lorsque vous souhaitez exécuter le code JavaScript sur une page, cliquez simplement sur le favori "MonBookmarkletGPT" que vous avez créé. Le code sera exécuté sur **la page Web en cours**.

## **Explication de chaque fonctions javascript des bookmarklets**

- *removeElementsByClassName* :
    
    Cette fonction prend un nom de classe en argument et sélectionne tous les éléments HTML portant cette classe. Elle supprime ensuite chacun de ces éléments en les retirant du nœud parent.
    
- *updateElementsByClassSelector* :
    
    Cette fonction prend un sélecteur CSS et de nouvelles classes en arguments. Elle sélectionne tous les éléments HTML correspondant au sélecteur et remplace leurs classes par les nouvelles classes spécifiées.
    
- Appels aux fonctions *removeElementsByClassName* et *updateElementsByClassSelector* :
    
    Ces appels de fonctions suppriment les éléments ayant une classe spécifique et mettent à jour les classes d'autres éléments en fonction de leurs sélecteurs CSS.
    
- *updateElementsOnMutation* :
    
    Cette fonction est un gestionnaire d'événements qui sera utilisée en conjonction avec un **MutationObserver**. Elle examine la liste des mutations et vérifie si des éléments ont été ajoutés. Si des éléments de type "DIV" ont été ajoutés, elle appelle la fonction *updateElementsByClassSelector* pour mettre à jour les classes des éléments correspondants.
    
- Configuration du *MutationObserver* :
    
    Un *MutationObserver* est utilisé pour surveiller les modifications apportées à un élément spécifique (dans ce cas, un élément ayant la classe "flex flex-col items-center text-sm dark:bg-gray-800").
    
    Le code sélectionne cet élément et, s'il existe, crée un nouvel observateur avec la fonction *updateElementsOnMutation* en tant que gestionnaire d'événements. L'observateur est configuré pour surveiller les modifications de la liste d'enfants (childList) et les modifications apportées aux sous-arbres (subtree). L'observation commence en appelant la méthode observe de l'observateur.
    
- createPdf :
    
    Cette fonction est responsable de la création du PDF. Tout d'abord, elle appelle la fonction removeElementsByClassName pour supprimer les éléments de la page ayant une classe spécifique. Ensuite, elle sélectionne l'élément de la page à l'aide de document.querySelector. Si cet élément est trouvé, la fonction utilise la bibliothèque html2pdf pour créer un PDF à partir de cet élément et le sauvegarder. Si l'élément n'est pas trouvé, elle affiche une alerte indiquant "Élément non trouvé".
    
- loadScript :
    
    Cette fonction permet de charger dynamiquement un script externe dans la page en cours. Elle prend deux paramètres : l'URL du script et une fonction de rappel (callback) qui sera exécutée lorsque le script sera chargé. La fonction crée un nouvel élément, attribue l'URL et le type, puis ajoute un gestionnaire d'événement onload pour appeler la fonction de rappel une fois le script chargé. Finalement, elle ajoute l'élément à l'en-tête de la page (document.head).
    

<aside>
💡 En conclusion, le code effectue diverses opérations sur les éléments de la page, notamment la suppression, la mise à jour des classes et la surveillance des modifications pour des mises à jour dynamiques. De plus, il génère un PDF à partir d'un élément spécifique en utilisant la fonction createPdf, qui s'appuie sur la fonction loadScript pour charger dynamiquement un script externe et exécuter une fonction de rappel lorsqu'il est chargé. Ensemble, ces fonctions offrent une solution complète pour manipuler et exporter des éléments de la page web.

</aside>

## Source des Bookmarklets

Ce code peut directement être injecté dans la console du navigateur sur la page web de chatGPT

### Bookmarklet de modification de page html

```jsx
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
```

## Bookmarklet pour imprimer la page en PDF

```jsx
const element_supprimer = 'absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2';

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
```

## Ajout des Bookmarklets avec lien a href

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookmarklet</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            flex-direction: column;
        }

        .content {
            text-align: center;
        }

        .button {
            display: inline-block;
            padding: 12px 24px;
            background-image: linear-gradient(45deg, #4169e1, #1e90ff);
            border: none;
            border-radius: 4px;
            color: white;
            text-decoration: none;
            font-size: 16px;
            transition: background-image 0.3s;
            margin-top: 10px;
        }

        .button:hover {
            background-image: linear-gradient(45deg, #f26, #f89);
        }

        @media (max-width: 767px) {
            .button {
                font-size: 14px;
                padding: 10px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="content">
        <h1>Mon Bookmarklet</h1>
        <p>
            Pour ajouter ce bookmarklet à vos favoris, faites glisser le lien suivant dans votre barre de favoris:
        </p>
        <a class="button" href="javascript:(function(){ /* Bookmarklet de modification de page html JavaScript ici */ })();">Bookmarklet de modification de page html</a>
        <a class="button" href="javascript:(function(){ /* Bookmarklet pour imprimer la page en PDF JavaScript ici */ })();">Bookmarklet pour imprimer la page en PDF</a>
    </div>
</body>
</html>
```