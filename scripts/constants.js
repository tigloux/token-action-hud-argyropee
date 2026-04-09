/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-argyropee'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '2.0.16'

/**
 * Action types (Permet d'identifier le type d'action déclenchée)
 */
export const ACTION_TYPE = {
    skill: 'Compétence',
    attack: 'Attaque',
    spell: 'Magie',
    consumable: 'Consommable',
    trap: 'Piège',
    utility: 'Utilitaire'
}

/**
 * Groups (Tes catégories dans le HUD)
 */
export const GROUP = {
    skills: { id: 'skills', name: 'Compétences', type: 'system' },
    attacks: { id: 'attacks', name: 'Attaques', type: 'system' },
    magic: { id: 'magic', name: 'Magie', type: 'system' },
    consumables: { id: 'consumables', name: 'Consommables', type: 'system' },
    traps: { id: 'traps', name: 'Pièges', type: 'system' },
    utility: { id: 'utility', name: 'Utilitaires', type: 'system' }
}

/**
 * Item types (Fait le lien entre les types de ton system.json et les groupes du HUD)
 */
export const ITEM_TYPE = {
    arme: { groupId: 'attacks' },
    sort: { groupId: 'magic' },
    consommable: { groupId: 'consumables' },
    piege: { groupId: 'traps' }
}