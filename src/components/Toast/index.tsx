import { Action, Root, Title } from '@radix-ui/react-toast';

import styles from './styles.module.scss';

type ToastProps = {
  title: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Toast({ title, open = true, onOpenChange }: ToastProps) {
  return (
    <Root className='ToastRoot' open={open} onOpenChange={onOpenChange}>
      <Title className={styles.title}>{title}</Title>

      <Action className="ToastAction" asChild altText="Fechar notificação">
        <button className={styles['close-button']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_839_458)">
              <path d="M10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 15.3516 4.64844 19.6875 10 19.6875C15.3516 19.6875 19.6875 15.3516 19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125ZM14.75 12.543C14.9336 12.7266 14.9336 13.0234 14.75 13.207L13.2031 14.75C13.0195 14.9336 12.7227 14.9336 12.5391 14.75L10 12.1875L7.45703 14.75C7.27344 14.9336 6.97656 14.9336 6.79297 14.75L5.25 13.2031C5.06641 13.0195 5.06641 12.7227 5.25 12.5391L7.8125 10L5.25 7.45703C5.06641 7.27344 5.06641 6.97656 5.25 6.79297L6.79688 5.24609C6.98047 5.0625 7.27734 5.0625 7.46094 5.24609L10 7.8125L12.543 5.25C12.7266 5.06641 13.0234 5.06641 13.207 5.25L14.7539 6.79688C14.9375 6.98047 14.9375 7.27734 14.7539 7.46094L12.1875 10L14.75 12.543Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_839_458">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </Action>
    </Root>
  )
}
