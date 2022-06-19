import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { DetailsPage } from "./pages/details/DetailsPage";
import { LandingPage } from "./pages/hero/LandingPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Routes>
                    <Route index path="/" element={<LandingPage />} />
                    <Route path="/details/:name" element={<DetailsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
