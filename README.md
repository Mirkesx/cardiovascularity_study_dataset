# Cardiovascular Study Dataset

<p>This repository contains the Project Notebook for Fondamenti di Analisi Dati, a Data Science subject teached at University of Catania.</p>

<p>This repository has only eductional purposes, so it is freely usable (just put the link of this repository as a reference in your README file if you do).</p>

## What is it about?

<p>I won't go further with the explanations since I have explained more in the notebook.</p>

<p>Anyway, the goal of this project is to study a dataset with the a various number of data science tools. The dataset I've picked is about cardiovascular diseases. We want to retrieve meaningful information from it and eventually be able to use this data for specific operations (such as classification, clustering, regression etc.).</p>

<p>More details about how I retrieved the data, what are the system requirements and so on will be explained in-depth in the notebook</p>

## How To run

<p>I suggest using CONDA to manage the python environments. You can easily set up a new CONDA env and delete it once you don't need it anymore.</p>

<p>To install CONDA you can check the reference [1].</p>

<p>This is the code to run in your shell once you have Conda to create the envinroment with the needed packages to run notebooks:</p>

```bash
conda create -n fad python=3.8
conda activate fad
conda install -c anaconda jupyter
```

<p>This is the code to run in your shell to run jupyter notebooks:</p>

```bash
cd <repository-folder>/
jupyter notebook
```

## How to remove the environment

<p>This is the code to run if you want to delete the environment:</p>

```bash
conda deactivate
conda env remove -n fad
```