# Token Action HUD - Argyropée

![Foundry Version](https://img.shields.io/badge/Foundry-v13+-ff6400.svg)
![TAH Core](https://img.shields.io/badge/TAH_Core-v2.0.16-blue.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen.svg)

**Token Action HUD - Argyropée** est une extension officielle pour Foundry VTT qui fait le pont entre le système de jeu *Argyropée* et le module indispensable *Token Action HUD Core*. 

Ce module ajoute une barre d'interface flottante au-dessus de vos tokens. Il permet aux joueurs et au Maître de Jeu de lancer des attaques, des sorts, des compétences ou d'utiliser des objets en un seul clic, **sans jamais avoir à ouvrir les fiches de personnages**.

---

## ✨ Fonctionnalités

Le HUD s'adapte dynamiquement au token sélectionné et génère les catégories suivantes :

* 🎲 **Compétences :** Accès rapide aux 32 compétences du système (Agilité, Rixe, etc.).
* ⚔️ **Attaques :** Liste de toutes les armes équipées pour frapper instantanément.
* 🔮 **Magie :** Grimoire de sorts prêts à être incantés (avec gestion du Panache).
* 🎒 **Inventaire :** * *Consommables :* Boire une potion ou utiliser un poison (déduit automatiquement la quantité).
  * *Pièges :* Déployer vos pièges sur la carte.
* ⚙️ **Utilitaires :**
  * *Initiative :* Lancer l'initiative et rejoindre le Combat Tracker.
  * *Se Reposer :* Déclencher la fenêtre de repos (Santé / Panache).
  * *Se Libérer :* Tenter de fuir l'état "Agrippé" face à un adversaire.

*(Astuce : Un clic-droit sur une arme, un sort ou un objet dans le HUD ouvre instantanément sa description complète !)*

---

## 🚀 Configuration en jeu

1. Dans votre monde, allez dans **Configuration (l'engrenage)** > **Gérer les modules**.
2. Activez **Token Action HUD Core** ET **Token Action HUD - Argyropée**.
3. **IMPORTANT (Premier lancement) :** Allez dans **Configurer les Options** > Onglet **Token Action HUD Core**, et cliquez sur le bouton rouge **"Réinitialiser les actions et les groupes"** pour forcer la création de l'interface d'Argyropée.
4. Sélectionnez un personnage sur la carte et jouez !

---

## 🛠️ Dépendances requises

Ce module ne peut pas fonctionner seul. Il nécessite :
* Le système de jeu **Argyropée**.
* Le module **[Token Action HUD Core](https://foundryvtt.com/packages/token-action-hud-core)** (Version 2.0.16 ou supérieure).

---

## 🖋️ Crédits

* **Développement du module :** Tigloux
* **Création originale d'Argyropée :** Frédéric Marin
* Basé sur l'API et le template fournis par **Larkinabout** (créateur de Token Action HUD Core).

*Le code informatique de ce module est distribué sous Licence MIT. L'univers, les termes mécaniques et l'identité visuelle d'Argyropée restent la propriété exclusive de leur auteur original.*