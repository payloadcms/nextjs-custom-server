import React, { useEffect, useRef, useState } from 'react';

type UseDraggable = (buttons?: number[]) => React.MutableRefObject<HTMLDivElement | null>

/**
  * Make an element scrollable by dragging
  * @param buttons - Buttons user can drag with. See https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
  * @returns {React.MutableRefObject} -  The ref to be applied to to the element to make it draggable
  */
const useDraggable: UseDraggable = (buttons = [1, 4, 5]) => {
  // Ref to be attached to the element we want to drag
  const ref = useRef<HTMLDivElement>(null);
  // Position of the mouse on the page on mousedown
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  // Amount the draggable element is already scrolled
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  useEffect(() => {
    function handleDown(e: any) {
      if (ref.current) {
        // Only allow dragging inside of target element
        if (!ref.current.contains(e.target)) {
          return;
        }
        // Set initial positions of mouse element scroll
        setStartX(e.pageX - ref.current.offsetLeft);
        setStartY(e.pageY - ref.current.offsetTop);
        setStartScrollLeft(ref.current.scrollLeft);
        setStartScrollTop(ref.current.scrollTop);
      }
    }

    function handleMove(e: any) {
      if (ref.current) {
        // Don't fire if other buttons are pressed
        if (!buttons.includes(e.buttons) || !ref.current.contains(e.target)) {
          return;
        }
        e.preventDefault();
        // Position of mouse on the page
        const mouseX = e.pageX - ref.current.offsetLeft;
        const mouseY = e.pageY - ref.current.offsetTop;
        // Distance of the mouse from the origin of the last mousedown event
        const walkX = mouseX - startX;
        const walkY = mouseY - startY;
        // Set element scroll
        ref.current.scrollLeft = startScrollLeft - walkX;
        ref.current.scrollTop = startScrollTop - walkY;
      }
    }

    // Add and clean up listeners
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mousemove', handleMove);

    return () => {
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mousemove', handleMove);
    };
  });

  return ref;
};

export default useDraggable;
