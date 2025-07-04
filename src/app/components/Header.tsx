"use client";

import * as React from "react";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tabs,
  Tab,
  Container,
} from "@mui/material";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Work", href: "#work" },
  { label: "Awards", href: "#awards" },
];

export default function Header() {
  const [current, setCurrent] = React.useState(0);
  const syncTabWithScroll = React.useCallback(() => {
    const OFFSET = 150;
    const scrollY = window.scrollY + OFFSET;
    let newIndex = 0;

    for (let i = 0; i < NAV_ITEMS.length; i++) {
      const el = document.querySelector(NAV_ITEMS[i].href);
      if (el) {
        const top = (el as HTMLElement).offsetTop;
        if (scrollY >= top) {
          newIndex = i;
        }
      }
    }

    const scrolledToBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    if (scrolledToBottom) {
      newIndex = NAV_ITEMS.length - 1;
    }

    if (newIndex !== current) {
      setCurrent(newIndex);
    }
  }, [current]);

  React.useEffect(() => {
    window.addEventListener("scroll", syncTabWithScroll, { passive: true });
    syncTabWithScroll();
    return () => window.removeEventListener("scroll", syncTabWithScroll);
  }, [syncTabWithScroll]);

  const handleChange = (_event: React.SyntheticEvent, value: number) => {
    setCurrent(value);
    const href = NAV_ITEMS[value].href;
    if (href === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", href);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#e6e7e8" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={NextLink}
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "#about");
            }}
            sx={{
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "text.primary",
              fontFamily: "Poppins",
              fontWeight: 700,
            }}
          >
            Sejal Agarwal
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              mr: 4,
            }}
          >
            {/* Desktop tabs */}
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.href}
                variant="text"
                color="inherit"
                sx={{
                  ml: 2,
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "text.primary",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href === "#about") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const target = document.querySelector(item.href);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }
                  window.history.pushState(null, "", item.href);
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile tabs */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              width: "100%",
            }}
          >
            <Tabs
              value={current}
              onChange={handleChange}
              variant="standard"
              centered
              sx={{
                width: "100%",
                "& .MuiTabs-indicator": {
                  backgroundColor: (t) => t.palette.primary.main,
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  "&.Mui-selected": {
                    color: (t) => t.palette.primary.main,
                  },
                },
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Tab key={item.href} label={item.label} />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
