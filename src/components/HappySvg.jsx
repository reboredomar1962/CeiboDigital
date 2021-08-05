import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function HappySvg(props) {
  return (
    <Svg
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      width={169.1}
      height={190.23}
      viewBox="0 0 169.1 190.23"
      {...props}
    >
      <Circle cx={84.55} cy={84.55} r={84.55} fill="#895efa" />
      <Path
        d="M84.55 0a84.55 84.55 0 1084.55 84.55A84.8 84.8 0 0084.55 0zm0 156.42A77 77 0 017.61 79.48c0-43.12 34.24-77.36 76.94-77.36a76.94 76.94 0 0176.94 76.94c.42 42.69-34.24 77.36-76.94 77.36z"
        fill="#703bf7"
      />
      <Ellipse cx={84.55} cy={16.91} rx={25.36} ry={6.34} fill="#ad85f8" />
      <Ellipse
        cx={84.55}
        cy={183.89}
        rx={67.64}
        ry={6.34}
        fill="#3a4347"
        opacity={0.15}
        style={{
          isolation: "isolate",
        }}
      />
      <Ellipse cx={135.28} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Ellipse cx={33.82} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Path
        d="M58.6 118.23c-1.82.47-3.24 1.45-3.57 3.45a4.54 4.54 0 000 1.56c2.39 14 14.92 24.3 29.49 24.3 14.8 0 27.48-10.57 29.59-24.94a5.09 5.09 0 00-.84-3.38 3.83 3.83 0 00-3-1.27H66.63c-2.56-.03-5.44-.39-8.03.28z"
        fill="#e5d4ff"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Path
        d="M108.22 135.84c-5.91-3.38-14.37-5.49-23.67-5.49s-17.76 2.11-23.67 5.49a30.24 30.24 0 0047.34 0z"
        fill="#cfb1fc"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Path
        d="M25.37 89.62a7.61 7.61 0 1115.21 0M128.94 89.62a7.61 7.61 0 0115.22 0"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </Svg>
  )
}

export default HappySvg
