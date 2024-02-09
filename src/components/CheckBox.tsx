import {useState} from "react";
import {CheckBoxInterface} from "../types";
import InteractiveElement from "./InteractiveElement";

const CheckBox = (props: CheckBoxInterface) => {
    const [checkboxStatus, setCheckboxStatus] = useState("enabled")

    const handleClick = () => {
        if (checkboxStatus === "enabled") {
            setCheckboxStatus("disabled")
        } else {
            setCheckboxStatus("enabled")
        }
    }

    const simplifyEmojiOutput = () => {
        if (props.emoji.checkedEmoji && props.emoji.uncheckedEmoji) {
            return <span className={props.customClassName ? props.customClassName : undefined}
                         onClick={props.readOnly ? undefined : handleClick}>
            {checkboxStatus === "enabled" ? props.emoji.checkedEmoji : props.emoji.uncheckedEmoji}
            </span>
        } else {
            let flag = false
            if (checkboxStatus === "enabled" && !props.emoji.checkedEmoji) {
                flag = true
            }
            if (checkboxStatus === "disabled" && !props.emoji.uncheckedEmoji) {
                flag = true
            }
            return <span className={props.customClassName ? props.customClassName : undefined}
                         style={flag ? props.singleEmojiInvertStyle : props.singleEmojiNormalStyle}
                         onClick={props.readOnly ? undefined : handleClick}>
            {
                props.emoji.checkedEmoji ? props.emoji.checkedEmoji : props.emoji.uncheckedEmoji
            }
            </span>
        }
    }

    return <InteractiveElement graphicObject={simplifyEmojiOutput()} containerStyle={{
        display: "flex",
        flexDirection: "row",
        gap: "min(1vh, 1vw)",
        fontSize: "min(5vh, 5vw)",

        cursor: props.readOnly ? "not-allowed" : "pointer",
        userSelect: "none",
        opacity: props.readOnly ? 0.5 : 1,
    }} label={props.readOnly ? "readOnly" : checkboxStatus}/>
}

export default CheckBox