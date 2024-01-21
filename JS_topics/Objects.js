
//Data type=>2
// 1)Primitive= Strings, number, Boolean, null, undefined
// 2) Non-Primitive= Array, Object

//undefined is a value that is given by JS itself to an empty variable

//null is a value that is given by us when we want to keep some value -empty.

//Notation in Object- Bracket and Dot 
//console.log(car["Price"], car["interior"], car["Brand"]); // Bracket notation
// console.log(car.Price, car.Brand) // Dot notation



// var car= {
//     Brand: "Audi",
//     Mobile_number:"8668069441",
//     Price: "$1500",
//     Avalibility: true,
//     interior:" Leather",
// };

// console.log(car.Price, car.Brand)

// var obj={}

// obj["name"]= "Nitesh",
// obj.DOB= "26/07/1996",
// obj.skin=" brown" 

// //console.log(obj);
// obj.skin="Light brown",// skin value is updated in object via dot notation

// obj["name"]="Kumar", // name value is updated via braket notation

// // console.log(obj.skin)
// // console.log(obj.name)
// //   console.log(obj)// before delete the values
// delete obj.DOB; // Delete the value in object data

//   console.log(obj)// after the delete the values

//   console.log(Object.keys(obj));  // print all the key values in an object

// Nested Object

// var Company={
//     name: "TATA",
//     date_established: 1928,
//     Founder:" Jamsedji Tata",
//     sub_companies:{      // Here we are adding an other object for the key- sub_companies which itself act as another object inside Comapny object.This flow is called nested object.
//         tata_steel: 1980,
//         tata_motor: 2000,
//         tcs:1990,
//     }
// }
//   console.log(Company.sub_companies["tcs"]) // we can have both dot and bracket notation to get the output.

// var car= {
//         Brand: "Audi",
//         Mobile_number:"8668069441",
//         Price: "$1500",
//         Avalibility: true,
//         interior:" Leather",
//     };

//     // new Loop==> for in loop

//     for( let kick in car){  // let is the datatype, key is the name of the key and could be anything and we have object name which is car here.
//        //  console.log(kick)  // Print all the key values(lables) in the car object
// }
//      // Dynamic key access ==> It's avaliable in bracket but not avaliable in dot notation.
//      for( let myname  in car){
//        // console.log(car[myname]) // Dynamic key access will work and print the values of key in car

//         console.log(car.myname) // Dynamic key access will not work and print undefined since myname is not defined in the object car.
//      }

//      var car= {
//         Brand: "Audi",
//         Mobile_number:"8668069441",
//         Price: "$1500",
//         Avalibility: true,
//         interior:" Leather",
//     };
//     // Print desire output for above code like key: value
// for( var myname in car){
//     console.log(myname+" : "+ car[myname])
// }


//Now the even values in key will be printed

// var mike={
//     1 : "one",
//     2 : "two",
//     3 : "three",
//     4 :"four",
//     5 :"five"
// }
// for (var mice in mike){
//     // console.log(mike.mice) // Won't work due to dynamic key access limitation
//     // console.log(mike[mice]) // will work
// if( mice%2==0){
//     console.log(mike[mice]) 
// }

// }


// Now the even value in object value will be only printed 

// var mike={
//    one: 1,
//    two :2,
//    three:3,
//    four:4,
//    five:5,
//     }
//     for (var mice in mike){
//         if(mike[mice]%2==0){
//             //console.log(mike[mice])
//             console.log(mice +" : "+mike[mice]) // as per desire output.
//         }
//     }

// let str="abdsjseohdndkddhdfdd"

// let ob=  {}

// for( let i=0; i<str.length; i++){
//     ob[i]= str[i]
// }
// console.log(ob)

// Object - 2
 //Lets aff the data in the object

//  let o={
//     name:"Nitesh",
//     Mobile_number:8668069441,

//  }
//  let details={
//     Full_Name:" Nitesh Kumar",
//     Located :"Chennai",
//     Working_at:"TechM"
//  }
// o.details=details;
// console.log(o)


// var car= {
//            Brand: "Audi",
//            Mobile_number:"8668069441",
//            Price: "$1500",
//            Avalibility: true,
//            interior:" Leather",
//        };
   
//        for( let k in car){  
//           console.log(k+"- "+car[k]) }

// To find the length of the object,

// let samples={
//     name: "Nike",
//     class:"V",
//     rollni: 186,
//     address: "4/63",
//     Mobile: "Redmi",
//     song: "hindi, english, tamil",
//     mother_toung:"hindi",
    
//     }

//     let n=Object.keys(samples).length; // here we find the length of object(samples) and store in variable n then print it.
//     console.log(n)






