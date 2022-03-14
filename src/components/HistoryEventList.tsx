import React from "react";
import axios from "axios";

interface Obj {
    [key: string]: any
}

interface IProps {
    onSelectEventHandler: (e: object) => void
    maximum_loaded_events: number,
}


interface IState {
    events: Obj[],
    autoscroll: boolean,
}

export default class HistoryEventList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            events: [],
            autoscroll: true,
        }
    }

    fetchInterval: any;
    list: any

    push_event_to_list = (events: Obj[]) => {
        if (events.length !== undefined) {
            let tmp_list = this.state.events


            for (let e in events) {
                // this checks if the length of the maximum loaded events is more or equal to the allowed amount.
                // if it is triggered it will remove the first element of the list before adding the incoming one.
                if (this.state.events.length >= this.props.maximum_loaded_events) {
                    tmp_list.splice(0, 1)
                }

                tmp_list.push(events[e])


            }
            // auto scroll
            if (this.state.autoscroll) {
                this.list.scrollTop = this.list.scrollHeight
            }
            this.setState({"events": tmp_list})
        }
    }

    async componentDidMount() {


        // TODO create a maximum events variable, this should be accessible through the settings api call
        await axios.get("http://0.0.0.0:3500/api/events/initial").then((response) => {
            this.push_event_to_list(response.data.results)
        })

        this.fetchInterval = setInterval(async () => {
            await axios.get("http://0.0.0.0:3500/api/events/latest").then((response) => {
                if (response.data.results.length !== 0 && response.data.results.length !== undefined && response.data.results.length > 0) {
                    console.log(response.data.results)
                    this.push_event_to_list(response.data.results)
                }
            })
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.fetchInterval)
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
                <div key={this.state.events.length}
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