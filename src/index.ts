//---------Bs---------
let str: string = "ryou";
let num: number = 100;
let boo: boolean = true;
let n: null = null;
let un: undefined = undefined;
let any: any = 33; //any=全部

let err: string;
//err = 222;       //stringを設定したから＞error

//---------Array---------
let arr: string[] = ["a", "b"];
let arr2: number[] = [1, 2, 3];
let arr3: number[][] = [[1, 2], [3]];
let arr4: [number, string, boolean] = [1, "a", true];

//---------Enum---------
enum testState {
  SUCCESS = 0,
  RUNNUNG = 1,
  FAIL = -1,
}
const test = testState.SUCCESS;
console.log(test);

//---------Union---------
let bbb: string | number;
bbb = "eee";
bbb = 3355;
// bbb = null;      //error

//---------type---------
type c = number | string;
type d = boolean | null;

let c1: c;
c1 = 455;
c1 = "jkasgc1";
// c1 =false        //error

let d1: d;
d1 = null;
d1 = true;

//---------interface---------
interface User {
  name: string;
  age: number;
}

//---------object---------

//type不可擴充
type Card = {
  name: string;
  desc: string;
};

// type Card = {
//   age: number;
// };

const obj: Card = { name: "Tony", desc: "..." };

//interface可擴充
interface Card1 {
  name: string;
  age: number;
}

interface Card1 {
  num?: number; //num? = 可選擇
}

const obj2: Card1 = { name: "Tom", age: 98 }; //num可寫可不寫

//---------function---------
//參數
function hello(a: string, b: string) {
  return a + b;
}

function hello1(a: string, b: string): number {
  console.log(a, b);

  return 333;
}

//undefined
function hello2(name: string, age?: number) {
  return name + age;
}
