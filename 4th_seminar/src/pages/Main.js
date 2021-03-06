import React from 'react';
import Styled from "styled-components";
import Card from '../components/main/Card';
import NewCard from "../components/main/NewCard";
import { getUserData } from '../lib/api';

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month }) => {

  const [userData, setUserData] = React.useState(null); // 초기값을 null로 설정합니다

  React.useEffect(() => { // useEffect 내부에서 api 요청을 합니다
    (async () => { // 익명 async 함수를 선언함과 동시에 실행합니다
      const data = await getUserData();
      data[year] && setUserData(data[year][month]); // 해당 연도의 데이터가 있다면, 해당 연도 월의 데이터를 저장합니다
    })();
  }, [year, month]);


  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return <Card key={index} props={data} />;
        })}
    </MainWrap>
  );
};

export default Main;