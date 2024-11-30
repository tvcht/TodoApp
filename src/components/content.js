import React, { useState, useEffect } from 'react';

const Content = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [status, setStatus] = useState('');
    let currentIndex = 1;

    const handleChangeInput = (value) => {
        setTodo(value);
    };

    const handleAddToTodolist = () => {
        setTodoList([...todoList, { id: Date.now(), todo: todo, status: 'todo' }]);
        setTodo('');
    };

    const handleSetStatus = (id) => {
        const updatedTodoList = todoList.map((item) => {
            if (item.id === id) {
                return { ...item, status: item.status === 'todo' ? 'done' : 'todo' };
            }
            return item;
        });
        setTodoList(updatedTodoList);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddToTodolist();
        }
    };

    const handleDeleteTask = (id) => {
        const updatedTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedTodoList);
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
    };

    useEffect(() => {
        setStatus('all');
    }, []);

    return (
        <>
            <div className='addTask' style={{ textAlign: 'center' }}>
                <div>
                    <input className = 'inputField'
                        type='text'
                        value={todo}
                        onChange={(e) => handleChangeInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder='Enter the task name'
                        style={{
                            border: '1px solid #FBBFF24',
                        }}
                    />
                    <button
                        onClick={handleAddToTodolist}
                        className={todo.state === 'done' ? 'done' : 'todo'}
                        style={{
                            padding: '10px',
                            backgroundColor: '#10B981',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '10px auto',
                            width: '100px',
                        }}
                    >
                        +
                    </button>
                </div>

                <div className='listTask'>
                    <div className='headerList'>
                        <h3 style={{ marginLeft: '10%', fontSize: '1.5rem' }}>List:</h3>
                        <select className='selectBtn' value={status} onChange={handleChangeStatus}>
                            <option value='all'>All</option>
                            <option value='todo'>To Do</option>
                            <option value='done'>Done</option>
                        </select>
                    </div>
                    <div className='listContent'>
                        {todoList.map((item) => {
                            if (status === 'all' || item.status === status) {
                                const index = currentIndex++;
                                return (
                                    <div
                                        key={item.id}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            margin: '1px 0px 0px 0px',
                                            paddingLeft:"20px",
                                            paddingRight: "20px",
                                            cursor: "pointer",
                                            borderBottom: "1px solid #9CA3AF"
                                        }}
                                    >
                                        <div
                                            onClick={() => handleSetStatus(item.id)}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                marginRight: "10px",
                                                color: item.status === "done" ? "#9CA3AF" : "#000",
                                                textDecoration: item.status === "done" ? "line-through" : "none"
                                            }}
                                        >
                                            <p>
                                                {index} : {item.todo}
                                            </p>
                                        </div>
                                        <button
                                            style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                color: "#DC2626",
                                                cursor: "pointer"
                                            }}
                                            onClick={() => handleDeleteTask(item.id)}
                                        >
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;