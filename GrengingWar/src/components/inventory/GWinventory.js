import React from "react";
import './gwinventory.css'

const GWinventory = ({ inventory }) => {
    const title = 'Inventory';
    return (
        <div className="scrol">
            <div className="inventory">
                <div className="inventory-title">{title}</div>
                <div className="items">
                    {inventory.map((item, index) => (
                        <div className="row" key={index}>
                            <button className="btn">
                                <div className="name">{item.name}</div>
                                <div className="count">{item.loot}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GWinventory;
