from fastapi import FastAPI
import pandas as pd

app = FastAPI()

@app.get("/data")
def get_data():
    df = pd.read_parquet("../dvc_pipeline/data/download_data/iris.parquet")
    data = df.to_dict(orient="records")

    return {"data": data}