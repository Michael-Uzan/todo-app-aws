import { API, graphqlOperation } from "aws-amplify";
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { UserMsg } from './cmp/UserMsg';
import routes from './routes/routes';
import awsExports from './aws-exports';
import { useEffect } from "react";
// import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

// Auth.configure({
//   authenticationFlowType: 'USER_SRP_AUTH'
// })

// const client = new AWSAppSyncClient({
//   url: awsExports.aws_appsync_graphqlEndpoint,
//   region: awsExports.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
//   },
// });

// Amplify.configure({
//   Auth: {

//     // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
//     identityPoolId: "eu-central-1:30170abb-0523-48f3-9728-65312580f8e0",

//     // REQUIRED - Amazon Cognito Region
//     region: 'eu-central-1',

//     // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
//     // Required only if it's different from Amazon Cognito Region
//     identityPoolRegion: 'eu-central-1',

//     // OPTIONAL - Amazon Cognito User Pool ID
//     userPoolId: 'eu-central-1_rN21g1jxG',

//     // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
//     userPoolWebClientId: '35tslo78sghhlbppmd2pmt9a3e',
//   }
// });

// You can get the current config object
// const currentConfig = Auth.configure();

function App() {

  return (
    <Router>
      <UserMsg />
      <AppHeader />
      <main className="main-container">
        <Switch>
          {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <AppFotter />
    </Router>
  );
}

// export default withAuthenticator(App);
export default App;




// import React from "react";
// import Amplify, { Auth } from "aws-amplify";
// import awsconfig from "./aws-exports";
// import { AmplifyAuthenticator, withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import { AppFotter } from './cmp/AppFooter';
// import { AppHeader } from './cmp/AppHeader';
// import { UserMsg } from './cmp/UserMsg';
// import routes from './routes/routes';
// import { ListTodo } from "./cmp/ListTodo";

// Amplify.configure(awsconfig);
// // Auth.configure(awsconfig);

// function App() {

//   const [authState, setAuthState] = React.useState();
//   const [user, setUser] = React.useState();

//   React.useEffect(() => {
//     return onAuthUIStateChange((nextAuthState, authData) => {
//       setAuthState(nextAuthState);
//       setUser(authData);
//     });
//   }, []);

//   return authState === AuthState.SignedIn && user ? (
//     <div className="App">
//       {/* <AddItem /> */}
//       <ListTodo />
//     </div>
//   ) : (
//     <div className="container">
//       <div className="signIn">
//         {/* <AmplifyAuthenticator /> */}
//         <AmplifySignOut />
//       </div>
//     </div>
//   );


//   // return (
//   // <Router>


//   {/* <UserMsg />
//       <AppHeader />
//       <AmplifyAuthenticator />
//       <ListTodo /> */}
//   {/* <main className="main-container"> */ }
//   {/* <Switch>
//           {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
//         </Switch> */}
//   {/* </main> */ }
//   {/* <AppFotter /> */ }
//   {/* </Router> */ }
//   // );
// }

// export default withAuthenticator(App);
