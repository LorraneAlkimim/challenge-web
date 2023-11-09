import * as Dialog from '@radix-ui/react-dialog';

import { Link } from '../Link';

import styles from './styles.module.scss';

export function MenuHamburger() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label='Menu Hamburger'
          className={styles.trigger}
          data-testid="menu-hamburger"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
            <path d="M1.34375 4.44531H21.6562C22.0877 4.44531 22.4375 4.09556 22.4375 3.66406V1.71094C22.4375 1.27944 22.0877 0.929688 21.6562 0.929688H1.34375C0.912256 0.929688 0.5625 1.27944 0.5625 1.71094V3.66406C0.5625 4.09556 0.912256 4.44531 1.34375 4.44531ZM1.34375 12.2578H21.6562C22.0877 12.2578 22.4375 11.9081 22.4375 11.4766V9.52344C22.4375 9.09194 22.0877 8.74219 21.6562 8.74219H1.34375C0.912256 8.74219 0.5625 9.09194 0.5625 9.52344V11.4766C0.5625 11.9081 0.912256 12.2578 1.34375 12.2578ZM1.34375 20.0703H21.6562C22.0877 20.0703 22.4375 19.7206 22.4375 19.2891V17.3359C22.4375 16.9044 22.0877 16.5547 21.6562 16.5547H1.34375C0.912256 16.5547 0.5625 16.9044 0.5625 17.3359V19.2891C0.5625 19.7206 0.912256 20.0703 1.34375 20.0703Z" fill="#2B7D83" />
          </svg>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          <nav>
            <ul>
              <li>
                <Link to='/'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <g clipPath="url(#clip0_830_113)">
                        <path d="M14.9736 11.0977L14.1914 6.41016C14.1152 5.95898 13.7256 5.62793 13.2656 5.62793H6.09375V3.75293H8.90625C9.16406 3.75293 9.375 3.54199 9.375 3.28418V0.46875C9.375 0.210938 9.16406 0 8.90625 0H1.40625C1.14844 0 0.9375 0.210938 0.9375 0.46875V3.28125C0.9375 3.53906 1.14844 3.75 1.40625 3.75H4.21875V5.625H1.73145C1.27441 5.625 0.881836 5.95605 0.805664 6.40723L0.0234375 11.0947C0.00585938 11.1973 -0.00292969 11.2998 -0.00292969 11.4023V14.0625C-0.00292969 14.5811 0.416016 15 0.93457 15H14.0596C14.5781 15 14.9971 14.5811 14.9971 14.0625V11.4053C15 11.3027 14.9912 11.2002 14.9736 11.0977ZM8.20312 7.26562C8.20312 7.00781 8.41406 6.79688 8.67188 6.79688H9.14062C9.39844 6.79688 9.60938 7.00781 9.60938 7.26562V7.73438C9.60938 7.99219 9.39844 8.20312 9.14062 8.20312H8.67188C8.41406 8.20312 8.20312 7.99219 8.20312 7.73438V7.26562ZM7.26562 9.14062H7.73438C7.99219 9.14062 8.20312 9.35156 8.20312 9.60938V10.0781C8.20312 10.3359 7.99219 10.5469 7.73438 10.5469H7.26562C7.00781 10.5469 6.79688 10.3359 6.79688 10.0781V9.60938C6.79688 9.35156 7.00781 9.14062 7.26562 9.14062ZM6.32812 6.79688C6.58594 6.79688 6.79688 7.00781 6.79688 7.26562V7.73438C6.79688 7.99219 6.58594 8.20312 6.32812 8.20312H5.85938C5.60156 8.20312 5.39062 7.99219 5.39062 7.73438V7.26562C5.39062 7.00781 5.60156 6.79688 5.85938 6.79688H6.32812ZM2.34375 2.34375V1.40625H7.96875V2.34375H2.34375ZM3.51562 8.20312H3.04688C2.78906 8.20312 2.57812 7.99219 2.57812 7.73438V7.26562C2.57812 7.00781 2.78906 6.79688 3.04688 6.79688H3.51562C3.77344 6.79688 3.98438 7.00781 3.98438 7.26562V7.73438C3.98438 7.99219 3.77344 8.20312 3.51562 8.20312ZM3.98438 10.0781V9.60938C3.98438 9.35156 4.19531 9.14062 4.45312 9.14062H4.92188C5.17969 9.14062 5.39062 9.35156 5.39062 9.60938V10.0781C5.39062 10.3359 5.17969 10.5469 4.92188 10.5469H4.45312C4.19531 10.5469 3.98438 10.3359 3.98438 10.0781ZM10.3125 13.3594C10.3125 13.4883 10.207 13.5938 10.0781 13.5938H4.92188C4.79297 13.5938 4.6875 13.4883 4.6875 13.3594V12.8906C4.6875 12.7617 4.79297 12.6562 4.92188 12.6562H10.0781C10.207 12.6562 10.3125 12.7617 10.3125 12.8906V13.3594ZM11.0156 10.0781C11.0156 10.3359 10.8047 10.5469 10.5469 10.5469H10.0781C9.82031 10.5469 9.60938 10.3359 9.60938 10.0781V9.60938C9.60938 9.35156 9.82031 9.14062 10.0781 9.14062H10.5469C10.8047 9.14062 11.0156 9.35156 11.0156 9.60938V10.0781ZM12.4219 7.73438C12.4219 7.99219 12.2109 8.20312 11.9531 8.20312H11.4844C11.2266 8.20312 11.0156 7.99219 11.0156 7.73438V7.26562C11.0156 7.00781 11.2266 6.79688 11.4844 6.79688H11.9531C12.2109 6.79688 12.4219 7.00781 12.4219 7.26562V7.73438Z" fill="#2B7D83" />
                      </g>
                      <defs>
                        <clipPath id="clip0_830_113">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    Vendas
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="#DADADA" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link to='/commissions'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <g clipPath="url(#clip0_830_119)">
                        <path d="M12.6562 0H2.34375C1.59375 0 0.9375 0.65625 0.9375 1.40625V13.5938C0.9375 14.3438 1.59375 15 2.34375 15H12.6562C13.4062 15 14.0625 14.3438 14.0625 13.5938V1.40625C14.0625 0.65625 13.4062 0 12.6562 0ZM4.6875 12.75C4.6875 12.9375 4.5 13.125 4.3125 13.125H3.1875C3 13.125 2.8125 12.9375 2.8125 12.75V11.625C2.8125 11.4375 3 11.25 3.1875 11.25H4.3125C4.5 11.25 4.6875 11.4375 4.6875 11.625V12.75ZM4.6875 9C4.6875 9.1875 4.5 9.375 4.3125 9.375H3.1875C3 9.375 2.8125 9.1875 2.8125 9V7.875C2.8125 7.6875 3 7.5 3.1875 7.5H4.3125C4.5 7.5 4.6875 7.6875 4.6875 7.875V9ZM8.4375 12.75C8.4375 12.9375 8.25 13.125 8.0625 13.125H6.9375C6.75 13.125 6.5625 12.9375 6.5625 12.75V11.625C6.5625 11.4375 6.75 11.25 6.9375 11.25H8.0625C8.25 11.25 8.4375 11.4375 8.4375 11.625V12.75ZM8.4375 9C8.4375 9.1875 8.25 9.375 8.0625 9.375H6.9375C6.75 9.375 6.5625 9.1875 6.5625 9V7.875C6.5625 7.6875 6.75 7.5 6.9375 7.5H8.0625C8.25 7.5 8.4375 7.6875 8.4375 7.875V9ZM12.1875 12.75C12.1875 12.9375 12 13.125 11.8125 13.125H10.6875C10.5 13.125 10.3125 12.9375 10.3125 12.75V7.875C10.3125 7.6875 10.5 7.5 10.6875 7.5H11.8125C12 7.5 12.1875 7.6875 12.1875 7.875V12.75ZM12.1875 5.25C12.1875 5.4375 12 5.625 11.8125 5.625H3.1875C3 5.625 2.8125 5.4375 2.8125 5.25V2.25C2.8125 2.0625 3 1.875 3.1875 1.875H11.8125C12 1.875 12.1875 2.0625 12.1875 2.25V5.25Z" fill="#2B7D83" />
                      </g>
                      <defs>
                        <clipPath id="clip0_830_119">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    Comissões
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M17.2021 13.3301L10.5615 19.9707C10.1025 20.4297 9.36035 20.4297 8.90625 19.9707L7.80273 18.8672C7.34375 18.4082 7.34375 17.666 7.80273 17.2119L12.5098 12.5049L7.80273 7.79785C7.34375 7.33887 7.34375 6.59668 7.80273 6.14258L8.90137 5.0293C9.36035 4.57031 10.1025 4.57031 10.5566 5.0293L17.1973 11.6699C17.6611 12.1289 17.6611 12.8711 17.2021 13.3301Z" fill="#DADADA" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}