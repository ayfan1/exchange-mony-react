import React from "react";
import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {!!result && (
           <React.Fragment>
            {/* {Object.entries(result)} */}
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

            <strong>
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>
           </React.Fragment>
        )}
    </p>
);