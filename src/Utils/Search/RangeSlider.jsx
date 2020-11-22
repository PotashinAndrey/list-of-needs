import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useMyContext from '../MyContext/MyContext.jsx';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const {state, dispatch} = useMyContext();
  const [maxValueRange, setMaxValueRange] = useState(0);

  useEffect(() => {
    for (let key in state) {
      if (state[key].cost > maxValueRange) {
        setMaxValueRange(state[key].cost);
      }
    }
  }, [state]);

  const [value, setValue] = useState([0, maxValueRange? Math.floor(maxValueRange/2) : 1000]);

  useEffect(() => {
    if (value < maxValueRange) return;
    setValue([value[0], maxValueRange ? Math.floor(maxValueRange/2) : 1000]);
  }, [maxValueRange]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Стоимость
      </Typography>
      <Slider
        min={0}
        max={maxValueRange? +maxValueRange : 1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}