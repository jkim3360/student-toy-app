import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'

import './App.css'

class App extends Component {
  state = {
    students: [],
    selectedStudent: null
  }

  componentDidMount() {
    axios.get('http://localhost:3000/students').then(response => {
      // console.log(response)
      this.setState({
        students: response.data.students
      })
    })
  }

  selectStudent = student => {
    this.setState({
      selectedStudent: student
    })
  }

  students = () => {
    return (
      <div className="students-ctn">
        {this.state.students.map(student => (
          <div key={student.id} className="student-card">
            <Link
              to={`/students/${student.id}`}
              onClick={() => this.selectStudent(student)}
            >
              {student.name}
            </Link>
          </div>
        ))}
      </div>
    )
  }

  student = () => {
    const student = this.state.selectedStudent
    return (
      <div className="student-page">
        <div className="image-cropper">
          <img alt={student.name} src={student.photo} />
        </div>
        <h1>{student.name}</h1>
        <p>{student.description}</p>
        <a href={student.link}>Connect</a>
      </div>
    )
  }

  render() {
    console.log(this.state.selectedStudent)
    return (
      <Router>
        <div className="main-container">
          <div className="header-ctn">
            <Link exact="true" to="/">
              Course App
            </Link>
            <h3>Find the student for you.</h3>
          </div>
          <Switch>
            <Route exact path="/" render={this.students} />
            <Route exact path="/students/:id" render={this.student} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
