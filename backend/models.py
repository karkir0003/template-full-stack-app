from pydantic import BaseModel
from typing import Optional, List

class GameState(BaseModel):
    board: List[List[int | None]] # 6 x 7
    current_player: int # player 1 or 2
    winner: Optional[int] = None
    game_over: bool = False

class Move(BaseModel):
    column: int

class Item(BaseModel):
    id: int
    name: str
    description: Optional[str] = None