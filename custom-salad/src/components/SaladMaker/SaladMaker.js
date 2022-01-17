import React, { useReducer, createContext } from 'react'
import { createUseStyles } from 'react-jss'
import { SaladBuilder } from '../SaladBuilder'
import { SaladSummary } from '../SaladSummary'

const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  },
})

const reducer = (state, item) => {
  return [...state, item]
}

export const SaladContext = createContext()

export const SaladMaker = () => {
  const classes = useStyles()
  const [salad, setSalad] = useReducer(reducer, [])
  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">
          🥗
        </span>
        Build Your Custom Salad!
        <span role="img" aria-label="salad">
          🥗
        </span>
      </h1>
      <SaladBuilder />
      <SaladSummary />
    </SaladContext.Provider>
  )
}
