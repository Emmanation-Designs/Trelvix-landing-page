/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from '../components/Hero';
import { Intelligence } from '../components/Intelligence';
import { LiveDemo } from '../components/LiveDemo';
import { Projects } from '../components/Projects';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Segment */}
      <Hero />

      {/* Intelligence / Thinking Levels */}
      <Intelligence />

      {/* Live Conversation Sandbox */}
      <LiveDemo />

      {/* Floating Workspace Projects */}
      <Projects />

      {/* Conversion CTA */}
      <FinalCTA />
    </div>
  );
};
