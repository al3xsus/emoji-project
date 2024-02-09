import {InteractiveElementInterface} from "../types";

const InteractiveElement = (props: InteractiveElementInterface) => {
    return <div style={props.containerStyle}>
        {props.graphicObject}
        <label style={props.labelStyle}>{props.label}</label>
    </div>
}

export default InteractiveElement