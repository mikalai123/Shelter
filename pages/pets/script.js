const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');
const logo = document.querySelector('.header-logo');
const windowWidth = window.innerWidth;
console.log(windowWidth);

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  logo.classList.toggle('open');

}
hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);

let pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.jpg",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.jpg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.jpg",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.jpg",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.jpg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];

const moduleCards = document.querySelector(".grid");
const modulePopap = document.querySelector(".pet");
// добавляем id обьектам массива
let items = pets.map((n, i) => ({ id: i + 1, ...n }));
 //функция рандом карточек
function randomInt(max) {
  return Math.floor(Math.random() * 8);
}
function getRandomPets() {
  let arr = [];
  let result = [];
  pets.forEach( item => 
    arr = [...arr, ...items])
    for (let i = 0; i <arr.length; i++) {
      let index = randomInt(0, arr.length - 1);
      if (!result.includes(arr[index])) {
        result.push(arr[index]);
      }   
    }
    return result;
} 
let newArray = getRandomPets();
console.log(newArray); // newArray-рандомный массив карточек получен
//создаем зону с картинаками
function createElem() {
  for(let i = 0; i < newArray.length; i++) {
      let item = document.createElement("div");
      item.id = newArray[i].id;
      item.className ="slider-item" + " " + newArray[i].name;
      moduleCards.appendChild(item);

      let img = document.createElement('img');
      img.src = newArray[i].img;
      item.appendChild(img);

      let h3 = this.document.createElement('h3');
      h3.className = "georgia name-pet";
      h3.textContent = newArray[i].name;
      item.appendChild(h3);

      let btn = document.createElement('button');
      btn.className = "georgia btn-slider";
      btn.textContent = 'Learn more';
      item.appendChild(btn);         
  }
}
createElem();

// создаем карточки попапа
function createElemPopap() {
  for(let i = 0; i < newArray.length; i++) {
      let item = document.createElement("div");
      item.id = newArray[i].name;
      item.className ="slider-item" + " " + newArray[i].name;
      modulePopap.appendChild(item);

      let wrapper = document.createElement('div');
      wrapper.className = "wrapper-pets"
      item.appendChild(wrapper);

      let button = document.createElement('button');
      button.onclick = function(){
        close.style.display = "none";
        document.getElementById("Jennifer").style.display = "none";
        document.getElementById("Katrine").style.display = "none";
        document.getElementById("Woody").style.display = "none";
        document.getElementById("Sophia").style.display = "none";
        document.getElementById("Timmy").style.display = "none";
        document.getElementById("Charly").style.display = "none";
        document.getElementById("Scarlett").style.display = "none";
        document.getElementById("Freddie").style.display = "none";
        document.body.style.overflow = "";
      };

      button.id = "close-pets";
      button.className = "close-pets";
      button.textContent = "X";
      wrapper.appendChild(button);

      let img = document.createElement('img');
      img.className = "popap-img";
      img.src = newArray[i].img;
      img.alt = newArray[i].name;
      wrapper.appendChild(img);

      let div = document.createElement("div");
      div.className = "block-pets";
      wrapper.appendChild(div);

      let h3 = document.createElement('h3');
      h3.className = "block-pets-name";
      h3.textContent = newArray[i].name;
      div.appendChild(h3);

      let breed = document.createElement('p');
      breed.className = "breed";
      breed.textContent =newArray[i].type + " - " + newArray[i].breed;
      div.appendChild(breed); 
      
      let description = document.createElement('p');
      description.className = "description";
      description.textContent = newArray[i].description;
      div.appendChild(description); 

      let ul = document.createElement('ul');
      ul.className = "info-pet";
      div.appendChild(ul);

      let age = document.createElement('li');
      age.className = "age";
      age.innerHTML = "<b>Age</b>:" + newArray[i].age;
      ul.appendChild(age); 

      let inoculations = document.createElement('li');
      inoculations.className = "inoculations";
      inoculations.innerHTML ="<b>Inoculations</b>:" + " " + newArray[i].inoculations;
      ul.appendChild(inoculations); 

      let diseases = document.createElement('li');
      diseases.className = "diseases";
      diseases.innerHTML ="<b>Diseases</b>:" + " " + newArray[i].diseases;
      ul.appendChild(diseases); 

      let parasites = document.createElement('li');
      parasites.className = "parasites";
      parasites.innerHTML ="<b>Parasites</b>:" + " " + newArray[i].parasites;
      ul.appendChild(parasites);  
  }
}
createElemPopap();

 //попап
 const btnJennifer = document.getElementById('1');
 const btnSophia = document.getElementById('2');
 const btnWoody = document.getElementById('3');
 const btnScarlett = document.getElementById('4');
 const btnKatrine = document.getElementById('5');
 const btnTimmy = document.getElementById('6');
 const btnFreddie = document.getElementById('7');
 const btnCharly = document.getElementById('8');

function Jennifer() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Jennifer").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Sophia() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Sophia").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Woody() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Woody").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Scarlett() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Scarlett").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Katrine() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Katrine").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Timmy() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Timmy").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Freddie() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Freddie").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Charly() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Charly").style.display = "block";
  document.body.style.overflow = "hidden";
};

btnJennifer.addEventListener("click", Jennifer);
btnSophia.addEventListener("click", Sophia);
btnWoody.addEventListener("click", Woody);
btnScarlett.addEventListener("click", Scarlett);
btnKatrine.addEventListener("click", Katrine);
btnTimmy.addEventListener("click", Timmy);
btnFreddie.addEventListener("click", Freddie);
btnCharly.addEventListener("click", Charly);

const close = document.getElementById('pet');
window.onclick = function(event) {
    if (event.target == close) {
      close.style.display = "none";
      document.getElementById("Jennifer").style.display = "none";
      document.getElementById("Katrine").style.display = "none";
      document.getElementById("Woody").style.display = "none";
      document.getElementById("Sophia").style.display = "none";
      document.getElementById("Timmy").style.display = "none";
      document.getElementById("Charly").style.display = "none";
      document.getElementById("Scarlett").style.display = "none";
      document.getElementById("Freddie").style.display = "none";
      document.body.style.overflow = "";
    }
};

// попап
const firstButton = document.getElementById('first');
const prevButton = document.getElementById('prev');
const centrButton = document.getElementById('centr');
const nextButton = document.getElementById('next');
const lastButton = document.getElementById('last');

firstButton.addEventListener("click", createElemList);
prevButton.addEventListener("click", createElemList);
nextButton.addEventListener("click", createElemList);
lastButton.addEventListener("click", createElemList);

function createElemList() {
  moduleCards.innerHTML = ``;
  function randomInt(max) {
    return Math.floor(Math.random() * 8);
  }
  function getRandomPets() {
    let arr = [];
    let result = [];
    pets.forEach( item => 
      arr = [...arr, ...items])
      for (let i = 0; i <arr.length; i++) {
        let index = randomInt(0, arr.length - 1);
        if (!result.includes(arr[index])) {
          result.push(arr[index]);
        }   
      }
      return result;
  } 
  let newArray = getRandomPets();
  console.log(newArray); // newArray-рандомный массив карточек получен
  //создаем зону с картинаками
  function createElem() {
    for(let i = 0; i < newArray.length; i++) {
        let item = document.createElement("div");
        item.id = newArray[i].id;
        item.className ="slider-item" + " " + newArray[i].name;
        moduleCards.appendChild(item);
  
        let img = document.createElement('img');
        img.src = newArray[i].img;
        item.appendChild(img);
  
        let h3 = this.document.createElement('h3');
        h3.className = "georgia name-pet";
        h3.textContent = newArray[i].name;
        item.appendChild(h3);
  
        let btn = document.createElement('button');
        btn.className = "georgia btn-slider";
        btn.textContent = 'Learn more';
        item.appendChild(btn);         
    }
  }
  createElem();

 //попап
 const btnJennifer = document.getElementById('1');
 const btnSophia = document.getElementById('2');
 const btnWoody = document.getElementById('3');
 const btnScarlett = document.getElementById('4');
 const btnKatrine = document.getElementById('5');
 const btnTimmy = document.getElementById('6');
 const btnFreddie = document.getElementById('7');
 const btnCharly = document.getElementById('8');

 function Jennifer() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Jennifer").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Sophia() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Sophia").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Woody() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Woody").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Scarlett() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Scarlett").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Katrine() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Katrine").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Timmy() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Timmy").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Freddie() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Freddie").style.display = "block";
  document.body.style.overflow = "hidden";
};
function Charly() {
  document.getElementById("pet").style.display = "flex";
  document.getElementById("Charly").style.display = "block";
  document.body.style.overflow = "hidden";
};

btnJennifer.addEventListener("click", Jennifer);
btnSophia.addEventListener("click", Sophia);
btnWoody.addEventListener("click", Woody);
btnScarlett.addEventListener("click", Scarlett);
btnKatrine.addEventListener("click", Katrine);
btnTimmy.addEventListener("click", Timmy);
btnFreddie.addEventListener("click", Freddie);
btnCharly.addEventListener("click", Charly);

 const close = document.getElementById('pet');
 window.onclick = function(event) {
    if (event.target == close) {
      close.style.display = "none";
      document.getElementById("Jennifer").style.display = "none";
      document.getElementById("Katrine").style.display = "none";
      document.getElementById("Woody").style.display = "none";
      document.getElementById("Sophia").style.display = "none";
      document.getElementById("Timmy").style.display = "none";
      document.getElementById("Charly").style.display = "none";
      document.getElementById("Scarlett").style.display = "none";
      document.getElementById("Freddie").style.display = "none";
      document.body.style.overflow = "";
    }
}
};

// Пагинация
let count = 1;
let countMax = null;
let countPage = count;
centrButton.textContent = count;

prevButton.addEventListener("click", function() {
    count = countPage;
    centrButton.textContent = countPage -= 1;
    count = countPage;
    firstButton.disabled = false;
    prevButton.disabled = false;
    nextButton.disabled = false;
    lastButton.disabled = false;
  if(count <= 1){
    nextButton.disabled = false;
    lastButton.disabled = false;
    firstButton.disabled = true;
    prevButton.disabled = true;
  }
});

nextButton.addEventListener("click", function() {
    count = countPage;
    centrButton.textContent = countPage += 1;
    count = countPage;
    firstButton.disabled = false;
    prevButton.disabled = false;
  if(count >= countMax){
    nextButton.disabled = true;
    lastButton.disabled = true;
  }
});

firstButton.addEventListener("click", function() {
  centrButton.textContent = 1;
  countPage = 1;
  count = 1;
    nextButton.disabled = false;
    lastButton.disabled = false;
    firstButton.disabled = true;
    prevButton.disabled = true;
});
lastButton.addEventListener("click", function() {
  centrButton.textContent = countMax;
  countPage = countMax;
  count = countMax;
    firstButton.disabled = false;
    prevButton.disabled = false;
    nextButton.disabled = true;
    lastButton.disabled = true;
});

// проверяем разрешение экрана и обновляем счетчик 
function updatePages() {
  const windowWidth = window.innerWidth;
    console.log(windowWidth);
  if (windowWidth >= 1280) {
    countMax = 6;
  } else if (windowWidth >= 768 && windowWidth < 1280) {
    countMax = 8;
  } else {
    countMax = 16;
  }

};
updatePages();

window.addEventListener("resize", () => {
  updatePages();

});

