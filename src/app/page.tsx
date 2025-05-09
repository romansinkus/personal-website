"use client"

import ScrollButton from "@/components/ArrowButton";
// import Cube from "@/components/Cube"; // Import the ThreeScene component
import ThreeScene from "@/components/ThreeScene";
// import Container from "@mui/material/Container";
// import ExampleCube from "@/components/ExampleCube";
import Title from "@/components/Title";
import Typing from "@/components/Typing";
// import { Container } from "postcss";

// export default function Home() {
//   return (
//     <div>
//       {/* <Cube /> */}
//       <div>
//         <Title/> 
//         <Typing/>
//       </div>
//       <ThreeScene />
//     </div>
//   );
// }

export default function Home() {
  // const handleScrollToNext = () => {
  //   const nextSection = document.getElementById("section-2");
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the next section
  //   }
  // };
 
  return (
    <div>
      {/* Section 1 */}
      <div
        id="section-1"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          backgroundColor: "#1e1e1e", // Background color for styling
          color: "white",
        }}
      >
        {/* Title and Three.js Scene */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "200px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              textAlign: "center",
            }}
          >
            <Title/>
            <Typing/>
          </div>
          <ThreeScene />
        </div>

        {/* Next Button */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          {/* <button
            onClick={handleScrollToNext}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "white",
              cursor: "pointer",
            }}
          >
            Down
          </button> */}
          <ScrollButton/>
        </div>
      </div>

      {/* Section 2 */}
      <div
        id="section-2"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#333",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Welcome to Page 2</h1>
      </div>
    </div>
  );
}



