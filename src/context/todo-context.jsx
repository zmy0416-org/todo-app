import React from 'react'

export const TodoContext = React.createContext()
export const useTodoContext = () => React.useContext(TodoContext)
