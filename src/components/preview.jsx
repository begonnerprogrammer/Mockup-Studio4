import React, { useContext, useRef, useState } from 'react';

import { userContext } from '../App';
import { Radius } from 'lucide-react';

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


 console.log("pic backgorun at preview page ",picbackground);
    console.log("shadow color at preview page",shadowColor);
     console.log("radius  at preview page",radius);
        console.log("RotateY  at preview page",rotateY);
        console.log("phoneborder at preview page",phoneborder)
            console.log("frameborder at preview page",framebordervalue)
  let backgroundStyle = "";
let backgroundType = ""; // Optional — helps you know what it is later

if (!picbackground || typeof picbackground !== "string") {
  backgroundStyle = " radial-gradient(at 20% 30%, rgb(255, 0, 0) 0px, transparent 50%), radial-gradient(at 80% 20%, rgb(0, 255, 0) 0px, transparent 50%), radial-gradient(at 50% 80%, rgb(0, 0, 255) 0px, transparent 50%)"; // fallback
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
    className={`relative   flex items-center justify-center z-10
      border-4 border-gray-800 dark:border-gray-300  shadow-lg
      bg-opacity-20
      ${isDragging
        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
        : color
        ? "bg-white"
        : "bg-gray-200"
      }`}
    style={{
      width:`450px`,
      height: `500px`,
      maxWidth: "100%",
      boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
      border: "2px solid #333",
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
    // Apply the same transformations to the container
    transform: `scale(${scale}) rotate(${tilt}deg) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
    transformOrigin: "center",
    
    transition: "transform 0.3s ease-in-out",
  }}>
    {/* Camera portion - only shown when phoneborder is true */}
    {phoneborder && (
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40%',
        height: '20px',
        backgroundColor: '#000',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        zIndex: 10
      }}>
        {/* Camera lens */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '8px',
          height: '8px',
          backgroundColor: '#333',
          borderRadius: '50%',
          border: '1px solid #555',
             
        }}></div>
      </div>
    )}
    
    <img
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        objectFit: "contain 100% 100%",
        border: phoneborder ? "12px solid #080808ff" : frame?.style?.border || "none",
        borderRadius: `${phoneborder ? "12px": radius ?? frame?.style?.borderRadius ?? 0}px`,
        boxShadow: phoneborder? "0 0 10px white" : `0 10px 20px ${shadowColor ?? frame?.style?.boxShadow ?? "none"}`,
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
      <div className="text-center p-8">
        <p className={`text-lg font-medium ${color? "text-gray-200  " : "text-gray-900" } transition-all duration-300 ease-in-out  mb-4`}>
          Drop your screenshot here!
        </p>
        <p className={`text-sm  ${color? "text-white" : "text-gray-200" }  `}>
          Supports PNG, JPG, and WebP formats
        </p>
        <p className={`text-sm  ${color? "text-white" : "text-gray-200" }  `}>Or use the upload Button</p>
      </div>
    )}
  </div>
</div>

  </>
};


export default PreviewArea;