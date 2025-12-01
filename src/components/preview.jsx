import React, { useContext,useEffect, useRef, useState } from 'react';

import { userContext } from '../App';
import { Camera, Radius } from 'lucide-react';
import * as htmlToImage from "html-to-image";

const PreviewArea = () => {
  
   const {  grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert, color,overlay,setOverlay,newdev,setNewDev, setColor,padding,overlayopacity,setOverlayOpacity,exportbg,setExportBg,layoutborder,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);
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
let backgroundType = "";

// Default
if (!picbackground || typeof picbackground !== "string") {
  const defaultBg = "linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6))";
  setPicBackground(defaultBg);
  backgroundStyle = defaultBg;
  backgroundType = "gradient";
}

// Blob image
else if (/^blob:/.test(picbackground)) {
  backgroundStyle = `url("${picbackground}")`;
  backgroundType = "image";
}

// Normal image URLs
else if (
  /url\(/i.test(picbackground) ||
  /\.(jpg|jpeg|png|webp|gif|svg)(\?|$)/i.test(picbackground)
) {
  backgroundStyle = picbackground.includes("url(")
    ? picbackground
    : `url("${picbackground}")`;
  backgroundType = "image";
}

// Gradient (linear, radial)
else if (/gradient\(/i.test(picbackground)) {
  backgroundStyle = picbackground;
  backgroundType = "gradient";
}

// Solid color
else if (
  /^#([0-9a-f]{3,8})$/i.test(picbackground) ||
  /^rgba?\(/i.test(picbackground) ||
  /^hsla?\(/i.test(picbackground) ||
  /^[a-z]+$/i.test(picbackground)
) {
  backgroundStyle = picbackground;
  backgroundType = "color";
}

// fallback
else {
  backgroundStyle = "#ffffff";
  backgroundType = "color";
}


// ⭐ FINAL background with correct CSS rules
let finalBackground = "";

if (backgroundType === "image") {
  finalBackground = `${backgroundStyle} center / 100% 100% no-repeat`;
} else {
  // colors + gradients
  finalBackground = backgroundStyle;
}

const style = {
  background: finalBackground,
};


if(style.background){
  setExportBg(style.background)
}

console.log("noise amount on preview tab is =",noisecontroller)
const [imageSrc, setImageSrc] = useState(""); // this will hold base64
const [bgSrc, setBgSrc] = useState("");
useEffect(() => {
  const bg = style.background;

  if (!bg || typeof bg !== "string") {
    setBgSrc("");
    return;
  }

  // ---- 1️⃣ Detect blob URL ----
  const blobMatch = bg.match(/blob:[^)"]+/);
  const blobUrl = blobMatch ? blobMatch[0] : null;

  // ---- 2️⃣ Detect normal image URL (relative or absolute) ----
  // Matches: url(/path/image.webp), /path/image.webp, https://abc.com/img.png
  const urlMatch =
    bg.match(/url\(["']?(.*?)["']?\)/)?.[1] ||
    (bg.match(/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i) ? bg : null);

  const finalUrl = blobUrl || urlMatch;

  if (finalUrl) {
    fetch(finalUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBgSrc(reader.result); // base64 data URL
        };
        reader.readAsDataURL(blob);
      })
      .catch((err) => {
        console.error("Failed to convert image to base64:", err);
        setBgSrc(bg); // fallback to original
      });

    return;
  }

  // ---- 3️⃣ Colors, gradients, etc. → leave untouched ----
  setBgSrc(bg);

}, [style.background]);


useEffect(() => {
  if (!previewUrl) {
    setImageSrc(""); // clear when no preview
    return;
  }

  // Check if previewUrl is a blob URL
  if (previewUrl.startsWith("blob:")) {
    fetch(previewUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result); // base64
        };
        reader.readAsDataURL(blob);
      })
      .catch((err) => console.error("Failed to convert blob to base64:", err));
  } else {
    // Already a normal URL or base64
    setImageSrc(previewUrl);
  }
}, [previewUrl]);
console.log("style.background=",bgSrc);




const getBgCssValue = (bgSrc) => {
  if (!bgSrc) return "";

  // Check if bgSrc is a base64 image
  if (/^data:image\/(png|jpeg|jpg|gif|webp|svg\+xml);base64,/.test(bgSrc)) {
    // ✅ Wrap in url() with full background shorthand
    return `url("${bgSrc}") center / 100% 100% no-repeat`;
  }

  // Otherwise assume it's a color or gradient
  return bgSrc;
};
console.log(" new dev and frame at preview page","newdev=",newdev,"framename=",frame.name)
  return <>
<div
  className="flex-1 flex overflow-hidden items-center justify-center min-h-full relative overflow-hidden transition-all duration-300 "
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  
>

  <div
  id='photo-div'
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
         
         "--bg":getBgCssValue(bgSrc),
"--bgfilter": `${noisecontroller > 0 ? "url(#overlay-noise-filter)" : ""} brightness(${canvabrightness}%) blur(${canvablur}px) contrast(${canvacontrast}%) sepia(${canvasepia}%) opacity(${canvaopacity}%) invert(${bginvert}%) grayscale(${bggrayscale}%) saturate(${bgsaturate}%) hue-rotate(${bghuerotate}deg)`,

    //fix colide of these filter properties one of them work at a time
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing
   
  
    }}
  > 
 {/* Update your SVG filter */}
<svg style={{ display: 'none' }}>
  <filter id="overlay-noise-filter" x="0" y="0" width="100%" height="100%">
    {/* Create noise */}
    <feTurbulence 
      type="fractalNoise"
      baseFrequency={`${noisecontroller}`} 
      numOctaves="4" 
      stitchTiles="stitch"
      result="noise"
    />
    
    {/* Adjust noise opacity/strength */}
    <feComponentTransfer in="noise" result="adjustedNoise">
      <feFuncA type="linear" slope="1"/> {/* Controls noise intensity */}
    </feComponentTransfer>
    
    {/* Blend noise with original content using overlay for better results */}
    <feBlend 
      in="SourceGraphic" 
      in2="adjustedNoise" 
      mode="overlay"
      result="final"
    />
  </filter>
</svg>
 <div 
  className={`absolute w-full h-full z-90 pointer-events-none`} 
  style={{ 
    opacity: overlayopacity / 100,
    
   
  }}
>
  {overlay && (
  <img
    src={overlay}
    className="w-full h-full"
    alt=""
    crossOrigin="anonymous"
  />
)}

</div>
 
    {previewUrl  ? (
<div style={{
  width: '70%',
  height: `78%`,

  position: 'relative',
  borderRadius:"20%",
   transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing
    willChange: "transform, opacity, filter", // performance hint
 perspective: typeof perspective === 'string' ? perspective : `${perspective}px`,

    transform: [
     
      `scale(${scale})`,
      `rotate(${tilt}deg)`,
     
  rotateY,
    rotateX, 
    
    rotateZ,
    translateZ

    ]
      .filter(Boolean)
      .join(" "),
    
}}>

 {/* {macosblack} */}
  {
    frame.name==="Mac dark" ? <div className='absolute  z-100  bg-gray-800 h-8 w-full' style={{left:0,top:-1,borderTopLeftRadius:5,borderTopRightRadius:5,}}>
  <div className='flex ml-2 mt-3'>
<div className='bg-red-900 h-2 w-2  rounded-xl'></div>
  <div className='bg-green-900  h-2 ml-1 w-2 rounded-xl'></div>
  <div className='bg-blue-900  h-2 w-2  ml-1 rounded-xl'></div>
  </div>
  <span className='absolute ml-46 text-[10px] top-2 text-white'>File</span>
</div> : ""
  }


 {/* {macoswhite} */}
 {
  frame.name==="Mac light" ? <div className='absolute  z-100  bg-white  h-8 w-full' style={{left:0,top:-1,borderTopLeftRadius:5,borderTopRightRadius:5,}}>
  <div className='flex ml-2 mt-3'>
<div className='bg-red-900 h-2 w-2  rounded-xl'></div>
  <div className='bg-green-900  h-2 ml-1 w-2 rounded-xl'></div>
  <div className='bg-blue-900  h-2 w-2  ml-1 rounded-xl'></div>
  </div>
  <span className='absolute ml-46 text-[10px] top-2 text-black'>File</span>
</div> : ""
 }



 {/* {windowwhite} */}
 {
  frame.name==="Windows light" ? <div className='absolute   z-100  bg-white h-8 w-full flex align-start justify-start' style={{left:0,top:-1,borderTopLeftRadius:5,borderTopRightRadius:5,}} >

  <span className='m-2  text-[10px]  text-black'>File</span>
</div>  : ""
 }

 {/* {windowblack} */}
{
  frame.name==="Windows dark" ? <div className=' absolute z-100  bg-gray-800 h-8 w-full flex align-start justify-start' style={{left:0,top:-1,borderTopLeftRadius:5,borderTopRightRadius:5,}}>

  <span className='m-2  text-[10px]  text-white'>File</span>
</div> : ""
}

<div style={{
  width: "100%",
  height: "100%",
  position: 'relative',
   display:"flex",
   justifyContent:"center",
  transformOrigin: "center",
  transition: "transform 0.3s ease-in-out",
  padding: `${newdev.name !== undefined || frame.name!==undefined ? 0 : padding}px`

 


}}>
    
{
  newdev ? <div className='w-100 h-100 flex align-center justify-center ' >
  {/* iphone */}
  {
    newdev.name==="iphone" ? <label  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='rounded-4xl'>
    <div className=' w-50  h-100 relative' style={{  transition: "transform 0.3s ease-in-out"}}>
     <img src="/phone.png"  className='w-[100%]  h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}
  className='absolute top-1/2 left-1/2 w-[95%] h-[97%] rounded-[28px] z-10 transform -translate-x-1/2 -translate-y-49'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> 
   : ""
  }
  
  
{/* {iphone15} */}
   {
    newdev.name==="iphone15" ? <label  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='rounded-[35px]'>
    <div className=' w-55  h-100 relative'>
     <img src="/15.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}
  className='absolute top-1/2 left-1/2 w-[95%] h-[96%] rounded-[28px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> 
   : ""
  }

{/* watch */}
  {/* <label>
    <div className=' w-50  h-100 relative'>
     <img src="/public/watch.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
  className='absolute  top-1/2 left-24 w-[87%] h-[61%] rounded-[50px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> */}
 

{/* macbook13 */}

{
  newdev.name==="mackbook13" ? <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` ,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}>
     <img src="/13.png"  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,}}
  className='absolute  top-1/2 left-25 w-[82%] h-[27%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label>
 : ""
}

   
 {/* {macbook16} */}

{
   newdev.name==="mackbook16" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)` }}>
     <img src="/14.png"  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,}}
  className='absolute  top-1/2 left-25 w-[77%] h-[25%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : "" 
}

 
  
  {/* {ipadpro11} */}
  {
     newdev.name==="ipadpro11" ?  <label   >
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)` }}>
     <img src="/11.png" style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}} className='contain rounded-2xl bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img  
  src={`${imageSrc}`}  style={{opacity:picopacity/100,}}
  className='absolute  top-1/2 left-25 w-[89%] h-[67%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label>  : ""
  }
  
  {/* {ipadsilver} */}
  {
      newdev.name==="ipadsilver" ?  <label  >
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` ,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}>
     <img src="/silver.png"  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='contain rounded-2xl bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,}}
  className='absolute  top-1/2 left-25 w-[89%] h-[67%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : ""
  }
   
{/* {led} */}
{
   newdev.name==="tv" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`}
     style={{ transform: `scale(${scale})` ,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}>
     <img src="/tv.png"  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`}  style={{opacity:picopacity/100,}}
  className='absolute  top-48 left-23.5 mr-1 w-[68.5%] h-[19%] rounded-[1px] z-10 transform -translate-x-16 -translate-y-9'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : ""
}

 {/* adadadadoihjwepfhrwpeirjf[womdlknvldfjhgper[pqowepqoweoiqhkmdbvlksdjhgpoug[oerig[pewiod[wjnvclkdcndvlkjdchnvoewiur-fqw[o[ier[qwoiepqoiewokhnvkjsjhnhoiu]]]]]]]] */}
  
</div> :  <img
    style={{
      width: "100%",
      height: "100%",
      display: "block",
      
      objectFit: "cover ",   //change to contain 100 100 according to asif bhai
    borderTop: phoneborder    ? "17px solid #080808ff" : frame?.style?.borderTop || frame?.style?.border || layoutborder.borderTop || "none",
  borderRight: phoneborder   ? "8px solid #080808ff"   : frame?.style?.borderRight || frame?.style?.border || layoutborder.borderRight || "none",
   borderBottom: phoneborder ? "12px solid #080808ff"    : frame?.style?.borderBottom || frame?.style?.border || layoutborder.borderBottom || "none",
  borderLeft: phoneborder? "8px solid #080808ff": frame?.style?.borderLeft || frame?.style?.border ||  layoutborder.borderLeft ||"none",
    borderRadius: `${phoneborder ? 20 : radius || frame?.style?.borderRadius || layoutborder?.borderRadius || 0}px`,

      border:`${layoutborder? layoutborder.border: "none"}`,
      boxShadow: phoneborder ? "0 0 10px white" : `0 10px 60px ${shadowspread}px ${shadowColor ?? frame?.style?.boxShadow ?? layoutborder.boxShadow?? "none"}`,
      backdropFilter: frame?.style?.backdropFilter || "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // smoother easing,
  filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`,
                    
    opacity: picopacity/100,
    

    }}
    src={imageSrc}
    alt="Preview"
    crossOrigin="anonymous"
  />
}


 
 
 
 { phoneborder ? <div className="absolute top-[1%] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full z-20" /> : ""}




 
</div>

</div>
       

    ) : ( 

<>
{
  newdev ?  <div className='w-100 h-100 flex justify-center ' style={
    {
     perspective: typeof perspective === 'string' ? perspective : `${perspective}px`,
      
    transform: [
     
      `scale(${scale})`,
      `rotate(${tilt}deg)`,
      perspective,
 rotateY,
    rotateX, 
      
    rotateZ,
    translateZ

    ]
      .filter(Boolean)
      .join(" "),
    padding: `0 ${padding + 5}px`,
    opacity: picopacity / 100,
 
 filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden", // hide extra content if needed,
    }
  }>
    
  {/* iphone */}
  {
    newdev.name==="iphone" ? <label style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}} className='rounded-4xl'>
    <div className=' w-50  h-100 relative   transition: "transform 0.3s ease-in-out",' style={{filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}>
     <img src="/phone.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt=""  />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute top-1/2 left-1/2 w-[95%] h-[96%] rounded-[28px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> 
   : ""
  }
  
{/* {iphone15} */}
   {
    newdev.name==="iphone15" ? <label  style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}} className='rounded-[37px]'>
    <div className=' w-55  h-100 relative' style={{filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`}}>
     <img src="/15.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute top-1/2 left-1/2 w-[95%] h-[96%] rounded-[28px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> 
   : ""
  }

{/* watch */}
  {/* <label>
    <div className=' w-50  h-100 relative'>
     <img src="/public/watch.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
  className='absolute  top-1/2 left-24 w-[87%] h-[61%] rounded-[50px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> */}
 

{/* macbook13 */}

{
  newdev.name==="mackbook13" ? <label  >
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`, }}>
     <img src="/13.png" style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className={`contain bg-gray-300 bg-transparent rounded-xl z-100 `}  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute  top-1/2 left-25 w-[82%] h-[27%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label>
 : ""
}

   
 {/* {macbook16} */}

{
   newdev.name==="mackbook16" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` ,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`,}}>
     <img src="/14.png" style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}} className='contain rounded-4xl bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute  top-1/2 left-25 w-[77%] h-[25%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : "" 
}

 
  
  {/* {ipadpro11} */}
  {
     newdev.name==="ipadpro11" ?  <label >
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`, }}>
     <img src="/11.png" style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='rounded-2xl contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute  top-1/2 left-25 w-[89%] h-[67%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label>  : ""
  }
  
  {/* {ipadsilver} */}
  {
      newdev.name==="ipadsilver" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`, }}>
     <img src="/silver.png" style={{boxShadow:`0 0 60px ${shadowspread}px  ${shadowColor}`,}}  className='contain rounded-2xl bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      imageSrc ?<img 
  src={`${imageSrc}`} 
  className='absolute  top-1/2 left-25 w-[89%] h-[67%] rounded-[1px] z-10 transform -translate-x-1/2 -translate-y-1/2'  
  alt="" 
/> : ""
     }
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : ""
  }
    
{/* {led} */}
{
   newdev.name==="tv" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})`,filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`, }}>
      <div style={{boxShadow: `0 0 60px ${shadowspread}px  ${shadowColor}`}} className='w-50 h-50'>
<img src="/tv.png"   className='contain bg-gray-300 z-100  bg-transparent w-full h-full'   alt="" />
     {
     imageSrc ?<img 
  src={`${imageSrc}`}  
  className='absolute  top-48 left-23.5 mr-1 w-[68.5%] h-[19%] rounded-[1px] z-10 transform -translate-x-16 -translate-y-9'  
  alt="" 
/> : ""
     }
      </div>
     
      
     </div>
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
  </label> : ""
}

 
  
</div>  : 
 <div style={{
    width: device ? `${device.width}px` : "68%",
    height: device ? `${device.height}px` : "75%",
    borderRadius: `${radius}px`,
    borderTop: phoneborder ? "17px solid #080808ff" : frame?.style?.borderTop || frame?.style?.border || "none",
    borderRight: phoneborder ? "8px solid #080808ff" : frame?.style?.borderRight || frame?.style?.border || "none",
    borderBottom: phoneborder ? "12px solid #080808ff" : frame?.style?.borderBottom || frame?.style?.border || "none",
    borderLeft: phoneborder ? "8px solid #080808ff" : frame?.style?.borderLeft || frame?.style?.border || "none",
    boxShadow: `0 0 60px ${shadowspread}px  ${shadowColor}`,
transformStyle: 'preserve-3d', // Add this for proper 3D
      perspective: typeof perspective === 'string' ? perspective : `${perspective}px`,
          
    transform: [
 translateZ,
   rotateX, 
 rotateY, rotateZ,
   `rotate(${tilt}deg)`,
    `scale(${scale})`,
     ,

    ]
      .filter(Boolean)
      .join(" "),
    padding: `0 ${padding + 5}px`,
    opacity: picopacity / 100,
  // Additional 3D properties for better rendering
    backfaceVisibility: 'hidden',
    WebkitFontSmoothing: 'antialiased',
 filter: `brightness(${brightness}%) blur(${blur}px) sepia(${sepia}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%) saturate(${saturate}%) hue-rotate(${huerotate}deg)`,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden", // hide extra content if needed,
    
  }}
  className={`flex hover:scale-110 justify-center items-center text-center ${
    color ? "bg-[#000000]" : "bg-gray-100"
  } transition-all duration-300 ease-in-out rounded-xl p-2 flex-col`}
 
>
{/* {macosblack} */}
  {
    frame.name==="Mac dark" ? <div className='absolute top-0 bg-gray-800 h-8 w-full'>
  <div className='flex ml-2 mt-3'>
<div className='bg-red-900 h-2 w-2  rounded-xl'></div>
  <div className='bg-green-900  h-2 ml-1 w-2 rounded-xl'></div>
  <div className='bg-blue-900  h-2 w-2  ml-1 rounded-xl'></div>
  </div>
  <span className='absolute ml-6 text-[10px] top-2 text-white'>File</span>
</div> : ""
  }


 {/* {macoswhite} */}
 {
  frame.name==="Mac light" ? <div className='absolute top-0 bg-white h-8 w-full'>
  <div className='flex ml-2 mt-3'>
<div className='bg-red-900 h-2 w-2  rounded-xl'></div>
  <div className='bg-green-900  h-2 ml-1 w-2 rounded-xl'></div>
  <div className='bg-blue-900  h-2 w-2  ml-1 rounded-xl'></div>
  </div>
  <span className='absolute ml-6 text-[10px] top-2 text-black'>File</span>
</div> : ""
 }



 {/* {windowwhite} */}
 {
  frame.name==="Windows light" ? <div className='absolute top-0 bg-white h-8 w-full flex align-start justify-start' >

  <span className='m-2  text-[10px]  text-black'>File</span>
</div>  : ""
 }

 {/* {windowblack} */}
{
  frame.name==="Windows dark" ? <div className='absolute top-0 bg-gray-800 h-8 w-full flex align-start justify-start' >

  <span className='m-2  text-[10px]  text-white'>File</span>
</div> : ""
}


  <label
    className="cursor-pointer flex flex-col items-center justify-center w-full h-full overflow-hidden" 
   
  >
    <div className="flex flex-col items-center justify-center w-full h-full text-xs sm:text-sm overflow-hidden"
    >
      {!(device.width && device.height < 100) && (
        <>
        {
  device.name? <h1>{device.name}</h1> : ""
}           
          <p className={`text-[9px] sm:text-sm md:text-base lg:text-xs ${color ? "text-white" : "text-black"} mb-1`}>
            Drop your screenshot here!
          </p>
       
          <p className={`text-[8px] sm:text-xs md:text-sm lg:text-xs ${color ? "text-white" : "text-black"} mb-1`}>
            Supports  <span className={`${color ? "text-white" : "text-blue-700"} mt-1 font-bold`}>PNG, JPG, and WebP</span> formats
          </p>
          <p className={`text-[8px] sm:text-xs md:text-sm lg:text-xs ${color ? "text-white" : "text-black"}`}>
            Or use the <span className="font-bold text-blue-700">Upload Button</span>
          </p>
          <Camera className={`${color ? "text-white" : "text-blue-700"} mt-1`} />
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
}
</>

 
 


      
 
 

    )}
  </div>
</div>

  </>
};


export default PreviewArea;