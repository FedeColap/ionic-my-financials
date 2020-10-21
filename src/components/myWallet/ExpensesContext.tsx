import React from 'react';
import {Entry, AddEntry, deleteEntry} from '../entry.d'

interface IExpensesContext {
    entries: Entry[],
    addEntry: AddEntry,
    handleDeleteItem: deleteEntry,
}
const ExpensesContext = React.createContext<IExpensesContext | undefined>(
    {
        entries:[],
        addEntry:() => {},
        handleDeleteItem:() => {}
    }

)

// const ExpensesContext = React.createContext<Partial<IExpensesContext>>({
//     entries: [],
//     addEntry:() => {},
//     handleDeleteItem: () => {}
// })

export default ExpensesContext;

// import React, {createContext, Component} from 'react';

// // export const ExpensesContext = createContext(null);
// export const ExpensesContext = React.createContext({
//   entries: [],
//   addEntry: () => {},
//   handleDeleteItem: () => {},
// })

// class ExpensesContextProvider extends Component {

//     render() {
//         return(
//             <ExpensesContext.Provider value={{...ExpensesContext}}>
//                 {this.props.children}
//             </ExpensesContext.Provider>
//         )
//     }
// }

// export default ExpensesContextProvider;