import React from 'react';
import {styled, Button, Grid, FormControl, 
    Typography, FormLabel, RadioGroup, Paper,
    Radio, Box, FormControlLabel, TextField} 
    from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),

    textAlign: "left",
    color: theme.palette.text.secondary
}));

const Namer = (props) => {
    const {
        handleChange = () => {}, 
        params={}, 
        generateName = () => {}
    } = props;

    const {gender, size, color, temperament} = params;

    return (
        <Box>
             <Grid container justify="space-around" alignItems="center">
                <Grid container direction="row" paddingLeft={5}>
                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align="left" component="legend">
                                Gender
                            </FormLabel>
                                
                            <RadioGroup row aria label="gender" defaultValue="neutral" 
                            name="neutral" value={gender} onChange={handleChange}>
                                <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Item>

                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align="left" component="legend">
                                Size
                            </FormLabel>
                                
                            <RadioGroup row aria label="size" defaultValue="tall" 
                            name="size" value={size} onChange={handleChange}>
                                <FormControlLabel value="tall" control={<Radio />} label="Tall" />
                                <FormControlLabel value="short" control={<Radio />} label="Short" />
                            </RadioGroup>
                        </FormControl>
                    </Item>

                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align="left" component="legend">
                                Color
                            </FormLabel>
                                
                            <RadioGroup row aria label="color" defaultValue="dark" 
                            name="color" value={color} onChange={handleChange}>
                                <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                                <FormControlLabel value="light" control={<Radio />} label="Light" />
                                <FormControlLabel value="multi" control={<Radio />} label="Multi" />
                            </RadioGroup>
                        </FormControl>
                    </Item>

                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align="left" component="legend">
                                Temperament
                            </FormLabel>
                                
                            <RadioGroup row aria label="size" defaultValue="neutral" 
                            name="temperament" value={temperament} onChange={handleChange}>
                                <FormControlLabel value="neutral" control={<Radio />} label="Neutral" />
                                <FormControlLabel value="passive" control={<Radio />} label="Passive" />
                                <FormControlLabel value="agressive" control={<Radio />} label="Agressive" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{marginLeft:0}}>
                <Item>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Button fullWidth size="large" onClick={generateName} variant="contained">
                                Generate
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography align="center" variant="subtitle2">
                                Copyrignt 2022 Foster Dog Namer
                            </Typography>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </Box>
    );
};

export default Namer;
