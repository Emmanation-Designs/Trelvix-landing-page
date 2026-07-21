/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Pricing } from '../components/Pricing';
import { WhyTrelvix } from '../components/WhyTrelvix';
import { ComingSoon } from '../components/ComingSoon';

export const PricingPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Real Trelvix Pricing Matrix */}
      <Pricing />

      {/* Comparative Matrix Table */}
      <WhyTrelvix />

      {/* Future Product pipeline */}
      <ComingSoon />
    </div>
  );
};
