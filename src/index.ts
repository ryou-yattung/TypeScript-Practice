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
