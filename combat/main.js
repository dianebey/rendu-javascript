let perso1 = {
    name = "hero",
    pv = 80,
    attack = 20,
    precision = 0.8
    }

let perso2 = {
    name = "ennemi",
    pv = 110,
    attack = 10,
    precision = 0.6
    }

    console.log("hero")
    console.log("ennemi")

    console.log(`Début du combat entre ${perso1.name} et ${perso2.name}.`)
function attaquer(attaquant, défenseur){
let attackPasse = precision(attaquant["precision"])
if(attackPasse == false){
    console.log("loupé")
return défenseur["pv"]
} else {
    console.log("touché")
    console.log(`${attaquant.name} a fait des dégats à ${défenseur.name}`)
    console.log(`il reste ${défenseur.pv} - ${attaquant.attack} à ${défenseur.name}`)
return défenseur["pv"] - attaquant["attack"]
}
    }

const precision = (precisionCombatant) => {
return Math.random < precisionCombatant
}

while(perso1["pv"]>0 && perso2["pv"]>0) {
    perso2["pv"] = attaquer(perso1, perso2)
    perso1["pv"] = attaquer(perso2, perso1)
if(perso2["pv"] > 0) {
        perso1["pv"] = attaquer(perso2, perso1)
    }
}

if(perso1["pv"] <= 0) {
    console.log(`Victoire de ${perso2} !`)
} else {
    console.log(`Victoire de ${perso1} !`)
}

