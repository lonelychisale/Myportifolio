import React, { useState, useEffect } from 'react';

function TextAnimation() {
  const [text, setText] = useState('');
  const fullText = "hello !!, i'm lonely chisale"; // Replace with your text
  const animationDuration = 1000; // Duration of the animation in milliseconds
  const restartDelay = 500; // Delay before restarting the animation in milliseconds

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          setText(''); // Clear the text after animation completion
          currentIndex = 0;
        }, restartDelay);
      }
    }, animationDuration / fullText.length); // Adjusted interval for smoother animation

    return () => clearInterval(intervalId);
  }, [fullText]);

  const containerStyle = {
    height: '70px', // Set a fixed height for the container
    overflow: 'hidden', // Hide the overflow content
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 className='textanimation '>{text}</h1>
      </div>
    </div>
  );
}

export default TextAnimation;
