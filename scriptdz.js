// 1 task

//let name = prompt("Введите ваше имя:");
//if (name.charAt(0).toLowerCase() === "a") {
  //alert("welcome");
//} else {
  //alert("иди гуляй вася");
//}



// 2 task
//let b =prompt('напишите цифру я скажу четная или нет')

//if( b % 2 === 0) {
  //  alert ('welcome')
//}
//else
//{
  //  alert ('иди в садик')
//}

// 3 task

//let c =prompt('напишите цифру я скажу четная или нет')

//if( c.length % 2 === 0) {
  //  alert ('welcome')
//}
//else
//{
  //  alert ('иди в садик')
//}




//...........................................................................................................................................






// let name =prompt("как вас зовут?")
// let account = "7777"
// let money ="10000"

// if(name === "Alex") {
//   +prompt("number schet")
//    if (name === 7777){
//     alert("doog")
//   }
// }







//.......................................................................................................................................





// let guest =+prompt("сколько занято")
// let name =prompt("как вас зовут")
// let age =+prompt("сколько вам лет")
// let money =+prompt("сколько у вас денег")
// if(name.charAt(0).toLowerCase() === "a"&& age >= 20 && age <= 40 && money>=100){
//   alert("welcome")
// }
// else{
//   alert("good bye")
// }

let guest=+prompt("cколько людей в клубе")
let name=prompt("как вас зовут")



if(name.charAt(0).toLowerCase() === "a"){

   let age =+prompt("сколько вам лет")

     if( age >= 20 && age <= 40){

       let money =+prompt("сколько у вас денег")

         if(money >= 100){

       
          let guestlist =+prompt("сколько вас")

             if(guest+guestlist<= 10){
               alert("welcome ")
             }

              else{
               alert("иди в другой клуб нет мест")
              }
              

           }
         else {
         alert("good bye")
         }
    }
    else {
    alert("good bye")
   }

}
else {
  alert("good bye")
}