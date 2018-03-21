var muffins = [
  {
    name: "Chocolate Muffins with Vanilla Icing",
    p: "Baking chococolate muffins ... the recipe that got me interested in baking. This recipe is very simple and easy. Give it a try before getting into the more complicate items. Suggest baker level: Begginer",
    image: "images/chocmuffins.png"
  },
  {
    name: "Vanilla Cupcakes with Chocolate Frosting",
    p: "Baking vanilla cupcakes is easy, considering that you re using the right recipe, and respect the baking time. Vanilla cupcakes can easily harden, if left too long in the oven. Suggested baker level: Begginer",
    image: "images/vanillacupcake.JPG"
  },
  {
    name: "Cake inside a cupcake",
    p: "A great gift to your loved ones on Valentine's Day...or any day! Baking a cake inside a cupcake is a process that demands patience and time. Using two of your favorite cake recipes, and a cookie cutter, these cupcakes can be done and enjoyed by all. Suggested baker level: Intermediate",
    image: "images/cakewithin.JPG"
  },
  {
    name: "Lemon Cupcake",
    p: "Lemon cupcakes give a great summer feel and are simple to make. The extra challenge is to use lemon zest and really bring out the flavors. Suggested baking level: Intermediate",
    image: "images/cakewithin.JPG"
  }
]

var pies = [
  {
    name: "Berry Pie",
    p: "Baking a berry pie is simple, given that you purchase a pie crust at the grocery store. I have not yet tried to create my own dough, that project should be completed soon enough. Suggested baker level: Begginer",
    image: "images/pie.png"
}, {
    name: "Berry Pie with Twist Top",
    p: "Baking a berry pie with a twist top is identical to a regular pie, although the top pie crust is cut into strips and twirled to create this design. Suggested baker level: Begginer",
    image: "images/berrypie.jpg"
}
]

var cakes = [
  {
    name: "Mini Chocolate Bundt Cakes",
    p: "Baking bundt cakes can be tricky, because the consistency may vary depending on the pan. This is my very first bundt cake recipe, made with the same recipe as the chocolate muffins. Suggested baker level: Begginer",
    image: "images/minibundt.JPG"
  }
]

function muffinList() {

  // select element with id "target"
  var container = document.getElementById("target")
  // give it a class of "parent"
  container.classList.add("parent")

  //We want to create product listings from a databse, and not on HTML. On HTML, you can't change anything, in a database, you can change easily
  for (var i = 0; i < muffins.length; i++) {

    var div = document.createElement("div")
    div.classList.add("itemdiv")
    //Add class to add styles
    //    divV.classList.add("listing")
    var h2 = document.createElement("h2")
    h2.innerHTML = muffins[i].name
    var p = document.createElement("p")
    p.innerHTML = muffins[i].p
    var img = document.createElement("img")
    img.setAttribute("src", muffins[i].image)
    img.setAttribute("alt", muffins[i].name)
    //Add class to add styles
    img.classList.add("itemimg")


    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    container.appendChild(div)


  }
}

muffinList()

function pieList() {

  // select element with id "target"
  var container = document.getElementById("pietarget")
  // give it a class of "parent"
  container.classList.add("parent")

  //We want to create product listings from a databse, and not on HTML. On HTML, you can't change anything, in a database, you can change easily
  for (var i = 0; i < pies.length; i++) {

    var div = document.createElement("div")
    div.classList.add("itemdiv")
    //Add class to add styles
    //    divV.classList.add("listing")
    var h2 = document.createElement("h2")
    h2.innerHTML = pies[i].name
    var p = document.createElement("p")
    p.innerHTML = pies[i].p
    var img = document.createElement("img")
    img.setAttribute("src", pies[i].image)
    img.setAttribute("alt", pies[i].name)
    //Add class to add styles
    img.classList.add("itemimg")


    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    container.appendChild(div)


  }
}

pieList()

function cakeList() {

  // select element with id "target"
  var container = document.getElementById("caketarget")
  // give it a class of "parent"
  container.classList.add("parent")

  //We want to create product listings from a databse, and not on HTML. On HTML, you can't change anything, in a database, you can change easily
  for (var i = 0; i < cakes.length; i++) {

    var div = document.createElement("div")
    div.classList.add("itemdiv")
    //Add class to add styles
    //    divV.classList.add("listing")
    var h2 = document.createElement("h2")
    h2.innerHTML = cakes[i].name
    var p = document.createElement("p")
    p.innerHTML = cakes[i].p
    var img = document.createElement("img")
    img.setAttribute("src", cakes[i].image)
    img.setAttribute("alt", cakes[i].name)
    //Add class to add styles
    img.classList.add("itemimg")


    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    container.appendChild(div)


  }
}

cakeList()
