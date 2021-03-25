import React, { useState } from 'react';

const HighScoreTable = (props) => {
    const countryNames = props.country.sort((a,b)=> {
        let a1 = a.name.toLowerCase();
        let b1 = b.name.toLowerCase();
        return a1 < b1 ? -1 : a1 > b1 ? 1 : 0;
    });
    const [toggled, setToggled] = useState(false);
    const toggler = (e) => {
        setToggled(!toggled);
        if (e.target.className === "toggle") {
            descendingOrder(); 
        } else if(e.target.className !== "toggle"){
            ascendingOrder();
        }     
    }
    const descendingOrder = () => { 
        countryNames.map(highest => {
            return highest.scores.sort((a, b) => {
                if (a.s > b.s) return -1;
                else return 1;
            });
        });
    }
    const ascendingOrder = () => {countryNames.map(highest => {
        return highest.scores.sort((a, b) => {
            if (a.s < b.s) return -1;
            else return 1;
        });
    });
}
    return (
        <div> 
            <button onClick={toggler} className={toggled ? "toggle" : "toggle-button"}>Sort Scores <span>&#8597;</span></button>
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
                            );
                        })}
                    </thead>
                ))}
            </table>
        </div>
    );
}

export default HighScoreTable;