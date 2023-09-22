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

// let guest=+prompt("cколько людей в клубе")
// let name=prompt("как вас зовут")



// if(name.charAt(0).toLowerCase() === "a"){

//    let age =+prompt("сколько вам лет")

//      if( age >= 20 && age <= 40){

//        let money =+prompt("сколько у вас денег")

//          if(money >= 100){

       
//           let guestlist =+prompt("сколько вас")

//              if(guest + guestlist<= 10){
//                alert("welcome ")
//              }

//               else{
//                alert("иди в другой клуб нет мест")
//               }
           

//            }
//          else {
//          alert("good bye")
//          }
//     }
//     else {
//     alert("good bye")
//    }

// }
// else {
//   alert("good bye")
// }




// 11111111111
//// let priceList = [30000, 2000, 11000, 33000, 2000, 100000,57000, 14000, 18000, 8000]

// let from = prompt('цена от')
// let up = prompt('цена до')


//22222222222
// let students = ['baxtzod', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz'] // longest name



let pricelist =[ 4000,2000,15000,23000,35000,50000,97000,40000 ]
 let from = +prompt('цена от')
 let up = +prompt('цена до')


 if(from >  1000 && up <= 10000){
  alert(" Мы можем предлажить вам такие авто как: Tico , Matiz , Nexia , Spark")

 }
 else if(from > 12000 && up <= 30000){
  alert(" Мы можем предлажить вам такие авто как: Traker 2, Jentra, BYD ")
}

else if(from > 35000 && up <= 70000){
  alert(" Мы можем предлажить вам такие авто как: Camaro, Corvette , Tesla, Cherry ")
}

else if(from > 70000 && up <= 100000){
  alert(" Мы можем предлажить вам такие авто как: Taxo, Tesla X ")
}




 else {
  alert("good bye bitch")
 }

 ///////////////////////////////////////////////////////////////////////////////////////////////////
 let students = [
  { name: "Safir" },
  { name: "Baxtzod" },
  { name: "Islom" },
  { name: "eva_elfi" },
  { name: "Shaxzod" },
];

let longestname = students.filter((student) => {

  return student.name.length === Math.max(...students.map(({ name }) => name.length));
})[0].name;

alert(`Самое длинное имя: ${longestname}`);


