import React from 'react';
import {Entry, AddEntry, deleteEntry} from '../entry.d'

interface IExpensesContext {
    entries: Entry[],
    addEntry: AddEntry,
    handleDeleteItem: deleteEntry,
    total: number 
}
const ExpensesContext = React.createContext<IExpensesContext>(
    {
        entries:[],
        addEntry:() => {},
        handleDeleteItem:() => {},
        total: 0
    }
)

// const ExpensesContext = React.createContext<Partial<IExpensesContext>>({
//     entries: [],
//     addEntry:() => {},
//     handleDeleteItem: () => {}
// })
// export const ExpensesContext = React.createContext(null);
export default ExpensesContext;
