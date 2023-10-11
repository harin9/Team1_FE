import FlexContainer from 'components/@commons/FlexContainer';
import Text from 'components/@commons/Text';
import { NextButton, PrevButton } from 'components/@commons/iconButtons';
import { PrimitiveAtom, useAtom } from 'jotai';
import React from 'react';

interface Props {
  children: React.ReactNode;
  monthDataAtom: PrimitiveAtom<{
    year: number;
    month: number;
  }>;
}

const CalenderOutter = ({ children, monthDataAtom }: Props): JSX.Element => {
  const [nowMonth, setNowMonth] = useAtom(monthDataAtom);
  const { year, month } = { ...nowMonth };

  const monthMoveHandler = (dm: number) => {
    const newDateObj = new Date(nowMonth.year, nowMonth.month + dm, 1);
    const newObj = { year: newDateObj.getFullYear(), month: newDateObj.getMonth() };
    setNowMonth((prev) => newObj);
  };

  return (
    <>
      <FlexContainer $direction="row" $justify="space-between">
        <PrevButton onClick={() => monthMoveHandler(-1)} />
        <Text size="lg" weight="bold">{`${year}  ${month + 1} 월`}</Text>
        <NextButton onClick={() => monthMoveHandler(+1)} />
      </FlexContainer>

      <>{children}</>
    </>
  );
};

export default CalenderOutter;
