
import { FiPhoneCall } from "react-icons/fi";
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
export default function Calls(props) {
    const navigate = useNavigate();
    const handleClick = async ()=>
    {
    navigate("/audiocall");
    }
  return (
    <div>
        <Button onClick={handleClick}>
		<FiPhoneCall/>
	</Button>
    </div>
  )
}

const Button = styled.button`
display:flex;
justify-content:center ;
align-items:center;
padding: 0.5rem;
border-radius:0.5rem ;
background-color:#9a86f3 ;
border:none ;
cursor: pointer;
svg {
    font-size:1.3rem ;
    color:#ebe7ff ;
}
`;

