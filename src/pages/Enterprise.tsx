/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Headphones, FileText, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Enterprise: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '10-50',
    useCase: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      {/* Hero Segment */}
      <section className="relative py-24 px-6 border-b border-neutral-100 dark:border-neutral-900 overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
              Isolated Clusters
            </div>
            <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Enterprise Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Cognitive Nodes</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed font-sans">
              Deploy Trelvix reasoning cores inside your own virtual private cloud (VPC) or on dedicated bare-metal infrastructure. Complete compliance, zero data retention, uncapped compute quotas.
            </p>

            {/* List of high-level features */}
            <ul className="space-y-3 pt-4">
              {[
                'SOC-2 Type II Certified Vaults',
                'Dedicated physical reasoning cores with no noisy-neighbor delays',
                'Private fine-tuning with proprietary weights protection',
                '99.99% Service Level Agreement (SLA) guarantees',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation Form Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 backdrop-blur-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    Custom Deployment
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Fill in your organizational profile. Our cognitive architecture leads will design a custom deployment specification.
                  </p>
                  
                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      Primary Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50"
                      placeholder="e.g. Alexis Carter"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      Corporate Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50"
                      placeholder="alexis@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                        Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50"
                        placeholder="Acme Labs"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                        Estimate Seats
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50 cursor-pointer"
                      >
                        <option value="10-50">10 - 50 seats</option>
                        <option value="50-250">50 - 250 seats</option>
                        <option value="250-1000">250 - 1000 seats</option>
                        <option value="1000+">1000+ seats</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      Core Use Case
                    </label>
                    <textarea
                      value={formData.useCase}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50 h-16 resize-none"
                      placeholder="Describe your reasoning workflow requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 text-white font-semibold rounded-xl text-sm transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">Request Logged</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs mx-auto">
                    Thank you, Alexis. Your corporate profile and node specification have been received. A senior systems planner will contact you at <strong>{formData.email}</strong> within 4 business hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Compliance Core Details */}
      <section className="py-24 px-6 border-b border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold font-sans text-neutral-900 dark:text-neutral-50">
              Zero-Trust Architecture
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans">
              Enterprise workloads require rigorous guardrails. We isolate data, processes, and network parameters to ensure total workspace containment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4 hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Sovereign Compliance</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Trelvix complies with global standards including SOC-2 Type II, HIPAA requirements, and GDPR data containment laws.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4 hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Zero Data Retention</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Prompt logs, workspace data, and vector weights are immediately deleted or kept purely transient. We never train models on client data.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4 hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Custom Compute Nodes</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Scale GPU nodes instantly. Gain uncapped concurrency with isolated memory clusters, fully redundant failover regions, and sub-second scaling.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4 hover:border-emerald-500/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">Engineering Support</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Receive direct Slack and Google Chat integrations with core Trelvix platform developers, with active SLA response limits starting at 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
