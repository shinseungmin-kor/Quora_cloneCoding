import React from 'react';
import Navbar from './Navbar';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOptions />
        </div>
    );
}

export default Sidebar;