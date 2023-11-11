import React, { useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    }
}

const useInputs = (initialForm) => {
    
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e  => {
        dispatch(e.target);
        console.log(state);
        console.log(state.name);
        console.log(state.nickname);
    }
    return [state, onChange];
};

export default useInputs;