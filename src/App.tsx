import { SideBar } from "./components/SideBar.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import { EducationPage } from "./pages/EducationPage.tsx";
import { ExperiencesPage } from "./pages/ExperiencesPage.tsx";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { BreadCrumbs } from "./components/BreadCrumbs.tsx";
import { SaveMenu } from "./components/SaveMenu.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";

import "./App.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <SideBar></SideBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <BreadCrumbs></BreadCrumbs>
        <div style={{ overflow: "auto" }}>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
          </Routes>
        </div>
        <SaveMenu></SaveMenu>
      </div>
    </div>
  );
}
