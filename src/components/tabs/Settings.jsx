import React, { useContext, useState } from 'react';
import { Upload, Info, Image as ImageIcon, Sliders,Share as Shadow, Eye, EyeOff, Palette, Sun, Contrast, Droplets, RotateCcw, Zap, Grid, Blend, BlendIcon, Filter } from 'lucide-react';
import { userContext } from '../../App';

const SettingsTab = ({
  deviceType,
  screenshot,
  fileInfo,
  filters,
  onFiltersChange
}) => {

  //Rendering img
   const { color, setColor,fileimg,setFileImg,canvasepia,setCanvaSepia,canvabrightness,setCanvaBrightness,radius,setRadius,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur,canvaopacity,setCanvaOpacity,sepia,setSepia,contrast,setContrast, blur,setBlur, picopacity,brightness, setBrightness, setPicOpacity,canvard,setCanvaRd,previewUrl,phoneborder,setPhoneBorder,framebordervalue,setFrameBorderValue, setPreviewUrl,device,setDevice } = useContext(userContext);
const handleFileInput = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    setFileImg(file);
    setPreviewUrl(URL.createObjectURL(file));
    
  }
};

  const handleFilterChange = (filterName, value) => {
    onFiltersChange({
      ...filters,
      [filterName]: value
    });
  };

  const resetFilters = () => {
    onFiltersChange({
      blur: 0,
      brightness: 100,
      contrast: 100,
      opacity: 100,
      invert: 0,
      saturate: 100,
      sepia: 0,
      hueRotate: 0,
      grayscale: 0
    });
  };

const onbrightnesschange=(value)=>{
setBrightness(value);
console.log("brigtness is ",value)
}
const  onchangecanvaopacity=(value)=>{
  setCanvaOpacity(value);
}

const oncanvasepiachange=(value)=>{
setCanvaSepia(value);
}
  const deviceSizes = {
  "iphone-14-pro": { name: 'iPhone 14 Pro', width: 228, height: 428 , icon: '📱'},
   
  "ipad-pro": {   name: 'Ipad Mini',width:350,height:450, icon: '💻' },
  "iphone-12-pro": {   name: 'iphone 12 pro',width:198,height:428, icon: '📱'  },
  "Nest-hub":{name: 'Nest Hub',width: 370 ,height:400, icon: '📱'}
  // add other devices here
};
const  opacitychange=(value)=>{
setPicOpacity(value);
}

const onchangecanvablur=(value)=>{
  setCanvaBlur(value)
}




const onchangeradius=(value)=>{
setCanvaRd(value);
}
const onchangecanvacontrast=(value)=>{
setCanvaContrast(value);
}
console.log("canvacontrasr on settings page",canvacontrast)
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filterControls = [
    { name: 'blur', label: 'Blur', icon: <Droplets className="w-4 h-4" />, min: 0, max: 10, step: 0.1, unit: 'px' },
    { name: 'brightness', label: 'Brightness', icon: <Sun className="w-4 h-4" />, min: 0, max: 200, step: 1, unit: '%' },
    { name: 'contrast', label: 'Contrast', icon: <Contrast className="w-4 h-4" />, min: 0, max: 200, step: 1, unit: '%' },
    { name: 'opacity', label: 'Opacity', icon: <Eye className="w-4 h-4" />, min: 0, max: 100, step: 1, unit: '%' },
    { name: 'invert', label: 'Invert', icon: <RotateCcw className="w-4 h-4" />, min: 0, max: 100, step: 1, unit: '%' },
    { name: 'saturate', label: 'Saturation', icon: <Palette className="w-4 h-4" />, min: 0, max: 200, step: 1, unit: '%' },
    { name: 'sepia', label: 'Sepia', icon: <ImageIcon className="w-4 h-4" />, min: 0, max: 100, step: 1, unit: '%' },
    { name: 'hueRotate', label: 'Hue Rotate', icon: <Zap className="w-4 h-4" />, min: 0, max: 360, step: 1, unit: '°' },
    { name: 'grayscale', label: 'Grayscale', icon: <EyeOff className="w-4 h-4" />, min: 0, max: 100, step: 1, unit: '%' }
  ];

const findDevice = (id) => {
 
 const deviceObj = deviceSizes[id]; // get the full device object
  if (!deviceObj) {
    console.error("Device not found for id:", id);
    return;
  }

  console.log("Selected device:", deviceObj);
  setDevice(deviceObj); // store the full object in state
  
 
};


const oncanvabrightnesschange=(value)=>{
setCanvaBrightness(value);
}

const onblurchange=(value)=>{
setBlur(value);
}
const onblurcontrast=(value)=>{
setContrast(value);
}
const onsepiachange=(value)=>{
setSepia(value);
}

  const [selected, setSelected] = useState("one");

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="space-y-3 ">
        <h3 className={`text-[8px] sm:text-sm  font-bold ${color ? "text-white" : "text-gray-900"}`}>Upload Screenshot</h3>
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-6 sm:w-8 h-6 sm:h-8  mb-2 text-gray-400 dark:text-gray-500" />
            <p className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
            <p className="text-[11px] sm:text-sm text-gray-400 dark:text-gray-500">PNG, JPG up to 10MB</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileInput}
          />
        </label>
        <p className={`${color ? "text-white" : "text-gray-900"}`}>{fileimg ? fileimg.name:""}</p>
      </div>

      {/* File Information */}
      {fileInfo && screenshot && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <Info className="w-4 h-4" />
            <span>File Information</span>
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400">Name:</span>
              <span className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate max-w-32" title={fileInfo.name}>
                {fileInfo.name}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400">Type:</span>
              <span className="text-xs font-medium text-gray-900 dark:text-gray-100 uppercase">
                {fileInfo.type.split('/')[1]}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400">Size:</span>
              <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
                {formatFileSize(fileInfo.size)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Device Selection
      <div className="space-y-3">
        <h3 className={`text-[11px] sm:text-md font-bold ${color ? "text-white" : "text-gray-900"} mb-5`}>Device Frame</h3>
        <div className="grid grid-cols-2 gap-8">
         {Object.entries(deviceSizes).map(([id, device]) => (
  <button
    key={id}
    className={`p-1 rounded-lg h-16 border-2 transition-all duration-200 text-left hover:scale-105 ${
      deviceType === id
        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
        : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
    }`}
    onClick={() => {findDevice(id);setPhoneBorder(true);setFrameBorderValue(false)}}
  >



     <div className='flex align-items-center justify-content-center'>
<div className="text-sm mb-1">{device.icon}</div>
    <div className="text-[9px] sm:text-xs mt-1 sm:mt-0 font-sm text-gray-500 dark:text-gray-100">{device.name}</div>
     </div>
    
  </button>
))}

        </div>
      </div> */}

      {/* Image Filters */}
      {screenshot && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
              <Sliders className="w-4 h-4" />
              <span>Image Filters</span>
            </h3>
            <button
              onClick={resetFilters}
              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Reset All
            </button>
          </div>

          {/* Filter Controls */}
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {filterControls.map((filter) => (
              <div key={filter.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {filter.icon}
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {filter.label}
                    </label>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {filters[filter.name]}{filter.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={filter.min}
                  max={filter.max}
                  step={filter.step}
                  value={filters[filter.name]}
                  onChange={(e) => handleFilterChange(filter.name, Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span>{filter.min}{filter.unit}</span>
                  <span>{filter.max}{filter.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter Presets */}
      {screenshot && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Filter Presets</h3>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => onFiltersChange({
                blur: 0, brightness: 100, contrast: 100, opacity: 100,
                invert: 0, saturate: 100, sepia: 0, hueRotate: 0, grayscale: 0
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              Original
            </button>
            <button 
              onClick={() => onFiltersChange({
                ...filters, brightness: 120, contrast: 110, saturate: 120
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              Vibrant
            </button>
            <button 
              onClick={() => onFiltersChange({
                ...filters, grayscale: 100, contrast: 110
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              B&W
            </button>
            <button 
              onClick={() => onFiltersChange({
                ...filters, sepia: 80, brightness: 110, contrast: 90
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              Vintage
            </button>
            <button 
              onClick={() => onFiltersChange({
                ...filters, brightness: 80, contrast: 120, saturate: 80
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              Dramatic
            </button>
            <button 
              onClick={() => onFiltersChange({
                ...filters, brightness: 110, saturate: 130, hueRotate: 15
              })}
              className="p-2 border border-gray-200 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-xs text-gray-700 dark:text-gray-300"
            >
              Warm
            </button>
          </div>
        </div>
      )}

<hr  className='text-gray-200'/>

             {/* Transformations */}
      <div className="space-y-2 ">
       <h3   className={`text-[11px] sm:text-sm  mb-2 font-bold ${color ? "text-gray-100" : "text-gray-900"}`}>FILTERS</h3>
      <div style={{ display: "flex" }}>
      
      <div
        onClick={() => setSelected("one")}
        style={{
          padding: "4px",
          border: "1px solid gray",
          background: selected === "one" ? "#9ca3af" : "#d1d5db",
          borderTopLeftRadius:"4px",
          borderBottomLeftRadius:"4px",
          cursor: "pointer",
          color:selected === "one" ?  (color ? "white":"black" ) : "#4b5563",
        }}
        className='text-sm'
      >
       FORGROUND
      </div>

      <div
        onClick={() => setSelected("two")}
        style={{
          padding: "4px",
          border: "1px solid gray",
          background: selected === "two" ?  "#9ca3af" : "#d1d5db",
          cursor: "pointer",
          color:selected === "two" ?  (color ? "white":"black" ) : "#4b5563",
          borderTopRightRadius:"4px",
          borderBottomRightRadius:"4px",
        }}
         className='text-sm'
      >
      BACKGROUND
      </div>

    </div>

      
        

{
  selected==="one" ? <>
  <div className="space-y-4 p-1">
  
    {/* Opacity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              
              <label className="text-[9px] sm:text-xs font-medium text-gray-500"></label>
            </div>
           
          </div>

{/* {opacity} */}
 <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs p-1  rounded-[5px] flex items-center justify-between'  style={{ width: `${picopacity/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Opacity</span>
    <span className='absolute right-0 p-2'>{picopacity}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
           
            value={picopacity}
            onChange={(e) => opacitychange(Number(e.target.value))}
          
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>
        
       
  {/* Shadow Intensity */}
        <div className="space-y-4 ">
         



 <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${brightness/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Brightness</span>
                <span className='absolute right-0 p-2'>{brightness}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
            
            value={brightness}
            onChange={(e) =>onbrightnesschange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>









        
        </div>
        {/*Blur */}
 <div className="space-y-4 ">
          
          <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${blur*10}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Blur</span>
                <span className='absolute right-0 p-2'>{blur}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="10"
            
            value={blur}
            onChange={(e) =>onblurchange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>
        
  {/* Contrast */}
 <div className="space-y-4 ">
          
        
 <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${(contrast/1)/2}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Contrast</span>
                <span className='absolute right-0 p-2'>{contrast}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="200"
            
            value={contrast}
            onChange={(e) =>onblurcontrast(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>

  {/* Sepia */}
 <div className="space-y-4 ">
          
        
 <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${(sepia/1)/2}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Sepia</span>
                <span className='absolute right-0 p-2'>{sepia}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="200"
            
            value={sepia}
            onChange={(e) =>onsepiachange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>
</div>
  </> : <>
<div className="space-y-4 p-1">
          <div className="flex items-center justify-between">

          </div>






 {/* {Canva Radius} */}
 <div className='bg-gray-300 relative space-y-4 rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${canvard/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Radius</span>
                <span className='absolute right-0 p-2'>{canvard}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={canvard}
            onChange={(e) => onchangeradius(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
 {/* {Canva Opacity} */}
<div className='bg-gray-300 relative space-y-4 rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${canvaopacity}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Opacity</span>
                <span className='absolute right-0 p-2'>{canvaopacity}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={canvaopacity}
            onChange={(e) => onchangecanvaopacity(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
 {/* {Canva Blur} */}
<div className='bg-gray-300 relative space-y-4  rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${canvablur}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Blur</span>
                <span className='absolute right-0 p-2'>{canvablur}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={canvablur}
            onChange={(e) => onchangecanvablur(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
 {/* {Canva Contrast} */}
<div className='bg-gray-300 relative space-y-4 rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${(canvacontrast/1)/2}%`}}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Contrast</span>
                <span className='absolute right-0 p-2'>{canvacontrast}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="200"
              
            value={canvacontrast}
            onChange={(e) => onchangecanvacontrast(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>

 {/* {Canva Brightness} */}
 <div className='bg-gray-300 relative space-y-4 rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${canvabrightness/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Brightness</span>
                <span className='absolute right-0 p-2'>{canvabrightness}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
            
            value={canvabrightness}
            onChange={(e) =>oncanvabrightnesschange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
  









        
        </div>

 {/* {Canva Sepia} */}
 <div className='bg-gray-300 relative space-y-4 rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${(canvasepia/1)/2}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Sepia</span>
                <span className='absolute right-0 p-2'>{canvasepia}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="200"
            
            value={canvasepia}
            onChange={(e) =>oncanvasepiachange(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>









        </div> 
  </>
  
 
}



    









 



















      























<hr className='text-gray-200' />

 <div className="space-y-2 p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
         
              <label   className={`text-xs ${color ? "text-gray-100" : "text-white-900"} text-[11px] sm:text-sm font-bold `} >CANVAS</label>
            </div>
           
          </div>
    
       

 <div className='bg-gray-300 relative rounded-[5px]' > 
            
          <div  className='bg-gray-400 text-xs  p-1 rounded-[5px] flex items-center justify-between'  style={{ width: `${canvard}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2'>Canva Radius</span>
                <span className='absolute right-0 p-2'>{canvard}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={canvard}
            onChange={(e) => onchangeradius(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>











        </div> 




















      </div>
      {/* Quality Settings
      <div className="space-y-3">
        <h3 className={`text-sm font-semibold ${color ? "text-white" : "text-gray-900" }`}>Export Quality</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="radio" name="quality"   className="text-blue-500" onChange={() => {
      setTwok(true);
      setFourk(false);
    }} />
            <span   className={`text-sm ${color ? "text-white" : "text-gray-900"} `}>High (2x)</span>  
          </label>
        <label className="flex items-center space-x-2 cursor-pointer">
  <input
    type="radio"
    name="quality"
    value="4k"
    className="text-blue-500"
  onChange={() => {
      setFourk(true);
      setTwok(false);
    }}
  />
  <span className={`text-sm ${color ? "text-white" : "text-gray-900"}`}>
    Ultra (4x)
  </span>
</label>

        </div>
      </div> */}
    </div>
  );
};




export default SettingsTab;
