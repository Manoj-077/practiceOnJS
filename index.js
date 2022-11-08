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


document.querySelector("h1").style.backgroundColor = "red";
document.getElementById("h22").classList.add("huge");


