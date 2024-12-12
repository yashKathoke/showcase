'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ProjectCard from '@/app/components/ProjectCard'

export default function Projects() {
  const headerRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    // Set initial styles
    gsap.set(headerRef.current, { opacity: 0, y: -50 })
    gsap.set(projectsRef.current.children, { opacity: 0, y: 50 })

    // Create the timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Animate header
    tl.to(headerRef.current, { opacity: 1, y: 0, duration: 1 })

    // Animate project cards
    tl.to(projectsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2
    }, '-=0.5') // Start slightly before the header animation finishes

    // Cleanup function
    return () => {
      tl.kill()
    }
  }, [])

  const projects = [
    {
      title: "Bookmark-URL",
      description: "A web application for saving and managing favourite URLs using React and Supabase. Features include secure user authentication, responsive design with Tailwind CSS, tagging system, and CRUD functionality for links.",
      technologies: ["React.js", "Supabase", "Tailwind CSS", "Redux-Toolkit", "PostgreSQL"],
      date: "Aug 2024",
      githubLink: "https://github.com/yashKathoke/Bookmark-Url",
      liveLink: "https://bookmark-url.vercel.app/"
    },
    {
      title: "iPhone 15 Landing Page",
      description: "A 3D web experience showcasing Apple products with realistic visuals and animations. Built using React and Three.js, featuring responsive design and modular, reusable codebase.",
      technologies: ["React.js", "Three.js"],
      date: "Oct 2024",
      githubLink: "https://github.com/yashKathoke/Apple-threejs",
      liveLink: "https://apple-threejs-rho.vercel.app/"
    },
    {
      title: "Animated Portfolio",
      description: "A portfolio site demonstrating HTML, CSS, and JavaScript animation skills. Utilizes GSAP for animations and Locomotive.js for smooth scrolling.",
      technologies: ["JavaScript", "GSAP", "Locomotive.js"],
      date: "Oct 2024",
      githubLink: "https://github.com/yashKathoke/Animated-Portfolio",
      liveLink: "https://github.com/yashKathoke/Animated-Portfolio"
    },
    {
      title: "Travel Buddy",
      description: "A responsive web application for sharing and exploring travel experiences. Built with PHP and MySQL, featuring CRUD operations for travel blog posts, comments, and likes/dislikes.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      date: "Sep 2024",
      githubLink: "https://github.com/yashKathoke/Travel-Blog-PHP",
      liveLink: "https://github.com/yashKathoke/Travel-Blog-PHP"
    },
    {
      title: "AI Image Search",
      description: "An application that processes images to generate semantic descriptions using a pre-trained model. Allows users to upload, process, and search through images based on extracted semantics.",
      technologies: ["Python", "Hugging Face"],
      date: "Apr 2024",
      githubLink: "https://github.com/yashKathoke/Ai-image-search",
      liveLink: "https://github.com/yashKathoke/Ai-image-search"
    },
    {
      title: "Newletter Landing Page",
      description: "In this project, I have designed a landing of a AI newletter using only HTML and CSS. I took inspiration from https://aiweekly.co/ Newsletter.",
      technologies: ["HTML", "CSS"],
      date: "JUL 2024",
      githubLink: "https://github.com/yashKathoke/Newletter-Landing-Page",
      liveLink: "https://yashkathoke.github.io/Newletter-Landing-Page/"
    }
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)]  py-16 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute h-fit inset-0 bg-gradient-to-br from-blue-200/50 via-purple-200/50 to-pink-200/50 z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 ref={headerRef} className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
          My Projects
        </h1>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

