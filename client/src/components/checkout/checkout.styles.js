import styled from 'styled-components';

export const CheckoutPage = styled.div`
    width: 80%;
    min-height: 90vh;
    display: grid;
    align-items: center;
    margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 1fr 3fr 3fr 3fr 1fr;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    
    text-transform: capitalize;
    padding-left: 0.9rem;

    &:last-child {
    width: 8%;
    }
`

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 2rem;
    @media screen and (max-width: 800px) {
        font-size: 1.4rem;
    }
`

export const Warning = styled.div`
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
    color: red;
`