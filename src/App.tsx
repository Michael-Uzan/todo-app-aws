import Amplify from '@aws-amplify/core';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { UserMsg } from './cmp/UserMsg';
import routes from './routes/routes';
import awsExports from './aws-exports';
import { PageNotFound } from "./pages/PageNotFound";

Amplify.configure(awsExports);

function App() {

  return (
    <Router>
      <UserMsg />
      <AppHeader />
      <main className="main-container">
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route?.path} />)}
          <Route component={PageNotFound} />
        </Switch>
      </main>
      <AppFotter />
    </Router>
  );
}

export default App;
