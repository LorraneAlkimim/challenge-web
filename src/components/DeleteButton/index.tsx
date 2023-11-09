import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { FaTrash } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';

import styles from './styles.module.scss';

type DeleteButtonProps = {
  onDelete: () => void
}

export function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger aria-label='Deletar' data-testid="delete-button" className={styles.trigger}>
        <FaTrash size={16} />
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.overlay} />

        <AlertDialog.Content className={styles.content}>
          <AlertDialog.Title className={styles.title}>
            Remover Venda

            <AlertDialog.Cancel>
              <RiCloseFill size={20} strokeWidth={1} />
            </AlertDialog.Cancel>
          </AlertDialog.Title>

          <AlertDialog.Description className={styles.description}>Deseja remover esta venda?</AlertDialog.Description>

          <div className={styles.actions}>
            <AlertDialog.Cancel>
              Não
            </AlertDialog.Cancel>

            <AlertDialog.Action onClick={onDelete}>
              Sim
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
