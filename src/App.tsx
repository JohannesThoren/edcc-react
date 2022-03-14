import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout"
import Settings from "./pages/Settings"
import History from "./pages/History"
import DetailedSystemInformation from "./pages/DetailedSystemInformation"
import "./style/style.scss"
import axios from "axios";
import Home from "./pages/Home";

interface obj {
    [key: string]: any
}

interface IProps {
}

interface IState {
    currentSystem: obj
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            currentSystem: {}
        }
    }

    fetchCurrentSystemInterval: any;

    async componentDidMount() {
        this.fetchCurrentSystemInterval = setInterval(async () => {
            await axios.get("http://0.0.0.0:3500/api/system").then((response: any) => {
                this.setState({"currentSystem": response.data})
            })
        }, 1000)
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout/>

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/history" element={<History currentSystem={this.state.currentSystem}/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/detailedSystemInfo"
                               element={<DetailedSystemInformation key={this.state.currentSystem.name}
                                                                   currentSystem={this.state.currentSystem}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
