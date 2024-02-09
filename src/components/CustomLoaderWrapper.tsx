import {ReactElement, useState} from "react";
import CustomButton from "./CustomButton";

const loaderClassNames = ["white", "grey", "blue", "purple", "midnight"]
const emojiClassNames = ["emoji-purple", "emoji-grey", "emoji-default"]

const CustomLoaderWrapper = ({emoji}: { emoji: string }): ReactElement => {
    const [loaderBackground, setLoaderBackground] = useState("blue")
    const [emojiStyle, setEmojiStyle] = useState("emoji-default")

    const disabledChoice = (loaderClassName: string, emojiClassName: string) => {
        if (loaderClassName === "grey" && emojiClassName === "emoji-grey") {
            return true
        }
        if (loaderClassName === "purple" && emojiClassName === "emoji-purple") {
            return true
        }
        return false
    }
    const BackgroundButtons = () => {
        return <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "min(1vh, 1vw)"}}>
            <h4>
                Background variants
            </h4>
            {
                loaderClassNames.map((loaderClassName, index) => {
                    return <CustomButton key={index} disabled={disabledChoice(loaderClassName, emojiStyle)}
                                         onClick={() => setLoaderBackground(loaderClassName)}
                                         containerClassName={loaderBackground === loaderClassName ? loaderClassName : ""}
                                         text={loaderClassName}/>
                })
            }
        </div>
    }
    const EmojiButtons = () => {
        return <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "min(1vh, 1vw)"}}>
            <h4>
                Emoji variants
            </h4>
            <CustomButton disabled={disabledChoice(loaderBackground, "emoji-purple")}
                          onClick={() => setEmojiStyle("emoji-purple")}
                          containerClassName={"white"}
                          rightEmoji={emoji}
                          rightEmojiClassName={"emoji-purple"}
            />
            <CustomButton disabled={disabledChoice(loaderBackground, "emoji-grey")}
                          onClick={() => setEmojiStyle("emoji-grey")}
                          containerClassName={"midnight"}
                          rightEmoji={emoji}
                          rightEmojiClassName={"emoji-grey"}
            />
            <CustomButton onClick={() => setEmojiStyle("emoji-default")}
                          containerClassName={"white"}
                          rightEmoji={emoji}
                          rightEmojiClassName={"emoji-default"}
            />
        </div>
    }
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "min(1vh, 1vw)",
        padding: "min(1vh, 1vw)"
    }}>
        <BackgroundButtons/>
        <div className={`loader ${loaderBackground}`} style={{width: "95%"}}>
            <div className={"emoji-container"}>
                <span className={emojiStyle}>{emoji}</span>
            </div>
            <label>
                Please, stand by...
            </label>
        </div>
        <EmojiButtons/>
    </div>
}

export default CustomLoaderWrapper