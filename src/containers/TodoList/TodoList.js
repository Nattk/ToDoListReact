import React from 'react'
import ListCard from '../../components/listCard/listCard'
import ListItem from '../../components/listItem/listItem'
import Input from '../../components/input/input'
import './TodoList.scss'
import axios from 'axios'

class TodoList extends React.Component {
    state = {
      todolists: [],
      taskTitle: ''
    }

    componentDidMount () {
      axios.get('http://localhost:4000/Todos').then(todos => {
        this.setState({ todolists: todos.data })
      })
        .catch(err => {
          alert(err)
        })
    }

    makeId = () => {
      return Math.random().toString(36).substr(2, 16)
    }

    handleChange = event => {
      this.setState({ taskTitle: event.target.value })
    }

    handleAddTask = () => {
      const item = { id: this.makeId(), title: this.state.taskTitle, done: false }
      axios.post('http://localhost:4000/Todos', item).then(todos => {
        return axios.get('http://localhost:4000/Todos')
      }).then(todolist => {
        this.setState({ todolists: todolist.data })
      })
        .catch(err => {
          alert(err)
        })
    }

    handleDeleteTask = (id) => {
      axios.delete(`http://localhost:4000/Todos/${id}`)
        .then(response => {
          return axios.get('http://localhost:4000/Todos/')
        })
        .then(response => {
          this.setState({ todolists: response.data })
        })
    }

    handleDoneTask = (id) => {
      const item = this.state.todolists
        .filter(item => item.id === id)
        .map(item => {
          item.done = !item.done
          return item
        })
      axios.put(`http://localhost:4000/Todos/${id}`, item[0])
        .then(item => {
          return axios.get('http://localhost:4000/Todos/')
        })
        .then(response => {
          this.setState({ todolists: response.data })
        })
        .catch(err => {
          alert(err)
        })
    }

    render () {
      return (
        <main>
          <article className="TodoList">
            <h1>Créer une TodoList</h1>
            <ListCard>
              <Input title="ajouter une tache" change={(e) => this.handleChange(e)} btnClicked={(index) => this.handleAddTask(index)}/>
              {this.state.todolists &&
                this.state.todolists.map((item) => (
                  <ListItem key={item.id} task={item.title} state={item.done} delete={() => this.handleDeleteTask(item.id)} done={() => this.handleDoneTask(item.id)}/>
                ))
              }
            </ListCard>
          </article>
        </main>
      )
    }
}

export default TodoList
