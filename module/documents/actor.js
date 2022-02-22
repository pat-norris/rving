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
    
    const items = actorData.items.map((item) => item.data);

    const perks = [];
    for (let i = 0; i < actorData.items._source.length; i++) {
      console.log(actorData.items._source[i]);
        switch(actorData.items._source[i].type) {
          case 'perk':
            perks.push(actorData.items._source[i]);
            break;
          default:
            // Nothing
        }
    }

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    this._prepareCharacterData(actorData);
    //this._prepareNpcData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    if (actorData.type !== 'PC') return;
    
    // Make modifications to data here. For example:
    const data = actorData.data;
    const items = actorData.items;
    
    data.encumbrance.max = data.attributes.Strength.value + data.attributes.Endurance.value;
    for (let i = 0; i < actorData.items._source.length; i++) {
      if (typeof actorData.items._source[i].encumbrance !== 'undefined') {
        data.emcumberance.value += actorData.items._source[i].encumbrance;  
      }
    }
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, skill] of Object.entries(data.skills)) {
      switch(key) {
        // Combat Skills
        case 'Big Guns':
          skill.value = 10 + 10 * data.attributes.Agility.value + 10 * data.attributes.Perception.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Bows':
          skill.value = 10 * data.attributes.Strength.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Melee':
          skill.value = 20 + 10 * data.attributes.Strength.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Small Guns':
          skill.value = 20 + 10 * data.attributes.Agility.value + 10 * data.attributes.Perception.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Throwing':
          skill.value = 10 * data.attributes.Strength.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Unarmed':
          skill.value = 10 * data.attributes.Strength.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;

        // Education Skills
        case 'Computers':
          skill.value = 15 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Engineering':
          skill.value = 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Rocket Science':
          skill.value = 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Substances':
          skill.value = 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Surgery':
          skill.value = 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;

        // Social Skills
        case 'Charm':
          skill.value = 15 * data.attributes.Charisma.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Coercion':
          skill.value = 5 * data.attributes.Strength.value + 10 * data.attributes.Charisma.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Deception':
          skill.value = 5 * data.attributes.Perception.value + 10 * data.attributes.Charisma.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Negotiation':
          skill.value = 10 * data.attributes.Perception.value + 5 * data.attributes.Charisma.value + data.attributes.Luck.value + 0 * skill.increases;
          break;

        // Survival Skills
        case 'Acrobatics':
          skill.value = 10 + 5 * data.attributes.Strength.value + 5 * data.attributes.Endurance.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Athletics':
          skill.value = 30 + 10 * data.attributes.Strength.value + 5 * data.attributes.Endurance.value + 5 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Awareness':
          skill.value = 20 + 10 * data.attributes.Perception.value + 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Beasts':
          skill.value = 10 + 10 * data.attributes.Charisma.value + 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Composure':
          skill.value = 10 * data.attributes.Charisma.value + 5 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'First Aid':
          skill.value = 5 * data.attributes.Perception.value + 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Making':
          skill.value = 5 * data.attributes.Strength.value + 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Resilience':
          skill.value = 15 * data.attributes.Endurance.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Scrounging':
          skill.value = 10 + 15 * data.attributes.Perception.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Stealth':
          skill.value = 5 * data.attributes.Perception.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;

        // Technical Skills
        case 'Driving':
          skill.value = 10 + 10 * data.attributes.Perception.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Explosives':
          skill.value = 10 * data.attributes.Perception.value + 10 * data.attributes.Intelligence.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Flying':
          skill.value = 10 * data.attributes.Perception.value + 5 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Mechanics':
          skill.value = 10 * data.attributes.Intelligence.value + 5 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        case 'Skullduggery':
          skill.value = 5 * data.attributes.Perception.value + 10 * data.attributes.Agility.value + data.attributes.Luck.value + 0 * skill.increases;
          break;
        default:
          // Nothing
      }  
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
