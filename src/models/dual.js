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

export const Routes = () => {
  return (
    <Router> 
      <Switch>
        <Route exact path="/" component={YourComponent}/>
      </Switch>
    </Router>
  );
}`;
  },
};
