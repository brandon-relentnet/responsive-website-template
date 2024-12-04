'use client';

import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

export default function Socials() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <a href="#">
                    <FaGithub className="text-3xl text-text hover:text-subtext0" />
                </a>
            </motion.div>
        </div>
    );
}