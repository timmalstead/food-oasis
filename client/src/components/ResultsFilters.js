import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Select, MenuItem, FormControl, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filterButton: {
    margin: "0 .25rem",
    fontSize: "12px",
    backgroundColor: "#fff",
    border: ".1em solid #000",
    color: "#000",
  },
  distanceControl: {
    margin: "0 .25rem",
    padding: 0,
    backgroundColor: "#fff",
    padding: ".25em 0 .25em .7em",
    border: ".09em solid #000",
    outline: "none",
  },
  menuItems: {
    fontSize: "12px",
    color: "#000",
  },
  controlPanel: {
    width: "100%",
    backgroundColor: "#336699",
    height: "4em",
  },
  inputHolder: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    fontSize: "12px",
    width: "25em",
    height: "2em",
    outline: "none",
    padding: ".25em",
  },
}));

const distanceInfo = [1, 2, 3, 5, 10, 20, 50]

function ResultsFilters() {
  const classes = useStyles();

  const [distanceValue, changeDistanceValue] = React.useState(0)
  const [searchValue, changeSearchValue] = React.useState("")

  return (
    <Grid container wrap="wrap-reverse" className={classes.controlPanel}>
      <Grid
        item
        container
        xs={12}
        sm={6}
        md={4}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button as={FormControl} className={classes.distanceControl}>
            <Select
              name="select-distance"
              disableUnderline
              value={distanceValue}
              onChange={(e) => changeDistanceValue(e.target.value)}
              inputProps={{
                name: "select-distance",
                id: "select-distance",
              }}
              className={classes.menuItems}
            >
              <MenuItem key={0} value={0} className={classes.menuItems}>
                DISTANCE
              </MenuItem>
              {distanceInfo.map(distance =>
                <MenuItem
                  key={distance}
                  value={distance}
                  className={classes.menuItems}>
                  {`${distance} MILE${distance > 1 ? "S" : ""}`}
                </MenuItem>)
              }
            </Select>
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.filterButton}
            onClick={() => { }}
          >
            Food Pantries
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.filterButton}
            onClick={() => { }}
          >
            Meals
          </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.filterButton}
            onClick={() => { }}
          >
            Verified
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={8} className={classes.inputHolder}>
        <input
          className={classes.input}
          placeholder={"Search Food Banks"}
          value={searchValue}
          onChange={(e) => changeSearchValue(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}

ResultsFilters.propTypes = {
  distance: PropTypes.number,
  placeName: PropTypes.string,
  isPantryCategorySelected: PropTypes.bool,
  isMealCategorySelected: PropTypes.bool,
  isVerifiedFilterSelected: PropTypes.bool,
};

export default ResultsFilters;