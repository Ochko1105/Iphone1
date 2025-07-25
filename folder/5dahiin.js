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
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 40, grade: 50, balance: 8000, gender: "female" },
  { name: "anu", age: 40, grade: 50, balance: 8000, gender: "female" },
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
console.log(findmingradestudent(students));
// Бодлого 2
// Нас нь 18-аас доош бүх сурагчдыг шинэ массив болгон ялгаж буцаадаг функц бич.

// Бодлого 3
// Бүх сурагчдын нийт онооны нийлбэрийг буцаадаг функц бич.

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
console.log("max ", maxgradestundentsort(students));
// Бодлого 6
// balance нь 10000-аас их сурагчдыг richStudents гэж нэрлээд, зөвхөн нэр болон балансын мэдээлэлтэйгээр шинэ массив үүсгэж буцаа.

// Бодлого 7
// Нэр бүрээр хэчнээн сурагч байгаа тоог тоолж, дараах хэлбэртэй объект буцаа:
// { boldo: 3, dorjo: 1, bataa: 1 }

// Бодлого 8
// Сурагчдын gender тус бүрээр онооны дундаж хэд байгааг тооцоолж буцаадаг функц бич.
// Жишээ:
// { male: 30, female: 60 }
