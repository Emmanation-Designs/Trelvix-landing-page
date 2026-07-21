/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'What is Trelvix AI?',
      answer: 'Trelvix AI is a premium, unified workspace for professional intelligence. It integrates conversational assistance, high-fidelity graphics rendering, continuous voice flows, and isolated project memory containers into a single, cohesive, sub-second interface.',
    },
    {
      question: 'What plans do you offer?',
      answer: (
        <span>
          We offer three simple, production-ready plans tailored for various needs:
          <ul className="list-disc pl-5 mt-2 space-y-1.5">
            <li><strong>Free ($0/month):</strong> Perfect for everyday tasks and basic creative image generation.</li>
            <li><strong>Plus ($10/month):</strong> Includes priority processing, access to advanced reasoning cores, and advanced document analysis.</li>
            <li><strong>Pro ($30/month):</strong> Offers uncapped fast responses, professional intelligence cores, unlimited isolated workspace containers, and full context memory.</li>
          </ul>
        </span>
      ),
    },
    {
      question: 'Is my data used to train AI models?',
      answer: 'No. Trelvix AI operates on a strict zero-retention policy. All workspace inputs, code repositories, documents, and creative designs are processed through secure, encrypted tunnels and are never logged or stored for model training purposes.',
    },
    {
      question: 'What are isolated workspace containers?',
      answer: 'Unlike standard AI interfaces that dump all chat history into a single flat list, Trelvix structures work into isolated containers. Each container operates with its own custom parameters, instruction sets, and document logs, preventing context leakage between distinct corporate or engineering projects.',
    },
    {
      question: 'How do Fast Responses and Advanced Reasoning differ?',
      answer: 'Trelvix dynamically routes queries depending on complexity. Fast Responses deliver near-zero latency answers for daily writing, summaries, and lookup. Advanced Reasoning activates graduated multi-step logical pipelines to solve complex system architectures, full codebase debugging, or mathematical proofs.',
    },
    {
      question: 'Can I upgrade, downgrade, or cancel anytime?',
      answer: 'Yes. All subscriptions are handled securely with immediate activation. You can change plans or cancel your service directly inside your account preferences at any time with no termination fees.',
    },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      {/* Hero Header */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Platform Help Center
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Get instant answers to typical inquiries regarding the Trelvix workspace, privacy safeguards, subscription tiers, and specialized reasoning parameters.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-semibold text-neutral-900 dark:text-neutral-50 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans border-t border-neutral-100 dark:border-neutral-800/50">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Persistent Help Callout */}
      <section className="py-24 px-6 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/20 dark:bg-neutral-900/5 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">Still have questions?</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Our dedicated professional support engineers are standing by to clarify any compliance, security, or enterprise workflow specifications.
          </p>
          <div className="pt-2">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-950 text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
