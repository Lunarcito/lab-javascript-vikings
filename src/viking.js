// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health  
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage (damage){
        this.health-=damage
    }
}

class Viking extends Soldier {
    constructor (name,health, strength){
        super(health,strength);
        this.name=name
    }
    receiveDamage(damage){
      this.health-= damage;
      if (this.health > 0){
        return `${this.name} has received ${damage} points of damage`
      }
      return `${this.name} has died in act of combat`
    }

    battleCry (){
        return `Odin Owns You All!`
    }
}

class Saxon extends Soldier {
    
    receiveDamage(damage){
      this.health-= damage;
      if (this.health>0){
        return `A Saxon has received ${damage} points of damage`
      }
      return `A Saxon has died in combat`
    }
    
}

// Bonus War


class War {

    constructor (){
        this.vikingArmy= []
        this.saxonArmy= []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon (saxon){
        this.saxonArmy.push(saxon)
    }
    
    vikingAttack (){
    let randomSaxoIndex = Math.floor(Math.random()*this.saxonArmy.length)
    let newRandomSaxo = this.saxonArmy[randomSaxoIndex]
    
    let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let newRandomViking = this.vikingArmy[randomVikingIndex]
    
    let receiveDamageSAxon= newRandomSaxo.receiveDamage (newRandomViking.strength)
        
    if (newRandomSaxo.health<=0){
        this.saxonArmy.splice(randomSaxoIndex,1)
     }
     return receiveDamageSAxon
    }

    saxonAttack(){  
        let randomSaxoIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let newRandomSaxo = this.saxonArmy[randomSaxoIndex]
        
        let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let newRandomViking = this.vikingArmy[randomVikingIndex]

        let receiveDamageViking= newRandomViking.receiveDamage (newRandomSaxo.strength)
          
    if (newRandomViking.health<=0){
        this.vikingArmy.splice(randomVikingIndex,1)
     }
     return receiveDamageViking
    }

    showStatus() {
        if (this.saxonArmy.length===0){
            return `Vikings have won the war of the century!`
        }else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survived another day..."
        }
           return "Vikings and Saxons are still in the thick of battle."
        
    }
}

let rolo = new Viking ("Rolo",20,2)
let frozen = new War
let sam = new Saxon (14,2)

frozen.addSaxon(sam)
frozen.addViking (rolo)
console.log (frozen)

console.log (frozen.vikingAttack ())
