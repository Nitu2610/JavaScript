// Q1.Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };
// Sample Output: name, sclass, rollno

// var student = {
//     Name: "Nitesh",
//     Class: " VI",
//     rollno: 186,
// };
// console.log(student);
// for (let nitesh in student) {
//     console.log(nitesh)

// }


// Q2.Write a JavaScript program to delete the rollno property from the following object.Also print the object before or after deleting the property.
// Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// let nike = {
//     name: "Nitesh",
//     class: "VI",
//     rollno: 186,
// }
// console.log(nike) // Before delete,
// delete nike.rollno;
// console.log(nike) // After delelte 

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object:
// var student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// let samples = {
//     name: "Nike",
//     class: "V",
//     rollni: 186,
//     address: "4/63",
//     Mobile: "Redmi",
//     song: "hindi, english, tamil",
//     mother_toung: "hindi",

// }
// //console.log(samples)
// let n = Object.keys(samples).length;
// console.log(n)


// 4. Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books.

// var library = [    // Here the library has 3 sub objects within [] and each object data is enclosed within {}.
//     {    // object 1 data
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {    // object 2 data
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {  // object 3 data
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// for (let i = 0; i < library.length; i++) {  // We use for loop 

//     let bookread = library[i].title + " written by author " + library[i].author + "."
//     if (library[i].readingStatus) {
//         console.log("Already read the book - " + bookread)
//     }
//     else {
//         console.log("Not read the book -" + bookread)
//     }
// }

// function prime(a){
//     let p=0;
//     for(var j=1; j<=a ; j++){
//         if(j%2!=0 || j%3!=0 ){
//             p++;
//         }

//     }
//     if( p==1){
//         console.log("Number is Prime :"+a)
//     }
//     else{ console.log("Number is not a Prime :"+a)}
// }

// prime(101)

// print the Primes from 2 to a given limit
// function Prime(p){

// function from_to_prime(n){
// let temp=0;

// for(var i=2; i<=n;i++){
//     for( var j=2;j<i;j++){
//         if(i%j==0){
//             temp++;
//         }
//     }
//     if( temp==0){
// console.log(i)
//     }
//     else {
//         temp=0;
//     }
// }
// }

// from_to_prime(15)



// let str="Nite"
// let a="abcdefghijklmnopqrstuvwxyz"
// let s="";
// for( let i=0;i<str.length;i++){
//   for( let j=0;j<a.length;j++){
//     if(str[i]==a[j]){
//       s+=str[i];
//     }

//   }

// }
// console.log(s)



// let str="Ni te"
// // let a="abcdefghijklmnopqrstuvwxyz"
// let s=" ";
// let ss="";
// for( let i=0;i<str.length;i++){
//  if( str[i]===s[0]){
//    ss+="-";
//  }
//   else {
//     ss+=str[i]
//   }}
//   console.log(ss)



// function dash(a){
//   let str=a;

//   let s=" ";
//   let ss="";
//   for( let i=0;i<str.length;i++){
//    if( str[i]===s[0]){
//      ss+="-";
//    }
//     else {
//       ss+=str[i]
//     }}
//     console.log(ss)}

//   dash("Ni te")

// !!!!!!!!!!!!!!!!!!!!!!!Pending!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// a = ["MI, ANM"];
// let l = a.length;
// var aa = "abcdefghijklmnopqrstuvwxyz";
// console.log(a.length)
// str = [""];

// for (var i = 0; i < l; i++) {
//   let b = a[i];
//   var temp = "";

//   for (var j = 0; j < b.length; j++) {
//     for (var k = 0; k < aa.length; k++) {
//       if (b[j] === aa[k].toUpperCase()) {
//         temp += aa[k];
//         //console.log(temp)
//       }
//     }
//   } str[i] += temp + ", ";
//   for (var t = i; t <= i; t++) {
    
//     break;
//   }
// }
// console.log(str);

// let obj={
// name:"Nitesh",
// age:26,
// a:10,
// b:25,
// add: function(a,b){
//     return console.log(this.a+this.b)
// }
// }
// console.log(obj.add())

// let a="aaaabbbbccdddeeeeffghiiijkkk"
// let obj={};
// let c;
// for(var i=0;i<a.length;i++){
  
    
//     if(obj[a[i]]){
//         obj[a[i]]++
//     }
//     else{  obj[a[i]]=1 }
// }

//     console.log(obj)


    // for( var j=0;j<a.length;j++){
    //     obj["c"]=a[j]

    //     if(obj["c"]){
    //         obj[c]++
    //     }
    //     else {
    //         obj["c"]=1
    //     }

    // }

    // console.log(obj)

// let str="name";
// let ss="";
// for( var i=str.length-1;i>=0; i--){
//   ss+=str[i]
// }
// console.log(ss)


// // Create an object with the following functionality

// //     Ability to add 3 students details and their marks in 3 subjects
// //     Method to find the student with the least total.
// //     Method to find the student with the highest total.
// let data={

//     arr:[],
//     add_data: function(name,marks){
//         let ob={
//         Name:name,
//         Marks:marks,
//     }
//     this.arr.push(ob)
// },

// least: function(){
// let min=Infinity;
// let mystud=null;
// for(var i=0;i<data.arr.length;i++){
//     let l=data.arr[i]
//     let sum=0;
// for( var j=0;j<l.Marks.length;j++){
//     sum+=l.Marks[j]
// }
// //console.log(sum)
// if(sum<min){
// min=sum;
// mystud=l.Name
// }
// }
// console.log(mystud)
//  },
//  Max: function(){
//     let max=0;
//     let mystud=null;
//     for(var i=0;i<data.arr.length;i++){
//         let l=data.arr[i]
//         let sum=0;
//     for( var j=0;j<l.Marks.length;j++){
//         sum+=l.Marks[j]
//     }
//     //console.log(sum)
//     if(sum>max){
//     min=sum;
//     mystud=l.Name
//     }
//     }
//     console.log(mystud)
//      }
   
// }
// data.add_data("Nitesh",[60,83,67])
// data.add_data("Bharath",[66,73,67])
// data.add_data("Nike",[90,63,69])
// //console.log(data.arr)
// data.least()
// data.Max()

// Rectangle Object

// //     Create a rectangle object with length and width properties
// //     Create two methods area and perimeter, that will return the area and perimeter of the rectangle

// let rect={
//     area: function(l,b){
//         console.log (l*b)
//     },
//     perimeter: function (l,b){
//         console.log(2*(l+b));
//     },
// }

// rect.area(10,2)
// rect.perimeter(10,2)



// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
// Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}

// Input values,
//   ["Rice", "Dal", "Salt"]
//   [2, 3, 1]
//   [60, 50, 20]



// let Datas = {

// arr: [],

// data: function (name, quantity, price) {

//     for (var i = 0; i < name.length; i++) {
//         let ob = {
//             name: name[i], quantity: quantity[i], price: price[i],
//         }
//         this.arr.push(ob);
//     } console.log(this.arr)
// },



// total: function () {
//     let Total = 0;
//     for (var j = 0; j < this.arr.length; j++) {

//         let i = this.arr[j].quantity;           
//         let q = this.arr[j].price;
//         // console.log(i,q)                     // here we get quantity and price values
//         sum = i * q;
//         Total += sum;
//         // console.log(sum)                    
//     }

//     console.log(Total)
// }


// }

// Datas.data((["Rice", "Dal", "Salt"]), ([2, 3, 1]), ([60, 50, 20]))
// Datas.total()

// // SAMPLE INPUT :

// var sales = [
//     { item: 'PS4 Pro', stock: 3, original: 399.99 },
//     { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//     { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//     { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//     { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
// ];

// //console.log(typeof sales)

// function calculateSalesTotals() {
//     let arr = [];

//     for (var i = 0; i < sales.length; i++) {
//         arr.push(sales[i])
//     }
//     // if (arr[1].discount) {
//     //     //console.log(arr.length)
//     // }



//     for (var j = 0; j < arr.length; j++) {
//        
//         let sale, total = 0;
//         if (arr[j].discount) {

//             let s = arr[j].discount * arr[j].original
//             sale = arr[j].original - s;
//             total = sale * arr[j].stock;
//             console.log(sale)
//             let ob = {
//                 sale: sale,
//                 total: total,
//             };

//             arr[j] = Object.assign(arr[j], ob);
//         }

//         else {
//             sale = arr[j].original;
//             total = sale * arr[j].stock;

//             let nd = {
//                 sale: sale,
//                 total: total,
//                 n: "nitesh"
//             }; arr[j] = Object.assign(arr[j], nd)
//         }


//     } console.log(arr)
// }





// calculateSalesTotals()

// // Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.
// // Input = [2, 3, 4, 6, 7]
// // Output = [32, 243, 1024, 7776, 16807]

// let ip=[2, 3, 4, 6, 7];

// let n=ip.map(function(e){
//     return e**5
// })

// console.log(n)


//  // Problem 3: Taking the following array into consideration get the output as given below:
// // arr = [3,4,5,6,7]
// // Output ==> 3 - 5 - 7

// let arr = [3,4,5,6,7];

// let n=arr.forEach(function(e,i){
//     if(e%2===0){
//        arr[i]="-"
        
//     }
// })

// let nn=arr.reduce(function(a,c){
//     return a+c
//     },"")
// console.log(nn)

