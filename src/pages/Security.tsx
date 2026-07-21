/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Key, Lock, Server, CheckCircle } from 'lucide-react';

export const Security: React.FC = () => {
  const securityPillars = [
    {
      icon: Lock,
      title: 'HTTPS Encrypted Connections',
      description: 'All communications between your browser and Trelvix servers are encrypted in transit using modern HTTPS and TLS protocols to prevent eavesdropping.',
    },
    {
      icon: Shield,
      title: 'Private Account Workspaces',
      description: 'Your workspace conversations, prompts, and project files are strictly tied to your authenticated account with access controls preventing unauthorized views.',
    },
    {
      icon: Key,
      title: 'Secure Account Authentication',
      description: 'Robust authentication protocols ensure session protection, keeping your account details, custom parameters, and chat history safe.',
    },
    {
      icon: Server,
      title: 'Secure Cloud Infrastructure',
      description: 'Trelvix AI is deployed on modern cloud infrastructure with active monitoring, backend firewall protection, and reliable data storage practices.',
    },
  ];

  const securityPractices = [
    { title: 'Strict Access Control', desc: 'User isolation ensures that your private conversations, personal notes, and workspace materials remain confidential and secure.' },
    { title: 'Protected Conversation Storage', desc: 'Saved conversation histories and workspace projects are stored safely in cloud databases with restricted system permissions.' },
    { title: 'Continuous Patching & Maintenance', desc: 'Our platform continuously applies system updates, dependency security patches, and modern web application security practices.' },
  ];

  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      {/* Hero Header */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
            Platform Security
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Built for Privacy <br />and <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Data Protection</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Trelvix AI protects your data through secure account authentication, HTTPS encrypted connections, and strict user access controls across all conversations and workspaces.
          </p>
        </div>
      </section>

      {/* Security Pillars Grid */}
      <section className="py-24 px-6 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
              Core Security Foundations
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Learn how our application security measures safeguard your prompts, projects, and personal workspace data.
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

      {/* Security Practices Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
              Privacy Standards
            </div>
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50 leading-tight">
              Modern Defense & Privacy Safeguards
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              We follow industry best practices for application security, web protection, and user data privacy to keep your AI interactions safe.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {securityPractices.map((std, idx) => (
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

