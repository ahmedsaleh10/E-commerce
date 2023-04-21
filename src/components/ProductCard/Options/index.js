import styles from './style.module.css'
import React from 'react'
import Radio from '@mui/material/Radio';


const Options
 = () => {


    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });


  return (
    <div className={styles.flex}>
        
        <Radio
        {...controlProps('a')}
        sx={{
          color: `#f54197`,
          '&.Mui-checked': {
            color: `#f54197`,
          },
        }}
      />
         <Radio
        {...controlProps('b')}
        sx={{
          color: `#00a0d7`,
          '&.Mui-checked': {
            color: `#00a0d7`,
          },
        }}
      />

    </div>
  )
}

export default Options
