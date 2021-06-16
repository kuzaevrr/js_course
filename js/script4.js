// let a =5,
//     b = a;

//     b = b +5;
//     console.log(a);
//     console.log(b);

//     const obj = {
//         a:5,
//         b:1
//     };


    function copy(mainObj){
        let objCopy ={};

        
        for(let key in mainObj){
            objCopy[key] = mainObj[key];
        }

        return objCopy;
    }

    const numbers ={
        a: 2,
        b: 5,
        c: {
            x: 7,
            y: 4
        }
    };

    const newNumbers = copy(numbers);
    newNumbers.a = 10;
    newNumbers.b = 20;
    newNumbers.c.x = 30;
    newNumbers.c.y = 40;

    console.log(numbers);
    console.log(newNumbers);

const add = {
    d: 17,
    e: 18
};  
Object.assign(numbers, add);

console.log(add);

const clone = Object.assign({}, add);
clone.d = 50;
clone.e = 100;

console.log(clone);

/////////////////////////

const oldArrays = ["a", "b", "c"];
const newArrays = oldArrays.slice();
newArrays[1]="bx";
console.log(oldArrays);
console.log(newArrays);
    

const video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];

    console.log(internet);


    function log(a, b, c){
        console.log(a);
        console.log(b);
        console.log(c);
    }

    const num = [2,5,7];

    log(...num);
 ///////////////

 const array = ["a", "b"];

 const newaA = [...array];

 const q = {
     one: 1,
     two: 2
 };

 const newQ = {...q};

 console.log(newQ);