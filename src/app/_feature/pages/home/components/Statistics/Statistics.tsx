import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box, Typography } from "@mui/material";

export default function Statistics() {
  const statisticsData = [
    {
      id: 1,
      title: "10.5k",
      subtitle: "Sallers active our site",
      icon: (
        <StorefrontIcon
          sx={{
            color: "white",
            width: "1.9rem",
            height: "1.9rem",
          }}
        ></StorefrontIcon>
      ),
    },
    {
      id: 2,
      title: "33k",
      subtitle: "Mopnthly Produduct Sale",
      icon: (
        <ShoppingBagIcon
          sx={{
            color: "white",
            width: "1.9rem",
            height: "1.9rem",
          }}
        ></ShoppingBagIcon>
      ),
    },
    {
      id: 3,
      title: "45.5k",
      subtitle: "Customer active in our site",
      icon: (
        <PeopleAltIcon
          sx={{
            color: "white",
            width: "1.9rem",
            height: "1.9rem",
          }}
        ></PeopleAltIcon>
      ),
    },
    {
      id: 4,
      title: "25k",
      subtitle: "Anual gross sale in our site",
      icon: (
        <AttachMoneyIcon
          sx={{
            color: "white",
            width: "1.9rem",
            height: "1.9rem",
          }}
        ></AttachMoneyIcon>
      ),
    },
  ];
  return (
    <section className="mb-20">
      <main
        className={`statistics text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9`}
      >
        {statisticsData.map((item) => (
          <Box
            key={item.id}
            className={`group box border-gray-300 duration-500 hover:bg-main rounded-md p-7`}
          >
            <Box className="w-16 h-16 mx-auto flex justify-center items-center rounded-full bg-gray-300 group-hover:bg-white duration-500">
              <div className="icon-box w-[80%] h-[80%] flex justify-center items-center rounded-full bg-secondary group-hover:bg-main duration-300">
                {item.icon}
              </div>
            </Box>
            <Typography
              className="group-hover:text-white"
              component={"h2"}
              sx={{
                fontSize: "1.6rem",
                mt: "1rem",
                fontWeight: "600",
                transitionDuration: "300ms",
                color: "var(--secondary-color)",
              }}
            >
              {item.title}
            </Typography>
            <Typography  className="group-hover:text-white" component={"p"} sx={{
              transitionDuration:"300ms"
            }}>
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </main>
    </section>
  );
}
