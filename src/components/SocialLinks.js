import { styled } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import XIcon from "@mui/icons-material/X"

const StyledSocialLinksContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    // width: "35%",
    margin: "auto",
    marginTop: "2rem",
    
    // [theme.breakpoints.down("md")]: {
    //     width: "55%",
    // },
    // [theme.breakpoints.down("sm")]: {
    //     width: "65%",
    // },
    
}));

const StyledSocialLink = styled("a")(({ theme }) => ({
    display: "inline-flex", // Ensures the anchor behaves like an inline element
    justifyContent: "center", // Center align the icon within the anchor
    alignItems: "center",
    margin: "1rem",
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "50%",
    padding: "1rem",
    textDecoration: "none",
    transition: "transform 200ms",
    "& svg": {
        fill: theme.palette.text.primary,
        padding: "0",
        width: "2.5rem",
        height: "2.5rem",
        transform: "scale(1)",
        transition: "transform 200ms",
    },
    "&:hover": {
        transform: "scale(1.1)",
        border: `2px solid ${theme.palette.text.secondary}`,
        "& svg": {
            fill: theme.palette.text.secondary,
            transform: "scale(1.1)",
        },
    },
}));

const SocialLinks = () => {
    return (
        <StyledSocialLinksContainer>
            {/* <StyledSocialLink
                href={"facebook"}
                target="_blank"
            >
                <FacebookIcon />
            </StyledSocialLink> */}
            <StyledSocialLink
                href={"https://www.linkedin.com/company/seenooks/"}
                target="_blank"
            >
                <LinkedInIcon />
            </StyledSocialLink>
            <StyledSocialLink
                href={"https://www.instagram.com/seenooks/"}
                target="_blank"
            >
                <InstagramIcon />
            </StyledSocialLink>

            <StyledSocialLink
                href={"https://x.com/seenooks"}
                target="_blank"
            >
                <XIcon />
            </StyledSocialLink>

        </StyledSocialLinksContainer>
    )
}

export default SocialLinks