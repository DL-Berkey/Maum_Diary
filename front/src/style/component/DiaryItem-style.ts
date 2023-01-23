import styled from "styled-components";

export const Container = styled.article`
    width: 100%;

    padding: 0 40px;

    background: rgba(255, 255, 255, 0.6);
    border-radius: 8px;

    & + & {
        margin-top: 40px;
    }

    ${({ theme }) => theme.device.mobile} {
        padding: 0 8px;
    }
`;

export const Header = styled.div`
    ${({ theme }) => theme.common.flexCenter}
    justify-content: space-between;

    height: 96px;

    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};

    ${({ theme }) => theme.device.mobile} {
        height: 39px;
    }
`;
export const Title = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    img {
        width: 24px;
        height: 23px;
    }

    p {
        margin-left: 17.8px;

        font-size: ${({ theme }) => theme.fonts.size.basicsDesktop};
        font-weight: ${({ theme }) => theme.fonts.weight.bold};

        ${({ theme }) => theme.device.mobile} {
            margin-left: 8px;

            font-size: 10px;
        }
    }
`;
export const Meta = styled.div`
    ${({ theme }) => theme.common.flexCenter}

    div {
        ${({ theme }) => theme.common.flexCenter}

        margin-right: 8px;

        .day {
            margin-right: 16px;

            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
            color: #888888;
        }
    }

    button {
        /* margin: 7.5px 0 0 8px; */
        margin-top: 6px;

        width: 0;
        height: 0;

        border-top: 6px solid #475367;
        border-bottom: 6px solid transparent;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
    }

    ${({ theme }) => theme.device.mobile} {
        div .day {
            margin-right: 12px;
        }
    }
`;

export const Detail = styled.div`
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;

    height: 56px;

    div {
        ${({ theme }) => theme.common.flexCenter}

        & > p {
            margin-right: 8px;
        }

        p {
            font-size: ${({ theme }) => theme.fonts.size.basicsMobile};
        }
    }

    ${({ theme }) => theme.device.mobile} {
        height: 40px;
    }
`;
