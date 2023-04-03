let http = new XMLHttpRequest();
http.open('get', 'pets.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
       let pets = JSON.parse(this.responseText);
       let output = "";
       for(let item of pets){
          output += `
             <div id="${item.name}">
               <div class="wrapper-pets">
                  <button onclick="${item.name}()" id="qw" class="close-pets">X</button>
                  <img class="popap-img" src="${item.img}" alt="${item.name}">
                  <div class="block-pets">
                     <h3 class="title">${item.name}</h3>
                     <p class="breed">${item.type}-${item.breed}</p>
                     <p class="description">${item.description}</p>
                     <p class="age">Age: ${item.age}</p>
                     <p class="inoculations">Inoculations: ${item.inoculations}</p>
                     <p class="diseases">Diseases: ${item.diseases}</p>
                     <p class="parasites">Parasites: ${item.parasites}</p>
                  </div>
               </div>
             </div>
          `;
       }
       document.querySelector(".pet").innerHTML = output;
    }
 }


const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');


 btn1.onclick = function() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Katrine").style.display = "block";
  document.body.style.overflow = "hidden";
 };
 btn2.onclick = function() {
   document.getElementById("pet").style.display = "flex";
  document.getElementById("Jennifer").style.display = "block";
  document.body.style.overflow = "hidden";
 };
  btn3.onclick = function() {
   document.getElementById("pet").style.display = "flex";
  document.getElementById("Woody").style.display = "block";
  document.body.style.overflow = "hidden";
 };

 function Jennifer() {
    document.getElementById("Jennifer").style.display = "none";
    document.getElementById("pet").style.display = "none";
    document.body.style.overflow = "";
 }
 function Katrine() {
    document.getElementById("Katrine").style.display = "none";
    document.getElementById("pet").style.display = "none";
    document.body.style.overflow = "";
 }
 function Woody() {
    document.getElementById("Woody").style.display = "none";
    document.getElementById("pet").style.display = "none";
    document.body.style.overflow = "";
 }

 const close = document.getElementById('pet');
 window.onclick = function(event) {
    if (event.target == close) {
      close.style.display = "none";
      document.getElementById("Jennifer").style.display = "none";
      document.getElementById("Katrine").style.display = "none";
      document.getElementById("Woody").style.display = "none";
      document.body.style.overflow = "";
    }
}
