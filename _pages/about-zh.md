---
permalink: /zh/
title: ""
excerpt: ""
author_profile: true
lang: zh-CN
translation_key: home
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

我目前在[西北工业大学自动化学院](https://zdhxy.nwpu.edu.cn/)攻读自动化专业硕士学位，本科毕业于[河北工业大学机械工程学院](https://mes.hebut.edu.cn/)。

我的研究方向是机器人自主探索，尤其关注多旋翼无人机平台。


<!-- 固定栏目锚点与英文版一致，便于导航和语言切换。 -->
<h1 id="-news">🔥 最新动态</h1>
- *2024.09*: &nbsp;🎉🎉 正式启用并开始更新个人学术主页。
- *2024.10*: &nbsp;🎉🎉 更新了本科和硕士阶段参与的多个项目。

<!-- # 📖 Educations
- *2022.09 - now*, [Northwestern Polytechnical University](https://www.nwpu.edu.cn/), Xi'an, (Score: XXX, rank: XX/XXX).
- *2018.09 - 2022.06*, [Hebei University of Technology](https://www.hebut.edu.cn/), Tianjin, (GPA: XXX, rank: XX/XXX). -->

<h1 id="-publications">📝 论文发表</h1>
<!-- https://api.github.com/repos/Poaos/SLIDER stargazers_count -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">RA-L 2026</div><img src="{{ '/images/slider_cover.png' | relative_url }}" alt="SLIDER 目标搜索框架" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SLIDER: Sparse History-Guided Aerial Robot Target Search Using Sliding Local Maps](https://ieeexplore.ieee.org/document/11614439)

Xiaolei Hou †, **Zheng Pan †\***, Hua Lan, Zhenghao Zou, Yinhong Chen, Chenxi Zhu, Yang Lyu, Jinwen Hu, and Chunhui Zhao († 共同贡献；\* 通讯作者)

相关资料： [**IEEE**](https://ieeexplore.ieee.org/document/11614439)    [**arXiv**](https://arxiv.org/abs/2607.10553)    [**Youtube**](https://youtu.be/zQBXoAjwBf4)    [**Bilibili**](https://www.bilibili.com/video/BV1ppKV64Ezg)    [**Github**](https://github.com/Poaos/SLIDER)    ![Github stars](https://img.shields.io/github/stars/Poaos/SLIDER.svg)

摘要：SLIDER 是一种面向大规模未知环境的轻量化、内存高效的无人机目标搜索框架。该方法将滑动局部地图与稀疏全局历史信息相结合，利用历史位姿和传感器模型在线评估观测质量，并通过增量式视点聚类减少候选目标与规划开销。稀疏全局拓扑地图支持长距离规划，仿真与真实飞行实验验证了其在内存占用、决策延迟和搜索效率方面的改进。
</div>
</div>

<!-- https://api.github.com/repos/Poaos/LAEA stargazers_count -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Drones 2024</div><img src="{{ '/images/laea_cover1.png' | relative_url }}" alt="LAEA 无人机自主探索框架" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LAEA: A 2D LiDAR-Assisted UAV Exploration Algorithm for Unknown Environments](https://www.mdpi.com/2504-446X/8/4/128)

Xiaolei Hou †,**Zheng Pan †**,Li Lu,Yuhang Wu,Jinwen Hu,Yang Lyu andChunhui Zhao (**第一学生作者**)

相关资料： [**PDF**](https://www.mdpi.com/2504-446X/8/4/128/pdf?version=1711707638)    [**Youtube**](https://youtu.be/_a1Vl518Ra8)   [**Github**](https://github.com/Poaos/LAEA)     ![Github stars](https://img.shields.io/github/stars/Poaos/LAEA.svg)   <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>

摘要：LAEA 利用二维激光雷达快速获取环境轮廓信息，并融合多传感器数据构建表征周围环境探索价值的混合地图。在此基础上，快速识别可能导致重复运动的小型孤立前沿簇，并优先访问这些区域。
</div>
</div>

<!-- - *2025.2* STEAM: Super Viewpoint and Topological Map Based Efficient Autonomous Exploration Method (Manuscript submitted to IEEE T-ITS ) -->


<h1 id="-academic-service">🤝 学术服务</h1>

**审稿人：** IEEE International Conference on Robotics and Automation (ICRA)、IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)、IEEE Robotics and Automation Letters (RA-L)、IEEE Transactions on Intelligent Transportation Systems (T-ITS)、IEEE Transactions on Robotics (T-RO).


<h1 id="-main-projects">🔍 主要项目</h1>


<!-- project 0 -->

## 导航受限未知环境下的集群协同目标搜索与探索

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2024.06 - 2024.07</div>
<img src="{{ '/images/GIF/2024-7-15-feihang-sim.gif' | relative_url }}" alt="集群协同目标搜索与探索仿真" width="100%">
</div>
<div class='paper-box-text' markdown="1">

围绕导航受限场景下的集群协同探索，重点验证集群协同导航、目标识别、协同探索策略和自主决策等关键技术，推动群体智能前沿成果转化与装备智能化应用。 **主要工作**：

1. 在 UE4 和 AirSim 环境中部署、调试多旋翼无人机探索算法，并搭建四旋翼无人机进行初步实机验证。
2. 实现目标实时检测（AprilTag）、局部坐标到 GPS 坐标的转换，以及多目标点的自适应数据处理（K-means 聚类）。

</div><div markdown="1">

</div>
</div>

<!-- project 1 -->

## 国家电网室内配电柜无人机自主巡检项目

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2023.11 - 2024.03</div>
<img src="{{ '/images/GIF/2023-12-11-grid-inspection.gif' | relative_url }}" alt="配电柜无人机自主巡检" width="100%">
</div>
<div class='paper-box-text' markdown="1">

为提升电力设备巡检的智能化与自动化水平，开发面向国家电网室内配电柜的智能巡检系统，实现远程服务器任务下发、自动上电起飞执行任务，以及自动返巢充电等功能。 **主要工作**：

1. 开发基于 ArUco 视觉引导的无人机精准降落程序，实现自动返巢充电。
2. 编写无人机控制程序（ROS），部署 Cartographer 二维重定位算法，完成无人机自主巡检全流程的软硬件联调。

</div><div markdown="1">

</div>
</div>


<!-- project 2 -->
## 小型固定翼无人机低空感知与避障系统

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.08 - 2023.06</div>
<img src="{{ '/images/GIF/2023-6-11-fly.gif' | relative_url }}" alt="固定翼无人机低空感知与避障" width="100%">
</div>
<div class='paper-box-text' markdown="1">

针对民用无人机飞行过程中可能威胁安全的各类障碍物，采用小型化机载雷达与避障算法，面向微小型民用无人机、建筑物和高压输电塔三类障碍物，开展探测、定位、预警与飞行避障试验。 **主要工作**：

1. 开发飞控、自研毫米波雷达与任务计算机之间的串口数据协议驱动，实现多模块数据的跨平台交互（ROS）。
2. 开发基于毫米波雷达的小型固定翼无人机感知避障算法，实现对多类障碍物的自主感知与避障。

</div><div markdown="1">

</div>
</div>


<!-- project 3 -->
## GNSS 拒止环境下的无人机视觉定位与导航

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.12 - 2023.05</div>
<img src="{{ '/images/GIF/2023-5-7-vision-uavs.gif' | relative_url }}" alt="无人机视觉定位与导航" width="100%">
</div>
<div class='paper-box-text' markdown="1">

为提升军事装备的侦察、监视与目标识别能力，开发基于纯视觉导航的智能无人机系统，在 GNSS 拒止环境中实现对桥梁、坦克、装甲车辆等地面军事目标的准确识别与定位。 **主要工作**：

1. 在 NVIDIA Xavier 上部署视觉定位、视觉避障（3DVFH+），以及基于下视相机的目标识别与坐标转换功能。
2. 负责机载设备固定结构设计，完成三架无人机的整体装配与飞行调试。

</div><div markdown="1">

</div>
</div>



<h1 id="-honors-and-awards">🎖 荣誉奖励</h1>

- *2024.12* 硕士研究生国家奖学金
- *2024.07* “飞航杯”装备智能设计大赛无人集群挑战赛第二名
- *2024.07* 中国国际大学生创新大赛产业命题赛道陕西省省级奖项
- *2024.05* 山西省第八届研究生创新成果展校内一等奖
- *2023.05* 中国机器人大赛暨 RoboCup 公开赛无人机实物投送赛全国二等奖
- *2022.10* 中国机器人大赛暨 RoboCup 公开赛无人机实物投送赛全国二等奖
- *2021.05* 中国大学生工程实践与创新能力大赛天津市一等奖（第三名）
- *2020.10* 中国 TRIZ 杯大学生创新方法大赛全国二等奖。
- *2020.08* “西门子杯”中国智能制造挑战赛全国二等奖。


<h1 id="-other-projects">🔍 其他项目</h1>

- *2024.01 – 2025.01* 西北工业大学研究生实践与创新能力培养基金，项目负责人（PI，编号：PF2024074），复杂未知环境下旋翼无人机自主探索与目标搜索。

- *2024.12 – 2025.11* 教育部产教融合项目，项目负责人（PI，编号：J2160012），混凝土检测先锋：大型桥梁表观缺陷检测机器人。


<!-- project -->

## 中国机器人大赛无人机识别与快递运输实物赛

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2022.9-2022.12, 2023.5</div>
<img src="{{ '/images/GIF/2023-10-15-robocup.gif' | relative_url }}" alt="无人机识别与快递运输竞赛" width="100%">
</div>
<div class='paper-box-text' markdown="1">

在障碍环境下开展的无人机货物运输竞赛，主要考察自主飞行、避障、目标识别与货物投送等能力。无人机需要携带货物从起点出发，穿越障碍区域，找到合适目标完成快递投送，并自主降落。 **主要工作**：

1. 2022 年：修改无人机全流程代码逻辑，开展实机飞行调试，学习基于 PX4 的完整无人机系统。
2. 2023 年：移植、部署 Ego-planner（[自主避障算法](https://github.com/ZJU-FAST-Lab/ego-planner)），并指导师弟掌握无人机系统。

</div><div markdown="1">

</div>
</div>


<!-- Undergraduate level programs -->

## 中国大学生工程实践与创新能力大赛智能物流搬运项目

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2020.11 - 2021.4</div>
<img src="{{ '/images/GIF/2021-4-logistics-handling.gif' | relative_url }}" alt="智能物流搬运机器人" width="100%">
</div>
<div class='paper-box-text' markdown="1">

围绕智能制造的现实与未来发展，自主设计、搭建用于物料搬运的智能机器人。竞赛场景模拟企业制造流程，包括启停区、原料加工区、粗加工区、半精加工区和成品存储区。

**主要工作**： 主要负责团队分工、控制方案设计与硬件电路搭建，具体包括元件选型、步进电机控制、小车路径规划、电路板设计、焊接与调试。

</div><div markdown="1">

</div>
</div>


<!-- Undergraduate level programs -->

## 基于西门子 S7-1200 PLC 的三层三站电梯

<div class='paper-box'>
<div class='paper-box-image'>
<div class="badge">2019.9 - 2020.5</div>
<img src="{{ '/images/GIF/2020-4-an-elevator.gif' | relative_url }}" alt="三层三站电梯模型" width="100%">
</div>
<div class='paper-box-text' markdown="1">

设计简化电梯模型，完成机械结构设计制作与控制系统设计实现，完成电梯基本功能验证。 **主要工作**：

1. 主要负责部分元件选型、PLC 程序编写，以及电梯实物的装配与调试。
2. 基于项目成果开展转化，包括撰写外观设计专利与实用新型专利，参加相关西门子智能制造挑战赛并获奖。

</div><div markdown="1">

</div>
</div>

<!-- Undergraduate level programs -->
<!-- 还有两个暂时没有写： 水陆空多栖移动飞行器 & 微流控... files in onedrive-->


<!-- permalink: /project1/ -->
<!-- 不得行... 排版是乱的 -->
<!-- About my zhihu [Details about zhihu](/project1/) -->
