import { steps } from "../data/steps";
import StepCard from "./StepCard";

function StrategySection() {

  return (

    <div style={{ padding: "80px", textAlign: "center" }}>

                  <h1
              style={{
                fontSize: "42px",
                fontFamily: "'Poppins', sans-serif",  
                letterSpacing: "1px",
                fontWeight: "700",
                marginBottom: "60px",
                color: "#1a1a1a",
                padding: '30px',
                textAlign: "center"
              }}
            >
              How SniperThink Works

            </h1>
         <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              animation: "fadeInUp 2s ease",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
               padding: '30px',
                textAlign: "center"
            }}
          >

        {steps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}

      </div>

    </div>

  );

}

export default StrategySection;