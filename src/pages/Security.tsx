/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Key, EyeOff, Lock, Server, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Security: React.FC = () => {
  const securityPillars = [
    {
      icon: EyeOff,
      title: 'Zero Data Retention',
      description: 'Your workspace prompts, documents, generated images, and codebase queries are processed through zero-retention tunnels. We never train models on your proprietary IP.',
    },
    {
      icon: Shield,
      title: 'Context Isolation',
      description: 'Every project container sits inside an independent, mathematically partitioned logical vault. Context never drifts or leaks between workspaces.',
    },
    {
      icon: Key,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit using TLS 1.3 and at rest via AES-256. Access keys are managed within hardware-protected security modules.',
    },
    {
      icon: Server,
      title: 'Sovereign Infrastructure',
      description: 'Run Trelvix nodes on isolated servers with customizable physical locations. Align with sovereign geographical laws and corporate mandates.',
    },
  ];

  const complianceStandards = [
    { title: 'SOC 2 Type II Alignment', desc: 'Continuous compliance tracking across all system operations, logging pipelines, and development cycles.' },
    { title: 'GDPR & CCPA Compliance', desc: 'Complete user sovereignty over active datasets, allowing immediate absolute erasure of workspace logs.' },
    { title: 'ISO 27001 Controls', desc: 'Rigorous risk management guidelines directing access controls, network configurations, and incident responses.' },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      {/* Hero Header */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Sovereign Trust
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Absolute Integrity <br />for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Proprietary Logic</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Trelvix AI treats security not as a secondary compliance checklist, but as an absolute architectural mandate. We build isolated systems that protect your intellectual property at every computational layer.
          </p>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="py-24 px-6 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
              Four Layers of Deep Defense
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Learn how our custom-engineered workspace isolation paradigm preserves information security across all team operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-4 shadow-sm hover:border-emerald-500/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
              Global Compliance
            </div>
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50 leading-tight">
              Aligned with Strict Industry Standards
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              We continually audit our computational nodes, data routing pipelines, and storage engines to guarantee alignment with global compliance frameworks.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {complianceStandards.map((std, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/20 flex items-start space-x-4"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-50">{std.title}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{std.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
