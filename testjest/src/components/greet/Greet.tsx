import { GreetProps } from "components/Greet.types"


 const Greet = (props:GreetProps) => {
  return (
    <div>Hello {props.name ? props.name:"Guest"}</div>
  )
}

export default Greet