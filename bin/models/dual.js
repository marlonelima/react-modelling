module.exports = {
  component(name) {
    return `// import { Container } from "./styles"

export const ${name} = () => {
  return <div>${name} component</div>;
};`;
  },

  style() {
    return `// import styled from "styled-components"

//export const Container = styled.div${"``"}

export {}`;
  },

  page(name) {
    return `// import { Container } from "./styles"

export const ${name} = () => {
  return <div>${name} page</div>;
};`;
  },

  router() {
    return `import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const YourComponent = () => (<div>React-router-dom works!!</div>)

export const Router = () => {
  return (
    <Router> 
      <Switch>
        <Route exact path="/" component={YourComponent}/>
      </Switch>
    </Router>
  );
}`;
  },

  reactApp() {
    return `function App() {
  return <div>App works!</div>;
}
    
export default App;
    `;
  },

  reactIndex() {
    return `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
    
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);`;
  },
};
