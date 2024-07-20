import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NoteItem({ isNew, canOpenLink, value, onClick, ...rest }){
  function openLink(){
    window.open(value, '_blank');
  }

  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        className={canOpenLink? 'openLink' : ''}
        onClick={canOpenLink? openLink : () => {}}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}