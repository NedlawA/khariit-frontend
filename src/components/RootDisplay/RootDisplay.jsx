import "./RootDisplay.css"

const RootDisplay = props => {
  return (
    <div>
        {props.rootDisplay.letters}
        {props.rootDisplay.engLetters}
    </div>
  )
}

export default RootDisplay