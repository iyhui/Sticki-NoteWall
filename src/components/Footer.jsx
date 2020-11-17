import React from 'react';

function Footer(){
    const year = new Date().getFullYear();
    console.log(year);

return <footer>
<p>
Copyright © {new Date().getFullYear()}
</p>
</footer>
}

export default Footer;