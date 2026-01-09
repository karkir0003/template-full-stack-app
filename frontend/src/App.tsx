import { useItems } from './hooks/useItems';
import { useConnectFour } from './hooks/useConnectFour';
import { ItemForm } from './components/InventoryManager/ItemForm';
import { ItemList } from './components/InventoryManager/ItemList';

function App() {
  const {gameState, dropPiece, resetGame, error} = useConnectFour();

  if (!gameState) return <div>Loading Game ...</div>
  // const { items, status, error, add } = useItems();

  return (
    <div className="app-container" style={{ padding: '20px' }}>
      <h1>Connect 4</h1>

      {/* Status Bar */}
      <div style={{marginBottom: '10px'}}>
        Player turn: <strong style={{color: gameState.current_player === 1 ? 'red' : '#e6b800'}}>
          {gameState.current_player === 1 ? 'Red': 'Yellow'}
        </strong>
      </div>
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {/* THE BOARD */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 50px)',
        gap: '5px',
        backgroundColor: 'blue',
        padding: '10px',
        borderRadius: '10px'
      }}>
        {/* Render rows */}
        {gameState.board.map(
          (row, rowIndex) => {
            return row.map((cell, colIndex) => {
              return <div 
               key={`${rowIndex}-${colIndex}`}
               onClick={() => dropPiece(colIndex)}
               style={{
                width: '50px',
                height: '50px',
                backgroundColor: cell === null ? 'white': (cell === 1 ? 'red' : '#e6b800'),
                borderRadius: '50%',
                cursor: 'pointer',
                border: '2px solid #000055'
               }}
              />
            })
          }
        )}
        
      </div>

      {gameState.winner && (
        <p>Winner ${gameState.winner}</p>
      )}

      {/* <button onClick={resetGame} style={{marginTop: '20px', padding: '10px 20px'}}
        Reset Game
      </button> */}
    </div>
  );
}

export default App;