import React from "react"
import {
    Box,
    LinearProgress,
    styled
} from "@mui/material"

const StyledLinearProgressBar = styled(LinearProgress)(({ theme }) => ({
    width: "50%",
    height: "15px",
    margin: "auto",
    marginTop: "3rem",
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
        <StyledLinearProgressBar
            variant="determinate"
            value={progress}
        />
    )
}

export default LinearProgressBar