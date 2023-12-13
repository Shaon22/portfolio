
const About = () => {
    return (
        <div className=" p-5 lg:p-20 lg:h-screen">
            <h1 className="lg:text-3xl font-bold mb-10 lg:mb-20 text-center">About Me</h1>
            <div className="flex flex-col lg:flex-row items-center lg:">
                <div className="w-full lg:w-[50%]">
                    <h1 className="text-lg lg:text-3xl font-bold text-blue-400"> Hi there,
                    </h1>
                    <p className="text-sm lg:text-xl font-semibold"> I am a MERN stack developer.I have deep knowledge on Html, CSS,    Tailwind, JavaScript, React, Node.JS, Express.js and MongoDB.Besides I am able to to make the websites perfectly responsive.I thrive on the challenges of transforming innovative ideas into functional and visually appealing applications, leveraging my expertise in front-end development.I have succesfully done some interesting  projects.</p>

                    <button className="btn btn-sm lg:btn-wide lg:text-xl bg-blue-400 text-white my-5">Resume</button>


                </div>
                <div className="w-full lg:w-[50%]">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img className="hidden lg:block lg:w-[50%] mx-auto" src="https://i.ibb.co/SmmjRvn/react.gif" alt="" />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default About;