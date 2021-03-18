import React from 'react';

const HighScoreTable = (props) => {
    const countryNames = props.country.sort((a,b)=> {
        let a1 = a.name.toLowerCase();
        let b1 = b.name.toLowerCase();
        return a1 < b1 ? -1: a1 > b1 ? 1:0;
    })
    return (
        <table className="table">
            {countryNames.map(header => (
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