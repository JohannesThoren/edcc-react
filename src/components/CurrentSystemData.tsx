import React from "react";

interface obj {
    [key: string]: any
}

interface IProps {
    currentSystem: obj;
}

interface IState {
}


export default class CurrentSystemData extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}

        console.log(this.props.currentSystem.name)
    }

    render() {
        return (
            <>
                {this.props.currentSystem && (
                    <>
                        <div className={"item"}>
                            <span>System Name</span>
                            <span className={"emph"}>{this.props.currentSystem.name}</span>
                        </div>
                        <div className={"item"}>
                            <span>System ID</span>
                            <span className={"emph"}>{this.props.currentSystem.id}</span>
                        </div>
                        <div className={"item"}>
                            <span>System ID64</span>
                            <span className={"emph"}>{this.props.currentSystem.id64}</span>
                        </div>
                        <div className={"item"}>
                            <span>System Coords</span>
                            <span className={"emph"}>x: {this.props.currentSystem.coords.x}</span>
                            <span className={"emph"}>y: {this.props.currentSystem.coords.y}</span>
                            <span className={"emph"}>z: {this.props.currentSystem.coords.z}</span>
                        </div>
                        <div className={"item"}>
                            <span>System Permit</span>
                            {!this.props.currentSystem.requirePermit ? (
                                <span className={"emph"}>Does not require permit</span>
                            ) : (<span className={"emph"}>System requires permit</span>)}
                        </div>
                        <div className={"item"}>
                            <span>Primary Star</span>
                            <span className={"emph"}>{this.props.currentSystem.primaryStar.name}</span>
                        </div>
                        <div className={"item"}>
                            <span>Primary Star Type</span>
                            <span className={"emph"}>{this.props.currentSystem.primaryStar.type}</span>
                        </div>
                        <div className={"item"}>
                            <span>Primary Star Scoopable</span>
                            {this.props.currentSystem.primaryStar.isScoopable ? (
                                <span className={"emph"}>Star is scoopable</span>
                            ) : (<span className={"emph"}>Star is not scoopable</span>)}
                        </div>
                        <div className={"item"}>
                            <span>Allegiance</span>
                            <span className={"emph"}>{this.props.currentSystem.information.allegiance}</span>
                        </div>
                        <div className={"item"}>
                            <span>Government</span>
                            <span className={"emph"}>{this.props.currentSystem.information.government}</span>
                        </div>
                        <div className={"item"}>
                            <span>Faction</span>
                            <span className={"emph"}>{this.props.currentSystem.information.faction}</span>
                        </div>
                        <div className={"item"}>
                            <span>Faction State</span>
                            <span className={"emph"}>{this.props.currentSystem.information.factionState}</span>
                        </div>
                        <div className={"item"}>
                            <span>Population</span>
                            <span className={"emph"}>{this.props.currentSystem.information.population}</span>
                        </div>
                        <div className={"item"}>
                            <span>Security</span>
                            <span className={"emph"}>{this.props.currentSystem.information.security}</span>
                        </div>
                        <div className={"item"}>
                            <span>Economy</span>
                            <span className={"emph"}>{this.props.currentSystem.information.economy}</span>
                        </div>
                        <div className={"item"}>
                            <span>Second Economy</span>
                            <span className={"emph"}>{this.props.currentSystem.information.secondEconomy}</span>
                        </div>
                        <div className={"item"}>
                            <span>Reserve</span>
                            <span className={"emph"}>{this.props.currentSystem.information.reserve}</span>
                        </div>
                    </>
                )}
            </>
        )
    }
}