// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = [1, 2, 2, 3, 4, 5, 6, 6, 6, 6, 6, 2, 3, 4, 3, 3, 100, 100, 2];

// // arr.forEach(el => {
// //   console.log(el + 1);
// // })

// // let newArr = arr.map((el) => {
// //   return el * 10;
// // });

// // let newArr = arr.filter(el => {
// //   return el % 2 === 0;
// // })

// const products = [
//   { productName: 'TV', price: '1000' },
//   { productName: 'Pendrive', price: '200' },
//   { productName: 'Camera', price: '450' },
//   { productName: 'Mouse', price: '120' },
// ];

// // const filteredProducts = products.filter(el => {
// //   return el.price > 200;
// // })

// // const mergedArrays = [...arr, ...products];

// // console.log(arr1.splice(2,3, [...products]));
// // console.log(arr1);

// let students = [
//   {
//     id: 001,
//     f_name: 'Alex',
//     l_name: 'B',
//     gender: 'M',
//     married: false,
//     age: 22,
//     paid: 250,
//     courses: ['JavaScript', 'React'],
//   },
//   {
//     id: 002,
//     f_name: 'Ibrahim',
//     l_name: 'M',
//     gender: 'M',
//     married: true,
//     age: 32,
//     paid: 150,
//     courses: ['JavaScript', 'PWA'],
//   },
//   {
//     id: 003,
//     f_name: 'Rubi',
//     l_name: 'S',
//     gender: 'F',
//     married: false,
//     age: 27,
//     paid: 350,
//     courses: ['Blogging', 'React', 'UX'],
//   },
//   {
//     id: 004,
//     f_name: 'Zack',
//     l_name: 'F',
//     gender: 'M',
//     married: true,
//     age: 36,
//     paid: 250,
//     courses: ['Git', 'React', 'Branding'],
//   },
// ];

// const totalPaid = students.reduce((acc, ele, idx, arr) => {
//   acc = acc + ele.paid;
//   return acc;
// }, 0);
// const hasStudentHigherThan30 = students.some((ele) => ele.age > 30); // true
// const firstStudentHigherThan30 = students.find((ele) => ele.age > 30);
// const isEveryStudentsHigherThan30 = students.every((ele) => ele > 30);

// // console.log(students.at(-4));
// const a = 10;

// const firstFunction = () =>
//   new Promise((resolve, reject) => {
//     resolve(console.log("I'm the first function"));
//   });

// const secondFunction = () =>
//   new Promise((resolve, reject) => {
//     resolve(
//       console.log("I'm the second function and I expect a callback as an input")
//     );
//   });

// const thirdFunction = () =>
//   new Promise((resolve, reject) => {
//     resolve(
//       console.log(
//         "I'm the third function, I'm also expecting a callback as an input"
//       )
//     );
//   });

// firstFunction().then(secondFunction).then(thirdFunction);
