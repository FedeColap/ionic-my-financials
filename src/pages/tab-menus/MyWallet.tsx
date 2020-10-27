import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add, share } from 'ionicons/icons';
import './MyWallet.css';
import ExpensesList from '../../components/myWallet/ExpensesList';
import { Entry, AddEntry, deleteEntry } from '../../components/entry.d'
import AddEntryForm from '../../components/myWallet/AddEntryForm';
import ExpensesContext from '../../components/myWallet/ExpensesContext';




const MyWallet: React.FC = () => {

  const {entries, addEntry, handleDeleteItem, total } = useContext(ExpensesContext);
  console.log(entries);
  console.log(total);


  return (


    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <h2>Your total is {total} Dollars</h2>
        <ExpensesList entries={entries} handleDeleteItem={handleDeleteItem}/>
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


  );
};

export default MyWallet;
