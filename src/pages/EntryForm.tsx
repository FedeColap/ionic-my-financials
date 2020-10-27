import React, { useState, useContext } from 'react';
import { IonButton } from '@ionic/react';
import AddEntryForm from '../components/myWallet/AddEntryForm'
import { Entry, AddEntry } from '../components/entry.d'
import { v4 as uuidv4 } from 'uuid';
import './EntryForm.css';
import ExpensesContext from '../components/myWallet/ExpensesContext'

console.log(ExpensesContext)

const EntryForm: React.FC = () => {
  // const {entries, addEntry, handleDeleteItem} = useContext(ExpensesContext);

  return (
    <ExpensesContext.Consumer>
      {function renderProp() {
        return (
      <div className="entry-form-container"> 
          <h1>Enter your </h1>
          {/* <AddEntryForm addEntry={addEntry}/> */}
      </div> 
        )
      }}
    </ExpensesContext.Consumer>
  );
};

export default EntryForm;