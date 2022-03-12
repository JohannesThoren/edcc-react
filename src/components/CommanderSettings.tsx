import axios from "axios";
import {useState} from "react";


interface Obj {
    [key: string]: any
}

export default function CommanderSettings(props: { currentCommander: string, commanders: Obj[] }) {

    const [currentCommander, setCurrentCommander] = useState(props.currentCommander)
    const [newCommanderName, setNewCommanderName] = useState("")
    const [newCommanderInaraKey, setNewCommanderInaraKey] = useState("")
    const [newCommanderInaraName, setNewCommanderInaraName] = useState("")
    const [newCommanderEdsmKey, setNewCommanderEdsmKey] = useState("")
    const [newCommanderEdsmName, setNewCommanderEdsmName] = useState("")

    const [Waiting, setWaiting] = useState(false)

    const setNewCommanderInfo = async () => {
        let newCommander = {
            "name": newCommanderName,
            "edsm_key": newCommanderEdsmKey,
            "edsm_name": newCommanderEdsmName,
            "inara_key": newCommanderInaraKey,
            "inara_name": newCommanderInaraName,
        }
        setWaiting(true)

        await axios.post("http://localhost:3500/api/set/settings/newcommander", newCommander).then((response) => {
            console.log(response)
            setWaiting(false)

        })
    }

    const setCurrentCommanderCall = async (commanderName: string) => {
        setWaiting(true)

        await axios.post("http://localhost:3500/api/set/settings/currentcommander", {"commander": commanderName}).then((response) => {
            console.log(response)
            setCurrentCommander(response.data.commander)
            setWaiting(false)
        })

    }

    return (

        <div className={"commander-settings settings-item"}>
            {Waiting && (<p className={"emph"}>Waiting for response...</p>)}

            <h1>Commander Settings</h1>
            <p>current commander: <span className={"emph"}>{currentCommander}</span></p>
            <h4>Commanders</h4>
            <div className={"commander-list"}>
                {props.commanders && props.commanders.map((c, i) => {
                    const name = c.name

                    return (<div key={c.name} className={"commander-list-item"}>
                        <span>{name}</span>
                        {/*<button className={"btn"}>Delete</button>*/}
                        <button className={"btn"} onClick={async () => await setCurrentCommanderCall(name)}>Select
                        </button>
                    </div>)
                })}
            </div>
            <h4>New Commander</h4>
            <input className={"input"} onChange={(e) => setNewCommanderName(e.target.value)} type="text"
                   placeholder={"Name"}/>
            <input className={"input"} onChange={(e) => setNewCommanderInaraKey(e.target.value)} type="text"
                   placeholder={"Inara API Key"}/>
            <input className={"input"} onChange={(e) => setNewCommanderInaraName(e.target.value)} type="text"
                   placeholder={"Inara Name"}/>
            <input className={"input"} onChange={(e) => setNewCommanderEdsmKey(e.target.value)} type="text"
                   placeholder={"EDSM API Key"}/>
            <input className={"input"} onChange={(e) => setNewCommanderEdsmName(e.target.value)} type="text"
                   placeholder={"EDSM Name"}/>
            <button className={"btn"} onClick={() => setNewCommanderInfo()}>Save Commander</button>

        </div>
    )
}