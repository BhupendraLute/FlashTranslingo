import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar, Translator } from "./Components";
import { About, Contact, Home } from "./pages";
import { DataProvider } from "./context/context";

function App() {
	return (
		<BrowserRouter>
			<DataProvider >
				<Navbar brand="FlashTranslingo" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/translator" element={<Translator />} />
				</Routes>
				<Footer />
			</DataProvider>
		</BrowserRouter>
	);
}

export default App;
