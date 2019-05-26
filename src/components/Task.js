import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, id, active, important} = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>

      </div>
    );
  } else {

    
    return (
      <div>
        <p>
          <strong>{text}</strong><br />
          - potwierdzenie wykonania
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    )
  }
}

export default Task;