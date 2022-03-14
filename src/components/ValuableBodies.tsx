import React from "react";
import axios from "axios";


interface obj {
    [key: string]: any
}

interface IState {
    valuableBodies: obj[]
    data: obj
}

interface IProps {
    currentSystem: obj
}

export default class ValuableBodies extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            valuableBodies: [],
            data: {}
        }
    }

    async componentDidMount() {
        await axios.get(`https://www.edsm.net/api-system-v1/estimated-value?systemId=${this.props.currentSystem.id}`).then((response) => {
            this.setState({"data": response.data})
            this.setState({"valuableBodies": response.data.valuableBodies})
        })
    }

    render() {
        return (
            <>
                {this.state.data &&
                    (<>
                        <p>{this.state.data.name} value: <span
                            className={"emph"}>{this.state.data.estimatedValue}</span> CR</p>
                        <p>{this.state.data.name} value mapped: <span
                            className={"emph"}>{this.state.data.estimatedValueMapped}</span> CR</p></>)}
                <h4>valueable bodies </h4>

                <div className={"body-list"}>
                    {this.state.valuableBodies && this.state.valuableBodies.map((e, i) =>
                        (
                            <div className={"body"}>
                                <span>{e.bodyName}</span>
                                <span>Max Value: <span className={"emph"}>{e.valueMax}</span> CR</span>
                            </div>)
                    )}
                </div>
            </>
        )
    }
}