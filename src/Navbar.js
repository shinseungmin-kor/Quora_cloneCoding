import React from 'react';
import './Navbar.css';
import {
    AssignmentIndOutlined, BorderAllRounded,
    Home, Language, NotificationsOutlined, PeopleAltOutlined, Search
} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';


function Navbar() {

    const user = useSelector(selectUser);

    return (
        <div className="navbar">
            <div className="qHeader_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png"
                    alt="" />
            </div>
            <div className="qHeader_icons">

                <div className="qHeader_icon">
                    <Home />
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded />
                </div>

                <div className="qHeader_icon">
                    <AssignmentIndOutlined />
                </div>

                <div className="qHeader_icon">
                    <PeopleAltOutlined />
                </div>
                <div className="qHeader_icon">
                    <NotificationsOutlined />

                </div>
            </div>

            <div className="qHeader_input">
                <input type="text" placeholder="Search" />
                <Search />
            </div>

            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                </div>
                <Language />
                <Button>Qeustion</Button>
            </div>
        </div>
    );
}

export default Navbar;