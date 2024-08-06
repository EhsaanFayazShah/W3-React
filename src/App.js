import React from "react";
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

// export default App;
// export default Car;

class Car2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

function MissedGoal() {
  return <h1>Missed Goal </h1>;
}
//conditional Rendering
function MadeGoal() {
  return <h1>Made Goal </h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  // if (isGoal) {
  //   return <MadeGoal />;
  // }
  // return <MissedGoal />;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && (
        <h2>You have got {cars.length} cars in your garage. Awesome</h2>
      )}
    </>
  );
}
export { App, Car, Car2, Goal, Garage };
