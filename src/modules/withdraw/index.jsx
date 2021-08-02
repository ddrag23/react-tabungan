import { useContext, useEffect } from 'react'
import api from '../../api'
import { AuthMiddleware } from '../../middleware'
export default function Withdraw() {
  const { state } = useContext(AuthMiddleware)
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('withdraw', {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      console.log(res.data)
    }
    fetchData()
  }, [state])
  return <>ok</>
}
