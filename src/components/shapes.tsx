import React from "react";

export function Circle1() {
  return (
    <div className="circle1 top-125 lg:block absolute  lg:-right-20 lg:top-150 -z-1"
      style={{
        position : "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
        boxShadow : "0 5px 15px rgba(145, 92, 182, .4)",
        opacity: "0.2",
      }}
    />
  );
}

export function Circle2() {
  return (
    <div className="circle2 absolute -left-50 bottom-325 z-0"
      style={{
        position : "absolute",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        backgroundImage: "linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%)",
        boxShadow : "0 5px 15px rgba(145, 92, 182, .4)",
        opacity: "0.2",
      }}
    />
  );
}

export function CircleBorder() {
  return (
    <div className="absolute"
      style={{
        width: "341px",
        height: "341px",
        border: "8px solid #243B55",
        borderRadius: "50%",
        background: "transparent",
      }}
    />
  );
}

export function CircleBorder2() {
  return (
    <div className="absolute -left-75 bottom-300 -z-1"
      style={{
        width: "900px",
        height: "900px",
        borderBottom: "8px solid #FDBB2D",
        borderLeft: "8px solid #FDBB2D",
        borderRight: "8px solid #FDBB2D",
        borderTop: "8px solid #FDBB2D",
        borderRadius: "50%",
        background: "transparent",
        rotate : "45deg",
        boxShadow : "0 5px 15px rgba(145, 92, 182, .4)",
        opacity: "0.2",
      }}
    />
  );
}

export function CircleBorder1() {
  return (
    <div
      className="absolute lg:-right-55 top-90 lg:top-110 -z-1"
      style={{
        width: "800px",
        height: "800px",
        borderBottom: "8px solid #FDBB2D",
        borderLeft: "8px solid #FDBB2D",
        borderRight: "8px solid #FDBB2D",
        borderTop: "8px solid #FDBB2D",
        borderRadius: "50%",
        background: "transparent",
        rotate : "45deg",
        boxShadow : "0 5px 15px rgba(145, 92, 182, .4)",
        opacity: "0.2",
      }}
    />
  );
}
export function CircleBorder3() {
  return (
    <div
      className="absolute hidden lg:block bottom-80 -right-15 -z-1 lg:w-250 lg:h-250"
      style={{
        borderBottom: "8px solid #FDBB2D",
        borderLeft: "8px solid #FDBB2D",
        borderRight: "8px solid #FDBB2D",
        borderTop: "8px solid #FDBB2D",
        borderRadius: "50%",
        background: "transparent",
        rotate : "45deg",
        boxShadow : "0 5px 15px rgba(145, 92, 182, .9)",
        opacity: "0.2",
      }}
    />
  );
}
