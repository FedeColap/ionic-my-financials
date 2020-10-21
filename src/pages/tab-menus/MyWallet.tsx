import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonRoute } from '@ionic/react';
import { add, share } from 'ionicons/icons';
import './MyWallet.css';
import ExpensesList from '../../components/myWallet/ExpensesList';
import { v4 as uuidv4 } from 'uuid';
import { Entry, AddEntry, deleteEntry } from '../../components/entry.d'
import AddEntryForm from '../../components/myWallet/AddEntryForm';
import ExpensesContext from '../../components/myWallet/ExpensesContext'


const initialEntries: Array<Entry> =[
  {reason: "Groceries", amount: 100, category: "expense", id: uuidv4(), datetime: new Date()},
  {reason: "Doggo Collar", amount: 30, category: "expense", id: uuidv4(), datetime: new Date()},
  {reason: "Chipotle dinner", amount: 15, category: "expense", id: uuidv4(), datetime: new Date()}
]


const MyWallet: React.FC = () => {
  const [entries, setEntries] = useState(initialEntries);
  

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
  }

  return (
    <ExpensesContext.Provider value={value}>

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <h2>Your total is {calcTotal()} Dollars</h2>
        <ExpensesList entries={entries} onDeleteItem={handleDeleteItem}/>
        <IonFab vertical="bottom" horizontal="end" slot="fixed" color="primary">
          {/* <Link to='/entry-form'> */}
            <IonFabButton href="/entry-form">
              <IonIcon icon={add} />
            </IonFabButton>
          {/* </Link> */}
        </IonFab>
        <IonFab vertical="bottom" horizontal="start" slot="fixed" color="danger">
          <IonFabButton>
            <IonIcon icon={share} />
          </IonFabButton>
        </IonFab>
        {/* <Route path='/entryform' component={AddEntryForm} /> */}
        <AddEntryForm addEntry={addEntry}/>
      </IonContent>
    </IonPage>

   </ExpensesContext.Provider>
  );
};

export default MyWallet;
