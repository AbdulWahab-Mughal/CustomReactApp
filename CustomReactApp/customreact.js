const customRender = (reactElement, mainContainer) => {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  // loop base code so it's better
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  //code repeatation so not a good practice
  /*   domElement.setAttribute("href", reactElement.props.href);
       domElement.setAttribute("target", reactElement.props.target);
  */

  mainContainer.appendChild(domElement);
};

// define the react elements  and their properties
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click Me to go to Google",
};

// for selecting root div from the Html
const mainContainer = document.querySelector("#root");

// this render function takes two arguments... ka kaha inject krna ha or kis ko inject krna ha...
customRender(reactElement, mainContainer);
