import styled from "styled-components";

const StyledMovie = styled.div`
   margin: 5rem auto;
   padding: 1rem;

   section {
    display: flex;
    flex-direction: column;
    text-align: center;
   }

   .left {
        margin-bottom: 1rem;
    }

    .right {
        margin-bottom: 1rem;
        padding-left: 80px;
        padding-right: 50px;
    }

   h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
   }

   h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
   }

   p {
    color: #64748b;
    margin-bottom: 1rem;
   }

   img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
        padding-left: auto;
   }

   Button {
     text-decoration: none;
   }

   @media screen and (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
}

/* Large Screen */
@media screen and (min-width: 992px) {
    max-width: 1200px;

  section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .left {
    flex-basis: 40%;
  }

  .right {
    flex-basis: 60%;
  }
}


`;

export default StyledMovie;