import { Box } from "@mui/system"
import styles from "./style";

type LayoutProps = {
    heading: string;
    children: React.ReactNode
}


const Layout = ({ heading, children }: LayoutProps) => {
  return (
   <Box sx={styles.wrapper}>   
   <Box sx={styles.heading}>My Form.</Box>
   <Box sx={styles.card}>{children}</Box>
    </Box>
  )
}

export default Layout   