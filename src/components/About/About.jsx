import React from "react";
    
const About = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center pt-32">
      <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
        About Ravi Fans
      </h1>
      <div className="mb-8 w-full max-w-[1320px]">
        <img
          className="w-full h-auto rounded-lg"
          src="/images/aboutposter.png"
          alt="Ravi Fans Poster"
        />
      </div>
      <div className="w-full max-w-[1320px] bg-[#F5F5F5] py-20 px-10 lg:px-20 rounded-lg mb-8">
        <div className="max-w-[1320px] mx-auto text-[#6A6C78] text-lg lg:text-xl font-medium font-poppins">
          Ravi Fans launched in 1975, is one of the leading manufacturers and
          marketers of Ceiling, Table, Pedestal, Cabin, wall & exhaust fans.
          <br />
          It has established a world-class manufacturing setup with
          state-of-the-art facilities in terms of plant, machinery, and testing.
          The entire gamut of activities from processing of raw materials till
          packaging of finished products is in-house and fully automated. Years
          of experience and constant technological advancements have made Ravi a
          household name known for providing value for money fans. Being
          acknowledged as the fan for the common man, Ravi has something for
          every home, office, and commercial space & has its footprint across
          all major States in India with a network of 3000+ authorized dealers -
          a network that has been instrumental in carrying the Ravi Name &
          quality to every part of the country.
        </div>
      </div>
      <div className="w-full max-w-[1320px] bg-white py-20 px-10 lg:px-20 rounded-lg mb-8">
        <div className="max-w-[1320px] mx-auto text-[#6A6C78] text-lg lg:text-xl font-medium font-poppins">
          <h2 className="text-3xl font-semibold mb-4">Vision</h2>
          <ul className="list-disc pl-8 mb-6">
            <li>
              To be the most trusted brand that provides best quality affordable
              fans for mass market.
            </li>
            <li>
              To create a great place to work at by inspiring our people to
              continuously innovate and bring greater value to our customers and
              environment, thereby enhancing stakeholder value.
            </li>
          </ul>
          <h2 className="text-3xl font-semibold mb-4">Mission</h2>
          <p>
            Started in 1975, with the whole and sole mission of providing great
            quality hi-speed fans at an affordable price range. 4 decades down
            the line, we strive to achieve the same mission with which we
            started Ravi Fans to further enhance the quality of our products and
            to become the most successful and respected consumer electrical
            company in this field. It has been our constant endeavour to earn
            our customers’ respect through continuous improvement driven by
            integrity, teamwork and innovation. Continuous investment in
            technology to improve operational efficiencies is on top of our
            agenda. We believe that a brand is a function of a trusted network
            of stakeholders, which values its supply chain network, respects and
            honours the needs of the masses and creates par excellence products
            at affordable prices that meets the requirements of the new market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;