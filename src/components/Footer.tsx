/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900 py-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-neutral-900/80 dark:bg-neutral-900/40 border border-emerald-500/20 flex items-center justify-center">
            <Brain className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="font-sans text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Trelvix<span className="text-emerald-500">.ai</span>
          </span>
        </div>

        {/* Copy */}
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 order-last md:order-none">
          &copy; {new Date().getFullYear()} TRELVIX AI LABS INC. ALL RIGHTS RESERVED.
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <Link
            to="/features"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/security"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            Security
          </Link>
          <Link
            to="/faq"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/about"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
