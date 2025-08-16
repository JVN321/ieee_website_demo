import { useState } from 'react';
import ExpandIcon from '../Expand';

export default function Essentials() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Essentials ExpandIcon clicked! Expanded:", !isExpanded);
    // Add your custom logic here
  };

  return (
    <div className="h-screen bg-purple-500 relative">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">ESSENTIALS SECTION</h1>
          <p className="text-2xl text-white mt-4">Purple Background</p>
          {isExpanded && (
            <p className="text-lg text-white mt-2">Expand icon clicked!</p>
          )}
        </div>
      </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
