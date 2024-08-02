"use client";
import { useEffect, useState, useRef } from "react";
import "./app.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./header/page";
import Footer from "./footer/page";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeroImg1 from "../assets/images/hero-img01.png";
import HeroImg2 from "../assets/images/hero-img02.png";
import HeroImg3 from "../assets/images/hero-img03.png";
import Icon01 from "../assets/images/icon01.png";
import Icon02 from "../assets/images/icon02.png";
import Icon03 from "../assets/images/icon03.png";
import FeatureImg from "../assets/images/feature-img.png";
import VideoImg from "../assets/images/video-icon.png";
import FaqList from "../../components/faqs/faqList";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/About";
import DoctorList from "./Doctors/DoctorList";
import Testimonials from "../../components/Testimonials/Testimonials";
import Typed from "typed.js";

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  const ty = useRef(null);

  useEffect(() => {
    const typed = new Typed(ty.current, {
      strings: [
        "We help patients live a healthy, longer life.",
        "All back pain and problems.",
        "Equipments available.",
        "Get in Touch.",
      ],
      loop: true,
      loopCount: Infinity,
      startDelay: 0,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 0,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header isTopOfPage={isTopOfPage} />
      <section className="hero_section pt-[60px] 2xl:h-[800px] bg-blue-800">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h4 className="text-[20px] leading-[46px] text-headingColor font-[800] md:text-[60px]">
                  <span ref={ty} />
                </h4>
                <p className="text_para text-white">
                  Times have definitely changed since I was a kid. The young
                  boys coming up now appear to lack a certain drive and
                  assertiveness that is essential in becoming strong men.
                  What&rsquo;s your opinion? Subscribe and share this channel.
                </p>
                <button className="btn h-[60px] ">Book Appointment</button>
              </div>
              {/* Hero Counter */}
              <div className="mt-[30px] lg:mt-[70] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px] "></span>
                  <p className="text_para text-white">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para text-white">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para text-white">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero Content */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <Image className="w-full" src={HeroImg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <Image className="w-full mb-[30px]" src={HeroImg2} alt="" />
                <Image className="w-full " src={HeroImg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h3 className="heading text-center">
              Providing the best medical services
            </h3>
            <p className="text_para text-center ">
              World class care for everyone. Our health systems offers
              unmatched, expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30] lg:mt-[55px] justify-center items-center">
            <div className="py-[0px] px-5 ">
              <div className="flex items-center justify-center">
                <Image src={Icon01} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Find a doctor.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[0px] px-5 ">
              <div className="flex items-center justify-center">
                <Image className="w-[14rem]" src={Icon02} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Purchase Items.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[0px] px-5 ">
              <div className="flex items-center justify-center">
                <Image className="w-[14rem]" src={Icon03} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Book an Appointment.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}

      {/* Services Section end */}

      {/* Feature Section  */}
      <section>
        <div className="container">
          <div className="flex items-center justify-center flex-col lg:flex-row">
            {/* Feature Content  */}
            <div className="xl:w-[670px] ">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4 lg:w-1/2 md:w-1/2">
                <li className="text_para">1. Schedule appointment directly.</li>
                <li className="text_para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link
                href="/Doctors"
                className="  mx-auto flex items-center justify-start "
              >
                <button className="btn h-[60px]">Learn more </button>
              </Link>
            </div>

            {/* Feature Img  */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <Image className="w-3/4" src={FeatureImg} alt="Feature Img" />
              <div
                className="w-[120px] lg:w-[228px] bg-white absolute bottom-[50px] left-0 md:bottom-[100] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]
      "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-600      ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-400 ">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]  flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <Image className="w-3/4" src={VideoImg} alt="videoImg" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section end */}
      {/* Our great Doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
        </div>
        <DoctorList />
        <FaqList />
      </section>

      {/* Testimonials  */}
      <section>
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patients say</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        <Testimonials />
      </section>
      {/* End  Testimonials */}

      <Footer />
    </>
  );
}
