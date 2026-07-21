/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain, Layers, Sparkles, Shield, Heart } from 'lucide-react';

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
            Building the Workspace <br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Deep Cognition</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Trelvix AI was born out of a simple, persistent frustration: computational tools have become highly fragmented. Developers, researchers, and creators are constantly switching tabs, copying prompts, and losing structural context. 
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Our mission is to unify these elements into an elegant, high-throughput workspace. We believe that tools should adapt to the speed of human thought—not the other way around.
          </p>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 px-6 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
              Our Cognitive Principles
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              We guide our development cycles using four core values to ensure Trelvix remains an uncompromised medium for intellectual breakthroughs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Core Value 1 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Deep Cognition Research</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                We prioritize logical and reasoning capabilities over superficial parameters. We stress-test our models on high-order synthesis, complex program debugging, and detailed systems planning to ensure superior intelligence.
              </p>
            </div>

            {/* Core Value 2 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Architectural Containment</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                By designing isolated project containers, we prevent the context drift that plagues standard chat histories. Your projects remain clean, compartmentalized, and mathematically partitioned from one another.
              </p>
            </div>

            {/* Core Value 3 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Aesthetic Coherence</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                We believe visual beauty is a component of utility, not a distraction. High-contrast display typography, mathematically correct nested border-radii, and precise negative space reduce sensory fatigue.
              </p>
            </div>

            {/* Core Value 4 */}
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Zero-Trust Sovereignty</h3>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Your data belongs exclusively to your workspace. We deploy isolated, zero-retention databases and secure firewalls to ensure proprietary guidelines and intellectual properties remain strictly locked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Milestones */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Crafted with Professional Dedication
        </h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed font-sans">
          Our teams are continuously compiling and scaling Trelvix nodes across multiple research zones. We are committed to building safe, transparent, and beautiful technology that empowers people to solve complex global equations.
        </p>
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 text-xs text-neutral-600 dark:text-neutral-400">
          <span>Designed with absolute care by the Trelvix Team</span>
          <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
        </div>
      </section>
    </div>
  );
};
