import { View, Image, Text } from 'react-native';
import { styles } from './styles'
import { InputBar } from '@/app/components/InputBar'
import { EmptyList } from '@/app/components/EmptyList';
import { TaskCounter } from '@/app/components/TaskCounter'
import { Task } from '@/app/components/Task';
import { useState } from "react"

export function Home() {
  const tasks: string[] = []
  const [description, setDescription] = useState('')
  const [taskList, setNewTask] = useState(tasks)
  const [todo, setTodo] = useState(0)
  const [done, setDone] = useState(0)
  const [isChecked, setIsChecked] = useState(false)

  const handleTextChange = (description: string) => {
    setDescription(description)
  }
  const handleTaskInput = () => {
    setNewTask(previousState => [...previousState, description])
    setTodo(previousState => ++previousState)
    setDescription('')
  }

  const handleFinishTask = () => {
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.background}>
      <View style={styles.superiorView}>
        <Image
          style={styles.rocket}
          source={require('../../../assets/images/rocket.png')}
        />
        <View style={styles.title}>
          <Text style={styles.tas}>
            tas
          </Text>
          <Text style={styles.ker}>
            ker
          </Text>
        </View>
      </View>
      <InputBar
        description={description}
        handleTaskInput={handleTaskInput}
        handleTextChange={handleTextChange}
      />
      <TaskCounter
        todo={todo}
        done={done}
      />
      {
        taskList.length ?
        taskList.map(task => {
          return (
            <Task
              description={task}
            />
          )
        }) :
        <EmptyList />

      }
    </View>
  )
}