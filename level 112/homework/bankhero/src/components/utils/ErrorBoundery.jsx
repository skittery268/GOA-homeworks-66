import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { error: null };
        this.reset = this.reset.bind(this)
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    reset() {
        this.setState({error: null})
    }

    render() {
        if(this.state.error) {
            return (
                <div>
                    <p>Error occured</p>
                    <button onClick={this.reset}>Reset</button>
                </div>
            )
        }

        return this.props.children;
    }
}