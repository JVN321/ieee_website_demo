import { useState } from 'react';
import ExpandIcon from '../Expand';

export default function Excom() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Excom ExpandIcon clicked! Expanded:", !isExpanded);
    // Add your custom logic here
  };

  return (
    <div className="h-screen bg-yellow-500 relative">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-black">EXCOM SECTION</h1>
          <p className="text-2xl text-black mt-4">Yellow Background</p>
          {isExpanded && (
            <p className="text-lg text-black mt-2">Expand icon clicked!</p>
          )}
        </div>
      </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
