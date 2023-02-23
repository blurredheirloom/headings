/* Functions */

import { DEFAULT, FOX, LOREM, CUSTOM, PERC, PT, PX, DEFAULT_REMS, BOOTSTRAP, TRIANGULAR, MIN_HEADER_SIZE, MAX_HEADER_SIZE, MIN_SIZE, MAX_SIZE, STEP } from "./constants";


/* Unit conversion (PX, PT, Percentage) */
const getUnitVal = (value, unit, heading) => {
    switch(unit)
    {
      case PX:
      return value * heading;
      case PT:
      return parseFloat(value * .75 * heading).toFixed(2);
      case PERC:
      return heading * 100;
    }
}

/* Change Single Heading Unit */
const changeUnits = (unit, index, units, setUnits) => {
  let arr = [...units];
  arr[index] = unit; 
  setUnits(arr);
}

/* Load text preview preset */
const loadText = (x, setPreviewText, setText) => {
  setPreviewText(x);
  switch(x)
  {
    case DEFAULT:
      setText("Heading");
    break;
    case FOX:
      setText("The quick brown fox jumps over the lazy dog");
    break;
    case LOREM:
      setText("Lorem ipsum dolor sit amet");
    break;
    case CUSTOM:
      setText("");
    break;
  }
}

/* Allow headings same size*/
const toggleSame = (x, setAllowSame, currentPreset, setPreset, setHeadings) => {
  setAllowSame(x);
  if(!x)
  {
    if(currentPreset==TRIANGULAR)
      loadPreset(BOOTSTRAP, setPreset, setHeadings);
    else
      loadPreset(currentPreset, setPreset, setHeadings);
  }
}

/* Set Headings size */
const setHeading = (x, h, headings, setHeadings) => {
  let arr = [...headings];
  arr[h] = x;
  setHeadings(arr);
}

/* Load Headings size preset */
const loadPreset = (x, setPreset, setHeadings) => {
  setPreset(x);
  setHeadings(found(DEFAULT_REMS, x).values);
}

/* Contraints headings value between min and max */
const getNormalized = (x, min, max) => {
  return Math.min(Math.max(x, min), max);
}

/* Fixes headings values */
const fixHeadings = (headings, setHeadings, allowSame) => {
  let arr = [...headings];
  for(let i=0; i<headings.length; i++)
  {
    if(i!=5 && i!=0 && !allowSame)
      arr[i] = getNormalized(arr[i], (parseFloat(arr[i+1])+STEP).toFixed(2), MAX_HEADER_SIZE);
    else if(i==0 && !allowSame)
      arr[i] = getNormalized(arr[i], MIN_HEADER_SIZE+1+STEP, MAX_HEADER_SIZE);
    else
      arr[i] = getNormalized(arr[i], MIN_HEADER_SIZE, MAX_HEADER_SIZE);
    if(arr[i]>=arr[i-1] && i>0)
    {
      arr[i] = arr[i-1] - (allowSame ? 0 : STEP); 
    }
    arr[i] = getNormalized(arr[i], MIN_HEADER_SIZE, MAX_HEADER_SIZE);
    setHeadings(arr);
  }
}

/* Check if fontSize between min and max */
const isFontSizeAllowed = (value) => {
  return value>=MIN_SIZE && value<=MAX_SIZE;
}

/* Fixes global font-size */
const fixFontSize = (value, setValue, setFontSize) => {
  let fixed = getNormalized(value, MIN_SIZE, MAX_SIZE);
  setValue(fixed);
  setFontSize(fixed);    
}

/* Find item in array */
const found = (arr, x) => {
  return arr.find(obj => {
    return obj.label === x;
  })
}

/* Scroll on click */
const handleClickScroll = (div) => {
  const element = document.getElementById(div);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Show CSS Code*/
const toggleCode = (x, setShowCode) => {
  setShowCode(x);
  if(!x)
    handleClickScroll('preview');
}


export { getUnitVal, changeUnits, loadText, getNormalized, handleClickScroll, toggleSame, loadPreset, setHeading, toggleCode, fixHeadings, fixFontSize, isFontSizeAllowed, found }