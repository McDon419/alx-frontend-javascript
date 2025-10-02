// ---------------------------
// StudentClass Interfaces
// ---------------------------
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ---------------------------
// StudentClass definition
// ---------------------------
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
const student: StudentClassInterface = new StudentClass("Alice", "Johnson");
console.log(student.displayName());     // Alice
console.log(student.workOnHomework());  // Currently working
