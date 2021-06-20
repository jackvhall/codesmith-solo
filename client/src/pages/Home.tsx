import React from 'react'
import Layout from '../components/Layout'

export default function Home(): React.ReactElement {
  return (
    <div>
      <Layout>
        <span className='text-red-700'>Inside the layout</span>
      </Layout>
    </div>
  )
}
