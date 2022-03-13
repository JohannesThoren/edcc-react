import React from "react";
import axios from "axios";

interface Obj {
    [key: string]: any
}

interface IProps {
    onSelectEventHandler: (e: object) => void
}


interface IState {
    events: Obj[],
    autoscroll: boolean
}

export default class HistoryEventList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            events: [],
            autoscroll: true

        }
    }

    fetchInterval: any;

    async componentDidMount() {

        await axios.get("http://localhost:3500/api/events/initial").then((response) => {
            let tempEvents = this.state.events;

            for (let e in response.data.results) {
                tempEvents.push(response.data.results[e])
            }

            this.setState({"events": tempEvents})
        })

        this.fetchInterval = setInterval(async () => {
            await axios.get("http://localhost:3500/api/events/latest").then((response) => {
                console.log(response.data.results)
                if (response.data.results.lenght > 0) {
                    let tempEvents = this.state.events;

                    for (let e in response.data.results) {
                        tempEvents.push(response.data.results[e])
                    }

                    this.setState({"events": tempEvents})
                }
            })
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.fetchInterval)
    }

    list: any

    componentDidUpdate() {
        if (this.state.autoscroll) {
            this.list.scrollTop = this.list.scrollHeight
        }
    }

    render() {
        return (
            <div>
                <div className={"controls"}>
                    <button onClick={() => {
                        this.setState({"autoscroll": !this.state.autoscroll})
                    }} className={"btn"}>Auto scroll: {this.state.autoscroll ? (
                        <span className={"emph"}>Active</span>) : (
                        <span className={"emph"}>not active</span>)} </button>
                </div>
                <div
                    ref={(e) => {
                    this.list = e
                }} className={"event-list"}>
                    {this.state.events && this.state.events.map((e, i) => (
                        <div tabIndex={this.state.events.length - i} key={`${i}`}
                             onFocus={() => this.props.onSelectEventHandler(e)}
                             className={"event-list-item"}><span>{e.timestamp}</span><span>{e.event}</span></div>
                    ))}
                </div>
            </div>
        )
    }
}