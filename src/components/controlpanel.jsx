import React, { useContext, useState } from 'react';
import { Download, Settings, Edit3, Palette, Layout } from 'lucide-react';
import  TabButton  from './tabbutton';
import  SettingsTab  from './tabs/Settings';
import EditTab  from './tabs/EditTab';
import  BackgroundTab  from './tabs/BackgroundTab';
import  LayoutTab  from './tabs/LayoutTab';
import { userContext } from '../App';

const ControlPanel = () => {
  const {color,setColor,shadowColor,framebordervalue,setFrameBorderValue,picbackground,radius,phoneborder,setPhoneBorder,scale,rotateX,setRotateX,rotateY,setRotateY,setScale,setRadius,setPicBackground, setShadowColor,twok,setTwok,padding,setPadding,fourk,setFourk,previewUrl,picopacity,brightness,setBrightness,setPicOpacity,device,setDevice,tilt,setTilt, setPreviewUrl,size,setSize,frame,setFrame}=useContext(userContext);
  const [activeTab, setActiveTab] = useState('settings');
console.log("pick background at control page",picbackground);
   const handle2k = () => console.log("Downloading 2K...");
  const handle4k = () => console.log("Downloading 4K...");
// Define a default device (you can pick any reasonable fallback)
const defaultDevice = { name: 'Default', width: 390, height: 844, icon: '📱' };
console.log("device at control page",device);


const handleDownload = async () => {
  const currentDevice = device || defaultDevice;

  // Validation
  if (!previewUrl || !currentDevice?.width || !currentDevice?.height) {
    alert("Missing required parameters: previewUrl or device dimensions");
    return;
  }

  // Fixed dimensions for background
  const bgWidth = 450;
  const bgHeight = 500;
  
  // Device dimensions for image
  const imgWidth = currentDevice.width;
  const imgHeight = currentDevice.height;

  // Parse all values
  const paddingValue = padding ?? parseInt(frame?.style?.padding) ?? 0;
  const radiusValue = radius ?? parseInt(frame?.style?.radius ?? 0);
  const brightnessValue = brightness;
  const phonebordervalue = phoneborder;

  const opacityValue = picopacity;
  const backgroundValue = picbackground || "transparent";
  const sizeValue = size;
  const angle = tilt;
  const borderValue = frame?.style?.border || "0";
  const rotateXvalue = rotateX;
  const rotateYvalue = rotateY;

  // Parse shadow properties properly
  const shadowColorValue = shadowColor ?? frame?.style?.boxShadow ?? "transparent";
  
  console.log("Processing download with:", {
    bgWidth, bgHeight, imgWidth, imgHeight, paddingValue, radiusValue, brightnessValue,
    opacityValue, backgroundValue, sizeValue, angle, borderValue, 
    shadowColorValue, rotateXvalue, rotateYvalue, phonebordervalue
  });

  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas to background dimensions
    canvas.width = bgWidth;
    canvas.height = bgHeight;

    // Load main preview image
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = previewUrl;
    });

    console.log("Image loaded successfully, dimensions:", img.width, img.height);

    // BACKGROUND HANDLING - UPDATED FOR COMPLEX GRADIENTS
    console.log("Background value:", backgroundValue);
    
    if (backgroundValue !== "transparent") {
      // Check if background is an image URL
      const isImageUrl = backgroundValue.match(/\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i) || 
                         backgroundValue.startsWith('http://') || 
                         backgroundValue.startsWith('https://') ||
                         backgroundValue.startsWith('data:image/') ||
                         backgroundValue.startsWith('blob:');
      
      if (isImageUrl) {
        console.log("Loading image background:", backgroundValue);
        
        try {
          const bgImg = new Image();
          bgImg.crossOrigin = "anonymous";
          
          await new Promise((resolve, reject) => {
            bgImg.onload = resolve;
            bgImg.onerror = reject;
            bgImg.src = backgroundValue;
          });
          
          // Draw background image to fill entire canvas
          ctx.drawImage(bgImg, 0, 0, bgWidth, bgHeight);
          console.log("Image background applied successfully");
          
        } catch (bgError) {
          console.error("Failed to load background image, using fallback:", bgError);
          // Fallback to solid color if image fails to load
          ctx.fillStyle = '#cccccc';
          ctx.fillRect(0, 0, bgWidth, bgHeight);
        }
      }
      // Handle complex gradient backgrounds (multiple gradients)
      else if (backgroundValue.includes('gradient') && backgroundValue.includes(',')) {
        console.log("Processing complex gradient background with multiple gradients");
        
        // Split multiple gradients while preserving their internal structure
        const gradients = splitMultipleGradients(backgroundValue);
        console.log("Found gradients:", gradients.length, gradients);
        
        // Create a temporary canvas for each gradient layer
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = bgWidth;
        tempCanvas.height = bgHeight;
        const tempCtx = tempCanvas.getContext('2d');
        
        // Clear the temporary canvas first
        tempCtx.clearRect(0, 0, bgWidth, bgHeight);
        
        // Process each gradient and composite them
        for (let i = 0; i < gradients.length; i++) {
          const gradientStr = gradients[i].trim();
          console.log(`Processing gradient ${i + 1}:`, gradientStr);
          
          const gradient = parseGradient(gradientStr, tempCtx, bgWidth, bgHeight);
          if (gradient) {
            tempCtx.fillStyle = gradient;
            tempCtx.fillRect(0, 0, bgWidth, bgHeight);
          }
        }
        
        // Draw the composite gradient onto the main canvas
        ctx.drawImage(tempCanvas, 0, 0);
        console.log("Complex gradient background applied successfully");
        
      }
      // Handle single gradient backgrounds
      else if (backgroundValue.includes('gradient')) {
        console.log("Creating single gradient background");
        
        const gradient = parseGradient(backgroundValue, ctx, bgWidth, bgHeight);
        if (gradient) {
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, bgWidth, bgHeight);
          console.log("Single gradient background applied");
        } else {
          console.log("Failed to parse gradient, using fallback");
          applyFallbackGradient(ctx, bgWidth, bgHeight);
        }
      } 
      // Handle solid color backgrounds
      else if (backgroundValue.startsWith('#') || backgroundValue.startsWith('rgb') || backgroundValue.startsWith('hsl')) {
        console.log("Creating solid color background:", backgroundValue);
        ctx.fillStyle = backgroundValue;
        ctx.fillRect(0, 0, bgWidth, bgHeight);
        console.log("Solid color background applied");
      }
      // Handle named colors (gray, red, blue, etc.)
      else {
        console.log("Creating named color background:", backgroundValue);
        const hexColor = mapColorNameToHex(backgroundValue);
        ctx.fillStyle = hexColor;
        ctx.fillRect(0, 0, bgWidth, bgHeight);
        console.log(`Named color "${backgroundValue}" mapped to: ${hexColor}`);
      }
    } else {
      // CHANGED: When background is transparent, use #000000ab instead
      console.log("Using fallback background: #000000ab");
      ctx.fillStyle = '#000000ab';
      ctx.fillRect(0, 0, bgWidth, bgHeight);
    }

    // IMAGE PROCESSING CODE
    ctx.save();

    // Move to center of canvas (background center)
    const centerX = bgWidth / 2;
    const centerY = bgHeight / 2;
    ctx.translate(centerX, centerY);

    // Apply combined X, Y, Z rotation properly (approx 3D projection)
    if (rotateXvalue !== 0 || rotateYvalue !== 0 || angle !== 0) {
      const radX = (rotateXvalue * Math.PI) / 180;
      const radY = (rotateYvalue * Math.PI) / 180;
      const radZ = (angle * Math.PI) / 180;

      // Combined rotation matrix (3D → 2D projection)
      const cosX = Math.cos(radX), sinX = Math.sin(radX);
      const cosY = Math.cos(radY), sinY = Math.sin(radY);
      const cosZ = Math.cos(radZ), sinZ = Math.sin(radZ);

      // Matrix multiplication for rotation order: X → Y → Z
      const m11 = cosY * cosZ;
      const m12 = sinX * sinY * cosZ - cosX * sinZ;
      const m21 = cosY * sinZ;
      const m22 = sinX * sinY * sinZ + cosX * cosZ;

      ctx.transform(m11, m21, m12, m22, 0, 0);
    }
    
    // Handle scale value properly
    let scaleFactor;
    if (sizeValue <= 1) {
      scaleFactor = sizeValue;
    } else {
      scaleFactor = sizeValue; // Changed from sizeValue / 100
    }

    console.log("Scale calculation:", { sizeValue, scaleFactor });

    ctx.scale(scaleFactor, scaleFactor);

    // Apply filters and opacity
    ctx.filter = `brightness(${brightnessValue}%)`;
    ctx.globalAlpha = opacityValue;

    // Calculate dimensions for the image (using device dimensions)
    const availableWidth = imgWidth - (paddingValue * 2);
    const availableHeight = imgHeight - (paddingValue * 2);
    
    const drawWidth = availableWidth;
    const drawHeight = availableHeight;
    const drawX = -drawWidth / 2;
    const drawY = -drawHeight / 2;

    console.log("Drawing image with:", {
      imgWidth, imgHeight, availableWidth, availableHeight,
      drawWidth, drawHeight, drawX, drawY, 
      scaleFactor,
      finalVisibleWidth: drawWidth * scaleFactor,
      finalVisibleHeight: drawHeight * scaleFactor,
      rotateX: rotateXvalue,
      rotateY: rotateYvalue,
      angle
    });

    // Create clipping path with effective radius
    const maxPossibleRadius = Math.min(drawWidth, drawHeight) / 2;
    const effectiveRadius = Math.min(radiusValue, maxPossibleRadius);

    // Apply phone border shadow BEFORE drawing the image if phonebordervalue is true
    if (phonebordervalue) {
      console.log("Applying phone border shadow: 0 0 10px white");
      
      // Draw shadow first (as a separate path) for phone border
      ctx.save();
      ctx.fillStyle = 'black';
      
      // Set shadow properties for phone border
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Draw rounded rectangle for shadow (slightly larger than the image to account for border)
      const shadowPadding = 6; // Half of the 12px border to make shadow visible
      const shadowX = drawX - shadowPadding;
      const shadowY = drawY - shadowPadding;
      const shadowWidth = drawWidth + (shadowPadding * 2);
      const shadowHeight = drawHeight + (shadowPadding * 2);
      const shadowRadius = effectiveRadius > 0 ? effectiveRadius + shadowPadding : 0;
      
      if (effectiveRadius > 0) {
        ctx.beginPath();
        ctx.moveTo(shadowX + shadowRadius, shadowY);
        ctx.lineTo(shadowX + shadowWidth - shadowRadius, shadowY);
        ctx.arcTo(shadowX + shadowWidth, shadowY, shadowX + shadowWidth, shadowY + shadowRadius, shadowRadius);
        ctx.lineTo(shadowX + shadowWidth, shadowY + shadowHeight - shadowRadius);
        ctx.arcTo(shadowX + shadowWidth, shadowY + shadowHeight, shadowX + shadowWidth - shadowRadius, shadowY + shadowHeight, shadowRadius);
        ctx.lineTo(shadowX + shadowRadius, shadowY + shadowHeight);
        ctx.arcTo(shadowX, shadowY + shadowHeight, shadowX, shadowY + shadowHeight - shadowRadius, shadowRadius);
        ctx.lineTo(shadowX, shadowY + shadowRadius);
        ctx.arcTo(shadowX, shadowY, shadowX + shadowRadius, shadowY, shadowRadius);
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.rect(shadowX, shadowY, shadowWidth, shadowHeight);
      }
      ctx.fill();
      ctx.restore();
      
      // Reset shadow for the actual image
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }

    // Apply regular shadow (if not phone border)
    else if (shadowColorValue && shadowColorValue !== "transparent") {
      // Extract shadow color from the string or use directly
      let shadowColorToUse = shadowColorValue;
      
      // If it's a complex shadow string like "0 10px 20px rgba(0,0,0,0.5)", extract just the color part
      if (shadowColorValue.includes('rgba') || shadowColorValue.includes('#')) {
        const parts = shadowColorValue.split(' ');
        shadowColorToUse = parts[parts.length - 1];
      }
      
      // Draw shadow first (as a separate path) for regular shadow
      ctx.save();
      ctx.fillStyle = 'black';
      
      // Set shadow properties
      ctx.shadowColor = shadowColorToUse;
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 10;
      
      // Draw rounded rectangle for shadow
      if (effectiveRadius > 0) {
        ctx.beginPath();
        ctx.moveTo(drawX + effectiveRadius, drawY);
        ctx.lineTo(drawX + drawWidth - effectiveRadius, drawY);
        ctx.arcTo(drawX + drawWidth, drawY, drawX + drawWidth, drawY + effectiveRadius, effectiveRadius);
        ctx.lineTo(drawX + drawWidth, drawY + drawHeight - effectiveRadius);
        ctx.arcTo(drawX + drawWidth, drawY + drawHeight, drawX + drawWidth - effectiveRadius, drawY + drawHeight, effectiveRadius);
        ctx.lineTo(drawX + effectiveRadius, drawY + drawHeight);
        ctx.arcTo(drawX, drawY + drawHeight, drawX, drawY + drawHeight - effectiveRadius, effectiveRadius);
        ctx.lineTo(drawX, drawY + effectiveRadius);
        ctx.arcTo(drawX, drawY, drawX + effectiveRadius, drawY, effectiveRadius);
        ctx.closePath();
      } else {
        ctx.beginPath();
        ctx.rect(drawX, drawY, drawWidth, drawHeight);
      }
      ctx.fill();
      ctx.restore();
      
      // Reset shadow for the actual image
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }

    // Create clipping path for the image
    if (effectiveRadius > 0) {
      ctx.beginPath();
      ctx.moveTo(drawX + effectiveRadius, drawY);
      ctx.lineTo(drawX + drawWidth - effectiveRadius, drawY);
      ctx.arcTo(drawX + drawWidth, drawY, drawX + drawWidth, drawY + effectiveRadius, effectiveRadius);
      ctx.lineTo(drawX + drawWidth, drawY + drawHeight - effectiveRadius);
      ctx.arcTo(drawX + drawWidth, drawY + drawHeight, drawX + drawWidth - effectiveRadius, drawY + drawHeight, effectiveRadius);
      ctx.lineTo(drawX + effectiveRadius, drawY + drawHeight);
      ctx.arcTo(drawX, drawY + drawHeight, drawX, drawY + drawHeight - effectiveRadius, effectiveRadius);
      ctx.lineTo(drawX, drawY + effectiveRadius);
      ctx.arcTo(drawX, drawY, drawX + effectiveRadius, drawY, effectiveRadius);
      ctx.closePath();
      ctx.clip();
    }

    // Draw the image
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    console.log("Image drawn on canvas");

    // BORDER HANDLING - MUTUALLY EXCLUSIVE
    let hasBorder = false;

    // Apply phone border if phonebordervalue is true
    if (phonebordervalue) {
      console.log("Applying phone border: 12px solid #080808ff");
      ctx.strokeStyle = '#080808ff';
      ctx.lineWidth = 12;
      hasBorder = true;
      
      // Calculate border dimensions (same as image dimensions)
      const borderX = drawX;
      const borderY = drawY;
      const borderWidthDim = drawWidth;
      const borderHeightDim = drawHeight;
      
      if (effectiveRadius > 0) {
        ctx.beginPath();
        ctx.moveTo(borderX + effectiveRadius, borderY);
        ctx.lineTo(borderX + borderWidthDim - effectiveRadius, borderY);
        ctx.arcTo(borderX + borderWidthDim, borderY, borderX + borderWidthDim, borderY + effectiveRadius, effectiveRadius);
        ctx.lineTo(borderX + borderWidthDim, borderY + borderHeightDim - effectiveRadius);
        ctx.arcTo(borderX + borderWidthDim, borderY + borderHeightDim, borderX + borderWidthDim - effectiveRadius, borderY + borderHeightDim, effectiveRadius);
        ctx.lineTo(borderX + effectiveRadius, borderY + borderHeightDim);
        ctx.arcTo(borderX, borderY + borderHeightDim, borderX, borderY + borderHeightDim - effectiveRadius, effectiveRadius);
        ctx.lineTo(borderX, borderY + effectiveRadius);
        ctx.arcTo(borderX, borderY, borderX + effectiveRadius, borderY, effectiveRadius);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.strokeRect(borderX, borderY, borderWidthDim, borderHeightDim);
      }
      
      console.log("Phone border with shadow applied");
      
      // ADD CAMERA PORTION AT THE TOP
      console.log("Adding camera portion at the top");
      ctx.save();
      
      // Position camera portion at the top center of the phone border
      const cameraWidth = drawWidth * 0.4; // 40% of image width
      const cameraHeight = 20 * scaleFactor;
      const cameraX = -cameraWidth / 2;
      const cameraY = drawY - (cameraHeight / 2);
      
      // Draw camera body
      ctx.fillStyle = '#000';
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1 * scaleFactor;
      
      // Camera body with rounded bottom corners
      ctx.beginPath();
      ctx.moveTo(cameraX, cameraY);
      ctx.lineTo(cameraX + cameraWidth, cameraY);
      ctx.lineTo(cameraX + cameraWidth, cameraY + cameraHeight - (8 * scaleFactor));
      ctx.arcTo(cameraX + cameraWidth, cameraY + cameraHeight, cameraX + cameraWidth - (8 * scaleFactor), cameraY + cameraHeight, 8 * scaleFactor);
      ctx.lineTo(cameraX + (8 * scaleFactor), cameraY + cameraHeight);
      ctx.arcTo(cameraX, cameraY + cameraHeight, cameraX, cameraY + cameraHeight - (8 * scaleFactor), 8 * scaleFactor);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Draw camera lens
      const lensSize = 8 * scaleFactor;
      const lensX = cameraX + cameraWidth / 2 - lensSize / 2;
      const lensY = cameraY + cameraHeight / 2 - lensSize / 2;
      
      ctx.fillStyle = '#333';
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 1 * scaleFactor;
      
      ctx.beginPath();
      ctx.arc(cameraX + cameraWidth / 2, cameraY + cameraHeight / 2, lensSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.restore();
    }
    // Apply regular border ONLY if phone border is NOT active and borderValue exists
    else if (borderValue && borderValue !== "0") {
      const borderParts = borderValue.split(' ');
      const borderWidth = parseInt(borderParts[0]) || 1;
      const borderColor = borderParts[2] || "#000000";
      
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      hasBorder = true;
      
      // Calculate border dimensions
      const borderX = drawX;
      const borderY = drawY;
      const borderWidthDim = drawWidth;
      const borderHeightDim = drawHeight;
      
      if (effectiveRadius > 0) {
        ctx.beginPath();
        ctx.moveTo(borderX + effectiveRadius, borderY);
        ctx.lineTo(borderX + borderWidthDim - effectiveRadius, borderY);
        ctx.arcTo(borderX + borderWidthDim, borderY, borderX + borderWidthDim, borderY + effectiveRadius, effectiveRadius);
        ctx.lineTo(borderX + borderWidthDim, borderY + borderHeightDim - effectiveRadius);
        ctx.arcTo(borderX + borderWidthDim, borderY + borderHeightDim, borderX + borderWidthDim - effectiveRadius, borderY + borderHeightDim, effectiveRadius);
        ctx.lineTo(borderX + effectiveRadius, borderY + borderHeightDim);
        ctx.arcTo(borderX, borderY + borderHeightDim, borderX, borderY + drawHeight - effectiveRadius, effectiveRadius);
        ctx.lineTo(borderX, borderY + effectiveRadius);
        ctx.arcTo(borderX, borderY, borderX + effectiveRadius, borderY, effectiveRadius);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.strokeRect(borderX, borderY, borderWidthDim, borderHeightDim);
      }
      
      console.log("Regular border applied with scaling:", {
        borderX, borderY, borderWidthDim, borderHeightDim,
        borderWidth, borderColor
      });
    }

    // If no border is applied, log it for clarity
    if (!hasBorder) {
      console.log("No border applied - both phone border and regular border are disabled");
    }

    ctx.restore();

    // Convert to blob and trigger download
    canvas.toBlob((blob) => {
      if (!blob) {
        alert("Failed to create image");
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `styled-image-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png', 1.0);

  } catch (error) {
    console.error("Error generating download:", error);
    alert("Failed to generate image download");
  }
};
// Helper function to split multiple gradients while preserving internal structure
function splitMultipleGradients(gradientString) {
  const gradients = [];
  let currentGradient = '';
  let parenDepth = 0;
  
  for (let i = 0; i < gradientString.length; i++) {
    const char = gradientString[i];
    
    if (char === '(') {
      parenDepth++;
      currentGradient += char;
    } else if (char === ')') {
      parenDepth--;
      currentGradient += char;
    } else if (char === ',' && parenDepth === 0) {
      // This comma separates gradients, not color stops within a gradient
      if (currentGradient.trim()) {
        gradients.push(currentGradient.trim());
      }
      currentGradient = '';
    } else {
      currentGradient += char;
    }
  }
  
  // Add the last gradient
  if (currentGradient.trim()) {
    gradients.push(currentGradient.trim());
  }
  
  return gradients;
}

// Helper function to parse individual gradient
function parseGradient(gradientString, ctx, width, height) {
  const gradientMatch = gradientString.match(/(linear-gradient|radial-gradient)\((.*)\)/);
  
  if (!gradientMatch || !gradientMatch[2]) {
    console.log("Invalid gradient format:", gradientString);
    return null;
  }
  
  const gradientType = gradientMatch[1];
  const gradientContent = gradientMatch[2];
  
  console.log("Parsing gradient:", { gradientType, gradientContent });
  
  let gradient;
  
  if (gradientType === 'linear-gradient') {
    // Parse linear gradient
    gradient = parseLinearGradient(gradientContent, ctx, width, height);
  } else {
    // Parse radial gradient
    gradient = parseRadialGradient(gradientContent, ctx, width, height);
  }
  
  return gradient;
}

// Helper function to parse linear gradient
function parseLinearGradient(content, ctx, width, height) {
  // Extract angle if present
  const angleMatch = content.match(/(\d+)deg/);
  const gradientAngle = angleMatch ? parseInt(angleMatch[1]) : 0;
  
  console.log("Linear gradient angle:", gradientAngle);
  
  // Convert angle to coordinates
  const rad = (gradientAngle - 90) * Math.PI / 180;
  const x1 = width / 2 + Math.cos(rad) * (width / 2);
  const y1 = height / 2 + Math.sin(rad) * (height / 2);
  const x2 = width / 2 - Math.cos(rad) * (width / 2);
  const y2 = height / 2 - Math.sin(rad) * (height / 2);
  
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  
  // Parse color stops
  const stops = parseColorStops(content.replace(/\d+deg\s*,?\s*/, ''));
  applyColorStops(gradient, stops);
  
  return gradient;
}

// Helper function to parse radial gradient
function parseRadialGradient(content, ctx, width, height) {
  // Parse radial gradient position and size
  const positionMatch = content.match(/at\s+(\d+)%\s+(\d+)%/);
  
  let centerX = width / 2;
  let centerY = height / 2;
  let radius = Math.max(width, height) / 2;
  
  if (positionMatch) {
    centerX = (parseInt(positionMatch[1]) / 100) * width;
    centerY = (parseInt(positionMatch[2]) / 100) * height;
    
    // Remove the position part for color stop parsing
    content = content.replace(/at\s+\d+%\s+\d+%\s*,?\s*/, '').trim();
    
    // If there's a leading comma after removing position, remove it
    if (content.startsWith(',')) {
      content = content.substring(1).trim();
    }
  }
  
  console.log("Radial gradient center:", { centerX, centerY, radius });
  console.log("Content after position removal:", content);
  
  const gradient = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, radius
  );
  
  // Parse color stops
  const stops = parseColorStops(content);
  applyColorStops(gradient, stops);
  
  return gradient;
}

// Helper function to parse color stops with accurate position detection
function parseColorStops(stopsString) {
  const stops = [];
  
  // Split by commas but handle rgba/hsla colors with internal commas
  const parts = [];
  let currentPart = '';
  let parenCount = 0;
  
  for (let i = 0; i < stopsString.length; i++) {
    const char = stopsString[i];
    
    if (char === '(') {
      parenCount++;
      currentPart += char;
    } else if (char === ')') {
      parenCount--;
      currentPart += char;
    } else if (char === ',' && parenCount === 0) {
      if (currentPart.trim()) {
        parts.push(currentPart.trim());
      }
      currentPart = '';
    } else {
      currentPart += char;
    }
  }
  
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  
  console.log("Parsed color stop parts:", parts);
  
  // Process each part to extract color and position
  parts.forEach(part => {
    if (!part.trim()) return;
    
    const stop = parseColorStop(part.trim());
    if (stop) {
      stops.push(stop);
    }
  });
  
  console.log("Final color stops:", stops);
  return stops;
}

// Helper function to parse individual color stop
function parseColorStop(part) {
  if (!part.trim()) return null;
  
  // Handle transparent keyword
  if (part === 'transparent') {
    return { color: 'transparent' };
  }
  
  // Match color with percentage: "rgba(255, 94, 77, 0.85) 50%" or "transparent 50%"
  const withPercentage = part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)(%)?/i);
  
  if (withPercentage) {
    const color = withPercentage[1];
    let position = parseInt(withPercentage[2]);
    
    // Convert to decimal if percentage
    if (withPercentage[3] === '%') {
      position = position / 100;
    } else if (position > 1) {
      // Assume it's a pixel value, convert to relative position
      position = position / 1000; // Rough approximation
    }
    
    return { color, position };
  } 
  // Match color with pixel position: "rgb(255, 0, 0) 0px" or "transparent 0px"
  else if (part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)px/i)) {
    const pixelMatch = part.match(/((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none)\s+(\d+)px/i);
    const color = pixelMatch[1];
    const pixels = parseInt(pixelMatch[2]);
    
    // Convert pixels to relative position (rough approximation)
    const position = pixels / 1000;
    
    return { color, position };
  }
  // Match just color (will be distributed evenly)
  else if (part.match(/^(?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|transparent|none$/i)) {
    return { color: part };
  }
  
  console.warn("Could not parse color stop:", part);
  return null;
}

// Helper function to apply color stops to gradient - FIXED VERSION
function applyColorStops(gradient, stops) {
  if (stops.length === 0) return;
  
  // If we have stops with explicit positions, add them in original order
  const hasExplicitPositions = stops.some(stop => stop.position !== undefined);
  
  if (hasExplicitPositions) {
    // Add color stops in original order without sorting
    stops.forEach(stop => {
      if (stop.position !== undefined) {
        gradient.addColorStop(stop.position, stop.color);
      } else {
        // For colors without explicit position, find a reasonable position
        const index = stops.indexOf(stop);
        const position = index / (stops.length - 1);
        gradient.addColorStop(position, stop.color);
      }
    });
  } else {
    // Distribute colors evenly while preserving original order
    stops.forEach((stop, index) => {
      const position = index / (stops.length - 1);
      gradient.addColorStop(position, stop.color);
    });
  }
}

// Helper function for fallback gradient
function applyFallbackGradient(ctx, width, height) {
  const fallbackGradient = ctx.createLinearGradient(0, 0, width, height);
  fallbackGradient.addColorStop(0, '#f093fb');
  fallbackGradient.addColorStop(1, '#f5576c');
  ctx.fillStyle = fallbackGradient;
  ctx.fillRect(0, 0, width, height);
}

// Helper function to map color names to hex values
function mapColorNameToHex(colorName) {
  const colorMap = {
    'gray': '#808080',
    'grey': '#808080',
    'red': '#ff0000',
    'blue': '#0000ff',
    'green': '#008000',
    'yellow': '#ffff00',
    'orange': '#ffa500',
    'purple': '#800080',
    'pink': '#ffc0cb',
    'brown': '#a52a2a',
    'black': '#000000',
    'white': '#ffffff',
    'lightgray': '#d3d3d3',
    'lightgrey': '#d3d3d3',
    'darkgray': '#a9a9a9',
    'darkgrey': '#a9a9a9'
  };
  
  const normalizedColor = colorName.toLowerCase().trim();
  return colorMap[normalizedColor] || '#cccccc';
}




































  const tabs = [
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
    { id: 'edit', label: 'Edit', icon: <Edit3 className="w-4 h-4" /> },
    { id: 'background', label: 'Background', icon: <Palette className="w-4 h-4" /> },
    { id: 'layout', label: 'Layout', icon: <Layout className="w-4 h-4" /> },
  ];
console.log("color on control panel",color)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'settings':
        return (
          <SettingsTab/>
        );
      case 'edit':
        return (
          <EditTab/>
        );
      case 'background':
        return (
          <BackgroundTab/>
        );
      case 'layout':
        return (
          <LayoutTab/>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-80   dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-200`}
>
      {/* Header */}
      <div className={`flex  transition-all duration-300 ease-in-out  ${color ? "bg-gray-900" : "bg-white"} items-center space-x-2 p-6 pb-4 border-b border-gray-100 dark:border-gray-700`}>
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">M</span>
        </div>
        <h1 className={`text-sm  transition-all duration-300 ease-in-out  font-bold ${color ? "text-white" : "text-gray-900"} ">Mockup Studio</h1`}>Mockup Studio</h1>
      </div>

      {/* Tab Navigation */}
      <div className={`px-4 py-3  border-b  transition-all duration-300 ease-in-out  ${color ? "bg-gray-900" : "bg-white"}  `}>
        <div className="flex  space-x-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={(id) => setActiveTab(id)}
            />
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={`flex-1  transition-all duration-300 ease-in-out  ${color ? "bg-gray-900" : "bg-white"} overflow-y-auto p-6`}>
        {renderTabContent()}
      </div>

      {/* Export Button */}
      <div className={`p-6 pt-4 border-t  transition-all duration-300 ease-in-out  ${color ? "bg-gray-700" : "border-white"}   `}>
      
                
   <button
          onClick={handleDownload}
          className="w-full text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
        >
  
          <Download className="w-4 h-4"  />
          <span className='font-xs'>Export Mockup</span>
        </button>

      </div>
    </div>
  );
};
 

export default ControlPanel;