import { useId } from 'react';

function LabelInputPair() {
  const id = useId(); 
  /**
   * Use case: design system - fancy inputs with labels, input 
   * useId creates unique id that instantiation per component is consistent
   * don't use multiple useId, just do some thing like id + '-key'
   */
  return (
    <div style={{ marginBottom: '50px' }}>
      <label htmlFor={id}>
        Click on this label and it'll highlight the input {id}
      </label>
      <br />
      <input type="text" id={id} placeholder={`input id ${id}`} />
    </div>
  );
}

export default function UseIdComponent() {
  return (
    <>
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
      <LabelInputPair />
    </>
  );
}
