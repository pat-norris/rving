/**
 * Extend the base Actor document by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
 export class RVingActor extends Actor {

    /** @override */
    prepareData() {
      // Prepare data for the actor. Calling the super version of this executes
      // the following, in order: data reset (to clear active effects),
      // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
      // prepareDerivedData().
      super.prepareData();
    }
  
    /** @override */
    prepareBaseData() {
      // Data modifications in this step occur before processing embedded
      // documents or derived data.
    }
  
    /**
     * @override
     * Augment the basic actor data with additional dynamic data. Typically,
     * you'll want to handle most of your calculated/derived data in this step.
     * Data calculated in this step should generally not exist in template.json
     * (such as ability modifiers rather than ability scores) and should be
     * available both inside and outside of character sheets (such as if an actor
     * is queried and has a roll executed directly from it).
     */
    prepareDerivedData() {
      const actorData = this.data;
      const data = actorData.data;
      const flags = actorData.flags.boilerplate || {};
  
      // Make separate methods for each Actor type (character, npc, etc.) to keep
      // things organized.
      //this._prepareCharacterData(actorData);
      //this._prepareNpcData(actorData);
    }
  
    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(actorData) {
      if (actorData.type !== 'pc') return;
  
      // Make modifications to data here. For example:
      const data = actorData.data;
      
      // Loop through ability scores, and add their modifiers to our sheet output.
      for (let [key, skill] of Object.entries(data.skills.skills)) {
        switch(skill) {
          case 'Big Guns':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Bows':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Melee':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Small Guns':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Throwing':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Unarmed':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Computers':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Engineering':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Rocket Science':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Substances':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Surgery':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Charm':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Coercion':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Deception':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Negotiation':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Acrobatics':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Athletics':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Awareness':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Beasts':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Composure':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'First Aid':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Making':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Resilience':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Scrounging':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Stealth':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Driving':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Explosives':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Flying':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Mechanics':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          case 'Skullduggery':
            skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
            break;
          default:
            // Nothing
        }  
        skill.value = actorData.attributes.attributes.Strength.value * 5 + actorData.attributes.attributes.Luck.value;
      }
    }
  
    /**
     * Prepare NPC type specific data.
     */
    _prepareNpcData(actorData) {
      if (actorData.type !== 'npc') return;
  
      // Make modifications to data here. For example:
      const data = actorData.data;
      data.xp = (data.cr * data.cr) * 100;
    }
  
    /**
     * Override getRollData() that's supplied to rolls.
     */
    getRollData() {
      const data = super.getRollData();
  
      // Prepare character roll data.
      this._getCharacterRollData(data);
      this._getNpcRollData(data);
  
      return data;
    }
  
    /**
     * Prepare character roll data.
     */
    _getCharacterRollData(data) {
      if (this.data.type !== 'character') return;
  
      // Copy the ability scores to the top level, so that rolls can use
      // formulas like `@str.mod + 4`.
      if (data.abilities) {
        for (let [k, v] of Object.entries(data.abilities)) {
          data[k] = foundry.utils.deepClone(v);
        }
      }
  
      // Add level for easier access, or fall back to 0.
      if (data.attributes.level) {
        data.lvl = data.attributes.level.value ?? 0;
      }
    }
  
    /**
     * Prepare NPC roll data.
     */
    _getNpcRollData(data) {
      if (this.data.type !== 'npc') return;
  
      // Process additional NPC data here.
    }
  
  }
  