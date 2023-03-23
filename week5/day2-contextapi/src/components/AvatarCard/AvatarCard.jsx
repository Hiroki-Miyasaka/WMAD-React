import React, { useContext } from 'react'
import styled from 'styled-components'
import AvatarImage from "../../assets/avatar.svg"
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import ThemeContext from '../../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


const Wrapper = styled.div`
    display: flex;
    gap: 36px;
    align-items:center;
`;
const Avatar = styled.div`
    min-width: 155px;
    height: 155px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    img{
      width: 124px;
      height: 124px;  
    }
`;
const Bio = styled.div`
    max-width: 350px;
`;
const Connect = styled.div`
    div{
        display: flex;
        gap: 18px;
        i{
            font-size: 2rem;
        }
    }
`;

const AvatarCard = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
        <Avatar theme={theme}>
            <img src={AvatarImage} alt="avatar-image" />
        </Avatar>
        <Bio>
            <h2>Biography</h2>
            <p>Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile.</p>
        </Bio>
        <Connect >
            <h2>Lets connect</h2>
            <div>
                <FontAwesomeIcon size="2x" icon={faInstagram} />    
                <FontAwesomeIcon size="2x" icon={faFacebook} />              
                <FontAwesomeIcon size="2x" icon={faTwitter} />  
            </div>
        </Connect>
    </Wrapper>
  )
}

export default AvatarCard