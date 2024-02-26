import React, { useEffect, useState } from 'react';
import '../App.css'; 
import cookingPotImage from '../data/giphy.gif';

const CookingPot: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [showPot, setShowPot] = useState(false);
  const [animatePot, setAnimatePot] = useState(false);

  useEffect(() => {
    console.log(`isVisible changed: ${isVisible}`);
    if (isVisible) {
      console.log('Showing pot...');
      setShowPot(true);
      setAnimatePot(false); 

      
      const timer = setTimeout(() => {
        console.log('Starting animation...');
        setAnimatePot(true);
      },);

      return () => {
        console.log('Clearing animation start timeout...');
        clearTimeout(timer);
      };
    } else {
      setShowPot(false);
      setAnimatePot(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (animatePot) {
      console.log('Animation active, waiting to hide pot...');
     
      const timer = setTimeout(() => {
        console.log('Hiding pot...');
        setShowPot(false);
        setAnimatePot(false);
      }, 2000); 

      return () => {
        console.log('Clearing pot hide timeout...');
        clearTimeout(timer);
      };
    }
  }, [animatePot]);

  const potClass = `cooking-pot ${animatePot ? 'active' : ''}`;
  console.log(`Rendering with potClass: ${potClass}`);

  return showPot ? (
    <div className={potClass}>
      <img src={cookingPotImage} alt="Cooking" />
      <div className="searching-text">Searching...</div>
    </div>
  ) : null;
};

export default CookingPot;
