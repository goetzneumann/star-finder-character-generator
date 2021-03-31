const skills = [

// page 134 core rule book
{name:'acrobatics',
    characterClasses: [
        'envoy',
        //'mechanic',
        //'mystic',
        'operative',
        'solarian',
        'soldier',
        //'technomancer'
    ],
    ability:'dex',
    untrained:true
},
{name:'athletics',
    characterClasses: [
        'envoy',
        'mechanic',
        //'mystic',
        'operative',
        'solarian',
        'soldier',
        //'technomancer'
    ],
    ability:'str',
    untrained:true
},
{name:'bluff',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        'operative',
        //'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'cha',
    untrained:true
},
{name:'computers',
    characterClasses: [
        'envoy',
        'mechanic',
        //'mystic',
        'operative',
        //'solarian',
        //'soldier',
        'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'culture',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        'operative',
        //'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'diplomacy',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        //'operative',
        'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'cha',
    untrained:true
},
{name:'disguise',
    characterClasses: [
        'envoy',
        'mechanic',
        'mystic',
        'operative',
        //'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'cha',
    untrained:true
},
{name:'engineering',
    characterClasses: [
        'envoy',
        'mechanic',
        //'mystic',
        'operative',
        //'solarian',
        'soldier',
        'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'intimidate',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        'operative',
        'solarian',
        'soldier',
        //'technomancer'
    ],
    ability:'cha',
    untrained:true
},
{name:'lifescience',
    characterClasses: [
        //'envoy',
        //'mechanic',
        'mystic',
        //'operative',
        //'solarian',
        //'soldier',
        'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'medicine',
    characterClasses: [
        'envoy',
        'mechanic',
        'mystic',
        'operative',
        //'solarian',
        'soldier',
        //'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'mysticisim',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        //'operative',
        'solarian',
        //'soldier',
        'technomancer'
    ],
    ability:'wis',
    untrained:false
},
{name:'perception',
    characterClasses: [
        'envoy',
        'mechanic',
        'mystic',
        'operative',
        'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'wis',
    untrained:true
},
{name:'physicalscience',
    characterClasses: [
        //'envoy',
        'mechanic',
        //'mystic',
        //'operative',
        'solarian',
        //'soldier',
        'technomancer'
    ],
    ability:'int',
    untrained:false
},
{name:'piloting',
    characterClasses: [
        'envoy',
        'mechanic',
        //'mystic',
        'operative',
        //'solarian',
        'soldier',
        'technomancer'
    ],
    ability:'dex',
    untrained:true
},
{name:'profession',
    characterClasses: [
        'envoy',
        'mechanic',
        'mystic',
        'operative',
        'solarian',
        'soldier',
        'technomancer'
    ],
    ability:['cha','int','wis'],
    untrained:false
},
{name:'sensemotive',
    characterClasses: [
        'envoy',
        //'mechanic',
        'mystic',
        'operative',
        'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'wis',
    untrained:true
},
{name:'sleightofhand',
    characterClasses: [
        'envoy',
        //'mechanic',
        //'mystic',
        'operative',
        //'solarian',
        //'soldier',
        'technomancer'
    ],
    ability:'dex',
    untrained:false
},
{name:'stealth',
    characterClasses: [
        'envoy',
        //'mechanic',
        //'mystic',
        'operative',
        'solarian',
        //'soldier',
        //'technomancer'
    ],
    ability:'dex',
    untrained:true
},
{name:'survival',
    characterClasses: [
        //'envoy',
        //'mechanic',
        'mystic',
        'operative',
        //'solarian',
        'soldier',
        //'technomancer'
    ],
    ability:'wis',
    untrained:true
}
];


function calculateSkills(classSkills, skillFocus, abilityModifiers){
    return classSkills.map(aClassSkill => {
//console.log(aClassSkill)
        let ability = aClassSkill.ability;
        let abilityModifier = 0;
        if(typeof(ability) !== 'string') {
            for (let i = 0; i < ability.length; i++){
                const cam = abilityModifiers[ability+'_mod'];
                if(cam > abilityModifier) {
                    abilityModifier = cam;
                }
            }
        } else {
            abilityModifier = abilityModifiers[ability+'_mod']
        }
        let ranks = skillFocus[aClassSkill.name]||0;
        let classBonus = aClassSkill.untrained||ranks<1?0:3
        return {name:aClassSkill.name,
        total:ranks+classBonus+abilityModifier,
        ranks:ranks,
        classBonus,
        abilityModifier
        }
    });
}

 export {calculateSkills};
 export default skills;