import React, { useContext } from "react";
import { ThemeContext } from "../../theme/theme.context";

const NavigationBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const themedStyle = {
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    };

    return (
        <div style={themedStyle}>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default NavigationBar;