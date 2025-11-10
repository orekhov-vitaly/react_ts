import styled from "@emotion/styled";

// Интерфейс для пропсов стилзованного компонента BoxInfo
interface BoxInfoStyleProps {
    primary?: boolean;
}

export const BoxInfo = styled.div<BoxInfoStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-width: 300px;
    min-height: 300px;
    /* Добавление логики через props для использования разных значений background */
    /* background: rgba(6, 62, 65, 1); */
    background: ${({ primary }) =>
        primary ? "rgba(65, 56, 6, 1)" : "rgba(6, 62, 65, 1)"};
    border: 2px solid rgba(155, 24, 24, 1);
    color: white;
    font-size: ${({ primary }) =>
        primary ? "40px" : "30px"};
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

export const Image = styled.img`
    width: 90px;
`;

export const Text = styled.p``;
