import styled from "styled-components";


export const Container = styled.header`

    a{
        text-decoration: none;
    }

    display: flex;
    justify-content: space-between;
    padding: 34px 47px 0 68px;



    >div:nth-of-type(2){
        display: flex;
        gap: 30px;
        align-items: center;
       
        button{
            height: 40px;
            border: none;
            border-radius: 20px;
            padding:9px 20px; 
            background-color:#F4F4F4; 
            
            a{
                color: #2D2D2D;
            }


        }

        button:hover{
            background-color: #2FDBBC;  
            a{
                color: white;
            }
        }

    }


`

export const LogoButton = styled.button`
    :hover{
        transform: scale(1.2);
    }
    
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s;

    >div{
        height: 53px;
        display: flex;
        align-items: center;
        justify-content: center;

        span{
            font-size: 44px;
            font-weight: 400;
        }
        
        span:nth-of-type(1){
            color: #2D2D2D;
        }

        span:nth-of-type(2){
            color: #2FDBBC;
        }

    }

`


export const LinksContainer = styled.div`
    
    display: flex;
    gap: 60px;
    height: 50px;
    align-items: center;

    a{
        color: #2D2D2D;
        font-size: 24px;
        font-weight: 400;
        line-height: 100%;
    }

    a:hover{
        font-weight: 700;
        color: #2FDBBC;
    }
`

export const AuthLinksContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
       
        button{
            height: 40px;
            border: none;
            border-radius: 20px;
            padding:9px 20px; 
            background-color:#F4F4F4; 
            
            a{
                color: #2D2D2D;
            }
        }

        button:hover{
            background-color: #2FDBBC;  
            a{
                color: white;
            }
        }
`