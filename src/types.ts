import {JSX} from "react";

export interface EmojiObject {
    checkedEmoji?: string,
    uncheckedEmoji?: string,
}

export interface InteractiveElementInterface {
    graphicObject: JSX.Element,
    label?: string,
    containerStyle?: object,
    labelStyle?: object
}

export interface CheckBoxInterface {
    emoji: EmojiObject,
    label?: string,
    readOnly?: boolean,
    customClassName?: string,
    singleEmojiInvertStyle?: object,
    singleEmojiNormalStyle?: object
}

export interface RadioGroupInterface {
    emoji: EmojiObject,
    customClassName?: string,
    singleEmojiInvertStyle?: object,
    singleEmojiNormalStyle?: object
}