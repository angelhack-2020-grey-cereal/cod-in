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
        <div className="content">
          <table className="table">
            <tr className="table-header">
              <th className="table-width">순위</th>
              <th className="table-width">프로필</th>
              <th className="table-width-2x"></th>
              <th>티어</th>
              <th>획득한 Angel</th>
              <th>참여횟수</th>
            </tr>
            <tr className="table-body">
              <td>a</td>
              <td>
              </td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}