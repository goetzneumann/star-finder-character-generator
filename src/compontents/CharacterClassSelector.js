import React from 'react'
import characterClasses from '../data/CharacterClass';


function CharacterClassSelector({onUpdate, selected}) {
    return <select onChange={e => onUpdate(e.target.value,characterClasses[e.target.value])} value={selected}>
            <option value="___unselected___" key="___unselected___" >SELECT CHARACTER CLASS</option>
            {
                Object.keys(characterClasses).map(characterClass => 
                {
                    return <option value={characterClass} key={characterClass}>{characterClass}</option>
                }
                )
            }
        </select>
}

export default CharacterClassSelector;