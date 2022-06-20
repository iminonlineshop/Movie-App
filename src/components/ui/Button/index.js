// Import Styled
import styled from "styled-components";
import { css } from "styled-components";

// Membuat component button
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;

// Akses props varian
    background-color: ${({variant, theme}) => theme.colors[variant] || theme.colors.primary};

// Props Full
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

// Props size
    ${(props) => props.size === "sm" && css`
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
    `}

    ${(props) => props.size === "md" && css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
    `}

    ${(props) => props.size === "lg" && css`
        font-size: 1.3rem;
        padding: 0.5rem 1rem;
    `}
`;


// Export button
export default Button;