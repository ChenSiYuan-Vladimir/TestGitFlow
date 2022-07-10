import React, { useEffect } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addPet, getPet } from "./dao/dao"
import PropTypes from 'prop-types'


 export class TestApp  {
  static PropTypes = {
    testData: PropTypes.object
  }
    
  render(){
    console.log(this.props.testData)
    return (
      <div></div>
    )
  }
}

const mapStateToProps = (state,props) => {
  const testData = getPet(state)
  return {
    testData
  }
}

const mapDispatchToProps = (dispatch) => {
  bindActionCreators(
    {
      addPet:addPet
    },
    dispatch
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(TestApp)
