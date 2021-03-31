//run by calling  "node Logic.js" in terminal

import races from './Races';
import characterClasses from './CharacterClass';
import themes from './Themes';
import combat from './Combat';
import skills, {calculateSkills} from './Skills';
import skillFocuses, {generateSkillFocus, compressSkillFocusDescription} from './SkillFocus';
import abilityFocuses from './AbilityFocus';




function scoreToModifier(score) {
    let modifier = 0;
    switch(score) {
        case 1:
            modifier =  -5;
            break;
        case 2:
        case 3:
            modifier =  -4;
            break;
        case 4:
        case 5:
            modifier =  -3;
            break;
        case 6:
        case 7:
            modifier =  -2;
            break;
        case 8:
        case 9:
            modifier =  -1;
            break;
        case 10:
        case 11:
            modifier =  0;
            break;
        case 12:
        case 13:
            modifier =  1;
            break;
        case 14:
        case 15:
            modifier =  2;
            break;
        case 16:
        case 17:
            modifier =  3;
            break;
        case 18:
        case 19:
            modifier =  4;
            break;
        case 20:
        case 21:
            modifier =  5;
            break;
        case 22:
        case 23:
            modifier =  6;
            break;
        case 24:
        case 25:
            modifier =  7;
            break;
        case 26:
            modifier =  8;
            break;
    }
    return modifier;
}

function calcKeyAbility(characterClassName, ability_scores) {
    //core rule book page 19
    let ability;
    switch(characterClassName) {
        case 'envoy':
            ability = {name:'charisma',key:'cha'};
            break;
        case 'mechanic':
            ability = {name:'int',key:'int'};
            break;
        case 'mystic':
            ability = {name:'wisdom',key:'wis'};
            break;
        case 'operative':
            ability = {name:'dexterity',key:'dex'};
            break;
        case 'solarian':
            ability = {name:'charisma',key:'cha'};
            break;
        case 'soldier':
            ability = ability_scores.str>ability_scores.dex?{name:'strength',key:'str'}:{name:'dexterity',key:'dex'};
            break;
        case 'technomancer':
            ability = {name:'intelligence',key:'int'};
            break;
    }

            return {...ability,score:ability_scores[ability.key],modifier:scoreToModifier(ability_scores[ability.key])};
}

function min(value, minValue) {
    if(value<minValue) {
        return minValue
    }
    return value;
}

function skillForCharacterClassName(characterClassName) {
    return skills.filter(aSkill => aSkill.characterClasses.includes(characterClassName));
}

function skillForName(skillName) {
    return skills.filter(aSkill => aSkill.name === skillName)[0];
}

function calcCombatValues(combatClassModifiers, ability_modifiers) {
   return {
        //rule book page 16
        armorClass : {eac : {total:10+combatClassModifiers.eac+ability_modifiers.dex_mod,armor_bonus:combatClassModifiers.eac,dex_mod:ability_modifiers.dex_mod},
                        kac : {total:10+combatClassModifiers.kac+ability_modifiers.dex_mod,armor_bonus:combatClassModifiers.kac,dex_mod:ability_modifiers.dex_mod},
                        combat_maneuvers : 18+combatClassModifiers.kac+ability_modifiers.dex_mod
                    },
        savingThrows : {fortitude : {total:combatClassModifiers.fsb+ability_modifiers.con_mod,fsb:combatClassModifiers.fsb,con_mod:ability_modifiers.con_mod},
                        reflex : {total:combatClassModifiers.rsb+ability_modifiers.dex_mod,rsb:combatClassModifiers.rsb,dex_mod:ability_modifiers.dex_mod},
                        will : {total:combatClassModifiers.wsb+ability_modifiers.wis_mod,wsb:combatClassModifiers.wsb,wis_mod:ability_modifiers.wis_mod}},
        attackBonuses : {meleeAttack : {total:combatClassModifiers.bab+ability_modifiers.str_mod,bab:combatClassModifiers.bab,str_mod:ability_modifiers.str_mod},
                        rangedAttack : {total:combatClassModifiers.bab+ability_modifiers.dex_mod,bab:combatClassModifiers.bab,dex_mod:ability_modifiers.dex_mod},
                        thrownAttack : {total:combatClassModifiers.bab+ability_modifiers.str_mod,bab:combatClassModifiers.bab,str_mod:ability_modifiers.str_mod}}
    }
}

function calcHealth(race, characterClass, theme, ability_modifiers, keyAbility) {
    return {
        hp: race.hp + characterClass.hp,
        sp: min(race.sp + characterClass.sp + theme.sp + ability_modifiers.con_mod, 0),
        rp: min(min(1 / 2, 1) + keyAbility.modifier, 1)
    };
}

function calcAbilityScores(bonus, race, characterClass, theme) {
    return {
        str: 10 + bonus.str + race.str + characterClass.str + theme.str,
        dex: 10 + bonus.dex + race.dex + characterClass.dex + theme.dex,
        con: 10 + bonus.con + race.con + characterClass.con + theme.con,
        int: 10 + bonus.int + race.int + characterClass.int + theme.int,
        wis: 10 + bonus.wis + race.wis + characterClass.wis + theme.wis,
        cha: 10 + bonus.cha + race.cha + characterClass.cha + theme.cha
    };
}

function caclAbilityModifiers(str, dex, con, int, wis, cha) {
    return {
        str_mod: scoreToModifier(str),
        dex_mod: scoreToModifier(dex),
        con_mod: scoreToModifier(con),
        int_mod: scoreToModifier(int),
        wis_mod: scoreToModifier(wis),
        cha_mod: scoreToModifier(cha)
    };
}
function calcCharacter(raceName, characterClassName, themeName, bonusName, skillFocusPreset, level = 1,) {
    const race = races[raceName];
    const characterClass = characterClasses[characterClassName];
    const bonus = abilityFocuses[bonusName]
    const theme = themes[themeName];
    const combatClassModifiers = combat[characterClassName][min(level-1,0)];
    let ability_scores = calcAbilityScores(bonus, race, characterClass, theme)
    let ability_modifiers = caclAbilityModifiers(ability_scores.str, ability_scores.dex, ability_scores.con, ability_scores.int, ability_scores.wis, ability_scores.cha)
    let classSkills = skillForCharacterClassName(characterClassName);
    let keyAbility = calcKeyAbility(characterClassName,ability_scores);
    let skillRanks = min(race.skillRanks+characterClass.skillRanks+theme.skillRanks+ability_modifiers.int_mod,level);
    let skillFocus = generateSkillFocus(compressSkillFocusDescription(skillFocusPreset,classSkills.map(classSkills => classSkills.name) ), skillRanks);
    let initiative = ability_modifiers.dex_mod;
    let health = calcHealth(race, characterClass, theme, ability_modifiers, keyAbility)
    let skills = calculateSkills(classSkills,skillFocus,ability_modifiers);
    const combatValues = calcCombatValues(combatClassModifiers, ability_modifiers);
    return {
        race:raceName,
        characterClass:characterClassName,
        theme:themeName,
        level,
        initiative,
        ability_scores,
        ability_modifiers,
        health,
        skillRanks,
        combat:combatValues,
        skills
    }
}

export {calcCharacter};

/* let variations = [
    [ 'ysoki','envoy','spacefarer',abilityFocusTools.mentalBonus,skillFocusTools.athleteSkillFocus],
    [ 'android','envoy','spacefarer',abilityFocusTools.mentalBonus,skillFocusTools.athleteSkillFocus],
    [ 'android','envoy','spacefarer',abilityFocusTools.mentalBonus,skillFocusTools.athleteSkillFocus],
    [ 'android','envoy','spacefarer',abilityFocusTools.mentalBonus,skillFocusTools.athleteSkillFocus],
]
//console.log('default',calcAbilityScores('android','envoy','spacefarer'));

variations.forEach(variation => console.log(JSON.stringify(calcCharacter(...variation), null, 4)));
 */





//console.log('strong',calcAbilityScores('android','envoy','spacefarer', strengthBonus));
//calcAbilityScores('android','envoy','spacefarer', abilityFocusTools.mentalBonus)