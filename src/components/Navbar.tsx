import { Icon } from "@iconify/react";
import { Box, Button, IconButton, SwipeableDrawer, Typography, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { uiActions } from "../app/uiSlice";
import constants from "../constants";
import colors from "../styles/colors";
import styles from "./Navbar.module.css";

interface NavigationLinksProps {
  onClick?: () => void
  isBreakpoint?: boolean
}

function Navbar() {
  const dispatch = useAppDispatch()
  const mobileBreakpoint = useMediaQuery(`(max-width: ${constants.mobileBreakpoint}px`)
  const tabletBreakpoint = useMediaQuery(`(max-width: ${constants.tabletBreakpoint}px`)
  const breakpoint: boolean = mobileBreakpoint || tabletBreakpoint
  const drawerWidth = useAppSelector((state) => state.ui.drawerWidth)
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleDrawerToggle = () => setOpenDrawer((prev) => !prev)

  useEffect(() => {
    dispatch(uiActions.setMobileBreakpoint(mobileBreakpoint))
  }, [mobileBreakpoint])

  useEffect(() => {
    dispatch(uiActions.setTabletBreakpoint(tabletBreakpoint))
  }, [tabletBreakpoint])

  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <Typography
          sx={{ fontSize: { xs: '1.5rem', sm: '1.2rem', md: '1.5rem', xl: '2rem' } }}
          className={styles.title}>
          TRACK PARCEL
        </Typography>
        <Typography
          sx={{ fontSize: { xs: '1rem', sm: '0.8rem', md: '1rem', xl: '1.4rem' } }}
          className={styles.subtitle}>
          Parcel Tracking in a CLICK
        </Typography>
      </div>
      {breakpoint ? (
        <IconButton onClick={handleDrawerToggle} sx={{ color: colors.webWhite }}>
          <Icon icon="material-symbols:menu" fontSize={50} />
        </IconButton>
      ) : (
        <NavigationLinks onClick={undefined} isBreakpoint={false} />
      )}

      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onOpen={() => { }}
        onClose={handleDrawerToggle}
        transitionDuration={{ enter: 350, exit: 350 }}
        PaperProps={{
          sx: {
            width: `${drawerWidth}%`,
            backgroundColor: "#000000",
            zIndex: 5,
            border: "none",
            position: "fixed",
            overflow: "visible",
          },
        }}
        disableBackdropTransition
        ModalProps={{ keepMounted: false }}
      >
        <Box className={styles["drawer-container"]}>
          <IconButton onClick={handleDrawerToggle} sx={{ position: "absolute", top: 10, right: 10, color: colors.webWhite }}>
            <Icon icon="line-md:close" fontSize={30} />
          </IconButton>
          <NavigationLinks onClick={handleDrawerToggle} isBreakpoint={breakpoint} />
        </Box>
      </SwipeableDrawer>
    </div>
  )
}

const NavigationLinks: FC<NavigationLinksProps> = ({ onClick, isBreakpoint = false }) => (
  <Box className={styles.navigation} sx={{ flexDirection: isBreakpoint ? "column" : "row" }}>
    {constants.navigationItems.map((item, i) => (
      <Link key={i} to={item.href} className={styles.link} onClick={onClick}>
        {item.label}
      </Link>
    ))}
    <Button
      href="https://wa.me/6563161661"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: colors.webWhite,
        border: "2px solid",
        borderColor: colors.webGreen,
        borderRadius: "30px",
        padding: "8px 15px",
      }}
    >
      GET IN TOUCH
    </Button>
  </Box>
)

export default Navbar