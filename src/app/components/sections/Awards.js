import { useState } from 'react';
import ExpandIcon from '../Expand';

export default function Awards() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Awards ExpandIcon clicked! Expanded:", !isExpanded);
    // Add your custom logic here
  };

  return (
    <div className="h-screen bg-green-500 relative">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">AWARDS SECTION</h1>
          <p className="text-2xl text-white mt-4">Green Background</p>
          {isExpanded && (
            <p className="text-lg text-white mt-2">Expand icon clicked!</p>
          )}
        </div>
      </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
