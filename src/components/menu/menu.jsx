import { useState } from "react";
import { allCocktails } from "../../../constants"
import { useRef } from "react";
import gsap from "gsap";

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    gsap.fromTo('#title', {opacity:0}, {opacity:1, duration:1});
    gsap.fromTo('.cocktail img', {opacity:0, xPercent: -100}, {
        xPercent:0, opacity:1, duration:1, ease:'power1.inOut'
    })
    gsap.fromTo('.details h2', {yPercent:100, opacity:0}, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })
    gsap.fromTo('.details p', {yPercent:100, opacity:0}, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
    })

    const totalCocktails = allCocktails.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }
    const getCocktailAt = (indexOffset) =>{
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const newCocktail = getCocktailAt(1);

    return (
        <section id="menu" className="overflow-y-hidden" aria-labelledby="menu-heading">
            <h2 className="
                sr-only
            ">
                Cocktail Menu
            </h2>
            <nav className="
                cocktail-tabs
            " aria-label="Cocktail Naviagtion">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;
                    return(
                        <button key={cocktail.id} className={`${isActive 
                            ?'text-white border-white'
                            :'text-white/50 border-white/50'
                        }`} onClick={() => goToSlide(index)}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>
            <div className="
                content
            ">
                <div className="
                    arrows
                ">
                    <button className="
                        text-left
                    " onClick={() => goToSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="" aria-hidden='true' />
                    </button>
                    <button className="
                        tex t-left
                    " onClick={() => goToSlide(currentIndex+1)}>
                        <span>{newCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="" aria-hidden='true' />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" alt="" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu