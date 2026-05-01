---
layout: archive
title: "Crop Reference Evapotranspiration Estimation"
summary: "ETo estimation using CIMIS dataset and the deep learning approach."
image: /images/500x300.png
status: "finished"
category: "Machine Learning"
---

> **Affiliation:** Postdoctoral Research Project at the University of California, Merced.
## Project Overview
Agriculture in California is a cornerstone of the state and national economy. Given the recurring water challenges, efficient water resource management is a persistent priority. 

This project focuses on forecasting **Evapotranspiration (ET)** across multiple spatial scales—from sub-field to statewide—to provide actionable insights for precision agriculture and water policy.

### Key Methodology
We developed an integrated framework combining:
*   **Data Sources:** CIMIS meteorological stations & Eddy-covariance (EC) flux towers.
*   **Remote Sensing:** Small Unmanned Aerial Systems (sUAS) for high-resolution mapping.
*   **Core Model:** A hybrid **CNN-LSTM** deep learning approach designed to capture both spatial features and temporal dependencies in climate data.

---

## Project Results & Publications

### 📄 Journal Articles
*   **Gao, R.**, Safeeq, M., Torres-Rua, A. F., et al. (2025). **Forecasting Evapotranspiration Products Using CNN-LSTM to Support Agricultural Water Management in California Vineyards**. *Authorea Preprints*. [DOI/Link]
*   **Gao, R.* **, et al. (2026). **Timescale-guided framework for deep learning forecasting of reference evapotranspiration and implications for estimating actual evapotranspiration for vineyards**. *(Under Review)*.
*   Sarwar, A., **Gao, R.**, Safeeq, M., et al. (2026). **Artificial intelligence for multiscale drought modeling and decision making**. In *Global Drought and Sustainability* (pp. 165-200). *Elsevier*.

### 💻 Open Source Tools
*   [met_gfit](https://github.com/ruigao9/met_gfit): A Python toolkit developed during this project for meteorological data processing.

---

## Multimedia & Figures
![Model Architecture](/images/your-model-diagram.png)
*Figure 1: Conceptual framework of the CNN-LSTM model for ETo forecasting.*


This is a project for my postdoctoral training at the University of California, Merced.<br>
Agriculture in California is critical to the state and national economy, making efficient water resource management a persistent priority. We recognized the importance of water resource management, and also that forecasting evapotranspiration (ET) across multiple spatial scales—from sub-field to county and statewide—can provide valuable insights for decision-making. To achieve this, we integrated the California Irrigation Management Information System (CIMIS) meteorological stations, eddy-covariance (EC) flux tower observations, small unmanned aerial systems (sUAS), and machine-learning methods to support ET forecasting at different spatial scales.

Project results
Gao, R., Safeeq, M., Torres-Rua, A. F., Alfieri, J. G., Kustas, W. P., Prueger, J. H., ... & Viers, J. H. (2025). Forecasting Evapotranspiration Products Using Convolutional Neural Network-Long Short-Term Memory (CNN-LSTM) to Support Agricultural Water Management in California Vineyards. Authorea Preprints.<br>
Sarwar, A., Gao, R., Safeeq, M., Abatzoglou, J. T., Medellín-Azuara, J., & Viers, J. H. (2026). Artificial intelligence for multiscale drought modeling and decision making. In Global Drought and Sustainability (pp. 165-200). Elsevier.<br>
Gao R*, et al. Timescale-guided framework for deep learning forecasting of reference evapotranspiration and implications for estimating actual evapotranspiration for vineyards. 2026. (Under Review)<br>

