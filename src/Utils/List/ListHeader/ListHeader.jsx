import React from 'react';
import { styles } from './styles.js';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Item() {
  return (
    <Box style={styles.Main}>
      <Typography>Номер</Typography>
      <Typography>Название</Typography>
      <Typography>Приоритет</Typography>
      <Typography>Цена</Typography>
    </Box>
  );
}
