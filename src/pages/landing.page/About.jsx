import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <div className="section-title" id="about">
          <Typography
            variant="h2"
            align="center"
            sx={{ padding: "50px" }}
            color="GrayText"
            fontSize={"5rem"}
          >
            About Us
          </Typography>
        </div>
        <Typography
          variant="body1"
          align="center"
          color={"InfoText"}
          fontSize={"20px"}
          gutterBottom
        >
          Welcome to e-dabbewala, your one-stop destination for hassle-free and
          nutritious meals delivered straight to your doorstep. We understand
          that in today's fast-paced world, finding the time to prepare healthy
          meals can be challenging, and that's where we come in. Our mission is
          to provide fresh, hygienic and delicious food that not only satisfies
          your hunger but also fits seamlessly into your busy lifestyle. Our
          tiffin management system offers a variety of meal plans to choose
          from, ranging from vegetarian to non-vegetarian, designed to cater to
          your dietary preferences and requirements. At e-dabbewala, we take
          food safety and hygiene very seriously. Our team of experienced chefs
          prepares every meal with utmost care and attention, using only the
          finest ingredients. We use state-of-the-art technology to maintain the
          quality and freshness of our food, ensuring that you receive a
          wholesome and healthy meal every time.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color={"InfoText"}
          fontSize={"20px"}
          gutterBottom
        >
          We believe that every customer is unique, and hence we offer a
          customizable menu that allows you to select the dishes that you love.
          Whether you want to stick to traditional Indian cuisine or try
          something new, our menu has something for everyone. Ordering from
          e-dabbewala is quick and easy. Simply visit our website and choose the
          meal plan that suits you the best. We offer flexible delivery options
          that allow you to receive your meals at your convenience. You can
          track your order in real-time and be assured of timely delivery. So,
          why wait? Join the e-dabbewala family today and experience the joy of
          healthy and delicious meals delivered to your doorstep.d.
        </Typography>
      </Container>
    </>
  );
};

export default About;
