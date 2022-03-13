import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./Layout"
import Settings from "./pages/Settings"
import History from "./pages/History"
import DetailedSystemInformation from "./pages/DetailedSystemInformation"
import "./style/style.scss"
import axios from "axios";

interface IProps {
}

interface IState {
    currentSystem: object
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
            await axios.get("http://localhost:3500/api/system").then((response: any) => {
                console.log(response.data)
                this.setState({"currentSystem": response.data})
            })
        }, 1000)
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/history" element={<History currentSystem={this.state.currentSystem}/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/detailedSystemInfo" element={<DetailedSystemInformation/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
