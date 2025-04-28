const Header = (props) => {
  return (
    <>
      <h1 class="underline">{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercices1}
      </p>
      <p>
        {props.part2} {props.exercices2}
      </p>
      <p>
        {props.part3} {props.exercices3}
      </p>
    </>
  );
};

const Footer = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercices1 + props.exercices2 + props.exercices3}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercices: 10 },
      { name: "Using props to pass data", exercices: 7 },
      { name: "State of a component", exercices: 14 },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        part2={course.parts[1].name}
        part3={course.parts[2].name}
        exercices1={course.parts[0].exercices}
        exercices2={course.parts[1].exercices}
        exercices3={course.parts[2].exercices}
      />
      <Footer
        exercices1={course.parts[0].exercices}
        exercices2={course.parts[1].exercices}
        exercices3={course.parts[2].exercices}
      />
    </>
  );
};

export default App;
