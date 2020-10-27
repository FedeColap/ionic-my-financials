import React, { useState } from 'react';
import './EntryLi.css';
import { Entry, deleteEntry } from '../entry.d'

interface EntryLiProps {
    entry: Entry;
    handleDeleteItem:deleteEntry
}

const EntryLi: React.FC<EntryLiProps> = ({entry, handleDeleteItem}) => {

    if(entry.category === "expense") {
        return(
            <li className="entry-li expense-entry" key ={entry.id}>
                {entry.amount}$ have been paid for {entry.reason}
                <button type='button' onClick={()=> {handleDeleteItem(entry.id)}}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else {
        return(
            <li className="entry-li gain-entry " key ={entry.id}>
                {entry.amount}$ have been gained for {entry.reason}
                <button type='button' onClick={()=> {handleDeleteItem(entry.id)}}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )}
};

export default EntryLi;