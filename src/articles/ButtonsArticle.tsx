import CustomButton from "../components/CustomButton";
import HorizontalStack from "../components/HorizontalStack";
import VerticalStack from "../components/VerticalStack";

const ButtonsArticle = () => {
    const emojiList = ["🚀", "💀", "☠️", "🤖", "👾", "🎮", "🛜", "🪪", "🟰", "🛞", "🛟", "🪬", "🪩"]
    const colors = ["white", "grey", "blue", "purple", "midnight"]

    return <article>
        <header>
            <h1>Buttons</h1>
            <span className={"emoji-default"}>
                🚀 💀 ☠️ 🤖 👾 🎮 🛜
            </span>
        </header>

        {/*<section>*/}
        {/*  <div className="dark">*/}
        {/*    <div className="neu">*/}
        {/*      <h1>Dark</h1>*/}
        {/*      <p>Neu.</p>*/}
        {/*    </div>*/}
        {/*    <div className="glass">*/}
        {/*      <h1>Dark</h1>*/}
        {/*      <p>Glass.</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="light">*/}
        {/*    <div className="neu">*/}
        {/*      <h1>Light</h1>*/}
        {/*      <p>Neu.</p>*/}
        {/*    </div>*/}
        {/*    <div className="glass">*/}
        {/*      <h1>Light</h1>*/}
        {/*      <p>Glass.</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}
        <section>
            <HorizontalStack>
                <VerticalStack>
                    {
                        colors.map((color, index) => {
                            return <CustomButton text={"Let's go!"} leftEmoji={"🎮"} rightEmoji={"🤖"} key={index}
                                                 containerClassName={color}/>
                        })
                    }
                </VerticalStack>
                <VerticalStack>
                    {
                        colors.map((color, index) => {
                            return <CustomButton text={"Let's go!"} leftEmoji={"🚀"} rightEmoji={"💀"} key={index}
                                                 containerClassName={color}/>
                        })
                    }
                </VerticalStack>
            </HorizontalStack>
        </section>
    </article>
}

export default ButtonsArticle