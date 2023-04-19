from pathlib import Path
import typer
from sklearn import datasets


def main(output_dir: Path = typer.Option(...)):
    iris = datasets.load_iris(as_frame=True)
    iris.to_parquet(output_dir / "iris.parquet")


if __name__ == "__main__":
    typer.run(main)
