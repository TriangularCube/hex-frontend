import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";

import {Grid, Typography} from '@material-ui/core';

import CubeCard from './Cube/CubeCard';



const styles = theme => ({
    root: {
        //padding: theme.spacing.unit * 2,
        maxWidth: '900px',
        margin: '2vh auto'
    },
    title: {
        margin: '20px 5px 10px'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        width: '100%'
    }
});


class CubeList extends React.Component{

    render(){
        const { classes } = this.props;
        return(

            <React.Fragment>
                <Grid container spacing={0} alignItems='stretch' direction='column' justify='flex-start' className={classes.root}>

                    <Typography className={ classes.title } color="textPrimary" variant="h4" component="h2">Your Cubes</Typography>

                    <CubeCard/>
                    <CubeCard/>
                    <CubeCard/>

                </Grid>
            </React.Fragment>

        )
    }

}


CubeList.propTypes = {
    classes: PropTypes.object.isRequired
};

let withAddedStyle = withStyles(styles)(CubeList);
export default withAddedStyle;