import React from 'react';

interface HeaderProps {
  name: string;
}

interface CourseProps {
  name: string;
  exerciseCount: number;
}

interface CoursePartProps {
  courseParts: CourseProps[];
}

const Header = (props: HeaderProps): JSX.Element => {
  return <h1>{props.name}</h1>
}

const Part = (props: CourseProps): JSX.Element => {
  return (
    <p>
      {props.name} {props.exerciseCount}
    </p>    
  )
}

const Content = (props: CoursePartProps): JSX.Element => {

  return (
    <div>
      {props.courseParts.map(course => <Part key={course.name} name={course.name} exerciseCount={course.exerciseCount}/>)}
    </div>
  )
}

const Total = (props: CoursePartProps): JSX.Element => {

  const total = props.courseParts.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <p>Number of exercises{" "}  {total}</p>
  )
}

// 9.14
const App = () => {

  const courseName = "Half Stack application development";

  const courseParts = [
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

  return (

    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
