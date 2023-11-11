import React, { useRef } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({});
    const nickRef = useRef(null);
    const nameRef = useRef(null);



    return (
        <div>
            name <input name='name' value={state.name} onInput={onChange} ref={nameRef}/>
            nick <input name='nickname' value={state.nickname} onInput={onChange} ref={nickRef}/>
            <button onClick={()=>{console.log(state); console.log(nickRef.current.value, ' ', nameRef.current.value)}}>console</button>
        </div>
    );
};

export default Info;