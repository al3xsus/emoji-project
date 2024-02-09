import CustomLoaderWrapper from "../components/CustomLoaderWrapper";

const LoadersArticle = () => {
    return <article>
        <header>
            <h1>Loaders</h1>
            <span className={"emoji-default"}>⚙️ 🌟 ☀️</span>
        </header>
        <section>
            <CustomLoaderWrapper emoji={"⚙️"}/>
        </section>
        <section>
            <CustomLoaderWrapper emoji={"🌟"}/>
        </section>
        <section>
            <CustomLoaderWrapper emoji={"☀️"}/>
        </section>
    </article>
}

export default LoadersArticle