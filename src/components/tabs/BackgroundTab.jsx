import React, { useContext, useState } from 'react';
import { Upload, Image as ImageIcon, Palette, Layers, Sparkles, Grid, Mountain, FileImage, Droplets, Eye, Camera, Diamond, GlassWater, Glasses, Diameter, FormInput } from 'lucide-react';
import { userContext } from '../../App';
import { memo } from 'react';

 const Background = () => {
  const [activeCategory, setActiveCategory] = useState('magic-gradient');

 const {  grayscale,setGrayScale,
        bggrayscale,setBgGrayScale,
        huerotate,setHuerotate,
        bghuerotate,setBgHuerotate,
        saturate,setSaturate,
        bgsaturate,setbgSaturate,
        invert,setInvert,
        bginvert,setBgInvert, color,overlay,setOverlay, setColor,padding,exportbg,setExportBg,layoutborder,overlayopacity,setOverlayOpacity,setLayoutBorder,noisecontroller,setNoiseController,picbackground,canvard,shadowspread,setShadowSpread,canvasepia,perspective,setPresPective, translateZ,setTranslateZ,  rotateZ,setRotateZ,setCanvaSepia,canvabrightness,setCanvaBrightness,canvacontrast,setCanvaContrast, canvablur,setCanvaBlur, canvaopacity,setCanvaOpacity, sepia,setSepia,  contrast,setContrast, blur,setBlur,setCanvaRd,framebordervalue,setFrameBorderValue,rotateX,phoneborder,setPhoneBorder,setRotateX,rotateY,setRotateY,setPicBackground,radius,setRadius,setPadding,fileimg,shadowColor, setShadowColor,setFileImg,brightness,setBrightness,previewUrl,picopacity,setPicOpacity, setPreviewUrl,device,setDevice,size,setImgsize,scale,setScale,tilt,setTilt,frame,setFrame } = useContext(userContext);

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
    'radial-gradient(circle at 70% 30%, rgb(110, 13, 208) 0%, black 75%)',
'radial-gradient(circle at 20% 80%, rgb(200, 0, 60) 0%, rgb(20, 0, 10) 75%)',
'radial-gradient(circle at 40% 60%, rgb(0, 150, 200) 0%, rgb(0, 10, 30) 80%)',
'radial-gradient(circle at 25% 75%, rgb(255, 170, 0) 0%, rgb(30, 15, 0) 75%)',
'radial-gradient(circle at 35% 65%, rgb(0, 200, 255) 0%, rgb(0, 5, 15) 85%)',

'radial-gradient(circle at 10% 10%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(189, 126, 154) 0%, transparent 10%), radial-gradient(circle, rgb(189, 126, 154) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(189, 126, 154) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(189, 126, 154) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(189, 126, 154) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(189, 126, 154) 0%, transparent 15%), linear-gradient(135deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)',
'radial-gradient(circle at 10% 10%, rgb(86, 156, 214) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(86, 156, 214) 0%, transparent 10%), radial-gradient(circle, rgb(86, 156, 214) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(86, 156, 214) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(86, 156, 214) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(86, 156, 214) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(86, 156, 214) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(86, 156, 214) 0%, transparent 15%), linear-gradient(135deg, rgb(10, 20, 40) 0%, rgb(10, 20, 40) 100%)',
'radial-gradient(circle at 10% 10%, rgb(72, 187, 120) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(72, 187, 120) 0%, transparent 10%), radial-gradient(circle, rgb(72, 187, 120) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(72, 187, 120) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(72, 187, 120) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(72, 187, 120) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(72, 187, 120) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(72, 187, 120) 0%, transparent 15%), linear-gradient(135deg, rgb(5, 25, 15) 0%, rgb(5, 25, 15) 100%)',
'radial-gradient(circle at 10% 10%, rgb(255, 159, 28) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(255, 159, 28) 0%, transparent 10%), radial-gradient(circle, rgb(255, 159, 28) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(255, 159, 28) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(255, 159, 28) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(255, 159, 28) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(255, 159, 28) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(255, 159, 28) 0%, transparent 15%), linear-gradient(135deg, rgb(40, 15, 5) 0%, rgb(40, 15, 5) 100%)',
'radial-gradient(circle at 10% 10%, rgb(147, 112, 219) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(147, 112, 219) 0%, transparent 10%), radial-gradient(circle, rgb(147, 112, 219) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(147, 112, 219) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(147, 112, 219) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(147, 112, 219) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(147, 112, 219) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(147, 112, 219) 0%, transparent 15%), linear-gradient(135deg, rgb(20, 10, 30) 0%, rgb(20, 10, 30) 100%)',
'radial-gradient(circle at 10% 10%, rgb(220, 53, 69) 0%, transparent 15%), radial-gradient(circle at 30% 20%, rgb(220, 53, 69) 0%, transparent 10%), radial-gradient(circle, rgb(220, 53, 69) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgb(220, 53, 69) 0%, transparent 15%), radial-gradient(circle at 90% 60%, rgb(220, 53, 69) 0%, transparent 20%), radial-gradient(circle at 20% 80%, rgb(220, 53, 69) 0%, transparent 15%), radial-gradient(circle at 40% 70%, rgb(220, 53, 69) 0%, transparent 10%), radial-gradient(circle at 60% 90%, rgb(220, 53, 69) 0%, transparent 15%), linear-gradient(135deg, rgb(30, 5, 10) 0%, rgb(30, 5, 10) 100%)',
'radial-gradient(circle at 30% 70%, rgba(170, 80, 220, 0.8) 0%, transparent 50%),radial-gradient(circle at 80% 20%, rgba(220, 100, 255, 0.7) 0%, transparent 60%),radial-gradient(circle at 45% 45%, rgba(130, 60, 200, 0.6) 0%, transparent 55%),linear-gradient(45deg, rgb(15, 5, 20) 0%, rgb(20, 8, 25) 100%)',
    'linear-gradient(45deg, #434343, #000000)',
  'radial-gradient(circle at 20% 30%, rgba(255, 120, 80, 0.9) 0%, transparent 50%),radial-gradient(circle at 70% 70%, rgba(255, 80, 150, 0.7) 0%, transparent 55%),radial-gradient(circle at 40% 60%, rgba(255, 180, 60, 0.8) 0%, transparent 45%),linear-gradient(135deg, rgb(20, 5, 10) 0%, rgb(25, 8, 12) 100%)',
  'radial-gradient(circle at 10% 60%, rgba(80, 180, 255, 0.8) 0%, transparent 50%),radial-gradient(circle at 90% 40%, rgba(120, 220, 255, 0.7) 0%, transparent 60%),radial-gradient(circle at 50% 80%, rgba(180, 230, 255, 0.6) 0%, transparent 45%),linear-gradient(45deg, rgb(5, 10, 15) 0%, rgb(8, 15, 20) 100%)',
  'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 113, 218, 0.3) 20px, rgba(0, 113, 218, 0.3) 21px),repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0, 113, 218, 0.3) 20px, rgba(0, 113, 218, 0.3) 21px),linear-gradient(135deg, rgb(8, 8, 15) 0%, rgb(5, 5, 12) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 5px, rgb(0, 200, 255) 5px, rgb(0, 200, 255) 6px),repeating-linear-gradient(90deg, transparent, transparent 5px, rgb(0, 200, 255) 5px, rgb(0, 200, 255) 6px),linear-gradient(45deg, rgb(5, 10, 20) 0%, rgb(10, 5, 25) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 15px, rgb(0, 255, 150) 15px, rgb(0, 255, 150) 16px),repeating-linear-gradient(90deg, transparent, transparent 15px, rgb(0, 255, 150) 15px, rgb(0, 255, 150) 16px),linear-gradient(135deg, rgb(5, 15, 10) 0%, rgb(10, 20, 15) 100%)',
'repeating-linear-gradient(0deg, transparent, transparent 12px, rgb(180, 0, 255) 12px, rgb(180, 0, 255) 13px),repeating-linear-gradient(90deg, transparent, transparent 12px, rgb(180, 0, 255) 12px, rgb(180, 0, 255) 13px),linear-gradient(135deg, rgb(15, 5, 20) 0%, rgb(20, 8, 25) 100%)',
'repeating-linear-gradient(30deg, transparent, transparent 15px, rgba(255, 0, 150, 0.6) 15px, rgba(255, 0, 150, 0.6) 16px),repeating-linear-gradient(-60deg, transparent, transparent 15px, rgba(255, 0, 150, 0.6) 15px, rgba(255, 0, 150, 0.6) 16px),linear-gradient(45deg, rgb(20, 5, 15) 0%, rgb(25, 8, 18) 100%)',  
];

  const overlayGradients = [
 '/overlay/overlay-1.webp',
 '/overlay/overlay-2.webp',
 '/overlay/overlay-3.webp',
 '/overlay/overlay-4.webp',
 '/overlay/overlay-5.webp',
 '/overlay/overlay-6.webp',
 '/overlay/overlay-7.webp',
 '/overlay/overlay-8.webp',
 '/overlay/overlay-9.webp',
 '/overlay/overlay-10.webp',
 '/overlay/overlay-11.webp',
 '/overlay/overlay-12.webp',
 '/overlay/overlay-13.webp',
 '/overlay/overlay-14.webp',
 '/overlay/overlay-15.webp',
 '/overlay/overlay-16.webp',
 '/overlay/overlay-17.webp',
 '/overlay/overlay-18.webp',
 '/overlay/overlay-19.webp',
 '/overlay/overlay-20.webp',
 '/overlay/overlay-21.webp',
 '/overlay/overlay-22.webp',
  ];

  const meshGradients = [

' linear-gradient(135deg, #000B28 20%, #312F90 55%, #FF52C1 90%)',
'linear-gradient(135deg, #001205 25%, #1C7A3A 60%, #E9FF6B 100%)',
' linear-gradient(135deg, #180900 20%, #FF6F1F 55%, #FFE770 100%)',
'linear-gradient(135deg, #001028 25%, #006F7B 60%, #6BFFF7 100%)',
'linear-gradient(135deg, #020011 25%, #C3102E 60%, #FF8A30 100%)',

    'radial-gradient(at 27% 37%, hsla(215,98%,61%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125,98%,72%,1) 0px, transparent 50%)',
    'radial-gradient(at 27% 37%, hsla(25,98%,65%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(280,98%,72%,1) 0px, transparent 50%)',
    'radial-gradient(at 27% 37%, hsla(195,98%,55%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(170,98%,65%,1) 0px, transparent 50%)',
    'radial-gradient(at 27% 37%, hsla(330,98%,65%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(45,98%,65%,1) 0px, transparent 50%)',
    'radial-gradient(at 27% 37%, hsla(270,98%,55%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(150,98%,45%,1) 0px, transparent 50%)',
    'radial-gradient(at 27% 37%, hsla(350,98%,55%,1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(200,98%,65%,1) 0px, transparent 50%)',
    'radial-gradient(at 20% 30%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 80% 20%, rgb(255, 215, 0) 0px, transparent 50%), radial-gradient(at 50% 80%, rgb(138, 43, 226) 0px, transparent 50%)',

'radial-gradient(at 27% 37%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 97% 21%, rgb(0, 191, 255) 0px, transparent 50%), radial-gradient(at 52% 99%, rgb(50, 205, 50) 0px, transparent 50%)',

'radial-gradient(at 27% 37%, rgb(152, 251, 152) 0px, transparent 50%), radial-gradient(at 97% 21%, rgb(255, 218, 185) 0px, transparent 50%), radial-gradient(at 52% 99%, rgb(176, 224, 230) 0px, transparent 50%)',

' radial-gradient(circle at 75% 50%,  #ff0ef0,  #7b1fa2 40%,  #14001f 80%)',
 'radial-gradient(  circle at 70% 50%,  #adff2f, #2b7a4b 40%, #001a0f 80%)',
 'radial-gradient(  circle at 65% 50%,  #ffd700,  #b8860b 40%,  #000000 80%)',

  ];

  const regularGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
  'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
  'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',

  ];

  const solidColors = [
    '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0',
    '#1e293b', '#0f172a', '#020617', '#64748b',
    '#ef4444', '#f97316', '#eab308', '#22c55e',
    '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899',
     "#B9F6CA", // Mint green
  "#69F0AE", // Teal green
  "#1DE9B6", // Aqua green
  "#00BFA5", 
  ];

  const marbleTextures = [
    '/marble/m-1.jpg',
      '/marble/m-2.jpg',
        '/marble/m-3.jpg',
          '/marble/m-4.jpg',
            '/marble/m-5.jpg',
              '/marble/m-6.jpg',
                '/marble/m-7.jpg',
                  '/marble/m-8.jpg',
                    '/marble/m-9.jpeg',
                      '/marble/m-10.jpeg',
  ];

  const paperTextures = [
'/paper/paper-1.jpeg',
'/paper/paper-2.jpg',
'/paper/paper-3.jpg',
'/paper/paper-4.jpg',
'/paper/paper-5.jpg',
'/paper/paper-6.jpg',
'/paper/paper-7.jpg',
'/paper/paper-8.jpeg',
'/paper/paper-9.jpeg',
'/paper/paper-10.jpeg',
  ];



  const patterns = [
  '/patterns/p-1.jpeg',
     '/patterns/p-2.jpeg',
       '/patterns/p-3.jpeg',
         '/patterns/p-4.jpeg',
           '/patterns/p-5.jpeg',
             '/patterns/p-6.jpeg',
               '/patterns/p-7.jpeg',
                 '/patterns/p-8.jpeg',
                   '/patterns/p-9.jpeg',
                     '/patterns/p-10.jpeg',
    
  ];


  const patterns2 = [
    '/patterns2/p-1.jpg',
       '/patterns2/p-2.jpg',
          '/patterns2/p-3.jpg',
             '/patterns2/p-4.jpg',
                '/patterns2/p-5.jpg',
                   '/patterns2/p-6.jpg',
                      '/patterns2/p-7.jpg',
                         '/patterns2/p-8.jpg',
                            '/patterns2/p-9.jpg',
                               '/patterns2/p-10.jpg',
  ];


  const backgroundImages = [
    '/backgroundimages/bg-1.jpeg',
    '/backgroundimages/bg-2.jpeg',
    '/backgroundimages/bg-3.jpeg',
 '/backgroundimages/bg-4.jpeg',
   '/backgroundimages/bg-5.jpeg',
   '/backgroundimages/bg-6.jpg',
  '/backgroundimages/bg-7.jpeg',
 '/backgroundimages/bg-8.jpeg',
'/backgroundimages/bg-9.jpeg',
  '/backgroundimages/bg-10.jpeg',
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


const BackgroundGridItem = memo(({ item, index, isImage, onClick }) => {
  return (
    <div className="w-10 h-12 sm:w-20 sm:h-12 flex-shrink-0">
      <button
        className="w-full h-full rounded border border-gray-300 hover:scale-105 transition-transform overflow-hidden"
        onClick={() => onClick(item)}
      >
        {isImage ? (
          <img
            src={item}
            alt={`bg-${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ background: item }}
          />
        )}
      </button>
    </div>
  );
});

const renderBackgroundGrid = (items, isImage = false) => (
  <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-min">
    {items.map((item, index) => (
      <BackgroundGridItem
        key={`${item}-${index}`}
        item={item}
        index={index}
        isImage={isImage}
        onClick={Backgroundcolorchanger}
      />
    ))}
  </div>
);
// const renderOverlayGrid = (items, isImage = false) => (
//   <div className="grid grid-cols-6 gap-2">
//     {items.map((item, index) => (
//       <div 
//         key={index}
//         className="aspect-square flex items-center justify-center"
//       >
//         <button
//           className={`rounded border hover:scale-105 transition-transform ${
//             color ? "border-gray-400" : "border-gray-300"
//           }`}
//           style={{
//             background: isImage ? `url(${item}) center/cover no-repeat` : item,
//             width: '100%',
//             height: '80%',
//           }}
//           onClick={() => setOverlay(item)}
//         />
//       </div>
//     ))}
    
//     {/* Add empty divs to make exactly 2 rows (12 items total) */}
//     {items.length < 12 && Array.from({ length: 12 - items.length }).map((_, index) => (
//       <div key={`empty-${index}`} className="aspect-square" />
//     ))}
//   </div>
// );


const renderPicturesGrid = (items, isImage = false) => (
  <div className="grid grid-rows-2 grid-flow-col gap-4 min-w-min overflow-y-hidden">
    {items.map((item, index) => (
      <div key={index} className="w-10 h-12 sm:w-20 sm:h-12 flex-shrink-0">
        <button
          className="w-full h-full rounded border border-gray-300 hover:scale-105 transition-transform overflow-hidden relative"
          onClick={() => Backgroundcolorchanger(item)}
        >
          {isImage ? (
            <>
              {/* Loading placeholder */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
              
              {/* Optimized image */}
              <img
                src={item}
                alt={`texture-${index}`}
                className="w-full h-full object-cover relative z-10"
                loading={index < 8 ? "eager" : "lazy"} // Eager load first 8, lazy load rest
                decoding="async"
                width={index < 8 ? "80" : undefined} // Provide dimensions for first few
                height={index < 8 ? "48" : undefined}
                onLoad={(e) => {
                  // Smoothly hide placeholder when image loads
                  const placeholder = e.target.previousSibling;
                  if (placeholder) {
                    placeholder.style.opacity = '0';
                    placeholder.style.transition = 'opacity 0.3s ease';
                    setTimeout(() => {
                      placeholder.style.display = 'none';
                    }, 300);
                  }
                }}
                onError={(e) => {
                  // Handle broken images gracefully
                  e.target.style.display = 'none';
                  const placeholder = e.target.previousSibling;
                  if (placeholder) {
                    placeholder.className = "absolute inset-0 bg-gradient-to-r from-red-50 to-red-100";
                    placeholder.innerHTML = '<span class="text-xs text-red-400">⚠️</span>';
                    placeholder.classList.add("flex", "items-center", "justify-center");
                  }
                }}
              />
            </>
          ) : (
            <div 
              className="w-full h-full"
              style={{ background: item }}
            />
          )}
        </button>
      </div>
    ))}
  </div>
);

const handleFileInput = (event) => {
  const file = event.target.files?.[0];
  if (file) {
    setFileImg(file);
    setPicBackground(URL.createObjectURL(file));
    
  }
};


const renderGradientGrid = (items, isImage = false) => (
  <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-min">
    {items.map((item, index) => (
      <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
        <button
          className="w-full h-full rounded border border-gray-300 hover:scale-105 transition-transform overflow-hidden"
          onClick={() => Backgroundcolorchanger(item)}
        >
          {isImage ? (
            <img
              src={item}
              alt={`gradient-${index}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div 
              className="w-full h-full"
              style={{ background: item }}
            />
          )}
        </button>
      </div>
    ))}
  </div>
);
  return (
    <div className="space-y-2">
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
      <div className="min-h-screen  px-1 ">
  <div className="max-w-7xl mx-auto ">
    
    {/* Section Header */}
   

    {/* Each Section */}
    <section className="space-y-4">
    

 {/* Overlay  */}
      <div>
        <div className='flex align-center justify-between gap-4 ' >
 <h2 className={`text-[11px] basis-1/2 sm:text-sm mt-1 font-bold 
  text-gray-500`} >
          Overlay
        </h2>
        <div className={`mb-1 mr-4 basis-1/2  ${(color ? "bg-[black]":"bg-gray-100" )}    bg-gray-300 relative  rounded-[5px]`}> 
            
          <div  className={`${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs  p-1 rounded-[5px] flex items-center justify-between`}  style={{ width: `${overlayopacity/1}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2 text-gray-500'>opacity</span>
                <span className='absolute right-0 p-2 text-gray-500'>{overlayopacity}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          
            max="100"
              
            value={overlayopacity}
            onChange={(e) => setOverlayOpacity(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>
        </div>
       
       
      <div className="overflow-x-auto py-2
  [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-thumb]:bg-gray-600
  [&::-webkit-scrollbar-thumb]:rounded-full">
  <div className="grid grid-rows-2 grid-flow-col gap-3 min-w-min">
    {overlayGradients.map((item, index) => (
      <div key={index} className="w-6 h-6 sm:w-10 sm:h-10 flex-shrink-0">
        <button
          className={`w-full h-full rounded border hover:scale-105 transition-transform ${
            color ? "border-gray-400" : "border-gray-300"
          }`}
          style={{
            background: `url(${item}) center/cover no-repeat`,
          }}
          onClick={() => setOverlay(item)}
        />
      </div>
    ))}
  </div>
</div>
      </div>






  {/* Custom Upload*/}
  
 <h2 className={`text-[11px] sm:text-sm  font-bold text-gray-500`} >Custom BG</h2>
<div className='flex items-center justify-between gap-2 '>
  <label className={` ${color ? "bg-gray-500" : "bg-gray-200"}  flex items-center justify-center w-37 h-18 rounded-xl hover:bg-gray-300`}>
  <div className='flex flex-col '>
    <input
      type="color"
      value={picbackground}
      onChange={(e) => setPicBackground(e.target.value)}
      className="w-6 sm:w-8 h-6 sm:h-8  border border-gray-300 cursor-pointer"
    />
    <span className='text-xs mt-1'>Color</span>
  </div>
  </label>
  <label className={` w-37 h-18 ${color ? "bg-gray-400" : "bg-gray-200"}  flex items-center justify-center flex-col rounded-xl hover:bg-gray-300`}>
  <div className=''>
    
     <input
      type="file"
      className="hidden"
      accept="image/*"
      onChange={handleFileInput}
    />
    <Camera className={`${color ? "text-white" : "text-blue-700"} ml-1`} />
    <span className='text-xs mt-1'>Image</span>
 
    
  </div>
   </label>
  <div className={`${color ? "bg-gray-400" : "bg-gray-200"}  flex items-center justify-center flex-col w-37 h-18 rounded-xl hover:bg-gray-300`}  onClick={()=>{setPicBackground("transparent")}}>
    <div className='bg-[repeating-conic-gradient(#bbb_0_90deg,#ddd_90deg_180deg)] w-5 h-5 rounded-xl'>
    </div>
    <span className='text-xs mt-1'>Transparent</span>
  </div>
</div>



{/* {Noise} */}
            <label   className={`text-xs text-gray-500 text-[11px] sm:text-sm font-bold `} >Noise</label>
          
 <div className={`${(color ? "bg-[black]":"bg-gray-100" )} relative space-y-4 rounded-[5px] mt-1`} > 
          <div  className={`${(color ? "bg-[#303030]":"bg-[#dedede]" )}  text-xs  p-1 rounded-[5px] flex items-center justify-between`}  style={{ width: `${noisecontroller*100}%` }}>
       <div className="p-3"></div>
 <span className='absolute left-2 text-gray-500'>Noise Amount</span>
                <span className='absolute right-0 p-2 text-gray-500'>{noisecontroller*100}%</span>
       
 
        
              
            
          
          
          </div>
        
 <input
            type="range"
            min="0"
          step="0.1"
            max="1"
              
            value={noisecontroller}
            onChange={(e) => setNoiseController(Number(e.target.value))}
            className="w-full opacity-1 absolute bottom-2 h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        
           

           
  
          </div>





      {/* Magic Gradients */}
   <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Magic Gradients
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderGradientGrid(magicGradients)}
  </div>
</div>

       {/* Regular Gradients */}
    <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Rgular Gradients
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderGradientGrid(regularGradients)}
  </div>
</div>



 {/* Mesh Gradients */}
   <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Mesh Gradients
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderBackgroundGrid(meshGradients)}
  </div>
</div>




      {/* Solid Colors */}
     <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
  Solid Colors
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderGradientGrid(solidColors)}
  </div>
</div>

   
 
     




      {/* Marble Textures */}
    <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Marble Textures
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderPicturesGrid(marbleTextures, true)}
  </div>
</div>

      {/* Paper Textures */}
     <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Paper Textures
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderPicturesGrid(paperTextures, true)}
  </div>
</div> 




      {/* Patterns */}
      <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
   Patterns
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderPicturesGrid(patterns, true)}
  </div>
</div>




      {/* Patterns2 */}
      <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Patterns 2
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderPicturesGrid(patterns2, true)}
  </div>
</div>


      {/* Background Images */}
      <div className='flex flex-col'>
  <h2 className={`text-[11px] sm:text-sm mb-1 font-bold text-gray-500`}>
    Background Images
  </h2>
  <div className="overflow-x-auto py-2
    [&::-webkit-scrollbar]:h-2
    [&::-webkit-scrollbar-thumb]:bg-gray-600
    [&::-webkit-scrollbar-thumb]:rounded-full">
    {renderPicturesGrid(backgroundImages, true)}
  </div>
</div>

    

    </section>
  </div>
</div>

    </div>
  );
};


export default Background;