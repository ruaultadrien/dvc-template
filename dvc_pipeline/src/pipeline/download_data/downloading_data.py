from pathlib import Path
import typer
from sklearn import datasets
import os


def main(output_dir: Path = typer.Option(...)):
    os.makedirs(output_dir, exist_ok=True)
    iris = datasets.load_iris(as_frame=True)
    iris['data'].to_parquet(output_dir / "iris.parquet")


if __name__ == "__main__":
    typer.run(main)
