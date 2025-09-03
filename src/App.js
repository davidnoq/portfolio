import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import davidImage from './assets/david.jpg';
import healthImage from './assets/health.PNG';
import foodcraftImage from './assets/foodcraft.png';
import sensorsImage from './assets/sensors.jpg';
import skillbitImage from './assets/skillbit.PNG';
import bitewheelsImage from './assets/bitewheels.jpg';
import natureImage from './assets/nature.jpg';
import catImage from './assets/cat.jpg';
import gradImage from './assets/grad.JPG';
import girlImage from './assets/girl.jpg';
import meImage from './assets/me.JPG';
import { Analytics } from "@vercel/analytics/react"
// Typing animation component with intersection observer
const TypingText = ({ text, speed = 70 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, hasStarted]);

  return (
    <span ref={elementRef}>
      {displayText}
      {hasStarted && <span className="typing-cursor">|</span>}
    </span>
  );
};



function App() {
  return (
    <div className="App bg-indigo-950">
      {/* Hero Section */}
      <section className=" w-full min-h-screen flex flex-col relative overflow-hidden">
        {/* Split Background */}
        <div className="loginAccentBackground h-[1100px] absolute -top-46 -right-96 -left-96 -rotate-6 z-10"></div>
        
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-noise"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left w-full flex-1 px-4 md:px-6 py-8 md:py-12 gap-8 md:gap-12 lg:gap-16 relative z-10 max-w-7xl mx-auto">
          
          {/* Text Content */}
          <div className="flex-1 max-w-3xl lg:max-w-4xl">
            <h1 className="maxHero font-mono uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 md:mb-8 text-white">
              <TypingText text="Hi, I'm David" speed={70} />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed">
              Web Developer & Aspiring Software Engineer — passionate about learning and building innovative solutions.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src={davidImage} 
              alt="David Noguera headshot" 
              className="w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
        
        {/* Scroll Arrow */}
        <div className="flex justify-center pb-20 mb-20 relative z-10">
          <a href="#projects" className="text-white hover:text-blue-300 transition-all duration-300 animate-bounce">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto min-h-screen flex flex-col gap-12 px-4 sm:px-6 md:px-8 py-20 z-0">
      <h1 className="maxHero font-mono uppercase font-semibold text-5xl text-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 md:mb-8 text-white">
          <TypingText text="Projects" speed={70} />
        </h1>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          
          {/* Project 1 - Health Smart */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="border-2 rounded-xl p-4">
              <img 
                src={healthImage} 
                alt="Health Smart Project" 
                className="project-image tech-tag"
                loading="lazy"
              />
            </div>
            
            <div className="project-content p-6">
              <div className="project-text-content">
                <h3 className="text-3xl font-bold font- text-white mb-2 pt-4">Health Smart Holistic Health</h3>
                <p className="project-description font- text-white text-2xl">
                  AI-powered health platform with personalized wellness resources and intelligent search.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Gatsby</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Node.js</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">MongoDB</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Python</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">LangChain</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-gray-400 hover:text-black transition">
                  GitHub
                </a>
                <a href="https://healthsmartholistichealth.program.ufl.edu/" target="_blank" rel="noopener noreferrer" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-blue-400 transition">
                  Website
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - FoodCraft */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="border-2 rounded-xl p-4">
              <img 
                src={foodcraftImage} 
                alt="FoodCraft Project" 
                className="project-image tech-tag"
                loading="lazy"
              />
            </div>
            
            <div className="project-content p-6">
              <div className="project-text-content">
                <h3 className="text-3xl font-bold font- text-white mb-2 pt-4">FoodCraft</h3>
                <p className="project-description font- text-white text-2xl">
                  Minecraft-themed recipe platform with crafting-style interface and personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Angular</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Go</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">MongoDB</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">JWT</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Cypress</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-gray-400 hover:text-black transition">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - SkillBit */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="border-2 rounded-xl p-4">
              <img 
                src={skillbitImage} 
                alt="SkillBit Project" 
                className="project-image tech-tag"
                loading="lazy"
              />
            </div>
            
            <div className="project-content p-6">
              <div className="project-text-content">
                <h3 className="text-3xl font-bold font- text-white mb-2 pt-4">SkillBit</h3>
                <p className="project-description font- text-white text-2xl">
                  AI-powered technical interview platform with automated test generation and instant grading.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Next.js</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">TypeScript</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">PostgreSQL</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Claude AI</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">AWS</span>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-gray-400 hover:text-black transition">
                  GitHub
                </a>
                <a href="https://skillbit-e6uk9k9na-tylerhaismans-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-blue-400 transition">
                  Website
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 4 - BiteWheels */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="border-2 rounded-xl p-4">
              <img 
                src={bitewheelsImage} 
                alt="BiteWheels Project" 
                className="project-image tech-tag"
                loading="lazy"
              />
            </div>
            
            <div className="project-content p-6">
              <div className="project-text-content">
                <h3 className="text-3xl font-bold font- text-white mb-2 pt-4">BiteWheels</h3>
                <p className="project-description font- text-white text-2xl">
                  Food truck marketplace with geospatial search, real-time messaging, and payment processing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Ruby on Rails</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">PostgreSQL</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">Bootstrap</span>
                  <span className="tech-tag px-4 py-2 border-2 border-white rounded-full text-lg text-white font-bold">WebSockets</span>
                  
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="project-link px-6 py-3 bg-indigo-600 text-white text-lg font-bold rounded-lg hover:bg-gray-400 hover:text-black transition">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>


      {/* About Section */}
      <section className="w-full App min-h-screen bg-white py-32 border-b-2 border-black flex flex-col relative overflow-hidden">
      <h1 className="maxHero font-mono uppercase font-semibold text-5xl text-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 md:mb-8 text-black">
          <TypingText text="About Me" speed={70} />
        </h1>
        
        {/* Photo 1 - Nature */}
        <div className="photo-container photo-1">
          <img src={natureImage} alt="Nature" loading="lazy" />
          <div className="photo-caption">I love nature</div>
        </div>
        
        {/* Photo 2 - Cat */}
        <div className="photo-container photo-2">
          <img src={catImage} alt="Cat" loading="lazy" />
          <div className="photo-caption">My cat Megatron {'>:)'} </div>
        </div>
        
        {/* Photo 3 - Graduation */}
        <div className="photo-container photo-3">
          <img src={gradImage} alt="Graduation" loading="lazy" />
          <div className="photo-caption">UF graduate 2025</div>
        </div>
        
        {/* Raw Photo 1 - Girl */}
        <img src={girlImage} alt="Girl" className="raw-photo raw-photo-1" loading="lazy" />
        
        {/* Raw Photo 2 - Me */}
        <img src={meImage} alt="Me" className="raw-photo raw-photo-2" loading="lazy" />
      </section>

      {/* Contact Section */}
      <section className="App bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
        <h1 className="maxHero font-mono uppercase font-semibold text-5xl text-center sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight mb-6 md:mb-8 text-black">
          <TypingText text="LET'S CONNECT" speed={70} />
        </h1>
          
          <div className="text-center">
           
            
                        <div className="flex flex-wrap justify-center gap-8">
                <a href="mailto:davidnoq15@gmail.com" className="tech-tag px-12 py-8 border-4 border-black rounded-full text-2xl text-black font-bold flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  
                </a>
                <a href="https://www.linkedin.com/in/davidjnoguera/" target="_blank" rel="noopener noreferrer" className="tech-tag px-12 py-8 border-4 border-black rounded-full text-2xl text-black font-bold flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                  
                </a>
                <a href="https://github.com/davidnoq" target="_blank" rel="noopener noreferrer" className="tech-tag px-12 py-8 border-4 border-black rounded-full text-2xl text-black font-bold flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
                  </svg>
                  
                </a>
                <a href="/davidnogueraresume.pdf" target="_blank" rel="noopener noreferrer" className="tech-tag px-12 py-8 border-4 border-black rounded-full text-2xl text-black font-bold">
                  View Resume
                </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
