import React from "react"
import {
    Container,
    Grid,
    Box,
    Typography,
    styled,
    LinearProgress
} from "@mui/material"
import LinearProgressBar from "../components/LinearProgressBar";

const StyledHomeRoot = styled("section")(({ theme, ismobile }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: ismobile ? "auto" : "100vh",
    marginBottom: "1rem",
}));

const StyledHomeContainer = styled(Container)(({ theme, ismobile }) => ({
    display: "flex !important",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    width: "unset",
    marginTop: "2rem",
}));

const StyledHomeGrid = styled(Grid)(({ ismobile }) => ({
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    padding: "1rem",
    marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHomeGridItem = styled(Grid)(({ theme }) => ({
    animation: "fadeIn",
    animationDuration: "2s",
    paddingLeft: "0 !important",
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    //   margin: "0",
    //   order: "2",
    //   textAlign: "center",
    //   padding: "2rem",
    //   paddingRight: "0 !important"
    // },
}));

const StyledHomeTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold !important",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(0),
    textAlign: "center",
    fontSize: "clamp(50px, 7vw, 100px) !important",
}));

const StyledHomeSubTitle = styled(Typography)(({ theme }) => ({
    fontSize: "clamp(20px, 2vw, 26px) !important",
    color: theme.palette.text.primary,
    textAlign: "center",

}));

const Home = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <StyledHomeRoot>
            <StyledHomeContainer>
                <StyledHomeGrid container>
                    <StyledHomeGridItem
                        item
                        lg={12}
                    >
                        <StyledHomeTitle component="h1">
                            UNDER CONSTRUCTION
                        </StyledHomeTitle>

                        <StyledHomeSubTitle component="h1">
                            SITE NEARLY READY
                        </StyledHomeSubTitle>

                        <LinearProgressBar />
                        
                    </StyledHomeGridItem>

                </StyledHomeGrid>
            </StyledHomeContainer>
        </StyledHomeRoot>
    )
}

export default Home