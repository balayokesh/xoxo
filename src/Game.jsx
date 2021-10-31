import { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, CssBaseline, AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const useStyles = makeStyles({
	border: {
        border: '1px solid black',
    },
    gameBoard: {
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center'
    },
    gameBoxes: {
        width: '70px',
        border: '1px solid black',
        textAlign: 'center',
        padding: '5px',
        fontSize: '35px',
    }
});

const Game = () => {
    const classes = useStyles();
    var [count, setCount] = useState(1);

    const handleClick = (event) => {
        let currentPlayer = (count % 2 === 0) ? 'o' : 'x';
        let a00 = document.getElementById('a00').value;
        let a01 = document.getElementById('a01').value;
        let a02 = document.getElementById('a02').value;
        let a10 = document.getElementById('a10').value;
        let a11 = document.getElementById('a11').value;
        let a12 = document.getElementById('a12').value;
        let a20 = document.getElementById('a20').value;
        let a21 = document.getElementById('a21').value;
        let a22 = document.getElementById('a22').value;
        document.getElementById(event.target.id).innerHTML = currentPlayer;

        setCount(count + 1);
    }

    const reset = () => {
        window.location.href = '/game';
    }

    return (
        <>
            <CssBaseline />
            <AppBar position='relative' color='transparent'>
                <Toolbar>
                    <Button variant='contained'>
                        <Link to='/'>Home</Link>
                    </Button>
                    <Typography variant='h3'>XOXO</Typography>
                </Toolbar>
            </AppBar>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                This is player <strong>{(count % 2 === 0) ? 'o' : 'x'}'s</strong> turn
            </Alert>
            <Container className={classes.gameBoard}>
                <div>
                    <p className={classes.gameBoxes} id='a00' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a10' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a20' onClick={handleClick}>_</p>
                </div>
                
                <div>
                    <p className={classes.gameBoxes} id='a01' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a11' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a21' onClick={handleClick}>_</p>
                </div>

                <div>
                    <p className={classes.gameBoxes} id='a02' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a12' onClick={handleClick}>_</p>
                    <p className={classes.gameBoxes} id='a22' onClick={handleClick}>_</p>
                </div>
            </Container>
            <Button variant='contained' color='secondary' onClick={reset}>
                Reset
            </Button>
        </>
    )
}

export default Game;
