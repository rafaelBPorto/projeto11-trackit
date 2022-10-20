import styled from "styled-components";

export const ContainerIdentificacao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
    
  img{
    width: 180px;
    margin-top: 60px;
    margin-bottom: 33px;
    }

  form {
    /* margin: 0 auto; */
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    }

  input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing:border-box;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    ::placeholder{
        color: #DBDBDB;
    }
  }

  button{
    border: none;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;
  }

  h1{
    margin-top: 25px;
    font-weight: 400;
    font-size: 13.976px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
  }
`;
