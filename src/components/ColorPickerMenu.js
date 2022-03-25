import { useRef, useState } from "react";
import styled from "styled-components";

// import { cloneDeep } from "lodash";

import ColorPickerMenu from "color-picker-menu";

const PickerButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.bgColor || "pink"};
  cursor: pointer;
`;
export default function App() {
  const [colorsList, setColorsList] = useState([
    "#FF6666",
    "#ffd166",
    "#66FF7D",
    "#66F6FF",
    "#A366FF",
    "#FF66D9",
  ]);

  const [colorPickerMenuState, setColorPickerMenuState] = useState({
    selectedColor: "#ffb703",
    displayColorPickerMenu: false,
  });

  const colorPickerButtonRef = useRef(null);

  const handleColorChange = (color) => {
    setColorPickerMenuState({
      ...colorPickerMenuState,
      selectedColor: color.hex,
    });
  };

  const toggleColorPickerMenu = () => {
    setColorPickerMenuState({
      ...colorPickerMenuState,
      displayColorPickerMenu: !colorPickerMenuState.displayColorPickerMenu,
    });
  };

  const hideColorPickerMenu = () => {
    setColorPickerMenuState({
      ...colorPickerMenuState,
      displayColorPickerMenu: false,
    });
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PickerButton
          bgColor={colorPickerMenuState.selectedColor}
          onClick={toggleColorPickerMenu}
          ref={colorPickerButtonRef}
        />
      </div>
      {colorPickerMenuState.displayColorPickerMenu && (
        <ColorPickerMenu
          ref={colorPickerButtonRef}
          theme="dark"
          colors={colorsList}
          selected={colorPickerMenuState.selectedColor}
          // removeColor="transparent"
          // enableAddNew={false}
          // defaultFormat="hex"
          // allowedFormats={['hex', 'rgb', 'hsl']}
          // itemsPerRow={6}
          onChange={handleColorChange}
          onHide={hideColorPickerMenu}
        />
      )}
    </div>
  );
}
