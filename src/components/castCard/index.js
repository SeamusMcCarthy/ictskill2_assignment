import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import PersonIcon from '@material-ui/icons/Person';
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
// import { MoviesContext } from "../../contexts/moviesContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

// export default function CastCard({ movieCast, action }) {
export default function CastCard({ movieCast}) {
  const classes = useStyles();
  // const { favorites } = useContext(MoviesContext);

  // if (favorites.find((id) => id === movie.id)) {
  //   movie.favorite = true;
  // } else {
  //   movie.favorite = false
  // }


  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      // avatar={
      //   movie.favorite ? (
      //     <Avatar className={classes.avatar}>
      //       <FavoriteIcon />
      //     </Avatar>
      //   ) : null
      // }
      title={
        <Typography variant="h5" component="p">
          {movieCast.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          movieCast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${movieCast.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <PersonIcon fontSize="medium" />
              {movieCast.character}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movieCast.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions >
        <Link to={`/movies/${movieCast.id}/disco`}>
          <Button variant="outlined" size="medium" color="primary">
            Discography
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}