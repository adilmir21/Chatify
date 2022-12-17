import store from "./store";
import { bookAdded, bookUpdated } from "./actions";
import * as actions from './actionsTypes';

store.dispatch(bookAdded("Robinson Crusoe"));
store.dispatch(bookUpdated(1));
//console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

store.dispatch({
    type: actions.BOOK_ADDED,
    payload: { name: "Walking on water" }
});

//unsubscribe();

store.dispatch({
    type:"bookRemoved",
    payload: { id:1 }
})

//console.log(store.getState());