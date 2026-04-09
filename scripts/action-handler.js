// System Module Imports
// Note: Si tu n'utilises pas constants.js et utils.js, tu pourras retirer ces imports plus tard.
import { ACTION_TYPE, ITEM_TYPE } from './constants.js';
import { Utils } from './utils.js';

export let ActionHandler = null;

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's ActionHandler class and builds system-defined actions for the HUD
     */
    ActionHandler = class ActionHandler extends coreModule.api.ActionHandler {
        /**
         * Build system actions
         * Called by Token Action HUD Core
         * @override
         * @param {array} groupIds
         */
        async buildSystemActions (groupIds) {
            // Set actor and token variables
            this.actors = (!this.actor) ? this._getActors() : [this.actor];
            this.actorType = this.actor?.type;

            if (!this.actor) return;

            // Construction de l'arsenal d'Argyropée
            this.#buildSkills();
            this.#buildAttacks();
            this.#buildMagic();
            this.#buildInventory();
            this.#buildUtilities();
        }

        /**
         * Build skills actions
         * @private
         */
        #buildSkills() {
            const skills = CONFIG.ARGYROPEE.competences;
            if (!skills) return;

            const actions = Object.entries(skills).map(([key, label]) => ({
                id: key,
                name: label,
                listName: `Compétence : ${label}`, // Utile pour la recherche textuelle de TAH
                encodedValue: `skill|${key}`,
                icon: '<i class="fas fa-dice-d10"></i>'
            }));

            this.addActions(actions, { id: 'skills', type: 'system' });
        }

        /**
         * Build attacks actions
         * @private
         */
        #buildAttacks() {
            const weapons = this.actor.items.filter(i => i.type === "arme");
            if (weapons.length === 0) return;

            const actions = weapons.map(w => ({
                id: w.id,
                name: w.name,
                listName: `Attaque : ${w.name}`,
                encodedValue: `attack|${w.id}`,
                img: w.img
            }));

            this.addActions(actions, { id: 'attacks', type: 'system' });
        }

        /**
         * Build magic actions
         * @private
         */
        #buildMagic() {
            const spells = this.actor.items.filter(i => i.type === "sort");
            if (spells.length === 0) return;

            const actions = spells.map(s => ({
                id: s.id,
                name: s.name,
                listName: `Sort : ${s.name}`,
                encodedValue: `spell|${s.id}`,
                img: s.img
            }));

            this.addActions(actions, { id: 'magic', type: 'system' });
        }

        /**
         * Build inventory actions (Consumables & Traps)
         * @private
         */
        #buildInventory() {
            // Consommables
            const cons = this.actor.items.filter(i => i.type === "consommable" && i.system.quantity > 0);
            if (cons.length > 0) {
                const consActions = cons.map(c => ({
                    id: c.id, 
                    name: `${c.name} (${c.system.quantity})`, 
                    listName: `Objet : ${c.name}`,
                    encodedValue: `consumable|${c.id}`, 
                    icon: '<i class="fas fa-flask"></i>'
                }));
                this.addActions(consActions, { id: "consumables", type: "system" });
            }

            // Pièges
            const traps = this.actor.items.filter(i => i.type === "piege" && i.system.quantity > 0);
            if (traps.length > 0) {
                const trapActions = traps.map(t => ({
                    id: t.id, 
                    name: `${t.name} (${t.system.quantity})`, 
                    listName: `Piège : ${t.name}`,
                    encodedValue: `trap|${t.id}`, 
                    icon: '<i class="fas fa-cog"></i>'
                }));
                this.addActions(trapActions, { id: "traps", type: "system" });
            }
        }

        /**
         * Build utilities actions
         * @private
         */
        #buildUtilities() {
            const actions = [
                { id: "init", name: "Initiative", listName: "Action : Initiative", encodedValue: "utility|init", icon: '<i class="fas fa-bolt"></i>' },
                { id: "rest", name: "Se Reposer", listName: "Action : Se Reposer", encodedValue: "utility|rest", icon: '<i class="fas fa-bed"></i>' },
                { id: "escape", name: "Se Libérer (Agrippé)", listName: "Action : Se Libérer", encodedValue: "utility|escape", icon: '<i class="fas fa-people-arrows"></i>' }
            ];
            this.addActions(actions, { id: "utility", type: "system" });
        }
    };
});