// const myobj = {

//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift"
// }

// for (const key in myobj) {
    
//     console.log(`${key} shortcut is for ${myobj[key]}`);
// }

const arr = ["js", "ruby", "cpp", "java", "py"];

// only gives the keys not the values its one of drawback for for in
for (const key in arr) {
    
    console.log(arr[key]);
}

// const map = new Map()
// map.set('IN', "INDIA");
// map.set('USA', "UNITED STATES OF AMERICA");
// map.set('FR', "FRANCE");

// // not iteratable 
// for (const key in map) {
    
//     console.log(key);
// }

