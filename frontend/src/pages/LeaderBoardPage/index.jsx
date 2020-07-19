import React, { useContext, useState } from 'react';
import './stylesheet.scss';
import mockUsers from '../../assets/mocks/users';
import { UserContext } from '../../contexts';
import { classes } from '../../common/utils';
import Profile from '../../components/Profile';

export default function LeaderBoardPage() {
  const tiers = [1, 2, 3, 4, 5];
  const { user: me } = useContext(UserContext);
  const [selectedTier, setSelectedTier] = useState(me.tier);

  return (
    <div className="LeaderBoard">
      <div className="container">
        <div className="header">
          {tiers.map((tier) => {
            return (
              <div key={tier}
                   className={classes('header-component', selectedTier === tier && 'selected')}
                   onClick={() => setSelectedTier(tier)}>
                <div className="rank-font">Rank</div>
                <div>Tier {tier}</div>
              </div>
            );
          })}
        </div>
        <div className="content">
          <table className="table">
            <thead>
            <tr className="table-header">
              <th className="table-width">순위</th>
              <th className="table-width">프로필</th>
              <th>획득한 Angel</th>
              <th>참여횟수</th>
            </tr>
            </thead>
            <tbody>
            {
              new Array(10).fill(0).map((_, index) => {
                const user = mockUsers[index % mockUsers.length];
                return (
                  <tr className="row" key={index}>
                    <td>{index + 1}</td>
                    <td style={{ fontWeight: 'bold' }}>
                      <Profile user={user} noTier/>
                    </td>
                    <td>{user.coin || '-'}</td>
                    <td>{987 - index * 17}</td>
                  </tr>
                );
              })
            }
            <tr className="row">
              <td colSpan={4} style={{
                fontWeight: 'bold',
                fontSize: 24,
              }}>
                ···
              </td>
            </tr>
            {
              new Array(5).fill(0).map((_, index) => {
                const user = mockUsers[(index + 2) % mockUsers.length];
                return (
                  <tr className={classes('row', index === 2 && 'active')} key={index}>
                    <td>{index + 874}</td>
                    <td style={{ fontWeight: 'bold' }}>
                      <Profile user={user} noTier/>
                    </td>
                    <td>{user.coin || '-'}</td>
                    <td>{987 - index * 17}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
