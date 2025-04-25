from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import httpx
import os
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()

tg_token = os.getenv("TG_TOKEN")
chat_id = os.getenv("CHAT_ID")

class FormData(BaseModel):
    name: str
    phone: str
    message: str = ""

async def send_message(text: str):
    url = f"https://api.telegram.org/bot{tg_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    print(payload)
    print(tg_token)
    async with httpx.AsyncClient() as client:
        response = await client.post(url, data=payload)
        return response.status_code, response.text

@app.post("/api/send-message/")
async def get_form(data: FormData):
    text = (
        f"<b>Новая заявка</b>\n"
        f"<b>Имя:</b> {data.name}\n"
        f"<b>Телефон:</b> {data.phone}\n"
        f"<b>Вопрос:</b> {data.message}"
    )
    status, response = await send_message(text)
    return {
        "status": status,
        "telegram_response": response
    }

