import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { LeftPanelOverlayContent } from "./LeftPanelOverlayContent";
import PanelImage from "../../Images/LeftPanel.png";
import IneoBank from "../../Images/IneoBank.jpeg";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Box display="flex" height="100vh">
      <Box
        flex="0 0 35%"
        sx={{
          position: "relative",
          backgroundImage: `url(${PanelImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "10%",
            color: "white",
            zIndex: 1,
          }}
        >
          <LeftPanelOverlayContent pathname={pathname} />
        </Box> */}
        <Box className="absolute bottom-[10px] left-[10%] text-white">
          {/* <Typography variant="h5" color="white">
            All rights reserved
          </Typography> */}
          <LeftPanelOverlayContent pathname={pathname} />
        </Box>
      </Box>

      <Box flex="1" display="flex" flexDirection="column">
        {/* Top-right IneoBank image */}
        <Box className="flex-none flex justify-end items-center p-[10px_20px]">
          <Box
            component="img"
            src={IneoBank}
            alt="Ineo Bank Logo"
            className="h-[50px] w-auto my-[10px]"
          />
        </Box>
        <Box className="m-12">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
