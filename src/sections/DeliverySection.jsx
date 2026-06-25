import { useEffect, useRef, useState } from "react";

const steps = [
  {
    step: "Step 1",
    label: "Choose Your Snack",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h12M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    step: "Step 2",
    label: "Place Order",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          strokeWidth="1.8"
          stroke="currentColor"
        />
        <path
          d="M9 12l2 2 4-4"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    step: "Step 3",
    label: "Freshly Packed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <path
          d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    step: "Step 4",
    label: "At Your Door",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
        />
        <circle
          cx="5.5"
          cy="18.5"
          r="2.5"
          strokeWidth="1.8"
          stroke="currentColor"
        />
        <circle
          cx="18.5"
          cy="18.5"
          r="2.5"
          strokeWidth="1.8"
          stroke="currentColor"
        />
      </svg>
    ),
  },
];

function DeliverySection() {
  const [activeStep, setActiveStep] = useState(-1);
  const intervalRef = useRef(null);

  useEffect(() => {
    // small delay before starting
    const startDelay = setTimeout(() => {
      setActiveStep(0);
      intervalRef.current = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= steps.length - 1) {
            // all reached — reset to -1 then restart from 0
            setTimeout(() => setActiveStep(0), 600);
            return -1;
          }
          return prev + 1;
        });
      }, 1000);
    }, 400);

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="delivery" id="process">
      <div className="delivery_header">
        <h2 className="delivery_title">Freshly Made, Promptly Delivered</h2>
        <p className="delivery_subtitle">
          How your snacks travel from our kitchen to your doorstep.
        </p>
      </div>

      <div className="delivery_steps">
        {steps.map((s, i) => {
          const reached = activeStep >= i;
          const isCurrent = activeStep === i;

          return (
            <div className="delivery_step" key={i}>
              {/* Icon circle */}
              <div
                className={`delivery_icon_wrap
                ${reached ? "reached" : ""}
                ${isCurrent ? "current" : ""}
              `}
              >
                {isCurrent && <span className="delivery_pulse" />}
                {s.icon}
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="delivery_connector">
                  <div className="delivery_connector_track">
                    <div
                      className="delivery_connector_fill"
                      style={{
                        width:
                          activeStep > i ? "100%" : isCurrent ? "50%" : "0%",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Label */}
              <div className="delivery_step_text">
                <span
                  className={`delivery_step_num ${reached ? "reached" : ""}`}
                >
                  {s.step}
                </span>
                <p
                  className={`delivery_step_label ${reached ? "reached" : ""}`}
                >
                  {s.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DeliverySection;
