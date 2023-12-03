import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  DashboardSharp,
  MovieSharp,
  TableRowsSharp,
  PieChartSharp,
} from "@mui/icons-material";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import { useEffect } from "react";

const drawerWidth = 230;

function RootRoute() {
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
  });

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            <ListItem key="dashboard" disablePadding={true}>
              <ListItemButton sx={{ height: "60px" }}>
                <ListItemIcon>
                  <DashboardSharp sx={{ fontSize: "30px" }} color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  primaryTypographyProps={{ variant: "button" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/tv-shows">
            <ListItem key="tv-shows" disablePadding={true}>
              <ListItemButton sx={{ height: "60px" }}>
                <ListItemIcon>
                  <MovieSharp sx={{ fontSize: "30px" }} color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="TV Shows"
                  primaryTypographyProps={{ variant: "button" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/history">
            <ListItem key="history" disablePadding={true}>
              <ListItemButton sx={{ height: "60px" }}>
                <ListItemIcon>
                  <TableRowsSharp sx={{ fontSize: "30px" }} color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="History"
                  primaryTypographyProps={{ variant: "button" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/statistics">
            <ListItem key="statistics" disablePadding={true}>
              <ListItemButton sx={{ height: "60px" }}>
                <ListItemIcon>
                  <PieChartSharp sx={{ fontSize: "30px" }} color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Statistics"
                  primaryTypographyProps={{ variant: "button" }}
                />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <Outlet />
    </>
  );
}

export default RootRoute;
