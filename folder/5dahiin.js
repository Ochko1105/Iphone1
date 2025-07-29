let animals = [
  {
    leg: 4,
    name: "dog",
    height: 10,
  },
  {
    leg: 2,
    name: "chicken",
    height: 10,
  },
  {
    leg: 4,
    name: "cat",
    height: 123,
  },
  {
    leg: 2,
    name: "kangroo",
    height: 145,
  },
];
// [
//   { name: 'dog', height: 10 },
//   { name: 'cat', height: 10 }
// ]
const find4LeggedAnimals = (aasd) => {
  let filteredAnimals = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].leg > aasd[0].leg) {
      filteredAnimals[count] = {
        name: aasd[i].name,
        height: aasd[i].height,
      };
      count++;
    }
  }
  return filteredAnimals;
};

const filteredAnimals = find4LeggedAnimals(animals);
console.log(filteredAnimals);
let students = [
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
   { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 15, grade: 50, balance: 28000, gender: "female" },
  { name: "anu", age: 16, grade: 80, balance: 18000, gender: "female" },
    { name: "anu", age: 16, grade: 90, balance: 18000, gender: "female" },
      { name: "anu", age: 16, grade: 70, balance: 18000, gender: "female" },
];
// Бодлого 1
// Өгөгдсөн сурагчдын жагсаалтаас хамгийн бага оноотой сурагчийг олж буцаадаг функц бич.
const findmingradestudent = (arr) => {
  let min = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].grade < arr[0].grade) {
      min[count] = arr[i];
      count++;
    }
  }
  return min;
};
console.log("hamgiin baga duntei suragchid ",findmingradestudent(students));
// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив болгон ялгаж буцаадаг функц бич.
const findagestudent = (arr) => {
  let minage = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].age <= 18) {
      minage[count] = arr[i];
      count++;
    }
   
  } return minage;
  
  
};
console.log("age 18aas doosh ",findagestudent(students));



// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.
const findsumgrade=(arr)=>{
  sum=0
  
  for(i=0;i<arr.length;i++){
    sum=sum+arr[i].grade
    

  }return sum}
console.log("niitgrade ",findsumgrade(students))
// Бодлого 4
// Өгөгдсөн нэртэй (name) бүх сурагчдыг буцаадаг функц бич. Жишээ нь: findStudentsByName(students, "boldo").

// Бодлого 5
// Бүх сурагчдыг онооны дарааллаар ихээс бага руу эрэмбэлдэг функц бич. (sort ашиглах)

const maxgradestundentsort = (arr) => {
  max = [];

  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].grade > arr[0].grade) {
      max[count] = arr[i];
      count++;
    }
  }

  return max;
};
console.log("max student ", maxgradestundentsort(students));
// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.
const findrichstudents = (aasd) => {
  let filteredstudents = [];
  let count = 0;
  for (i = 0; i < aasd.length; i++) {
    if (aasd[i].balance > 10000) {
      filteredstudents[count] = {
        name: "rich student " +aasd[i].name ,
        balance: aasd[i].balance,
      };
      count++;
    }
  }
  return filteredstudents;
};

const filteredstudents = findrichstudents(students);
console.log("richstudents ",filteredstudents);

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }
const findsamenamestudent=(arr)=>{
  sum={}
 
  for(i=0;i<arr.length;i++)
  
    { count=0
      
      for(j=0;j<arr.length;j++){
      if(arr[i].name===arr[j].name)
      {sum= arr[i].name
        count++}
    }
  console.log(sum,count)
   
  }
  
  return count

}
console.log(findsamenamestudent(students))

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
const findgenderavggrade=(arr)=>{
  maleallavg=0
  malecount=0
   maleavg=0
   femaleallavg=0
  femalecount=0
  femaleavg=0
  for(i=0;i<arr.length;i++){
if(arr[i].gender==="male"&& arr[i].grade>0){
  maleavg=maleavg+arr[i].grade
  malecount++
 
}
if(arr[i].gender==="female"&& arr[i].grade>0){
  femaleavg=femaleavg+arr[i].grade
  femalecount++
 
}
}
femaleallavg="female "+ femaleavg/femalecount
 maleallavg="male "+maleavg/malecount
 let all=femaleallavg +" "+ maleallavg
 return all

}
console.log(findgenderavggrade( students ))