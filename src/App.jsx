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
  const course = "Half Stack application development";
  const part1 = { name:"Fundamentals of React", exercices:10}
  const part2 = { name:"Using props to pass data", exercices:7}
  const part3 = { name:"State of a component", exercices:14}
  return (
    <>
      <Header course={course} />
      <Content 
      part1={part1.name}
      part2={part2.name}
      part3={part3.name}
      exercices1={part1.exercices}
      exercices2={part2.exercices}
      exercices3={part3.exercices}
      />
      <Footer
        exercices1={part1.exercices}
        exercices2={part2.exercices}
        exercices3={part3.exercices}
      />
    </>
  );
};

export default App;
