import React, {useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {IonApp,IonIcon,IonLabel,IonRouterOutlet,IonTabBar,IonTabButton,IonTabs} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { wallet, grid } from 'ionicons/icons';
import MyWallet from './pages/tab-menus/MyWallet';
import Graphs from './pages/tab-menus/Graphs';
import EntryForm from './pages/EntryForm';
import { Entry, AddEntry, deleteEntry } from './components/entry.d'
import { v4 as uuidv4 } from 'uuid';
import ExpensesContext from './components/myWallet/ExpensesContext'

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

const initialEntries: Array<Entry> =[
  {reason: "Groceries", amount: 100, category: "expense", id: uuidv4(), datetime: new Date()},
  {reason: "Doggo Collar", amount: 30, category: "expense", id: uuidv4(), datetime: new Date()},
  {reason: "Chipotle dinner", amount: 15, category: "expense", id: uuidv4(), datetime: new Date()}
]


const App: React.FC = () => {

  const [entries, setEntries] = useState(initialEntries);
  console.log(entries)

  function calcTotal(){
    let total = 0;

    for(let i=0; i<entries.length; i++){
      let currentEntry = entries[i];
        if(currentEntry.category === "expense"){
            total -= currentEntry.amount!
        }else{
            total += currentEntry.amount!
        }
    }
    return total;
  }
  console.log(calcTotal())
  let total = calcTotal()
  console.log(total)

  const addEntry:AddEntry = (newEntry) => {
    setEntries([...entries, {reason:newEntry.reason, amount:newEntry.amount, category:newEntry.category, id: uuidv4(), datetime: new Date()}])
  };
  const handleDeleteItem:deleteEntry = (deleteThisEntryID) =>{
    console.log('handle delete item called', deleteThisEntryID)
    const newItems = entries.filter(itm => itm.id !== deleteThisEntryID)
    setEntries(newItems)
  }

  const value = {
    entries: entries,
    addEntry: addEntry,
    handleDeleteItem: handleDeleteItem,
    total: total
  }

  return(
    <ExpensesContext.Provider value={value}>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/my-wallet" 
            component={MyWallet} exact={true} 
            render={() =>
              <MyWallet
                              // total={value.total}
                              // handleDeleteItem={value.handleDeleteItem}
                              // addEntry={ value.addEntry}
                              // entries={value.entries}
                            />}
            />
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
    </ExpensesContext.Provider>
  )
};

export default App;
