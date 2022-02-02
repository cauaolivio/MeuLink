import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({ closeModal }) {
  return (
    <div className="modal-container">
      <div className="moda-header">
        <h2>Link encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color='#000' />
        </button>
      </div>

      <span>
        https://sujeitoprogramador.com
      </span>

      <button className='modal-link'>
        https://bit.ly/12900
        <FiClipboard size={20} color='#fff' />
      </button>
    </div>
  )
}