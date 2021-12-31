import { motion } from "framer-motion";
import React, { useState } from "react";

export const Board = () => {
    const [activeTile, setActiveTile] = useState("");

    return (
        <div style={{ width: "100vw", height: "100vh", maxWidth: "700px", margin: "auto" }}>
            <div style={{ width: "100%" }}>
                <svg viewBox="0 0 750 750" style={{ width: "auto" }}>
                    {new Array(15).fill(0).map((_, i) =>
                        new Array(15).fill(0).map((_, j) => (
                            <React.Fragment key={j}>
                                <rect
                                    x={j * 50}
                                    y={i * 50}
                                    width="50"
                                    height="50"
                                    fill={i === 7 && j === 7 ? "#333" : "white"}
                                    stroke="black"
                                />
                                {i === 7 && j === 7 && (
                                    <svg x={j * 50 + 5} y={i * 50 + 5} width="40" height="40" viewBox="0 0 500 500">
                                        <path
                                            d="m-0.00001,195.05233l190.58235,0l58.89141,-181.05233l58.89151,181.05233l190.58225,0l-154.18406,111.89524l58.89446,181.05233l-154.18416,-111.8982l-154.18406,111.8982l58.89446,-181.05233l-154.18416,-111.89524z"
                                            fill="#eee"
                                        />
                                    </svg>
                                )}
                            </React.Fragment>
                        ))
                    )}
                </svg>
            </div>
            <div style={{ display: "grid", width: "100%", gridTemplateColumns: "repeat(7, auto)" }}>
                {["A", "B", "C", "D", "E", "F", "G"].map((letter, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: "relative",
                            width: "100%",
                            paddingTop: "100%",
                            backgroundColor: "#eee",
                            outline: "1px solid #333",
                            zIndex: letter === activeTile ? 4 : 1,
                        }}
                        drag
                        dragMomentum={false}
                        onDragStart={() => setActiveTile(letter)}
                        onDragEnd={() => setActiveTile("")}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -45%)",
                                fontSize: "10vw",
                                fontWeight: 600,
                            }}
                        >
                            {letter}
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                fontSize: "3vw",
                                paddingRight: "0.5rem",
                            }}
                        >
                            3
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
