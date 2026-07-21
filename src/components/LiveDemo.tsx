/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { Play, Pause, RotateCcw, Brain, User, Sparkles, Mic, FileCode, CheckCircle, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Message } from '../types';

// Real generated 16:9 image path
const IMAGE_NEXUS = '/src/assets/images/trelvix_neural_nexus_1784503986038.jpg';

const SCRIPT_STEPS = [
  {
    type: 'user_type',
    text: 'Analyze the Q2 Quantum Core telemetry and compile a neural pathway rendering.',
    duration: 3000,
  },
  {
    type: 'thinking',
    text: 'Initializing Trelvix Advanced Reasoning Core...\n- Mapping 104,281 spatial nodes...\n- Reconstructing coherence parameters...\n- Telemetry alignment verified.',
    duration: 2500,
  },
  {
    type: 'assistant_stream',
    text: 'Advanced Reasoning resolved. Quantum Core telemetry indicates absolute convergence at a 99.84% coherence metric. I have compiled the neural pathway schematic displaying hyper-dense emerald node connections. Telemetry packet logging is stable.',
    duration: 4500,
  },
  {
    type: 'image_generation',
    text: 'Rendering path network...',
    duration: 2000,
  },
  {
    type: 'voice_response',
    text: 'Audio report ready: Telemetry packet stabilized.',
    duration: 5000,
  },
];

export const LiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUserText, setTypingUserText] = useState('');
  const [streamingAiText, setStreamingAiText] = useState('');
  const [aiThoughts, setAiThoughts] = useState<string[]>([]);
  const [activeThinking, setActiveThinking] = useState(false);
  const [activeVoiceWave, setActiveVoiceWave] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageGenerating, setImageGenerating] = useState(false);
  const [voiceWaveHeights, setVoiceWaveHeights] = useState<number[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Generate random voice wave heights
  useEffect(() => {
    if (!activeVoiceWave) {
      setVoiceWaveHeights([]);
      return;
    }
    const interval = setInterval(() => {
      setVoiceWaveHeights(Array.from({ length: 18 }, () => Math.floor(Math.random() * 40) + 8));
    }, 120);
    return () => clearInterval(interval);
  }, [activeVoiceWave]);

  // Main Script Runner Loop
  useEffect(() => {
    if (!isPlaying) return;

    const runScript = () => {
      const step = SCRIPT_STEPS[stepIndex];
      if (!step) {
        // Reset everything and loop back
        timerRef.current = setTimeout(() => {
          setMessages([]);
          setTypingUserText('');
          setStreamingAiText('');
          setAiThoughts([]);
          setActiveThinking(false);
          setActiveVoiceWave(false);
          setShowImage(false);
          setImageGenerating(false);
          setStepIndex(0);
        }, 6000); // Wait 6 seconds at the end
        return;
      }

      if (step.type === 'user_type') {
        let text = step.text;
        let i = 0;
        setMessages([]);
        const interval = setInterval(() => {
          if (i < text.length) {
            setTypingUserText((prev) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(interval);
            // Push user message to feed
            setMessages([
              { id: '1', sender: 'user', text: text }
            ]);
            setTypingUserText('');
            // Move to next step
            setStepIndex(1);
          }
        }, 35);
        return () => clearInterval(interval);
      }

      if (step.type === 'thinking') {
        setActiveThinking(true);
        const lines = step.text.split('\n');
        let lineIdx = 0;
        const lineInterval = setInterval(() => {
          if (lineIdx < lines.length) {
            setAiThoughts((prev) => [...prev, lines[lineIdx]]);
            lineIdx++;
          } else {
            clearInterval(lineInterval);
            timerRef.current = setTimeout(() => {
              setActiveThinking(false);
              setStepIndex(2); // Start streaming assistant text
            }, 1000);
          }
        }, 600);
        return () => clearInterval(lineInterval);
      }

      if (step.type === 'assistant_stream') {
        let text = step.text;
        let i = 0;
        const interval = setInterval(() => {
          if (i < text.length) {
            setStreamingAiText((prev) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(interval);
            // Append assistant message to feed
            setMessages((prev) => [
              ...prev,
              { id: '2', sender: 'assistant', text: text }
            ]);
            setStreamingAiText('');
            setStepIndex(3); // Go to image gen
          }
        }, 18);
        return () => clearInterval(interval);
      }

      if (step.type === 'image_generation') {
        setImageGenerating(true);
        timerRef.current = setTimeout(() => {
          setImageGenerating(false);
          setShowImage(true);
          setMessages((prev) => [
            ...prev,
            { id: '3', sender: 'assistant', text: 'Telemetry Node path network rendering successfully projected:', imageUrl: IMAGE_NEXUS }
          ]);
          setStepIndex(4); // Go to voice
        }, 2200);
      }

      if (step.type === 'voice_response') {
        setActiveVoiceWave(true);
        setMessages((prev) => [
          ...prev,
          { id: '4', sender: 'assistant', text: 'Synchronous spatial speech synthesis activated. Broadcast complete.', isVoiceActive: true }
        ]);
        timerRef.current = setTimeout(() => {
          setStepIndex(5); // Loops back
        }, step.duration);
      }
    };

    runScript();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, stepIndex]);

  const handleRestart = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessages([]);
    setTypingUserText('');
    setStreamingAiText('');
    setAiThoughts([]);
    setActiveThinking(false);
    setActiveVoiceWave(false);
    setShowImage(false);
    setImageGenerating(false);
    setStepIndex(0);
    setIsPlaying(true);
  };

  return (
    <section 
      id="live-demo" 
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Live Workspace Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Reasoning & Rendering in Action
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
            Witness our advanced multi-threading engine map logical solutions, render high-fidelity graphics, and synthesise speech simultaneously.
          </p>
        </div>

        {/* Console Container */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl shadow-emerald-500/5 overflow-hidden flex flex-col min-h-[460px] md:min-h-[520px] transition-all duration-300">
          
          {/* Console Header Bar */}
          <div className="px-6 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/40 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs font-mono font-semibold text-neutral-400 dark:text-neutral-500 pl-4 border-l border-neutral-200 dark:border-neutral-800">
                live_sandbox_telemetry_loop.ts
              </span>
            </div>
            
            {/* Simulation Player Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
                title={isPlaying ? 'Pause Demo' : 'Play Demo'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-emerald-500/20 text-emerald-500" />}
              </button>
              <button
                onClick={handleRestart}
                className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
                title="Restart Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console Feed Screen */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6 flex flex-col justify-start min-h-[300px] bg-white dark:bg-neutral-900/60">
            <AnimatePresence>
              {/* Previous messages */}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start space-x-3.5 ${msg.sender === 'assistant' ? 'self-end flex-row-reverse space-x-reverse' : 'self-start'} max-w-[85%]`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                    msg.sender === 'user' 
                      ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700' 
                      : 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-sm'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Brain className="w-4 h-4" />}
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-800/40 text-neutral-800 dark:text-neutral-200 font-sans'
                        : 'bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15 dark:border-emerald-500/10 text-neutral-800 dark:text-emerald-50 font-sans'
                    }`}>
                      {msg.text}
                    </div>

                    {msg.imageUrl && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl overflow-hidden border border-emerald-500/10 shadow-lg max-w-md"
                      >
                        <img 
                          src={msg.imageUrl} 
                          alt="Rendered neural pathways" 
                          className="w-full object-cover max-h-[220px]"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}

                    {msg.isVoiceActive && (
                      <div className="flex items-center space-x-3.5 p-3 rounded-2xl bg-neutral-100/50 dark:bg-neutral-800/20 border border-neutral-200/40 dark:border-neutral-800/40">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                          <Mic className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex items-center space-x-1.5 h-6">
                          {voiceWaveHeights.map((h, i) => (
                            <motion.span
                              key={i}
                              className="w-0.5 rounded bg-emerald-500"
                              animate={{ height: `${h}%` }}
                              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Dynamic User Typing Stream */}
              {typingUserText && (
                <div className="flex items-start space-x-3.5 max-w-[85%] self-start">
                  <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl text-sm leading-relaxed bg-neutral-100/80 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-800/40 text-neutral-800 dark:text-neutral-200 font-sans">
                    {typingUserText}
                    <span className="w-1.5 h-4 bg-emerald-500 inline-block ml-0.5 animate-pulse align-middle" />
                  </div>
                </div>
              )}

              {/* Thinking overlay block */}
              {activeThinking && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-start space-x-3.5 max-w-[85%] self-end flex-row-reverse space-x-reverse"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="px-4 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                      <span>Extended Logic Engine Activated</span>
                    </div>
                    {aiThoughts.length > 0 && (
                      <div className="p-4 rounded-2xl bg-neutral-100/50 dark:bg-neutral-950/20 border border-neutral-200/40 dark:border-neutral-800/40 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 space-y-1">
                        {aiThoughts.map((t, index) => (
                          <div key={index}>{t}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Dynamic AI Streaming text */}
              {streamingAiText && (
                <div className="flex items-start space-x-3.5 max-w-[85%] self-end flex-row-reverse space-x-reverse">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl text-sm leading-relaxed bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/15 dark:border-emerald-500/10 text-neutral-800 dark:text-emerald-50 font-sans shadow-sm">
                    {streamingAiText}
                    <span className="w-1.5 h-4 bg-emerald-400 inline-block ml-0.5 animate-pulse align-middle" />
                  </div>
                </div>
              )}

              {/* Dynamic Image Generation Loader */}
              {imageGenerating && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-3.5 self-end flex-row-reverse space-x-reverse max-w-[85%]"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-500 animate-spin" />
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-100/40 dark:bg-neutral-800/10 border border-dashed border-emerald-500/20 text-xs font-mono text-emerald-500 flex items-center space-x-2">
                    <span>Rendering neural schematic node-paths...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Console Footer Info */}
          <div className="px-6 py-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            <span className="flex items-center">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-2" />
              TRELVIX LOGIC MESH ONLINE
            </span>
            <span>
              STEP {stepIndex + 1} OF {SCRIPT_STEPS.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
