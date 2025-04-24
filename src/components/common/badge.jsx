import React from 'react';

const Badge = ({ text, bgColor, textColor, className, style }) => {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const getContrastingColor = (bgColor) => {
        const r = parseInt(bgColor.slice(1, 3), 16);
        const g = parseInt(bgColor.slice(3, 5), 16);
        const b = parseInt(bgColor.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 125 ? '#000000' : '#FFFFFF';
    };

    const finalBgColor = bgColor || getRandomColor();
    const finalTextColor = textColor || getContrastingColor(finalBgColor);

    return (
        <span
         className={`badge ${className || ''}`}
         style={{
            backgroundColor: finalBgColor,
            color: finalTextColor,
            ...style
        }}>
            {text}
        </span>
    );
};

export default Badge;
