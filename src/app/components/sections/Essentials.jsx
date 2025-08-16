import { useState } from 'react';
import ExpandIcon from '../Expand';
import Link from 'next/link';

export default function Essentials() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    console.log("Essentials ExpandIcon clicked! Expanded:", !isExpanded);
  };

  const essentialLinks = [
    { name: 'ieee.org', url: 'https://www.ieee.org/' },
    { name: 'myieee', url: 'https://www.ieee.org/myieee' },
    { name: 'digital library', url: 'https://ieeexplore.ieee.org/' },
    { name: 'ieee RAS', url: 'https://www.ieee-ras.org/' },
    { name: 'ieee spectrum', url: 'https://spectrum.ieee.org/' },
    { name: 'ieee region 10', url: 'https://ieeer10.org/' },
    { name: 'ieee kerala section', url: 'https://ieeekb.org/' }
  ];

  return (
    <div className="h-screen bg-black relative flex items-center justify-start w-full">
            <div className="w-[200px] flex justify-center">
                <div className="flex -rotate-90  items-center">
                    <div className="bg-white w-70 h-2 mr-4"></div>
                    <div className="text-white text-8xl font-bold">
                        <span className="text-gray-light">ESS</span>ENTIALS
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col gap-10 ml-100">
                <div className="mb-16">
                    <h2 className="text-7xl font-bold mb-12">Support</h2>
                    <div className="flex flex-col gap-10">
                      {essentialLinks.map((link, index) => (
                        <Link 
                          key={index}
                          href={link.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-light text-5xl font-bold hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                </div>
              </div>
      <ExpandIcon position="right" onClick={handleExpandClick} isExpanded={isExpanded} />
    </div>
  );
}
