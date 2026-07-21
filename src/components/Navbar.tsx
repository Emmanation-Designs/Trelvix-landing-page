/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Brain, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transitions
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Security', path: '/security' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `font-sans text-sm font-medium transition-colors cursor-pointer relative py-2 ${
      isActive
        ? 'text-emerald-500 dark:text-emerald-400 font-semibold'
        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
    }`;
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-emerald-500/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900/80 dark:bg-neutral-900/40 border border-emerald-500/25 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300">
            <Brain className="w-5 h-5 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            Trelvix <span className="text-emerald-500">AI</span>
          </span>
        </Link>

        {/* Desktop Links with Framer Motion Layout Highlight */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={getNavLinkClass}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            id="theme-toggle"
            className="relative p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all duration-300 shadow-sm cursor-pointer overflow-hidden"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className={theme === 'dark' ? 'absolute' : 'relative'}
            >
              <Sun className="w-5 h-5 text-amber-500" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={theme === 'dark' ? 'relative' : 'absolute'}
            >
              <Moon className="w-5 h-5 text-emerald-400" />
            </motion.div>
          </button>

          <a 
            href="https://trelvixai.com"
            className="font-sans text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors px-4 py-2 cursor-pointer"
          >
            Sign In
          </a>

          <a 
            href="https://trelvixai.com"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-gradient-to-br from-emerald-500 to-teal-600 hover:text-white dark:text-white cursor-pointer"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-neutral-900 dark:bg-neutral-950 rounded-xl group-hover:bg-opacity-0">
              Get Started
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-emerald-500" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-neutral-700 dark:text-neutral-300 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-neutral-200 dark:border-emerald-500/10 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-left py-2 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-500 dark:text-emerald-400 font-bold border-l-2 border-emerald-500 pl-3'
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 dark:hover:text-emerald-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="h-px bg-neutral-200 dark:bg-neutral-800/60 my-2" />
            
            <div className="flex flex-col space-y-3">
              <a 
                href="https://trelvixai.com"
                className="py-2.5 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 text-center font-medium text-neutral-700 dark:text-neutral-300"
              >
                Sign In
              </a>
              <a 
                href="https://trelvixai.com"
                className="py-2.5 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-center font-medium text-white shadow-lg shadow-emerald-500/20"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
