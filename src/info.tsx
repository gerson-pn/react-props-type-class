/* eslint-disable @typescript-eslint/no-useless-constructor */
import { Component } from "react";

type props = {
    titulo: string,
    texto: string
}
class Info extends Component<props> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
            </div>
        );
    }
}
export default Info

