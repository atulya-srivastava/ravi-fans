import React from "react";
import Button from "../../utils/Button";

const ContactUs = () => {
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    email: "",
    description: "",
  });
  console.log(userDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center gap-y-4 mt-4 lg:mx-8">
      <div className="flex flex-col items-center gap-y-4 mt-4 lg:container lg:flex-row ">
        <div className="w-full sm:text-center lg:text-left lg:ml-0">
          <h1 className="text-4xl mx-8  font-bold lg:text-5xl lg:ml-0 lg:w-[60%]">
            Get In Touch With Ravi Fans
          </h1>
        </div>
        <div className="w-5/6 lg:pr-10">
          <p className="text-[#6A6C78] lg:text-lg lg:text-justify">
            Ready to elevate your air experience? Reach out to our dedicated
            team by submitting the form below for personalized assistance or
            explore our product lineup in our online store.
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:container lg:my-8">
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="./images/poster3.png"
            className="lg:rounded-l-3xl lg:h-full"
            alt="poster"
          />
        </div>
        <div className="flex flex-col items-center bg-[#F5F5F5] m-6 p-4 rounded-3xl sm:w-5/6 lg:rounded-l-none lg:my-0 lg:ml-0 lg:w-1/2">
          <div>
            <img src="./images/Logo.svg" alt="" />
          </div>
          <div className="m-8 mb-6">
            <form className="lg:w-full">
              <input
                name={"name"}
                value={userDetails.name}
                type="text"
                placeholder="Enter Your Name"
                className="h-12 w-full p-2 border placeholder-gray-500 rounded-2xl lg:h-14"
                onChange={handleChange}
              />
              <input
                name={"email"}
                value={userDetails.email}
                type="email"
                placeholder="Enter Your Email"
                className="h-12 my-4 w-full p-2 border placeholder-gray-500 rounded-2xl lg:h-14"
                onChange={handleChange}
              />
              <input
                name={"description"}
                value={userDetails.description}
                type="textarea"
                placeholder="Description"
                className="h-32 w-full p-2 border placeholder-gray-500 rounded-2xl lg:h-36"
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#FF1F25] px-6 py-3 text-white rounded-full">
              Submit
            </button>
            <Button type={"up-right"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
