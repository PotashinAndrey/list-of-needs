import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useMyContext from '../MyContext/MyContext.jsx';

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

export default function RangeSlider({onChange}) {
  const classes = useStyles();
  const {state} = useMyContext();
  const [maxValueRange, setMaxValueRange] = useState(0);
  const [value, setValue] = useState([0, 1000]);

  useEffect(() => {
    const cost = Math.max(0, ...state.items.map(e => e.cost));
    setMaxValueRange(cost);
    setValue([0, cost]);
  }, [state]);

  useEffect(() => {
      if(value[1] > maxValueRange) {
      setValue([0, maxValueRange]);
    }
  }, [maxValueRange]);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Стоимость:
      </Typography>
      <Slider
        min={0}
        max={maxValueRange}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </div>
  );
}
