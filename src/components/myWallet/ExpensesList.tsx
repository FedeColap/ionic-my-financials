import React, { useState } from 'react';
import './ExpensesList.css';
import { v4 as uuidv4 } from 'uuid';
import EntryForm from '../../pages/EntryForm';


// interface CustomInputProps {
//   title: string; 
//   amount: number; 
//   category: string; 
//   id: string;
// }


const ExpensesList: React.FC = () => {

  const [entries, setEntries] = useState([
    {reason: "Groceries", amount: 100, category: "expense", id: uuidv4()},
    {reason: "Doggo Collar", amount: 30, category: "expense", id: uuidv4()},
    {reason: "Chipotle dinner", amount: 15, category: "expense", id: uuidv4()},
  ]);
  const addEntry = () => {
    setEntries([...entries, { reason: "manually added reason", amount: 50, category: "expense", id: uuidv4() }])
  }
  return (
    <div className="expenses-list-container">
        <ul>
           {entries.map(entry => {
               return ( <li key ={entry.id}>{entry.amount}$ have been paid for {entry.reason}</li> );
           })}
        </ul>
        {/* <button onClick={ addEntry }>Add an entry</button> */}
        <EntryForm />
    </div>
  );
};

export default ExpensesList;