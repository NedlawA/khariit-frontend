import "./RootDisplay.css"


const RootDisplay = props => {
  return (
    <div className="table">
        
        <section className="column engLetters">
            {props.engLetters}
        </section>
        <section className="column arRoot">
            {props.arabicRoot}
        </section>
        <section>
            <button onClick={() => props.onDelete(props.wordId)}>Delete</button>
        </section>
    </div>
  )
}

export default RootDisplay