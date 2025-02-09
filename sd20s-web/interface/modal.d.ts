export default interface ModalContextProps {
  show: boolean;
  setShow: (show: boolean) => void;
  close: boolean;
  open: boolean;
  setClose: (close: boolean) => void;
  setOpen: (open: boolean) => void;
  closeModal: () => void;
  openModal: () => void;
  handleCloseModal: () => void;
  ModalTemplate: React.FC<{ children: ReactNode }>;
}

type modal = {
  show: boolean;
  setShow: (show: boolean) => void;
  close: boolean;
  setClose: (close: boolean) => void;
  closeModal: () => void;
}

export { modal };