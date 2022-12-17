import * as actions from './actionsTypes';

export const bookAdded = name => (
    {
        type: actions.BOOK_ADDED,
        payload: { name }
    }
)

export const bookUpdated = id => (
    {
        type: actions.BOOK_UPDATED,
        payload: { id }
}) 

// export function bugAdded(description){
//     return{
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     };
// }