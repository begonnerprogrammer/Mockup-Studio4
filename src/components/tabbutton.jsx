import React, { useContext } from 'react';
import { userContext } from '../App';

const TabButton = ({ id, label, icon, isActive, onClick }) => {
  const {color}=useContext(userContext);
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex-1 flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all duration-200 ${
        isActive
          ? `  ${color ? "bg-gray-800"  : "bg-white"} ${color ? "text-white"  : "text-[#1a1a1a]"} shadow-lg`
          : `${color ? "bg-gray-600"  : "bg-gray-300"}  ${color ? "text-gray-600"  : "text-gray-300"}    dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500`
      }`}
    >
      <div className={` ${color ? "text-white"  : "text-[#1a1a1a]"}  mb-1`}>{icon}</div>
      <span className= {` ${color ? "text-white"  : "text-[#1a1a1a]"} text-xs font-medium`}>{label}</span>
    </button>
  );
};


export default TabButton;
