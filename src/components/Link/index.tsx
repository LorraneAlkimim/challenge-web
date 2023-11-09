import { ButtonHTMLAttributes, ReactNode } from 'react'
import { LinkProps, Link as LinkRouter } from 'react-router-dom'

import styles from './styles.module.scss'

type IButtonElement = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  asButton: true,
}

type ILinkElement = LinkProps & {
  children: ReactNode
  asButton?: false
  to: string
}

type ButtonProps = IButtonElement | ILinkElement

export function Link({ asButton = false, ...rest }: ButtonProps) {

  if (asButton) {
    const props = rest as IButtonElement

    return (
      <button {...props} className={`${styles.link} ${styles.asButton} ${props.className}`} />
    )
  }

  const props = rest as ILinkElement

  return (
    <LinkRouter {...props} className={`${styles.link} ${props.className}`} />
  )
}