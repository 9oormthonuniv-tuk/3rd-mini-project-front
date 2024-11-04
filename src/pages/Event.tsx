import { useState } from "react";

interface OverlayPreops {
  x: number;
  y: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  dragging: boolean;
}

const Event = () => {
  const [array, setArray] = useState(() => Array.from({ length: 8 }, () => Array(3).fill(false)));
  const [overlay, setOverlay] = useState<OverlayPreops | null>(null);

  const handleMouseDown = (row: number, col: number) => {
    setOverlay((prev) => ({
      ...prev,
      x: 125 * col + 2 * col,
      y: 25 * row + 2 * row,
      startX: col,
      startY: row,
      endX: col,
      endY: row,
      dragging: true,
    }));
  };

  const handleMouseUp = (row: number, col: number) => {
    const state = !array[row][col];
    const minY = Math.min(overlay!.startY, overlay!.endY);
    const maxY = Math.max(overlay!.startY, overlay!.endY);
    const minX = Math.min(overlay!.startX, overlay!.endX);
    const maxX = Math.max(overlay!.startX, overlay!.endX);
    const newArr = array.map((item, i) => {
      if (i >= minY && i <= maxY) {
        return item.map((_, j) => {
          if (j >= minX && j <= maxX) {
            return state;
          }
          return item[j];
        });
      }
      return item;
    });
    setOverlay(null);
    setArray(newArr);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      {array.map((item, row) => (
        <div style={{ display: "flex" }} key={row}>
          {item.map((b, col) => (
            <div
              onMouseOver={() => {
                if (overlay?.dragging) {
                  setOverlay((prev) => ({
                    ...(prev as OverlayPreops),
                    endX: col,
                    endY: row,
                  }));
                }
              }}
              onMouseDown={() => handleMouseDown(row, col)}
              onMouseUp={() => handleMouseUp(row, col)}
              key={`${row} ${col}`}
              style={{
                backgroundColor: b ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)",
                border: "1px solid black",
                width: "125px",
                height: "25px",
                position: "relative",
              }}
            ></div>
          ))}
        </div>
      ))}
      {overlay && (
        <div
          style={{
            position: "absolute",
            top: Math.min(overlay.startY, overlay.endY) * 27,
            left: Math.min(overlay.startX, overlay.endX) * 127, // Adjusted x based on startX and endX
            width: `${125 * (Math.abs(overlay.startX - overlay.endX) + 1) + Math.abs(overlay.startX - overlay.endX) * 2}px`,
            height: `${25 * (Math.abs(overlay.startY - overlay.endY) + 1) + Math.abs(overlay.startY - overlay.endY) * 2}px`,
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            border: "1px solid rgba(255, 0, 0, 0.5)",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default Event;
