let data = [
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "female" },
   { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 15, grade: 50, balance: 28000, gender: "female" },
  { name: "anu", age: 16, grade: 80, balance: 18000, gender: "female" },
    { name: "anu", age: 16, grade: 90, balance: 18000, gender: "female" },
      { name: "anu", age: 16, grade: 70, balance: 18000, gender: "female",classcode:"3a" },
];
let teacher = [
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "female" },
   { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 15, grade: 50, balance: 28000, gender: "female" },
  { name: "anu", age: 16, grade: 80, balance: 18000, gender: "female" },
    { name: "anu", age: 16, grade: 90, balance: 18000, gender: "female" },
      { name: "anu", age: 16, grade: 70, balance: 18000, gender: "female",classcode:"3a" },
];
// let numbers=[20,30,40,42,33,70]
// let result=students.sort((a,b)=>{
//     return a.grade-b.grade
// })
// console.log(result)
// let result2=students.sort((a,b)=>{
//     return a.age-b.age
// // })
//     console.log(result2)
//     let findstudentcode=students.map((code)=>{
        
//         return students
        

//     } )

//   console.log(findstudentcode)
function findgender(students,target){
    let filtered=students.filter((students)=>{
        return students.gender===target
    })
    return filtered

}
let result=findgender(data,'male')
console.log("bodlogo2", result)
////////////////////////////////////////////////////
function findbalance(students,target){
    let filtered=students.filter((students)=>{
        return students.balance>target
    })
    return filtered

}
let result2=findbalance(data,15000)
console.log("bodlogo4",result2)
////////////////////////////////////////////////////
function findage(student){
    let sorted=student.sort((a,b)=>{
        return a.age-b.age
  })
  return sorted
}
let result3= findage(data)
console.log("bodlogo3 ", result3)
////////////////////////////////////////////////////
function findclasscode(student,target){
    let classcode=student.map((student)=>{
  
        return {name:student.name,
               
                age:student.age  ,
                grade:student.grade ,
                balance:student.balance   ,
                gender:student.gender,
                 classcode:target,  

        }
            


    }
)
return classcode
}
result4=findclasscode(data,"3b")
console.log("bodlogo5",result4)
////////////////////////////////////////////////////
function removegender(student){
    let remove=student.map((student)=>{
  
        return {name:student.name,
               
                age:student.age  ,
                grade:student.grade ,
                balance:student.balance   ,       
        }
    }
)
return remove
}
result5=removegender(teacher)
console.log("bodlogo6",result5)


