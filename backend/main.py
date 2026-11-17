
from fastapi import FastAPI
from pydantic import BaseModel  

# Create the FastAPI application
app = FastAPI(
    title="AURA API",
    description="Backend API for the AURA AI Companion",
    version="1.0.0"
)
# Define the format of messages sent to AURA
class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "Welcome to AURA!",
        "status": "Running",
        "application": "AURA AI Companion"
    }
