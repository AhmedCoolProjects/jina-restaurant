import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import HeaderC from "../components/HeaderC";
import CopyrightC from "../components/CopyrightC";
import BigBgC from "../components/BigBgC";
import FoodCardC from "../components/FoodCardC";
import ChefWordC from "../components/ChefWordC";
import StickersBarC from "../components/StickersBarC";
import { Divider, Typography } from "@material-ui/core";

const chefWord = {
  title: "CHIEF WORD",
  date: "CZN BURAK",
  description:
    "Order, Get or Check a table online for 15 minutes to get it ready for you as you want and any time you want. We have even Delivery for you so you can get your delicious food any place you are from 8:00pm until 12:00am 7j/7j",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53Y15wu6KOJhlUZyzvJeS1mh8-ZBqS0NZLg&usqp=CAU",
  imageText: "Image Text",
};

const bigBgC = {
  title: "Cooking With Love",
  description: "Special and Unique delicious foods for Everybody.",
  description2: "Ordering online or just call +123 45 67 89 52",
  image:
    "https://www.lifeismorocco.com/wp-content/uploads/2019/10/Kabana-Marrakech-rooftop-restaurant-bar-@LIFEismorocco_cover.jpg",
  imgText: "main image description",
  linkText: "Contact Us…",
};
const foods = [
  {
    image:
      "https://www.tripsavvy.com/thmb/71mjz7OylLkvQ6f-0JmiiP2n2AU=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AlFanarRestaurant-FoodstoTry-ccad8a49e0c34203989d7b9b799ccbc0.png",
    name: "Collective Lunch",
    price: "35$",
    howMany: "five persons",
  },
  {
    image:
      "https://cdn.downtoearth.org.in/library/large/2019-05-31/0.68487000_1559290735_70-20190615-dte-english.jpg",
    name: "Collective Breakfast",
    price: "20$",
    howMany: "four persons",
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/62/37/d2/magic-foods.jpg",
    name: "Healthy Plat",
    price: "15$",
    howMany: "one person",
  },
];
export default function DashboardP() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderC title="Jina Restaurant" />
        <main>
          <BigBgC post={bigBgC} />
          <div className="separator"></div>
          {/* stickers */}
          <StickersBarC />
          {/* some foods */}

          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap>
                Special Offers
              </Typography>
              <Divider style={{ marginBottom: 25, marginTop: 10, height: 2 }} />
              <Grid container spacing={4}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <FoodCardC
                    key={item}
                    foods={foods[Math.floor(Math.random() * 3)]}
                  />
                ))}
              </Grid>
            </Container>
          </Grid>
          {/* Chef word */}
          <ChefWordC post={chefWord} />
        </main>
      </Container>
      <CopyrightC />
    </Fragment>
  );
}
