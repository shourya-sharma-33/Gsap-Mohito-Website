import React from "react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../../constants/index.js";
import { useGSAP } from "@gsap/react";

const Cocktails = () => {
    useGSAP(() => {
        const parallexTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        });
        parallexTimeline
            .from('#c-left-leaf', {x:-100, y:100})
            .from('#c-right-leaf', {x:100, y:-100});
        })
    
  return (
    <section id="cocktails" className="noisy">
        <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt="" />
        <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt="" />
        <div className="list">
            <div className="popular">
                <h2>Popular Cocktails</h2>
                <ul>
                    {cocktailLists.map(({name, country, details, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {details}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="popular">
                <h2>Popular Cocktails</h2>
                <ul>
                    {cocktailLists.map(({name, country, details, price}) => (
                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {details}</p>
                            </div>
                            <span>- {price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Cocktails;