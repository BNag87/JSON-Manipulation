const fs = require("fs")    //gets the filesystem bits

//need to get the spellList first
    //this reads all data from the json file...
let rawdata = fs.readFileSync("./jsons/Spells.json");
    //...then this converts it to json that can be used
let JN_Spells = JSON.parse(rawdata);

const diceRoller = (diceToRoll, diceFaces) => { // 
    let total = 0;
    for(let i = 0; i<diceToRoll; i++)
    {   
        total += Math.floor(Math.random() * (diceFaces - 1 + 1) + 1)
    }
    return total
  }

//get fields as variables, spit them out
    //remember that the spells are in an array "Spells[]"

const boxLine = "============================================================";


const attack = (newIndex) => {
    index = newIndex; //USED TO CHANGE SPELL

    let name1 = JN_Spells.Spells[index].name
    let level = JN_Spells.Spells[index].level
    let range1 = JN_Spells.Spells[index].range
    let damageDiceQty = JN_Spells.Spells[index].damageDiceQty
    let damageDiceFaces = JN_Spells.Spells[index].damageDiceAmount
    let fluffDesc = JN_Spells.Spells[index].fluffDescription

    console.log("\n"+boxLine+"\nYou cast '"+name1+"', a level "+level+" spell. Its maximum range is "+range1+"ft.")
    console.log("\t"+fluffDesc)
    console.log("\tThe target is struck for "+diceRoller(damageDiceQty, damageDiceFaces)+" points of damage (minimum "+(damageDiceQty*1)+", maximum "+(damageDiceQty*damageDiceFaces)+")!\n"+boxLine+"\n")
}

attack(4)
