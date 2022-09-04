import React from 'react';
import {styled } from '@mui/material/styles';
import {
    Button, Grid, FormControl, 
    FormLabel, RadioGroup, Paper,
    Radio, Box, FormControlLabel, TextField
} from '@mui/material';

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),

    textAlign: "left",
    color: theme.palette.text.secondary
}));

export default function FullWidthGrid(props) {
    const {
        handleChange, 
        params,
        generateName
    } = props;

    const {gender, name, size, color, temperament} = params;

    return (
        <Box id="start" sx={{ bgcolor: 'text.primary', flexGrow: 1, padding: 5, 
        bottom: "10vh", width: "100vw", margin: 0 }}>
            <Grid container spacing={2} justify="space-around">
                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                   
                </Grid>
                <Grid item xs={12} md={4}>
             {/* <Grid container spacing={2} justify="center" alignItems="center">
                <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}
                    <Item>
                        <FormControl component="fieldset">
                            <FormLabel align="left" component="legend">
                                Gender
                            </FormLabel>
                                
                            <RadioGroup row aria label="gender" defaultValue="female" 
                            name="gender" value={gender} onChange={handleChange}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="neutral" control={<Radio />} label="Neutral" /> 
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Grid>
                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>

                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>
                <Grid item xs={12} md={4}>
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
                </Grid>
                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>

                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>            
                <Grid item xs={12} md={4}>
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
                </Grid>
                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>

                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>                
                <Grid item xs={12} md={4}>
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
                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>

                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>                
                <Grid item xs={12} md={4}>
                <Item>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} lg={8}>
                            <TextField InputLabelProps={{shrink: true}} label="Here is your generated name:" size="small" disabled fullWidth value={name} />
                        </Grid>
                        
                        <Grid item xs={12} md={4} lg={4} align="right" >
                            <Button size="large" variant="contained" onClick= {generateName}>
                                Generate
                            </Button>
                        </Grid>                           
                    </Grid>
                </Item>
                </Grid>

                <Grid item md={4}>
                {/* <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid container direction="row" paddingLeft={5} paddingTop={5}> */}                    
                </Grid>
            </Grid>          
        </Box>
    );
};


// export default Namer;
