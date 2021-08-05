import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function SurprisedSvg(props) {
  return (
    <Svg
      data-name="Capa 3"
      xmlns="http://www.w3.org/2000/svg"
      width={169.1}
      height={195.31}
      viewBox="0 0 169.1 195.31"
      {...props}
    >
      <Circle cx={84.55} cy={84.55} r={84.55} fill="#895efa" />
      <Path
        d="M84.55 0a84.55 84.55 0 1084.55 84.54A84.79 84.79 0 0084.55 0zm0 156.41a77.15 77.15 0 1176.94-77.36c0 43.12-34.24 77.36-76.94 77.36z"
        fill="#703bf7"
      />
      <Ellipse cx={84.55} cy={16.91} rx={25.36} ry={6.34} fill="#ad85f8" />
      <Ellipse
        cx={84.55}
        cy={188.97}
        rx={67.64}
        ry={6.34}
        fill="#3a374a"
        opacity={0.15}
        style={{
          isolation: "isolate",
        }}
      />
      <Circle
        cx={46.5}
        cy={78.21}
        r={14.8}
        fill="#fff"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Circle
        cx={122.6}
        cy={78.21}
        r={14.8}
        fill="#fff"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Ellipse cx={137.39} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Ellipse cx={35.93} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Path
        d="M65.55 124.71h42.27M30.44 46.5a20.18 20.18 0 0111.84-4.23 18.29 18.29 0 0111.83 4.23M142.89 46.5a20.18 20.18 0 00-11.84-4.23 18.32 18.32 0 00-11.84 4.23"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Circle
        cx={46.5}
        cy={78.21}
        r={4.23}
        fill="#2f1e63"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Circle
        cx={122.6}
        cy={78.21}
        r={4.23}
        fill="#2f1e63"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </Svg>
  )
}

export default SurprisedSvg
