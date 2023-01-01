import { SxProps } from "@mui/material";

const styles: { [key: string]: SxProps; 
} ={
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    heading: {
     fontSize: "32px",
     margin: "2rem"
    },
    card: {
     background: "white",
     display: "flex",
     flexDirection: "column",
     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
     width: "30%",
     padding: "2%"
    },
}
export default styles