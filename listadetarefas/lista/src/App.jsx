import React, { useState, useRef } from 'react'
function App() {

const  [listTarefas, setListaTarefas] = useState(() => {return []})
const [tarefas, setTarefa] = useState(() => { return ''})



  const idTarefa = useRef(0)
 const inputRef =  useRef() 
  function addTarefa(){
    setListaTarefas(old => {return [...old, {id: idTarefa.current, texto: tarefa}]})
    idTarefa.current = idTarefa.current  + 1
    setTarefa('')
    inputRef.current.focus()
  }

  function DeletarTarefas(){
    setListaTarefas(old => { return[] } )
    idTarefa.current = 0
  }

  function apagarTarefa(id){
    const tmp = listTarefas.filter(tarefa =>  tarefa.id !== id )
    setListaTarefas
  }

  return (
    <>
      <h3> Lista de tarefas</h3>
      <hr /> 
      
      <input ref={inputRef} type="text"  value={tarefas} onChange={(evento) =>{ setTarefa(evento.target.value)}}>
      <div>
        <button onClick={addTarefa}> Adicionar </button>
        <button onClick={DeletarTarefas}>Deletar </button>
      </div>

      
      <hr />
      <p> Tarefas:</p>
      {listTarefas.map((t) =>{
      
      return <p key={t.id}>{t.texto} - <span onClick={() => {apagarTarefa(tarefa.id) } }>[apagar]</span></p>
})}
    </>
  )
}

export default App
