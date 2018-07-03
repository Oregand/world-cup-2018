import {
  compose
} from '../utils';
import Chart from 'chart.js';

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
                <td>${entriesItem['Q/Finals1']}</td>
                <td>${entriesItem['Q/Finals2']}</td>
                <td>${entriesItem['Q/Finals3']}</td>
                <td>${entriesItem['Q/Finals4']}</td>
                <td>${entriesItem['Q/Finals5']}</td>
                <td>${entriesItem['Q/Finals6']}</td>
                <td>${entriesItem['Q/Finals7']}</td>
                <td>${entriesItem['Q/Finals8']}</td>
                <td>${entriesItem['Q/Finals goals']}</td>
                <td>${entriesItem['Semi/Final1']}</td>
                <td>${entriesItem['Semi/Final2']}</td>
                <td>${entriesItem['Semi/Final3']}</td>
                <td>${entriesItem['Semi/Final4']}</td>
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

const renderEntityChart = (entriesItems) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',

    data: {
      labels: entriesItems.map(el => el.NAME),
      datasets: [{
        label: "Name - Winner ",
        data: entriesItems.map(el => el.Winner),
      }]
    },

    options: {}
  });
};

const renderLeaderBoardChart = (leaderboardItems) => {
  const ctx = document.getElementById('myChart2').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',

    data: {
      labels: leaderboardItems.map(el => el.Name),
      datasets: [{
        label: "LeaderBoard Scores",
        data: leaderboardItems.map(el => el['Total Points']),
      }]
    },

    options: {}
  });
};

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
export const renderPage = (source) => {
  const entries = source.entries;
  const leaderboard = source.leaderboard;
  compose(renderEntries(entries), renderLeaderBoard(leaderboard), renderEntityChart(entries), renderLeaderBoardChart(leaderboard));
};