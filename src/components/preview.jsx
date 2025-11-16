import React, { useContext, useRef, useState } from 'react';

import { userContext } from '../App';
import { Camera, Radius } from 'lucide-react';

const PreviewArea = () => {
  
   const { color, setColor,padding,picbackground,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);
   const [isDragging, setIsDragging] = useState(false);
    const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
 const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      alert("Please drop an image file");
    }
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }
const handleFileInput = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    setFileImg(file);
    setPreviewUrl(URL.createObjectURL(file));
    
  }
};

 console.log("pic backgorun at preview page ",picbackground);
    console.log("shadow color at preview page",shadowColor);
     console.log("radius  at preview page",radius);
        console.log("RotateY  at preview page",rotateY);
        console.log("phoneborder at preview page",phoneborder)
            console.log("frameborder at preview page",frame)
  let backgroundStyle = "";
let backgroundType = ""; // Optional — helps you know what it is later

if (!picbackground || typeof picbackground !== "string") {
  setPicBackground("linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6))")
  backgroundStyle = "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6))"
  backgroundType = "none";
} 
else if (/^blob:/.test(picbackground)) {
  // 🖼️ Case: Blob URL
  backgroundStyle = `url("${picbackground}")`;
  backgroundType = "image";
} 
else if (/url\(["']?.+["']?\)/i.test(picbackground) || /\.(jpg|jpeg|png|webp|gif|svg)(\?|$)/i.test(picbackground)) {
  // 🖼️ Case: Regular image URL or file name
  backgroundStyle = picbackground.includes("url(")
    ? picbackground
    : `url("${picbackground}")`;
  backgroundType = "image";
} 
else if (/gradient\(/i.test(picbackground)) {
  // 🎨 Case: Linear or radial gradient
  backgroundStyle = picbackground;
  backgroundType = "gradient";
} 
else if (/^#([0-9a-f]{3,8})$/i.test(picbackground) || /^rgba?\(/i.test(picbackground) || /^hsla?\(/i.test(picbackground) || /^[a-z]+$/i.test(picbackground)) {
  // 🎨 Case: Solid color
  backgroundStyle = picbackground;
  backgroundType = "color";
} 
else {
  // ❔ Fallback for unknown inputs
  backgroundStyle = "#ffffff";
  backgroundType = "unknown";
}

const style = {
  background: `${backgroundStyle} center /  100% 100%  no-repeat`,
   
};



  return <>
<div
  className="flex-1 flex overflow-hidden items-center justify-center min-h-full relative overflow-hidden transition-all duration-300 "
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  
>
  <div
    className={`relative w-[40vw] 
      h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] flex items-center justify-center z-10
      shadow-lg
      bg-opacity-20
      ${isDragging
        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
        : color
        ? "bg-white"
        : "bg-gray-200"
      }`}

    style={{
      maxWidth: "100%",
      boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
      
           overflow: "hidden",
          // Remove transformations from this wrapper
        
          // Add padding to the wrapper instead of the image
          
    background:style.background? style.background : "#FFFFFF",
    
    }}
  >
  

    {previewUrl && device ? (
<div style={{
  width: `${device.width+12}px`,
  height: `${device.height+12}px`,
  padding: `${padding ?? frame?.style?.padding ?? 0}px`,
  position: 'relative',
  borderRadius:"20%",
   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing
    willChange: "transform, opacity, filter", // performance hint
}}>
<div style={{
  width: "100%",
  height: "100%",
  position: 'relative',
  transform: `scale(${scale}) rotate(${tilt}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
  transformOrigin: "center",
  transition: "transform 0.3s ease-in-out",
}}>
  <img
    style={{
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "contain 100% 100%",
      border: phoneborder ? "7px solid #080808ff" : frame?.style?.border || "none",
      borderRadius: `${phoneborder ? "20" : radius ?? frame?.style?.borderRadius ?? 0}px`,
      boxShadow: phoneborder ? "0 0 10px white" : `0 10px 20px ${shadowColor ?? frame?.style?.boxShadow ?? "none"}`,
      backdropFilter: frame?.style?.backdropFilter || "none",
      opacity: typeof picopacity === "number" ? picopacity : 1,
      filter: `brightness(${typeof brightness === "number" ? brightness : 100}%)`,
    }}
    src={previewUrl}
    alt="Preview"
    crossOrigin="anonymous"
  />
  
 
</div>
</div>
       

    ) : ( 
      <div  style={{
         width: "80%",
      height: "60%",
         borderRadius: `${radius}px`,
        boxShadow: `0 0 10px  ${shadowColor}`,
           transform: `scale(${scale}) rotate(${tilt}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
           padding:`0 ${padding+5}px 0px ${padding+5}px`,
             opacity: typeof picopacity === "number" ? picopacity : 1,
      filter: `brightness(${typeof brightness === "number" ? brightness : 100}%)`,
        
      }} 
    
      className={`flex hover:scale-110 justify-content-center align-items-center text-center  ${color? "bg-[#000000] " : "bg-gray-100" } transition-all duration-300 ease-in-out    rounded-xl  p-8  flex-col`}>
     
          <label className='cursor-pointer'>
    <p className={` text-lg mt-12 font-medium ${color? "text-white  " : "#000000" } transition-all duration-700 ease-in-out  mb-4 text-xs sm:text-sm md:text-base lg:text-xl` }>
          Drop your screenshot here!
        </p>
        <p className={`text-sm  ${color? "text-white " : "#000000" } transition-all duration-700 ease-in-out  text-[10px] sm:text-xs md:text-sm lg:text-base `}>
          Supports PNG, JPG, and WebP formats
        </p>
        <p className={`text-sm  ${color? "text-white " : "#000000" }  transition-all duration-700 ease-in-out text-[10px] sm:text-xs md:text-sm lg:text-base `}>Or use the <span className='font-bold'> Upload Button</span></p>
        <div className='flex items-center justify-center'> <span className='mt-3'><Camera className={`${color? "text-white " : "#000000" } w-60`} /></span> </div>
         <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileInput}
          />
          </label>
         
      
     
      </div>
    )}
  </div>
</div>

  </>
};


export default PreviewArea;