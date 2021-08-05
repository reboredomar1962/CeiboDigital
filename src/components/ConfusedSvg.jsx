import * as React from "react"
import Svg, { Ellipse, Circle, Path } from "react-native-svg"

function ConfusedSvg(props) {
  return (
    <Svg
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      width={169.1}
      height={189.39}
      viewBox="0 0 169.1 189.39"
      {...props}
    >
      <Ellipse
        cx={84.55}
        cy={183.05}
        rx={67.64}
        ry={6.34}
        fill="#45413c"
        opacity={0.15}
        style={{
          isolation: "isolate",
        }}
      />
      <Circle cx={84.55} cy={84.55} r={84.55} fill="#895efa" />
      <Path
        d="M84.55 0a84.55 84.55 0 1084.55 84.54A84.79 84.79 0 0084.55 0zm0 156.41A76.94 76.94 0 017.61 79.47c0-43.12 34.24-77.36 76.94-77.36a76.94 76.94 0 0176.94 76.94c.42 42.7-34.24 77.36-76.94 77.36z"
        fill="#703bf7"
      />
      <Ellipse cx={84.55} cy={16.91} rx={25.36} ry={6.34} fill="#ad85f8" />
      <Ellipse cx={135.28} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Ellipse cx={33.82} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Circle
        cx={40.16}
        cy={80.32}
        r={4.23}
        fill="#2f1e63"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Ellipse
        cx={128.94}
        cy={76.09}
        rx={4.23}
        ry={6.34}
        fill="#2f1e63"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Path
        d="M61.3 109.91h46.5M117.55 54.95s3.39-8.45 11.42-8.45 11.41 8.45 11.41 8.45M27.9 65.52s3 2.54 12.26 3.81 12.68-.43 12.68-.43"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </Svg>
  )
}

export default ConfusedSvg
