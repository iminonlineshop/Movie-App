import styled from "styled-components";

const StyledMovie = styled.div`
    background-color: #4361ee;
    padding: 1rem;
    color: white;

    nav {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 2.4rem;
         margin-bottom: 1rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        color: white;
        text-decoration: none;
    }

    @media screen and (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        
        h1 {
            margin: 0;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin: 0 1rem;
        }

    }

    @media screen and (min-width: 992px){
        
    }
`;

export default StyledMovie;
