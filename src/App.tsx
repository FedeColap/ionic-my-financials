import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { wallet, grid } from 'ionicons/icons';
import MyWallet from './pages/tab-menus/MyWallet';
import Graphs from './pages/tab-menus/Graphs';
import EntryForm from './pages/EntryForm';

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


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/my-wallet" component={MyWallet} exact={true} />
          <Route path="/graphs" component={Graphs} exact={true} />
          <Route path="/entry-form" component={EntryForm} />
          <Route path="/" render={() => <Redirect to="/my-wallet" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/my-wallet">
            <IonIcon icon={wallet} />
            <IonLabel>My wallet</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/graphs">
            <IonIcon icon={grid} />
            <IonLabel>Graphs</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
