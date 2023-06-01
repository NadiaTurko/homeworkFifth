// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (parti)

// 1.Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує обʼєкт;
// - визначте метод отримания довжини кола для поточного обʼєкта (L = 2 * л * R.
// - Визначте статичний метод  який приймає радіус та повертає довжину кола для заданого радіусу:
// - Визначте метод отримання обʼєкта-кола, який повертає копію поточного обєкта:
// - Визначте статичнии метод, якии примає координати центра кола, иого радіус та повертає об єкт кола із заданими
// параметрами:
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану обʼєкта на символьний рядок (tostring()).
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  methodLengthCircle() {
    return 2 * this.radius * Math.PI;
  }
  static lengthCircle(r) {
    return 2 * r * Math.PI;
  }
  pointInCircle(x, y) {
    return (x - this.x) ** 2 + (y - this.y) ** 2 <= this.radius ** 2
      ? true
      : false;
  }
  static circleObject(x, y, r) {
    const circleObject = { x: this.x, y: this.y, r: this.radius };
    return circleObject;
  }
  toString() {
    return JSON.stringify(this);
  }
}
const circleFirst = new Circle(5, 2, 10);
const circleFirstString = circleFirst.toString();
console.log(circleFirstString);
console.log(circleFirst.pointInCircle(1, 1));
// const copyCircleFirst = Object.assign({}, circleFirst);
const copyCircleFirst = { ...circleFirst };
console.log(circleFirst);
console.log(copyCircleFirst);

// // 2.
// // Напишіть функцію propsCount (currentObject) , яка приймає обʼєкт і
// //визначає кількість властивостей цього обʼєкта.
// // Наприклад:

// // let mentor = {
// //   course: "JS fundamental",
// //   duration: 3,
// //   direction: "web-development",
// // };
// // const propsCount = (currentObject) => Object.keys(currentObject).length;
// // console.log(propsCount(mentor)); // 3

// // 3.
// // - Створіть клас Person. у якого конструктор приймає параметри name i surname. а також міститься метод
// // showFullName(), який виводить v консоль імʼя і прізвише особи
// // - Від класу Person наслідується клас Student . конструктор якого крім name i surname
// // приймає параметр уear (рік вступу до університету
// // - Від класу  Student необхідно перевизначити метол showFullName(midleName)\ Шоб
// // виводилося не лише їм я позвище
// // але і по-батькові (midleName) студента
// // - Також в класі Student необхідно реалізувати метод showCourse() , який виводитиме поточний курс студента (від 1 до 6).
// // Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНВ
// // Приклад результату
// // const stud1 = new student ("petro", "Petrenko", 2019);
// // console. log(stud1.showFul1Name("Petrovych")); // Petrenko Petro Petrovych
// // console.log("Current course:"+stud1.showCourse()); //Current course: 4

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
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і
// додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів

class Marker {
  constructor(nameColor, color, amountOfInk) {
    this.nameColor = nameColor;
    this.color = color;
    this.amountOfInk = amountOfInk;
  }
  methodPrint(string) {
    const resultString = [];
    const outputText = string.split("");
    outputText.forEach((element) => {
      if (element === " ") {
        return resultString.push(element);
      } else if (this.amountOfInk > 0 && element !== " ") {
        this.amountOfInk -= 0.5;
        return resultString.push(element);
      }
    });

    return `${this.color}` + resultString.join("");
  }
}

class RefuelingMarker extends Marker {
  fillup(amountOfInk) {
    if (this.amountOfInk + amountOfInk > 100) {
      return "Маркер заправлений повністю";
    } else {
      return (this.amountOfInk += amountOfInk);
    }
  }
}
const red = new Marker("red", "\x1b[31m", 0);
const black = new Marker("black", "\x1b[30m", 20);
const white = new Marker("white", "\x1b[37m", 40);
const green = new Marker("green", "\x1b[32m", 70);
const yellow = new Marker("yellow", "\x1b[33m", 0);
const blue = new Marker("blue", "\x1b[34m", 65);
const markerRed = new RefuelingMarker("red", "\x1b[31m", 20);
console.log(red.methodPrint("Hello world!! Hello world!!!"));
console.log(markerRed.fillup());
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
// class Worker {
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }

//   showSalary() {
//     const salary = this.dayRate * this.workingDays;
//     return salary;
//   }

//   #experience = 1.2;
//   showSalaryWithExperience() {
//     const salaryWithExperience = this.showSalary() * this.#experience;
//     return salaryWithExperience;
//   }
//   get setExp() {
//     return this.#experience;
//   }

//   set setExp(value) {
//     this.#experience = value;
//   }

//   viewSalary() {
//     console.log(this.fullName);
//     console.log(`${this.fullName} salary:` + this.showSalary());
//     console.log("New experience 1.2: " + this.showSalaryWithExperience());
//     this.setExp = 1.5;
//     console.log("New experience 1.5: " + this.showSalaryWithExperience());
//   }

//   static methodSort(array) {
//     const resultSort = [...array].sort(
//       (a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
//     );
//     return resultSort.forEach((item) => {
//       console.log(`${item.fullName}: ${item.showSalaryWithExperience()}`);
//     });
//   }
// }

// const worker1 = new Worker("John Johnson", 20, 23);
// const worker2 = new Worker("Tom Tomson", 48, 22);
// const worker3 = new Worker("Andy Ander", 29, 22);
// const allWorker = [worker1, worker2, worker3];
// // worker1.viewSalary();
// // worker2.viewSalary();
// // worker3.viewSalary();
// console.log(Worker.methodSort(allWorker));
// console.log(allWorker);

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
