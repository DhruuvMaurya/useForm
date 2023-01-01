import { SxProps } from "@mui/material";

const styles: { [key: string]: SxProps; 
} ={
    inputWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "15px"
    },
    label: {
        fontSize: "16px",
        color: "#737373"
    },
    input: {
        border: "1px solid rgba(43, 43, 43, 0.2)",
        width: "100%",
        padding: "10px",
        borderRadius: "6px",
        fontSize: "16px",
        height: "42px"
    }
}

export default styles