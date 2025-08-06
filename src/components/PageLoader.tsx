import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface PageLoaderProps {
  isLoading: boolean;
  onComplete: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      setShowContent(false);
      
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setShowContent(true);
              setTimeout(onComplete, 500);
            }, 200);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isLoading, onComplete]);

  if (!isLoading && showContent) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-ivory to-sand/30 transition-opacity duration-500 ${
      showContent ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src="/logos/logo.png"
            alt="YAQOUT" 
            className="h-20 w-auto animate-pulse" 
          />
        </div>

        {/* Loading Spinner */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <LoadingSpinner size="lg" color="gold" />
        </div>

        {/* Progress Bar */}
        <div className="w-64 mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-soft-gold to-deep-ruby h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <p className="text-deep-ruby font-display text-lg mb-2">
            Loading YAQOUT
          </p>
          <p className="text-warm-charcoal/60 text-sm">
            Preparing your Moroccan elegance...
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 border border-soft-gold/30 rounded-full animate-spin-slow" />
          <div className="absolute bottom-20 right-20 w-6 h-6 border border-deep-ruby/30 rounded-full animate-spin-slow-reverse" />
          <div className="absolute top-1/2 left-10 w-3 h-3 bg-soft-gold/20 rounded-full animate-pulse" />
          <div className="absolute top-1/2 right-10 w-3 h-3 bg-deep-ruby/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

export default PageLoader; 