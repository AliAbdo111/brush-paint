"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/styles.css';
import useJscolor from './../hookes/useJscolor'
const TopBar = () => {
  const colorInputRef = useRef();
  useEffect(() => {
    // Make sure to run the script on client-side when the component mounts
    useJscolor(colorInputRef.current?.id);
  }, []);

  const [activeTool, setActiveTool] = useState('Brush');
  const [brushColor, setBrushColor] = useState('000000');
  const [brushSize, setBrushSize] = useState(10);
  const [bucketColor, setBucketColor] = useState('ffffff');

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  const handleBrushColorChange = (color) => {
    setBrushColor(color);
  };

  const handleBrushSizeChange = (size) => {
    setBrushSize(Number(size));
  };

  const handleBucketColorChange = (color) => {
    setBucketColor(color.target.value);
  };
  useJscolor(colorInputRef.current?.id);
  return (
    <div className="top-bar">
      {/* Active Tool */}
      <div className="active-tool">
        <span id="active-tool" title="Active Tool">
          Brush
        </span>
      </div>
      {/* Brush */}
      <div className="brush tool">
        <i className="fas fa-brush" id="brush" title="Brush"></i>
        <input
          value="000000"
          ref={colorInputRef}
          id="colorPicker"
          data-jscolor="{
            preset: 'dark',
            closeButton: true,
            closeText: 'OK'
          }"
          className="jscolor"
          // id="brush-color"
        />
        <span className="size" id="brush-size" title="Brush Size">
          10
        </span>
        <input
          type="range"
          min="1"
          max="50"
          value="10"
          className="slider"
          id="brush-slider"
        />
      </div>
      {/* Bucket */}
      <div className="bucket tool">
        <i className="fas fa-fill-drip" title="Background Color"></i>
        <input
          value="ffffff"
          data-jscolor="{
            preset: 'dark',
            closeButton: true,
            closeText: 'OK'
          }"
          onChange={(e)=>handleBucketColorChange(e)}
          className="jscolor"
          id="bucket-color"
        />
      </div>
      {/* Eraser */}
      <div className="tool">
        <i className="fas fa-eraser" id="eraser" title="Eraser"></i>
      </div>
      {/* Clear Canvas */}
      <div className="tool">
        <i className="fas fa-undo-alt" id="clear-canvas" title="Clear"></i>
      </div>
      {/* Save Local Storage */}
      <div className="tool">
        <i
          className="fas fa-download"
          id="save-storage"
          title="Save Local Storage"
        ></i>
      </div>
      {/* Load Local Storage */}
      <div className="tool">
        <i
          className="fas fa-upload"
          id="load-storage"
          title="Load Local Storage"
        ></i>
      </div>
      {/* Clear Local Storage */}
      <div className="tool">
        <i
          className="fas fa-trash-alt"
          id="clear-storage"
          title="Clear Local Storage"
        ></i>
      </div>
      {/* Download Image */}
      <div className="tool">
        <a id="download">
          <i className="far fa-save" title="Save Image File"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
