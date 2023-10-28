

import { getDefaultNormalizer } from '@testing-library/react'
import classes from './Input.module.css'

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id} >
            {props.label}
        </label>
        <Input {...props.input}/>
    </div>
}

export default Input