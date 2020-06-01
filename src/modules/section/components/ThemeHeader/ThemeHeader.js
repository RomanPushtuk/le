import React from 'react';

export const ThemeHeader = ({ title, date, description }) => {
    return (
        <div className="themes_info-container">
            <h4 className="info-container_title">{title}</h4>
            <p className="info-container_time">{date}</p>
            <p className="info-container_description">{description}</p>
        </div>
    );
};
