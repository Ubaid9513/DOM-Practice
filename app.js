// var a = document.getElementById("sec").previousElementSibling;
// console.log(a);

// var a = document.getElementById("parent");
// console.log(a.childNodes[1].nodeType);

// var a = document.getElementById("sec");
// console.log(a.nodeName);

// console.log(document.childNodes[1].childNodes[1].childNodes[1]);

// var target = document.getElementById("h1");
// console.log(target.hasAttribute("class"));

// var target = document.getElementById("h1");
// console.log(target.getAttribute("class"));


// var target = document.getElementById("child");
// target.setAttribute('class',"blue");

// var target = document.getElementById("h1"); //finding attribute name
// console.log(target.attributes[1].nodeName);

// chapter # 67 (most important chapter)

// var p = document.createElement("h1");
// console.log(p);

// var a = document.createElement("h1");
// var text = document.createTextNode("Hello Ubaid");
// a.appendChild(text); //kisi element m koi text dhalne hoto js m appendChild ka use krte hen
// console.log(a);


// var a = document.createElement("h1");
// var b = document.createTextNode("Hello, Ubaid");
// a.appendChild(b);
// var main = document.getElementById("main");
// main.appendChild(a);


// ---X---

function sendMessage(){
    var input = document.getElementById("input");
    var p = document.createElement("p");
    var text = document.createTextNode(input.value);
    p.appendChild(text);
    var message = document.getElementById("message");
    message.appendChild(p);
    input.value = "";

}













// ---X---

// var d = document.getElementById("parent");
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//   if (d.childNodes[i].nodeType === 1) {
//     pCounter++;
//   }
//   if (pCounter === 2) {
//     d.childNodes[i].innerHTML = "All his men.";
//     break;
//   }
// }

// ---X---


