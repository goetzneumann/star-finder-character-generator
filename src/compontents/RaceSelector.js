import React from 'react'
import races from '../data/Races';


function RaceSelector({onUpdate, selected}) {
    return <select onChange={e => onUpdate(e.target.value,races[e.target.value])} value={selected}>
            <option value="___unselected___" key="___unselected___" >SELECT RACE</option>
            {
                Object.keys(races).map(raceName => 
                {
                    return <option value={raceName} key={raceName}>{raceName}</option>
                }
                )
            }
        </select>
}

export default RaceSelector;