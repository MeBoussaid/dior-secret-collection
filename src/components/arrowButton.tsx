import React from "react";
import styles from "../styles/arrowButton.module.scss";

interface arrowButtonProps {
  direction: "previous" | "next";
  onClick: () => void;
}

const ArrowButton: React.FC<arrowButtonProps> = ({ direction, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={styles.arrowContainer} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="90"
        viewBox="0 0 69 139"
        fill="none"
      >
        <g opacity="1">
          {direction === "previous" && (
            <path
              d="M68.1221 2.99539C68.6719 2.37565 68.6151 1.4276 67.9954 0.877859C67.3756 0.328121 66.4276 0.384869 65.8779 1.00461L68.1221 2.99539ZM3 74.1496L1.87786 73.1543L0.931721 74.2209L1.949 75.2199L3 74.1496ZM65.8779 1.00461L1.87786 73.1543L4.12214 75.145L68.1221 2.99539L65.8779 1.00461ZM1.949 75.2199L65.949 138.07L68.051 135.93L4.051 73.0794L1.949 75.2199Z"
              fill="black"
            />
          )}
          {direction === "next" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              height="139"
              viewBox="0 0 69 139"
              fill="none"
            >
              <path
                d="M0.877861 136.005C0.328117 136.624 0.384872 137.572 1.00461 138.122C1.62435 138.672 2.5724 138.615 3.12214 137.995L0.877861 136.005ZM66 64.8504L67.1221 65.8457L68.0683 64.7791L67.051 63.7801L66 64.8504ZM3.12214 137.995L67.1221 65.8457L64.8779 63.855L0.877861 136.005L3.12214 137.995ZM67.051 63.7801L3.051 0.929764L0.948997 3.07024L64.949 65.9206L67.051 63.7801Z"
                fill="black"
              />
            </svg>
          )}
        </g>
      </svg>
    </div>
  );
};

export default ArrowButton;
