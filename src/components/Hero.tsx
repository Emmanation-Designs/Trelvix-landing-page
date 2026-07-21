/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Play, Sparkles, MessageSquare, Image as ImageIcon, Mic, Code, Database, ArrowRight, User, Terminal, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Real generated image paths
const IMAGE_CORE = '/src/assets/images/trelvix_thought_core_1784503998992.jpg';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simulation States for the Mockup: 'chat' | 'image' | 'voice'
  const [activeTab, setActiveTab] = useState<'chat' | 'image' | 'voice'>('chat');
  const [simState, setSimState] = useState<number>(0); // sub-state for simulation cycles
  const [typingText, setTypingText] = useState('');
  const [aiResponseText, setAiResponseText] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [voiceWave, setVoiceWave] = useState<number[]>([10, 20, 15, 30, 25, 40, 15, 20, 10]);

  // Handle Mouse Move for Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Live Mockup Interaction Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (activeTab === 'chat') {
      // Chat Cycle
      if (simState === 0) {
        // User starts typing
        setTypingText('');
        setAiResponseText('');
        setIsThinking(false);
        let text = 'Design an optimal algorithm for neural network pathfinding...';
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i < text.length) {
            setTypingText((prev) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(typeInterval);
            setSimState(1); // switch to thinking
          }
        }, 40);
        return () => clearInterval(typeInterval);
      } else if (simState === 1) {
        // Thinking
        setIsThinking(true);
        timer = setTimeout(() => {
          setIsThinking(false);
          setSimState(2); // stream response
        }, 1800);
      } else if (simState === 2) {
        // AI Streams Response
        let response = 'Trelvix Advanced Reasoning resolved routing matrix:\n- Optimized latency by 42%\n- Self-healing node selection activated\n- Grid convergence verified.';
        let i = 0;
        const streamInterval = setInterval(() => {
          if (i < response.length) {
            setAiResponseText((prev) => prev + response.charAt(i));
            i++;
          } else {
            clearInterval(streamInterval);
            // Wait 4 seconds, then restart cycle
            timer = setTimeout(() => {
              setSimState(0);
            }, 5000);
          }
        }, 20);
        return () => clearInterval(streamInterval);
      }
    } else if (activeTab === 'image') {
      // Image Generation Cycle
      if (simState === 0) {
        setTypingText('');
        setIsThinking(false);
        let text = 'Create a premium logo concept for Trelvix AI...';
        let i = 0;
        const typeInterval = setInterval(() => {
          if (i < text.length) {
            setTypingText((prev) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(typeInterval);
            setSimState(1); // thinking / generating
          }
        }, 50);
        return () => clearInterval(typeInterval);
      } else if (simState === 1) {
        setIsThinking(true);
        timer = setTimeout(() => {
          setIsThinking(false);
          setSimState(2); // completed
        }, 2000);
      } else if (simState === 2) {
        timer = setTimeout(() => {
          setSimState(0);
        }, 6000);
      }
    } else if (activeTab === 'voice') {
      // Voice Cycle
      const waveInterval = setInterval(() => {
        setVoiceWave(Array.from({ length: 14 }, () => Math.floor(Math.random() * 45) + 5));
      }, 100);
      return () => clearInterval(waveInterval);
    }

    return () => clearTimeout(timer);
  }, [activeTab, simState]);

  // Tab change resets simulation state
  const selectTab = (tab: 'chat' | 'image' | 'voice') => {
    setActiveTab(tab);
    setSimState(0);
    setTypingText('');
    setAiResponseText('');
    setIsThinking(false);
  };

  const handleDemoClick = () => {
    const el = document.getElementById('live-demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden flex items-center bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-[140px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)`,
          }}
        />
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              One AI Workspace. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400">
                Built for Intelligence.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              Chat, create, research, generate images, work with projects, and more—all in one highly integrated, ultra-responsive workspace crafted for professionals.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://trelvixai.com"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl transition-all duration-300 shadow-lg shadow-neutral-950/10 dark:shadow-neutral-50/10 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button
              onClick={handleDemoClick}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/30 hover:bg-emerald-500/5 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <Play className="w-4 h-4 mr-2.5 text-emerald-500 fill-emerald-500/20 group-hover:scale-110 transition-transform" />
              Watch Live Demo
            </button>
          </div>

          {/* Micro Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 w-full">
            <div>
              <p className="text-2xl font-bold font-sans text-neutral-900 dark:text-neutral-50">Instant</p>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">Everyday Answers</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-sans text-neutral-900 dark:text-neutral-50">128k</p>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">Context Memory</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-sans text-emerald-500">Dual</p>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">Image & Code Cores</p>
            </div>
          </div>
        </div>

        {/* Right Side Live Mockup Container */}
        <div className="lg:col-span-6 relative flex justify-center w-full">
          {/* Absolute decorative gradient ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-40 dark:opacity-30 pointer-events-none" />
          
          {/* Device Mockup */}
          <div 
            className="w-full max-w-lg aspect-[4/3] rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-900/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col transition-all duration-500"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            }}
          >
            {/* Window bar */}
            <div className="px-4 py-3 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between bg-neutral-100/50 dark:bg-neutral-950/40">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-800" />
                <span className="text-[11px] font-mono font-medium text-neutral-500 dark:text-neutral-500 ml-4">
                  trelvix-client-v1.0.8
                </span>
              </div>
              <div className="flex space-x-1">
                <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[9px] font-mono font-bold uppercase tracking-wider">
                  Live Preview
                </div>
              </div>
            </div>

            {/* Inner Dashboard Layout */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-16 sm:w-20 border-r border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-950/20 flex flex-col items-center py-4 space-y-5">
                <button
                  onClick={() => selectTab('chat')}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                    activeTab === 'chat'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => selectTab('image')}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                    activeTab === 'image'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
                  }`}
                >
                  <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => selectTab('voice')}
                  className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                    activeTab === 'voice'
                      ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm'
                      : 'text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-300'
                  }`}
                >
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="flex-1" />
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] font-bold text-emerald-500">
                  TX
                </div>
              </div>

              {/* Main Workspace Frame */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-hidden bg-white/50 dark:bg-neutral-900/40 relative">
                {/* Interactive State Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'chat' && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col space-y-4 overflow-y-auto pr-1"
                    >
                      {/* User Query */}
                      <div className="flex items-start space-x-3 max-w-[90%]">
                        <div className="w-6 h-6 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-800/40 px-3 py-2 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed">
                          {typingText || <span className="opacity-40 font-mono">Typing query...</span>}
                          {typingText && simState === 0 && <span className="w-1.5 h-3.5 bg-emerald-500 ml-0.5 inline-block animate-pulse align-middle" />}
                        </div>
                      </div>

                      {/* AI Response */}
                      {(simState > 0 || isThinking) && (
                        <div className="flex items-start space-x-3 max-w-[90%] self-end flex-row-reverse space-x-reverse">
                          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                            <Brain className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 text-right">
                            {isThinking ? (
                              <div className="inline-flex items-center space-x-2 bg-emerald-500/5 border border-emerald-500/10 px-3 py-2 rounded-xl text-xs text-emerald-500 font-mono">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                                <span className="text-[10px] font-medium tracking-wide">Processing with Advanced Reasoning...</span>
                              </div>
                            ) : (
                              <div className="inline-block bg-emerald-500/5 dark:bg-emerald-950/30 border border-emerald-500/20 dark:border-emerald-500/10 px-3 py-2 rounded-xl text-xs text-left text-neutral-800 dark:text-emerald-100 font-mono whitespace-pre-line leading-relaxed shadow-sm">
                                {aiResponseText}
                                {simState === 2 && aiResponseText.length < 100 && (
                                  <span className="w-1.5 h-3.5 bg-emerald-400 ml-0.5 inline-block animate-pulse align-middle" />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {activeTab === 'image' && (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      {/* Top User Prompt Bubble */}
                      <div className="flex items-start space-x-3 max-w-[90%]">
                        <div className="w-6 h-6 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-800/40 px-3 py-2 rounded-xl text-xs text-neutral-800 dark:text-neutral-200 font-sans">
                          {typingText || <span className="opacity-40 font-mono">Initializing render command...</span>}
                          {simState === 0 && <span className="w-1.5 h-3.5 bg-emerald-500 ml-0.5 inline-block animate-pulse" />}
                        </div>
                      </div>

                      {/* AI Generated Image display */}
                      <div className="flex-1 flex items-center justify-center mt-3 relative">
                        <AnimatePresence mode="wait">
                          {isThinking && (
                            <motion.div
                              key="generating"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-neutral-200/10 dark:bg-neutral-900/10 rounded-xl border border-dashed border-emerald-500/20"
                            >
                              <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin" />
                                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                              </div>
                              <span className="text-[10px] font-mono text-emerald-500 font-medium">Generating Trelvix Crystal Asset...</span>
                            </motion.div>
                          )}

                          {simState === 2 && (
                            <motion.div
                              key="image-done"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="relative w-full h-[180px] rounded-xl overflow-hidden shadow-md group border border-emerald-500/15"
                            >
                              <img
                                src={IMAGE_CORE}
                                alt="Simulated Trelvix Core"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-neutral-900/80 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono">
                                1024 x 1024 • PNG
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'voice' && (
                    <motion.div
                      key="voice"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex-1 flex flex-col items-center justify-center space-y-6"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-16 h-16 rounded-full bg-neutral-900 dark:bg-neutral-800 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                          <Mic className="w-6 h-6 text-emerald-500 animate-pulse" />
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-3">
                        <p className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-500">
                          Active Voice Connection
                        </p>
                        <p className="text-[11px] font-sans text-neutral-600 dark:text-neutral-400 text-center max-w-xs">
                          Trelvix AI streaming voice answers directly with realistic dynamic responses
                        </p>
                      </div>

                      {/* Waveform visualizer */}
                      <div className="flex items-center space-x-1 h-12">
                        {voiceWave.map((h, idx) => (
                          <motion.div
                            key={idx}
                            className="w-1 rounded-full bg-gradient-to-t from-emerald-500 to-teal-400"
                            animate={{ height: `${h}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Simulated Text Input Bar */}
                <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between bg-neutral-100/45 dark:bg-neutral-950/20 rounded-xl px-3 py-2 border border-neutral-200/50 dark:border-neutral-800/40">
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 font-sans">
                    {activeTab === 'chat' && 'Ask Trelvix anything...'}
                    {activeTab === 'image' && 'Describe image prompt...'}
                    {activeTab === 'voice' && 'Trelvix is listening...'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 rounded text-neutral-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                      <Terminal className="w-3.5 h-3.5" />
                    </button>
                    <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-sm shadow-emerald-500/20">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
