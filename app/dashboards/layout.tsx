import React from 'react';
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <p>This is the dashboard layout</p>
            {children}
        </div>
    );
};
export default Layout;
