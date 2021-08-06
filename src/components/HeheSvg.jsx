import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function HeheSvg(props) {
  return (
    <Svg
      data-name="Capa 3"
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={108.19}
      viewBox="0 0 100 108.19"
      {...props}
    >
      <Circle cx={48.07} cy={48.07} r={48.07} fill="#895efa" />
      <Path
        d="M48.07 0a48.09 48.09 0 1048.06 48.09A48.19 48.19 0 0048.07 0zm0 89a43.89 43.89 0 1143.74-44 43.76 43.76 0 01-43.74 43.96z"
        fill="#703bf7"
      />
      <Ellipse cx={48.07} cy={9.61} rx={14.45} ry={3.58} fill="#ad85f8" />
      <Ellipse
        cx={48.07}
        cy={104.61}
        rx={38.45}
        ry={3.58}
        fill="#3a4347"
        opacity={0.15}
        style={{
          isolation: "isolate",
        }}
      />
      <Ellipse cx={76.9} cy={60.12} rx={6.03} ry={3.58} fill="#cfb1fc" />
      <Ellipse cx={19.23} cy={60.12} rx={6.03} ry={3.58} fill="#cfb1fc" />
      <Path
        d="M33.28 67.23a2.54 2.54 0 00-2.05 2 2.32 2.32 0 000 .91 17.1 17.1 0 0033.62-.34 3 3 0 00-.46-1.93 2.25 2.25 0 00-1.7-.74H37.88a15.44 15.44 0 00-4.6.1z"
        fill="#e5d4ff"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <Path
        d="M61.6 77.24a30.59 30.59 0 00-27 0 17.24 17.24 0 0027 0z"
        fill="#cfb1fc"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <Path
        d="M14.39 50.96a4.33 4.33 0 018.65 0M73.32 50.96a4.33 4.33 0 018.65 0"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <Path
        d="M100 29.42a11.18 11.18 0 11-22.35 0c0-6.26 11.17-24.59 11.17-24.59S100 23.39 100 29.42z"
        fill="#b2b2f9"
      />
      <Path
        d="M88.82 35.01a11.27 11.27 0 01-10.73-8.27 16.78 16.78 0 00-.44 2.68 11.18 11.18 0 1022.35 0 15.91 15.91 0 00-.45-2.68 11 11 0 01-10.73 8.27z"
        fill="#8b86f7"
      />
    </Svg>
  )
}

export default HeheSvg
