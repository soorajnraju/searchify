// icon:view-grid | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function IconViewGrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3" />
    </svg>
  );
}

export default IconViewGrid;
