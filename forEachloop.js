const coding = ["js", "ruby", "java", "py", "cpp"];

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((val) => {

//     console.log(val);
// })

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item, index, arr)=>{

//     console.log(item, index, arr);
// })

// array of objects,

const mycoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

mycoding.forEach( (item)=> {
    
    console.log(item.languageName);
})
