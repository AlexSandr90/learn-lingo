import css from './Modal.module.scss';
import ReactModal from 'react-modal';
import icons from '../../images/icons.svg';
import { Dispatch, ReactNode, SetStateAction } from 'react';

ReactModal.setAppElement('#root');

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setState }) => {
  if (!isOpen) return null;
  
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setState(false)}
      ariaHideApp={false}
    >
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={() => setState(false)}>
          <svg className={css.icon}>
            <use href={`${icons}#close`} />
          </svg>
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
