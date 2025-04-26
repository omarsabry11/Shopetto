"use client";
import Link from "next/link";
import { TokenContext } from "../../_contexts/tokenContext";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, TextField } from "@mui/material";

export default function Navbar() {
  const { token, setToken } = useContext(TokenContext);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(() => localStorage.getItem("userToken"));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    router.push("/login");
  };

  const appBarData = [
    {
      id: 1,
      title: "Home",
      link: "/",
      icon: <HomeIcon></HomeIcon>,
    },
    {
      id: 2,
      title: "About",
      link: "/about",
      icon: <InfoIcon></InfoIcon>,
    },
    {
      id: 3,

      title: "Categories",
      link: "/categories/6439d2d167d9aa4ca970649f",
      icon: <CategoryIcon></CategoryIcon>,
    },
    {
      id: 4,

      title: "Cart",
      link: "/cart",
      icon: <ShoppingCartIcon></ShoppingCartIcon>,
    },
    {
      id: 5,
      title: "Wishlist",
      link: "/wishlist",
      icon: <FavoriteIcon></FavoriteIcon>,
    },
  ];

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {appBarData.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.link} passHref className="w-full ">
              <ListItemButton className="">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Link href="/login" passHref>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon></LogoutIcon>
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <nav className="bg-secondary text-white pt-10 pb-3">
        <div className="container mx-auto sm:px-10 px-5">
          <div>
            <div className="flex items-center justify-between max-lg:flex-wrap mb-8">
              <div className="flex items-center max-lg:mb-3">
                <Link href={"/"} className="order-1">
                  <h2 className="text-3xl font-[500]">Shopetto</h2>
                </Link>
                {token && (
                  <Box className="lg:hidden">
                    <Button
                      onClick={toggleDrawer(true)}
                      sx={{
                        padding: 0,
                        minWidth: "auto",
                        width: "fit-content",
                        mr: 1,
                      }}
                    >
                      {" "}
                      <MenuIcon
                        sx={{ color: "white", width: "2rem", height: "2rem" }}
                      ></MenuIcon>
                    </Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                      {DrawerList}
                    </Drawer>
                  </Box>
                )}
              </div>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: { xs: "100%", lg: "30rem" },
                  mx: "auto",
                  order: { xs: 3, lg: 2 },
                }}
              >
                <TextField
                  id="simple-search"
                  placeholder="Search for anything..."
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: "#F9FAFB",
                      color: "#101828",
                      fontSize: "0.875rem",
                      borderRadius: "0",
                      py: 0.48,
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                />
                <IconButton
                  type="submit"
                  title="Search"
                  sx={{
                    ml: 1,
                    p: 1.3,
                    borderRadius: "0",
                    backgroundColor: "#4e04fb",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#4e04fb",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>

              <div className="flex items-center gap-x-3 order-3 max-lg:order-2 max-lg:mb-3">
                {token && (
                  <Link href={"/wishlist"}>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                  </Link>
                )}
                {token && (
                  <Link href={"/cart"}>
                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                  </Link>
                )}

                {token ? (
                  <button
                    title="Logout"
                    className="cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogoutIcon></LogoutIcon>
                  </button>
                ) : (
                  <div className="flex gap-x-3 font-[500]">
                    <Link href={"/register"}>Register</Link>
                    <Link href={"/login"}>Login</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-3">
                <a title="Facebook" href="#">
                  <FacebookIcon fontSize="small"></FacebookIcon>
                </a>
                <a title="Facebook" href="#">
                  <InstagramIcon fontSize="small"></InstagramIcon>
                </a>
                <a title="Facebook" href="#">
                  <TwitterIcon fontSize="small"></TwitterIcon>
                </a>
                <a title="Facebook" href="#">
                  <LinkedInIcon fontSize="small"></LinkedInIcon>
                </a>
              </div>

              {token && (
                <ul className="flex items-center gap-6 text-[0.95rem] justify-center max-lg:hidden">
                  {appBarData.map((item) => (
                    <li key={item.id}>
                      <Link href={`${item.link}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1">
                  <svg width={15} fill="white" viewBox="0 0 32 32">
                    <path d="M16 4.457c6.354 0 11.543 5.189 11.543 11.543s-5.189 11.543-11.543 11.543-11.543-5.189-11.543-11.543 5.189-11.543 11.543-11.543zM16 1.714c-7.886 0-14.286 6.4-14.286 14.286s6.4 14.286 14.286 14.286 14.286-6.4 14.286-14.286-6.4-14.286-14.286-14.286v0z"></path>
                    <path d="M14.72 18.606c-0.046-0.229-0.069-0.48-0.069-0.754 0-0.96 0.411-1.874 1.44-2.651l0.869-0.663c0.549-0.411 0.777-0.891 0.777-1.44 0-0.846-0.594-1.646-1.829-1.646-1.303 0-1.874 1.051-1.874 2.057 0 0.229 0.023 0.411 0.069 0.594l-2.263-0.091c-0.069-0.251-0.091-0.549-0.091-0.823 0-1.966 1.486-3.863 4.183-3.863 2.834 0 4.32 1.783 4.32 3.634 0 1.44-0.731 2.469-1.806 3.246l-0.754 0.503c-0.64 0.457-0.983 1.029-0.983 1.783v0.114h-1.989zM15.749 19.771c0.8 0 1.463 0.663 1.463 1.463s-0.663 1.44-1.463 1.44c-0.8 0-1.44-0.64-1.44-1.44s0.64-1.463 1.44-1.463z"></path>
                  </svg>
                  <p className="text-xs font-[500]">Help Center</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg width={15} fill="white" viewBox="0 0 32 32">
                    <path d="M25.531 2.286h-16.777l-4.183 8.8v18.629h25.143v-18.629l-4.183-8.8zM26.72 11.2h-8.206v-6.171h5.28l2.926 6.171zM10.491 5.029h5.28v6.171h-8.206l2.926-6.171zM7.314 26.971v-13.029h8.457v4.343h2.743v-4.343h8.457v13.029h-19.657z"></path>
                  </svg>
                  <p className="text-xs font-[500]">Track Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
