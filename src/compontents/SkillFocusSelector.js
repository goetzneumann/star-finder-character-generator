import React from 'react'
import skillFocuses from '../data/SkillFocus';


function SkillFocusSelector({onUpdate, selected}) {
    return <select onChange={e => onUpdate(e.target.value,skillFocuses[e.target.value])} value={selected}>
            <option value="___unselected___" key="___unselected___" >SELECT SKILL FOCUS</option>
            {
                Object.keys(skillFocuses).map(focus => 
                {
                    return <option value={focus} key={focus}>{focus}</option>
                }
                )
            }
        </select>
}

export default SkillFocusSelector;