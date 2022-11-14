var fn,ln,x1,x2,row,c1,c2,c3;

function Sports(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
var ob1 = new Sports
document.getElementById("sub").addEventListener("click",function(){
    fn = document.getElementById("fname").value;
    ln = document.getElementById("lname").value;
    ag = document.getElementById("age").value;
    console.log(fn+" "+ln)
    var d = new Sports(fn,ln,ag);
    localStorage.setItem(fn.toLowerCase()+ln.toLowerCase(),JSON.stringify(d));
    
});

function showTab(){
    for (let i=0; i < localStorage.length;i++){
        x1 = localStorage.getItem(localStorage.key(i));
        x2 = JSON.parse(x1)
        row = document.getElementsByTagName("table")[0].insertRow(document.getElementsByTagName("table")[0].rows.length);
        c1 = row.insertCell(0)
        c2 = row.insertCell(1)
        c3 = row.insertCell(2)
        c1.innerHTML = x2.firstName;
        c2.innerHTML = x2.lastName;
        c3.innerHTML = x2.age;
    }
}

showTab();