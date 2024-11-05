import React from "react"
import {
    Container,
    Grid,
    Typography,
    styled
} from "@mui/material"
import LinearProgressBar from "../components/LinearProgressBar";
import SocialLinks from "../components/SocialLinks";

const StyledHomeRoot = styled("section")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "85vh",
    marginBottom: "1rem",
}));

const StyledHomeContainer = styled(Container)(({ theme }) => ({
    display: "flex !important",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    width: "unset",
    marginTop: "2rem",
}));

const StyledHomeGrid = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    padding: "1rem",
    marginBottom: "0rem",
}));

const StyledHomeGridItem = styled(Grid)(({ theme }) => ({
    animation: "fadeIn",
    animationDuration: "2s",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0",
      textAlign: "center",
      paddingRight: "0 !important"
    },
}));

const StyledHomeTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Anton SC', sans-serif",
    fontWeight: "bold !important",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(0),
    textAlign: "center",
    fontSize: "clamp(60px, 8vw, 120px) !important",
}));

const StyledHomeSubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Anton SC', sans-serif",
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
                        xs={12}
                    >
                        <StyledHomeTitle component="h1">
                            UNDER CONSTRUCTION
                        </StyledHomeTitle>

                        <StyledHomeSubTitle component="h1">
                            SITE NEARLY READY
                        </StyledHomeSubTitle>

                        <LinearProgressBar />
                        
                    </StyledHomeGridItem>
                    <StyledHomeGridItem
                    item
                    xs={12}
                    >
                        <SocialLinks />
                    </StyledHomeGridItem>

                </StyledHomeGrid>
            </StyledHomeContainer>
        </StyledHomeRoot>
    )
}

export default Home