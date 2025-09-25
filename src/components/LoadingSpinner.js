import { useState, useEffect } from 'react';

const LoadingSpinner = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">
        {/* Main rotating flower */}
        <div className="relative w-24 h-24">
          {/* Petals */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full animate-[spin_3s_linear_infinite]"
              style={{
                transform: `rotate(${i * 45}deg)`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div 
                className="w-4 h-4 bg-gradient-to-br from-white/90 to-white/30 rounded-full"
                style={{
                  boxShadow: '0 0 15px rgba(255,255,255,0.5)'
                }}
              />
            </div>
          ))}
          
          {/* Inner rotating ring */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-[spin_2s_linear_infinite_reverse]">
            <div className="absolute -top-1 left-1/2 w-2 h-2 bg-white rounded-full" />
          </div>
          
          {/* Middle ornamental ring */}
          <div className="absolute inset-2 border border-white/40 rounded-full animate-[spin_4s_linear_infinite]" />
          
          {/* Center piece */}
          <div className="absolute inset-[30%] bg-gradient-to-tr from-white/90 to-white/30 rounded-full animate-pulse" />
        </div>

        {/* Decorative lines */}
        <div className="absolute w-32 h-32 rotate-45">
          <div className="absolute inset-0 border border-white/10 rounded-full animate-ping" />
          <div className="absolute inset-4 border border-white/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Text element */}
        <div className="mt-12 text-center">
          <div className="font-serif text-white/90 text-lg tracking-[0.2em] animate-pulse">
            LOADING{dots}
          </div>
          <div className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;