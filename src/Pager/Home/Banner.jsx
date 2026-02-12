import React from 'react';
import { motion } from "motion/react"
import Teme1 from '../../assets/freePick/Teame1.jpg'
import Teme2 from '../../assets/freePick/Teame2.jpg'


const Banner = () => {


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex-1'>
                    <h1  className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
                <div className='flex-1 m-3.5 p-3.5'>
                    <motion.img 
                    animate={ {y: [100,150,100]} } 
                    transition={{duration: 6, repeat:Infinity}}
                    src={Teme1}
                    className="max-w-sm rounded-lg shadow-2xl " />


                    <motion.img 
                    animate={ {x: [100,150,100]} } 
                    transition={{duration: 2, repeat:Infinity}}
                    src={Teme2}
                    className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                
            </div>
        </div>
    );
};

export default Banner;