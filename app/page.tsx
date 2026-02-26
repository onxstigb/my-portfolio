"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Play,
  Mail, Github, Linkedin,
  User, X 
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
    description: "Jaguar Launch is a student-centered digital experience built to streamline pre-orientation communication and help new IU Indianapolis students feel prepared and connected.",
  },
  {
    id: 2,
    title: "Project Redline {WIP}",
    category: "Audio",
    type: "Lead Sound Design",
    embedUrl: "https://w.soundcloud.com/player/?url=https://soundcloud.com/atlasveil/overclocked&color=%23E94E1B&visual=true",
    link: "https://soundcloud.com/atlasveil/overclocked",
    description: "Serving as Lead Sound Designer on a developing racing game, I create and implement dynamic music and sound design to reinforce gameplay feedback and intensify the racing experience.",
  },
  {
    id: 3,
    title: "Godot Target Practice",
    category: "3D/Dev",
    type: "Godot Engine",
    image: "/images/GodotLoading-Screen.jpg", 
    link: "https://onxstigb.itch.io/godot-target-practice",
    description: "A fast-paced Godot target-practice game where you shoot or click targets as they appear to test your aim, earn points, and beat your high score.",
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
    description: "This is a collection of digital works I have made from the past few years, including character designs, sketches, and experimental pieces. A peek into my creative process and artistic growth.",
  },
  {
    id: 5,
    title: "DocuGen AI",
    category: "UI/UX",
    type: "React Website",
    image: "/images/DocuGen-HomePage.jpg", 
    link: "https://n317-final.vercel.app/",
    description: "DocuGen AI converts raw source code into readable, structured markdown. Reduce manual effort and improve code clarity. For this site, I designed the UI/UX and implemented the frontend using React.",
  }
];

const categories = ["All", "UI/UX", "Audio", "3D/Dev", "Art"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [showAbout, setShowAbout] = useState(false); 
  const [activeSketchbook, setActiveSketchbook] = useState<typeof projects[number] | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
            <p className="mt-2 font-mono text-sm opacity-60">
              Specializing in UI Design, Game Dev, and Audio Engineering.
              Blending function with expression.
            </p>
            
            {/* About Me Trigger Button */}
            <button 
              onClick={() => setShowAbout(true)}
              className="mt-6 flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full font-mono text-xs uppercase hover:bg-black hover:text-white transition-colors"
            >
              <User size={14} /> 
              About_User.exe
            </button>
          </div>
        </div>
        
        {/* Contact "Window"*/}
        <div className="md:col-span-4 w-full">
          <div className="border border-gray-400 bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] p-4 rounded-sm">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
              <span className="font-mono text-xs">contact.exe</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
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
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => {
                  if (project.images) {
                    setActiveSketchbook(project);
                    setCurrentImage(0);
                  }
                }}
                className={`group relative bg-white border border-gray-300 transition-colors duration-300 flex flex-col ${project.images ? "cursor-pointer hover:border-[#E94E1B]" : "hover:border-blue-500"}`}
              >
                {/* Card Header / Window Bar */}
                <div className="bg-gray-100 border-b border-gray-300 px-3 py-1 flex justify-between items-center">
                  <span className="font-mono text-[10px] uppercase text-gray-500">{project.category} {`//`} {project.type}</span>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>

                {/* Content Container */}
                <div className="aspect-video w-full bg-gray-200 overflow-hidden relative">
                  {project.embedUrl ? (
                     <div className="w-full h-full relative">
                        <iframe 
                          src={project.embedUrl} 
                          className="w-full h-full absolute inset-0"
                          frameBorder="0"
                          allow="autoplay"
                        ></iframe>
                     </div>
                  ) : project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">No image available</div>
                  )}
                  
                  {/* Overlay Action Button */}
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     {/* Show "Open Gallery" if it's a sketchbook */}
                     {project.images && (
                        <div className="bg-white border-2 border-black px-4 py-2 font-mono text-sm uppercase font-bold text-[#E94E1B] flex items-center gap-2">
                           <ExternalLink size={14}/> Open Gallery
                        </div>
                     )}

                     {/* Show normal buttons for other projects */}
                     {project.link && project.link !== "#" && !project.images && (
                       <a 
                         href={project.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="bg-white border-2 border-black px-4 py-2 font-mono text-sm uppercase font-bold hover:bg-[#E94E1B] hover:text-white flex items-center gap-2"
                         onClick={(e) => e.stopPropagation()}
                       >
                         {project.category === "3D/Dev" || project.category === "Audio" ? <Play size={14}/> : <ExternalLink size={14}/>}
                         {project.category === "3D/Dev" ? "Play Demo" : "View Project"}
                       </a>
                     )}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="font-mono text-xs text-gray-400">ID_0{project.id}</span>
                    {project.link && project.link !== "#" && !project.images && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-black transition-colors" onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-xs text-gray-500">
            © 2026 Onesti Brookins. Built with Next.js & Late Nights.
          </p>
          <div className="flex gap-6">
             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase hover:text-orange-600 cursor-pointer">Resume</a>
             <a href="https://github.com/onxstigb" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase hover:text-orange-600 cursor-pointer">Github</a>
             <a href="https://onxstigb.itch.io/" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase hover:text-orange-600 cursor-pointer">Itch.io</a>
          </div>
        </div>
      </footer>

      {/* --- ABOUT ME --- */}
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowAbout(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFCF0] w-full max-w-2xl border-2 border-[#2A2A2A] shadow-[8px_8px_0px_#E94E1B] overflow-hidden"
            >

              {/* Window Bar */}
              <div className="bg-[#2A2A2A] text-white px-4 py-2 flex justify-between items-center cursor-move">
                <span className="font-mono text-xs uppercase tracking-widest">user_profile.exe</span>
                <button onClick={() => setShowAbout(false)} className="hover:text-[#E94E1B]">
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3">

                {/* Photo Section */}
                <div className="bg-[#C0C0C0] p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#2A2A2A]">
                  <div className="w-full aspect-square border-2 border-[#2A2A2A] bg-white relative">
                    <Image 
                      src="/images/onestiBrookinsHeadshot.jpg" 
                      alt="Onesti Brookins"
                      fill
                      className="w-full h-full object-cover filter grayscale contrast-125" 
                    />
                    <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-black mb-2 uppercase">Onesti Brookins</h2>
                    <p className="font-mono text-sm text-[#E94E1B] mb-6">
                      Media Arts & Science Student @ IU Indianapolis
                    </p>
                    
                    <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                      <p>
                        I bridge the gap between <strong className="text-black">logic and emotion</strong>. 
                        Whether I&apos;m writing code for a game mechanic, designing a high-fidelity interface in Figma, 
                        or composing an ambient soundtrack, my goal is immersion.
                      </p>
                      <p>
                        Currently dual-specializing in Game Design and Web Development. 
                        I believe the best digital experiences feel like they&apos;ve got a pulse.
                      </p>
                    </div>
                  </div>

                  {/* Skills / Stats */}
                  <div className="mt-8 pt-6 border-t border-gray-300">
                    <h3 className="font-mono text-xs uppercase text-gray-500 mb-3">Skill_Tree</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React/Next.js", "Unreal Engine 5", "Figma", "FL Studio", "Godot", "HTML/CSS/JS", "Unity"].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-white border border-[#2A2A2A] text-xs font-bold shadow-[2px_2px_0px_#C0C0C0]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SKETCHBOOK VIEWER --- */}
      <AnimatePresence>
        {activeSketchbook && activeSketchbook.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setActiveSketchbook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDFCF0] w-full max-w-4xl border-2 border-[#2A2A2A] shadow-[8px_8px_0px_#0044CC] overflow-hidden flex flex-col"
            >
              {/* Window Bar */}
              <div className="bg-[#2A2A2A] text-white px-4 py-2 flex justify-between items-center shrink-0">
                <span className="font-mono text-xs uppercase tracking-widest">
                  sketchbook_viewer.exe
                </span>
                <button
                  onClick={() => setActiveSketchbook(null)}
                  className="hover:text-[#E94E1B]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 w-full text-left">
                  {activeSketchbook.title}
                </h2>

                {/* Carousel */}
                <div className="relative flex items-center justify-center w-full h-[60vh] bg-gray-100 border-2 border-gray-300">
                    <button
                      className="absolute left-4 z-10 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#E94E1B] hover:text-white transition-colors shadow-[4px_4px_0px_#C0C0C0] active:translate-y-1 active:shadow-none font-bold text-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage((prev) =>
                          prev === 0
                            ? activeSketchbook.images!.length - 1
                            : prev - 1
                        )
                      }}
                    >
                      ‹
                    </button>

                    <div className="relative w-full h-full p-4">
                      <Image
                        src={activeSketchbook.images[currentImage]}
                        alt={`${activeSketchbook.title} - Image ${currentImage + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <button
                      className="absolute right-4 z-10 w-10 h-10 bg-white border-2 border-black flex items-center justify-center hover:bg-[#E94E1B] hover:text-white transition-colors shadow-[4px_4px_0px_#C0C0C0] active:translate-y-1 active:shadow-none font-bold text-xl"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage((prev) =>
                          prev === activeSketchbook.images!.length - 1
                            ? 0
                            : prev + 1
                        )
                      }}
                    >
                      ›
                    </button>
                </div>

{/* Image Counter & Description Area */}
                <div className="mt-6 w-full flex flex-col gap-3">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                        <span className="font-mono text-xs text-[#E94E1B] font-bold uppercase tracking-widest">
                            IMG_0{currentImage + 1} OF 0{activeSketchbook.images.length}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-mono">
                        {activeSketchbook.description}
                    </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}