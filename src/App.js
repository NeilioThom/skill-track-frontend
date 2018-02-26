import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Layout from './pages/layout';
import HomePage from './pages/home-page';
import LoginPage from './pages/login-page';
import CreateSkillPage from './pages/create-skill-page';
import EditSkillPage from './pages/edit-skill-page';
import CreateSessionPage from './pages/create-session-page';
import SkillDetailsPageContainer from './containers/skill-details-page';
import rootReducer from './reducers/reducers';
import './styles/css/style.css';

const store = createStore(rootReducer)
window.store = store;

const Routing = () => (
  <div id="routing">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/skills/:subpath(create)/" component={CreateSkillPage} />
      <Route exact path="/skills/:id/sessions/create/" component={CreateSessionPage} />
      <Route exact path="/skills/:id/" component={SkillDetailsPageContainer} />
      <Route exact path="/skills/:id/edit" component={EditSkillPage} />
      <Route exact path="/skills/:id/page/:page" component={SkillDetailsPageContainer} />
    </Switch>
  </div>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Layout>
            <Routing />
          </Layout>
        </div>
      </Provider>
    );
  }
}

export default App;
