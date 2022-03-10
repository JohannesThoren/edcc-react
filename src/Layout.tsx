import {Outlet, Link} from "react-router-dom";
import React from "react";

interface IState {
}

interface IProps {
}

export default class Layout extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <nav className={"nav"}>
                    <Link className={"btn"} to={"/"}>Home</Link>
                    <Link className={"btn"} to={"/history"}>History</Link>
                    <Link className={"btn"} to={"/settings"}>Settings</Link>
                </nav>
                <div className={"view-wrapper"}>
                    <Outlet/>
                </div>
            </>
        )
    }
}