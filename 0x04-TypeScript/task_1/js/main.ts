// ---------------------------
// Task 1: Teacher Interface
// ---------------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// ---------------------------
// Task 2: Directors Interface
// ---------------------------
interface Directors extends Teacher {
  numberOfReports: number;
}

// ---------------------------
// Task 3: printTeacher Function
// ---------------------------
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// ---------------------------
// Task 4: StudentClass
// ---------------------------

// Interface describing the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class itself
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// The StudentClass implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ---------------------------
// Example usage
// ---------------------------

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

console.log(printTeacher("John", "Doe")); // J. Doe

const student: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
