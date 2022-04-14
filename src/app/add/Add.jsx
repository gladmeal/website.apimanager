import React from "react";
import './Add.scss';
import { Outlet } from "react-router-dom";

export default class Add extends React.Component{
    render() {
        return <Outlet />
    }
};