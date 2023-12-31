import { Background, Box } from 'components/atoms/modal';
import React, { useCallback, useState } from 'react';

const useModal = () => {
  const [isOn, setIsOn] = useState(false);
  const modalOnHandler = useCallback(() => {
    setIsOn((prev) => true);
  }, [isOn]);

  const modalOffHandler = useCallback(() => {
    setIsOn((prev) => false);
  }, [isOn]);

  interface ModalProps {
    children: React.ReactNode | React.ReactNode[] | string;
  }

  const ModalComponent = ({ children }: ModalProps): JSX.Element => {
    return isOn ? (
      <Background>
        <Box>{children}</Box>
      </Background>
    ) : (
      <></>
    );
  };

  return { isOn, modalOnHandler, modalOffHandler, ModalComponent };
};

export default useModal;
