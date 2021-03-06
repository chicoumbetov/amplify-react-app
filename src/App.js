import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
//import { withAuthenticator } from 'aws-amplify-react'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>App content</h1>
        <h5>David-Julian j'ai réussi de faire authentification avec AWS</h5>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
