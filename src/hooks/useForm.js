import { useState } from 'react'

const useForm = (initialValues = {}, initialStates = {}) => {
    const [values, setValues] = useState(initialValues)

    const [status, setStatus] = useState(initialStates)

    const handleOnChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });

        target.value === '' ? status[target.name] = false : status[target.name] = true
        setStatus(status)
    }

    const validInput = (input) => {
        return status[input]
    }

    const updateStatus = (input, value) => {
        status[input] = value
        setStatus(status)
    }

    return [values, handleOnChange, validInput, updateStatus]
}

export default useForm