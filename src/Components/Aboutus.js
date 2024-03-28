import React from 'react';
import Image from 'next/image';

function Aboutus() {
    return (
        <div className='aboutus-bg h-full pb-[4rem]'>

            <div className=" textJS  flex justify-center text-[3rem] " >About Us</div>

            <div className=" flex flex-col gap-8 mt-[3rem]  ">

                <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                    <div className=' flex flex-col w-full justify-center z-10'>
                        <div className="div fontJS-subheading text-[#fff] md:text-[3rem] text-[2rem]"><span className='text-[#9290C3]'>1. </span> Heading first</div>
                        <div className='roboto text-[#535C91]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</div>
                    </div>

                    <div className=" h-full w-full align-center  flex justify-center ">

                        <div className="relative transform transition duration-300 hover:scale-110 hover:cursor-pointer  md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                            <Image
                                src="/Assets/lab2.gif"
                                alt="GIF"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>



                <div className="flex  md:flex-row flex-col-reverse h-[15rem] w-[85%] mx-auto  justify-center">
                    <div className=" h-full w-full align-center  flex justify-center ">

                        <div className="relative  transform transition duration-300 hover:scale-110 hover:cursor-pointer md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                            <Image
                                src="/Assets/lab3.gif"
                                alt="GIF"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col w-full justify-center z-10'>
                        <div className="div fontJS-subheading text-[#fff] md:text-[3rem] text-[2rem]"><span className='text-[#9290C3]'>2. </span> Heading second</div>
                        <div className='roboto text-[#535C91]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</div>
                    </div>


                </div>



                <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                    <div className=' flex flex-col w-full justify-center z-10'>
                        <div className="div fontJS-subheading text-[#fff] md:text-[3rem] text-[2rem]"><span className='text-[#9290C3]'>3. </span> Heading third</div>
                        <div className='roboto text-[#535C91]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, praesentium.</div>
                    </div>

                    <div className=" h-full w-full align-center  flex justify-center ">

                        <div className="relative transform transition duration-300 hover:scale-110 hover:cursor-pointer md:w-[60%] sm:w-[40%] w-[48%]    md:h-[90%] h-[65%] my-auto justify-center m-auto">
                            <Image
                                src="/Assets/lab1.gif"
                                alt="GIF"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
}

export default Aboutus;
