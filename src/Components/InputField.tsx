import React from 'react'
import "./styles.css"

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>

}
const InputField: React.FC<props> = ({ todo, setTodo }) => {
    return (
        <form className='input'>
            <input type="text" placeholder="Enter a Task" className="input__box" onChange={(e) =>
                setTodo(e.target.value)
            } ></input>
            <button type="submit" className="input_submit">ADD</button>
        </form>
    )
}

export default InputField
