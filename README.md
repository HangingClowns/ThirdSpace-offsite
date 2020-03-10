# Xccelerate Engineering Offsite Test 

Here lies a take-home project to see if you have the chops to work at Third Space! 

## Getting Started

* `yarn`
* `yarn start:<PACKAGE_NAME>` OR `yarn start` should you wish to serve both the frontend and backend in parallel

## Instructions

1. Fork this repository into your github account.
1. When you are done with the challenge, please make a Pull Request to the [upstream repository](https://github.com/XccelerateOrg/ThirdSpace-offsite).
1. Inform Steve.

### Frontend

You are going to build a React App comprising of three pages: 

1. Main Lobby
2. Student Classroom
3. Instructor Dashboard

- No pages are required to be mobile-responsive.
- Please use [Material UI](https://material-ui.com/) and [emotion/styled](https://emotion.sh/docs/styled) to style your components. 
- No CSS or inline styling allowed!

**Main Lobby**

This will be the first page the user sees. It should have the following:

- Select component to select student or instructor.
- Input text field for user to enter a room id.
- Radio button to select either Javascript ES6 or Python.
- Button that takes the user to the Student Classroom or Instructor Dashboard depending on his/her role.
- Each classroom should only be able to host a maximum of one student and one instructor at a time.
- Use form validation to ensure all fields are required, and display an error if a field is missing.
- If the user plans to join a classroom that already contains a user in the same role, display an error modal with a message thrown from the backend.

**Student Classroom**

The Student Classroom should contain a Code Editor with three panels. The code output on the right, the code input in the middle, and package selection on the left. The specs are as follows:

- The font style and color of the code input panel should mimic an IDE.
- The Code Editor should handle Python and Javascript.
- The package selection panel should lazy load (on scroll) a list of libraries from PIP or NPM. 
- Clicking on the library should enable the Code Editor to use the library.
- Above the Code Editor there should be a “Run” button. 
- The "Run" button should run the input code (from the server) and output its results on the right panel. 
- There should be a "Submit" button next to the "Run" button.
- The "Submit" button should submit the input and outputted code to the instructor.
- The panels should be adjustable in width (draggable).
- The middle and right panels should be copy-pastable.
- Receiving instructor's shared code should automatically replace any code (if they exist) on the student's Code Editor.

#### Instructor Dashboard

The Instructor Dashboard should contain a 2-panel Code Editor that shows the input and output of the student's code. It should have the following specs:

- Receiving student's submitted code should automatically replace any code (if they exist) on the instructor's Code Editor.
- The panels should be adjustable in width (draggable).
- The left panel (code input) should be editable and copy-pastable.
- There should be a "Run" button above the editor.
- The "Run" button should output instructor's code.
- There should be a "Share" button next to the "Run" button.
- The "Share" button should send instructor code back to the student.


### Backend

Build an Express app that handles the following:

- Creating a new room (you can store rooms in memory if you'd like)
- Joining a room if it exists
- Lazy loading pip dependencies for Python 3.7
- Lazy loading npm dependencies for Node 10
- Code execution
- Code submission

Ensure your app is well tested and dockerized. 

### Further Requirements

In addition to your frequent commits, please ensure your code is: 
- Clean and reusable (follow SOLID principles)
- Following the best practices of the corresponding platform
- Documented (pro-tip: use JSDoc!)
- Performant and efficient (low memory consumption)

Please also ensure you write tests for your functions, using Jest and relevant JS libraries. 

## **BONUS POINTS** *(in no particular order)*

- Use libraries (like Ramda and RxJS) that help you code using functional programming patterns.
- Demonstrate your knowhow of container orchestration using kubernetes.
- Use an event sourced database to handle code edits. 
- Enable saving and versioning (via event sourcing).
- Use Typescript.
- Use NestJS to frame your express app.
- Microservice architecture with Lerna.
- Use FaunaDB.
- Use Redux.
- Use Slate to build the Code Editor.
