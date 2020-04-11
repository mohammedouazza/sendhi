import {useState} from 'react'

export const useValue = (val: any) => {
    const [value, setValue] = useState(val)
    const [error, setError] = useState(false)

    const handleChange = (event: any) => {
        const val = event.currentTarget.value
        setValue(val)
        handleError(!val ? true: false)
    }
    //console.log(error)
    const handleError = (val: boolean) => {
        setError(val)
    }
    //console.log(value)

    return {
        value,
        handleChange,
        error,
        handleError
    }
}

export const useError = (val: any) => {
    const [value, setValue] = useState(val)

    const handleChange = (val: any) => {
        setValue(val)
    }
    //console.log(value)

    return {
        value,
        handleChange
    }
}