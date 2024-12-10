import React from 'react'

export default function useStorage(key,) {
  const get = React.useCallback(() => {
    if (!localStorage || !key || !localStorage.getItem(key)) return null;
    return JSON.parse(localStorage.getItem(key))
  }, [key])
  const update = React.useCallback((newValue) => localStorage.setItem(key, JSON.stringify(newValue)), [key])

  return {
    update,
    value: get()
  }
}
