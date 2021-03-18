import React from 'react';

const HighScoreTable = (props) => {
    return (
        <table className="table">
            {props.country.map(header => (
                <thead> 
                    <caption className="country-headers">High Scores: {header.name}
                    </caption>
                    {header.scores.map((hero) => {
                        return (
                            <tr className="country-heros"> 
                                <th>{hero.n}</th>
                                <th>{hero.s}</th>
                            </tr>
                        )
                    })}
                </thead>
            ))}
        </table>
    )
}

export default HighScoreTable;