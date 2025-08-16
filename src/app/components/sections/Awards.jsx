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
    <div className="h-screen bg-black relative flex items-center justify-start w-full">
            <div className="w-[200px] flex justify-center">
                <div className="flex -rotate-90  items-center">
                    <div className="bg-white w-70 h-2 mr-4"></div>
                    <div className="text-white text-8xl font-bold">
                        <span className="text-gray-light">AWA</span>RDS
                    </div>
                </div>
            </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
