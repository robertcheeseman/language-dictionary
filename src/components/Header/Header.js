import React from 'react';
import './Header.css';
import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material';
import categories from "../../data/category"

const Header = ({ setCategory, category, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            }, 
          mode: 'dark',
        },
      });

      const handleChange = (language) => {
            setCategory(language);
            setWord("");
      }
  return (
    <div className='header'>
        <span className='title'>{word ? word : "Word Hunt"}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField 
                    className='search' 
                    label="Search a Word" 
                    value={word}
                    onChange={(e)=>setWord(e.target.value)} >
                </TextField>
                <TextField
                    className='select'
                    select
                    label="Language"
                    value={category}
                    onChange={(e)=>handleChange(e.target.value)}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>

                    ))}
                        
                </TextField>
            </ThemeProvider>
        </div>
    </div>
  )
}

export default Header