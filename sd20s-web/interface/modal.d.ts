export default interface ModalContextProps {
  show: boolean;
  setShow: (show: boolean) => void;
  showModal: () => void;
  closeModal: () => void;
  ModalTemplate: React.FC<{ children: ReactNode }>;
  setCurrentContent: (content: ReactNode) => void;

}

type modal = {
  show: boolean;
  setShow: (show: boolean) => void;
  close: boolean;
  setClose: (close: boolean) => void;
  closeModal: () => void;
}

export { modal };