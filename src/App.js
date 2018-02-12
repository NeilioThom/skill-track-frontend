import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Layout from './pages/layout';
import Home from './pages/home';
import LoginPage from './pages/login';
import CreateSkillPage from './pages/create-skill';
import rootReducer from './reducers/reducers';
import './styles/css/style.css';

const store = createStore(rootReducer)
window.store = store;

const Routing = () => (
    <div id="routing">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/skills/create" component={CreateSkillPage}/>
    </div>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Routing />
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
