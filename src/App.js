import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Contact from './Contact';
import NewContact from  './NewContact';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <MainColumn>
      <Route exact path="/contact/:id" component={Contact} />
      <Route exact path="/new-contact/" component={NewContact} />
    </MainColumn>
  </Router>
);

export default App;
