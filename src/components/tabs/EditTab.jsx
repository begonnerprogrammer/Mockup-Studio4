import React, { useContext, useEffect, useState } from 'react';
import { RotateCw, Move, ZoomIn, Palette, Smartphone, Tablet, Monitor, Laptop, Share as Shadow, Paintbrush, Grid } from 'lucide-react';
import { userContext } from '../../App';

import {Joystick} from 'react-joystick-component';
const EditTab = ({

  
  
 deviceType




}) => {
 const {   grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert,color, setColor,fileimg,newdev,setNewDev,rotateY,noisecontroller,setNoiseController,setRotateY,canvard,shadowspread,setShadowSpread, perspective, translateZ,setTranslateZ,setPresPective, rotateZ,setRotateZ,setCanvaRd,framebordervalue,setFrameBorderValue,phoneborder,setPhoneBorder,setFileImg,rotateX,setRotateX,picbackground,setPicBackground,previewUrl,brightness,shadowColor, setShadowColor,setBrightness,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,twok,setTwok,fourk,scale,setScale,setFourk,size,setImgsize,tilt,setTilt,frame,setFrame,padding,setPadding,radius,setRadius } = useContext(userContext);
  const [selectedFrame, setSelectedFrame] = useState('default');


  const [values, setValues] = useState({ x: 0, y: 0 });


const handleMove = (event) => {
  console.log('Joystick values:', { x: event.x, y: event.y });
  
  // Test with simple values first
  const rotateXValue = Math.round(event.x * 45);
  const rotateYValue = Math.round(-event.y * 45);
  
  console.log('Calculated rotations:', { rotateXValue, rotateYValue });
  
  setRotateX(`rotateX(${rotateXValue}deg)`);
  setRotateY(`rotateY(${rotateYValue}deg)`);  
  setRotateZ(`rotateZ(0deg)`);
  setTranslateZ(`translateZ(0px)`); // Disable for testing
  setPresPective(`1000px`); // Fixed for testing
  
  setValues({
    x: event.x,
    y: event.y,
    rotatex: rotateXValue,
    rotatey: rotateYValue,
  });
};

  const handleStop = () => {
    // Optional: Reset to center when released
  };



const divrotations = [
  {
    rotations: {
      "1st-rotation": {
        name: "1st-rotation",
        rotationY: "rotateY(-5deg)",
        rotationX: "rotateX(3deg)",
    
        perspective: "perspective(1000px)", 
        translateZ: "translateZ(20px)"
      },

      "2nd-rotation": {
        name: "2nd-rotation",
        rotationY: "rotateY(5deg)",
        rotationX: "rotateX(-3deg)",
        perspective: "perspective(1000px)",
        translateZ: "translateZ(30px)"
      },

      "3rd-rotation": {
        name: "3rd-rotation",
        rotationY: "rotateY(-25deg)",
        rotationX: "rotateX(10deg)",
        perspective: "perspective(800px)",
        translateZ: "translateZ(50px)"
      },

      "4th-rotation": {
        name: "4th-rotation",
        rotationY: "rotateY(30deg)",
        rotationX: "rotateX(20deg)",
        perspective: "perspective(600px)",
        translateZ: "translateZ(30px)"
      },

      "5th-rotation": {
        name: "5th-rotation",
        rotationZ: "rotateZ(-45deg)",
        rotationX: "rotateX(45deg)",
        perspective: "perspective(1200px)",
        translateZ: "translateZ(10px)"
      }
    }
  }
];

const newdevices = [
    {  // ← Second array item  
        "name": "iphone", 
        "top": "1/2",   
        "left": "1/2",
        "w": "95%",
        "h": "96%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/iphone-16.webp", 
    },
       {  // ← Second array item  
        "name": "iphone15", 
        "top": "1/2",   
        "left": "1/2",
        "w": "95%",
        "h": "96%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/iphone-15-pro-max.webp", 
    },
    {  // ← First array item
        "name": "tv",
        "top": "48",
        "left": "23.5",
        "w": "68.5%",
        "h": "19%",
        "-translate-x-": "16",
        "-translate-y-": "9", 
        "src":"/tv.png" 
    },
     
    {  // ← Second array item
        "name": "ipadsilver", 
        "top": "1/2",    
        "left": "25",
        "w": "89%",
        "h": "67%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/ipad-air.webp", 
    },
     {  // ← Second array item
        "name": "ipadpro11", 
        "top": "1/2",   
        "left": "25",
        "w": "89%",
        "h": "67%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/ipad-mini.webp", 
    }
    ,
   
    {  // ← Second array item
        "name": "mackbook16", 
        "top": "1/2",   
        "left": "25",
        "w": "77%",
        "h": "25%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/macbook-pro-13.webp", 
    },
     {  // ← Second array item  
        "name": "mackbook13", 
        "top": "1/2",   
        "left": "25",
        "w": "82%",
        "h": "27%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/macbook-pro-16.webp", 
    },
    
   
]


const deviceOptions = [
  { 
    category: 'iPhone',
    devices: {
      "iPhone-16-pro": { name: 'iPhone 16 Pro', width: 184, height:388,src:"https://assets.picbolt.co/images/iphone-16.webp", icon: '📱' },
     "iPhone-16-plus": { name: 'iPhone 16 Plus', width: 204, height:421,src:"https://assets.picbolt.co/images/iphone-16-plus.webp", icon: '📱' },
      "iPhone-15": { name: 'iPhone 15', width: 204, height:421,src:"https://assets.picbolt.co/images/iphone-15.webp", icon: '📱' },
      "iPhone-15-pro-max": { name: 'iPhone 15 Pro max', width: 223, height:460,src:"https://assets.picbolt.co/images/iphone-15-pro-max.webp", icon: '📱' },
    "iPad-air": { name: 'iPad air', width:436, height:602,src:"https://assets.picbolt.co/images/ipad-air.webp", icon: '📱' },
      "iPad-mini": { name: 'iPad mini', width:412, height:611,src:"https://assets.picbolt.co/images/ipad-mini.webp", icon: '📱' },
      "Mackbook-Pro-16": { name: 'Mackbook-Pro-16', width: 345, height:239,src:"https://assets.picbolt.co/images/macbook-pro-16.webp", icon: '📱' },
      "Mackbook-Pro-13": { name: 'Mackbook-Pro-13', width: 324, height:215,src:"https://assets.picbolt.co/images/macbook-pro-13.webp", icon: '📱' },
      "Apple-Watch-Ultra-Orange": { name: 'Apple-Watch-Ultra-Orange', width:74, height:89,src:"https://assets.picbolt.co/images/apple-watch-ultra-orange.webp", icon: '📱' },
         "Apple-Watch-Ultra-Yellow": { name: 'Apple-Watch-Ultra-Yellow', width:74, height:89,src:"https://assets.picbolt.co/images/apple-watch-ultra-yellow.webp", icon: '📱' },
      // "iphone-14": { name: "iPhone 14", width: 220, height:450, icon: "📱" },

    }
  },
//   {
//     category: 'iPad',
//     devices : {
 
//   "ipad-air": { name: "iPad Air", width: 436, height: 602, icon: "📱" },
//   "ipad-mini": { name: "iPad Mini", width: 412, height: 611, icon: "📱" },

// }

//   },
//   {
//     category: 'Desktop',
//     devices:{ 
//       "macbook-pro-16": { name: 'MacBook Pro 16″', width:421, height:286, icon: "💻" },
//       "macbook-air-13": { name: 'MacBook Air 13″', width:400, height:271, icon: "💻" },
      
//     }
//   },
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
   "Default": { name: 'None',style: { border: "6px solid transparent" }, preview: '⬜' },
   "Arc-ght":{ name: 'Arc-light',style: {border:"6px solid rgba(255, 255, 255, 0.5)"}, preview: '⬜' },
    "Rounded":{  name: 'Arc-dark', style:{ border: "6px solid black", borderRadius:0 }, preview: '🔲' },
   "Minimal": { name: 'Minimal',style: { border: "2px solid black" }, preview: '▫️' },
   
    "picture":{ name: 'picture', style: {
      borderTop: "8px solid white", // or use your existing border style
    borderRight: "8px solid white", // or use your existing border style
    borderBottom: "24px solid white", // thick bottom only
    borderLeft: "8px solid white", // or use your existing border styleborder: "2px solid #3498db",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.3)"
    }, preview: '🔳' },
 
     "mac-os-dark":{ name: 'Mac dark', style: {
    //   background: "rgba(255,255,255,0.15)",
    //   borderRadius: "0px",
    //   boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    //   backdropFilter: "blur(10px)",
       borderTopo: "15px solid rgba(12,0,0,1)", // or use your existing border style
    // borderRight: "0px solid transparent", // or use your existing border style
    // borderBottom: "0px solid rgba(12, 0, 0, 1)", // thick bottom only
    // borderLeft: "0px solid transparent", // or use your existing border style
      
      textAlign: "center"
    }, preview: '💎' },
      "mac-os-light":{ name: 'Mac light', style: {
    //   background: "rgba(255,255,255,0.15)",
    //   borderRadius: "0px",
    //   boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    //   backdropFilter: "blur(10px)",
       borderTopo: "15px solid white", // or use your existing border style
    // borderRight: "0px solid transparent", // or use your existing border style
    // borderBottom: "0px solid rgba(12, 0, 0, 1)", // thick bottom only
    // borderLeft: "0px solid transparent", // or use your existing border style
      
      textAlign: "center"
    }, preview: '💎' },
       "windows-dark":{ name: 'Windows dark', style: {
    //   background: "rgba(255,255,255,0.15)",
    //   borderRadius: "0px",
    //   boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    //   backdropFilter: "blur(10px)",
       borderTopo: "20px solid rgba(12, 0, 0, 1)", // or use your existing border style
    // borderRight: "0px solid transparent", // or use your existing border style
    // borderBottom: "0px solid rgba(12, 0, 0, 1)", // thick bottom only
    // borderLeft: "0px solid transparent", // or use your existing border style
      
      textAlign: "center"
    }, preview: '💎' },
       "windows-light":{ name: 'Windows light', style: {
    //   background: "rgba(255,255,255,0.15)",
    //   borderRadius: "0px",
    //   boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    //   backdropFilter: "blur(10px)",
       borderTopo: "20px solid white", // or use your existing border style
    // borderRight: "0px solid transparent", // or use your existing border style
    // borderBottom: "0px solid rgba(12, 0, 0, 1)", // thick bottom only
    // borderLeft: "0px solid transparent", // or use your existing border style
      
      textAlign: "center"
    }, preview: '💎' },
    
  };














  const handleReset = () => {
   setBrightness(100);
    setShadowColor('#000000');
   setPadding(20);
   
   setFrame( {name: 'Default',style:'border:none', preview: '⬜'});
  setTilt(0);
  setScale(1);
  setFourk(false);
  setTwok(false);
  setFileImg(null);
  setColor(false);
  setPreviewUrl(null);
  setDevice("");
  setPicBackground(null);
  setRotateX(0);
  setRotateY(0);
setRadius(0);
setTilt(0);
setPhoneBorder(false);

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

const onchangeradius=(value)=>{
setRadius(value);
}
 const  handleframe=(id)=>{

  const frameObj = frameOptions[id]; // get the full device object
  if (!frameObj) {
    console.error("Device not found for id:", id);
    return;
  }

  console.log("Selected frame:", frameObj);
  setFrame(frameObj); // store the full object in state

 }








const changepadding=(value)=>{
  setPadding(value);
  console.log("padding value is on edit tab",value);
}


  return (
    <div className="space-y-1">


{/* Scale Control */}

      <div className=" flex align-center justify-around gap-2">
        
        <div className="space-y-2 flex-1">
           <div className={`  ${(color ? "bg-[black]":"bg-gray-100" )}   relative rounded-[5px] `} > 
            
          <div  className={`  ${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs p-1   rounded-[5px] flex items-center justify-between`}  style={{ width: `${scale*50}%` }}>
       <div className="p-3 "></div>
 <span className='absolute left-2 text-gray-500'>Scale</span>
                <span className='absolute right-0 p-2 text-gray-500'>{Math.round(scale*100)}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
             min="0"
            max="2"
            step="0.1"
              
            value={scale}
            onChange={(e) => onScaleChange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
         
        
        </div>
        <div className='text-xs bg-gray-300 h-full p-2 rounded-lg hover:bg-gray-700 hover:cursor-pointer hover:text-white'>
          Tilt
        </div>
      </div>


{/* {Radius} */}
          <div className='flex align-center justify-around gap-2'>
             <div className={`${(color ? "bg-[black]":"bg-gray-100" )} relative rounded-[5px] flex-1`} > 
            
          <div  className={`  ${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs p-1   rounded-[5px] flex items-center justify-between`}  style={{ width: `${radius}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2 text-gray-500'>Round</span>
                <span className='absolute right-0 p-2 text-gray-500'>{radius}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={radius}
            onChange={(e) => onchangeradius(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
           
        <div className="bg-gray-300 rounded-lg p-1">
        <Joystick
          size={25}
          baseColor="#6b7280"
          stickColor="black"
          move={handleMove}
          stop={handleStop}
        />
      </div>
       
          </div>




  {/* Frame Style */}
<div className="space-y-3 mt-10">
  <h3 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>FRAMES</h3>
  <div className="flex gap-4 sm:gap-5 overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full
    text-center">
    {Object.entries(frameOptions).map(([id, frame]) => (
      <div key={id} className='flex flex-col flex-shrink-0 items-center'>
        <div 
          className='relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg bg-gray-500 p-1'
          onClick={() => {
            handleframe(id);
            setPhoneBorder(false);
            setFrameBorderValue(true);
            setNewDev("");
          }}
        >
          {/* Frame preview indicator decorations */}
          {frame.name === "Mac dark" && (
            <div className='absolute bg-gray-900 w-15 h-3 ' style={{ top: 21, zIndex: 20, left: 22 }}>
              <div className='absolute bg-red-900 w-1 h-1 rounded-full' style={{ top: 4, zIndex: 30, left: 2 }}></div>
              <div className='absolute bg-blue-900 w-1 h-1 rounded-full' style={{ top: 4, zIndex: 30, left: 7 }}></div>
              <div className='absolute bg-green-900 w-1 h-1 rounded-full' style={{ zIndex: 30, top: 4, left: 4.5 }}></div>
              <span className='text-[6px] absolute text-white' style={{ top: 1, left: 28 }}>File</span>
              
            </div>
          )}
          {frame.name === "Mac light" && (
             <div className='absolute bg-white w-15 h-3 ' style={{ top: 21, zIndex: 20, left: 23 }}>
              <div className='absolute bg-red-900 w-1 h-1 rounded-full' style={{ top: 4, zIndex: 30, left: 2 }}></div>
              <div className='absolute bg-blue-900 w-1 h-1 rounded-full' style={{ top: 4, zIndex: 30, left: 7 }}></div>
              <div className='absolute bg-green-900 w-1 h-1 rounded-full' style={{ zIndex: 30, top: 4, left: 4.5 }}></div>
              <span className='text-[6px] absolute' style={{ top: 1, left:28 }}>File</span>
            </div>
          )}
          {frame.name === "Windows light" && (
            <div className='absolute bg-white w-15 h-3 ' style={{ top: 21, zIndex: 20, left: 23 }}>
              <span className='text-[6px] absolute ' style={{ top: 1, left: 2 }}>File</span>
             <span className='text-[6px] absolute ' style={{ top: 1, right:5 }}>x</span>
               <span className='text-[6px] absolute ' style={{ top: 1, right:8 }}>-</span>
            </div>
          )}
          {frame.name === "Windows dark" && (
             <div className='absolute bg-gray-900 w-15 h-3 ' style={{ top: 21, zIndex: 20, left: 22 }}>
              <span className='text-[6px] text-white absolute' style={{ top: 1, left: 2 }}>File</span>
                    <span className='text-[6px] absolute text-white' style={{ top: 1, right:5 }}>x</span>
                         <span className='text-[6px] absolute text-white' style={{ top: 1, right:8 }}>-</span>
            </div>
          )}
          
          {/* Frame preview - 80% width/height with translate */}
          <div
            className={`overflow-hidden absolute text-center transition-all duration-200 hover:scale-105 ${
              selectedFrame === id
                ? 'border-2 border-blue-500 bg-blue-50'
                : 'border border-gray-200 bg-gray-100 hover:border-gray-300'
            }`}
            style={{
              width: '80%',
              height: '80%',
              transform: 'translateX(30%) translateY(30%)',
              // Apply all border properties only if they exist in frame.style
              ...(frame.style?.border && { border: frame.style.border }),
              ...(frame.style?.borderTop && { 
                borderTop: frame.style.borderTop.replace(/(\d+)(px|rem|em)/, (match, p1, p2) => {
                  const width = parseInt(p1);
                  const newWidth = width > 10 ? Math.max(5, width - 5) : width;
                  return `${newWidth}${p2}`;
                })
              }),
              ...(frame.style?.borderBottom && { 
                borderBottom: frame.style.borderBottom.replace(/(\d+)(px|rem|em)/, (match, p1, p2) => {
                  const width = parseInt(p1);
                  const newWidth = width > 10 ? Math.max(5, width - 12) : width;
                  return `${newWidth}${p2}`;
                })
              }),
              ...(frame.style?.borderLeft && { borderLeft: frame.style.borderLeft }),
              ...(frame.style?.borderRight && { borderRight: frame.style.borderRight }),
              // Apply other styles that might exist
              ...(frame.style?.borderRadius && { borderRadius: frame.style.borderRadius }),
              ...(frame.style?.background && { background: frame.style.background }),
              ...(frame.style?.boxShadow && { boxShadow: frame.style.boxShadow }),
              ...(frame.style?.backdropFilter && { backdropFilter: frame.style.backdropFilter }),
            }}
          >
          </div>
        </div>
        <div className="text-[9px] sm:text-[11px] text-gray-500 font-bold mt-2 truncate max-w-[80px]">
          {frame.name}
        </div> 
      </div>
    ))}
  </div>
</div>

   {/* Mobile devices
      <div className="space-y-3 mt-1">
       {deviceOptions.map((category) => (
        <>
        <h3   className={`text-[11px] sm:text-sm  mb-1 font-bold ${color ? "text-white" : "text-gray-900"}`}>DEVICE FRAMES</h3>
        <div className=" flex  gap-5   align-items-center jusitfy-content-center">
          {Object.entries(category.devices).map(([id, device,category]) => (
  <button
  
    className={` text-center text-[12px]   h-14 w-18 transition-all duration-200 hover:scale-105 border border-gray-300 `}
 


   
    
  >
    
<img src="https://assets.picbolt.co/images/iphone-16.webp" className='h-full w-full' alt="" />
    <span className='text-xs font-bold text-gray-500 '>iPhone 16</span>
  
  </button>
 ))}


        </div>
        </>
           ))}
      </div> */}
   

























































  


















































































   
 {/* Device Frame Selection */}
      <div className="space-y-3 mt-2">
      
        <h3   className={`text-[11px] sm:text-sm font-bold text-gray-500`}>Device Frame</h3>
<div className='flex gap-4 items-center justify-start overflow-x-auto overflow-y-hidden  [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full'>
  {
   newdevices?.map((item,index)=>(
    <>
 <button className='h-20 w-24 flex-shrink-0 flex flex-col rounded-md text-left transition-transform duration-200 hover:scale-105 origin-center' onClick={()=>{setNewDev(item),setFrame("")}}>
    <div className="flex-1 overflow-hidden p-1">
        <img src={item.src} alt={item.name} className={`h-full ${item.name==="tv" ? 'bg-gray-300' : ""} w-full object-contain`} />
      </div>
      <span className="text-xs font-bold text-gray-500 mb-3 text-center truncate">
        {item.name}
      </span>
  </button>
   
   
    </>
   ))
  }
</div>
</div>
























   
    {/* Rotations */}
      <div className="space-y-3 mt-4">
      
        <h3   className={`text-[11px] sm:text-sm  mb-1 font-bold text-gray-500`}>TRANSFORMS</h3>
        <div className=" flex pb-4 gap-5  overflow-y-scroll 
      [&::-webkit-scrollbar]:h-2 w-[100]
    
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full
    align-items-center jusitfy-content-center">
{Object.entries(divrotations[0].rotations).map(([key, rotationObj]) => {
  
  const transformValue = [
    rotationObj.perspective,
    rotationObj.rotationY,
    rotationObj.rotationX,
    rotationObj.rotationZ,
    rotationObj.translateZ
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div key={key} className="border bg-gray-300 border-gray-400 p-3"  onClick={() =>{setRotateZ( rotationObj.rotationZ),setRotateX(rotationObj.rotationX),setRotateY(rotationObj.rotationY),setPresPective(rotationObj.perspective),setTranslateZ(rotationObj.translateZ)}}> 
      <button
        className={`p-4 text-center h-1 w-1 bg-white transition-all duration-200 hover:scale-105 ${
          selectedFrame === key
            ? "border-blue-500 bg-blue-50 text-blue-700"
            : "border-gray-200 bg-gray-400 hover:border-gray-300"
        }`}
        style={{
          transform: transformValue
        }}
        
      />
    </div>
  );
})}


        </div>
      </div>























 <h3   className={`text-[11px] sm:text-sm  mb-1 mt-10 font-bold text-gray-500`}>SHADOW</h3>
{/* {Padding} */}
          
 <div className={`  ${(color ? "bg-[black]":"bg-gray-100" )}   relative rounded-[5px] `} > 
            
          <div   className={`  ${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs p-1   rounded-[5px] flex items-center justify-between`}  style={{ width: `${shadowspread*2}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2 text-gray-500'>Shadow Spread</span>
                <span className='absolute right-0 p-2 text-gray-500'>{shadowspread}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="50"
              
            value={shadowspread}
            onChange={(e) => setShadowSpread(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>


 <div className="flex space-x-2">
            <input
              type="color"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
              className="w-7 sm:w-12 h-7 sm:h-8 rounded border border-gray-300 cursor-pointer"
            />
            <input
              type="text"
              value={shadowColor}
              onChange={(e) => setShadowColor(e.target.value)}
              className="flex-1  px-1 py-1 text-[8px] sm:text-md border border-gray-300 rounded bg-white text-gray-900"
              placeholder="#000000"
            />
          </div>












      {/* Shadow Options
      <div className="space-y-4 mt-18">
        <h3   className={`text-[11px] sm:text-md  mb-8 font-bold ${color ? "text-white" : "text-gray-900"}`}>Shadow</h3>
        
      
        {/* Shadow Color */}
          {/* <div className="space-y-5 mt-8">
          <div className="flex  items-center space-x-2">
            <Paintbrush className="w-3 sm:w-4 h-3 sm:h-4 text-gray-500" />
            <label className="text-[9px] sm:text-xs font-medium text-gray-500">Shadow Color</label>
          </div>
         
        </div>
       
      
      </div> } */}







 <h3   className={`text-[11px] sm:text-sm  mb-1 mt-10 font-bold text-gray-500`}>POSITIONS</h3>
{/* {Padding} */}
          
 <div className={`  ${(color ? "bg-[black]":"bg-gray-100" )}   relative rounded-[5px] `} > 
            
          <div className={`  ${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs p-1   rounded-[5px] flex items-center justify-between`}    style={{ width: `${padding}%` }}>
       <div className="p-3"></div>
 <span className='absolute left- text-gray-500'>Padding</span>
                <span className='absolute right-0 p-2 text-gray-500'>{padding}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={padding}
            onChange={(e) => changepadding(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>

{/* {Rotation} */}
          
 <div className={`  ${(color ? "bg-[black]":"bg-gray-100" )}   relative rounded-[5px] `}> 
            
          <div  className={`  ${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs p-1   rounded-[5px] flex items-center justify-between`}    style={{ width: `${((tilt + 180) / 360) * 100}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2 text-gray-500'>Rotate</span>
                <span className='absolute right-0 p-2 text-gray-500'>{tilt}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="-180"
          
            max="180"
              
            value={tilt}
            onChange={(e) => setTilt(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>



















































      {/* <div className="space-y-4 mt-8">
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
      </div> */}

       
<hr  className='text-gray-200'/>



































        
      {/* Reset Button */}
      <button 
        onClick={handleReset}
 
        className={`w-full py-1 mt-8 px-2 border border-gray-300 rounded-lg text-[11px] sm:text-md font-medium  ${(color ? "text-white":"text-gray-500" )} ${(color ? "bg-gray-600":"bg-gray-100" )}  hover:text-white hover:bg-gray-700 hover:cursor-pointer  transition-all duration-300 ease-in-out transition-colors`}
      >
        Reset All Changes
      </button>
    </div>
  );
};


export default EditTab;