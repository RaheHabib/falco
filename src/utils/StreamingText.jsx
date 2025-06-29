import React, { useState, useEffect } from 'react';

// StreamingText component for the typing effect
const StreamingText = ({ text, delay = 100, className = "" }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, text, delay]);
  
    return (
      <span className={className}>
        {displayedText}
        {currentIndex < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    );
  };

export default StreamingText;
  