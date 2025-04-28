const Header = (props) => {
  return (
    <>
      <h1 class="underline">{props.course}</h1>
    </>
  );
};

const ContentPart1 = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercices1}
      </p>
    </>
  );
};

const ContentPart2 = (props) => {
  return (
    <>
      <p>
        {props.part2} {props.exercices2}
      </p>
    </>
  );
};

const ContentPart3 = (props) => {
  return (
    <>
      <p>
        {props.part3} {props.exercices3}
      </p>
    </>
  );
};

const table = [{ exercices1: 10 , exercices2: 7 , exercices3: 14 }];

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  return (
    <>
      <ContentPart1 part1={part1} exercices1={table[0].exercices1} />
      <ContentPart2 part2={part2} exercices2={table[0].exercices2} />
      <ContentPart3 part3={part3} exercices3={table[0].exercices3} />
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
  return (
    <>
      <Header course={course} />
      <Content />
      <Footer
        exercices1={table[0].exercices1}
        exercices2={table[0].exercices2}
        exercices3={table[0].exercices3}
      />
    </>
  );
};

export default App;
