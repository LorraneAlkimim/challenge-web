import { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type ISelectElement = {
  label?: string
  id: string
  asSelect: true,
  options: string[]
} & SelectHTMLAttributes<HTMLSelectElement>

type IInputElement = {
  label?: string
  id: string
  asSelect?: false
} & InputHTMLAttributes<HTMLInputElement>

type InputProps = IInputElement | ISelectElement

export function Input({ label, asSelect = false, ...rest }: InputProps) {
  if (asSelect) {
    const props = rest as ISelectElement

    return (
      <div className={styles.wrapper}>
        {label ? <label htmlFor={props.id}>{label}</label> : null}

        <select data-testid="input-select" {...props}>
          {props.placeholder ? (
            <option value="">{props.placeholder}</option>
          ) : null}

          {props.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    )
  }

  const props = rest as IInputElement

  return (
    <div className={styles.wrapper}>
      {label ? <label htmlFor={props.id}>{label}</label> : null}

      <input data-testid="input-default" type='text' {...props} />
    </div>
  )
}
