import './Exercise.css'
const Exercise = () => {
    console.log()
    const style_header = {
        color: "white", 
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return(
        <div style={{textAlign:'center'}}>
            <h1 style={style_header}>This is a header </h1>
            <div class="para">This is a paragraph</div>
            <h6 href="#">This is a Link</h6>
            <h1>This is a form</h1>
            <form>
                <label>Enter your name:</label><br></br>
                <input type='text' name="text"/>
            </form>
            <h5>Here is an image:</h5>
            <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png" alt="descr"/>
            <h6>This is a list</h6>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>

        </div>
   )
}

export default Exercise