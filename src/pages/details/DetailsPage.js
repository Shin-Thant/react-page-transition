import React, { useEffect, useState } from "react";
import "./DetailsPage.css";
import girl from "../../img/nguyen-thu-hoai-JtJhn0rjEDE-unsplash.jpg";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

import { data } from "../hero/LandingPage";
import { useParams } from "react-router-dom";

export const DetailsPage = () => {
    const { name } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const found = data?.find((i) => i.photographer === name);
        setItem(found);
    }, []);

    useEffect(() => {
        console.log(item);
    }, [item]);

    const link = {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 1.8,
            },
        },
    };

    const btns = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                delay: 2,
            },
        },
    };

    return item?.image ? (
        <div>
            <div className="details-content">
                <div className="details-links">
                    <motion.a
                        variants={link}
                        initial="hidden"
                        animate="visible"
                        href={item.unsplash_profile}
                        target="_blank"
                    >
                        Unsplash Profile
                    </motion.a>
                </div>

                <motion.h1
                    initial={{
                        y: 80,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            delay: 1.4,
                        },
                    }}
                    className="details-main-text"
                >
                    {item.photographer}
                </motion.h1>

                <div className="social-media">
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={btns}
                        className="link-btn"
                    >
                        <FaFacebookF />
                    </motion.button>
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={btns}
                        className="link-btn"
                    >
                        <BsTwitter />
                    </motion.button>
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={btns}
                        className="link-btn"
                    >
                        <FiInstagram />
                    </motion.button>
                </div>
            </div>

            <motion.div
                initial={{
                    y: -350,
                    width: 400,
                    height: 400,
                }}
                animate={{
                    y: 0,
                    width: "100%",
                    height: "50vh",
                }}
                transition={{
                    duration: 1,
                }}
                className="details-img-box"
            >
                <motion.img
                    transition={{
                        duration: 0.9,
                    }}
                    className="details-img"
                    src={item.image}
                />
            </motion.div>

            <motion.div className="about-container">
                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{
                        margin: "0px 0px -120px 0px",
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        bounceStiffness: 0,
                    }}
                    className="about-head"
                >
                    About Artist
                </motion.h2>

                <motion.div className="about">
                    <motion.h2
                        initial={{
                            x: -100,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        viewport={{
                            margin: "0px 0px -120px 0px",
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            bounceStiffness: 0,
                            delay: 0.7,
                        }}
                        className="left"
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </motion.h2>

                    <motion.p
                        initial={{
                            x: 100,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        viewport={{
                            margin: "0px 0px -120px 0px",
                            once: true,
                        }}
                        transition={{
                            duration: 0.7,
                            bounceStiffness: 0,
                            delay: 0.7,
                        }}
                        className="right"
                    >
                        This is a long established fact that a reader will be
                        distracted by the readable content of a motion.age when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    ) : (
        ""
    );
};
