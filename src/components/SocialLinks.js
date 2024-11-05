import { styled } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import XIcon from "@mui/icons-material/X"

const StyledSocialLinksContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    marginTop: "2rem",
    
}));

const StyledSocialLink = styled("a")(({ theme }) => ({
    display: "inline-flex",
    justifyContent: "center",
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