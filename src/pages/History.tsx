import React from "react";
import HistoryEventList from "../components/HistoryEventList";
import InformationPanel from "../components/InformationPanel";
import axios from "axios";


interface IProps {
    currentSystem: object
}

interface IState {
    selectedEvent: object
    maximum_loaded_events: number,
}

export default class History extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            selectedEvent: {},
            maximum_loaded_events: 100,

        }
    }

    onEventSelectHandler = (e: object) => {
        this.setState({selectedEvent: e})
    }


    async componentDidMount() {
        await axios.get("http://localhost:3500/api/settings").then((response) => {
            this.setState({"maximum_loaded_events": response.data.results.maximum_loaded_events})
        })
    }

    render() {


        return (
            <div className={"history"}>
                {this.state.maximum_loaded_events ? (<HistoryEventList onSelectEventHandler={this.onEventSelectHandler} maximum_loaded_events={this.state.maximum_loaded_events}/>):(<HistoryEventList onSelectEventHandler={this.onEventSelectHandler} maximum_loaded_events={1000}/>)}
                <InformationPanel currentSystem={this.props.currentSystem} selectedEvent={this.state.selectedEvent}/>
            </div>
        )
    };
}
