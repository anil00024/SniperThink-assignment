import { motion } from "framer-motion";
import { useState } from "react";

function StepCard({ step }) {
    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
    const sendInterest = async () => {

  try {

    setLoading(true);

    const response = await fetch("http://localhost:5000/api/interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Anil kumar",
        email: "anil@email.com",
        step: step.title
      })
    });

    const data = await response.json();

    setMessage(data.message);
setTimeout(() => {
  setMessage("");
}, 3000);
  } catch (error) {

    setMessage("Something went wrong");

  } finally {

    setLoading(false);

  }

};

  return (
    <motion.div
     initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{ scale: 1.05, y: -5 }}
transition={{ duration: 0.4 }}
      style={{
        background: "#272727",
        color: "white",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
      }}
    >

      <h2>{step.title}</h2>

      <p>{step.description}</p>

     <button
        onClick={sendInterest}
        style={{
        background: "#415992",
        color: "white",
        padding: "40px 30px",
        borderRadius: "14px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0, 23, 230, 0.15)",
        transition: "all 0.3s ease"
      }}
      >
  {loading ? "Sending..." : "I'm Interested"}
</button>
{message && (
  <p style={{ marginTop: "10px", color: "#4caf50" }}>
    {message}
  </p>
)}
    </motion.div>
  );
}

export default StepCard;