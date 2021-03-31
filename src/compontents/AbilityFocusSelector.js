import React from 'react'
import abilityFocuses from '../data/AbilityFocus';


function AbilityFocusSelector({onUpdate, selected}) {
return <select onChange={e => onUpdate(e.target.value,abilityFocuses[e.target.value])} value={selected}>
            <option value="___unselected___" key="___unselected___" >SELECT ABILITY FOCUS</option>
            {
                Object.keys(abilityFocuses).map(focus => 
                {
                    return <option value={focus} key={focus}>{focus}</option>
                }
                )
            }
        </select>
}

export default AbilityFocusSelector;