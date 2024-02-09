import {ReactElement} from "react";

const HorizontalStack = ({children}: { children: ReactElement[] }) => {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "min(1vw, 1vh)",
        margin: "min(1vw, 1vh)"
    }}>
        {children}
    </div>
}

export default HorizontalStack