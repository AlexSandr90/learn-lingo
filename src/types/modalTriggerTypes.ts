import { Dispatch, SetStateAction } from 'react';

export interface ModalTriggerProps {
  isModalOpen: boolean;
  setModalState: Dispatch<SetStateAction<boolean>>;
}
