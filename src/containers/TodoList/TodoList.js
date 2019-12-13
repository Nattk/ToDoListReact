import React from 'react'
import ListCard from '../../components/listCard/listCard'
import ListItem from '../../components/listItem/listItem'
import Input from '../../components/input/input'
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
          console.log(err)
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
          console.log(err)
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
      console.log(item)
      axios.put(`http://localhost:4000/Todos/${id}`, item[0])
        .then(item => {
          console.log(item)
        })
        .catch(err => {
          console.log(err)
        })
    }

    render () {
      return (
        <main>
          <article>
            <h1>Créer une TodoList</h1>
            <Input title="ajouter une tache" change={(e) => this.handleChange(e)} btnClicked={(index) => this.handleAddTask(index)}/>
            <ListCard>
              {this.state.todolists &&
                this.state.todolists.map((item) => (
                  <ListItem key={item.id} task={item.title} delete={() => this.handleDeleteTask(item.id)} done={() => this.handleDoneTask(item.id)}/>
                ))
              }
            </ListCard>
          </article>
        </main>
      )
    }
}

export default TodoList
