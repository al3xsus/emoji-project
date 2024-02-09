import CheckBox from "../components/CheckBox";
import HorizontalStack from "../components/HorizontalStack";
import VerticalStack from "../components/VerticalStack";

const CheckboxesArticle = () => {
    return <article>
        <header>
            <h1>Checkboxes</h1>
            <span className={"emoji-default"}>✔️ ❌ ✖️ ✅ ☑️ 🔲 🔳 ◼️ ◻️ ☒ ☐ 🔘</span>
        </header>
        <section>
            <header>
                <h4>
                    Unaltered
                </h4>
            </header>

            <HorizontalStack>
                <VerticalStack>
                    <CheckBox emoji={{checkedEmoji: "✔️", uncheckedEmoji: "❌"}}/>
                    <CheckBox emoji={{checkedEmoji: "✔️", uncheckedEmoji: "✖️"}}/>
                    <CheckBox emoji={{checkedEmoji: "✔️", uncheckedEmoji: "✖️"}} readOnly={true}/>
                </VerticalStack>
                <VerticalStack>
                    <CheckBox emoji={{checkedEmoji: "✅", uncheckedEmoji: "❌"}}/>
                    <CheckBox emoji={{checkedEmoji: "✅", uncheckedEmoji: "✖️"}}/>
                    <CheckBox emoji={{checkedEmoji: "✅", uncheckedEmoji: "✖️"}} readOnly={true}/>
                </VerticalStack>
                <VerticalStack>
                    <CheckBox emoji={{checkedEmoji: "☑️", uncheckedEmoji: "❌"}}/>
                    <CheckBox emoji={{checkedEmoji: "☑️", uncheckedEmoji: "✖️"}}/>
                    <CheckBox emoji={{checkedEmoji: "☑️", uncheckedEmoji: "✖️"}} readOnly={true}/>

                </VerticalStack>
            </HorizontalStack>
        </section>
        <section>
            <header>
                <h4>Altered</h4>
            </header>

            <HorizontalStack>
                <VerticalStack>
                    <CheckBox emoji={{uncheckedEmoji: "🔲"}}
                              singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}/>
                    <CheckBox emoji={{checkedEmoji: "◼️"}}
                              singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}/>
                    <CheckBox emoji={{checkedEmoji: "◼️", uncheckedEmoji: "◻️"}} readOnly={true}/>
                </VerticalStack>
                <VerticalStack>
                    <CheckBox emoji={{checkedEmoji: "☒", uncheckedEmoji: "☐"}} customClassName={"emoji-purple"}/>
                    <CheckBox emoji={{checkedEmoji: "☒", uncheckedEmoji: "☐"}} customClassName={"emoji-grey"}/>
                    <CheckBox
                        emoji={{checkedEmoji: "☒", uncheckedEmoji: "☐"}}
                        customClassName={"emoji-purple"}
                        readOnly={true}
                    />
                </VerticalStack>
                <VerticalStack>
                    <CheckBox emoji={{uncheckedEmoji: "🔘"}}
                              singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}
                              singleEmojiNormalStyle={{filter: "grayscale(100%)"}}/>
                    <CheckBox emoji={{uncheckedEmoji: "🔘"}}
                              singleEmojiInvertStyle={{filter: "grayscale(100%) invert(100%)"}}
                              singleEmojiNormalStyle={{filter: "grayscale(100%)"}} readOnly={true}/>
                </VerticalStack>
            </HorizontalStack>

        </section>
    </article>
}

export default CheckboxesArticle