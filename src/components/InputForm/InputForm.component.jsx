import classes from './InputForm.scss'

function InputForm({ handleChange, label, value }) {
    return (
        <div className={classes.inputFormContainer}>
            <input onChange={handleChange} value={value} />
            <label>{label}</label>
        </div>
    )
}

export {
    InputForm
}