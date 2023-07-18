import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(8, 5, 5, 0.356);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 10%;
  width: 400px;
  background-color: white;
  border-radius: 3px;
  padding: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const BtnList = styled.ul`
  display: flex;
  gap: 15px;
`;

const FilterListContainer = styled.div`
  padding: 20px;
  border: 1px solid;
  width: 350px;
  margin: 0 auto;
`;

export { Overlay, ModalWindow, BtnList, FilterListContainer };
