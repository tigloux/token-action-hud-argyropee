export let RollHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's RollHandler class and handles action events triggered when an action is clicked
     */
    RollHandler = class RollHandler extends coreModule.api.RollHandler {
        /**
         * Handle action click
         * Called by Token Action HUD Core when an action is left or right-clicked
         * @override
         * @param {object} event        The event
         * @param {string} encodedValue The encoded value
         */
        async handleActionClick (event, encodedValue) {
            const [actionTypeId, actionId] = encodedValue.split('|')

            // Liste des types d'actions qui correspondent à des Items dans Foundry
            const renderable = ['attack', 'spell', 'consumable', 'trap']

            // Si le joueur fait un clic droit, on ouvre la fiche de l'objet au lieu de lancer l'action
            if (renderable.includes(actionTypeId) && this.isRenderItem()) {
                return this.doRenderItem(this.actor, actionId)
            }

            const knownCharacters = ['character', 'monstre', 'pnj'] // Ajuste avec tes types d'acteurs exacts

            // If single actor is selected
            if (this.actor) {
                await this.#handleAction(event, this.actor, this.token, actionTypeId, actionId)
                return
            }

            const controlledTokens = canvas.tokens.controlled
                .filter((token) => knownCharacters.includes(token.actor?.type))

            // If multiple actors are selected
            for (const token of controlledTokens) {
                const actor = token.actor
                await this.#handleAction(event, actor, token, actionTypeId, actionId)
            }
        }

        /**
         * Handle action hover (Peut être utilisé pour surligner des cibles, on le laisse vide par défaut)
         */
        async handleActionHover (event, encodedValue) {}

        /**
         * Handle group click
         */
        async handleGroupClick (event, group) {}

        /**
         * Handle action
         * @private
         */
        async #handleAction (event, actor, token, actionTypeId, actionId) {
            
            // On s'assure que tes fonctions de système sont bien accessibles
            if (!game.argyropee) {
                ui.notifications.error("Argyropée : Impossible d'accéder aux fonctions du système.");
                return;
            }

            switch (actionTypeId) {
                case 'skill':
                    game.argyropee.rollSkill(actor, actionId);
                    break;
                    
                case 'attack':
                    const weapon = actor.items.get(actionId);
                    if (weapon) game.argyropee.rollAttack(actor, weapon);
                    break;
                    
                case 'spell':
                    const spell = actor.items.get(actionId);
                    if (spell) game.argyropee.castSpell(actor, spell);
                    break;
                    
                case 'consumable':
                    const consumable = actor.items.get(actionId);
                    if (consumable) game.argyropee.consumeItem(actor, consumable);
                    break;
                    
                case 'trap':
                    const trap = actor.items.get(actionId);
                    if (trap) game.argyropee.deployTrap(actor, trap);
                    break;
                    
                case 'utility':
                    this.#handleUtilityAction(actor, token, actionId);
                    break;
            }
        }

        /**
         * Handle utility action
         * @private
         */
        async #handleUtilityAction (actor, token, actionId) {
            switch (actionId) {
                case 'init':
                    game.argyropee.rollInitiative(actor);
                    break;
                case 'rest':
                    game.argyropee.rest(actor);
                    break;
                case 'escape':
                    game.argyropee.escapeGrapple(actor);
                    break;
            }
        }
    }
})