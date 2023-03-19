import { useState } from 'react';


interface ModalError {
  show: boolean
  message: string
}


const INITIAL_STATE: ModalError = {
  show: false,
  message: ''
}

interface UseErrorModalActions {
  resetState: () => void
  startModalError: (message: string) => void
}

type UseErrorModalData = [
  state: ModalError,
  actions: UseErrorModalActions
]


export const useErrorModal = (): UseErrorModalData => {
  const [modalData, setModalErrorData] = useState<ModalError>(INITIAL_STATE)

  const resetState = () => {
    setModalErrorData(INITIAL_STATE)
  }

  const startModalError = (message: string) => {
    setModalErrorData({
      message,
      show: true
    })
  }

  return [modalData, { resetState, startModalError }]
}