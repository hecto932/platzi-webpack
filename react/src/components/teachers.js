import React, { Component } from 'react'
import Teacher from './teacher'

class Teachers extends Component {
  render () {
    return (
      <div>
        <ul className="Teachers">
          {this.props.data.teachers.map((teacherData, index) => {
            return <Teacher key={index} {...teacherData} />
          })}
        </ul>
      </div>
    )
  }
}

export default Teachers