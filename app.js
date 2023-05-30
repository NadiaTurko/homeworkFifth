// ООП - обєктно орієнтовне програмування

//

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     showName(){
//         console.log(this.name);
//     }
// }

// const user1 = new User("Ivan", 3000);
// const user2 = new User("Petro", 1000);

// console.log(user1.showName());
// console.log(user2.showName());
// user2.showName();

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }

//     static PI = 3.14;

//     // static showName(){
//     //     console.log(this.name);
//     // }

//     // calculation(){
//     //     console.log(2 + PI);
//     // }
// }

// const user1 = new User("Ivan", 3000);

// console.log(user1.PI);
// console.log(User.PI);

// Наслідування, Інкапсуляція, Поліморфізм

// Наслідування

// class People {
//     constructor(name, age){
//         this._name = name;
//         this.age = age;
//     }

//     // value = 23; public data
//     #value = 23;
//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(typeof value === 'string'){
//             this._name = value;
//         }

//     }
//     set value(newValue){
//         this.#value = newValue;
//     }

//     talk(){
//         console.log("i can talk like People");
//     }
// }

// class Student extends People {
//     constructor(name, course){
//         super(name);
//         this.course = course;
//     }

//     talk(){
//         super.talk();
//         console.log("i can talk like Student");
//     }

//     lerning(){
//         console.log("lerning");
//     }
// }

// const student1 = new Student("Vasyl","js");
// console.log(student1);
// const people1 = new People("Ivan", 40);
// people1.name = "Vasyl";
// people1.name;
// console.log(people1.value);
// console.log(student1.lerning());
// student1.talk();
// student1.name = "Vasyl";
// getter setter
// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (parti)

// 1.Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує обʼєкт;
// - визначте метод отримания
// довжини кола для поточного обʼєкта (L = 2 * л * R.
// - Визначте статичний метол
// який приймає радіус та повертає довжину кола для заданого радіусу:
// - Визначте метод отримання обʼєкта-кола, який повертає копію поточного обєкта:
// - Визначте статичнии метод, якии примає координати центра кола, иого радіус та повертає об єкт кола із заданими
// параметрами:
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану обʼєкта на символьний рядок (tostring()).

// 2.
// Напишіть функцію propsCount (currentObject) , яка приймає обʼєкт і
//визначає кількість властивостей цього обʼєкта.
// Наприклад:

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };
// const propsCount = (currentObject) => Object.keys(currentObject).length;
// console.log(propsCount(mentor)); // 3

// 3.
// - Створіть клас Person. у якого конструктор приймає параметри name i surname. а також міститься метод
// showFullName(), який виводить v консоль імʼя і прізвише особи
// - Від класу Person наслідується клас Student . конструктор якого крім name i surname
// приймає параметр уear (рік вступу до університету
// - Від класу  Student необхідно перевизначити метол showFullName(midleName)\ Шоб
// виводилося не лише їм я позвище
// але і по-батькові (midleName) студента
// - Також в класі Student необхідно реалізувати метод showCourse() , який виводитиме поточний курс студента (від 1 до 6).
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНВ
// Приклад результату
// const stud1 = new student ("petro", "Petrenko", 2019);
// console. log(stud1.showFul1Name("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course:"+stud1.showCourse()); //Current course: 4

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   showFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(midleName) {
//     super.showFullName();
//     console.log(`${this.name} ${this.surname} ${midleName}`);
//   }
//   showCourse(currentYear) {
//     const studentCourse = currentYear - this.year;
//     if (studentCourse > 0 && studentCourse <= 6) {
//       return studentCourse;
//     } else {
//       return `The year is not entered correctly`;
//     }
//   }
// }
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course:" + stud1.showCourse(2023)); //Current course: 4
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ - це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів
// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (імʼя і прізвище),
// dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
// 1) клас повинен мати метод showSalary () , який буде виводити зарплату працівника.
//  Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і
// використовувати його як додатковий множник при визначенні зарплати - створити метод showSalaryWithExperience() .
//  Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience. Встановити значення experience - 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі: worker_fulIName: salary_value
// 6) Реалізувати динамічне сортування для будь-якої кількості працівників-екземплярів класу Worker .
// Example usage:
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }

  static showSalary() {
    const salary = this.dayRate * this.workingDays;
    return salary;
  }

  // static showSortSalary() {
  //   const forEach = [];
  //   forEach = this.fullName.forEach((value) => {
  //     value + this.fullName;
  //   });
  //   return forEach;
  // }

  static compare(articleA, articleB) {
    return articleA.showSalary - articleB.showSalary;
  }
  #experience = 1.2;
  showSalaryWithExperience() {
    const salaryWithExperience = this.showSalary() * this.#experience;
    return salaryWithExperience;
  }
  get setExp() {
    return this.#experience;
  }

  set setExp(value) {
    this.#experience = value;
  }

  viewSalary() {
    console.log(this.fullName);
    console.log(`${this.fullName} salary:` + this.showSalary());
    console.log("New experience 1.2: " + this.showSalaryWithExperience());
    this.setExp = 1.5;
    console.log("New experience 1.5: " + this.showSalaryWithExperience());
  }
}

const worker1 = new Worker("John Johnson", 20, 23);
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 22);
const workerAll = [worker1, worker2, worker3];
// worker1.viewSalary();

// worker2.viewSalary();
// worker3.viewSalary();

console.log(workerAll.sort(Worker.compare));
// console.log(worker1.fullName);
// console.log(`${worker1.fullName} salary:` + worker1.showSalary());
// console.log("New experience: " + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showSalaryWithExperience());
// console.log(worker2.fullName);
// console.log(`${worker2.fullName} salary:` + worker2.showSalary());
// console.log("New experience: " + worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showSalaryWithExperience());
// console.log(worker3.fullName);
// console.log(`${worker3.fullName} salary:` + worker3.showSalary());
// console.log("New experience: " + worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showSalaryWithExperience());
// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690
// Tom Tomson
// Tom Tomson salary: 1056
// New experience: 1.5
// Tom Tomson salary: 1584
// Andy Ander
// Andy Ander salary: 667
// New experience: 1.5
// Andy Ander salary: 1000.5
// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584
