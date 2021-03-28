import React from 'react';

const GlobalHighScores = (props) => {

    const playersAndScores = [];
    props.global.forEach(entry => {
        entry.scores.forEach(player => {
            playersAndScores.push([player.n, player.s])
        })
    })

    function arraySorter(arr) {
        let jsonObj = {};
        let values = [];
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            jsonObj[arr[i][1]] = arr[i][0];
        }
        values = Object.keys(jsonObj).sort((a, b) => b - a);

        for (let j = 0; j < values.length; j++) {
            result.push([jsonObj[values[j]], values[j]]);
        }
        return result;
    }
    const sortedArray = arraySorter(playersAndScores);

    return (
        <table className="g-table">
            <thead>
                <tr className="header">
                    <th className="g-header" scope="col">Name</th>
                    <th className="g-header" scope="col">Score</th>
                </tr>
            </thead>

            <tbody>
                {sortedArray.map(players => {
                    return (
                        <tr className="g-t-body"> 
                            <th scope="row" className="name">{players[0]}</th>
                            <td className="global-scores">{players[1]}</td>
                        </tr> 
                    )
                })}
            </tbody>
        </table>
    );
}

export default GlobalHighScores;