import React, { useRef } from 'react'
import "./styles.css"

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;

}
const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input' onSubmit={(e) => {
            console.log("hello");
            handleAdd(e);
            inputRef.current?.blur();

        }}>
            <input type="text" ref={inputRef} value={todo} placeholder="Enter a Task" className="input__box" onChange={(e) =>
                setTodo(e.target.value)
            } ></input>
            <button type="submit" className="input_submit">ADD</button>
        </form>
    )
}

export default InputField
