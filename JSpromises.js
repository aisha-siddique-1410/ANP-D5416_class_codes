// console.log("1");
// console.log("2");
// console.log("3");

// function hello(){
//     console.log("hello")
// }  // code to fetch the data

// setTimeout(hello,3000 ) // timeout

// setTimeout(() => {
//     console.log("hello")
// }, 3000)
// console.log("4");
// console.log("5");

// callback : a callback is  a function passed as an argument to another function

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a, b, sumCallBack) {
// sumCallBack(a,b);
// }
// calculator(1, 2, sum);


// callback Hell : Nested callbacks stacked below one another forming a pyramid structure


// function getData(dataId, getNextdata){
//    setTimeout(() => {
//      console.log("data : ", dataId);
//      if(getNextdata){
//         getNextdata();
//      }

//    }, 2000)
// }

// getData(1, () => {
//     console.log("getting data 2......");
//     getData(2, () => {
//         console.log("getting data 3......");
//         getData(3, () => {
//             console.log("getting data 4......");
//             getData(4, () => {
//                 console.log("getting data 5......");
//                 getData(5)
//             });
//         });
//     });
// });

/* display these sequence using callback
1. Order is placed
2. Restaurant accepts the order
3. food is getting prepared
4. Delivery partner has been assigned
5. order is delivered

each message should be displayed after certain intervals


// username : aishasiddique : goes to server // will be validate
// password : after validating username password will be validated


// promises : 
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve(123);
    reject("some error");
}); */

// Prmoises : 
// promise.then((res) => {....})  fulfill - then
// promise.catch((err) => {....})  reject - catch


// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//       console.log("i am a promise");
//       // resolve("success");
//       reject("error");
//    })
// }

// let promise = getPromise();
// promise.then((res) => {
//    console.log("promise fulfilled")
// });

// promise.catch((err) => {
//    console.log("rejeceted", err)
// });




// function getData(dataId){
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//      console.log("data : ", dataId);
//    resolve("success")

//    }, 2000);
//    })
  
// }

// promise chain
// getData(1)
// .then((res) => {
//    return getData(2);
// })
// .then((res) => {
//    return getData(3);
// })
// .then((res) => {
//    return getData(4);
// })
// .then((res) => {
//    return getData(5);
// });


// getData(1, () => {
//     console.log("getting data 2......");
//     getData(2, () => {
//         console.log("getting data 3......");
//         getData(3, () => {
//             console.log("getting data 4......");
//             getData(4, () => {
//                 console.log("getting data 5......");
//                 getData(5)
//             });
//         });
//     });
// });

// function asyncFunc(){
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("some data 1");
//          resolve("success");
//       }, 2000);
//    });
// };


// function asyncFunc2(){
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          console.log("some data 2");
//          resolve("success");
//       }, 2000);
//    })
// }

// console.log("fetching data 1.....");
//  asyncFunc().then((res) => {
//    console.log(res);

// console.log("fetching data 2....");
// asyncFunc2().then((res) => {
//    console.log(res);



// })
// });


// calback hell -> promise chain -> async-await
// Async-await
// async function always returns a promise
// await pauses the execution of its surrounding async function until the promise is settled

// function api(){
//    return new Promise((resolve, rejece) => {
//       setTimeout(() => {
//          console.log('weather api');
//       resolve(200);
//       }, 200)
//    });
// };

// function getData(dataId){
//    return new Promise((resolve, reject) => {
//       console.log("weather data");
//       resolve(200);
//    }, 2000)
// }

// async function getWeatherData(){
//    await api();
//    await api();
//    await api();
//    await api();
   
// }

function getData(dataId){
   return new Promise((resolve, reject) => {
       setTimeout(() => {
     console.log("data : ", dataId);
   resolve("success")

   }, 2000);
   })
  
};

async function getAllData(){
   await getData(1);
   await getData(2);
   await getData(3);
   await getData(4);
}