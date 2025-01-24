import { Typography, Box } from "@mui/material";

export const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "20px",
        padding: "20px", // Optional: Add some padding around the container
      }}
    >
      <Typography
        style={{
          fontSize: "18px",
          width: "80%",
          textAlign: "justify",
          whiteSpace: "pre-line", // Allows handling of \n for new lines
          lineHeight: "1.9", // Sets the line height
          color: "#ffffff"
        }}
      >
        Discover the world's best{"\n"}
        community of freelancers and{"\n"}
        business owners
      </Typography>
      <Box
        sx={{
          backgroundColor: "#011736",
          width: "80%",
          height: "auto", // Auto height for dynamic text
          borderRadius: "15px",
          padding: "10px", // Adjust padding for consistency
          color: "#ffffff"
        }}
      >
        <Typography
          style={{
            padding: "20px",
            textAlign: "justify",
            fontSize: "16px",
            color: "white",
            lineHeight: "1.9", // Adjust line spacing for readability
          }}
        >
          {`Simply unbelievable! I am really satisfied with my projects and business. This is absolutely wonderful!`}
        </Typography>
      </Box>
      <Typography
        style={{
          fontSize: "12px",
          marginBottom: "10px",
          textAlign: "justify",
          color: "#ffffff"
        }}
      >
        © iNeo Bank | All rights reserved
      </Typography>
    </Box>
  );
};
