import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";


export const metadata: Metadata = {
  title: "Partner Alter",
  icons: {
    icon: "/images/logo/logo-dark-v2.svg", // letakkan favicon di folder public/favicon.ico
  },

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact />
      <Integration />
      <CTA />
      <FAQ /> */}
      {/* <Testimonial />
      <Pricing />
      <Contact />
      <Blog />   */}
    </main>
  );
}
