import { GROUP } from './constants.js'

/**
 * Default layout and groups
 */
export let DEFAULTS = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    const groups = GROUP

    // Préparation des noms de groupes pour l'affichage et la recherche dans TAH
    Object.values(groups).forEach(group => {
        // Si tu utilises des fichiers de traduction (i18n), tu pourrais mettre coreModule.api.Utils.i18n(group.name)
        // Ici, nos noms sont déjà en français dans constants.js
        group.name = group.name
        group.listName = `Groupe : ${group.name}`
    })
    
    const groupsArray = Object.values(groups)
    
    DEFAULTS = {
        layout: [
            {
                nestId: 'skills',
                id: 'skills',
                name: 'Compétences',
                groups: [
                    { ...groups.skills, nestId: 'skills_skills' }
                ]
            },
            {
                nestId: 'attacks',
                id: 'attacks',
                name: 'Attaques',
                groups: [
                    { ...groups.attacks, nestId: 'attacks_attacks' }
                ]
            },
            {
                nestId: 'magic',
                id: 'magic',
                name: 'Magie',
                groups: [
                    { ...groups.magic, nestId: 'magic_magic' }
                ]
            },
            {
                nestId: 'inventory',
                id: 'inventory',
                name: 'Inventaire',
                groups: [
                    { ...groups.consumables, nestId: 'inventory_consumables' },
                    { ...groups.traps, nestId: 'inventory_traps' }
                ]
            },
            {
                nestId: 'utility',
                id: 'utility',
                name: 'Utilitaires',
                groups: [
                    { ...groups.utility, nestId: 'utility_utility' }
                ]
            }
        ],
        groups: groupsArray
    }
})