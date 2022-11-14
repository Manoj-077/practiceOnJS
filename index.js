 /* reversing the num*/
 /*var x = prompt("enter the num");
var r = 0;
var d = x.length;
console.log("you entered "+x)
function rx(){
    for (let i=0;i<d;i++){
            r = (parseInt(x)%10)+ r*10;
            x = x/10;
            console.log("inside loop")         
    }
    console.log(r);
}

rx();*/


/* to print all the first words to caps*/
/*var w = "mars is red";
d = w.length;
var str;
var n, i =0;
var f = [];
var ar = [];

ar = w.split(' ');
console.log(ar);
while(i<ar.length){
        f[i] = ar[i][0].toUpperCase()+ar[i].slice(1 );
        
        i++;
   }
console.log(f);
str = f.join(' ');
console.log(str); */



/*  var cars = {
    name: "ford",
    type : "suv",
    wheels : "4",
    fuel: "diesel"
   }

   for (let i in cars){
    console.log(i+" "+cars[i]);
   }

delete cars[prompt("enter property to be deleted")];
console.log(cars); */

/*var country = {
    name : ['usa','India','china','japan'] ,
    people : ['american','indians','chinese','japanese'] ,
    continents : 2,
    allies : function(){return this.name[0]+" "+this.name[1]+" are allies"}   
};
var ar = ['the','mars'];
console.log(country.name[1]);
console.log(ar);
console.log(country);
console.log(country.continents);
console.log(country.allies());
console.log(country);
*/

/*let car = {
    name : "honda",
    type : "SUV",
    wheels : 4,
    color : "grey"
};
function obj(){

console.log(car.name);
}
obj();
*/
/*let x = "name";
console.log(car[x]);
console.log(car.name);*/


document.getElementById("h22").classList.add("huge");

document.getElementById("h11").style.color = "orange";
document.getElementById("h11").style.fontFamily = "Cabin";
document.getElementById("main").style.textAlign = "center";
document.querySelector("#main").style.backgroundColor = "lightGreen";

   
document.getElementsByTagName("h2")[0].innerHTML = "<em>Welcome To JS</em>"


var r1 = Math.floor((Math.random() * 6)) + 1;
var r2 = Math.floor((Math.random() * 6)) + 1;
var d1= "dice/dice"+ r1+".png";
var d2 = "dice/dice"+ r2+".png";
document.getElementById('dice1').setAttribute('src',d1);
document.getElementById('dice2').setAttribute('src',d2);

if(r1>r2){
    document.getElementById("result").innerHTML="player 1 wins!!"
}
else if(r1<r2){
    document.getElementById("result").innerHTML="player 2 wins!! haha"
}
else{
    document.getElementById("result").innerHTML="Its a tie .."
}


var s = r1 + r2;


document.getElementsByClassName("sum")[1].innerHTML = "your sum is "+s;

for (let i=0;i<document.getElementsByClassName("btn").length;i++){
    let c = i + 1;
    document.getElementsByClassName("btn")[i].addEventListener("click",function(){alert("you clicked on "+ c);console.log(this.innerHTML); });
}

/*document.getElementsByTagName("body")[0].addEventListener("keydown",function(event){console.log(event.key +" is pressed")})*/



/* Higher order functions
function add(num1, num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function calculate(num1,num2,operation){
    return operation(num1,num2);
} */

function Process(name,task){
    this.name = name;
    this.task = task;
    this.doThing = function(){ alert("in process..."); }
};

var cx = new Process("wind","clean");

function Country(name,continent,leader){
    this.name = name;
    this.continent = continent;
    this.leader = leader;
    this.fullName = function(){console.log("this is country constructor function")};
}


var ind = new Country("India","Asia","Modi");
var c1 = 0;

for (let o in document.getElementById('container').children){

   if (document.getElementById('container').children[o].tagName==="IMG"){
    c1 = c1+1;
   }
   
}
console.log(c1);

console.log("the ind obj is objec now "+ ind);
var js = JSON.stringify(ind);
console.log("ind is now a JSON "+ js);

document.getElementById("h11").addEventListener("click",function(){window.history.back()})

document.getElementById("back").style.marginTop = "100px";
document.getElementById("back").style.display = "inline-block";
document.getElementById("back").classList.add("ll");
document.getElementById("back").addEventListener("click",function(){window.history.back()})
   
document.getElementById("hist").innerHTML = "the number of history urls are "+ window.history.length;
document.getElementById("hist").style.backgroundColor = "yellow";
var fn ,ar1,ar2;
var ln ;
var ag;
var idx,djj,gd;

function Data(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;   
}

var idx = new Data("jim","rogers",23)
console.log(idx);

document.getElementById("sub").addEventListener("click",function(){
    fn = document.getElementById("fname").value;
    ln = document.getElementById("lname").value;   
    ag = document.getElementById("age").value;
    alert(`hi, ${fn} ${ln}, age is ${ag}`);
    console.log("hi "+fn+" "+ln+" "+ag);
    ar1 = [];
    ar1.push(fn);
    ar1.push(ln);
    ar1.push(parseInt(ag));
    console.log(ar1);
    localStorage.setItem(fn+ln,JSON.stringify(ar1));
    storing();
})

function storing(){
gd = localStorage.getItem(fn+ln);
console.log("got item "+gd);
ar2 = JSON.parse(gd);
console.log(ar2);
djj = new Data(ar2[0],ar2[1],ar2[2]);
console.log(djj);
}
var vr=0;
for (let k in localStorage){

    if(vr<localStorage.length){
         console.log(k)
        }
    vr++ 
};









