import { STATE_STORAGE_PATH } from "../settings/config";

export const loadState = () => {
  // We need the try block because user may not permit our accessing localStorage.
  try {
    const serializedState = localStorage.getItem(STATE_STORAGE_PATH)
    if (serializedState === null) { // The key does not exist.
      return undefined;             // Let our reducer initialize the app.
    }

    return JSON.parse(serializedState)

  } catch (error) {
    console.log(error)
    return undefined // Let our reducer initialize the app.
  }
}

export const saveState = (state :any) => {
  try {
    // Serialize the state. Redux store is recommended to be serializable.
    const serializedState = JSON.stringify(state)
    localStorage.setItem(STATE_STORAGE_PATH, serializedState)

  } catch (error) {
    console.log(error)
  }
}