/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain, Layers, Sparkles, Heart, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      {/* Brand Hero Story */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Platform Vision
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Building the Unified Workspace <br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">AI Intelligence</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Trelvix AI was born out of a simple, persistent frustration: modern AI tools have become fragmented. Creators, developers, students, and professionals spend too much time switching tabs, losing prompt context, and managing scattered chat histories.
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Our mission is to unify conversations, image creation, project management, and intelligent reasoning into one cohesive, beautifully designed experience—helping you think, create, learn, and build faster.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 px-6 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
              Our Core Principles
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              We guide our platform development using core values that ensure Trelvix remains an effortless, empowering environment for every task.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Core Value 1 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Simplicity First</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Technology should reduce complexity, not create it. Trelvix brings clean interfaces and intuitive workflows to your daily tasks so you can focus on generating ideas.
              </p>
            </div>

            {/* Core Value 2 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Intelligence That Fits the Task</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Choose the level of thinking you need—from fast everyday answers to deep step-by-step reasoning—while Trelvix handles the technical complexity behind the scenes.
              </p>
            </div>

            {/* Core Value 3 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Organized Workspaces</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Keep related conversations, custom instructions, and files neatly categorized inside dedicated project workspaces for enhanced focus and productivity.
              </p>
            </div>

            {/* Core Value 4 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Built for Everyone</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Whether you are a student, developer, entrepreneur, creator, or professional, Trelvix adapts seamlessly to the unique way you work and learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Crafted for Modern Workflows
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-sans">
          Trelvix AI is designed to bring harmony to your creative and technical pursuits. We are committed to building reliable, transparent, and accessible AI tools that empower people everywhere to turn ideas into reality.
        </p>
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-xs text-neutral-600 dark:text-neutral-400">
          <span>Designed with absolute care by the Trelvix Team</span>
          <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
        </div>
      </section>
    </div>
  );
};
