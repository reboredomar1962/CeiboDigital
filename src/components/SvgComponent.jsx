import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={169.1}
      height={190.23}
      viewBox="0 0 169.1 190.23"
      {...props}
    >
      <Circle cx={84.55} cy={84.55} r={84.55} fill="#895efa" />
      <Path
        d="M84.55 0a84.55 84.55 0 1084.55 84.55A84.8 84.8 0 0084.55 0zm0 156.42a77.15 77.15 0 010-154.3c42.7 0 77.36 34.66 77.36 76.94a77.12 77.12 0 01-77.36 77.36z"
        fill="#703bf7"
      />
      <Ellipse cx={84.55} cy={16.91} rx={25.36} ry={6.34} fill="#ad85f8" />
      <Ellipse
        cx={84.55}
        cy={183.89}
        rx={67.64}
        ry={6.34}
        fill="#423089"
        opacity={0.15}
        style={{
          isolation: "isolate",
        }}
      />
      <Path
        d="M38.05 62.12a51.93 51.93 0 0014.37-4.65 53.82 53.82 0 0012.26-8.88M130.21 62.12a52.09 52.09 0 01-14.38-4.65 54 54 0 01-12.28-8.85"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
      <Ellipse cx={135.28} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Ellipse cx={33.82} cy={105.69} rx={10.57} ry={6.34} fill="#cfb1fc" />
      <Path
        d="M143.73 80.32a7.61 7.61 0 11-15.21 0M40.16 80.32a7.58 7.58 0 01-7.61 7.61c-4.22 0-7.18-3.38-7.18-7.61M63.41 124.71h42.28"
        fill="none"
        stroke="#2f1e63"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </Svg>
  )
}

export default SvgComponent