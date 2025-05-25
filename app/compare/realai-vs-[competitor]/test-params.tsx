"use client"

import { useParams } from 'next/navigation'

export default function TestParams() {
  const params = useParams()
  
  return (
    <div>
      <h1>Parameters:</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}
