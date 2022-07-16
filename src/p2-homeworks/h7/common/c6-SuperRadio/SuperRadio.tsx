import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import styles from "./radio.module.css"



type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(value)
    }



    const mappedOptions: any[] = options ? options.map((o, i) => (  // map options with key
        <label key={name + '-' + i} className={o === value ? styles.radio : styles.labels}>
            {/*className={o === value ? styles.radio : s.label}*/}
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={value}
                onChange={onChangeCallback}
                className={styles.Input}
                // name, checked, value, onChange
            />
            {o}

        </label>

    ) ) : []
    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
