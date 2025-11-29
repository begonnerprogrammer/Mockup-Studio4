import { memo, useContext } from 'react';
import ControlPanel from './controlpanel';
import { userContext } from '../App';

const Feature = () => {
     const {  grayscale,setGrayScale,
          bggrayscale,setBgGrayScale,
          huerotate,setHuerotate,
          bghuerotate,setBgHuerotate,
          saturate,setSaturate,
          bgsaturate,setbgSaturate,
          invert,setInvert,
          bginvert,setBgInvert, color,overlay,setOverlay,newdev,setNewDevm, setColor,padding,overlayopacity,setOverlayOpacity,exportbg,setExportBg,layoutborder,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);
  const handleFileInput = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    setFileImg(file);
    setPreviewUrl(URL.createObjectURL(file));
    
  }
};

const divrotations = [
    {  // ← First array item
        "name": "tv",
        "top": "48",
        "left": "23.5",
        "w": "68.5%",
        "h": "19%",
        "-translate-x-": "16",
        "-translate-y-": "9", 
        "src":"/public/tv.png" 
    },
    {  // ← Second array item
        "name": "ipadsilver", 
        "top": "1/2",    
        "left": "25",
        "w": "89%",
        "h": "67%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/public/silver.png", 
    },
     {  // ← Second array item
        "name": "ipadpro11", 
        "top": "1/2",   
        "left": "25",
        "w": "89%",
        "h": "67%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/public/11.png", 
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
        "src":"/public/14.png", 
    },
     {  // ← Second array item  
        "name": "mackbook13", 
        "top": "1/2",   
        "left": "25",
        "w": "82%",
        "h": "27%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/public/13.png", 
    },
    
     {  // ← Second array item  
        "name": "iphone", 
        "top": "1/2",   
        "left": "1/2",
        "w": "95%",
        "h": "96%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/public/phone.png", 
    },
       {  // ← Second array item  
        "name": "iphone15", 
        "top": "1/2",   
        "left": "1/2",
        "w": "95%",
        "h": "96%",
        "-translate-x-": "1/2",
        "-translate-y-": "1/2", 
        "src":"/public/15.png", 
    },
]

  return<>

  <div  className="flex-1 flex overflow-hidden items-center justify-center min-h-full relative overflow-hidden transition-all duration-300 ">
 <h1 className='text-2xl p-4'>Features</h1>
<div className='w-100 h-100 '>
  {/* iphone */}
  {
    newdev.name==="iphone" ? <label>
    <div className=' w-50  h-100 relative'>
     <img src="/public/phone.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
    newdev.name==="iphone15" ? <label>
    <div className=' w-55  h-100 relative'>
     <img src="/public/15.png" className='w-[100%] h-99 bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` }}>
     <img src="/public/13.png" className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` }}>
     <img src="/public/14.png" className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
     newdev.name==="ipadpro11" ?  <label>
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` }}>
     <img src="/public/11.png" className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` }}>
     <img src="/public/silver.png" className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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
    <div className={` w-50  h-100 relative flex items-center justify-center`} style={{ transform: `scale(${scale})` }}>
     <img src="/public/tv.png" className='contain bg-gray-300 z-100 bg-transparent'  alt="" />
     {
      previewUrl ?<img 
  src={`${previewUrl}`} 
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

 
  
</div>
 </div>
    <ControlPanel/>
  </>
};

export default Feature;