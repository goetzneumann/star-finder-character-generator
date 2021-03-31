import logo from './logo.svg';
import './App.css';
import RaceSelector from './compontents/RaceSelector';
import AbilityFocusSelector from './compontents/AbilityFocusSelector';
import ThemeSelector from './compontents/ThemeSelector';
import CharacterClassSelector from './compontents/CharacterClassSelector';
import SkillFocusSelector from './compontents/SkillFocusSelector';
import {useState} from 'react'
import abilityFocuses from './data/AbilityFocus';
import { calcCharacter } from './data/Logic';
import themes from './data/Themes';


function App() {
  const [race, setRace] = useState();
  const [raceName, setRaceName] = useState();
  const [abilityFocus, setAbilityFocus] = useState();
  const [abilityFocusName, setAbilityFocusName] = useState();
  const [theme, setTheme] = useState();
  const [themeName, setThemeName] = useState();
  const [characterClass, setCharacterClass] = useState();
  const [characterClassName, setCharacterClassName] = useState();
  const [skillFocus, setSkillFocus] = useState();
  const [skillFocusName, setSkillFocusName] = useState();

  const canCalculate = race&&abilityFocus&&theme&&characterClass&&skillFocus;

  return (
    <div className="App">
      <RaceSelector onUpdate={(raceName, raceValues) => {
                if(raceValues) {
        setRace(raceValues);
        setRaceName(raceName);
      } else {
        setRace(null);
        setRaceName(null);
      }
      }}/>
      <AbilityFocusSelector onUpdate={(focusName, focusValues) => {
        if(focusValues) {
        setAbilityFocus(focusValues);
        setAbilityFocusName(focusName);
      } else {
        setAbilityFocus(null);
        setAbilityFocusName(null);
      }
      }} />
      <ThemeSelector onUpdate={(focusName, focusValues) => {
                if(focusValues) {
        setTheme(focusValues);
        setThemeName(focusName);
      } else {
        setTheme(null);
        setThemeName(null);
      }
      }}/>
      <CharacterClassSelector onUpdate={(focusName, focusValues) => {
        if(focusValues) {
        setCharacterClass(focusValues);
        setCharacterClassName(focusName);
      } else {
        setCharacterClass(null);
        setCharacterClassName(null);
      }
      }}/>
      <SkillFocusSelector onUpdate={(focusName, focusValues) => {
        if(focusValues) {
            setSkillFocus(focusValues);
            setSkillFocusName(focusName);
        } else {
          setSkillFocus(null);
          setSkillFocusName(null);
        }
      }}/>
      <div>abilityFocus: {abilityFocusName||'n/a'}</div>
      <div>race: {raceName||'n/a'}</div>
      <div>theme: {themeName||'n/a'}</div>
      <div>skillFocus: {skillFocusName||'n/a'}</div>
      <div>characterClass: {characterClassName||'n/a'}</div>
      {canCalculate&&<pre>{JSON.stringify(calcCharacter(raceName,characterClassName,themeName,abilityFocusName, skillFocusName, 1), null, 1)}</pre>}
    </div>
  );
}

export default App;
