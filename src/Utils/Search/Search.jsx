import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RangeSlider from './RangeSlider.jsx';
import SelectPriority from '../List/NewItem/SelectPriority/SelectPriority.jsx';

export default function Search(props) {
  return (
    <Box style={props.style}>
      <Typography>Поиск: </Typography>
      <TextField type="text" name="" id=""/>
      <SelectPriority></SelectPriority>  {/* onChange={setPriority}  */}
      <RangeSlider></RangeSlider>
    </Box>
  );
}
