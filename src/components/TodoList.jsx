import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetodo, toggleComplete } from '../redux/todo';
import Button from './Button';

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [hoveredTodo, setHoveredTodo] = useState(null);

    const handleDelete = (id) => {
        dispatch(removetodo({ id }));
    };

    const handleCheck = (id, completed) => {
        dispatch(toggleComplete({ id, completed }));
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            {todos.length ? (
                <ul className="divide-y divide-gray-300">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between py-4 relative"
                            onMouseEnter={() => setHoveredTodo(todo.id)}
                            onMouseLeave={() => setHoveredTodo(null)}
                        >
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-blue-500"
                                checked={todo.completed}
                                onChange={() => handleCheck(todo.id, todo.completed)}
                            />
                            <span
                                className={`ml-3 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}
                            >
                                {todo.title}
                            </span>
                            {hoveredTodo === todo.id && (
                                <Button
                                    className="text-red-500 hover:text-red-700 focus:outline-none absolute right-0 top-0 -mt-2 -mr-8 opacity-0 transition-opacity duration-200"
                                    onClick={() => handleDelete(todo.id)}
                                    text="X"
                                    color="green"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M15.293 4.293a1 1 0 011.414 1.414L11.414 10l5.293 5.293a1 1 0 11-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 11-1.414-1.414L8.586 10 3.293 4.707a1 1 0 111.414-1.414L10 8.586l5.293-5.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Button>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center">No todos found.</p>
            )}
        </div>
    );
}

export default TodoList;
