import { Typography, styled } from "@mui/material";

const StyledFooterRoot = styled("section")(({ theme }) => ({
    minHeight: "15vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: `${theme.palette.background.primary}FC`,
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: theme.palette.text.primary,
}));

const StyledLocationText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: theme.palette.text.primary,
}));


const Footer = () => {

    return (
        <StyledFooterRoot>
            {/* <div> */}
                <StyledFooterText>© 2024 SEENOOKS</StyledFooterText>
                <StyledLocationText> Ucevler Mh. 72.(220) Sk. Aknil Plaza Sit. No: 6/17 Nilufer/BURSA</StyledLocationText>
            {/* </div> */}
        </StyledFooterRoot>

    )
}

export default Footer