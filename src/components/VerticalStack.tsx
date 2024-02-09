import {ReactElement} from "react";

const VerticalStack = ({children}: { children: ReactElement[] }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "min(1vw, 1vh)",
        margin: "min(1vw, 1vh)"
    }}>
        {children}
    </div>
}

export default VerticalStack