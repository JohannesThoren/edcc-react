import React from "react";
import CurrentSystemData from "../components/CurrentSystemData";
import SystemBodies from "../components/SystemBodies";
import ReactJson from "react-json-view";
import ValuableBodies from "../components/ValuableBodies";

interface IState {
}

interface IProps {
    currentSystem: object
}

export default class DetailedSystemInformation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        }
    }

    onBodySelected = (body: object) => {
        this.setState({"selectedBody": body})
    }

    render() {
        return (
            <div className={"detailed-system-info"}>
                <div className={"current-system-detailed"}>
                    <CurrentSystemData currentSystem={this.props.currentSystem}/>
                </div>
                <div className={"system-bodies"}>
                    <SystemBodies currentSystem={this.props.currentSystem}/>
                </div>

                <div className={"valuable-bodies"}>
                    <ValuableBodies currentSystem={this.props.currentSystem}/>
                </div>
            </div>
        )
    }
}