/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const FinalCTA: React.FC = () => {
  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 px-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden flex items-center justify-center transition-colors duration-500">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 flex flex-col items-center">
        {/* Sparkles icon */}
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-2">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 max-w-2xl leading-tight">
          Ready to think <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">differently?</span>
        </h2>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-lg leading-relaxed font-sans">
          Deploy your first secure isolated workspace in under thirty seconds. Experience sub-second responses and beautiful contextual rendering.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <a
            href="https://trelvixai.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-2xl transition-all duration-300 shadow-xl cursor-pointer overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2.5">
              <span>Initialize Trelvix Workspace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
