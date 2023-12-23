
const menu = [
  {
    id: 1,
    title: "butter Pancakes",
    category: "breakfast",
    price: "Ru" + 15.99,
    img: "./images/item-1.jpg",
    desc: `These buttermilk pancakes have been a family favorite recipe for years. They are light, tender and flavorful. `,
  },
  {
    id: 2,
    title: "Cheery Cheese Cake",
    category: "breakfast",
    price: "Ru" + 13.99,
    img: "./images/item-2.jpg",
    desc: ` This cherry cheesecake is a simple, no-bake recipe made with a sweet cream cheese filling in a graham crust topped with canned cherry pie`,
  },
  {
    id: 3,
    title: "Smoothi",
    category: "shakes",
    price: "Ru" + 6.99,
    img: "./images/item-3.jpg",
    desc: `Each of these healthy smoothie recipes make for an easy — and delicious — breakfast or snack. `,
  },
  {
    id: 4,
    title: "Tandoor kabab",
    category: "lunch",
    price: "Ru" + 20.99,
    img: "./images/item-4.jpg",
    desc: `Featuring the most succulent kebabs and tikkas from around the nation cooked in the charcoal oven `,
  },
  {
    id: 5,
    title: "Breadroasted",
    category: "lunch",
    price: "Ru" + 22.99,
    img: "./images/item-5.jpg",
    desc: `This roasted garlic bread is made with Italian bread slathered with a buttery roasted garlic spread with Parmesan cheese `,
  },
  {
    id: 6,
    title: "Creamy shake",
    category: "shakes",
    price: "Ru" + 18.99,
    img: "./images/item-6.jpg",
    desc: `Easy Creamy Milkshakes, a variety of Strawberry, Banana or Salted Caramel`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: "Ru" + 8.99,
    img: "./images/item-7.jpg",
    desc: `This roasted garlic bread is made with Italian bread slathered with a buttery roasted garlic spread `,
  },
  {
    id: 8,
    title: "Egg classic",
    category: "lunch",
    price: "Ru" + 12.99,
    img: "./images/item-8.jpg",
    desc: `Each of these healthy smoothie recipes make for an easy — and delicious — breakfast or snack.  `,
  },
  {
    id: 9,
    title: "Fresh vegies",
    category: "breakfast",
    price: "Ru" + 16.99,
    img: "./images/item-9.jpg",
    desc: `Featuring the most succulent kebabs and tikkas from around the nation cooked in the charcoal oven`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpg",
    desc: `Each of these healthy smoothie recipes make for an easy — and delicious — breakfast or snack.`,
  },
];

const sectioncenter=document.querySelector(".section-center")
const containers=document.querySelector(".btn-container")


window.addEventListener('DOMContentLoaded',function(){
  showitems(menu);
  displayMenuButtons();
})



function showitems(menuItem){
    let display=menuItem.map(function (item){
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}"/>
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
    })

    display=display.join('')
    
    sectioncenter.innerHTML=display
}

function displayMenuButtons(){
const categories = menu.reduce(function (value, item) {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  },
  ["all"]
);

//console.log(category)  by this we will get all but unique categories

const categorybtn = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  })
  .join(""); //by this we join all the buttons created in map function one by one
containers.innerHTML = categorybtn;
const filterBtns = containers.querySelectorAll(".filter-btn");

//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      showitems(menu);
    } else {
      showitems(menuCategory);
    }
  });
});
}