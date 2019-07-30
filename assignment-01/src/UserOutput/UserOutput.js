import React from 'react';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p><b>Username:</b> {props.userName}</p>
            <p><i>And then here we would show userOutput02</i></p>
        </div>
    );
};

export default userOutput;