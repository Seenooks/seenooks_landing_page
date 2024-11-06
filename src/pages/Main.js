import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Home from "../sections/Home"
import Footer from "../sections/Footer"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"
import homeBg from "../assets/black-bg.webp"

const StyledMainPage = styled("div")(({ theme, bgImg }) => ({
    backgroundColor: theme.palette.background.primary,
    backgroundImage: bgImg ? `url(${bgImg})` : "none",
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    position: "relative",
    overflow: "hidden",
}));

const StyledMainContainer = styled(Container)({
    maxWidth: "1600px",
    position: "relative",
});

const Main = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [bgImg, setBgImg] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const img = new Image();
            img.src = homeBg;
            await img.decode();
            setBgImg(homeBg);
        };
        loadImage();
        setTimeout(() => setIsLoading(false), 2500);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <StyledMainPage bgImg={bgImg}>
                        <StyledMainContainer>
                            <Home />
                            <Footer />
                        </StyledMainContainer>
                    </StyledMainPage>
                </>
            )}
        </>
    );
}

export default Main;