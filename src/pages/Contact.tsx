/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, MapPin, Globe, CheckCircle2, Send, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pt-20 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-500">
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-emerald-500/5 dark:bg-emerald-500/2 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-8 text-left lg:pr-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono font-semibold tracking-wider uppercase">
                Contact Channel
              </div>
              <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
                Get in Touch with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Systems Lab</span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                Have inquiries regarding model training, bespoke deployment models, custom workspace licenses, or academic research partnerships? Drop our core engineers a line.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    Secure Communications
                  </p>
                  <a href="mailto:systems@trelvix.ai" className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:text-emerald-500 transition-colors">
                    systems@trelvix.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    Physical Labs
                  </p>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    350 Innovation Way, Suite 400 <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-500">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    Global Ingress
                  </p>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                    Distributed nodes in US-West, EU-West, and Asia-Pacific regions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Card Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 backdrop-blur-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
              
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    Transmit Message
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Inputs are validated client-side and encrypted during transmission.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50"
                        placeholder="Alexis Carter"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50"
                        placeholder="alexis@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      Subject Matter
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50 cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Enterprise Solution">Enterprise Solution / Cluster Deployment</option>
                      <option value="Technical Support">Technical Workspace Support</option>
                      <option value="Research & Licensing">Academic Research / Model Licensing</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono font-bold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                      Detailed Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-sm transition-colors text-neutral-900 dark:text-neutral-50 h-36 resize-none"
                      placeholder="Type the parameters of your inquiry here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 text-white font-semibold rounded-xl text-sm transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                  >
                    <span>Transmit Secure Packet</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">Packet Transmitted</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your secure inquiry on <strong>{formData.subject}</strong> has been encrypted and logged. A laboratory planner will contact you at <strong>{formData.email}</strong> within 12 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
