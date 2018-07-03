import {
  compose
} from '../utils';
import Chart from 'chart.js';
import List from 'list.js';

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
const renderEntries = (entriesItems) => {
  const entriesBody = document.querySelector("table.table-entries tbody.entry-table");
  let count = 1;
  const entryRow = `
        ${
          entriesItems.map(
            entriesItem => `
              <tr>
                <td class="count">${count++}</td>
                <td class="code">${entriesItem[""]}</td>
                <td class="NAME">${entriesItem.NAME}</td>
                <td class="WINNER A">${entriesItem['WINNER A']}</td>
                <td class="WINNER B">${entriesItem['WINNER B']}</td>
                <td class="WINNER C">${entriesItem['WINNER C']}</td>
                <td class="WINNER D">${entriesItem['WINNER D']}</td>
                <td class="WINNER E">${entriesItem['WINNER E']}</td>
                <td class="WINNER F">${entriesItem['WINNER F']}</td>
                <td class="WINNER G">${entriesItem['WINNER G']}</td>
                <td class="WINNER H">${entriesItem['WINNER H']}</td>
                <td class="R UP A">${entriesItem['R UP A']}</td>
                <td class="R UP B">${entriesItem['R UP B']}</td>
                <td class="R UP C">${entriesItem['R UP C']}</td>
                <td class="R UP D">${entriesItem['R UP D']}</td>
                <td class="R UP E">${entriesItem['R UP E']}</td>
                <td class="R UP F">${entriesItem['R UP F']}</td>
                <td class="R UP G">${entriesItem['R UP G']}</td>
                <td class="R UP H">${entriesItem['R UP H']}</td>
                <td class="Q/Finals1">${entriesItem['Q/Finals1']}</td>
                <td class="Q/Finals2">${entriesItem['Q/Finals2']}</td>
                <td class="Q/Finals3">${entriesItem['Q/Finals3']}</td>
                <td class="Q/Finals4">${entriesItem['Q/Finals4']}</td>
                <td class="Q/Finals5">${entriesItem['Q/Finals5']}</td>
                <td class="Q/Finals6">${entriesItem['Q/Finals6']}</td>
                <td class="Q/Finals7">${entriesItem['Q/Finals7']}</td>
                <td class="Q/Finals8">${entriesItem['Q/Finals8']}</td>
                <td class="Q/Finals goals">${entriesItem['Q/Finals goals']}</td>
                <td class="Semi/Final1">${entriesItem['Semi/Final1']}</td>
                <td class="Semi/Final2">${entriesItem['Semi/Final2']}</td>
                <td class="Semi/Final3">${entriesItem['Semi/Final3']}</td>
                <td class="Semi/Final4">${entriesItem['Semi/Final4']}</td>
                <td class="3rd Place">${entriesItem['3rd Place']}</td>
                <td class="Finalist">${entriesItem['Finalist']}</td>
                <td class="1st Round Goals">${entriesItem['1st Round Goals']}</td>
                <td class="2nd Round Goals">${entriesItem['2nd Round Goals']}</td>
                <td class="Tie Breaker">${entriesItem['Tie Breaker']}</td>
                <td class="Winner">${entriesItem['Winner']}</td>
              </tr>`
          ).join('\n')
        }
    `;
  entriesBody.insertAdjacentHTML("beforeend", entryRow);
  var options = {
    valueNames: ['count', 'code', 'NAME', 'WINNER A',
      'WINNER B',
      'WINNER C',
      'WINNER D',
      'WINNER E',
      'WINNER F',
      'WINNER G',
      'WINNER H',
      'R UP A',
      'R UP B',
      'R UP C',
      'R UP D',
      'R UP E',
      'R UP F',
      'R UP G',
      'R UP H',
      'Q/Finals1',
      'Q/Finals2',
      'Q/Finals3',
      'Q/Finals4',
      'Q/Finals5',
      'Q/Finals6',
      'Q/Finals7',
      'Q/Finals8',
      'Q/Finals goals',
      'Semi/Final1',
      'Semi/Final2',
      'Semi/Final3',
      'Semi/Final4',
      '3rd Place',
      'Finalist',
      '1st Round Goals',
      '2nd Round Goals',
      'Tie Breaker',
      'Winner'
    ]
  };

  var hackerList = new List('users', options);
};

/**
 * Render Function
 * @param {Array<Object>}
 * @return {HTML<any>}
 */
const renderLeaderBoard = (leaderboardItems) => {
  const leaderBoardBody = document.querySelector("table.table-leaderboard tbody.leaderboard-table");
  let count = 1;
  const leaderBoardRow = `
        ${
          leaderboardItems.map(
            leaderboardItem => `
              <tr>
                <td class="count">${count++}</td>
                <td class="name">${leaderboardItem.Name}</td>
                <td class="ref">${leaderboardItem.Ref}</td>
                <td class="points">${leaderboardItem['Total Points']}</td>
              </tr>`
          ).join('\n')
        }
    `;
  leaderBoardBody.insertAdjacentHTML("beforeend", leaderBoardRow);
  var options = {
    valueNames: ['count', 'name', 'ref', 'points',]
  };

  var hackerList = new List('users2', options);
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