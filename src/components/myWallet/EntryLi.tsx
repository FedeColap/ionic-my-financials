import React, { useState } from 'react';
import './EntryLi.css';
import { Entry } from '../entry.d'

interface EntryLiProps {
    entry: Entry;
}

const EntryLi: React.FC<EntryLiProps> = ({entry}) => {
    if(entry.category === "expense") {
        return(
            <li className="entry-li expense-entry" key ={entry.id}>
                {entry.amount}$ have been paid for {entry.reason}
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else if (entry.category === "gain") {
        return(
            <li className="entry-li gain-entry " key ={entry.id}>
                {entry.amount}$ have been gained for {entry.reason}
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )} else {
        return(
            <li className="entry-li" key ={entry.id}>
                {entry.amount}$ have been moved for {entry.reason}
                <div className="entry-li-date">{entry.datetime.toLocaleString()}</div>
            </li>
    )}
};

export default EntryLi;