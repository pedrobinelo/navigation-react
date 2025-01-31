import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: none;
    margin-right: 5px;
    color: #FFFFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 90%;
    
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    ${({variant}) => variant !== "primary" && css`
        min-width: 150px;
        height: 33px;
        margin-top: 10px;
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`