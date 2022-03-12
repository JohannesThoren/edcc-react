import React from "react";
import axios from "axios"
import ReactJson from 'react-json-view'
import HistoryEventList from "../components/HistoryEventList";
import InformationPanel from "../components/InformationPanel";


interface IProps {
    currentSystem: object
}

interface IState {
    selectedEvent: object
}

export default class History extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedEvent: {},
        }
    }

    onEventSelectHandler = (e: object) => {
        console.log("test");
        this.setState({selectedEvent: e})
    }


    render() {


        return (
            <div className={"history"}>
                <HistoryEventList onSelectEventHandler={this.onEventSelectHandler}/>
                <InformationPanel currentSystem={this.props.currentSystem} selectedEvent={this.state.selectedEvent}/>
            </div>
        )
    };
}
