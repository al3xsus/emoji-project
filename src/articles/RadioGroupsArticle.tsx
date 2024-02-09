import RadioGroup from "../components/RadioGroup";
import HorizontalStack from "../components/HorizontalStack";

const RadioGroupsArticle = () => {
    return <article>
        <header>
            <h1>Radiogroups</h1>
            <span className={"emoji-default"}>✔️ ❌ ✖️ ✅ ☑️ 🔲 🔳 ◼️ ◻️ ☒ ☐ 🔘</span>
        </header>
        <section>
            <header>
                <h4>Altered</h4>
            </header>
            <HorizontalStack>
                <RadioGroup emoji={{uncheckedEmoji: "🔘"}}
                            singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}
                            singleEmojiNormalStyle={{filter: "grayscale(100%)"}}/>
                <RadioGroup emoji={{uncheckedEmoji: "🔲"}}
                            singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}/>
                <RadioGroup emoji={{checkedEmoji: "◼️", uncheckedEmoji: "◻️"}}
                            singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}/>
                <RadioGroup emoji={{checkedEmoji: "☒", uncheckedEmoji: "☐"}} customClassName={"emoji-purple"}/>
                <RadioGroup emoji={{checkedEmoji: "☒", uncheckedEmoji: "☐"}}/>
            </HorizontalStack>
        </section>
    </article>
}

export default RadioGroupsArticle