"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 flex items-center justify-center min-h-[60vh]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 w-full">
          <div className="flex flex-col  lg:justify-center lg:items-center lg:gap-8 xl:gap-10.5 ">
            <div className="md:w-full ">
              <h4 className="mb-4.5 text-lg text-center font-medium text-black dark:text-white">
                🔥 Welcome to Alter Partner 
              </h4>
              <p className="text-center">
                Alter Partner adalah platform untuk memperkenalkan dirimu secara aman dan nyaman.
                Temukan teman baru, bangun koneksi, dan ekspresikan dirimu tanpa khawatir privasi terganggu.
                Bergabunglah sekarang dan mulai perjalananmu bersama komunitas yang suportif!
              </p>
            </div>
            {/* <div className="animate_right hidden md:w-1/2 lg:block"></div> */}

            <div className="flex gap-4">
              <a href="https://x.com/PartnerAlter" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition">
                Link Kirim Menfess
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                Cara bikin Menfess
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
