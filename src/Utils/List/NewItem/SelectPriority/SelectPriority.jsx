import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectPriority({onChange}) {
  const classes = useStyles();
  const [state, setState] = useState('green');

  const handleChange = (event) => {
    const priority = event.target.value;
    setState(priority);
    onChange(priority);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">Приоритет</InputLabel>
      <Select
        native
        value={state.age}
        onChange={handleChange}
      >
        {/* <option aria-label="None" value="green" /> */}
        <option value={'green'} style={{backgroundColor: "green", color: "white"}}>Низкий</option>
        <option value={'yellow'} style={{backgroundColor: "yellow"}}>Средний</option>
        <option value={'red'} style={{backgroundColor: "red"}} >Высокий</option>
      </Select>
    </FormControl>
  )
}
