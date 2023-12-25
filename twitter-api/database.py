from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker, declarative_base


engine = create_engine('sqlite:///database.db')

LocalSession = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)

Base = declarative_base()

def get_connection() -> Session:
    connection = LocalSession()
    try:
        yield connection
    finally:
        connection.close()
