import React, { useContext, useEffect, useState } from 'react';
import { RotateCw, Move, ZoomIn, Palette, Smartphone, Tablet, Monitor, Laptop, Share as Shadow, Paintbrush } from 'lucide-react';
import { userContext } from '../../App';


const EditTab = ({

  
  
 deviceType




}) => {
 

  const [selectedFrame, setSelectedFrame] = useState('default');


const deviceOptions = [
  { 
    category: 'iPhone',
    devices: {
      "iphone-16-pro": { name: 'iPhone 16 Pro', width: 250, height:500, icon: '📱' },
         "iphone-16": { name: 'iPhone 16', width: 220, height:440, icon: '📱' },
      "iphone-15-pro": { name: "iPhone 15 Pro", width: 236, height:479, icon: "📱" },
      "iphone-15": { name: "iPhone 15", width: 215, height: 437, icon: "📱" }, 
      "iphone-14-pro": { name: "iPhone 14 Pro", width: 225, height:467, icon: "📱" }, 
      "iphone-14": { name: "iPhone 14", width: 220, height:450, icon: "📱" },

    }
  },
  {
    category: 'iPad',
    devices : {
 
  "ipad-air": { name: "iPad Air", width: 436, height: 602, icon: "📱" },
  "ipad-mini": { name: "iPad Mini", width: 412, height: 611, icon: "📱" },

}

  },
  {
    category: 'Desktop',
    devices:{ 
      "macbook-pro-16": { name: 'MacBook Pro 16″', width:421, height:286, icon: "💻" },
      "macbook-air-13": { name: 'MacBook Air 13″', width:400, height:271, icon: "💻" },
      
    }
  },
  // {
  //   category: 'Android',
  //   devices: {
  //     "pixel-8-pro": { name: "Pixel 8 Pro", width: 1366, height: 768, icon: "📱" },
  //     "pixel-8": { name: "Pixel 8", width: 1080, height: 2400, icon: "📱" },
  //     "samsung-s24": { name: "Galaxy S24", width: 1080, height: 2340, icon: "📱" },
  //     "samsung-s23": { name: "Galaxy S23", width: 1080, height: 2340, icon: "📱" },
  //   }
  // }
];




  const frameOptions = {
   "Default": { name: 'Default',style: { border: "none" }, preview: '⬜' },
   "Minimal": { name: 'Minimal',style: { border: "1px solid black" }, preview: '▫️' },
    "Rounded":{  name: 'Rounded', style:{ border: "1px solid black", borderRadius:10 }, preview: '🔲' },
    "Shadow":{ name: 'Shadow', style: {
      border: "2px solid #3498db",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)"
    }, preview: '🔳' },
    "Glass":{ name: 'Glass', style: {
      background: "rgba(255,255,255,0.15)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.3)",
      padding: "20px",
      textAlign: "center"
    }, preview: '💎' },
  };










const { color, setColor,fileimg,rotateY,setRotateY,framebordervalue,setFrameBorderValue,phoneborder,setPhoneBorder,setFileImg,rotateX,setRotateX,picbackground,setPicBackground,previewUrl,brightness,shadowColor, setShadowColor,setBrightness,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,twok,setTwok,fourk,scale,setScale,setFourk,size,setImgsize,tilt,setTilt,frame,setFrame,padding,setPadding } = useContext(userContext);


  const handleReset = () => {
   setBrightness(100);
    setShadowColor('#000000');
   setPadding(20);
   setPicOpacity(1);
   setFrame( {name: 'Default',style:'border:none', preview: '⬜'});
  setTilt(0);
  setScale(1);
  setFourk(false);
  setTwok(false);
  setFileImg(null);
  setColor(false);
  setPreviewUrl(null);
  setDevice({ name: 'iPhone small Pro', width: 320,height: 250, icon: '📱'})
  setPicBackground(null);
  setRotateX(0);
  setRotateY(0);
  };


 const onScaleChange=(value)=>{
setScale(value);

let size=value;
setImgsize(size);

 }
const onDeviceChange = (id) => {
  let selectedDevice = null;
  let selectedCategoryName = null;

  // Iterate over categories to find the matching device ID
  for (const category of deviceOptions) {
    if (category.devices[id]) {
      selectedDevice = category.devices[id];
      selectedCategoryName = category.category;
      break; // Stop iterating once the device is found
    }
  }

  if (selectedDevice) {
   setDevice(selectedDevice);
    // You can now use selectedDevice for further logic
  } else {
    console.log("Device not found for ID:", id);
  }
};


 const  handleframe=(id)=>{

  const frameObj = frameOptions[id]; // get the full device object
  if (!frameObj) {
    console.error("Device not found for id:", id);
    return;
  }

  console.log("Selected frame:", frameObj);
  setFrame(frameObj); // store the full object in state

 }




const  opacitychange=(value)=>{
setPicOpacity(value);
console.log("opacity is ",value*100);
}

const onbrightnesschange=(value)=>{
setBrightness(value);
console.log("brigtness is ",value)
}

const changepadding=(value)=>{
  setPadding(value);
  console.log("padding value is on edit tab",value);
}


  return (
    <div className="space-y-6">
      {/* Scale Control */}
      <div className="space-y-3">
        <h3  className={`text-sm font-bold mb-5 ${color ? "text-white" : "text-gray-900"}`}>Scale</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ZoomIn className="w-4 h-4 text-gray-500" />
             
              <label  className={`text-xs font-medium text-gray-500`}>Size</label>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100  py-1 rounded">
              {Math.round(scale*100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={scale}
            onChange={(e) => onScaleChange(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
        </div>
      </div>

      {/* Tilt Control with Circle Direction */}
      <div className="space-y-3 mt-18">
       
        <h3  className={`text-sm font-bold mb-5  ${color ? "text-white" : "text-gray-700" }`}>Tilt</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RotateCw    className={`w-4 h-4  text-gray-500`} />
              
                <label   className={`text-xs font-medium text-gray-500`}>Angle</label>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {tilt}°
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={tilt}
              onChange={(e) => setTilt(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Circular Direction Indicator */}
          <div className="relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div 
              className="w-1 h-4 bg-blue-500 rounded-full origin-bottom transition-transform duration-200"
              style={{ transform: `rotate(${tilt}deg)` }}
            />
            <div className="absolute w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
        {/* Control Y */}
      <div className="space-y-3 mt-18">
       
        <h3  className={`text-sm  mb-5 font-bold ${color ? "text-white" : "text-gray-900" }`}>RotateY</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RotateCw    className={`w-4 h-4 text-gray-500`} />
              
                <label   className={`text-xs font-medium text-gray-500`}>Angle</label>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {rotateY}°
              </span>
            </div>
            <input
              type="range"
              min="-90"
              max="90"
              value={rotateY}
              onChange={(e) =>  setRotateY(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Circular Direction Indicator */}
          <div className="relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div 
              className="w-1 h-4 bg-blue-500 rounded-full origin-bottom transition-transform duration-200"
              style={{ transform: `rotate(${rotateY}deg)` }}
            />
            <div className="absolute w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
             {/* Control X */}
      <div className="space-y-3 mt-18">
       
        <h3  className={`text-sm font-bold mb-5 ${color ? "text-white" : "text-gray-900" }`}>RotateX</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <RotateCw    className={`w-4 h-4  text-gray-500`} />
              
                <label   className={`text-xs font-medium text-gray-500`}>Angle</label>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {rotateX}°
              </span>
            </div>
            <input
              type="range"
              min="-90"
              max="90"
              value={rotateX}
              onChange={(e) =>  setRotateX(Number(e.target.value))}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Circular Direction Indicator */}
          <div className="relative w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <div 
              className="w-1 h-4 bg-blue-500 rounded-full origin-bottom transition-transform duration-200"
              style={{ transform: `rotate(${rotateX}deg)` }}
            />
            <div className="absolute w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Device Frame Selection */}
      <div className="space-y-3 mt-18">
      
        <h3   className={`text-sm font-bold mb-5 ${color ? "text-white" : "text-gray-900"}`}>Device Frame</h3>
        <div className="space-y-3 ">
        {deviceOptions.map((category) => (
  <div key={category.category} className="space-y-2">
    <label className="text-xs font-medium text-gray-900  tracking-wide">
      {category.category}
    </label>
    <div className="grid grid-cols-2 mt-2 gap-5 mb-5">
      {Object.entries(category.devices).map(([id, device,category]) => (
        <button
          key={id}
          className={`p-2 h-16 rounded-md border text-left transition-all duration-200 hover:scale-105 ${
            deviceType === id
              ? "border-blue-500 bg-blue-50 text-blue-700"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
      onClick={() => {onDeviceChange(id);setPhoneBorder(true);setFrameBorderValue(false)}}

        >
          
     <div className='flex align-items-center justify-content-center'>
          <div className="text-sm mb-1">{device.icon}</div>
          <div className="text-xs font-sm truncate text-gray-900">
            {device.name}
          </div>
          </div>
        </button>
      ))}
    </div>
  </div>
))}

        </div>
      </div>

      {/* Frame Style */}
      <div className="space-y-3 mt-18">
      
        <h3   className={`text-sm mb-5 font-bold ${color ? "text-white" : "text-gray-900"}`}>Frame Style</h3>
        <div className="grid grid-cols-3 gap-5">
         {Object.entries(frameOptions).map(([id, frame]) => (
  <button
    key={id}
    className={`p-2 rounded-lg border-2 text-center transition-all duration-200 hover:scale-105 ${
      selectedFrame === id
        ? 'border-blue-500 bg-blue-50 text-blue-700'
        : 'border-gray-200 bg-white hover:border-gray-300'
    }`}
    onClick={() =>{ handleframe(id);setPhoneBorder(false);setFrameBorderValue(true)}}
    
  >
    <div className="text-lg mb-1">{frame.preview}</div>
    <div className="text-xs font-medium text-gray-900">{frame.name}</div>
  </button>
))}

        </div>
      </div>

      {/* Transformations */}
      <div className="space-y-4 mt-18">
        <h3   className={`text-sm mb-5 font-bold ${color ? "text-white" : "text-gray-900"}`}>Transformations</h3>
        
    

        {/* Opacity */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-gray-500" />
              <label className="text-xs font-medium text-gray-500">Opacity</label>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {picopacity*100}%
            </span>
          </div>
          <input
            type="range"
            min="0"
          
            max="1"
             step="0.01" 
            value={picopacity}
            onChange={(e) => opacitychange(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
       


      </div>

      {/* Shadow Options */}
      <div className="space-y-4 mt-18">
        <h3   className={`text-sm mb-8 font-bold ${color ? "text-white" : "text-gray-900"}`}>Shadow</h3>
        
        {/* Shadow Intensity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shadow className="w-4 h-4 text-gray-500" />
              <label className="text-xs font-medium text-gray-500">Intensity</label>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {brightness}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => onbrightnesschange(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Shadow Color */}
        {
          phoneborder? "" :   <div className="space-y-5 mt-8">
          <div className="flex  items-center space-x-2">
            <Paintbrush className="w-4 h-4 text-gray-500" />
            <label className="text-xs font-medium text-gray-500">Shadow Color</label>
          </div>
          <div className="flex space-x-2">
            <input
              type="color"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
              className="w-12 h-7 rounded border border-gray-300 cursor-pointer"
            />
            <input
              type="text"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
              className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded bg-white text-gray-900"
              placeholder="#000000"
            />
          </div>
        </div>
        }
      
      </div>

      {/* Padding */}
      <div className="space-y-4 mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Move className="w-4 h-4 text-gray-500" />
            <label className="text-xs font-medium text-gray-500">Padding</label>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {padding}px
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={padding}
          onChange={(e) => changepadding(Number(e.target.value))}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>

      {/* Reset Button */}
      <button 
        onClick={handleReset}
 
        className={`w-full py-2 mt-8 px-4 border border-gray-300 rounded-lg text-xs font-medium ${color ? "text-white" : "text-gray-700"}   hover:bg-gray-600 hover:text-white cursor-pointer  transition-all duration-300 ease-in-out transition-colors`}
      >
        Reset All Changes
      </button>
    </div>
  );
};


export default EditTab;