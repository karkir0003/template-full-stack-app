from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import items, game

app = FastAPI()

# Allows your Vite frontend (port 5173) to talk to this backend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(items.router)
app.include_router(game.router)

@app.get("/")
def health_check():
    return {"status": "ok"}
