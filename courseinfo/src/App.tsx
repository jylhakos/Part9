import React from 'react';

interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseDescriptionPart extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CoursePartBase, CourseDescriptionPart {
  type: "normal";
  //description: string;
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase, CourseDescriptionPart {
  type: "submission";
  //description: string;
  exerciseSubmissionLink: string;
}

interface CourseSpecial extends CoursePartBase, CourseDescriptionPart {
  type: "special";
  requirements: Array<string>;
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpecial;

interface HeaderProps {
  name: string;
}

// 9.14
//interface CourseProps {
  //name: string;
  //exerciseCount: number;
  // 9.15
  //type?: string;
  //description?: string;
  //groupProjectCount?: string;
  //exerciseSubmissionLink?: string;
//}

interface CoursePartProps {
  // 9.14
  //courseParts: CourseProps[];
  // 9.15
  courseParts: CoursePart[];
}

const Header = (props: HeaderProps): JSX.Element => {
  return <h1>{props.name}</h1>
}

// 9.14
/*const Part = (props: CourseProps): JSX.Element => {
  return (
    <p>
      {props.name} {props.exerciseCount}
    </p>    
  )
}*/

// 9.15
const Part = (props: CoursePart): JSX.Element => {

  // 9.15
  switch(props.type) {
    case "normal":
      return (
        <p>
          <div>
          <strong>
          {props.name} {props.exerciseCount} 
          </strong>
          </div>
          <div>
          <i>
          {props.description}
          </i>
          </div>
        </p>
      )
      break;
    case "groupProject":
      return (
        <p>
        <div>
          <strong>
          {props.name} {props.exerciseCount} 
          </strong>
          </div>
          <div>
          project exercises {props.groupProjectCount}
          </div>
        </p>
      )
      break;
    case "submission":
      return (
        <p>
          <div>
          <strong>
          {props.name} {props.exerciseCount} 
          </strong>
          </div>
          <div>
          <i>
          {props.description}
          </i>
          </div>
          <div>
          {props.exerciseSubmissionLink}
          </div>
        </p>    
      )
      break;
    case "special":
      return (
        <p>
          <div>
          <strong>
          {props.name} {props.exerciseCount} 
          </strong>
          </div>
          <div>
          <i>
          {props.description}
          </i>
          </div>
          <div><span style={{paddingRight:10}}>required skills:</span>
          {props.requirements.map(requirement => requirement + ", ")}
          </div>
        </p>    
      )
      break;
    default:
      return (
      <p>
      </p>    
      )
      break;
  }
}

// 9.14
/*const Content = (props: CoursePartProps): JSX.Element => {

  return (
    <div>
      {props.courseParts.map(course => <Part key={course.name} name={course.name} exerciseCount={course.exerciseCount} />)}
    </div>
  )
}*/

// 9.15
const Content = (props: CoursePartProps): JSX.Element => {

    return (
    <div>
      { props.courseParts.map(course => <Part key={course.name} {...course} />)}
    </div>
    )
}

const Total = (props: CoursePartProps): JSX.Element => {

  const total = props.courseParts.reduce((a, b) => a + b.exerciseCount, 0);

  return (
    <p>Number of exercises{" "}  {total}</p>
  )
}

// 9.14
const App = () => {

  const courseName = "Half Stack application development";

  // 9.15
  const courseParts: CoursePart[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is the leisured course part",
    type: "normal"
  },
  {
    name: "Advanced",
    exerciseCount: 7,
    description: "This is the harded course part",
    type: "normal"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3,
    type: "groupProject"
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev",
    type: "submission"
  },
  {
    name: "Backend development",
    exerciseCount: 21,
    description: "Typing the backend",
    requirements: ["nodejs", "jest"],
    type: "special"
  }
]

  // 9.14
  /*const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];
  */

  return (

    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
