import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';

export default function SideLeftMenu(){
  const [block, setBlock] = React.useState(false)
  const showSideLeft = () => {
    document.getElementById("sidebar-left").style.left = block ? "0px" : "-400px"
    document.getElementById("icon").style.left = block ? "50px" : "-200px";
    document.getElementById("shadow-div").style.display = block ? "block" : "none"
    setBlock(!block)
  }
  React.useEffect(()=> {
    document.getElementById("shadow-div").onclick = () => {
      setBlock(!block)
      document.getElementById("sidebar-left").style.left = "-400px"
      document.getElementById("icon").style.left = "-200px";
      document.getElementById("shadow-div").style.display =  "none"
      }
      
    document.querySelectorAll("#options").forEach(item=> item.onclick = () =>{
      setBlock(!block)
      document.getElementById("sidebar-left").style.left = "-400px"
      document.getElementById("icon").style.left = "-200px";
      document.getElementById("shadow-div").style.display =  "none"
    })
    },[block])
  return<>
    <MenuIcon onClick={showSideLeft} id="icon"/>
  </>
}