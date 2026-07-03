"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";
import { mapPoints } from "@/lib/site-data";

export function InteractiveMap() {
  const [active, setActive] = useState(0);
  const current = mapPoints[active];

  return (
    <div className="interactive-map" aria-label="Learning support map">
      <div className="map-board">
        <div className="map-path" aria-hidden />
        {mapPoints.map(([title, , x, y], index) => (
          <button key={title} type="button" className={active === index ? "active" : ""} style={{ left: x, top: y }} onClick={() => setActive(index)} aria-label={`Show ${title}`}>
            <MapPin aria-hidden />
          </button>
        ))}
      </div>
      <div className="map-card">
        <strong>{current[0]}</strong>
        <p>{current[1]}</p>
      </div>
    </div>
  );
}
