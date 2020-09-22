import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './MyWallet.css';
import ExpensesList from '../../components/myWallet/ExpensesList';
import { v4 as uuidv4 } from 'uuid';
import { Entry, AddEntry } from '../../components/entry.d'
import AddEntryForm from '../../components/myWallet/AddEntryForm';


const initialEntries: Array<Entry> =[
  {reason: "Groceries", amount: 100, category: "expense", id: uuidv4()},
  {reason: "Doggo Collar", amount: 30, category: "expense", id: uuidv4()},
  {reason: "Chipotle dinner", amount: 15, category: "expense", id: uuidv4()}
]

const MyWallet: React.FC = () => {
  const [entries, setEntries] = useState(initialEntries);

  const addEntry:AddEntry = (newEntry) => {
    setEntries([...entries, {reason:newEntry.reason, amount:newEntry.amount, category:"expense", id: uuidv4()}])
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExpensesList entries={entries}/>
        <AddEntryForm addEntry={addEntry}/>
      </IonContent>
    </IonPage>
  );
};

export default MyWallet;
