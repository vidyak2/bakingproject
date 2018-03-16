var items = [
  {
    name: "Cake Pop with Rainbow Sprinkles",
    p: "This recipe is time consuming and demands several ingredients. However, the result is worth the time and effort.",
    image: "images/cakepop.png"
  },
  {
    name: "Berry Pie",
    p: "This recipe is time consuming and demands several ingredients. However, the result is worth the time and effort.",
    image: "images/pie.png"
  },
  {
    name: "Berry Pie with Twist Top",
    p: "This recipe is identical to the regular pie, except the top is made with a twist.",
    image: "images/berrypie.jpg"
  },
  {
    name: "Plain Cheesecake with Strawberry Compote",
    p: "This recipe is very time consuming. However, the result is worth the time and effort.",
    image: "images/cheesecake.JPG"
  },
  {
    name: "Chocolate Muffins with Vanilla Icing",
    p: "This recipe is very simple and very quickly made.",
    image: "images/chocmuffins.png"
  },
  {
    name: "Mini Chocolate Bundt Cakes",
    p: "This recipe is very simple and very quickly made.",
    image: "images/minibundt.JPG"
  },
  {
    name: "Vanilla Cupcakes with Chocolate Frosting",
    p: "This recipe is very simple and very quickly made.",
    image: "images/vanillacupcake.JPG"
  },
  {
    name: "Heart Shape Chocolate Cake Inside a Vanilla Cake",
    p: "This recipe is long and suggested for advanced bakers.",
    image: "images/cakewithin.JPG"
  }
]

function itemList() {

  console.log("hello")

  // select element with id "target"
  var container = document.getElementById("target")
  // give it a class of "parent"
  container.classList.add("parent")

  // loop through the products array, and for each, a listing like:
  // <div>
  //   <h2>name</h2>
  //   <p>p</p>
  //   <img src="" alt="">
  // </div>

  //We want to create product listings from a databse, and not on HTML. On HTML, you can't change anything, in a database, you can change easily
  for (var i = 0; i < items.length; i++) {

    var div = document.createElement("div")
    //Add class to add styles
    //    divV.classList.add("listing")
    var h2 = document.createElement("h2")
    h2.innerHTML = items[i].name
    var p = document.createElement("p")
    p.innerHTML = items[i].p
    var img = document.createElement("img")
    img.setAttribute("src", items[i].image)
    img.setAttribute("alt", items[i].name)
    //Add class to add styles
    img.classList.add("itemimg")


    div.appendChild(h2)
    div.appendChild(img)
    div.appendChild(p)
    container.appendChild(div)


  }
}

itemList()
