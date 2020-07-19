import React, { useState } from 'react';
import './stylesheet.scss'
export default function LeaderBoardPage () {
  const tiers = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];

  const [tier, setTier] = useState(2);

  return (
    <div className="LeaderBoard">
      <div className="container">
        <div className="header">
          {tiers.map((value, index) => {
            return (
              <button 
                className={index === tier ? "header-component-select" : "header-component"}
                onClick={() => setTier(index)}
              >
                <div className="rank-font">Rank</div>
                <div>{value}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}