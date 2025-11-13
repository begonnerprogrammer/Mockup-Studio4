import React, { useContext, useState } from 'react';
import { Upload, Image as ImageIcon, Palette, Layers, Sparkles, Grid, Mountain, FileImage, Droplets, Eye } from 'lucide-react';
import { userContext } from '../../App';


 const Background = () => {
  const [activeCategory, setActiveCategory] = useState('magic-gradient');

 const { color, setColor,picbackground,previewUrl, setPreviewUrl,setPicBackground } = useContext(userContext);

  const categories = [
    { id: 'magic-gradient', name: 'Magic Gradient', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'overlay', name: 'Overlay', icon: <Layers className="w-4 h-4" /> },
    { id: 'mesh-gradient', name: 'Mesh Gradients', icon: <Grid className="w-4 h-4" /> },
    { id: 'gradient', name: 'Gradient', icon: <Palette className="w-4 h-4" /> },
    { id: 'solid', name: 'Solid Colors', icon: <Droplets className="w-4 h-4" /> },
    { id: 'marble', name: 'Marble Textures', icon: <Mountain className="w-4 h-4" /> },
    { id: 'paper', name: 'Paper Textures', icon: <FileImage className="w-4 h-4" /> },
    { id: 'images', name: 'Background Images', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'custom', name: 'Custom Background', icon: <Upload className="w-4 h-4" /> },
  ];

  // Background options
  const magicGradients = [
    'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  ];

  const overlayGradients = [
    'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(22, 22, 26, 1), rgba(18, 19, 18, 0.77))',
    'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
    'linear-gradient(135deg, rgba(59,130,246,0.6), rgba(147,51,234,0.6))',
  ];

  const meshGradients = [
'radial-gradient(at 20% 30%, rgb(255, 0, 0) 0px, transparent 50%),radial-gradient(at 80% 20%, rgb(0, 255, 0) 0px, transparent 50%), radial-gradient(at 50% 80%, rgb(0, 0, 255) 0px, transparent 50%)',

    'radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%)',
  ];

  const regularGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  ];

  const solidColors = [
    '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0',
    '#1e293b', '#0f172a', '#020617', '#64748b',
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
  ];

  const marbleTextures = [
    'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
  ];

  const paperTextures = [
    'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg',
  ];

  const backgroundImages = [
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
  ];

  // Handle custom image upload
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
           const url = URL.createObjectURL(file);
        // const imageUrl = e.target?.result;
        setPicBackground(url);
      
    
      };
      reader.readAsDataURL(file);
    }
  };


const Backgroundcolorchanger=(item)=>{
console.log("item is=",item);
setPicBackground(item);
}

  // Render background grid
  const renderBackgroundGrid = (items, isImage = false) => (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item, index) => (
        <button
          key={index}
          className="h-16 w-16 rounded border hover:scale-105 transition-transform"
          style={{
            background: isImage ? `url(${item}) center/cover no-repeat` : item,
          }}
          // onClick={() => onBackgroundChange(item)}
          onClick={()=>Backgroundcolorchanger(item)}
        />
      ))}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Category Tabs
      <div className="flex space-x-2 overflow-x-auto flex flex-col">
        {categories.map((cat) => (<>
          <button
            key={cat.id}
            className={`flex items-center space-x-1 px-2 py-1 rounded whitespace-nowrap ${
              activeCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon}
            <span className="text-sm">{cat.name}</span>
          </button>
       <div>this button data</div>
        </>
        ))}
      </div> */}
   
      {/* Background Grid */}
      <div className="min-h-screen  px-1 py-10">
  <div className="max-w-7xl mx-auto space-y-8">
    
    {/* Section Header */}
    <h1 className={`text-md  ${color ? "text-white" : "text-gray-900"} font-bold  italic text-gray-800 dark:text-gray-100 mb-10 text-center`}> 
      Background Styles
      
    </h1>

    {/* Each Section */}
    <section className="space-y-16">
      
      {/* Magic Gradients */}
      <div>
        <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Magic Gradients
        </h2>
        <div className="rounded-xl  dark:bg-gray-800 shadow-sm ">
          {renderBackgroundGrid(magicGradients)}
        </div>
      </div>

      {/* Overlay Gradients */}
      <div>
         <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Overlay Gradients
        </h2>
        <div className="rounded-xl  dark:bg-gray-800 ">
          {renderBackgroundGrid(overlayGradients)}
        </div>
      </div>

      {/* Mesh Gradients */}
      <div>
        <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Mesh Gradients
        </h2>
        <div className="rounded-xl  dark:bg-gray-800 ">
          {renderBackgroundGrid(meshGradients)}
        </div>
      </div>

      {/* Regular Gradients */}
      <div>
         <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Regular Gradients
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(regularGradients)}
        </div>
      </div>

      {/* Solid Colors */}
      <div>
       <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Solid Colors
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(solidColors)}
        </div>
      </div>

      {/* Marble Textures */}
      <div>
  <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Marble Textures
        </h2>
        <div className="rounded-xl  dark:bg-gray-800 ">
          {renderBackgroundGrid(marbleTextures, true)}
        </div>
      </div>

      {/* Paper Textures */}
      <div>
  <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Paper Textures
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(paperTextures, true)}
        </div>
      </div>

      {/* Background Images */}
      <div>
  <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Background Images
        </h2>
        <div className="rounded-xl  dark:bg-gray-800">
          {renderBackgroundGrid(backgroundImages, true)}
        </div>
      </div>

      {/* Custom Upload */}
      <div>
     <h2 className={`text-xs  ${color ? "text-white" : "text-gray-900"} font-semibold text-gray-800 dark:text-gray-100 mb-4 border-b border-gray-300 dark:border-gray-700 pb-2`}>
          Custom Background
        </h2>
        <div className="rounded-xl bg-white dark:bg-gray-800 shadow-sm p-6 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-700 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0 file:text-sm file:font-sm
                       file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer"
          />
        </div>
      </div>

    </section>
  </div>
</div>

    </div>
  );
};


export default Background;