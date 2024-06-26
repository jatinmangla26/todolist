import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Props {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);



    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            }));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
        );
        setEdit(false);
    };
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])



    return (
        <form className='todos__single' onSubmit={(e) => {
            handleEdit(e, todo.id);
        }}>

            {
                edit ? (<input ref={inputRef} value={editText} onChange={(e) => {
                    setEditText(e.target.value);
                }}></input>) :
                    todo.isDone ? ((<s className='todos__single--text'>{todo.todo}</s>)
                    ) :
                        (<span className='todos__single--text'>{todo.todo}</span>)

            }

            <div>
                <span className='icon' onClick={() => {
                    if (!todo.isDone)
                        setEdit(!edit);
                }}>
                    <AiFillEdit></AiFillEdit>
                </span>
                <span className='icon' onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete></AiFillDelete>
                </span>
                <span className='icon'>
                    <MdDone onClick={(e) => {
                        handleDone(todo.id)
                    }}></MdDone>
                </span>
            </div>
        </form >
    )
}

export default SingleTodo
