import React from "react";
import ReactJson from "react-json-view";
import CurrentSystemData from "./CurrentSystemData";

interface IProps {
    selectedEvent: object
    currentSystem: object
}

interface IState {
}

export default class InformationPanel extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className={"information-panel"}>
                    {this.props.selectedEvent && (
                        <div className={"event-data"}>
                            <ReactJson src={this.props.selectedEvent} theme={"grayscale"}/>
                        </div>
                    )}

                    {this.props.selectedEvent && (
                        <div className={"current-system"}>
                            <CurrentSystemData currentSystem={this.props.currentSystem}/>
                        </div>
                    )}
                </div>

            </>
        )
    }
}