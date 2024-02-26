import React from 'react'
var today = new Date();
// var today  = new Date(2024,1,1,8);  set time
var yearString = today.getFullYear();
function Footer() {
    return (
        <React.Fragment>
            <footer>
                <p>Copyright © {yearString} </p>
            </footer>
        </React.Fragment>
    )
}
export default Footer