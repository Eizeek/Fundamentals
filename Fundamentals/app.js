
// Task 1
/*
let mainObj = {
    name: "Aziz",
    surname: "Karimov"
}

let addObj = (key, value) => {

    return mainObj[key] = value
}


let delObj =  (key) => {

    return delete  mainObj[key]
}

addObj("age", 30)
delObj("surname")

console.log(mainObj)
*/


// Task 2  - ?

// Task 3 
/*
let array = [
          {
            name: "Aziz",
            count: 7
          },
          {
            name: "Imran",
            count: 2
          },
          {
            name: "Zamir",
            count: 5
          },
          {
            name: "Eshqin",
            count: 8
          },
          {
            name: "Farid",
            count: 1
          }
];
array.sort((a, b) => a.count - b.count);

console.log(array)
*/

// Task 4

/*
let obj = {
    name: "Aziz",
    age: 30
}
let newObj = Object.assign({}, obj)
console.log(newObj)

*/


// Task 5
/*
let obj = {
    name: "Aziz",
    age: 30
}
let newObj = {...obj};

newObj = obj;
console.log(newObj)
*/

// Task 6
/*
function jpn (manga, chapter, year) {
      this.anime = manga;
      this.chap = chapter;
      this.dec = year;
    }
    let newObj = new jpn("DragonBall", "Balls", 1998);
    console.log(newObj);
    */
//Task 7 - ?
/*
function char(name, race, clas ){

  this.name = name,
  this.race = race,
  this.clas = clas
}

let Eizeek = new char("Eizeek","High-Elf", "Hunter" )
console.log(Eizeek)


function charBuilder(strenght, agility, dextery, stamina, intellect, wisdom ){

this.strenght = str,
this.agility = agi,
this.dextery = dex,
this.stamina = sta,
this.intellect = int,
this.wisdom = wis 
}
*/




// Class JS
/*
class Char{

  constructor(name, race, clas, level){
this.name = name,
this.race = race,
this.clas = clas,
this.level = level
  }

  }

class charParam extends Char {

  
  constructor(name, race, clas, level, str, agi, dex, sta, int, wis ){
    super(name, race, clas, level);
    this.strenght = str,
    this.agility = agi,
    this.dextery = dex,
    this.stamina = sta,
    this.intellect = int,
    this.wisdom = wis
}

}
let charName = prompt('Dungeon awaits you!!!!  Enter your Character Name : ')
let charRace = prompt('Choose your race : Human ; Elf ; High-Elf ; Orc ; Dwarf ; Goblin')
let charClass = prompt('Choose your class : Warrior ; Hunter ; Paladin ; Mage ; Necromancer ; Bard')

let login = new charParam(charName,charRace, charClass, 1, 15, 30, 10, 5, 1, 1 )
console.log(login)
*/


let input = document.getElementById('input');
let btn = document.getElementById("btn");
let lists = document.getElementById('list-box');

if (JSON.parse(localStorage.getItem('list')) === null) {
  localStorage.setItem("list", JSON.stringify([]));
}

btn.addEventListener("click", () => {
  let getList = JSON.parse(localStorage.getItem('list'));
  let newObj = { id: Math.random(), data: input.value };
  localStorage.setItem('list', JSON.stringify([...getList, newObj]));

  let listArr = JSON.parse(localStorage.getItem("list"));
  lists.innerHTML = '';

  listArr.reverse().forEach(e => {
    let listElement = document.createElement("li");
    listElement.textContent = e.data;
    let icon = document.createElement("i");
    icon.className = 'fa-solid fa-xmark';
    listElement.append(icon);

    icon.addEventListener("click", () => {
      let filteredData = listArr.filter(item => item.id !== e.id);
      localStorage.setItem("list", JSON.stringify(filteredData));
      lists.removeChild(listElement);
    });

    lists.append(listElement);
  });
});
