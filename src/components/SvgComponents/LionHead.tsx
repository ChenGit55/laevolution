import React from "react";

interface Logo1Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string | number;
}

const Logo1: React.FC<Logo1Props> = ({ className, width, height }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 315 315"
    fill="currentColor"
    width={width}
    height={height}
  >
    <g transform="translate(0, 0)">
      <path
        d="M280.1,113.7c-3,5.4-6.9,10.1-11.2,14.4c-2.1,2.1-4.2,4.2-6.4,6.2c-0.3,0.3-0.7,0.6-1.1,0.9c-2.7-5.4-5.3-10.8-8-16.2
		c3.9-1.6,7.7-3.1,11.7-4.7c-2-0.7-3.9-1-5.8-0.9c-3.6,0.2-6.8,1.4-10,2.8c-1.1,0.5-2.2,1-3.3,1.5c0.4,0.7,0.8,1.4,1.2,2.1
		c3.7,6.5,7.4,12.9,11.1,19.4c0.3,0.6,0.3,1,0,1.5c-1.5,2.4-3.4,4.3-5.5,6.2c-5.8,5.1-12.2,9.2-18.8,13.1c-2.3,1.4-4.7,2.6-7.1,3.9
		c-0.2,0.1-0.5,0.2-0.9,0.4c0.5-1.1,1-2.1,1.5-3.1c1.6-3.6,3-7.4,3.5-11.4c0.2-1.3,0.2-2.6,0.2-4c0-0.2-0.2-0.6-0.4-0.7
		c-5-3.4-10.1-6.8-15.1-10.2c-3.5-2.3-6.9-4.7-10.4-7c-0.2-0.1-0.3-0.2-0.6-0.4c3.4-2.1,6.7-4.1,10.2-6.2c-1.1,0-2.2-0.1-3.2,0
		c-3.9,0.4-7.4,1.9-10.7,3.9c-4.8,2.8-9,6.3-13,10.1c-2.6,2.5-5.1,5.1-7.7,7.7c-0.1,0.1-0.2,0.2-0.3,0.3c1.4,0.9,2.8,1.8,4.2,2.7
		c6.1,3.9,12.2,7.7,18.3,11.6c0.5,0.3,0.9,0.4,1.4,0.2c6.2-2.1,12.5-4.2,18.7-6.3c0.1,0,0.2-0.1,0.4-0.1c-0.2,0.7-0.3,1.4-0.5,2.1
		c-1,3.3-3,6-5.3,8.5c-3,3.1-6.4,5.7-9.9,8.2c-4.9,3.4-9.7,6.7-14.7,10c-1.3-1-2.7-2.1-4-3.2c-11.1-9.3-22.2-18.6-33.3-27.9
		c-0.3-0.3-0.3-0.5-0.2-0.9c1.4-3.5,2.7-6.9,4.1-10.4c0.1-0.2,0.1-0.4,0.2-0.7c-1.6,0.9-2.9,1.9-4.2,3c-3.7,3.4-5,7.7-4.5,12.6
		c0.4,4.4,1.9,8.6,3.5,12.6c2.4,5.8,4.9,11.5,7.3,17.3c2.8,6.8,5.1,13.7,6.6,20.9c3,15,1.2,29.3-5.3,43.1
		c-3.4,7.1-7.7,13.6-12.6,19.8c-2.1,2.6-4,5.4-6,8.1c-1.4,1.8-2.9,3.6-4.4,5.4c0.3-1.1,0.6-2.2,0.9-3.3c2-7.5,3.1-15.1,2.8-22.8
		c-0.3-8.9-2.5-17.3-6.3-25.3c-3.3-7.1-7.6-13.6-12.5-19.7c-4.7-5.9-9.6-11.8-14.4-17.6c-5.5-6.7-11-13.5-15.4-21
		c-3.9-6.6-7-13.6-8.6-21.2c-1.3-6.1-1.7-12.2-1.1-18.4c0.1-0.6,0.1-1.2,0-1.8c-0.5,0.8-0.9,1.6-1.3,2.4c-1.8,3.8-2.4,7.8-2.3,12
		c0.1,5.3,1.2,10.4,2.3,15.5c1,4.7,2.1,9.3,2.9,14c0.9,5,1.1,10,0.2,15c-1.3,6.5-4.6,11.7-9.6,16c-2.9,2.5-6.2,4.5-9.6,6.2
		c-0.1,0.1-0.2,0.1-0.5,0.2c0.5-0.8,0.9-1.4,1.4-2.1c2.5-3.9,4.5-8,5.4-12.6c0.9-4.5,0.4-8.9-1-13.3c-1.5-4.6-3.8-8.8-6.1-13
		c-3.1-5.7-6.3-11.4-8.9-17.3c-3.9-8.8-6.7-18-8-27.6c-0.5-3.5-0.8-7-1.2-10.5c0-0.1,0-0.2-0.1-0.5c-0.5,0.5-0.9,0.8-1.2,1.2
		c-1.6,1.9-2.7,4.1-3.8,6.3c-3.7,7.8-6.5,15.9-9.2,24c-0.9,2.6-1.6,5.2-2.4,7.8c0,0.1-0.1,0.2-0.1,0.4c-0.7-1.5-1.3-2.9-1.9-4.3
		c-1.4-3.1-2.8-6.1-4.1-9.2c-2.2-5.5-2.3-11.1-1.1-16.9c1.4-6.7,3.9-12.9,6.6-19.1c1.7-4.1,4.2-7.8,6.4-11.7
		c2.1-3.8,4.1-7.7,5.3-11.9c1-3.6,1.3-7.1,0.2-10.7c0.1-0.1,0.2-0.2,0.3-0.2c14.2-7.7,28.1-15.9,42.1-24.1c6.9-4,13.8-8,20.8-11.8
		c5.5-3,11.2-5.5,17.3-7.1c2.7-0.7,5.5-1.2,8.3-1.4c0.1,0,0.3-0.1,0.4-0.1c1.7,0,3.4,0,5.1,0c0.1,0,0.2,0.1,0.4,0.1
		c4.3,0.3,8.5,1.1,12.7,2.3c7.4,2,14.5,4.7,21.5,7.7c18.1,7.9,36.2,15.9,54.3,23.9c0.4,0.2,0.5,0.4,0.4,0.8
		c-0.2,1.9-0.4,3.9-0.6,5.8c-0.4,4-0.8,8-1.2,12c-0.1,0.6,0.1,1,0.6,1.4c1.6,1,3.1,2.1,4.7,3c4.8,2.9,9.8,5.6,14.6,8.5
		c9.4,5.6,18.4,11.9,27.3,18.2c2.6,1.9,5.2,3.8,7.8,5.6C280.1,113.6,280.1,113.6,280.1,113.7z M114.4,96.9c0,0,0.1,0,0.1,0
		c0.1-0.2,0.2-0.4,0.3-0.6c2.4-5.2,4.7-10.5,7.2-15.7c1.9-4,4.5-7.6,8-10.5c2.8-2.4,5.9-4.3,9.1-5.9c8.7-4.4,17.5-8.6,26.3-12.9
		c0.3-0.2,0.6-0.3,1-0.5c-0.5-1-1.2-1.6-2.1-2.2c-2.1-1.3-4.4-1.8-6.8-2c-0.4,0-0.6-0.2-0.9-0.5c-7.2-8.5-16.2-12.5-27.4-10.7
		c-7.1,1.1-13,4.5-17.4,10.3c-3.8,4.9-5.3,10.4-4.5,16.6c0.5,4.2,2.1,8,4.5,11.6c1.2,1.8,2.6,3.6,3.9,5.4c-1.1,1.4-1.6,3.2-1.8,5.1
		c-0.3,2.8-0.2,5.6,0,8.4C114.1,94.1,114.3,95.5,114.4,96.9z M178.6,69.7c0.7,0.8,1.6,1.9,2.6,2.9c3.9,4.1,7.7,8.2,11.7,12.2
		c2.9,2.9,5.9,5.6,9.4,7.7c2.1,1.3,4.3,2.4,6.9,2.6c0.4,0,0.4,0.3,0.5,0.6c0.2,2.4,0.4,4.9,0.7,7.3c0.3,2.8,0.5,5.6,0.8,8.4
		c0,0,0.1,0,0.1,0c1-6.8,2-13.6,3-20.5c-2.8-0.5-5.6-1.1-8.4-1.6c2.7-3.9,5.3-7.8,7.2-12.2C201.3,74.7,189.7,72.2,178.6,69.7z"
      />
      <path
        d="M174.1,234.4c0.5-2,1-4,1.4-5.9c1-5,1.1-10.1,0.6-15.2c-0.8-8.9-3.4-17.4-6.5-25.8c-2.6-7.1-5.4-14.2-8.1-21.3
		c-0.7-1.7-1.2-3.5-1.8-5.2c-0.1-0.2-0.1-0.4-0.2-0.6c0.1,0,0.1,0,0.1,0c1.7,1.7,4.1,2.4,5.9,3.9c3.3,2.7,6,5.9,8.5,9.3
		c4,5.5,7.5,11.4,10.5,17.5c2.9,5.8,5.5,11.6,8.3,17.5c0.2,0.3,0.2,0.6,0,0.9c-6.2,8.2-12.4,16.5-18.6,24.7
		C174.3,234.2,174.2,234.3,174.1,234.4z"
      />
      <path
        d="M150.8,49.4c-1.7,1-3.1,2.1-4.7,2.9c-3.3,1.8-6.7,3.4-10,5.1c-3.5,1.8-7,3.6-10.1,6c-2.7,2.1-5,4.6-6.6,7.7
		c0,0.1-0.1,0.1-0.3,0.4c-0.1-1.1-0.2-2.1-0.2-3.1c-0.1-2.2,0-4.3,0.6-6.4c1.1-3.8,3.9-5.9,7.4-7.1c2.9-1,5.9-1.3,8.9-1.5
		c0.2,0,0.4,0,0.6,0c0-0.1,0.1-0.1,0.1-0.2c-0.6-0.4-1.2-0.9-1.9-1.2c-1.8-0.9-3.7-1-5.6-0.9c-4.6,0.3-8.8,1.8-12.9,3.9
		c-0.2,0.1-0.3,0.2-0.5,0.3c0,0,0,0-0.1,0c0.9-1.3,1.8-2.5,2.7-3.7c2.1-2.8,4.3-5.5,7-7.7c2.7-2.2,5.7-3.4,9.2-3.1
		c2.5,0.2,4.7,1.1,6.9,2.3C144.8,44.7,147.8,46.9,150.8,49.4z"
      />
    </g>
  </svg>
);

export default Logo1;
