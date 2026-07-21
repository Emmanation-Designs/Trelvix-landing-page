/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { 
  MessageSquare, Sparkles, PenTool, Mic, Eye, FolderKanban, 
  Database, Layout, Bot, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeatureCard } from '../types';

const FEATURE_ITEMS: FeatureCard[] = [
  {
    id: 'ai-chat',
    title: 'AI Chat',
    description: 'Instant, logical responses for writing, learning, and everyday questions.',
    iconName: 'MessageSquare',
  },
  {
    id: 'image-gen',
    title: 'Image Generation',
    description: 'High-fidelity cinematic visual generations using advanced generative models.',
    iconName: 'Sparkles',
  },
  {
    id: 'image-edit',
    title: 'Image Editing',
    description: 'Modify, expand, and paint elements directly within your visual canvas.',
    iconName: 'PenTool',
  },
  {
    id: 'voice-intel',
    title: 'Voice Interface',
    description: 'Speak and listen in real-time with continuous, organic low-latency speech.',
    iconName: 'Mic',
  },
  {
    id: 'vision-mesh',
    title: 'Vision Analysis',
    description: 'Deconstruct complex charts, documents, and visual designs instantly.',
    iconName: 'Eye',
  },
  {
    id: 'proj-work',
    title: 'Projects Hub',
    description: 'Organize files, contexts, and instructions into isolated, secure workspaces.',
    iconName: 'FolderKanban',
  },
  {
    id: 'conv-memory',
    title: 'Conversation Memory',
    description: 'Continuous memory across workspaces to remember your stylistic preferences.',
    iconName: 'Database',
    isComingSoon: true,
  },
  {
    id: 'creative-canvas',
    title: 'Canvas',
    description: 'An interactive dual-view workspace to co-create documents and code side-by-side.',
    iconName: 'Layout',
    isComingSoon: true,
  },
  {
    id: 'agents',
    title: 'AI Agents',
    description: 'Autonomous agents performing multi-step workflows, web research, and tool runs.',
    iconName: 'Bot',
    isComingSoon: true,
  },
];

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  MessageSquare,
  Sparkles,
  PenTool,
  Mic,
  Eye,
  FolderKanban,
  Database,
  Layout,
  Bot,
};

export const FeatureCarousel: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Track window size for responsive carousel radius
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute radius based on screen size
  const getRadius = () => {
    if (windowWidth < 640) return 180;  // Mobile
    if (windowWidth < 1024) return 280; // Tablet
    return 420;                         // Desktop
  };

  const totalItems = FEATURE_ITEMS.length;
  const radius = getRadius();

  // Slow continuous rotation animation
  useEffect(() => {
    const animate = (time: number) => {
      if (!isHovered) {
        if (previousTimeRef.current !== null) {
          const deltaTime = time - previousTimeRef.current;
          // Slowly rotate by 0.015 degrees per millisecond
          setRotation((prev) => prev - 0.012 * deltaTime);
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered]);

  const handleCardClick = (index: number) => {
    // Bring clicked card to the front (angle = 0)
    const targetAngle = -index * (360 / totalItems);
    
    // Find the shortest path rotation
    let currentRot = rotation % 360;
    if (currentRot < 0) currentRot += 360;
    
    let targetRot = targetAngle % 360;
    if (targetRot < 0) targetRot += 360;
    
    let diff = targetRot - currentRot;
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    
    setRotation((prev) => prev + diff);
  };

  const spinCarousel = (direction: 'left' | 'right') => {
    const angleStep = 360 / totalItems;
    setRotation((prev) => prev + (direction === 'left' ? angleStep : -angleStep));
  };

  return (
    <section 
      id="features" 
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Feature Cylinder
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            A Multi-Dimensional Interface
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Rotate through Trelvix's workspace nodes. Hover to pause the sequence; click any node to bring its parameters into focus.
          </p>
        </div>

        {/* 3D Stage */}
        <div 
          className="relative w-full h-[320px] sm:h-[450px] flex items-center justify-center"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            previousTimeRef.current = null;
          }}
        >
          {/* Cylinder Wrapper */}
          <div 
            className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
            style={{ 
              transform: `rotateY(${rotation}deg)`, 
              transformStyle: 'preserve-3d' 
            }}
          >
            {FEATURE_ITEMS.map((item, i) => {
              const angle = i * (360 / totalItems);
              const Icon = iconMap[item.iconName] || MessageSquare;

              // Compute opacity based on depth to fade out back-facing cards
              const relativeAngle = (angle + rotation) % 360;
              const rad = (relativeAngle * Math.PI) / 180;
              const cosVal = Math.cos(rad); // 1 is front, -1 is back
              const opacity = cosVal < -0.2 ? 0.15 : cosVal < 0.2 ? 0.45 : cosVal < 0.6 ? 0.75 : 1.0;
              const scale = cosVal < 0 ? 0.8 + (cosVal + 1) * 0.1 : 0.9 + cosVal * 0.1;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(i)}
                  className="absolute w-[220px] sm:w-[280px] h-[160px] sm:h-[180px] cursor-pointer transition-all duration-500 select-none backface-hidden"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    opacity: opacity,
                    zIndex: Math.round((cosVal + 1) * 100),
                  }}
                >
                  <div className="w-full h-full p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.1)] flex flex-col justify-between group transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      
                      {item.isComingSoon ? (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase border border-neutral-200 dark:border-neutral-800 text-neutral-400 bg-neutral-50 dark:bg-neutral-950">
                          Soon
                        </span>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      )}
                    </div>

                    <div className="space-y-1.5 mt-4">
                      <h3 className="text-sm sm:text-base font-sans font-bold text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Manual Cylindrical Controls */}
        <div className="flex items-center space-x-4 mt-8">
          <button
            onClick={() => spinCarousel('left')}
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Rotate left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-bold text-neutral-400">
            DRAG OR SPIN
          </span>
          <button
            onClick={() => spinCarousel('right')}
            className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Rotate right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
