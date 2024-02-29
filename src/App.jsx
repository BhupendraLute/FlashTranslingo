import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { About, Contact, Home } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Navbar brand="FlashTranslingo" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
