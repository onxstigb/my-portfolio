"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Play, Mail, Github, Linkedin, 
  User, X, Cpu, Workflow, Layers, Terminal 
} from 'lucide-react';

// --- THEME CONFIGURATION ---
const theme = {
  colors: {
    bg: "bg-[#FDFCF0]", // MCM Cream
    text: "text-[#2A2A2A]", // Bauhaus Dark Grey
    accent: "text-[#E94E1B]", // International Orange
    tech: "border-[#A0A0A0]", // Y2K Silver Border
    highlight: "bg-[#0044CC]", // Retro Blue
  }
};

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    title: "Jaguar Launch",
    category: "UI/UX",
    type: "Canvas LMS",
    image: "/images/jaguar-launch.jpg",
    link: "https://iu.instructure.com/enroll/3W48RC",
    description: "Jaguar Launch is a student-centered digital experience built to streamline pre-orientation communication.",
    role: "Lead UI/UX Designer and Primary Project Coordinator. I manage the design and structure of a Canvas-based course experience, serving as the main point of contact between campus offices, departments, and stakeholders to gather and implement content.",
    skills: ["Figma", "Canvas LMS", "UX Research", "UI Design"],
    process: "Jaguar Launch is a student-centered digital experience built within Canvas to streamline pre-orientation communication for incoming students. Designing within a learning management system required adapting UI/UX principles to a more structured environment. I focused on organizing large amounts of information into clear, digestible modules while maintaining a visually engaging and easy-to-navigate experience. My process involved translating content from multiple sources into cohesive layouts, prioritizing clarity and accessibility so students wouldn’t feel overwhelmed. I used custom HTML/CSS and visual design tools to enhance Canvas’s default structure, creating a more polished and intentional user experience while still working within platform limitations."
  },
  {
    id: 2,
    title: "Project Redline {WIP}",
    category: "Audio",
    type: "Lead Sound Design",
    image: "/images/album-cover.JPEG",
    embedUrl: "https://w.soundcloud.com/player/?url=https://soundcloud.com/atlasveil/overclocked&color=%23E94E1B&visual=true",
    link: "https://soundcloud.com/atlasveil/overclocked",
    description: "Serving as Lead Sound Designer on a developing racing game, creating dynamic music and sound effects.",
    role: "Lead Sound Designer on a six-person development team. I am responsible for creating and implementing all audio elements, including sound effects and music, for a low-poly racing game built in Unity.",
    skills: ["FL Studio", "Wwise", "Sound Synthesis", "Game Audio"],
    process: "Project Redline focuses on delivering an immersive racing experience through cohesive and responsive audio design. My process begins with identifying the emotional tone and pacing of the game, then designing soundscapes that enhance speed, intensity, and player feedback. I create all audio assets from scratch, ensuring a unique and consistent sonic identity. Using middleware, I integrate dynamic audio systems that respond to gameplay in real time, such as acceleration, collisions, and environmental changes. Collaboration is a key part of my workflow, as I work closely with developers and designers to align audio with gameplay mechanics and overall vision."
  },
  {
    id: 3,
    title: "Godot Target Practice",
    category: "3D/Dev",
    type: "Godot Engine",
    image: "/images/GodotLoading-Screen.jpg", 
    link: "https://onxstigb.itch.io/godot-target-practice",
    description: "A fast-paced Godot target-practice game where you shoot or click targets to test your aim.",
    role: "Solo Developer. Designed and built a simple target-shooting game as an introduction to the Godot game engine.",
    skills: ["GDScript", "Godot Engine", "Game Design"],
    process: "Godot Target Practice was created as a foundational project to learn the workflow and capabilities of the Godot engine. The goal was to build a straightforward, interactive experience while focusing on core game development principles. I designed a system where targets appear dynamically on screen, encouraging quick player reaction and accuracy. I implemented a timer-based gameplay loop and a scoring system that tracks performance and displays a final score at the end of each session. Throughout development, I focused on understanding scene structure, scripting, and event handling within Godot, using iteration and testing to refine functionality."
  },
  {
    id: 4,
    title: "Visual Works Vol.1",
    category: "Art",
    type: "Digital Works",
    image: "/images/livingRoomhero.jpg",
    images: [
      "/images/livingRoomhero.jpg",
      "/images/Red_PandaCharacter.jpg",
      "/images/character-sketch-plant.jpeg",
      "/images/Music-Creators-Callout.jpg",
    ],
    link: "#",
    description: "A collection of digital works including character designs, sketches, and experimental pieces.",
    role: "Artist & Designer. Curated and created a collection of digital works showcasing visual development, experimentation, and technical growth across multiple tools and mediums.",
    skills: ["Digital Illustration", "Character Design", "Layout Design"],
    process: "Visual Works Vol. 1 is a collection of studies and creative explorations developed over time, highlighting both foundational skills and stylistic experimentation. The project brings together work across 2D and 3D pipelines, emphasizing process as much as final output. Pieces include a fully realized 3D living room created using Maya and Substance 3D, early character design development following a red panda concept from initial sketches to a refined Illustrator asset, and a conceptual social gathering advertisement exploring layout, branding, and visual communication. Each piece reflects a different stage of growth, with a focus on learning new tools, refining artistic techniques, and experimenting with form, color, and composition."
  },
  {
    id: 5,
    title: "DocuGen AI",
    category: "UI/UX",
    type: "React Website",
    image: "/images/DocuGen-HomePage.jpg", 
    link: "https://n317-final.vercel.app/",
    description: "DocuGen AI converts raw source code into readable, structured markdown documentation.",
    role: "UI/UX Designer & Frontend Developer. Designed the user experience and implemented the frontend of the platform using React.",
    skills: ["React", "Next.js", "Tailwind CSS", "AI Prompt Engineering"],
    process: "DocuGen AI is a tool designed to convert raw source code into clean, structured markdown, reducing the need for manual documentation and improving readability for developers. My focus was creating an interface that feels intuitive and efficient, allowing users to quickly input code and receive organized output without friction. I approached the design with clarity and usability in mind, simplifying complex functionality into a streamlined workflow. This included designing input/output layouts, establishing clear visual hierarchy, and ensuring responsiveness across different screen sizes. On the development side, I translated these designs into a functional frontend using React, focusing on component-based architecture and maintainable code."
  }
];

const categories = ["All", "UI/UX", "Audio", "3D/Dev", "Art"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [showAbout, setShowAbout] = useState(false); 
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentGalleryIndex(0);
  };

  return (
    <div className={`min-h-screen ${theme.colors.bg} ${theme.colors.text} font-sans selection:bg-orange-500 selection:text-white relative`}>
      
      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-b border-gray-300 pb-12">
        <div className="md:col-span-8">
          <p className={`font-mono text-sm mb-4 tracking-widest uppercase ${theme.colors.accent}`}>
            {`/// System Ready: Onesti_Brookins`}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            CREATIVE<br />
            TECHNOLOGIST<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
              & AUDIO ARTIST
            </span>
          </h1>
          <div className="mt-8 max-w-xl">
            <p className="text-lg md:text-xl opacity-80 font-medium">
              Hi! I am Onesti. I am a Media Arts & Science student at IU Indianapolis.
            </p>
            <button 
              onClick={() => setShowAbout(true)}
              className="mt-6 flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full font-mono text-xs uppercase hover:bg-black hover:text-white transition-colors"
            >
              <User size={14} /> 
              About_User.exe
            </button>
          </div>
        </div>
        
        {/* Contact Window */}
        <div className="md:col-span-4 w-full">
          <div className="border border-gray-400 bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] p-4 rounded-sm">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
              <span className="font-mono text-xs text-gray-400 uppercase">contact.sys</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a href="mailto:onestibrookins@gmail.com" className="flex items-center gap-2 hover:text-orange-600 transition-colors font-mono text-sm">
                <Mail size={14}/> onestibrookins@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/onestibrookins/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors font-mono text-sm">
                <Linkedin size={14}/> LinkedIn
              </a>
              <a href="https://github.com/onxstigb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black transition-colors font-mono text-sm">
                <Github size={14}/> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- FILTER NAVIGATION --- */}
      <nav className="max-w-7xl mx-auto px-8 py-12 sticky top-0 z-50 bg-[#FDFCF0]/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-6 py-2 font-mono text-sm uppercase tracking-wider border transition-all duration-300
                ${filter === cat 
                  ? "bg-[#2A2A2A] text-white border-[#2A2A2A] shadow-[4px_4px_0px_0px_#E94E1B]" 
                  : "bg-transparent border-gray-400 hover:bg-white hover:border-black"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* --- PORTFOLIO GRID --- */}
      <main className="max-w-7xl mx-auto px-8 pb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white border border-gray-300 hover:border-black transition-all cursor-pointer flex flex-col"
              >
                <div className="bg-gray-100 border-b border-gray-300 px-3 py-1 flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase text-gray-500">{project.category} {project.type}</span>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>

                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <Image 
                    src={project.image || (project.images ? project.images[0] : "/api/placeholder/400/320")} 
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white border-2 border-black px-4 py-2 font-mono text-xs font-bold uppercase shadow-[4px_4px_0px_#E94E1B]">
                      Open_File.exe
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* --- UNIVERSAL PROJECT DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFCF0] w-full max-w-5xl max-h-[90vh] border-2 border-[#2A2A2A] shadow-[8px_8px_0px_#E94E1B] overflow-hidden flex flex-col"
            >
              {/* Window Header */}
              <div className="bg-[#2A2A2A] text-white px-4 py-3 flex justify-between items-center shrink-0">
                <span className="font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={14} /> project_dossier_0{selectedProject.id}.sys
                </span>
                <button onClick={closeModal} className="hover:text-orange-500 transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left Column: Visuals */}
                  <div className="space-y-6">
                    <div className="border-2 border-black bg-white aspect-video relative overflow-hidden shadow-[4px_4px_0px_#C0C0C0]">
                      {selectedProject.embedUrl ? (
                        <iframe src={selectedProject.embedUrl} className="w-full h-full" frameBorder="0" allow="autoplay" />
                      ) : selectedProject.images ? (
                        <div className="w-full h-full relative">
                           <Image 
                            src={selectedProject.images[currentGalleryIndex]} 
                            alt="gallery" fill className="object-contain p-2" 
                           />
                           {/* Gallery Nav */}
                           <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                             <button 
                               onClick={() => setCurrentGalleryIndex(prev => prev > 0 ? prev - 1 : selectedProject.images!.length - 1)}
                               className="bg-white border-2 border-black w-8 h-8 flex items-center justify-center hover:bg-orange-500 hover:text-white"
                             >‹</button>
                             <button 
                               onClick={() => setCurrentGalleryIndex(prev => (prev + 1) % selectedProject.images!.length)}
                               className="bg-white border-2 border-black w-8 h-8 flex items-center justify-center hover:bg-orange-500 hover:text-white"
                             >›</button>
                           </div>
                        </div>
                      ) : (
                        <Image src={selectedProject.image || ""} alt={selectedProject.title} fill className="object-cover" />
                      )}
                    </div>
                    
                    {/* Skills Tags */}
                    <div>
                      <h4 className="font-mono text-[10px] uppercase font-bold text-gray-400 mb-3 tracking-widest">Stack_Exploration</h4>
                      <div className="flex flex-wrap gap-2">
                         {selectedProject.skills?.map(skill => (
                           <span key={skill} className="px-3 py-1 bg-white border border-gray-300 font-mono text-[10px] uppercase font-bold shadow-[2px_2px_0px_#A0A0A0]">
                             {skill}
                           </span>
                         ))}
                      </div>
                    </div>

                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" 
                        className="inline-flex items-center gap-3 bg-[#E94E1B] text-white px-8 py-4 font-mono text-sm uppercase font-bold hover:bg-black transition-all shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none">
                        Execute External Link <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Right Column: Information */}
                  <div className="space-y-10">
                    <header>
                      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{selectedProject.title}</h2>
                      <div className="mt-4 flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">
                        <Layers size={14} /> {selectedProject.category} {selectedProject.type}
                      </div>
                    </header>

                    <div className="space-y-8">
                      {/* Role Section */}
                      <section className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 border border-gray-300"><User size={20} /></div>
                        <div>
                          <h4 className="font-mono text-xs uppercase font-bold text-orange-600 mb-1 tracking-widest">Primary_Role</h4>
                          <p className="font-medium text-lg leading-tight">{selectedProject.role}</p>
                        </div>
                      </section>

                      {/* Process Section */}
                      <section className="flex items-start gap-4">
                        <div className="p-2 bg-gray-100 border border-gray-300"><Workflow size={20} /></div>
                        <div>
                          <h4 className="font-mono text-xs uppercase font-bold text-orange-600 mb-2 tracking-widest">Creative_Process</h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {selectedProject.process}
                          </p>
                        </div>
                      </section>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-xs text-gray-400 font-mono italic">
                        &gt; status: detailed_view_active<br />
                        &gt; location: root/projects/{selectedProject.title.replace(/\s+/g, '_').toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ABOUT ME MODAL --- */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowAbout(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFCF0] w-full max-w-2xl border-2 border-[#2A2A2A] shadow-[8px_8px_0px_#E94E1B] overflow-hidden"
            >
              <div className="bg-[#2A2A2A] text-white px-4 py-2 flex justify-between items-center cursor-move">
                <span className="font-mono text-xs uppercase tracking-widest">user_profile.exe</span>
                <button onClick={() => setShowAbout(false)} className="hover:text-[#E94E1B]"><X size={18} /></button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-[#C0C0C0] p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2A2A2A]">
                  <div className="w-full aspect-square border-2 border-[#2A2A2A] bg-white relative">
                    <Image src="/images/onestiBrookinsHeadshot.jpg" alt="Onesti" fill className="object-cover grayscale contrast-125" />
                  </div>
                </div>
                <div className="col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black mb-2 uppercase">Onesti Brookins</h2>
                    <p className="font-mono text-sm text-[#E94E1B] mb-6">Media Arts & Science @ IU Indianapolis</p>
                    <p className="text-sm leading-relaxed text-gray-700">
                      I bridge the gap between logic and emotion. I am dual-specializing in Game Design and Web Development to create digital experiences with a pulse.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-300 flex flex-wrap gap-2">
                    {["React", "UE5", "Figma", "FL Studio", "Wwise", "TypeScript", "GDScript"].map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white border border-black text-[10px] font-bold shadow-[2px_2px_0px_#C0C0C0]">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-gray-500">
            © 2026 Onesti Brookins. Built with Next.js & Late Nights.
          </p>
          <div className="flex gap-6">
             <a href="/resume.pdf" className="font-mono text-xs uppercase hover:text-orange-600">Resume</a>
             <a href="https://github.com/onxstigb" className="font-mono text-xs uppercase hover:text-orange-600">Github</a>
             <a href="https://onxstigb.itch.io/" className="font-mono text-xs uppercase hover:text-orange-600">Itch.io</a>
          </div>
        </div>
      </footer>

    </div>
  );
}