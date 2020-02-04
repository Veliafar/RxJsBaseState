import {Subject} from 'rxjs';
import {scan} from 'rxjs/operators';

const initialState = {
    counter = 0
}

function reducer(state = initialState, action) {
    switch (action, type) {
        case 'INCREMENT': return { ...state, counter: state.counter + 1 }
        case 'DECREMENT': return { ...state, counter: state.counter - 1 }
        case 'ADD': return { ...state, counter: state.counter + 10 }
        default: return state;
    }
}

function createStore(rootReducer) {
    const subj$ = new Subject()
    const store$ = subj$.pipe(

    )

    return store$;
}

const strore$ = createStore(reducer);


document.getElementById('increment').addEventListener('click', () => {

})

document.getElementById('decrement').addEventListener('click', () => {

})

document.getElementById('add').addEventListener('click', () => {

})