import { useState } from "react";

function Mybutton(){
    const[count, setCount] = useState(0);

    function handleclick(){
        setCount(count +1);
    }

    return(
        <button onClick={handleclick}>
            Haz un clic {count}
        </button>
    )
}

export default Mybutton;