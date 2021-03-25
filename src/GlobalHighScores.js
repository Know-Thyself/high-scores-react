import React from 'react';

const GlobalHighScores = (props) => {
    props.global.map(highest => {
       const highestScores = highest.scores;
        highestScores.map(score =>{
            const globalScore = score.s;
            return globalScore;
        })
        return highestScores.sort((a, b) => {
            return b.s - a.s;
        });
    });
    
    return (
        <table className="g-table">
            <thead>
                <tr className="header">
                    <th className="g-header" scope="col">Name</th>
                    <th className="g-header" scope="col">Score</th>
                    <th className="g-header" scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
                {props.global.map(g => ( 
                    (g.scores.map(score => {
                            return (
                                <tr className="g-t-body">
                                    <th scope="row" className="name">{score.n}</th>
                                    <td className="global-scores">{score.s}</td>
                                    <td>{g.name}</td>
                                </tr>
                            );
                    }))
                ))}
            </tbody>
        </table>
    );
}

export default GlobalHighScores;