import React from "react";

interface IProps {
}

interface IState {
    events: object[]
}

export default class History extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            events: []
        }
    }

    render() {
        return (
            <div className={"history"}>
                <div className={"event-list"}></div>
                <div className={"information-panel"}></div>
            </div>
        )
    };
}
