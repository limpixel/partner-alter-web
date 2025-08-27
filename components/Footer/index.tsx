"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-14 lg:py-18">
            <div className="flex flex-wrap gap-8 lg:justify-center  lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="flex  justify-center items-center gap-4">
                  <Image
                    width={40}
                    height={56}
                    src="/images/logo/logo-light-v2.svg"
                    alt="Logo"
                    className="dark:hidden w-10 h-14"
                  />
                  <Image
                    width={40}
                    height={56}
                    src="/images/logo/logo-dark-v2.svg"
                    alt="Logo"
                    className="hidden dark:block w-10 h-14"
                  />

                  {/* Text for Light Mode */}
                  <h3 className="text-black text-2xl font-bold block dark:hidden">Partner Alter</h3>
                  {/* Text for Dark Mode */}
                  <h3 className="text-white text-2xl font-bold hidden dark:block">Partner Alter</h3>
                </a>

                <p className="mb-10 mt-5 text-center">
                  &copy; {new Date().getFullYear()} Solid. All rights reserved
                </p>

               
              </motion.div>

              
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
