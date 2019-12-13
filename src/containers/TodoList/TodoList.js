import React from 'react'
import ListCard from '../../components/listCard/listCard'
import ListItem from '../../components/listItem/listItem'
import Input from '../../components/input/input'

class TodoList extends React.Component {
    state = {
      todolists: [],
      taskTitle: ''
    }

    handleChange = event => {
      this.setState({ taskTitle: event.target.value })
    }

    handleAddTask = () => {
      const listItem = this.state.taskTitle
      const todolists = this.state.todolists
      todolists.push(listItem)
      this.setState({ todolists: todolists })
    }

    handleDeleteTask = () => {

    }

    handleDoneTask = () => {

    }

    render () {
      return (
        <main>
          <article>
            <h1>Créer une TodoList</h1>
            <Input title="ajouter une tache" change={(e) => this.handleChange(e)} btnClicked={this.handleAddTask}/>
            <ListCard>
              {this.state.todolists &&
                this.state.todolists.map((items, index) => (
                  <ListItem key={index} task={items} />
                ))
              }
            </ListCard>
          </article>
        </main>
      )
    }
}

export default TodoList
