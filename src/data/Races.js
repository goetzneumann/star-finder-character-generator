import { getDefaultNormalizer } from "@testing-library/dom";

const races = [];

races["android"] = {
        dex:2,
        int:2,
        cha:-2,
        hp:4,
        sp:0,
        skillRanks: 0,
        str:0,
        con:0,
        wis:0,
        rp:0,
    };

    races["human"] = {//humans get +2 in any 
        dex:0,        //one ability
        int:0,        //(core rulebook pg44 )
        cha:0,
        hp:4,
        sp:0,
        skillRanks: 0,
        str:0,
        con:0,
        wis:0,
        rp:0,
    };

    races["lashunta"] = {//difference between korrasha and damaya lashuntas
        dex:0,
        int:0,//+2 if Damaya
        cha:2,
        hp:4,
        sp:0,
        skillRanks: 0,
        str:0,//+2 if korraha
        con:0,//-2 if damaya
        wis:0,//-2 if korrasha
    };

    races["shirren"] = {
        dex:0,
        int:0,
        cha:-2,
        hp:6,
        sp:0,
        skillRanks: 0,
        str:0,
        con:2,
        wis:2,
        rp:0,
    };


    races["vesk"] = {
        dex:0,
        int:0,
        cha:0,
        hp:0,
        sp:0,
        skillRanks: 0,
        str:2,
        con:2,
        wis:-2,
        rp:0,
    };

    races["ysoki"] = {
        dex:2,
        int:2,
        cha:0,
        hp:2,
        sp:0,
        skillRanks: 0,
        str:-2,
        con:0,
        wis:0,
        rp:0,
    };
    
export default races;