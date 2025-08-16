import { useState } from 'react';
import ExpandIcon from '../Expand';

export default function Events() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Events ExpandIcon clicked! Expanded:", !isExpanded);
    // Add your custom logic here
  };

  return (
    <div className="h-screen bg-black relative">
      <div className="flex items-center justify-center h-full">
        <div className="text-white text-6xl font-bold rotate-270">
              EVENTS
            </div>
      </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
