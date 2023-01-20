import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import Badge from "@mui/material/Badge";

// https://mui.com/material-ui/guides/routing/#:~:text=))%3B-,Tabs,-Current%20route%3A
function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(["/", "/store", "/about"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="Store" value="/store" to="/store" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
    </Tabs>
  );
}

export function AppNavbar() {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
        borderBottom: 1,
        borderColor: "divider",
        margin: '0 0 3% 0',
      }}
    >
      <Box sx={{ gridRow: "1", gridColumn: "span 2" }}>
        <MyTabs />
      </Box>
      <Box
        sx={{
          gridRow: "1",
          gridColumn: "5 / 5",
          textAlign: "center",
        }}
      >
        <IconButton
          size="large"
          aria-label="see data"
          color="inherit"
          onClick={() => {
            console.log("click");
          }}
        >
          <Badge badgeContent={4} color="primary">
            <AutoAwesomeMotionIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
}
