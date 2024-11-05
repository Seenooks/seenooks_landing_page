import React from "react"
import { Container, styled } from "@mui/material"
import Home from "../sections/Home"
import Footer from "../sections/Footer"
import Navbar from "../components/Navbar"

const StyledMainPage = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    position: "relative",
    overflow: "hidden",
}));


const StyledMainContainer = styled(Container)({
    maxWidth: "1600px",
    position: "relative",
});

const Main = () => {

    return (
        <>
            <Navbar />
            <StyledMainPage>
                <StyledMainContainer>
                    <Home />
                    <Footer />
                </StyledMainContainer>
            </StyledMainPage>
        </>
    );
}

export default Main;