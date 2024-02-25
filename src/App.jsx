import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import { About, Contact, Home } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
