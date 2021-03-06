import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from './store/session';

import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <h1>Hello from App</h1>
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
