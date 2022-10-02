import React from 'react';

//Por medio children le decimos a Layout que va a recibir y anidar varios componentes
const Layout = ({ children }) => {
    return (
        <div className='layout'>
            {children}
        </div>
    );
};

export default Layout;