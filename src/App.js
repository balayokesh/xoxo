import { makeStyles, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
	mainDiv: {
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	innerDiv: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
	},
	link: {
		color: '#fff',
		textDecoration: 'none',
	}
});

const App = () => {
	const classes = useStyles();
	return (
		<Container className={classes.mainDiv}>
			<Container className={classes.innerDiv}>
				<Typography variant='h3'>
					Let's play XoXo
				</Typography>
				<Button variant='contained' onClick={()=>{window.location.href = '/game'}}>
					Play Game
				</Button>
			</Container>
		</Container>
	);
}

export default App;
