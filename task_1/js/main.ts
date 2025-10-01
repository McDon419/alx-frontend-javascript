// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // only modifiable on initialization
  readonly lastName: string;  // only modifiable on initialization
  fullTimeEmployee: boolean;  // must always be defined
  yearsOfExperience?: number; // optional
  location: string;           // must always be defined
  [propName: string]: any;    // allow additional attributes
}

// Example object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
