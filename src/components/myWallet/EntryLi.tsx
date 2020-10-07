import React, { useState } from 'react';
import './EntryLi.css';
import { Entry, deleteEntry } from '../entry.d'

interface EntryLiProps {
    entry: Entry;
    onDeleteItem:deleteEntry
}

const EntryLi: React.FC<EntryLiProps> = ({entry, onDeleteItem}) => {

    if(entry.category === "expense") {
        return(
            <li className="entry-li expense-entry" key ={entry.id}>
                {entry.amount}$ have been paid for {entry.reason}
                <button type='button' onClick={()=> {onDeleteItem(entry.id)}}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else if (entry.category === "gain") {
        return(
            <li className="entry-li gain-entry " key ={entry.id}>
                {entry.amount}$ have been gained for {entry.reason}
                <button type='button' onClick={()=> {onDeleteItem(entry.id)}}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else {
        return(
            <li className="entry-li" key ={entry.id}>
                {entry.amount}$ have been moved for {entry.reason}
                <button type='button' onClick={()=> {onDeleteItem(entry.id)}}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )}
};

export default EntryLi;