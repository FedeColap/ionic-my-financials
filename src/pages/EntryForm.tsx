import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
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
       

  return (
    <div className="entry-form-container">
        <h1>Enter your </h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form >
            <label>Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            <label>Reason</label>
            <input type="text" value={reason} onChange={(e) => setReason(e.target.value)}></input>
            {/* <IonButton  href="/my-wallet" color="medium">Submit</IonButton> */}
            <button type="submit" >Add Entry</button>
        </form>
    </div>
  );
};

export default EntryForm;