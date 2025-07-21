import React from "react";
import { navLinks } from "../../../constants";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar = () => {
    useGSAP(() => {
        // hamne gsap ka prayog kia
        const navTween = gsap.timeline({
            // hamne ek tween ko define kia
            scrollTrigger: {
                // kaha ki scroll se animation trigger ho
                trigger: "nav",
                // nav hoga trigger 
                start: "bottom top",
                // jab Element  ka bottom top se milta hai tab animation start hota hai
            }
        });
        navTween.fromTo(
            // from to ka matlab hota hai ki animation kaise shuru hoga aur kaise khatam hoga
            "nav",
            // nav target hoga
            { backgroundColor: "transparent" },
            // pehle transparent tha
            {
                backgroundColor: "#00000050",
                backdropFilter: "blur(10px)", // it's "backdropFilter", not "backgroundFilter"
                duration: 0.5,
                ease: "power1.inOut"
            }
            // ab ye animations ke sath chalega
        );
    });

    return (
        <nav>
            <div>
                <a href="#home" className="
                    flex items-center gap-2
                ">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Valvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
