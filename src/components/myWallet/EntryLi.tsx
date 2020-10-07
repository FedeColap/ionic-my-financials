import React, { useState } from 'react';
import './EntryLi.css';
import { Entry, deleteEntry } from '../entry.d'

interface EntryLiProps {
    entry: Entry;
    deleteEntry:deleteEntry
}

const EntryLi: React.FC<EntryLiProps> = ({entry}) => {

    function handleDeleteClick(event: React.MouseEvent<HTMLButtonElement>) {
        const type = event.currentTarget.value;
        console.log('button clicked!', type)
        // setnumberTab(Number(type))
    }

    if(entry.category === "expense") {
        return(
            <li className="entry-li expense-entry" key ={entry.id}>
                {entry.amount}$ have been paid for {entry.reason}
                <button type='button' value ={entry.id} onClick={handleDeleteClick}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else if (entry.category === "gain") {
        return(
            <li className="entry-li gain-entry " key ={entry.id}>
                {entry.amount}$ have been gained for {entry.reason}
                <button type='button' value ={entry.id}  onClick={handleDeleteClick}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else {
        return(
            <li className="entry-li" key ={entry.id}>
                {entry.amount}$ have been moved for {entry.reason}
                <button type='button' value ={entry.id}  onClick={handleDeleteClick}>delete</button>
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )}
};

export default EntryLi;