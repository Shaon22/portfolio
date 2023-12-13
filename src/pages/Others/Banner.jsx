
const Banner = () => {
    return (
        <div className="">
            <div className="">
                <img className="h-screen w-full relative lg:" src="https://i.ibb.co/wMKpxmY/Morgan-Maxwell-1.png" alt="" />

                <div className="absolute bottom-20 left-5 sm:bottom-20 sm:left-8 lg: lg:left-32">
                    <div className="flex flex-col lg:flex-row items-center lg:gap-28">
                        <img className=" w-[50%] lg:w-[35%] bg-slate-300  pt-10 rounded-xl " src="https://i.ibb.co/CVgRBp0/1702308746920-removebg-preview.png" alt="" />
                        <div className="text-center lg:text-left">
                        <h1 className="text-xl font-bold text-blue-400">I am</h1>
                            <h1 className="text-2xl mt-1 lg:text-6xl font-bold text-white">SHAON POLOCK ROY</h1>
                            <h1 className="text-base font-semibold text-gray-500 lg:text-3xl  my-1 lg:my-5 ">
                                React developer from Dhaka,Bangladesh.
                            </h1>
                            <h1 className="text-sm font-medium text-gray-500 lg:text-xl">Design and Develop a <br />sustainable website with me</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute right-24 bottom-8 lg:right-4 lg:bottom-16">
                    <div className="flex gap-5 lg:gap-10">
                        <img className="w-[35px] lg:w-[80px] " src="https://i.ibb.co/P6Jwq3z/mongodb-original-wordmark-logo-icon-146425.png" alt="" />
                        <img className="w-[30px] lg:w-[80px] " src="https://i.ibb.co/Jv3xmFP/express-1.png" alt="" />
                        <img className="w-[50px] lg:w-[80px] " src="https://i.ibb.co/K0XZNh5/react-1.png" alt="" />
                        <img className="w-[40px] lg:w-[80px] " src="https://i.ibb.co/MDG8Hr6/nodejs-1.png" alt="" />

                    </div>
                </div>
            </div>
            <div>
        </div>
        </div>
    );
};

export default Banner;