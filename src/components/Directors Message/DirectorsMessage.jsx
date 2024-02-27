import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DirectorsMessageCarousel from "./DirectorsMessageCarousel";

function DirectorsMessage() {
  const dms = [
    {
      img: `images/Directors Message/Frame 51.png`,
      name: `M.K. Jaipuria`,
      position: `(Chairman) Ravi Group of Companies`,
      desc: `Branded Fans were leading the market in the mid 70's. As a young
      entrepreneur, I had this vision to provide best- in-class electric
      fans to the consumer at reasonable prices and that was the beginning
      of the brand RAVI. After 4 glorious decades, we can proudly say that
      our hard work and constant technological advancement in the field
      have yielded results and RAVI has become a household name in the fan
      industry. The company focuses on working passionately with all
      stakeholders to simplifying human lives.`,
    },
    {
      img: `images/Directors Message/Frame 52.png`,
      name: `Rajeev Jaipuria`,
      position: `(Director) Ravi Group of Companies`,
      desc: `Fans are an indispensable part of Indian life. Today RAVI has become one of the largest fan manufacturers in the semi branded category known for providing hi-speed heavy duty fans - thanks to our philosophy of Make in India, world-class manufacturing practices and a knowledgeable and customer-oriented distribution network.
  
      The name 'RAVI' is built on the trust of millions of customers who get full satisfaction with its quality and highly responsive after sales service.
      
      Having a brand legacy of 45+ years and working towards the same vision that we had at its inception, RAVI is on an ambitious growth path and is constantly automising processes to provide a superior quality product at affordable price to its customers.`,
    },
    {
      img: `images/Directors Message/Frame 53.png`,
      name: `Sanjeev Jaipuria`,
      position: `(Director) Ravi Group of Companies`,
      desc: `Ravi has been successful in establishing itself as a one stop solution for all things fan and has played an important role in simplifying human lives.
  
      With changing trends, we have enhanced our product designs from classic to contemporary for meeting different customer preferences in terms of colour, material, design, functionality and durability. No matter what your need, we have a fan for you.Each of our product is created out of quality workmanship and finest materials.
      
      Year after year, we have created value for all our stakeholders – customers, partners, our people and community as a whole. In near future, we plan to take the RAVI brand at a global level and we look forward to the next chapter in the Group's story of value creation.`,
    },
    {
      img: `images/Directors Message/Frame 54.png`,
      name: `Uday Jaipuria`,
      position: `(Director) Ravi Group of Companies`,
      desc: `With the ease of doing business nowadays, ever changing dynamics and a very competitive market, pricing your product vis-a vis its value has become utmost important.
  
      India is fast moving from a labour-intensive market to a market driven by technology. Customers have become more demanding and manufacturers aren't shying away from investing on this front. 
      
      We, at Ravi, have been constantly innovating by bringing technology and up-gradation wherever required. This has made sure that we are able to create more value for all our stakeholders over the years and deliver a product that meets customers’ expectations at an affordable price.`,
    },
    {
      img: `images/Directors Message/Frame 55.png`,
      name: `Balpreet Kaur`,
      position: `(Director) Ravi Group of Companies`,
      desc: `The world today is changing in so many different ways. 
  
      We believe what differentiates a brand is the ability to stay true to its ideals (which for us is delivering quality at reasonable prices) while being able to reinvent itself to stay relevant and responsive.
      
      We would like to thank our customers, dealer partners, employees and communities who have been part of this incredible journey and we invite you to join us as we look ahead.`,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "ease-out",
  };

  return (
    <>
      <Slider {...settings}>
        {dms.map((dms) => (
          <DirectorsMessageCarousel
            key={dms.name}
            img={dms.img}
            name={dms.name}
            position={dms.position}
            desc={dms.desc}
          />
        ))}
      </Slider>
    </>
  );
}

export default DirectorsMessage;
