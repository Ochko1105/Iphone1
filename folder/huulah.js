let students = [
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
   { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 15, grade: 50, balance: 28000, gender: "female" },
  { name: "anu", age: 16, grade: 50, balance: 18000, gender: "female" },
];
const countstudentsbynames=(arr)=>{
    let namecount={}
    for(i=0;i<arr.length;i++){
        let  name=arr[i].name;
        if(namecount[name]){
            namecount[name]+=1
        }else{namecount[name]=1}


    }
    return namecount
}
let result= countstudentsbynames(students)
console.log(result)