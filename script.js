    
const Lvltext = document.querySelector("#Lvltext")
const Healthtext = document.querySelector("#Hptext")
const Goldtext = document.querySelector("#goldtext")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#backtownbutton");
const Monstername = document.querySelector("#Monstername")
const Monsterhealthtext = document.querySelector("#Monsterhealthtext")
const dialoguetext = document.querySelector("#dialoguetext")
const monsterbox = document.querySelector("#monsterstatcontainer")
const Weapons = [
    {name: 'Barehands', power:5},
    {name: 'dagger', power:10},
    {name: 'sword', power:20},
    {name: 'excalibur', power:50},

];

button1.onclick = Start;
button2.onclick = Start;
button3.onclick = Start;


let lvl = 1;
let Health = 100;
let gold = 30;
let monsterhealth = 0;
let inventory = ["Barehands"];
let currentWeapon = 0;

let slimehp = 20;
let slimelvl = 3;
let wolfhp = 150;
let wolflvl = 10;
let demonhp = 5000;
let demonlvl = 35;

const locations =[{
      name: "Town",
    "Button text": ["Store","Guild","Demon Castle",],
    "Button functions": [Gostore,Goguild,Demoncastle],
    text: "You are in the Town, Click the store button to go to the store to buy weapons and health potions, click the Guild button to go to the guild and fight monsters, click the Demon Lord button to go fight the demon lord and win the game!!",
},
    {
    name: "Town",
    "Button text": ["Store","Guild","Demon Castle",],
    "Button functions": [Gostore,Goguild,Demoncastle],
    text: "You are in the Town",
},
{
    name: "Store",
    "Button text": ["Buy Weapon","Buy Health Potions(10G)","Town",],
    "Button functions": [Buyweapon,BuyHp,GoTown,],
    text: "You are in the store. You can buy a weapon and health potions, or you go back to the Town i guess...."
},
{
    name: "Guild",
    "Button text": ["Slime quest","Wolf quest","Go back to Town",],
    "Button functions": [FightSlime,FightWolf,GoTown,],
    text: "You are in the guild, you go to the quest board to look for quest, there are only slime and wolf quests today, Which will you pick? or go back to Town, Loser.",
},
{
    name: "Demon Castle",
    "Button text": ['Attack', 'Dodge', 'Runaway'],
    "Button functions": [AttackDemonLord, Dodge, Runaway],
    text: "You headed to the Demon castle!, and now facing the Demon Lord!!. you have the option to attack to deal damage, Dodge to dodge a attack and heal some little hp, or Run Away.",
},
{
    name: "Slime Quest",
    "Button text": ['Attack', 'Dodge', 'Runaway'],
    "Button functions": [AttackSlime, Dodge, Runaway],
    text: "You have taken the slime quest and headed immediately. you found the slime and approached to fight it!! you have the option to attack to deal damage, Dodge to dodge a attack and heal some little hp, or Run Away like a little bitch, scared of a tiny puny slime!",
},
{
    name: "Wolf Quest",
    "Button text": ["Attack","Dodge","Runaway"],
    "Button functions": [AttackWolf,Dodge,Runaway],
    text: "You have taken the Wolf quest and headed immediately. you found the Wolf and approached to fight it!! you have the option to attack to deal damage, Dodge to dodge a attack and heal some little hp, or Run Away(you probably love dogs because you cant hit a wolf like a bitch you are. but still, understandable..)!",
},
{
    name: "Lose",
    "Button text": ["Try Again","Try Again","Try Again",],
    "Button functions": [startup,startup,startup,],
    text: "YOU HAVE DIED, which means .... YOU LOSTTTTTT, LOSEER",
},
{
    name: "monster death",
    "Button text":["Town","Town","Town",],
    "Button functions": [GoTown,GoTown,GoTown],
    text: "You have succesfully killed the monster and completed your quest! you head back to the guild and recieved the rewards!!",
},
{
    name: "Buy weapons",
    "Button text": ["Dagger - 100Gold","Sword - 200Gold","Excalibur - 300Gold","Back"],
    "Button functions": [BuyKnife,BuySword,BuyExcalibur,Gostore],
    text: "Choose what weapon you want to buy?",
},
]


function startup (){
    gold = 30;
    Health = 100;
    lvl = 1;
 monsterhealth = 0;
 inventory = ["Barehands"];
 currentWeapon = 0;

 slimehp = 20;
 slimelvl = 3;
 wolfhp = 150;
 wolflvl = 10;
 demonhp = 5000;
 demonlvl = 35;
    button1.innerText = "Start"
    button2.innerText = "Start"
    button3.innerText = "Start"
    button1.onclick = Start;
    button2.onclick = Start;
    button3.onclick = Start;
    monsterbox.style.display = "none"
    button4.style.display = "none"
}
function update123(location){
    monsterbox.style.display = "none"
     button1.innerText = location["Button text"][0];
    button2.innerText = location["Button text"][1];
    button3.innerText = location["Button text"][2];
    button4.innerText = location["Button text"][3];
    button1.onclick = location["Button functions"][0];
    button2.onclick = location["Button functions"][1];
    button3.onclick = location["Button functions"][2];
    button4.onclick = location["Button functions"][3];
    
    dialoguetext.innerHTML = location.text;
}


function Start (){
 
    Goldtext.innerText = gold;
    Healthtext.innerText = Health;
    Lvltext.innerText = lvl;
    update123(locations[0]);
}

document.addEventListener("DOMContentLoaded", ()=>{
    startup()
})
function GoTown(){
    update123(locations[1]);
    
}

function Gostore(){
    update123(locations[2]);
    button4.style.display = "none"
}

function Goguild (){
    update123(locations[3]);

}
function Demoncastle(){
    demonhp = 5000
    update123(locations[4]);
    monsterbox.style.display = "block";
    Monstername.innerHTML = "Demon Lord"
    Monsterhealthtext.innerHTML = demonhp;
}

function BuyHp(){
    if (gold >=10){
        gold -=10;
        Health += 10;
        Healthtext.innerText = Health; 
        Goldtext.innerText = gold;
    }
    else{
        dialoguetext.innerHTML = "You don't have enough money to buy this!"; 
    }
}

function Buyweapon(){
    update123(locations[9]);
    button4.style.display = "block"
}

function FightSlime(){
    slimehp = 20
    update123(locations[5]);
    monsterbox.style.display = "block";
    Monstername.innerHTML = "Slime";
    Monsterhealthtext.innerHTML = slimehp;
}

function FightWolf(){
    wolfhp = 150;
    update123(locations[6]);
    monsterbox.style.display = "block";
    Monstername.innerHTML = "Wolf"
    Monsterhealthtext.innerHTML = wolfhp;
}

function AttackSlime(){
   if (Health > 0){
        const lvlup = Math.floor(Math.random()* slimelvl)+1;
        const Hit = Math.floor(Math.random()* Weapons[currentWeapon].power * lvl)+1
        const enemydamage = Math.floor(Math.random()* 2 * slimelvl)+1
        dialoguetext.innerHTML = "You have attacked the slime and dealt " + Hit + " ,The slime also attacked you and you have lost " + enemydamage + " Hp!!"
        if (slimehp <= 0){
            const Goldreward = Math.floor(Math.random()* 10 * slimelvl)
            MonsterDeath()
            gold += Goldreward;
            Goldtext.innerText = gold;
            lvl += lvlup;
            Lvltext.innerText = lvl;
            
        }
        else{
            slimehp -= Hit;
            Monsterhealthtext.innerHTML = slimehp;
            Health -= enemydamage;
        Healthtext.innerHTML = Health;

            
        }
        
   }
   else {
    lose()
   }
}
function MonsterDeath(){
    update123(locations[8]);
}

function AttackWolf(){
    if (Health > 0){
        const minLevel = 1;
        const lvlup = Math.floor(Math.random() * (wolflvl - minLevel + 1)) + minLevel;
        const Hit = Math.floor(Math.random()* Weapons[currentWeapon].power * lvl)+1
        const enemydamage = Math.floor(Math.random()* 2 * wolflvl)
        dialoguetext.innerHTML = "You have attacked the wolf and dealt " + Hit + " ,The wolf also attacked you and you have lost " + enemydamage + " Hp!!"
        if (wolfhp <= 0){
            const Goldreward = Math.floor(Math.random()* 6 * wolflvl)
            MonsterDeath()
            gold += Goldreward;
            Goldtext.innerText = gold;
            lvl += lvlup;
            Lvltext.innerText = lvl;
            
        }
        else{
            wolfhp -= Hit;
            Monsterhealthtext.innerHTML = wolfhp;
            Health -= enemydamage;
             Healthtext.innerHTML = Health;        
        }
        
   }
   else {
    lose()
   }
}

function AttackDemonLord(){
    if (Health > 0){
        const minLevel = 1;
        const lvlup = Math.floor(Math.random() * (demonlvl - minLevel + 1)) + minLevel;
        const Hit = Math.floor(Math.random()* Weapons[currentWeapon].power * lvl)+1
        const enemydamage = Math.floor(Math.random()* 2 * demonlvl)
        dialoguetext.innerHTML = "You have attacked the Demonlord and dealt " + Hit + " ,The Demonlord also attacked you and you have lost " + enemydamage + " Hp!!"
        if (demonhp <= 0){
            const Goldreward = Math.floor(Math.random()* 6 * demonlvl)
            MonsterDeath()
            gold += Goldreward;
            Goldtext.innerText = gold;
            lvl += lvlup;
            Lvltext.innerText = lvl;
            
        }
        else{
            demonhp -= Hit;
            Monsterhealthtext.innerHTML = demonhp;
            Health -= enemydamage;
        Healthtext.innerHTML = Health;        
        }
        
   }
   else {
    lose()
   }
}

function Dodge(){
   if (Health > 0){
    const chancetododge = Math.random()
    if(chancetododge < 0.5){  const dodge12 = Math.floor(Math.random()* lvl)
        dialoguetext.innerHTML = "you have dodged the enemy attack and earned " + dodge12 +" Hp back"
        Health += dodge12
        Healthtext.innerHTML = Health;}
        else{
            const enemyscrape = Math.floor(Math.random()* lvl)
            dialoguetext.innerHTML = "You have failed to dodge and the enemy scraped you and dealt " + 
            enemyscrape + " Damage!!";
            Health -= enemyscrape
            Healthtext.innerHTML = Health;
        }
   }
   else{
    lose()
   }
    }
   
  
   

function Runaway(){
    update123(locations[0]);   
dialoguetext.innerHTML = "You have ran away, and you headed back to Town."
}
function lose(){
  update123(locations[7]);
}
function BuyKnife(){
    if (currentWeapon < 1)
    if (gold >= 100){
        gold -= 100;
        
        if(currentWeapon < 1){
            currentWeapon++;
        }
       else {

       }
       
        let newweapon = Weapons[currentWeapon].name;
        dialoguetext.innerHTML = "You have bought " + newweapon + ", you now have " + gold + " gold left."
        Goldtext.innerText = gold;
        inventory.push(newweapon)
        console.log(inventory)
    }
    else{

    }
    else {
        dialoguetext.innerHTML = "You Already Bought dagger!, buy something else!"
    }

}
function BuySword(){
    if (currentWeapon < 2)
    if (gold >= 200){
        gold -= 200;
        
        if(currentWeapon < 1){
            currentWeapon += 2;
        }
       else {
        currentWeapon ++;
       }
       
        let newweapon = Weapons[currentWeapon].name;
        dialoguetext.innerHTML = "You have bought " + newweapon + ", you now have " + gold + " gold left."
        Goldtext.innerText = gold;
        inventory.push(newweapon)
        console.log(inventory)
    }
    else{
        dialoguetext.innerHTML = "You do not have enough gold to buy this!"
    }
    else {
        dialoguetext.innerHTML = "You have already bought this weapon";
    }
}
function BuyExcalibur(){
    if (currentWeapon < 3)
    if (gold >= 300){
        gold -= 300;
        
        if(currentWeapon < 2){
            currentWeapon += 3;
        }
       else {
        currentWeapon ++;
       }
       
        let newweapon = Weapons[currentWeapon].name;
        dialoguetext.innerHTML = "You have bought " + newweapon + ", you now have " + gold + " gold left."
        Goldtext.innerText = gold;
        inventory.push(newweapon)
        console.log(inventory)
    }
    else{
        dialoguetext.innerHTML = "You do not have enough gold to buy this!"
    }
    else {
        dialoguetext.innerHTML = "You have already bought this weapon";
    }
}