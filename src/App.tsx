import * as React from "react";

export default class App extends React.Component<{
    name: string
}>{
    render() {
        return (
            <div className="header-app">
                {this.props.name}
            </div>
        )
    }
}