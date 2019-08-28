import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { IonApp, IonPage } from '@ionic/react';

import Home from './pages/Home';
import List from './pages/List';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FunctionComponent = () => (
  <IonApp>
    <IonPage id="main">
      <Router>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/list" component={List} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </Router>
    </IonPage>
  </IonApp>
);

export default App;
