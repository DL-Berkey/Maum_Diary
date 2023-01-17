import { css } from "styled-components";
import { transparentize } from "polished";

export const diaryContnet = css`
    border-radius: 10px;
    background: ${transparentize(0.5, "#fff")};
    backdrop-filter: saturate(180%) blur(2px);
`;

export const scrollbar = css`
    overflow: auto;
    padding-right: 0.5rem;

    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.main};
    }
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.greyBorder};
    }
`;
