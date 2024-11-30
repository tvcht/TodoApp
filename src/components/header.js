import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='intro'>
                <p>Let's add what you have to do!</p>
                <p>
                    Fill the input and click the button or press "Enter" to add a new task
                    to the list
                </p>
                <p>To mark a task as completed, just click directly on the task</p>
            </div>
        </div>
    );
};

export default Header;