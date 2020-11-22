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

export default function RangeSlider({onChange}) {
  const classes = useStyles();
  const {state, dispatch} = useMyContext();
  const [maxValueRange, setMaxValueRange] = useState(1000);
  const [value, setValue] = useState([0, 1000]);

  useEffect(() => {
    let cost = 0;
    for (let key in state) {
      if (+state[key].cost > cost) cost = +state[key].cost;
    }
    cost = cost > 0 ? cost : maxValueRange;
    setMaxValueRange(cost);
  }, [state]);

  useEffect(() => {
      if(value[1] > maxValueRange) {
      setValue([0, maxValueRange]);
    }
  }, [maxValueRange]);

  useEffect(() => {
    onChange({min: value[0], max: value[1]});
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