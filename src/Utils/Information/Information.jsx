import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Information(props) {
  return (
    <Box style={props.style}>
      <Typography>Название</Typography>
      <Typography>Цена</Typography>
      <Typography>Приоритет</Typography>
      <Typography>Описание</Typography  >
    </Box>
  );
}
