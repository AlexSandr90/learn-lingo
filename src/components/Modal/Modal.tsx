import css from './Modal.module.scss';
import ReactModal from 'react-modal';
import icons from '../../images/icons.svg';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setState }) => {
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
