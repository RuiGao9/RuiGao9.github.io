---
title: "LAI estimation across California vineyards using sUAS multi-seasonal multi-spectral, thermal, and elevation inforamtion and machine learning"
collection: publications
category: manuscripts
permalink: /publication/2022-03-14-paper-title-number-1
excerpt: 'Using high-resolution multi-spectral, thermal, and digital elevation model data for grape vine leaf area index estimation through machine learning models.'
date: 2022-03-14
venue: 'Irrigation Science'
slidesurl: 'https://link.springer.com/article/10.1007/s00271-022-00776-0'
paperurl: 'https://link.springer.com/article/10.1007/s00271-022-00776-0'
bibtexurl: '@article{gao2022lai,
  title={LAI estimation across California vineyards using sUAS multi-seasonal multi-spectral, thermal, and elevation information and machine learning},
  author={Gao, Rui and Torres-Rua, Alfonso F and Aboutalebi, Mahyar and White, William A and Anderson, Martha and Kustas, William P and Agam, Nurit and Alsina, Maria Mar and Alfieri, Joseph and Hipps, Lawrence and others},
  journal={Irrigation Science},
  volume={40},
  number={4},
  pages={731--759},
  year={2022},
  publisher={Springer}
}'
citation: 'Gao, R., Torres-Rua, A. F., Aboutalebi, M., White, W. A., Anderson, M., Kustas, W. P., ... & Gowing, I. (2022). LAI estimation across California vineyards using sUAS multi-seasonal multi-spectral, thermal, and elevation information and machine learning. Irrigation Science, 40(4), 731-759.'
---
Abstract: In agriculture, leaf area index (LAI) is an important variable that describes occurring biomass and relates to the distribution of energy fluxes and evapotranspiration components. Current LAI estimation methods at subfield scale are limited not only by the characteristics of the spatial data (pixel size and spectral information) but also by the empiricity of developed models, mostly based on vegetation indices, which do not necessarily scale spatiality (among different varieties or planting characteristics) or temporally (need for different LAI models for different phenological stages). Widely used machine learning (ML) algorithms and high-resolution small unmanned aerial system (sUAS) information provide an opportunity for spatial and temporal LAI estimation addressing the spatial and temporal limitations. In this study, considering both accuracy and efficiency, a point-cloud-based feature-extraction approach (Full Approach) and a raster-based feature-extraction approach (Fast Approach) using sUAS information were developed based on multiple growing seasons (2014–2019) to extract and generate vine-scale information for LAI estimation in commercial vineyards across California. Three known ML algorithms, Random Forest (RF), eXtreme Gradient Boosting (XGB), and Relevance Vector Machine (RVM), were considered, along with hybrid ML schemes based on those three algorithms, coupled with different feature-extraction approaches. Results showed that the hybrid ML technique using RF and RVM and the Fast Approach with 9 input variables, called RVM-RFFast model, performs better than others in a visual and statistical assessments of the generated LAI being also computationally efficient. Furthermore, using the generated LAI products in the quantification of energy balance using the two-source energy balance Priestley-Taylor version (TSEB-PT) model and EC tower data, the results indicated excellent estimation of net radiation (Rn) and latent heat flux (LE), good estimation of surface heat flux (G), and poor estimation of sensible heat flux (H). Additionally, TSEB-PT sensitivity analysis performed by regenerating LAI maps based on the generated LAI map (from − 15% of the original LAI map to + 15% with a 5% gap) showed that LAI uncertainty had a major impact on G, followed by evapotranspiration partitioning (T/ET), H, LE, and Rn. When considering the annual growth cycle of grapevines, the impact of LAI uncertainty on the T/ET in the veraison stage was larger than in the fruit set stage.