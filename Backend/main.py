from typing import List

from fastapi import FastAPI
from pydantic import  BaseModel
from instabot import Bot
 
app = FastAPI()
class Presion(BaseModel):   
    id:int
    name:str
    age:int

DB:List[Presion]=[
    Presion(id=1 ,name="Anish",age=22),
    Presion(id=2 ,name="yadav",age=20),
    Presion(id=3 ,name="prince",age=18)
]
DB:List(Presion)
@app.get("/api")
def read_root():
    print(DB)
    return  DB


 
