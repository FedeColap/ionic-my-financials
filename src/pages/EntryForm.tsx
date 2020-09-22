import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import AddEntryForm from '../components/myWallet/AddEntryForm'
// import { Entry, AddEntry } from '../../components/entry.d'
import './EntryForm.css';

const EntryForm: React.FC = () => {

    const [reason, setReason] = useState('');
    const [amount, setAmount] = useState('');
    let datetime = new Date();
    let creationDate = datetime.toLocaleString();
    const handleSubmit = (e:Event) => {
        e.preventDefault();
        console.log(reason);
    };
    // const addEntry:AddEntry = (newEntry) => {
    //   setEntries([...entries, {reason:newEntry.reason, amount:newEntry.amount, category:"expense", id: uuidv4()}])
    // };    

  return (
    <div className="entry-form-container">
        <h1>Enter your </h1>
        {/* <form onSubmit={handleSubmit}> */}
        {/* <AddEntryForm addEntry={}/> */}
    </div>
  );
};

export default EntryForm;