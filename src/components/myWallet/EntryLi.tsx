import React, { useState } from 'react';
import './EntryLi.css';

interface EntryLiProps {
    entry: {
        amount: number;
        reason: string;
        category: string;
        id: number
    }
}

const EntryLi: React.FC<EntryLiProps> = ({entry}) => {
    return(
        <li className="entry-li" key ={entry.id}>
            {entry.amount}$ have been paid for {entry.reason}
        </li>
    )
};

export default EntryLi;