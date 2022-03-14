import React from "react";
import axios from "axios";

export default function JournalSettings(props: { journal_path: string, maximum_events: number }) {
    const [path, sethPath] = React.useState(props.journal_path);
    const [maximum_events, setMaximumEvents] = React.useState(props.maximum_events)
    const save_journal_path = async () => {
        await axios.post("http://0.0.0.0:3500/api/settings", {"journal_location": path}).then((response) => {
            console.log(response.data)
        })
    }

    const set_maximum_events = async () => {
        await axios.post("http://0.0.0.0:3500/api/settings", {"maximum_loaded_events": maximum_events}).then((response) => {
            console.log(response.data)
        })
    }

    return (

        <div className={"journal-settings settings-item"}>


            <h1>Journal Settings</h1>
            <input className={"input"} onChange={(e) => {
                sethPath(e.target.value)
            }} placeholder={"path to the journal directory"} value={path} type={"text"}/>

            <h4>Current Path</h4>
            <pre className={"path-string"}>{path}</pre>
            <button className={"btn"} onClick={async () => await save_journal_path()}>Save Path</button>

            <h4>Maximum Events To Load</h4>
            <input value={maximum_events} type={"number"} className={"input"} onChange={(e) => {setMaximumEvents(parseInt(e.target.value))}}/>
            <button className={"btn"} onClick={async () => await set_maximum_events()}>Set Maximum Events</button>

        </div>


    )
}