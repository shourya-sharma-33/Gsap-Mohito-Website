import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx';
import Cocktails from './components/cocktails/cocktails.jsx';
import About from './components/about/about.jsx';
import Art from './components/art/art.jsx';
import Menu from './components/menu/menu.jsx';
import Footer from './components/footer/footer.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
    <Navbar />
	<Hero/>
	<Cocktails/>
	<About/>
	<Art/>
	<Menu/>
	<Footer/>
	</main>
 )
}

export default App
