"use client"

import { useState } from "react";
import Skills from "./Skills";
import Projects from "./ProjectsGrid";
import Experience from "./ExperienceTimeline";
import Certifications from "./Certifications";
import Learning from "./Learning";

const tabs = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "learning", label: "Learning" },
];


export default function SectionTabs() {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className="mt-12">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:space-x-4">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md border font-medium transition-colors ${
                    activeTab === tab.id
                        ? "bg-[#C1F025] text-black border-[#C1F025]"
                        : "bg-black text-white border-gray-700 hover:bg-gray-800"
                    }`}
                >
                    {tab.label}
                </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="mt-8 ">
                {activeTab === "skills" && <Skills />}
                {activeTab === "projects" && <Projects showViewAll={true} />}
                {activeTab === "experience" && <Experience />}
                {activeTab === "certifications" && <Certifications />}
                {activeTab === "learning" && <Learning />}
            </div>
        </div>
  );
}