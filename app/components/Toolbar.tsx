"use client"
import {
  faArrowsAltH,
  faEraser,
  faMagic,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrushPreview } from "./BrushPreview";
import styles from './styles.css'
export const Toolbar: React.FC<any> = ({
  currentWidth,
  currentColor,
  handleDownload,
  dateUrl,
  handleClear,
  handleSpecialMode,
  handleEraserMode,
  setAutoWidth,
  handleRegularMode,
  handleColor,
  handleWidth,
  setCurrentSaturation,
  setCurrentLightness,
  isRegularMode,
  isAutoWidth,
  isEraser,
}) => {
  return (
    
    <aside className="bg-white m-1 p-1 flex justify-center rounded-md border mt-2">
     
   <div className="mt-4">
        <BrushPreview currentWidth={currentWidth} currentColor={currentColor} />
        <div className={styles.toolsection}>
          <div className={styles.toolsection}>
            <small>
              <strong>Brush color</strong>
            </small>
          </div>
          <input
            disabled={!isRegularMode}
            className="btn--color"
            type="color"
            id="toolColorPicker"
            onChange={handleColor}
          />
        </div>
        <div className={styles.toolsection}>
          <small>
            <strong>Tools</strong>
          </small>
        </div>
        <div className= "tool-grid tool-section tool-section--lrg">
          <div>
            <button
              className={`btn btn--tool ${
                isRegularMode && !isEraser ? "btn--active" : ""
              }`}
              onClick={handleRegularMode}
            >
              <FontAwesomeIcon icon={faPaintBrush} />
            </button>
          </div>
          <div>
            <button
              className={`btn btn--tool ${
                !isRegularMode ? "btn--dream-active" : ""
              }`}
              onClick={handleSpecialMode}
            >
              <FontAwesomeIcon icon={faMagic} />
            </button>
          </div>
          <div>
            <button
              className={`btn btn--tool ${
                isEraser ? "btn--eraser-active" : ""
              }`}
              onClick={handleEraserMode}
            >
              <FontAwesomeIcon icon={faEraser} />
            </button>
          </div>
          <div>
            <input
              disabled={isEraser}
              checked={isAutoWidth}
              id="tool-autowidth"
              type="checkbox"
              onChange={setAutoWidth}
              title="Dynamic brush size"
            />{" "}
            <label
              htmlFor="tool-autowidth"
              className={`btn btn--tool ${
                isAutoWidth ? "btn--width-active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faArrowsAltH} />
            </label>
          </div>
        </div>
        {!isAutoWidth && (
          <div className="tool-section tool-section--lrg">
            <div className="tool-section">
              <small>
                <strong>Brush size</strong>
              </small>
            </div>
            <div className="tool-section">
              <input
                defaultValue="50"
                type="range"
                min="10"
                max="90"
                onChange={handleWidth}
              />
            </div>
          </div>
        )}
        {!isRegularMode && (
          <div className="tool-section tool-section--lrg">
            <div className="tool-section">
              <small>
                <strong>Magic brush</strong>
              </small>
            </div>
            <div className="tool-section">
              <label>
                <small>Saturation</small>
              </label>
              <input
                defaultValue="100"
                type="range"
                min="0"
                max="100"
                onChange={setCurrentSaturation}
              />
            </div>
            <label>
              <small>Lightness</small>
            </label>
            <input
              defaultValue="50"
              type="range"
              min="0"
              max="100"
              onChange={setCurrentLightness}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-evenly items-center ">
        <a
          className="rounded bg-green-500 
          "
          download="image.png"
          onClick={handleDownload}
          href={dateUrl}
        >
          Save Image
        </a>
        <button  className="rounded bg-green-500 px-7 mt-4" onClick={handleClear}>
          Clear
        </button>
      </div>
    </aside>
  );
};
