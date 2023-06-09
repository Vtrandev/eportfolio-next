import React from "react";

export default function Skeleton({
  width,
  height,
  rounded,
}: {
  width: string | number;
  height: string | number;
  rounded: string | number;
}) {
  return (
    <div
      className='skeleton-box'
      style={{
        width,
        height,
        borderRadius:rounded,
      }}
    >
    </div>
  );
}
