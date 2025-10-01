// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable on initialization
  readonly lastName: string;  // only modifiable on initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional
  location: string;           // must always be defined
  [propName: string]: any;    // allow additional attributes
}

// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required attribute
}

// Example: Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example: Director object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
