import Devi from './device_insync.json';
import React from 'react';
import { MenuList } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';



    
function Display3(){
    console.log("device")
    return(
        <div style={{width:"100%"}}>
                {Devi.filter((val)=>{
                    if (val.device_name=='routerA'){
                        return val
                    }

                }).map((disData)=>(
                    
                    <MenuList>
                        <MenuItem><img src ={disData.image}/></MenuItem>
                        <MenuItem>Device Name:<button class='abb'>{disData.device_name}</button></MenuItem>
                        <MenuItem>Device Catagory:<button class='abcd'>{disData.catagory}</button></MenuItem>
                        <MenuItem>Device ID:<button class='abcde'>{disData.UUID}</button></MenuItem>
                        <MenuItem >Device Status:<button class='aaaa'>{disData.device_status}</button></MenuItem>
                        
                        <MenuItem style={{whiteSpace: 'normal'}} >
                            <Typography  style={{width:"30%" , wordWrap:"break-word"}}>
                                device Description:{disData.device_description}
                            </Typography>
                            
                        </MenuItem>   
                    </MenuList>
                ))}
        </div>
    )
}




export default Display3;