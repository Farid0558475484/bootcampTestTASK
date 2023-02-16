const demo = document.querySelector('.demo');
const demo1 = document.querySelector('.demo1');
const demo2 = document.querySelector('.demo2');
const demo3 = document.querySelector('.demo3');

demo.innerHTML = 'Hello World!';



function myButton(){
    demo.innerHTML = 'Salam';
}


function demoA(x,y){
    return x*y;
}

demo1.innerHTML = demoA(5,6);

const person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  demo2.innerHTML = person.fullName();

  function Data() {
    demo3.innerHTML = Date();
    
  }