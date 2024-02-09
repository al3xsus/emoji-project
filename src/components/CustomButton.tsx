import {SyntheticEvent} from "react";

interface CustomButtonInterface {
    text?: string,
    leftEmoji?: string,
    leftEmojiClassName?: string,
    rightEmoji?: string,
    rightEmojiClassName?: string,
    containerClassName?: string,
    disabled?: boolean,
    onClick?: (event: SyntheticEvent) => void,
    containerStyle?: object
}

const CustomButton = ({
                          text,
                          leftEmoji,
                          rightEmoji,
                          containerClassName,
                          onClick,
                          disabled,
                          rightEmojiClassName,
                          leftEmojiClassName,
                          containerStyle
                      }: CustomButtonInterface) => {
    const handleOnClickEvent = (event: SyntheticEvent) => {
        if (disabled) {
            return undefined
        } else {
            if (onClick) {
                onClick(event)
            }
        }
    }

    const handleContainerStyle = () => {
        let style = {}
        if (containerStyle) {
            style = {
                ...containerStyle,
                style
            }
        }
        if (disabled) {
            style = {
                ...style,
                cursor: "not-allowed",
                opacity: 0.5
            }
        }
        return style
    }

    return <div className={`button-container ${containerClassName}`} onClick={handleOnClickEvent}
                style={handleContainerStyle()}>
        {leftEmoji && <span className={leftEmojiClassName || undefined}>{leftEmoji}</span>}
        {text && text}
        {rightEmoji && <span className={rightEmojiClassName || undefined}>{rightEmoji}</span>}
    </div>
}

export default CustomButton