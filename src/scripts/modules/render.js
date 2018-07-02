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
                <td>${entriesItem[""]}</td>
                <td>${entriesItem.NAME}</td>
                <td>${entriesItem['WINNER A']}</td>
                <td>${entriesItem['WINNER B']}</td>
                <td>${entriesItem['WINNER C']}</td>
                <td>${entriesItem['WINNER D']}</td>
                <td>${entriesItem['WINNER E']}</td>
                <td>${entriesItem['WINNER F']}</td>
                <td>${entriesItem['WINNER G']}</td>
                <td>${entriesItem['WINNER H']}</td>
                <td>${entriesItem['R UP A']}</td>
                <td>${entriesItem['R UP B']}</td>
                <td>${entriesItem['R UP C']}</td>
                <td>${entriesItem['R UP D']}</td>
                <td>${entriesItem['R UP E']}</td>
                <td>${entriesItem['R UP F']}</td>
                <td>${entriesItem['R UP G']}</td>
                <td>${entriesItem['R UP H']}</td>
                <td>${entriesItem['Q/Finals']}</td>
                <td>${entriesItem['Q/Finals goals']}</td>
                <td>${entriesItem['Semi/Final']}</td>
                <td>${entriesItem['3rd Place']}</td>
                <td>${entriesItem['Finalist']}</td>
                <td>${entriesItem['1st Round Goals']}</td>
                <td>${entriesItem['2nd Round Goals']}</td>
                <td>${entriesItem['Tie Breaker']}</td>
                <td>${entriesItem['Winner']}</td>
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