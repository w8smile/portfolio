import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";



 export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>

                })}

            </ul>

        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  
  ul{
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
   
`

