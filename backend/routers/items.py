from fastapi import APIRouter
from typing import List
from models import Item
from database import fake_db 

router = APIRouter(
    prefix="/items",
    tags=["items"]
)

@router.get("", response_model=List[Item])
def get_items():
    return fake_db

@router.post("", response_model=Item)
def create_item(item: Item):
    fake_db.append(item)
    return item
