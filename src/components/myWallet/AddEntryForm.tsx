import React, { useState, ChangeEvent, FormEvent } from 'react';
import './AddEntryForm.css'
import { AddEntry } from '../entry.d'
// import { IonButton } from '@ionic/react';
import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonListHeader } from '@ionic/react';
import { v4 as uuidv4 } from 'uuid';

interface AddEntryFormProps {
    addEntry: AddEntry
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({addEntry}) => {

    const[newReason, setNewReason] = useState('');
    const[newAmount, setNewAmount] = useState<number>();
    const[selected, setSelected] = useState<string>('');

    const handleChangeReason = (e: ChangeEvent<HTMLInputElement>) => {
        setNewReason(e.target.value)
    };
    const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
        setNewAmount(Number(e.target.value))
    };
    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newEntry = {
            reason: newReason,
            amount: newAmount,
            category: selected,
            id: uuidv4()
        }
        addEntry(newEntry);
    }
    // const handleSubmit = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
    //     e.preventDefault();
    //     const newEntry = {
    //         reason: newReason,
    //         amount: newAmount,
    //         category: 'expense',
    //         id: uuidv4()
    //     }
    //     addEntry(newEntry);
    // }
    

    return (
        <form >
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                <IonListHeader>
                <IonLabel>Type of entry</IonLabel>
                </IonListHeader>
                <IonItem>
                    <IonLabel>Expense</IonLabel>
                    <IonRadio slot="start" value="expense" />
                </IonItem>
                <IonItem>
                    <IonLabel>Gain</IonLabel>
                    <IonRadio slot="start" value="gain" />
                </IonItem>
          </IonRadioGroup>
            <label>Amount</label>
            <input type="number" value={newAmount} onChange={handleChangeAmount}></input>
            <label>Reason</label>
            <input type="text" value={newReason} onChange={handleChangeReason}></input>
            {/* <IonButton  href="/my-wallet" color="medium" type="submit" onClick={handleSubmit}>Submit</IonButton>*/}
            <button type="submit" onClick={handleSubmit}>Add Entry</button> 
        </form>
    )
}
export default AddEntryForm;