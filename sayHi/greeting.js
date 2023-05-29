
let sayHello = function() {
  const timeLine = new Date().getHours();
  let  greeting = "hi";
  if (timeLine <= 0 && timeLine >=12){
     greeting = "Morning";
  } else if(timeLine <= 12 && timeLine >=18){
     greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }
  return greeting;
}

console.log(sayHello());