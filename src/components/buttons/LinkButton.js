import React from 'react';

const LinkButton = ({ label, link }) => {
    const handleClick = () => {
        window.open(link, '_blank'); // Opens in a new tab
    };

    return (
        <button
            onClick={handleClick}
            style={{
                margin: '10px',
                padding: '10px 20px',
                backgroundColor: '#5205b0',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
};

export default LinkButton;