import React from 'react'
import themes from '../data/Themes';


function ThemeSelector({onUpdate, selected}) {
    return <select onChange={e => onUpdate(e.target.value,themes[e.target.value])} value={selected}>
            <option value="___unselected___" key="___unselected___" >SELECT THEME</option>
            {
                Object.keys(themes).map(focus => 
                {
                    return <option value={focus} key={focus}>{focus}</option>
                }
                )
            }
        </select>
}

export default ThemeSelector;