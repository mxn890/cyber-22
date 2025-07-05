import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest('button, a, [role="button"], [data-hover]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '30px' : '20px',
          height: isHovering ? '30px' : '20px',
          backgroundColor: isHovering ? 'rgba(255, 0, 100, 0.5)' : 'rgba(0, 150, 255, 0.5)',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease, width 0.3s ease, height 0.3s ease, background-color 0.3s ease',
          mixBlendMode: 'difference',
        }}
      />
      <div
        className="cursor-follower"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;