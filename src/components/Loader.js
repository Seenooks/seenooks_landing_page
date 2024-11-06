import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.primary,
}));

const Loader = () => {

  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1500);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
        <motion.svg
          id="a"
          viewBox="0 0 1800 1361.468"
          width="12rem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <defs>
            <clipPath id="b">
              <path
                d="M191.546-2v1365.468h1365.469V-2H191.546ZM1491.763,969.889l-98.151-56.646c32.423-72.358,49.52-151.335,49.52-232.509,0-22.025-1.254-43.914-3.743-65.595l116.617,67.155c-.228,100.437-22.442,198.381-64.243,287.595Z"
                fill="none"
              />
            </clipPath>
          </defs>
          {/* Animated Circle */}
          <motion.path
            d="M874.281,0C498.321,0,193.546,304.774,193.546,680.734s304.775,680.734,680.735,680.734,680.734-304.775,680.734-680.734S1250.24,0,874.281,0ZM874.281,1250.586c-314.721,0-569.852-255.132-569.852-569.852S559.56,110.881,874.281,110.881s569.852,255.131,569.852,569.852-255.131,569.852-569.852,569.852Z"
            fill="#a0a0a0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Animated Polygon */}
          <motion.g>
            <motion.polygon
              points="152.816 379.614 955.268 843.32 802.452 931.666 0 467.401 152.816 379.614 152.816 379.614"
              fill="#444"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="863.301 430.705 863.313 537.01 710.366 625.216 710.298 518.88 863.301 430.705 863.301 430.705"
              fill="#2b2b2b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="863.313 537.01 1082.823 663.633 929.874 751.995 710.366 625.216 863.313 537.01 863.313 537.01"
              fill="#444"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="1082.823 663.633 1082.567 1063.808 929.829 1152.287 929.874 751.995 1082.823 663.633 1082.823 663.633"
              fill="#2b2b2b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="735.893 210.024 1800 822.8 1646.919 911.583 582.812 298.066 735.893 210.024 735.893 210.024"
              fill="#444"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="1800 822.8 1799.544 970.39 1646.541 1059.216 1646.919 911.583 1800 822.8 1800 822.8"
              fill="#2b2b2b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
            <motion.polygon
              points="1646.919 911.583 1646.541 1059.216 710.298 518.88 710.366 625.216 929.874 751.995 929.829 1152.287 .45 614.049 0 467.401 802.452 931.666 802.418 825.491 583.241 698.777 582.812 298.066 1646.919 911.583 1646.919 911.583"
              fill="#777"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
          </motion.g>

          {/* Clipped Path Animation */}
          <motion.g clipPath="url(#b)">
            <motion.path
              d="M874.281,0C498.321,0,193.546,304.774,193.546,680.734s304.775,680.734,680.735,680.734,680.734-304.775,680.734-680.734S1250.24,0,874.281,0ZM874.281,1250.586c-314.721,0-569.852-255.132-569.852-569.852S559.56,110.881,874.281,110.881s569.852,255.131,569.852,569.852-255.131,569.852-569.852,569.852Z"
              fill="#a0a0a0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0, duration: 1 }}
            />
          </motion.g>
        </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;

