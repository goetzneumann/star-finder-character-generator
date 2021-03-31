const skillFocuses = [];

skillFocuses.athlete = {
    acrobatics : 2,
    athletics : 8,
    bluff:5
}

function generateSkillFocus(focusDescription, skillRankCount) {
    let skillFocus = {...focusDescription};
    let lottery = [];
    let points = 0;
    Object.keys(focusDescription).forEach(key => {
        skillFocus[key] = 0;
        let count = focusDescription[key];
        for(let i = 0; i < count; i++ ) {
            lottery.push(key);
        }
    })
    for(let i = 0; i <skillRankCount; i++) {
        let hit = lottery[Math.floor(Math.random() * lottery.length)];
        skillFocus[hit] =  skillFocus[hit]+1;
    }
    return skillFocus;
}

function compressSkillFocusDescription(focusDescription, skillClasses) {
    let compressSkillFocusDescription = {};
    skillClasses.forEach(skillClass => {
        compressSkillFocusDescription[skillClass] = focusDescription[skillClass];
    })
    return compressSkillFocusDescription;
}

export {generateSkillFocus};
export default skillFocuses;
export {compressSkillFocusDescription};

//console.log(generateSkillFocus(athlete, 10));