import React, { useState } from 'react';
import './ExpensesList.css';
import { v4 as uuidv4 } from 'uuid';
import EntryForm from '../../pages/EntryForm';
import EntryLi from './EntryLi';
import { Entry, deleteEntry } from '../entry.d'
import { attachProps } from '@ionic/react/dist/types/components/utils';

interface EntryListProps {
  entries: Array<Entry>,
  handleDeleteItem:deleteEntry
}

const ExpensesList: React.FC<EntryListProps> = ({ handleDeleteItem, entries }) => {

  
  // const addEntry = () => {
  //   setEntries([...entries, { reason: "manually added reason", amount: 50, category: "expense", id: uuidv4() }])
  // }
  return (
    <div className="expenses-list-container">
      <ul>
        {entries.map( entry => {
          return <EntryLi key={entry.id} entry={entry} handleDeleteItem={handleDeleteItem}/>
        }

        )}
      </ul>
    </div>
  );
};

export default ExpensesList;