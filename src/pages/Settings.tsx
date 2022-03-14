import React from "react";
import JournalSettings from "../components/JournalSettings";
import axios from "axios";
import CommanderSettings from "../components/CommanderSettings";

interface IProps {
}


interface IState {
    settings: any | undefined
}

export default class Settings extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            settings: undefined
        };
    }


    async componentDidMount() {
        await axios.get("http://localhost:3500/api/settings").then((response) => {
            this.setState({"settings": response.data.results})
        })
    }

    render() {
        return (
            <>
                {this.state.settings && (
                    <div className={"settings"}>
                        <JournalSettings journal_path={this.state.settings.journal_location} maximum_events={this.state.settings.maximum_loaded_events}/>
                        <CommanderSettings currentCommander={this.state.settings.current_commander} commanders={this.state.settings.commanders}/>
                    </div>

                )
                }
            </>
        )
    };


}
