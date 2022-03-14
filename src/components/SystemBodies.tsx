import React from "react";
import axios from "axios";
import ReactJson from "react-json-view";


interface obj {
    [key: string]: any
}

interface IState {
    systemBodies: obj[],
    selectedBody: object
}

interface IProps {
    currentSystem: obj
}

export default class SystemBodies extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            systemBodies: [],
            selectedBody: {}
        }
    }

    async componentDidMount() {
        await axios.get(`https://www.edsm.net/api-system-v1/bodies?systemName=${this.props.currentSystem.name}`).then((response) => {
            this.setState({"systemBodies": response.data.bodies})

            console.log(response.data)
        })
    }

    render() {
        return (
            <>
                <div className={"system-bodies-list"}>
                    {this.state.systemBodies && this.state.systemBodies.map((e, i) => (
                        <div className={"item"} onClick={() => {this.setState({"selectedBody": e})}}>
                            <span>{e.name}</span>
                            <span>{e.bodyId}</span>
                            <span> {e.type}</span>
                        </div>
                    ))}
                </div>
                <div className={"body-data"}>

                    <ReactJson src={this.state.selectedBody} theme={"grayscale"}/>

                </div>

            </>
        )
    }
}