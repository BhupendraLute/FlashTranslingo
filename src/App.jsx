import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import { Home, Translator  } from "./pages";
import { DataProvider } from "./context/context";

function App() {
	return (
		<BrowserRouter>
			<DataProvider >
				<Navbar brand="FlashTranslingo" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/translator" element={<Translator />} />
				</Routes>
				<Footer />
			</DataProvider>
		</BrowserRouter>
	);
}

export default App;
