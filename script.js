

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
const seasons = ["Tavasz" ,"Nyár" ,"Ősz","Tél" ]

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
let currentElement = 0;
const playButton = document.getElementById('startButton')
const startScreen = document.getElementById('startscreen')
const game = document.getElementById('game')
const map = document.getElementById('placeForMap')
const rotationButton = document.getElementById('rotation')
const mirrorButton = document.getElementById('mirror')
shuffle(elements)
let currentShape = elements[currentElement]["shape"]
let seasonTimeDisplay = document.getElementById("seasonTime")
let seasonTime = 7;
let gameTime = 28;
let currentSeasonCount = 0;
let points = 0;
let seasonDisplay = document.getElementById("seasonDisplay")
let pointDisplay = document.getElementById("totalPoints")
let springPoints = document.getElementById("spring")
let summerPoints = document.getElementById("summer")
let autumnPoints = document.getElementById("autumn")
let winterPoints = document.getElementById("winter")
let erdoszele = 0
let almosVolgy = 0
let krumpliontozes = 0
let hatarvidek = 0
let missionPoints = document.querySelectorAll(".missions > p")
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



seasonTimeDisplay.innerHTML = `Az évszakból hátralévő idő : ${seasonTime} / 7`
seasonDisplay.innerHTML = `Jelenlegi évszak: ${seasons[currentSeasonCount]}`
pointDisplay.innerHTML = `Összesen ${points} pont`






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
    e.classList.add("tile")
    e.setAttribute('draggable',true)
  }
  if(n == 3){
    e.setAttribute('class', 'forest')
    e.classList.add("tile")
    e.setAttribute('draggable',true)
  }
  if(n == 4){
    e.setAttribute('class', 'town')
    e.classList.add("tile")
    e.setAttribute('draggable',true)
  }
  if(n == 5){
    e.setAttribute('class', 'farm')
    e.classList.add("tile")
    e.setAttribute('draggable',true)
  }
}
function resetGameboard(){
  gameMap = [[0,0,0,0,0,0,0,0,0,0,0], 
  [0,1,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0]]}

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
      td.setAttribute('ondrop','drop(event)');
      td.setAttribute('ondragover','allowDrop(event)');
      row.appendChild(td);
      elementDraw(td, gameMap[i][g]);
      
    }

  }
}
function removeGameboard() {
  const table = document.getElementById('map');
  if (table) {
    const parent = table.parentNode;
    parent.removeChild(table);
  }
}

function missionSelection(){
  var table = document.getElementById("missionsTable");
  let missioncounter = 0;
  for (var i = 0, row; row = table.rows[i]; i++) {
    
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     
     let title = document.createElement('h2');
     title.innerHTML = missions['basic'][missioncounter]['title'];
     col.appendChild(title);
     col.innerHTML += missions['basic'][missioncounter]['description']
     let points = document.createElement("p")
     points.innerHTML = "0 pont"
     col.appendChild(points)
     missioncounter++;
     //depending on the season highlight the current one
     col.classList.remove('active') 
     if(currentSeasonCount == 0){
      
      if(i == 0 && j == 0 || i == 0 && j == 1){
        col.classList.add('active')
      }
      
     }
     if(currentSeasonCount == 1){
      if(i == 0 && j == 1 || i == 1 && j == 0){
        col.classList.add('active')
      }
      
     }
      if(currentSeasonCount == 2){
        if(i == 1 && j == 0 || i == 1 && j == 1){
          col.classList.add('active')
        }
        
      }
      if(currentSeasonCount == 3){
        if(i == 1 && j == 1 || i == 0 && j == 0){
          col.classList.add('active')
        }
        
      }
   }  
} 
}
function clearMissionsTable() {
  var table = document.getElementById("missionsTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
    
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop
    for (var j = 0, col; col = row.cells[j]; j++) {
     //iterate through columns
     
     col.innerHTML = "";
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
  currentShape = matrix;
  

}
function mirrorCurrentElement(){
  let mat = elements[currentElement]["shape"];
  mat = mirrorImage(mat)
  elements[currentElement]["shape"] = mat;
  currentShape = mat;

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
//drag placement
function checkPlacement(i,j){
  
  for(let g = 0; g < 3; g++){

    for(let f = 0; f < 3; f++){
      if(g + i > 10 && currentShape[g][f] == 1){
        
        return false;
      }
      if(f + j > 10 && currentShape[g][f] == 1){
        
        return false;
      }
      if(currentShape[g][f] == 1 && gameMap[i + g][j + f] != 0){
        
        return false;
      }
      
    }
  }
  return true;
}


function allowDrop(ev) {
  
  // Get the closest table row (tr) that contains the ev.target element
  var row = ev.target.closest('tr');
  
  // Get all the cells (td) within that row
  var cells = row.getElementsByTagName('td');
  
  // Find the index of the cell that matches the ev.target element
  var columnIndex = Array.from(cells).indexOf(ev.target);
  
  // Find the index of the row within the table
  var table = row.closest('table');
  var rows = table.getElementsByTagName('tr');
  var rowIndex = Array.from(rows).indexOf(row);
  if(checkPlacement(rowIndex,columnIndex)){
    ev.preventDefault();
    for(let i = rowIndex; i < rowIndex + 3; i++){

      for(let j = columnIndex; j < columnIndex + 3; j++){
        // Check if i and j are valid indices
        if (i >= 0 && i < rows.length && j >= 0 && j < cells.length && currentShape[i - rowIndex][j - columnIndex] == 1) {
          
          var neighborCell = rows[i].getElementsByTagName('td')[j];

          
          neighborCell.style.background = "#90EE90"
        }
      }
    }
  }else{
    for(let i = rowIndex; i < rowIndex + 3; i++){

      for(let j = columnIndex; j < columnIndex + 3; j++){
        // Check if i and j are valid indices
        if (i >= 0 && i < rows.length && j >= 0 && j < cells.length && currentShape[i - rowIndex][j - columnIndex] == 1) {
          
          var neighborCell = rows[i].getElementsByTagName('td')[j];

          
          neighborCell.style.background = "#f1807e"
        }
      }
    }
  }
  ev.target.addEventListener('dragleave', function() {
    for(let i = rowIndex; i < rowIndex + 3; i++){

      for(let j = columnIndex; j < columnIndex + 3; j++){
        // Check if i and j are valid indices
        if (i >= 0 && i < rows.length && j >= 0 && j < cells.length) {
          
          var neighborCell = rows[i].getElementsByTagName('td')[j];

          
          neighborCell.style.background = ""
        }
      }
    }
    
  });
}

function drop(ev) {
  ev.preventDefault();
  ev.target.style.background = "";
  var data = ev.dataTransfer.getData("text");
  var currentType = elements[currentElement]["type"];
  ev.target.setAttribute('class',`${currentType}`);
  
  // Get the closest table row (tr) that contains the ev.target element
  var row = ev.target.closest('tr');
  
  // Get all the cells (td) within that row
  var cells = row.getElementsByTagName('td');
  
  // Find the index of the cell that matches the ev.target element
  var columnIndex = Array.from(cells).indexOf(ev.target);
  
  // Find the index of the row within the table
  var table = row.closest('table');
  var rows = table.getElementsByTagName('tr');
  var rowIndex = Array.from(rows).indexOf(row);
  
  for(let i = rowIndex; i < rowIndex + 3; i++){

    for(let j = columnIndex; j < columnIndex + 3; j++){
      // Check if i and j are valid indices
      if (i >= 0 && i < rows.length && j >= 0 && j < cells.length && currentShape[i - rowIndex][j - columnIndex] == 1) {
        
        gameMap[i][j] = tileType(currentType);

        
        
      }
    }
  }
  removeGameboard();
  drawGameboard();
  seasonTime = seasonTime - elements[currentElement]["time"];
  updateSeasonTime();
  
  currentElement++;
  clearElement();
  drawCurrentElement(elements[currentElement]);
  currentShape = elements[currentElement]["shape"];

  
}
function missionPointsDraw(){
  missionPoints[0].innerHTML = `${erdoszele} pont`
  missionPoints[1].innerHTML = `${almosVolgy} pont`
  missionPoints[2].innerHTML = `${krumpliontozes} pont`
  missionPoints[3].innerHTML = `${hatarvidek} pont`
}
//Game logic
function updateSeasonTime(){
  gameTime = gameTime - elements[currentElement]["time"];
  
  
  
  if(seasonTime > 0){
    seasonTimeDisplay.innerHTML = `Az évszakból hátralévő idő : ${seasonTime} / 7`
  }else{
    
    
    if(currentSeasonCount == 0){
      erdoszele = erdoszele + erdoSzele();
      almosVolgy = almosVolgy + almosVölgy();
      points = points + erdoSzele();
      points = points + almosVölgy();
      springPoints.innerHTML = `Tavasz: ${points}`
      
    }
    if(currentSeasonCount == 1){
      let pastPoints = points;
      
      points = points + krumpliOntozes();
      points = points + almosVölgy();
      krumpliontozes = krumpliontozes + krumpliOntozes();
      almosVolgy = almosVolgy + almosVölgy();
      summerPoints.innerHTML = `Nyár: ${points - pastPoints}`
      
    }
    if(currentSeasonCount == 2){
      let pastPoints = points;
      krumpliontozes = krumpliontozes + krumpliOntozes();
      hatarvidek = hatarvidek + hatarVidek();
      points = points + krumpliOntozes();
      points = points + hatarVidek();
      autumnPoints.innerHTML = `Ősz: ${points - pastPoints}`
      
    }
    if(currentSeasonCount == 3){
      let pastPoints = points;
      erdoszele = erdoszele + erdoSzele();
      hatarvidek = hatarvidek + hatarVidek();
      points = points + krumpliOntozes();
      points = points + hatarVidek();
      winterPoints.innerHTML = `Tél: ${points - pastPoints}`
      
    }
    
    seasonTime = 7;
    seasonTimeDisplay.innerHTML = `Az évszakból hátralévő idő : ${seasonTime} / 7`
    currentSeasonCount = currentSeasonCount + 1;
    seasonDisplay.innerHTML = `Jelenlegi évszak: ${seasons[currentSeasonCount % 4]}`
    pointDisplay.innerHTML = `Összesen ${points} pont`
    


    clearMissionsTable();
    missionSelection();
    missionPoints = document.querySelectorAll(".missions > p")
    missionPointsDraw();
    
    currentElement = 0;
    shuffle(missions);
    if(gameTime <= 0){
      points = points + hegyek();
      alert(`Vége a játéknak, pontszámod: ${points}`)
      removeGameboard();
    }
    
    
  }
  

}



function cloneArray(arr) {
  return arr.map(row => row.slice());
}
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
function erdoSzele(){
  let points = 0;
  for(let i = 0; i < 11; i++){
    if(gameMap[i][0] == 3){
      points++;
    }
    if(gameMap[i][10] == 3){
      points++;
    }
    if(gameMap[0][i] == 3){
      points++;
    }
    if(gameMap[10][i] == 3){
      points++;
    }
  }
  return points;

}
function almosVölgy(){
  let points = 0;
  for(let i = 0; i < 11; i++){
    let count = 0;
    for(let j = 0; j < 11; j++){
      if(gameMap[i][j] == 3){
        count++;
      }
    }
    if(count >= 3){
      points = points + 4;
    }
  }
  return points;
}
function krumpliOntozes(){
  let points = 0;
  for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
      if(gameMap[i][j] == 5){
        if(gameMap[i][j + 1] == 2){
          points = points + 2;
        }
        if(gameMap[i][j - 1] == 2){
          points = points + 2;
        }
        if(gameMap[i + 1][j] == 2){
          points = points + 2;
        }
        if(gameMap[i - 1][j] == 2){
          points = points + 2;
        }
      }
    }
  }
  return points;
}
function hegyek(){
  let points = 0;
  //fully surrounded mountains are worth 1 point
  for(let i = 1; i < 10; i++){
    for(let j = 1; j < 10; j++){
      if(gameMap[i][j] == 1){
        if(gameMap[i][j + 1] != 0 && gameMap[i][j - 1] != 0 && gameMap[i + 1][j] != 0 && gameMap[i - 1][j] != 0){
          points++;
        }
      }
    }
  }
  return points;
}
function hatarVidek(){
  let points = 0;
  for(let i = 0; i < 11; i++){
    let count = 0;
    for(let j = 0; j < 11; j++){
      if(gameMap[i][j] != 0){
        count++;
      }
    }
    if(count == 11){
      points = points + 6;
    }
  }
  for(let i = 0; i < 11; i++){
    let count = 0;
    for(let j = 0; j < 11; j++){
      if(gameMap[j][i] != 0){
        count++;
      }
    }
    if(count == 11){
      points = points + 6;
    }
  }
  return points;
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
