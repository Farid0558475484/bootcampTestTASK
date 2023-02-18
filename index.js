const demo = document.querySelector(".demo");
const demo1 = document.querySelector(".demo1");
const demo2 = document.querySelector(".demo2");
const demo3 = document.querySelector(".demo3");
const demo4 = document.querySelector(".demo4");
const demo5 = document.querySelector(".demo5");
const demo6 = document.querySelector(".demo6");

demo.innerHTML = "Hello World!";

function myButton() {
  demo.innerHTML = "Salam";
}

function demoA(x, y) {
  return x * y;
}

demo1.innerHTML = demoA(5, 6);

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

demo2.innerHTML = person.fullName();

function Data() {
  demo3.innerHTML = Date();
}

function length() {
  let text = "Hello World!";
  demo4.innerHTML = text.length;
}

// var str = "Пожалуйста, найдите, где происходит 'размещение'!";
// var pos = str.indexOf("размещение");
// demo5.innerHTML = pos;

// var str11 = "Яблоко, Банан, Киви";
// var res11 = str11.substr(7,6);
// document.getElementById("demo6").innerHTML = res11;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((item) => {
  if (item % 2 == 0) {
    console.log(item);
  }
});

const arr1 = [1, 222, 2, 24, 5, 6, 27, 228, 9, 10];

arr1.sort((a, b) => a - b);
console.log(arr1);
console.log(cdsceds);