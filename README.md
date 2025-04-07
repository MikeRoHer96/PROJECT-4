# PROJECT-4
## Title: Predicting marketing campaign results.

Team: 
- Daniela Rojas
- Itzel Vázquez Sánchez
- Miguel Rodríguez

## Project Description :page_facing_up:

The main goal of this project was to analyze the effectiveness of phone campaigns for term deposits in a Portuguese Bank. Since the high cost invested in this type of marketing strategy, the goal is to predict which clients are more likely to subscribe to a term deposit.

We created a dashboard that contains the results of a ML model to predict if customers will convert to that bank or not.

### Data

We selected the Banking Dataset - Marketing Targets from [Kaggle](https://www.kaggle.com/datasets/prakharrathi25/banking-dataset-marketing-targets) 

## Table of contents

On the repository you'll find:

Main Folder:
| Item  | File Type  |    File Name                            |           Description                                 |
| ----- | ---------  | --------------------------------------- | ----------------------------------------------------  |
|   1   |  ipynb     |  Visualizations and Logistic Regression | Code for the Logistic Regression and Decision Tree    |
|   2   |  ipynb     | neural_network                          | Code for the neural network and some plots            |
|   3   |  folder    | Data                                    | Contains csv from Kaggle                              |
|   4   | folder     | Images                                  | Contains the plots of Descriptive Statistics in png   |
|   5   | folder     | nn_models                               | Conatins two h5 files with the neural network models  |       
|   6   | folder     | TBC                                     | Contains the html of the dashboard                    |
|   7   | folder     | TBC                                     | Contains data for the dashboard                       |



1) Data Folder:

| Item  | File Type  |  File Name  |           Description                      |
| ----- | ---------  | ----------- | -----------------------------------------  |
|   1   |    csv     |  test       |  CSV with dataset downloaded from Kaggle   |
|   2   |    csv     |  train      |  CSV with dataset downloaded from Kaggle   |


2) Images Folder:
   
| Item  | File Type  |    File Name     |           Description                                 |
| ----- | ---------  | ---------------- | ----------------------------------------------------  |
|   1   |    png     |  age_plot        | plot of age and marital status of potential clients   |
|   2   |    png     | education_plot   | plot of education level of potential clients          |
|   3   |    png     | housing_plot     | plot of the question "Has a housing loan?"            |
|   4   |    png     | job_plot         | plot of job type of potential clients                 |
|   5   |    png     | loan_plot        | plot of the question "Has a personal loan?"           |       
|   6   |    png     | marital_plot     | plot of marital status of potential clients           |
|   7   |    png     | model_1_accuracy | plot of accuracy of the first neural network model    |
|   8   |    png     | model_1_loss     | plot of loss of the first neural network model        |
|   9   |    png     | model_2_accuracy | plot of accuracy of the optimized neural network model|
|   10  |    png     | model_2_loss     | plot of loss of the optimized neural network model    |


3) nn_models Folder:

| Item  | File Type  |  File Name         |           Description                     |
| ----- | ---------  | ------------------ | ----------------------------------------- |
|   1   |    h5      | modelo_marketing_v1| h5 file of first neural network model     |
|   2   |    h5      | modelo_marketing_v2| h5 file of optimized neural network model |




## How to Use the Project

Download the source code and use the dataset that you can find in Data Folder. To run the Logistic Regression and the Decision Tree, use the Jupyter Notebook that's called "Visualizations and Logistic Regression"; to run the neural network, use the Jupyter Notebook called "neural_network". 



## Credits :scroll:
The code of this project origins from: starter code provided by the Team of the Data Analysis and Visualization Bootcamp, the solved exercises worked in the Zoom Lessons, [Stackoverflow](https://stackoverflow.com/), [Python Documentation](https://docs.python.org/3/), [keras documentation](https://www.tensorflow.org/api_docs/python/tf/keras) and Microsoft Copilot.
