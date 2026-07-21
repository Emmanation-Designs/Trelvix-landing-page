/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Image as ImageIcon, ExternalLink, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

// Real generated image paths
const IMAGE_NEXUS = '/src/assets/images/trelvix_neural_nexus_1784503986038.jpg';
const IMAGE_CORE = '/src/assets/images/trelvix_thought_core_1784503998992.jpg';
const IMAGE_WORKSPACE = '/src/assets/images/trelvix_glass_workspace_1784504012532.jpg';
const IMAGE_AMBIENT = 'https://picsum.photos/seed/emeralddeep/800/600';

interface ShowcaseItem {
  id: string;
  title: string;
  prompt: string;
  aspectRatio: string;
  src: string;
  gridSpan: string;
  delay: number;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'nexus',
    title: 'Neural Pathways Schema',
    prompt: 'abstract neural pathways, glowing emerald and teal fibers, clean dark background',
    aspectRatio: 'aspect-video',
    src: IMAGE_NEXUS,
    gridSpan: 'md:col-span-2 row-span-1',
    delay: 0,
  },
  {
    id: 'core',
    title: 'Cognitive Thought Core',
    prompt: 'minimalist glowing emerald crystal cube, refraction, infinite dark void',
    aspectRatio: 'aspect-square',
    src: IMAGE_CORE,
    gridSpan: 'md:col-span-1 row-span-2',
    delay: 1,
  },
  {
    id: 'workspace',
    title: 'Glassmorphic Workspace Layout',
    prompt: 'floating translucent cards, glowing emerald boundaries, abstract UI',
    aspectRatio: 'aspect-[4/3]',
    src: IMAGE_WORKSPACE,
    gridSpan: 'md:col-span-1 row-span-1',
    delay: 2,
  },
  {
    id: 'ambient',
    title: 'Ambient Energy Wave',
    prompt: 'organic deep green waves of energy glowing, fluid abstract art',
    aspectRatio: 'aspect-[4/3]',
    src: IMAGE_AMBIENT,
    gridSpan: 'md:col-span-1 row-span-1',
    delay: 3,
  },
];

export const ImageShowcase: React.FC = () => {
  return (
    <section 
      id="showcase" 
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-teal-500/5 dark:bg-teal-500/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-500 text-xs font-mono font-semibold tracking-wider uppercase">
              Rendering Engine
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              High-Fidelity Visual Generation
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              The dual-core creative node generates and edits visuals at custom aspect ratios. Explore these actual outputs rendered directly from natural prompts.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs font-mono font-bold text-neutral-400">
              100% RENDERED BY TRELVIX
            </span>
          </div>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {SHOWCASE_ITEMS.map((item) => {
            const floatY = [0, -8, 0];
            const floatTransition = {
              duration: 6 + item.delay * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            };

            return (
              <motion.div
                key={item.id}
                animate={{ y: floatY }}
                transition={floatTransition}
                className={`group relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 ${item.gridSpan}`}
              >
                {/* Image and Aspect Ratio container */}
                <div className={`relative w-full overflow-hidden ${item.aspectRatio}`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                </div>

                {/* Always-on info panel */}
                <div className="p-5 border-t border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 relative">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm sm:text-base font-sans font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-emerald-500 transition-colors">
                      {item.title}
                    </h3>
                    <ImageIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-mono text-neutral-400 dark:text-neutral-500 line-clamp-1 italic">
                    "{item.prompt}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
