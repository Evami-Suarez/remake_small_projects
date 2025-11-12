import { useState, useEffect } from "react";

const RandomColors = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    typeOfColor === "hex"
      ? handleCreateRandomHexColor()
      : handleCreateRandomRgbColor();
  }, [typeOfColor]);

  const createRandomNumbers = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomNumbers(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = createRandomNumbers(256);
    const g = createRandomNumbers(256);
    const b = createRandomNumbers(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  console.log(typeOfColor, color);
  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          color: "#ffff",
        }}
      >
        <h2>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColors;
