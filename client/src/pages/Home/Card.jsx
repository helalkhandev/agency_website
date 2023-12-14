import React from "react";

function Card() {
  return (
    <div className="flex justify-center flex-wrap md:flex md:flex-warp">
      <div className="border rounded-3xl bg-[#FFF3F3] hover:shadow hover:bg-[#f9e1e1] p-5 m-5 justify-center md:m-10 md:p-10 md:h-[400px] md:w-[300px]">
        <img
          className="w-24 h-24 mx-auto mb-4"
          src="/src/assets/card-1.png"
          alt=""
        />
        <h1 className="font-bold p-1 m-1 text-lg text-center">
          Web Design and Development
        </h1>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>

      <div className="border rounded-3xl bg-[#FFF3F3] hover:shadow hover:bg-[#f9e1e1] p-5 m-5 justify-center md:m-10 md:p-10 md:h-[400px] md:w-[300px]">
        <img
          className="w-24 h-24 mx-auto mb-4"
          src="/src/assets/card-2.png"
          alt=""
        />
        <h1 className="font-bold p-1 m-1 text-lg text-center">
          Digital Marketing Solution
        </h1>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>

      <div className="border rounded-3xl bg-[#FFF3F3] hover:shadow hover:bg-[#f9e1e1] p-5 m-5 justify-center md:m-10 md:p-10 md:h-[400px] md:w-[300px]">
        <img
          className="w-24 h-24 mx-auto mb-4"
          src="/src/assets/card-3.png"
          alt=""
        />
        <h1 className="font-bold p-1 m-1 text-lg text-center">
          Social Media Solution
        </h1>
        <p className="text-center">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
      </div>
    </div>
  );
}

export default Card;
