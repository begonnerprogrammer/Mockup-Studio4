import React, { useContext } from 'react';
import { Layers, Share as Shadow, Maximize, Grid } from 'lucide-react';
import { userContext } from '../../App';
 
const LayoutTab = () => {
  const layoutPresets = [
    {
      id: 'minimal-clean',
      name: 'Minimal Clean',
      description: 'Clean white background with subtle shadow',
      thumbnail: '🤍',
      settings: {
        shadow: 10,
        padding: 40,
        borderRadius:0,
        background: '#ffffff',
        rotation: 0,
        scale: 90,
        opacity: 100,
        deviceType: 'iphone-16-pro'
      }
    },
    {
      id: 'professional-dark',
      name: 'Professional Dark',
      description: 'Dark theme with strong shadows',
      thumbnail: '🖤',
      settings: {
        shadow: 30,
        padding: 30,
        borderRadius:8,
        background: '#1e293b',
        rotation: 0,
        scale: 50,
        opacity: 100,
        deviceType: 'macbook-pro-16'
      }
    },
    {
      id: 'gradient-modern',
      name: 'Gradient Modern',
      description: 'Modern gradient with floating effect',
      thumbnail: '🌈',
      settings: {
        shadow: 25,
        padding: 50,
        borderRadius: 10,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        rotation: -5,
        scale: 12,
        opacity: 100,
        deviceType: 'iphone-16-pro'
      }
    },
    {
      id: 'creative-tilt',
      name: 'Creative Tilt',
      description: 'Tilted device with vibrant background',
      thumbnail: '🎨',
      settings: {
        shadow: 35,
        padding: 60,
        borderRadius: 20,
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        rotation: 15,
        scale: 30,
        opacity: 100,
        deviceType: 'ipad-pro-13'
      }
    }
    // Add other presets here if needed
  ];
const { color, setColor,radius,phoneborder,setPhoneBorder,setRadius,padding,setPadding,picbackground,tilt, setTilt,setPicBackground,scale,setScale,size,setImgsize,shadowColor, setShadowColor } = useContext(userContext);
const onchangeradius=(value)=>{
setRadius(value);
}
  return (
    <div className="space-y-6">
      {/* Layout Presets */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Layout Presets</h3>
        <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
          {layoutPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
  setRadius(preset.settings.borderRadius);
  setPadding(preset.settings.padding);
  setPicBackground(preset.settings.background);
  setScale((preset.settings.scale)/100);
  setImgsize((preset.settings.scale)/100);
  setTilt(preset.settings.rotation);

}}
              className="p-3 border border-gray-200 dark:border-gray-600 rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-2xl">{preset.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <div className={` ${color ? "text-white" : "text-gray-900"} font-medium text-sm  truncate`}>
                    {preset.name}
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                {preset.description}
              </div>
              <div className="mt-2 flex items-center space-x-2 text-xs text-gray-400 dark:text-gray-500">
                <span className="flex items-center space-x-1">
                  <Shadow className="w-3 h-3" />
                  <span>{preset.settings.shadow}px</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Maximize className="w-3 h-3" />
                  <span>{preset.settings.scale}x</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Manual Controls */}
      <div className="space-y-4">
        <h3   className={`text-sm font-semibold ${color ? "text-white" : "text-gray-900"}`}>Manual Adjustments</h3>
        
     

        {/* Padding Controls */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Maximize className={`"w-4 h-4  ${color ? "text-white" : "text-gray-600" }`} />
              <label   className={`text-sm font-medium ${color ? "text-white" : "text-gray-700" }`}>Padding</label>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {padding}px
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Border Radius Controls */}
        {
          phoneborder ? "" :  <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Grid className={`"w-4 h-4  ${color ? "text-white" : "text-gray-600" }`} />
              <label   className={`text-sm font-medium ${color ? "text-white" : "text-gray-700" }`}>Border Radius</label>
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
            className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          />
        </div> 
        }
       
      </div>
    </div>
  );
};
  export default LayoutTab;