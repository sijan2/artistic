import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  max-width: 100px;
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default function Logo({ ...rest }) {
  return (
    <LogoStyles {...rest}>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Sublime Text"
    role="img"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect rx="15%" width={512} height={512} fill="#424242" />
    <rect
      transform="skewY(-17.5)"
      x={110}
      y={375}
      width={292}
      height={107}
      rx={8}
      fill="url(#lg)"
    />
    <rect
      transform="skewY(17.5)"
      x={110}
      y={122}
      width={292}
      height={107}
      rx={8}
      fill="#ff9800"
    />
    <rect
      transform="skewY(-17.5)"
      x={110}
      y={191}
      width={292}
      height={107}
      rx={8}
      fill="#ff9800"
    />
    <defs>
      <linearGradient
        id="lg"
        x1={174}
        x2={189}
        y1={725}
        y2={716}
        gradientTransform="scale(1.65 .605)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ff9700" offset={0} />
        <stop stopColor="#f48e00" offset={0.5271813} />
        <stop stopColor="#d06f00" offset={1} />
      </linearGradient>
    </defs>
  </svg>
      </svg>
    </LogoStyles>
  );
}
