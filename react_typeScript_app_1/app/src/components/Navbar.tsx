import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

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
    <Tabs value={currentTab} sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tab label="Home" value="/" to="/" component={Link} />
      <Tab label="Store" value="/store" to="/store" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
    </Tabs>
  );
}

export function AppNavbar() {
  return (
    <Box sx={{ width: "100%"}}>
      <MyTabs />
    </Box>
  );
}
