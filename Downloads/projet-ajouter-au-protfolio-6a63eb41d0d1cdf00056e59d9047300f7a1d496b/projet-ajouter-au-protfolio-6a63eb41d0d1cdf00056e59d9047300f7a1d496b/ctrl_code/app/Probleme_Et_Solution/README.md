# Configuration et Corrections du Projet Next.js

## Problèmes Rencontrés et Solutions

### 1. Erreur liée à l'importation des polices Google avec `next/font/google`
#### Erreur :
```
Module not found: Can't resolve '@next/font/google'
```
#### Solution :
L'importation de `Geist` et `Geist_Mono` depuis `next/font/google` a causé une erreur car ce module n'existe plus ou a été modifié dans les nouvelles versions de Next.js. Pour corriger cela, nous avons **retiré ces imports** et utilisé une autre méthode pour gérer les polices.

---

### 2. Erreur de syntaxe dans la définition de `fontWeight`
#### Erreur :
```
Parsing ecmascript source code failed
fontWeight: 100..900,
```
#### Solution :
Le format `100..900` est incorrect. Il a été remplacé par une notation correcte, soit une plage définie via un tableau `[100, 900]` ou des valeurs précises.

---

### 3. Configuration pour le chargement des images externes
Pour autoriser le chargement d'images provenant de sources externes comme `via.placeholder.com`, nous avons ajouté la configuration suivante dans le fichier `next.config.ts` :

```ts
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['via.placeholder.com'], // Ajoute le domaine ici
  },
};
```
Cette configuration permet à Next.js de charger des images depuis le domaine spécifié.

---

## Conclusion
Avec ces modifications, le projet fonctionne sans erreurs. Assurez-vous de bien mettre à jour votre configuration et de tester le rendu après chaque changement.

---

### Copyright
**© 2025 De Gonzague Noël-Marie François**

