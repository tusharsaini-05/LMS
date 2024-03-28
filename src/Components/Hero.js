import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



function hero() {
    return (

        <main className='heroBg ' id='#'>

            <div className="flex h-[39rem] sm:h-[44rem] md:h-[39rem] lg:h-[36rem] xl:h-[38rem] justify-center  w-full bg-red flex-col md:flex-row">


                <div className="h-full w-full flex flex-col justify-center hero-txt  mt-[5rem] sm:mt-[4rem] md:mt-0 hero1">
                    <div className="flex flex-col w-[80%] m-auto gap-6">
                        <div className="hero-txt-magic text-[1.6rem] textJS sm:text-[2.8rem]">
                            <p>Laboratory Management System</p>
                        </div>
                        <div className="buttons flex flex-row gap-6 mb-[1rem] roboto text-[#9290C3]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Corporis alias veritatis assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, soluta.</p>

                        </div>
                    </div>
                </div>


                <div className=" h-full w-full align-center ">

                    <div className="relative  lg:w-[55%] md:w-[55%] sm:w-[40%] w-[48%]  md:mt-[12rem] lg:h-[50%] md:h-[40%] h-[65%] my-auto justify-center m-auto">
                        <Image
                            src="/Assets/lab4.gif"
                            alt="GIF"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>

        </main>

    );
}

export default hero;
