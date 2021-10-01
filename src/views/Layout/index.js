import React from 'react';
import Header from "../../components/Header";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className='p-4'>
                {children}
            </div>
        </>
    );
};

export default Layout;