import React from 'react';
import 'boxicons/css/boxicons.min.css'; 

const Interest = () => {
  const interests = [
    { iconClass: 'bx-code', text: 'Programming' },
    { iconClass: 'bx-book', text: 'Reading' },
    { iconClass: 'bx-globe', text: 'Traveling' },
    { iconClass: 'bx-camera', text: 'Photography' },
    { iconClass: 'bx-game', text: 'Gaming' },
    { iconClass: 'bx bx-dish', text: 'Cooking' },
    { iconClass: 'bx-music', text: 'Music' },
    { iconClass: 'bx-dumbbell', text: 'Fitness' },
  ];

  return (
    <div id="interest" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Interest</p>
          <ul className="list-disc pl-6">  <br />
            {interests.map((interest, index) => (
              <li key={index} className="flex items-center text-lg my-2">
                <i className={`bx ${interest.iconClass}`}></i>
                <span className="ml-2">{interest.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Interest;
