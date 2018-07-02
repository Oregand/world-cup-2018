import {
  compose
} from '../utils';

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
const renderEntries = (entriesItems) => {
  const entriesBody = document.querySelector("table.table-entries tbody.entry-table");
  const entryRow = `
        ${
          entriesItems.map(
            entriesItem => `
              <tr>
                <td>${entriesItem.Name}</td>
                <td>${entriesItem.Ref}</td>
                <td>${entriesItem['Total Points']}</td>
              </tr>`
          ).join('\n')
        }
    `;
  entriesBody.insertAdjacentHTML("beforeend", entryRow);
};

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
const renderLeaderBoard = (leaderboardItems) => {
  const leaderBoardBody = document.querySelector("table.table-leaderboard tbody.leaderboard-table");
  const leaderBoardRow = `
        ${
          leaderboardItems.map(
            leaderboardItem => `
              <tr>
                <td>${leaderboardItem.Name}</td>
                <td>${leaderboardItem.Ref}</td>
                <td>${leaderboardItem['Total Points']}</td>
              </tr>`
          ).join('\n')
        }
    `;
  leaderBoardBody.insertAdjacentHTML("beforeend", leaderBoardRow);
};

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
export const renderPage = (source) => {
  const entries = source[0];
  const leaderboard = source[1];
  compose(renderEntries(entries), renderLeaderBoard(leaderboard));
};