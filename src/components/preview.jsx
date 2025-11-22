import React, { useContext, useRef, useState } from 'react';

import { userContext } from '../App';
import { Camera, Radius } from 'lucide-react';

const PreviewArea = () => {
  
   const { color, setColor,padding,exportbg,setExportBg,layoutborder,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);
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

 console.log("blur at previeew pafe",blur);
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

if(style.background){
  setExportBg(style.background)
}

console.log("rotatex and y at preview page",rotateX,rotateY)
  return <>
<div
  className="flex-1 flex overflow-hidden items-center justify-center min-h-full relative overflow-hidden transition-all duration-300 "
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  
>
  
  <div
    className={`relative wrapper  w-[100vw]  sm:w-[40vh] md:w-[60vh] lg:w-[75vh] mt-2
      h-[100vh] mb-2 sm:h-[50vh] md:h-[60vh] lg:h-[85vh] flex items-center justify-center z-10
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
      borderRadius:`${canvard}px`,
           overflow: "hidden",
          // Remove transformations from this wrapper
   
          // Add padding to the wrapper instead of the image
          
         "--bg": style.background,
    "--bgfilter": `brightness(${canvabrightness}%) blur(${canvablur}px) contrast(${canvacontrast}%) sepia(${canvasepia}%)   opacity(${canvaopacity}%)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing
   
    }}
  > 
 

    {previewUrl  ? (
<div style={{
  width: `${device.width+12}px`,
  height: `${device.height+12}px`,
  padding: `${padding ?? frame?.style?.padding ?? 0}px`,
  position: 'relative',
  borderRadius:"20%",
   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing
    willChange: "transform, opacity, filter", // performance hint
      perspective:perspective,
      zIndex:110,
      
}}>

 
<div style={{
  width: "100%",
  height: "100%",
  position: 'relative',
 
  transformOrigin: "center",
  transition: "transform 0.3s ease-in-out",
 
transform: [

` scale(${scale})`,
  `rotate(${tilt}deg)`,
  perspective,
  rotateY,
  rotateX,
  rotateZ,
  translateZ
].filter(Boolean).join(" ")
,
}}>
    
  <img
    style={{
      width: "100%",
      height: "100%",
      display: "block",
       zIndex: "100",
      objectFit: "cover ",   //change to contain 100 100 according to asif bhai
    borderTop: phoneborder    ? "17px solid #080808ff" : frame?.style?.borderTop || frame?.style?.border || layoutborder || "none",
  borderRight: phoneborder   ? "8px solid #080808ff"   : frame?.style?.borderRight || frame?.style?.border || layoutborder || "none",
   borderBottom: phoneborder ? "12px solid #080808ff"    : frame?.style?.borderBottom || frame?.style?.border || layoutborder || "none",
  borderLeft: phoneborder? "8px solid #080808ff": frame?.style?.borderLeft || frame?.style?.border ||  layoutborder ||"none",
      borderRadius: `${phoneborder ? "20" : radius ?? frame?.style?.borderRadius ?? 0}px`,
      boxShadow: phoneborder ? "0 0 10px white" : `0 10px 60px ${shadowspread}px ${shadowColor ?? frame?.style?.boxShadow ?? "none"}`,
      backdropFilter: frame?.style?.backdropFilter || "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing,
    filter: `brightness(${brightness}%) sepia(${sepia}%) `,
                    
    opacity: picopacity/100,

    }}
    src={previewUrl}
    alt="Preview"
    crossOrigin="anonymous"
  />
 
 
 { phoneborder ? <div className="absolute top-[1%] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full z-20" /> : ""}

{(device?.name === "Mackbook-Pro-16" || device?.name === "Mackbook-Pro-13") && (
  <div
    className="absolute left-1/2 -translate-x-1/2"
    style={{
      bottom: "-12px",
      width: "110%",
      transform:"rotateX(40deg)",
      height: "20px",
      background: "#111",
      borderBottomLeftRadius: "6px",
      borderBottomRightRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      zIndex: 100,
    }}
  ></div>
)}

{/* ⌚ APPLE WATCH ULTRA FRAME */}
{(device?.name === "Apple-Watch-Ultra-Orange" ||
  device?.name === "Apple-Watch-Ultra-Yellow") && (
    <>
 <div
    className="absolute left-1/2 -translate-x-1/2"
    style={{
      bottom: "-115px",
      width: "75%",
      height: "60px",
      background:
        device?.name === "Apple-Watch-Ultra-Orange"
          ? "#ff7a21" // bright orange band
          : "#ffdd33", // yellow band
     borderTopLeftRadius:"22px",
     borderTopRightRadius:"22px",
     borderBottomLeftRadius:"12px",
     borderBottomRightRadius:"12px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.25)",
      transform: "rotateX(-190deg) rotateY(20deg)",
      transformOrigin: "top",
      zIndex: 100,
      border: "2px solid #d0d0d0", // metallic border
    }}
  ></div>
   {/* --- DIGITAL CROWN (Right side) --- */}
    <div
      className="absolute"
      style={{
        right: "-5px",
        top: "55%",
        transform: "translateY(-100%)",
        width: "6px",
        height: "20px",
        background: "#cfcfcf",
        borderRadius: "8px",
        boxShadow:
          "inset 0 2px 5px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 210
      }}
    ></div>
    
    <div
    className="absolute left-1/2 -translate-x-1/2"
    style={{
      top: "10px",
      width: "75%",
      height: "65px",
      background:
        device?.name === "Apple-Watch-Ultra-Orange"
          ? "#ff7a21" // bright orange band
          : "#ffdd33", // yellow band
  
      borderBottomLeftRadius:"22px",
      borderBottomRightRadius:"22px",
      borderTopLeftRadius:"12px",
     borderTopRightRadius:"12px",
      boxShadow: "0 5px 12px rgba(0,0,0,0.25)",
      transform: "rotateX(-190deg) rotateY(20deg)",
      transformOrigin: "top",
      zIndex: 100,
      border: "2px solid #d0d0d0", // metallic border
    }}
  ></div>
    </>
 
)}
 
</div>

</div>
       

    ) : ( 
    <div
  style={{
    width: device ? `${device.width}px` : "68%",
    height: device ? `${device.height}px` : "75%",
    borderRadius: `${radius}px`,
    borderTop: phoneborder ? "17px solid #080808ff" : frame?.style?.borderTop || frame?.style?.border || "none",
    borderRight: phoneborder ? "8px solid #080808ff" : frame?.style?.borderRight || frame?.style?.border || "none",
    borderBottom: phoneborder ? "12px solid #080808ff" : frame?.style?.borderBottom || frame?.style?.border || "none",
    borderLeft: phoneborder ? "8px solid #080808ff" : frame?.style?.borderLeft || frame?.style?.border || "none",
    boxShadow: `0 0 60px ${shadowspread}px  ${shadowColor}`,
    transform: [
      perspective,
      `scale(${scale})`,
      `rotate(${tilt}deg)`,
      rotateY,
      rotateX,
      rotateZ,
      translateZ,
    ]
      .filter(Boolean)
      .join(" "),
    padding: `0 ${padding + 5}px`,
    opacity: picopacity / 100,
    filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden", // hide extra content if needed
  }}
  className={`flex hover:scale-110 justify-center items-center text-center ${
    color ? "bg-[#000000]" : "bg-gray-100"
  } transition-all duration-300 ease-in-out rounded-xl p-2 flex-col`}
>
  <label
    className="cursor-pointer flex flex-col items-center justify-center w-full h-full overflow-hidden"
  >
    <div className="flex flex-col items-center justify-center w-full h-full text-xs sm:text-sm overflow-hidden">
      {!(device.width && device.height < 100) && (
        <>
        {
  device.name? <h1>{device.name}</h1> : ""
}
          <p className={`text-[9px] sm:text-sm md:text-base lg:text-xs ${color ? "text-white" : "text-black"} mb-1`}>
            Drop your screenshot here!
          </p>
          <p className={`text-[8px] sm:text-xs md:text-sm lg:text-xs ${color ? "text-white" : "text-black"} mb-1`}>
            Supports PNG, JPG, and WebP formats
          </p>
          <p className={`text-[8px] sm:text-xs md:text-sm lg:text-xs ${color ? "text-white" : "text-black"}`}>
            Or use the <span className="font-bold">Upload Button</span>
          </p>
          <Camera className={`${color ? "text-white" : "text-black"} mt-1`} />
        </>
      )}
    </div>

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