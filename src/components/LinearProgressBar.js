import React from "react"
import {
    Box,
    LinearProgress,
    styled,
    Typography
} from "@mui/material"

const StyledProgressBarContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "",
    width: "60%",
    margin: "auto",
    marginTop: "3rem",

    [theme.breakpoints.down("md")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
}));

const StyledLinearProgressBar = styled(LinearProgress)(({ theme }) => ({
    width: "100%",
    marginLeft: "1rem",
    marginRight: "1rem",
    height: "15px",
}));

const LinearProgressBar = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
        <StyledProgressBarContainer>
            <Typography>0%</Typography>
            <StyledLinearProgressBar
                variant="determinate"
                value={progress}
            />
            <Typography>100%</Typography>
        </StyledProgressBarContainer>

    )
}

export default LinearProgressBar