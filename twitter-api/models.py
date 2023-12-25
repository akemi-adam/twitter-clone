from sqlalchemy import Column, String, Integer
from pydantic import BaseModel
# from typing import Optional
from database import Base


class Tweet(Base):
    __tablename__ = 'tweets'
    id = Column(Integer, primary_key=True)
    content = Column(String, nullable=False)
    
    def __init__(self, content):
        self.content = content

class TweetCreate(BaseModel):
    content: str
