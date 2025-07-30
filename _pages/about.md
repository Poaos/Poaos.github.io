---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm pursuing a master's degree in automation at Northwestern Polytechnical University ([西北工业大学自动化学院](https://zdhxy.nwpu.edu.cn/)). I earned my bachelor’s degree at School of Mechanical Engineering, Hebei University of Technology ([河北工业大学机械工程学院](https://mes.hebut.edu.cn/)). 

My research interest includes robotic exploration, especially multi-rotor UAV platforms.


# 🔥 News
- *2024.09*: &nbsp;🎉🎉 I have officially started using and updating my academic homepage. 
- *2024.10*: &nbsp;🎉🎉 Added a number of programs during the undergraduate and master's degrees. 

<!-- # 📖 Educations
- *2022.09 - now*, [Northwestern Polytechnical University](https://www.nwpu.edu.cn/), Xi'an, (Score: XXX, rank: XX/XXX).
- *2018.09 - 2022.06*, [Hebei University of Technology](https://www.hebut.edu.cn/), Tianjin, (GPA: XXX, rank: XX/XXX). -->

# 🔍 Main Projects


<!-- project 0 -->

## Navigational Denial Unknown Scenario Swarm Collaborative Target Search Exploration

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2024.06 - 2024.07</div>
<img src='images/GIF/2024-7-15-feihang-sim.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

With the theme of cooperative exploration of swarms in navigation and denial scenarios, it mainly assesses the key technologies of cooperative navigation, target recognition, cooperative exploration strategies and autonomous decision-making of clusters, so as to accelerate the transformation and application of the results of the frontier direction of group intelligence and empower the innovative development of equipments. **Finished Works**:

1. Deployment and debugging of multi-copter exploration algorithms in UE4 and Airsim environments, building real quadcopter UAVs for simple validation.
2. Real-time target detection (Apriltag code), coordinate conversion (local to GPS), adaptive data processing for multiple target points (Kmeans clustering).

</div><div markdown="1">

</div>
</div>

<!-- project 1 -->

## State Grid Indoor Distribution Cabinet Drone Autonomous Inspection Project

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2023.11 - 2024.03</div>
<img src='images/GIF/2023-12-11-grid-inspection.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

In order to improve the level of intelligence and automation of power equipment inspection, this project develops a set of intelligent inspection system for indoor distribution cabinets of the national grid, which contains the functions of remote server task issuance, automatic power-up and take-off to execute the task, and automatic return to the nest for charging, etc. **Finished Works**:

1. Development of a precise landing program for UAVs based on visual guidance of Aruco code for automatic return to nest charging function.
2. Write UAV control program (ROS), deploy Cartographer 2D re-localization algorithm, and complete the software and hardware debugging of the whole process of UAV autonomous inspection.

</div><div markdown="1">

</div>
</div>


<!-- project 2 -->
## Low-Altitude Sensing and Avoidance System for Small Fixed-Wing UAVs

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.08 - 2023.06</div>
<img src='images/GIF/2023-6-11-fly.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

Aiming at a variety of obstacles that may potentially threaten flight safety in the flight of civil UAVs, the project adopts miniaturized airborne radar and obstacle avoidance algorithms to carry out detection, localization, early warning and flight avoidance tests on three types of obstacles, namely, micro-small civil UAVs, buildings and high-voltage pylons. **Finished Works**:

1. Development of serial data protocol drivers between flight control, self-developed millimeter-wave radar and mission computers to achieve multi-module data cross-platform interaction (ROS).
2. Developing a small fixed-wing UAV perception avoidance algorithm based on millimeter-wave radar to achieve autonomous perception avoidance capability for multiple types of obstacles.

</div><div markdown="1">

</div>
</div>


<!-- project 3 -->
## Visual Localization and Navigation UAVs in GNSS Denied Environments

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.12 - 2023.05</div>
<img src='images/GIF/2023-5-7-vision-uavs.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

In order to enhance the reconnaissance, surveillance and target identification capabilities of military equipment, this project develops an intelligent UAV system based on pure visual navigation, which can accurately identify and localize ground-based military targets (e.g., bridges, tanks, armored vehicles, etc.) in a GNSS-denied environment. **Finished Works**:

1. Deployment of Visual Localization, Visual Obstacle Avoidance (3DVFH+), Downward-Looking Cameras for Target Recognition and Coordinate Transformation on Nvidia Xavier.
2. Responsible for the design of airborne equipment fixtures, complete assembly and flight commissioning of three unmanned aerial vehicles.

</div><div markdown="1">

</div>
</div>



# 📝 Publications 
<!-- https://api.github.com/repos/Poaos/LAEA stargazers_count -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Drones 2024</div><img src='images/laea_cover1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LAEA: A 2D LiDAR-Assisted UAV Exploration Algorithm for Unknown Environments](https://www.mdpi.com/2504-446X/8/4/128)

Xiaolei Hou †,**Zheng Pan †**,Li Lu,Yuhang Wu,Jinwen Hu,Yang Lyu andChunhui Zhao (**First student author**)

Reference material: [**PDF**](https://www.mdpi.com/2504-446X/8/4/128/pdf?version=1711707638)    [**Youtube**](https://youtu.be/_a1Vl518Ra8)   [**Github**](https://github.com/Poaos/LAEA)     ![Github stars](https://img.shields.io/github/stars/Poaos/LAEA.svg)   <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

Abstract: LAEA utilizes 2D LiDAR to quickly acquire contour information from the environment and generates a hybrid map that characterizes the exploration value of the surrounding environment using multi-sensor data. Based on the hybrid map, small and isolated frontier clusters that can lead to repeated movements are quickly detected, and their access in prioritized.
</div>
</div>

- *2025.2* STEAM: Super Viewpoint and Topological Map Based Efficient Autonomous Exploration Method (Manuscript submitted to IEEE T-ITS )

# 🎖 Honors and Awards

- *2024.12* Chinese National Scholarship for Graduate Students (Master’s)
- *2024.07* “Fly Aerospace Cup” Equipment Intelligent Design Competition Unmanned Swarm Challenge Second Place
- *2024.07* China International Student Innovation Competition Industrial Circuit Shaanxi Province Provincial Prize
- *2024.05* Shanxi Province 8th Graduate Student Innovation Achievement Exhibition First Prize on Campus
- *2023.05* China Robotics Competition and robocup Open Drone Physical Delivery Competition National Second Prize
- *2022.10* China Robotics Competition and robocup Open Drone Physical Delivery Competition National Second Prize
- *2021.05* China College Students Engineering Practice and Innovation Competition Tianjin First Prize (Third Place)
- *2020.10* China triz Cup College Students Innovative Methods Competition National Second Prize. 
- *2020.08* "Siemens Cup" China Intelligent Manufacturing Challenge National Second Prize.


# 🔍 Other Projects

- *2024.01 – 2025.01* Practice and Innovation Capability Cultivation Fund for Graduate Students, NPU (PI, No. PF2024074), Autonomous Exploration and Target Search for Rotorcraft UAVs in Complex Unknown Environments.

- *2024.12 – 2025.11* Industry-Education Collaboration Project, Ministry of Education (PI, No. J2160012), Concrete Inspection Pioneer: Apparent Defect Detection Robot for Large Bridges.


<!-- project -->

## China Robotics Competition's Drone Recognition and Express Transportation Physical Competition

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.9-2022.12, 2023.5</div>
<img src='images/GIF/2023-10-15-robocup.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

A UAV cargo transportation competition in an obstacle environment, which mainly examines the UAV's ability of autonomous flight, obstacle avoidance, target recognition, cargo delivery and so on. The UAV is required to carry cargo from the starting point, cross the obstacle area, find a suitable target to deliver express, and complete landing autonomously. **Finished Works**:

1. 2022, UAV full process code logic modification and live flight debugging (learning a complete UAV system based on PX4). 
2. 2023, port and deploy Ego-planner ([an autonomous obstacle avoidance algorithms](https://github.com/ZJU-FAST-Lab/ego-planner)) and teach academic brother to master UAV systems. 

</div><div markdown="1">

</div>
</div>


<!-- Undergraduate level programs -->

## Intelligent Logistics Handling of China University Students Engineering Practice and Innovation Competition

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2020.11 - 2021.4</div>
<img src='images/GIF/2021-4-logistics-handling.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

With the theme of the reality and future development of intelligent manufacturing, design and build an intelligent robot for material handling independently. The competition scene simulates the manufacturing process of an enterprise, including start-stop area, raw material area, rough processing area, temporary storage area, finishing area and inventory area. 

**Finished Works**: Mainly responsible for the division of labor among team members, design of control schemes and construction of hardware circuits, technical work including component selection, stepper motor control, path planning for trolleys, circuit board design, welding and debugging.

</div><div markdown="1">

</div>
</div>


<!-- Undergraduate level programs -->

## A Three-Floor, Three-Station Elevator Based on Siemens S7-1200 PLCs

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2019.9 - 2020.5</div>
<img src='images/GIF/2020-4-an-elevator.gif' alt="sym" width="100%">
</div>
<div class='paper-box-text' markdown="1">

This project designs a simplified model of the elevator, completes the design and production of the elevator mechanical structure and the design and implementation of the elevator control system, and realizes the basic functions of the elevator. **Finished Works**:

1. Mainly responsible for part of the components selection, PLC program writing and the assembly and debugging of the elevator object.
2. Based on this project, the results were converted, including writing appearance patents and utility model patents, participating in the related Siemens Smart Manufacturing Challenge and winning awards.

</div><div markdown="1">

</div>
</div>

<!-- Undergraduate level programs -->
<!-- 还有两个暂时没有写： 水陆空多栖移动飞行器 & 微流控... files in onedrive-->


<!-- permalink: /project1/ -->
<!-- 不得行... 排版是乱的 -->
<!-- About my zhihu [Details about zhihu](/project1/) -->