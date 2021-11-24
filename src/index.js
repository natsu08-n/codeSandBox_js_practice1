/**
 * 分割代入
 */

// const myProf = {
//   name: "hoge",
//   age: 27
// };

// const msg = `名前は${myProf.name}です。年齢は${myProf.age}です`
// console.log(msg);

// 分割代入を使うとこのようにすっきりかける
// const { name, age } = myProf;
// const msg = `名前は${name}です。年齢は${age}です`;
// console.log(msg);

//配列の場合
const myProf_hairetsu = ["natsu", 27];
// const msg2 = `名前は${myProf_hairetsu[0]}です。年齢は${myProf_hairetsu[1]}です`;
// console.log(msg2);

// 分割代入を使うとこのようにすっきりかける
const [name, age] = myProf_hairetsu;
const msg2 = `名前は${name}です。年齢は${age}です`;
console.log(msg2);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
sayHello("nana");

/**
 * スプレッド構文
 */

//配列の展開
// const arr1 = [1, 2]
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4]; //[]の中で展開してarr4と同じ配列arr6を作る
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4; //このコピーのやり方だと、参照が元のarr4のままなので、arr8で値を変えると元のarr4の値も変わる
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
