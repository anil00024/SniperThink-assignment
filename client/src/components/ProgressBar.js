import { useState, useEffect } from "react";

function ProgressBar() {

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (window.scrollY / totalHeight) * 100;

    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "6px",
        background: "#eee",
        zIndex: 1000
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scrollProgress}%`,
          background: "#04befc",
          transition: "width 0.2s"
        }}
      />
    </div>
  );
}

export default ProgressBar;