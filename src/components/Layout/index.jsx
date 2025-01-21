import { Outlet, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { LeftPanelOverlayContent } from "./LeftPanelOverlayContent";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Box display="flex" height="100vh">
      {/* Left static image with overlay */}
      <Box
        flex="0 0 35%"
        sx={{
          position: "relative",
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/030/207/898/small_2x/high-quality-cute-robots-image-with-blue-color-free-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay content */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            color: "white",
            zIndex: 1,
          }}
        >
          <LeftPanelOverlayContent pathname={pathname} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px", // Adjust the spacing from the bottom
            left: "10%",
            color: "white",
          }}
        >
          <Typography variant="h5" color="white">
            All rights reserved
          </Typography>
        </Box>
      </Box>

      {/* Right content */}
      <Box flex="1" display="flex" flexDirection="column">
        {/* Top 20% */}
        <Box
          flex="0 0 20%"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "20px",
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/atom-icon-logo-atomic-neutron-black-color-isolated-white-background-nuclear-nucleus-orbit-spin-proton-core-symbo-symbol-element-210245838.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        ></Box>

        {/* Bottom 80% */}
        <Box
          flex="1"
          p={2}
          sx={{
            overflowY: "auto",
            backgroundColor: "#f5f5f5", // Optional background color
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
