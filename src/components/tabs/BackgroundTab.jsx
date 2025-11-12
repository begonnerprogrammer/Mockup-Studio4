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
      {/* Category Tabs */}
      <div className="flex space-x-2 overflow-x-auto">
        {categories.map((cat) => (
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
        ))}
      </div>

      {/* Background Grid */}
      <div>
        <div>
 {activeCategory === 'magic-gradient' && renderBackgroundGrid(magicGradients)}
        </div>
       <div>
 {activeCategory === 'overlay' && renderBackgroundGrid(overlayGradients)}
       </div>
       <div>
 {activeCategory === 'mesh-gradient' && renderBackgroundGrid(meshGradients)}
       </div>
       <div>
  {activeCategory === 'gradient' && renderBackgroundGrid(regularGradients)}
       </div>
      <div>
       {activeCategory === 'solid' && renderBackgroundGrid(solidColors)}
      </div>
      <div>
     {activeCategory === 'marble' && renderBackgroundGrid(marbleTextures, true)}
      </div>
 <div>
    {activeCategory === 'paper' && renderBackgroundGrid(paperTextures, true)}
 </div>
   
    <div>
    {activeCategory === 'images' && renderBackgroundGrid(backgroundImages, true)}
    </div>
    <div>
 {activeCategory === 'custom' && (
          <div className='text-center'>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={`p-2 border rounded cursor-pointer w-full ${color ? "text-white" : "text-gray-700"}`}
            />
          </div>
        )}
    </div>
       
      </div>
    </div>
  );
};


export default Background;