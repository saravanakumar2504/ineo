import { Outlet, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import { LeftPanelOverlayContent } from "./LeftPanelOverlayContent";
import PanelImage from "../../Images/LeftPanel.png";
import IneoBank from "../../Images/IneoBank.jpeg";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
      <Box display="flex" height={"100%"}>
      <Box
        flex="0 0 35%"
        sx={{
          position: "relative",
          backgroundImage: `url(${PanelImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="absolute bottom-[10px] left-[10%] text-white">
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
        <Box height={"100%"} className="m-10">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
