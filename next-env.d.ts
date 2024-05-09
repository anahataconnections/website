/// <reference types="next" />
/// <reference types="next/types/global" />

import 'react';

declare module 'react' {
  interface JSX {
    // Add any HTML element types you use in your JSX here
    // For example:
    // In your code: <div>Hello</div>
    // In this interface: div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    // You can declare elements like this for each HTML element you use
  }
}
