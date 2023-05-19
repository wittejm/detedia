# Use an official Python runtime as a parent image
FROM python:3.12.0a7-slim-bullseye

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
# COPY src/ .

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000", "--reload" ]
# CMD ["python", "app.py"]

