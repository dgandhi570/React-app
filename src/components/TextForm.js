import React, {useState} from 'react'

export default function TextForm(props) {
    
    const fire = () => {
        console.log("thasdfais")
        let btext = text.toUpperCase()
        setText(btext)
    }
    const unfire = () => {
        console.log("thasdfais")
        let btext = text.toLowerCase()
        setText(btext)
    }
    const onChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the f text")
  return (
    <>
    <div className='container'>
        <form>
        <h3>{props.heading}</h3>
        <br/>
        <div className="form-group">
            
            <textarea type="text" className="form-control" id="mybox" onChange={onChange} placeholder="Bla Bla Bla" value={text}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your content with anyone else.</small>
        </div>
        </form>
        <button  className="btn btn-secondary my-2" onClick={fire} >Uppercase it</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={unfire}>Lowercase it</button>
    </div>
    <div className='container my-5'>
        <h2>Analytics:</h2>
        <hr/>
        Your Text have <b>{text.length}</b> characters and <b>{text.split(" ").length}</b> Words<br/>
        Max. Reading Time: <b>{text.split(" ").length * 0.008} Minutes</b><br/><br/>
        <h2>Preview</h2> {text}
    </div>
    </>
  )
}
