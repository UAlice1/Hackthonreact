import React from 'react'

function Usergreeting() {
  
        function Usergreegint(props) {
            if (props.isLoggedIn){
                return(<h2>Welcome {props.username}</h2>)
            }
            else{
                return(<h2>Please log in to continue</h2>)
            }
            
        }
  
}

export default Usergreeting;