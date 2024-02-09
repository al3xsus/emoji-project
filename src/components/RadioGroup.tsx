import {RadioGroupInterface} from "../types";
import InteractiveElement from "./InteractiveElement";
import {useState} from "react";

interface RadioOptions {
    option1: { checked: boolean; label: string; value: string };
    option2: { checked: boolean; label: string; value: string };
    option3: { checked: boolean; label: string; value: string };
}

const RadioGroup = (props: RadioGroupInterface) => {
    const [radioOptions, setRadioOption] = useState<RadioOptions>({
        option1: {label: 'Option 1', value: '1', checked: false},
        option2: {label: 'Option 2', value: '2', checked: false},
        option3: {label: 'Option 3', value: '3', checked: false}
    })

    const handleClick = (key: string) => {
        let newOptions = {...radioOptions}
        if (!newOptions[key as keyof RadioOptions].checked) {
            newOptions[key as keyof RadioOptions].checked = true
            Object.keys(newOptions).forEach((internalKey) => {
                if (internalKey !== key) {
                    newOptions[internalKey as keyof RadioOptions].checked = false
                }
            })
            setRadioOption(newOptions)
        }
    }

    const simplifyEmojiOutput = (key: string, checked: boolean) => {
        if (props.emoji.checkedEmoji && props.emoji.uncheckedEmoji) {
            return <span className={props.customClassName ? props.customClassName : undefined}
                         onClick={() => handleClick(key)}>
            {checked ? props.emoji.checkedEmoji : props.emoji.uncheckedEmoji}
            </span>
        } else {
            let flag = false
            if (checked && !props.emoji.checkedEmoji) {
                flag = true
            }
            if (!checked && !props.emoji.uncheckedEmoji) {
                flag = true
            }
            return <span className={props.customClassName ? props.customClassName : undefined}
                         style={flag ? props.singleEmojiInvertStyle : props.singleEmojiNormalStyle}
                         onClick={() => handleClick(key)}>
            {
                props.emoji.checkedEmoji ? props.emoji.checkedEmoji : props.emoji.uncheckedEmoji
            }
            </span>
        }
    }

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        {
            Object.keys(radioOptions).map((key) => (
                <InteractiveElement
                    graphicObject={simplifyEmojiOutput(key, radioOptions[key as keyof RadioOptions].checked)}
                    containerStyle={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "min(1vh, 1vw)",
                        fontSize: "min(5vh, 5vw)",

                        cursor: "pointer",
                        userSelect: "none",
                    }} label={radioOptions[key as keyof RadioOptions].label} key={key}/>
                // <CheckBox key={key} label={radioOptions[key as keyof RadioOptions].label} emoji={props.emoji}/>
            ))
        }
    </div>
}

export default RadioGroup