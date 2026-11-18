
from fastapi import FastAPI
from pydantic import BaseModel  
from fastapi.middleware.cors import CORSMiddleware

# Create the FastAPI application
app = FastAPI(
    title="AURA API",
    description="Backend API for the AURA AI Companion",
    version="1.0.0"
)
# Allow the React frontend to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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


# Chat endpoint - receives messages and sends replies
@app.post("/api/chat")
def chat(request: ChatRequest):
    user_message = request.message

    return {
        "user_message": user_message,
        "aura_reply": "Hello! I'm AURA. How can I help you today?"
    }
