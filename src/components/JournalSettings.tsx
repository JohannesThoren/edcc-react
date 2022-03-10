import React from "react";
import axios from "axios";

export default function JournalSettings(props: { journal_path: string }) {
    const [path, sethPath] = React.useState(props.journal_path);

    const save_journal_path = async () => {
        await axios.post("http://localhost:3500/api/settings/set/journal", {"journal_location": path}).then((response) => {
            console.log(response.data)
        })
    }

    return (

        <div className={"journal-settings settings-item"}>


            <h1>Journal Settings</h1>
            <input className={"input"} onChange={(e) => {
                sethPath(e.target.value)
            }} placeholder={"path to the journal directory"} value={path} type={"text"}/>

            <h4>Current path</h4>
            <pre className={"path-string"}>{path}</pre>
            <button className={"btn"} onClick={async () => await save_journal_path()}>save</button>
        </div>


    )
}