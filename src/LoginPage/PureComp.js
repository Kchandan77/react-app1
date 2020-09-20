import React, { Component } from 'react'

const Temp = (props) =>{
return(<div>{props.val}</div>)
}
class PureComp extends Component {
  state={
    val:1
  }
  componentDidMount(){
    setInterval( () => {
      this.setState(() =>{
        return {val:1}
      })
    },2000)
  }
  render() {
    console.log('render app')
    return (
      <div>
        <Temp val={this.state.val} />
      </div>
    )
  }
}

export default PureComp
