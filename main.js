//Option 1
function Enemy(life,name,level){
    this.life=life;
    this.name=name;
    this.level=level;
}

Enemy.prototype.getInfo = function(){
    console.log(this.life,this.name,this.level);
}

Enemy.prototype.attack = function(){
    console.log(`${this.name} has attacked!`);
}

const bandit = new Enemy (10,"Hgihwayman", 5);
console.log(bandit);


function Bug (life,name,level,legs,dmg){
    Enemy.call(this,life,name,level);
    this.legs=legs;
    this.dmg=dmg;
}

const bugger = new Bug(100,"asdasd",10,10,500);

console.log(bugger);



console.log('');

//Option 2
class badGuy{ //similar to the function as the previous but with `class` instead
    constructor(life,name,level){
        this.life=life;
        this.name=name;
        this.level=level;
    }
    getInfo(){ //prototype function inside the object than being outside
        console.log(this.life,this.name,this.level);
    }
}

const werewolf = new badGuy(40,"harrie",5);

console.log(werewolf);


class evilBug extends badGuy{ //'extends' is need to be used in order to get the events from the other function events copied over into another function
    constructor(life,name,level,arms,dmg){
        super(life,name,level); //"super" keyword is similar as '.call' 
        this.arms= arms;
        this.dmg=dmg;
    }
}

const newBugger = new evilBug(500,"pop",90,45,56);
console.log(newBugger);