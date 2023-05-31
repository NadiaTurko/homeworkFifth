// 5. OBJECT ORIENTED PROGRAMMING (OOP) INTRO. OBJECTS. CLASSES (parti)

// 1.Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує обʼєкт;
// - визначте метод отримания
// довжини кола для поточного обʼєкта (L = 2 * л * R.
// - Визначте статичний метод
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
class Market {
  constructor(nameColor, color, amountOfInk) {
    this.nameColor = nameColor;
    this.color = color;
    this.amountOfInk = amountOfInk;
  }
  methodPrint(string) {
    if (this.amountOfInk === 0) {
      return `Marker ${this.nameColor} is empty`;
    }
    const resultString = [];
    const outputText = string.split("");
    outputText.forEach((element) => {
      if (element == " ") {
        return resultString.push(element);
      } else if (this.amountOfInk > 0 && element !== " ") {
        this.amountOfInk -= 0.5;
        return resultString.push(element);
      }
    });

    console.log(resultString);
    return `${this.color}` + resultString.join("");
  }
}
const red = new Market("red", "\x1b[31m", 1);
const black = new Market("black", "\x1b[30m", 20);
const white = new Market("white", "\x1b[37m", 40);
const green = new Market("green", "\x1b[32m", 70);
const yellow = new Market("yellow", "\x1b[33m", 0);
const blue = new Market("blue", "\x1b[34m", 65);

console.log(red.methodPrint("Hello world!! Hello world!!!"));
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

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    return salary;
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

  static methodSort(array) {
    const resultSort = [...array].sort(
      (a, b) => a.showSalary() - b.showSalary()
    );
    return resultSort.forEach((item) => {
      console.log(`${item.fullName}: ${item.showSalary()}`);
    });
  }
}

const worker1 = new Worker("John Johnson", 20, 23);
const worker2 = new Worker("Tom Tomson", 48, 22);
const worker3 = new Worker("Andy Ander", 29, 22);
const allWorker = [worker1, worker2, worker3];
worker1.viewSalary();
worker2.viewSalary();
worker3.viewSalary();
console.log(Worker.methodSort(allWorker));
console.log(allWorker);
