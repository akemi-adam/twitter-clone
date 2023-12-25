from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from database import get_connection, Base, engine
from models import Tweet, TweetCreate


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

Base.metadata.create_all(bind=engine)


@app.post('/tweet', status_code=200)
async def create(body: TweetCreate, connection: Session = Depends(get_connection)):
    tweet = Tweet(body.content)
    connection.add(tweet)
    try:
        connection.commit()
        connection.refresh(tweet)
    except HTTPException as e:
        connection.rollback()
        raise HTTPException(403, str(e))
    finally:
        connection.close()
    return tweet

@app.get('/tweet', status_code=200)
async def listAll(connection: Session = Depends(get_connection)):
    tweets = connection.query(Tweet).all()
    connection.close()
    return tweets
