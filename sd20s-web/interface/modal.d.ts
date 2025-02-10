interface ModalContextProps {
  show: boolean;
  value: object;
  setShow: (show: boolean) => void;
  showModal: () => void;
  closeModal: () => void;
  currentContent: ReactNode;
  setCurrentContent: (content: ReactNode) => void;
  ModalTemplate: React.FC<{ children: ReactNode }>;
  setCurrentContent: (content: ReactNode) => void;

}

interface ModalTemplateProps {
  show: boolean,
  setShow : (show: boolean) => void,
  close: () => void,
  children: React.ReactNode,
  open: boolean,
  setOpen: (isActive: boolean) => void,
  currentContent: ReactNode,
  setCurrentContent: (content: ReactNode) => void,
}

type modal = {
  show: boolean;
  setShow: (show: boolean) => void;
  close: boolean;
  setClose: (close: boolean) => void;
  closeModal: () => void;
}


export { modal, ModalTemplateProps };