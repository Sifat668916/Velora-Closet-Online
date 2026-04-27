/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  declare state: State;
  declare props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught Archive Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0c0c0e] flex flex-col items-center justify-center p-10 text-center">
          <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10">
             <div className="w-10 h-10 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
          </div>
          <h1 className="text-4xl font-serif font-bold text-white mb-6 uppercase tracking-tighter italic">System <span className="text-white/40">Anomaly Detected</span></h1>
          <p className="text-white/40 max-w-md mb-10 italic leading-relaxed">
            The strategic archival retrieval protocol encountered an unexpected state. This incident has been logged for overseer review.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-all shadow-2xl"
          >
            Re-Synchronize Master Archives
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
