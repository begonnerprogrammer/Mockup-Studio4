import React, { useContext } from 'react';
import { Layers, Share as Shadow, Maximize, Grid } from 'lucide-react';
import { userContext } from '../../App';
 
const LayoutTab = () => {
 const {  grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert, color,overlay,setOverlay,newdev,setNewDev, setColor,padding,exportbg,setExportBg,layoutborder,overlayopacity,setOverlayOpacity,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);
  const layoutPresets = [
    
     {
      id: '6',
      name: 'layout6',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/178.webp',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
       border: "none",
        borderRadius: "8",
    },
 {
      id: '11',
      name: 'layout11',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/406.webp',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
       border: "none",
        borderRadius: "8",
    },
     {
      id: '8',
      name: 'layout8',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/Dusk.webp',
      settings: {
         rotateY:"rotateY(0deg)",
        rotateX:"rotateX(14deg)",
        rotateZ:"rotateZ(0deg)",
      },
        borderTop: "8px solid white",
    borderRight: "8px solid white", 
    borderBottom: "24px solid white",
    borderLeft: "8px solid white", 
      borderRadius: "8",
      
    },
    
    
    {
      id: '9',
      name: 'layout9',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/overlay1.webp',
      settings: {
          perspective: "perspective(1200px)",
         rotateY:"rotateY(0deg)",
        rotateX:"rotateX(-10deg)",
        rotateZ:"rotateZ(45deg)",
        translateZ: "translateZ(-40px)"
      },
         borderTop: "8px solid white",
    borderRight: "8px solid white", 
    borderBottom: "24px solid white",
    borderLeft: "8px solid white",
     borderRadius: "8",
      overlay:"/overlay/overlay-3.webp",
      
    },
   {
      id: '10',
      name: 'layout10',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
           bg:'/overlay2.webp',
      settings: {
          perspective: "perspective(1200px)",
         rotateY:"rotateY(0deg)",
        rotateX:"rotateX(-10deg)",
        rotateZ:"rotateZ(45deg)",
        translateZ: "translateZ(-40px)"
        
      },
        
     borderRadius: "8",
     overlay:"/overlay/overlay-18.webp",
      
    },
     {
      id: '5',
      name: 'layout5',
      src: previewUrl ? previewUrl : 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
      bg: '/patterns/p-9.jpeg',
      settings: {
        rotateX:"rotateX(0deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
      border:"6px solid black", borderRadius: "8",
    },
    {
      id: '4',
      name: 'layout4',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:"/patterns/p-1.jpeg",
      settings: {
         rotateX:"rotateX(0deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
        border: "2px solid #3498db",
       borderRadius: "8",
    },
    {
      id: '1',
      name: 'layout1',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/411.webp',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
       border: "none",
        borderRadius: "8",
    },
     
    {
      id: '7',
      name: 'layout7',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/02.webp',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(0deg)",
      },
       border: "none",
        borderRadius: "8",
    },
    

    














    {
      id: '2',
      name: 'layout2',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg: '/layout-imgs/test12.webp',
      settings: {
         perspective: "perspective(1200px)",
         rotateY:"rotateY(0deg)",
       rotateX:"rotateX(0deg)",
       
        rotateZ:"rotateZ(0deg)",
      
        translateZ: "translateZ(40px)"
      },
 

borderTop: "8px solid rgba(255, 255, 255, 0.2)",
    borderRight: "8px solid rgba(255, 255, 255, 0.2)", 
    borderBottom: "8px solid rgba(255, 255, 255, 0.2)",
    borderLeft: "8px solid rgba(255, 255, 255, 0.2)",
 borderRadius: "8",


      
    },





















     {
      id: '3',
      name: 'layout3',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:"/layout-imgs/test30.webp",
      settings: {
        rotateX:"rotateX(0deg)",
        rotateY:"rotateY(10deg)",
        rotateZ:"rotateZ(-18deg)",
      },
       border: "none",
        borderRadius: "8",
    },
     
    
    {
      id: '12',
      name: 'layout12',
      src: previewUrl ? previewUrl : '/marble/m-9.jpeg',
      bg:'/layout-imgs/test62.webp',
      settings: {
        rotateX:"rotateX(14deg)",
        rotateY:"rotateY(0deg)",
        rotateZ:"rotateZ(10deg)",
      },
       border: "none",
        borderRadius: "8",
    },
    
    // Add other presets here if needed
  ];

const onchangeradius=(value)=>{
setRadius(value);
}

  const handleReset = (preset) => {
    setPreviewUrl(preset.src),
    setPicBackground(preset.bg),
     setPresPective(preset.settings.perspective),
         setRotateY(preset.settings.rotateY),
    setRotateX(preset.settings.rotateX),
    setRotateZ(preset.settings.rotateZ),
    setTranslateZ(preset.settings.translateZ),
    setLayoutBorder(preset),
    setNoiseController(0);
    setPresPective(preset.settings.perspective),
   setBrightness(100);
    setShadowColor('#000000');

    
   setOverlay('');
   setFrame( {name: 'Default',style:'border:none', preview: '⬜'});
  setTilt(0);
  setScale(1);
setOverlay(preset.overlay);

  setFileImg(null);
  setColor(false);
  
  setDevice("");
  
 setNewDev("");
 
setRadius(0);
setTilt(0);
setPhoneBorder(false);
  };

console.log("export bg ",exportbg)
  return (
    <div className="space-y-6">
      {/* Layout Presets */}
    
  
       
          {layoutPresets.map((preset) => (
           
            
              <div className="relative space-y-8 mt-10">
                       {preset.overlay && (
  <img
    src={preset.overlay}
    className="absolute w-full h-full  z-100 pointer-events-none"
    style={{opacity: overlayopacity / 100,}}
    alt=""
    crossOrigin="anonymous"
  />
)}
             <div className="z-100 flex flex-col gap-9 max-h-100" onClick={()=>{handleReset(preset)}} >
            <button
              key={preset.id}
              
             style={{  backgroundImage: preset.bg.startsWith('url') || 
                preset.bg.startsWith('linear-gradient') || 
                preset.bg.startsWith('radial-gradient') || 
                preset.bg.startsWith('conic-gradient') ? 
                preset.bg : 
                `url('${preset.bg}')`, backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  
    }}
    
     className=" p-12  rounded-lg text-left transition-all duration-200  group"
    >   
      <div className="flex items-center"  style={{
    ...(preset.boxShadow && { boxShadow: preset.boxShadow }),   // ✅ correct place
  }}>
 
             <img src={`${preset.src}`} alt=""   className="w-[100%] h-[60%] rounded-sm" 
style={{
  ...(preset.borderTop && { borderTop: preset.borderTop }),
  ...(preset.borderRight && { borderRight: preset.borderRight }),
  ...(preset.borderBottom && { borderBottom: preset.borderBottom }),
  ...(preset.borderLeft && { borderLeft: preset.borderLeft }),

  

  ...(preset.border && { border: preset.border.border || preset.border }),
 perspective: preset.settings?.perspective || 'none', // if available
  transform: [
    preset.settings?.rotateX,
    preset.settings?.rotateY,
    preset.settings?.rotateZ,
    preset.settings?.translateZ,
  ].filter(Boolean).join(' '),
  
}}


 />
              
              </div>
            </button>
              </div>
            </div>
          ))}
        
    

      {/* Manual Controls
      <div className="space-y-8 mt-22">
        <h3   className={`text-[11px] sm:text-md font-bold ${color ? "text-white" : "text-gray-900"}`}>Manual Adjustments</h3>
        
     
{
  previewUrl? <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Maximize className={`w-3 sm:w-4 h-3 sm:h-4  ${color ? "text-gray-500" : "text-gray-600" }`} />
              <label   className={`text-[9px] sm:text-xs font-medium ${color ? "text-gray-500" : "text-gray-700" }`}>Padding</label>
            </div>
            <span className="text-[9px] sm:text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {padding}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>  :""
}
       
        

       
        {
          phoneborder? "" :    <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grid className={`"w-4 h-4  text-gray-500`} />
              <label   className={`text-xs font-medium text-gray-500`}>Border Radius</label>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {radius}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={radius}
            onChange={(e) => onchangeradius(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div> 
        }
      
        
       
      </div> */}
    </div>
  );
};
  export default LayoutTab;