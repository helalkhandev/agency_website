import React from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import Card from "./CARD";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-[#FFF9F9] flex flex-wrap md:text-left md:grid grid-cols-2 md:justify-center md:p-10 md:items-center md:mb-2">
        <div className="m-8 p-2 md:m-20">
          <h2 className="uppercase mb-2">Digital Solution</h2>
          <h1 className="text-[#000000] text-2xl font-bold md:font-bold md:text-5xl md:mb-3 leading-snug">
            We Provide Truly Creative
            <br />
            Digital Solutions{" "}
          </h1>
          <p className="mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-[#C1EBE1] px-3 py-1 text-lg font-semibold mt-2 hover:bg-[#20F1BF] rounded-lg">
            Get Start Now
          </button>
        </div>
        <div className="p-2 m-2 md:p-10 md:flex md:justify-center md:items-center">
          <img src="../src/assets/corporate_image1.png" />
        </div>
      </div>
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
