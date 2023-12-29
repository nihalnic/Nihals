import { Route, Routes } from "react-router-dom";
import "./globals.css";
import {
  About,
  ArticleDetails,
  Articles,
  Coding,
  Filming,
  Home,
  Project,
  Uses,
} from "./_root/pages";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articleDetails" element={<ArticleDetails />} />
          <Route path="uses" element={<Uses />} />
          <Route path="coding" element={<Coding />} />
          <Route path="filming" element={<Filming />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
