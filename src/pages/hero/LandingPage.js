import React from "react";
import girl1 from "../../img/nguyen-thu-hoai-JtJhn0rjEDE-unsplash.jpg";
import girl2 from "../../img/alexander-krivitskiy-8Z8JijlydJs-unsplash.jpg";
import girl3 from "../../img/jingyi-lyu-Qjjptduuqnk-unsplash.jpg";
import "./LandingPage.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const data = [
    {
        id: "01",
        photographer: "Nguyen Thu Hoai",
        image: girl1,
        unsplash_profile: "https://unsplash.com/@thwhoai",
    },
    {
        id: "02",
        photographer: "Krivitskiy",
        image: girl2,
        unsplash_profile: "https://unsplash.com/@krivitskiy",
    },
    {
        id: "03",
        photographer: "Jingyi Lyu",
        image: girl3,
        unsplash_profile: "https://unsplash.com/@melonbelon",
    },
];

export const LandingPage = () => {
    const navigate = useNavigate();

    const text = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="landing-container">
            {data?.map((item) => (
                <div key={item.id} className="landing-content-box">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        onClick={() =>
                            navigate(`/details/${item.photographer}`)
                        }
                        className="landing-img-box"
                    >
                        <motion.img
                            whileHover={{
                                scale: 1.15,
                                transition: {
                                    type: "spring",
                                    duration: 0.7,
                                },
                            }}
                            className="landing-img"
                            src={item.image}
                        />
                    </motion.div>

                    <div className="links">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.7,
                                delay: 0.7,
                            }}
                            variants={text}
                            className="number"
                        >
                            {item.id}
                        </motion.h1>
                        <motion.a
                            initial="hidden"
                            animate="visible"
                            transition={{
                                duration: 0.5,
                                delay: 0.7,
                            }}
                            variants={text}
                            href={item.unsplash_profile}
                            target="_blank"
                        >
                            {item.photographer}
                        </motion.a>
                    </div>
                </div>
            ))}
        </div>
    );
};
