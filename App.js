// const heading = React.createElement("h1", {}, "Namaste React"); // it will return object
// const root = ReactDOM.createRoot(document.getElementById("root")); // it create react root using the asctual root element
// root.render(heading); // it will take that object convert that into actual h1 which browser will understands

//nested element staructure

const parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, React.createElement("h1", {}, "Namaste React"))
);
// two sibilings

const parent2 = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "Namaste React"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root")); // it create react root using the asctual root element
root.render(parent2);
