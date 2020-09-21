import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './MyWallet.css';
import ExpensesList from '../../components/myWallet/ExpensesList';
import { v4 as uuidv4 } from 'uuid';





const MyWallet: React.FC = () => {
  const [entries, setEntries] = useState([
    {reason: "Groceries", amount: 100, category: "expense", id: uuidv4()},
    {reason: "Doggo Collar", amount: 30, category: "expense", id: uuidv4()},
    {reason: "Chipotle dinner", amount: 15, category: "expense", id: uuidv4()},
  ]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Wallet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExpensesList />
        <IonFab horizontal="end" vertical="bottom" slot="fixed" >
          <IonFabButton color="primary" href="/entry-form">
          <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default MyWallet;
