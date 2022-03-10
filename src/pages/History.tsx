import React from "react";

interface IProps {}
interface IState {}

export default class History extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className={"history"}>

            </div>
        )
    };
}
