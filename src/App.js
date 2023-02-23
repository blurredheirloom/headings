import React, { useState, useEffect } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { loadText, handleClickScroll, toggleSame, loadPreset, changeUnits, setHeading, toggleCode, fixHeadings, fixFontSize, isFontSizeAllowed } from './utils/functions';
import { DEFAULT_REMS, DEFAULT_FONTSIZE, CUSTOM, PX, BOOTSTRAP, DEFAULT } from './utils/constants';
import Preview from './containers/Preview';
import Header from './containers/Header'
import Footer from './containers/Footer';
import CSS from './containers/Css';
import CSSButton from './components/CSSButton';
import Settings from './containers/Settings';
import Divider from './components/Divider';

function App() {
  /* React State */
  const [activeFontFamily, setActiveFontFamily] = useState({category: "sans-serif", family: "Open Sans"});
  const [value, setValue] = useState(DEFAULT_FONTSIZE);
  const [preset, setPreset] = useState(BOOTSTRAP);
  const [fontSize, setFontSize] = useState(DEFAULT_FONTSIZE);
  const [text, setText] = useState("Heading");
  const [previewText, setPreviewText] = useState(DEFAULT);
  const [allowSame, setAllowSame] = useState(false);
  const [units, setUnits] = useState([PX, PX, PX, PX, PX, PX]);
  const [showCode, setShowCode] = useState(false);
  const [headings, setHeadings] = useState(DEFAULT_REMS[0].values);
  
  /* React useEffect */
  useEffect(() => {
    if(showCode)
      handleClickScroll('css');
  },[showCode])

  useEffect(() => {
    if(isFontSizeAllowed(value))
      setFontSize(value);
    else
    {
      const delayDebounceFn = setTimeout(() => {
        fixFontSize(value, setValue, setFontSize);
      }, 1500)
      return () => clearTimeout(delayDebounceFn)
    }
  },[value])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fixHeadings(headings, setHeadings, allowSame);
    }, 1500)
    return () => clearTimeout(delayDebounceFn)
  },[headings])

  /* Render Components */
  return (
    <MDBContainer fluid className="px-4 py-4 dark">
      <Header title="HTML Headings" subtitle="Typography Calculator">
        A little visual tool<br/>to help you setting up<br/>your web project typography size
      </Header>
      <Settings
        activeFont= {activeFontFamily.family}
        onChangeFont={(nextFont) => setActiveFontFamily({category: nextFont.category, family: nextFont.family})}
        onReset={() => setValue(DEFAULT_FONTSIZE)}
        onChangeSize={(e) => setValue(e.target.value)}
        value={value}
        onCheck={() => toggleSame(!allowSame, setAllowSame, preset, setPreset, setHeadings)}
        loadPresets={(e) => loadPreset(e.target.value, setPreset, setHeadings)}
        allowSame={allowSame}
        selected={preset}
        onChangePreviewText={(e) => loadText(e.target.value, setPreviewText, setText)}
        setCustomText={(e) => setText(e.target.value)}
        customText={text}
        isCustom={previewText == CUSTOM}
        headings={headings}
        setHeading={(value, index) => setHeading(value, index, headings, setHeadings)}
        units={units}
        changeUnits={(value, index) => changeUnits(value, index, units, setUnits)}
        currentPreset={preset}
      />
      <Divider />
      <Preview title="Preview" fontSize={fontSize} headings={headings} text={text}/>
      <CSSButton onClick={() => toggleCode(!showCode, setShowCode)} showCode={showCode} />
      {showCode && <CSS fontFamily={activeFontFamily} headings={headings} fontSize={fontSize} /> }
      <Footer />
    </MDBContainer>
  );
}

export default App;
