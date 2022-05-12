import React, { FC } from 'react';

const SIZE = 44;
const THICKNESS = 3.6;

export const Spinner: FC = () => (
  <span className="circular-progress-span" role="loading-sign">
    <svg className="circular-progress-svg" viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
      <circle
        className="circular-progress-circle"
        cx={SIZE}
        cy={SIZE}
        r={(SIZE - THICKNESS) / 2}
        fill="none"
        strokeWidth={THICKNESS}
      />
    </svg>
  </span>
);