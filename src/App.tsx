import './App.css';
import {Fragment, ReactElement, useState} from "react";
import CheckboxesArticle from "./articles/CheckboxesArticle";
import LoadersArticle from "./articles/LoadersArticle";
import ButtonsArticle from "./articles/ButtonsArticle";
import RadioGroupsArticle from "./articles/RadioGroupsArticle";
import CustomButton from "./components/CustomButton";

function App() {
    const [activeTab, setActiveTab] = useState("buttons")
    document.title = "Emoji Project"

    const getTabContent = () => {
        switch (activeTab) {
            case "buttons":
                return <ButtonsArticle/>
            case "checkboxes":
                return <CheckboxesArticle/>
            case "loaders":
                return <LoadersArticle/>
            case "radiogroups":
                return <RadioGroupsArticle/>
            default:
                return <article>
                    <header>
                        <h4>
                            Sorry, under construction
                        </h4>
                    </header>
                    <section>
                        <form>
                            <label htmlFor={"select-countries"}>
                                Select country
                            </label>
                            <select id={"select-countries"}>
                                <option>

                                </option>
                            </select>
                        </form>
                    </section>
                </article>
        }
    }

    const asideMenu = () => {
        const tabNames = ["buttons", "checkboxes", "loaders", "radiogroups", "misc"]
        const menuItems: ReactElement[] = []
        tabNames.forEach((tabName, index) => {
            menuItems.push(<CustomButton
                key={index}
                onClick={() => setActiveTab(tabName)}
                text={tabName.toLocaleUpperCase()}
                containerClassName={tabName === activeTab ? "midnight" : ""}
                containerStyle={{
                    justifyContent: "center",
                    fontSize: "small"
                }}
            />)
        })
        return menuItems
    }

    return (
        <Fragment>
            <header>
                <span className={"emoji-default"}>
                    🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤
                </span>
            </header>

            {/*<nav>*/}
            {/*    <header>*/}
            {/*        <h2>Choose Your Interest</h2>*/}
            {/*    </header>*/}
            {/*    <ul>*/}
            {/*        <li>Menu 1</li>*/}
            {/*        <li>Menu 2</li>*/}
            {/*        <li>Menu 3</li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}

            <main>
                <aside>

                    <h2>Menu</h2>

                    <section>
                        {
                            asideMenu()
                        }
                    </section>

                </aside>
                {
                    getTabContent()
                }
            </main>

            <footer>
                <span className={"emoji-default"}>
                    🔴 🟠 🟡 🟢 🔵 🟣 ⚫️ ⚪️ 🟤
                </span>
            </footer>
        </Fragment>
    );
}

export default App;
