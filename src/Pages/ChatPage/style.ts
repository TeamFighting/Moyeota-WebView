import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../Constants/constant';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: ${HEADER_HEIGHT}px;
    justify-content: space-between;
    padding: 0 4%;
`;
export const Icon = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Body = styled.div`
    height: 350px;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    display: flex;
`;
export const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 76px;
    height: 76px;
    border-radius: 100%;
    border: 10px solid #f5f6f8;
    object-fit: cover;
    overflow: hidden;
`;
export const ProfileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const ProfileName = styled.div`
    color: var(--Gray-Text-3, #343434);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%; /* 25.12px */
    letter-spacing: -0.54px;
    text-align: center;
    margin-top: 14px;
`;
export const Title = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 157%; /* 34.54px */
    margin-top: 20px;
`;
export const Description = styled.div`
    color: var(--Gray-Text-2, #7e7e7e);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 157%; /* 21.98px */
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;
export const Bottom = styled.div`
    position: fixed;
    bottom: 0;
    height: 78px;
    width: 100vw;
`;
export const InputWrapper = styled.div`
    padding: 0 4%;
    box-sizing: border-box;
    border: 2px solid #f5f6f8;
    border-radius: 99px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
export const StyledInput = styled.input`
    background-color: #5d5d5d;
    width: 100%;
    height: 42px;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0 24px;

    box-sizing: border-box;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.54px;
    color: #5d5d5d;
    background-color: white;
    /* border-radius: 12px; */
`;