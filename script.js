//help

const missions = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz."
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz."
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz."
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz."
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért."
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz."
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte."
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz."
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz."
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz."
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz."
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz."
    }
  ],
}

let elements = [
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
            rotation: 0,
            mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,1],
                [0,0,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,1],
                [0,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,0],
                [1,0,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,1,1],
                [0,1,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,1],
                [1,0,0],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [1,1,1],
                [1,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,1]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,1,1],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,1,0],
                [0,0,0]],
        rotation: 0,
        mirrored: false  
    },
]


//változók

const playButton = document.getElementById('startButton')
const startScreen = document.getElementById('startscreen')
const game = document.getElementById('game')
const map = document.getElementById('placeForMap')
const rotationButton = document.getElementById('rotation')
const mirrorButton = document.getElementById('mirror')


//Főoldal
playButton.addEventListener('click', ()=>{
    playButton.style.visibility ='hidden';
    startScreen.style.display ='none';
    game.style.display='flex';
    drawGameboard();
    missionSelection();
    drawCurrentElement(elements[currentElement]);
    

    

})
//elemek rajzolása
function elementDraw(e,n){
  if(n == 1){
    e.setAttribute('class', 'mountain')
    e.setAttribute('draggable',true)
  }
  if(n == 2){
    e.setAttribute('class', 'water')
    e.setAttribute('draggable',true)
  }
  if(n == 3){
    e.setAttribute('class', 'forest')
    e.setAttribute('draggable',true)
  }
  if(n == 4){
    e.setAttribute('class', 'town')
    e.setAttribute('draggable',true)
  }
  if(n == 5){
    e.setAttribute('class', 'farm')
    e.setAttribute('draggable',true)
  }
}


function drawGameboard(){
  
  const table = document.createElement("table");
  map.appendChild(table);
  table.setAttribute('id','map');
  for(let i = 0; i < 11; i++){

    let row = document.createElement("tr");
    table.appendChild(row);
    for(let g = 0; g < 11; g++){
      let td = document.createElement("td");
      td.setAttribute('class', 'map');
      row.appendChild(td);
      elementDraw(td, gameMap[i][g]);
      
    }

  }
}

function missionSelection(){
  var table = document.getElementById("missionsTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
    
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     
     let title = document.createElement('h2');
     title.innerHTML = missions['basic'][i + j]['title'];
     col.appendChild(title);
     col.innerHTML += missions['basic'][i + j]['description']
   }  
} 
}
function tileType(e){
  if(e == "water"){
    return 2;
  }
  if(e == "forest"){
    return 3;
  }
  if(e =="town"){
    return 4;
  }
  if(e=="farm"){
    return 5;
  }
}

function drawCurrentElement(e){
  
  var table = document.getElementById("currentElement");
  const typeValue = tileType(e["type"]);
  for (var i = 1; i < 4; i++) {
    let row = table.rows[i];
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0; j < 3; j++) {
     //iterate through columns
     let col = row.cells[j];
     if(e["shape"][i - 1][j] == 1){
        elementDraw(col,typeValue);
     }

     
   }  

  }
  let row = table.rows[0]
  let cell = row.cells[3]
  
  cell.innerHTML = e["time"]
  let clock = document.createElement("i")
  clock.setAttribute('class','fa fa-clock-o')
  cell.appendChild(clock)
  
}

function rotateCurrentElement(){
  let matrix = elements[currentElement]["shape"];
  matrix = rotateClockwise(matrix);
  elements[currentElement]["shape"] = matrix;
  

}
function mirrorCurrentElement(){
  let mat = elements[currentElement]["shape"];
  mat = mirrorImage(mat)
  elements[currentElement]["shape"] = mat;

}
function rotateClockwise(a) {
  var n=a.length;
  for (var i=0; i<n/2; i++) {
      for (var j=i; j<n-i-1; j++) {
          var tmp=a[i][j];
          a[i][j]=a[n-j-1][i];
          a[n-j-1][i]=a[n-i-1][n-j-1];
          a[n-i-1][n-j-1]=a[j][n-i-1];
          a[j][n-i-1]=tmp;
      }
  }
  return a;
}
function mirrorImage(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
    throw new Error('Invalid input matrix');
  }

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create an empty matrix to store the mirrored result
  const mirroredMatrix = [];

  for (let i = 0; i < numRows; i++) {
    // Reverse the order of elements in each row
    mirroredMatrix.push(matrix[i].slice().reverse());
  }

  return mirroredMatrix;
}

//Game logic
let currentElement = 0;
let gameMap = 
[[0,0,0,0,0,0,0,0,0,0,0], 
[0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0],
[0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0]]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function clearElement(){
  var table = document.getElementById("currentElement");
  
  for (var i = 1; i < 4; i++) {
    let row = table.rows[i];
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0; j < 3; j++) {
     //iterate through columns
     row.cells[j].setAttribute('class', '');
     }

     
  }  
}

rotationButton.addEventListener('click',()=>{
  rotateCurrentElement();
  clearElement();
  drawCurrentElement(elements[currentElement]);
})
mirrorButton.addEventListener('click',()=>{
  mirrorCurrentElement();
  clearElement();
  drawCurrentElement(elements[currentElement]);
})
shuffle(elements)