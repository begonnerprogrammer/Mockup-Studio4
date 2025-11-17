import React, { useContext, useState } from 'react';
import { Upload, Info, Image as ImageIcon, Sliders, Eye, EyeOff, Palette, Sun, Contrast, Droplets, RotateCcw, Zap } from 'lucide-react';
import { userContext } from '../../App';

const SettingsTab = ({
  deviceType,
  screenshot,
  fileInfo,
  filters,
  onFiltersChange
}) => {

  //Rendering img
   const { color, setColor,fileimg,setFileImg,previewUrl,phoneborder,setPhoneBorder,framebordervalue,setFrameBorderValue, setPreviewUrl,device,setDevice } = useContext(userContext);
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



  const deviceSizes = {
  "iphone-14-pro": { name: 'iPhone 14 Pro', width: 228, height: 428 , icon: '📱'},
   
  "ipad-pro": {   name: 'Ipad Mini',width:350,height:450, icon: '💻' },
  "iphone-12-pro": {   name: 'iphone 12 pro',width:198,height:428, icon: '📱'  },
  "Nest-hub":{name: 'Nest Hub',width: 370 ,height:400, icon: '📱'}
  // add other devices here
};

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


  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="space-y-3 mb-18">
        <h3 className={`text-[11px] sm:text-md font-bold ${color ? "text-white" : "text-gray-900"}`}>Upload Screenshot</h3>
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

      {/* Device Selection */}
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
      </div>

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
