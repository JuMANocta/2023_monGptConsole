# Modification du DOM HTML de ChatGPT pour le rendre plus lisible

## Création d'un BookMarklet
Un bookmarklet est un favori qui contient du code JavaScript au lieu d'une URL classique. Pour créer un bookmarklet, vous devez préfixer votre code JavaScript par javascript: et l'ajouter comme favori dans votre navigateur.

```javascript
javascript:(function(){function removeElementsByClassName(e){const n=document.getElementsByClassName(e);for(;n[0];)n[0].parentNode.removeChild(n[0])}function updateElementsByClassSelector(e,n){const t=document.querySelectorAll(e);for(let e=0;e<t.length;e++)t[e].setAttribute("class",n)}removeElementsByClassName("dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"),updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0");function updateElementsOnMutation(e){for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)e.nodeType===Node.ELEMENT_NODE&&"DIV"===e.nodeName&&(updateElementsByClassSelector('div[class="flex h-full flex-1 flex-col md:pl-[260px]"]',"flex h-full flex-1 flex-col"),updateElementsByClassSelector('div[class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto"]',"text-base gap-4 md:gap-6 lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"))}const e=document.querySelector('div[class="flex flex-col items-center text-sm dark:bg-gray-800"]');if(e){const n=new MutationObserver(updateElementsOnMutation);n.observe(e,{childList:!0,subtree:!0})}})();

```

1. Créez un **nouveau favori** dans votre navigateur et copiez le code compressé précédent dans **l'URL du favori**. Vous pouvez également donner un nom pertinent à votre favori, par exemple "MonBookmarkletGPT".
2. Lorsque vous souhaitez exécuter le code JavaScript sur une page, cliquez simplement sur le favori "MonBookmarkletGPT" que vous avez créé. Le code sera exécuté sur **la page Web en cours**.

## Explication de chaque fonctions javascript du bookmarklet
- *removeElementsByClassName* :
Cette fonction prend un nom de classe en argument et sélectionne tous les éléments HTML portant cette classe. Elle supprime ensuite chacun de ces éléments en les retirant du nœud parent.

- *updateElementsByClassSelector* :
Cette fonction prend un sélecteur CSS et de nouvelles classes en arguments. Elle sélectionne tous les éléments HTML correspondant au sélecteur et remplace leurs classes par les nouvelles classes spécifiées.

- Appels aux fonctions *removeElementsByClassName* et *updateElementsByClassSelector* :
Ces appels de fonctions suppriment les éléments ayant une classe spécifique et mettent à jour les classes d'autres éléments en fonction de leurs sélecteurs CSS.

- *updateElementsOnMutation* :
Cette fonction est un gestionnaire d'événements qui sera utilisée en conjonction avec un **MutationObserver**. Elle examine la liste des mutations et vérifie si des éléments ont été ajoutés. Si des éléments de type "DIV" ont été ajoutés, elle appelle la fonction *updateElementsByClassSelector* pour mettre à jour les classes des éléments correspondants.

- Configuration du *MutationObserver* :
Un *MutationObserver* est utilisé pour surveiller les modifications apportées à un élément spécifique (dans ce cas, un élément ayant la classe "flex flex-col items-center text-sm dark:bg-gray-800"). Le code sélectionne cet élément et, s'il existe, crée un nouvel observateur avec la fonction *updateElementsOnMutation* en tant que gestionnaire d'événements. L'observateur est configuré pour surveiller les modifications de la liste d'enfants (childList) et les modifications apportées aux sous-arbres (subtree). L'observation commence en appelant la méthode observe de l'observateur.

En résumé, ce code supprime certains éléments de la page, met à jour les classes d'autres éléments et surveille les modifications apportées à un élément spécifique pour mettre à jour les classes d'éléments ajoutés en fonction de leurs sélecteurs CSS.