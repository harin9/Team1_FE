import PageContainer from 'components/@commons/PageContainer';
import DoneSection from 'pages/admin/AddGroupPage/DoneSection';
import React, { useState } from 'react';
import FormSection from './FormSection';
import { useQuery } from '@tanstack/react-query';
import { getMyInfo } from 'apis/userInfo';

const AddGroupPage = (): JSX.Element => {
  // 해당 매니저가 이미 그룹을 가지고 있는 경우 : 리다이렉트 "/"

  // const { data: myInfo } = useQuery(['myInfo'], getMyInfo);
  const [isDone, setIsDone] = useState(false);

  return (
    <PageContainer withoutHeader withoutBottonBar padding="0 40px" gap="52px">
      {!isDone && <FormSection doneStateHandler={() => setIsDone((prev) => true)} />}
      {isDone && <DoneSection />}
    </PageContainer>
  );
};

export default AddGroupPage;