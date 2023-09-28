// завдання 2

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];




  const list = document.querySelector(".list_product");

  const productItem = ingredients.map((products) => `<li class="list_item">${products}</li>`).join();
  console.log(productItem);

  list.append(productItem);
  console.log(list);

  list.innerHTML = productItem;

// завдання 1 
const animalHome = ["Кіт", "Хом'як", "Кінь", "Папуга"];
const listAnimal = document.querySelector(".list-animal").length;
const animalItem = animalHome.map((animals) => `<li class = "item-animal"><h2 class="name-animal">${animals}</h2></li>`).join();
console.log(animalItem)
listAnimal.append(animalItem);
console.log(listAnimal)
listAnimal.innerHTML = animalItem;

const productMarket = ["Хліб", "Петрушка", "Сир"];
const listProduct = document.querySelector(".list-product").length;
const productlItem = productMarket.map((products) => `<li class = "item-product"><h2 class="name-product">${products}</h2></li>`).join();
console.log(productlItem);
listProduct.append(productlItem);
console.log(listProduct)
listProduct.innerHTML = productlItem;

const itTehnology = ["HTML", "CSS", "JavaScript", "React", "Node"];
const listTehnology = document.querySelector(".list-tehnology").length;
const tehnologyItem = itTehnology.map((Tehnologys) => `<li class = "item-tehno"><h2 class="name-tehno">${Tehnologys}</h2></li>`).join();
console.log(tehnologyItem);
listTehnology.append(tehnologyItem);
console.log(listTehnology)
listTehnology.innerHTML = tehnologyItem;




// завдання 3
const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const listGelarry = document.querySelector(".gallery");

  const showImage = images.map((picture) => `<li class="link_picture"><img src="${picture.url}" alt="${picture.alt}"></li>`).join()
  console.log(showImage);
  listGelarry.append(showImage);
  console.log(listGelarry);
  listGelarry.innerHTML = showImage;

// завдання 4


// const counterValue = 0 ;

// function increment  (counterValue){
//     return counterValue += +1;
// }

// function decrement  (counterValue){
//    return counterValue += -1;

// }

// const buttonPlus = document.querySelector(".button_plus");
// const buttonMinus = document.querySelector(".button_minus");

// buttonPlus.addEventListener("plus", (increment) => {

//     return increment;

// });

// buttonMinus.addEventListener("minus", (decrement) => {

//     return decrement;

// });