import './App.css'
import { Suspense } from 'react'
import Countries from './components/Countries/Countries'

const countriesPorise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPorise}></Countries>
      </Suspense>
    </>
  )
}

export default App
