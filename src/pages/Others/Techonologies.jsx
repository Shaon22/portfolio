import html from '../../assets/HTML.svg'
import css from '../../assets/CSS.svg'
import tailwind from '../../assets/TailwindCSS-Light.svg'
import javascript from '../../assets/JavaScript.svg'
import react from '../../assets/React-Light (1).svg'
import node from '../../assets/NodeJS-Light.svg'
import express from '../../assets/ExpressJS-Light.svg'
import mongoDB from '../../assets/MongoDB.svg'
import firebase from '../../assets/Firebase-Light.svg'
import nextjs from '../../assets/nextjs-icon-2048x1234-pqycciiu.png'
const Techonologies = () => {
    return (
        <div className="lg:h-screen">
            <h1 className="font-bold mb-10 lg:text-3xl lg:mb-20 text-center">Technologies</h1>
            <div className="flex flex-col lg:flex-ro lg:items-center lg:justify-between">

                <div className="lg:w-[50%]">
                    <h1 className="text-center text-xs font-semibold lg:text-xl lg:font-medium">Technologies I Know</h1>
                    <div className="w-[50%] mx-auto grid grid-cols-3 gap-10 mt-10">
                        <div data-aos="fade-right"
                            data-aos-duration="3000">
                            <img src={html} alt="" />
                        </div>
                        <div data-aos="zoom-out"
                            data-aos-duration="3000">
                            <img src={css} alt="" />
                        </div>
                        <div data-aos="fade-left"
                            data-aos-duration="3000">
                            <img src={tailwind} alt="" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000">
                            <img src={javascript} alt="" />
                        </div>
                        <div data-aos="zoom-out" data-aos-duration="3000">
                            <img src={react} alt="" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <img src={node} alt="" />
                        </div>
                        <div data-aos="fade-right" data-aos-duration="3000">
                            <img src={express} alt="" />
                        </div>
                        <div data-aos="zoom-out" data-aos-duration="3000">
                            <img src={mongoDB} alt="" />
                        </div>
                        <div data-aos="fade-left" data-aos-duration="3000">
                            <img src={firebase} alt="" />
                        </div>

                    </div>
                </div>
01959601952
                <div className=" lg:w-[50%]">
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <h1 className="text-xs my-10 text-semibold text-center lg:text-xl lg:font-medium lg:text-left lg:ml-40">Exploring</h1>
                            <img className="w-[50%] mx-auto" src={nextjs}alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Techonologies;