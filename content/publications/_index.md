---
title: Projects and Publications
description: 'Robotics projects and publications by Xuming Meng'
---

<div class="projects">

My work focuses on reactive, contact-rich manipulation: robots that keep adapting while they reach, grasp, and touch. Most of my research projects run on [DLR neoDavid](https://www.dlr.de/en/rm/research/robotic-systems/humanoids/david), an elastic humanoid robot ([video](https://www.youtube.com/watch?v=N5QTvjFdIPM)).

## Projects

### Tactile-Reactive Dual-Arm Cable Manipulation
<p class="project-meta">Agile Robots SE · Hannover Messe 2026</p>

{{< youtube id="pFtdNkM4TY0" loading="lazy" title="Tactile-Reactive Dual-Arm Cable Manipulation at Hannover Messe 2026" >}}

Robust manipulation of deformable objects remains challenging in industrial robotics due to uncertain object geometry, complex contact interactions, and limited observability from external vision. This work investigates tactile-reactive manipulation by integrating high-resolution vision-based tactile sensing with coordinated dual-arm robotic control.

By exploiting rich contact information, the robotic system enables adaptive cable handling, tactile-guided sliding and inspection, and precise connector insertion. The approach addresses limitations of conventional vision-only and predefined motion strategies, allowing robots to continuously adapt their behavior based on physical interactions.

The system was integrated and demonstrated on two Agile Robots Thor 3 robotic arms at Hannover Messe 2026, highlighting the potential of tactile-guided control for robust, contact-rich industrial automation.

### Finger Flow: Reactive Reach-while-Grasp
<p class="project-meta">DLR · Robotics and Autonomous Systems, 2025</p>

{{< youtube id="3c2S1zHuVUM" loading="lazy" title="Finger Flow: Reactive Reach-while-Grasp on DLR neoDavid" >}}

Grasping a moving object without first stopping to plan. Finger Flow generates arm and finger motion together, so the robot keeps adapting its reach and grasp while the target moves or the grasp is disturbed.

- Real-time motion generation at 3 kHz for a 6-DoF arm and a 20-DoF hand.
- Closed-loop perception feedback at 30 Hz for unpredictably moving objects.
- Grasps can be interrupted and recovered at any time, for example during adversarial human-to-robot handover.

{{< figure src="/publications/images/ff_1.gif" caption="Catching an unpredictably moving object with 30 Hz perception feedback. © DLR 2025" >}}
{{< figure src="/publications/images/ff_3.gif" caption="Adversarial human-to-robot handover: grasp interruption and recovery at any time and place. © DLR 2025" >}}

### Dishwasher Unloading with neoDavid
<p class="project-meta">DLR · live demo, Automatica 2022 and European Robotics Forum 2024</p>

Everyday manipulation on an elastic humanoid: unloading a dishwasher with compliant arm and hand control, shown live at international venues.

{{< figure src="/publications/images/david_dw.gif" caption="DLR neoDavid emptying a dishwasher. © DLR 2023" >}}

### Force Control for Constrained Elastic-Joint Robots
<p class="project-meta">DLR · IEEE Control Systems Letters, 2023 · oral at CDC 2022</p>

Passivity-based motion and force tracking for elastic-joint robots under holonomic constraints, such as two arms holding one object or several fingers grasping together.

{{< figure src="/publications/images/constraint.jpg" caption="Force control for constrained elastic-joint robots, for example dual-arm or multi-fingered grasping. © IEEE 2022" >}}

### Structure-Preserving Control of Variable-Stiffness and Tendon-Driven Systems
<p class="project-meta">DLR · ECC 2021 · IEEE Control Systems Letters, 2022 · IEEE RA-L</p>

Impedance and motion control that keeps the natural elastic structure of the robot instead of cancelling it, applied to antagonistic variable-stiffness actuators and to the nonlinearly coupled tendons of the neoDavid hand.

{{< figure src="/publications/images/bavs.png" caption="neoDavid forearm with bidirectional antagonistic variable-stiffness actuators (BAVS). © IEEE 2021" >}}
{{< figure src="/publications/images/hand.png" caption="neoDavid hand: 20-DoF elastic, tendon-coupled hand. © IEEE 2022" >}}
{{< figure src="/publications/images/finger_fas.png" caption="The neoDavid hand uses 36 flexible antagonistic spring (FAS) actuators. © IEEE 2022" >}}

### Human Motion Projection for Safe Collaboration
<p class="project-meta">DLR · ICRA 2021</p>

Predicting fast, explosive human motion in real time so a robot can stay safe without slowing down collaboration unnecessarily.

{{< figure src="/publications/images/human_projection.gif" caption="Real-time human dynamics projection and trajectory estimation. © DLR 2021" >}}

## Publications

### Journals

- **X. Meng**, H. Maurenbrecher, A. Albu-Schäffer, and M. Keppler, "Finger Flow: Reactive Reach-while-Grasp Generation for Robotic Arms with Multi-Fingered Hands," *Robotics and Autonomous Systems*, 2025.
- S. Wolf, T. Bahls, B. Deutschmann, A. Dietrich, M. Harder, H. Höppner, C. Hofmann, A. H. Martin, M. Keppler, L. Klüpfel, H. Maurenbrecher, **X. Meng**, A. E. Reichert, M. Bihler, M. Chalon, O. Eiberger, W. Friedl, M. Grebenstein, M. Iskandar, V. Langofer, M. Pfanne, A. Raffin, J. Reinecke, T. Wüsthoff, and A. Albu-Schäffer, "neoDavid – A Humanoid Robot with Variable Stiffness Actuation and Dexterous Manipulation Skills," *IEEE Robotics and Automation Magazine*, 2025.
- **X. Meng**, M. Keppler, and C. Ott, "Passivity-Based Motion and Force Tracking Control for Constrained Elastic Joint Robots," *IEEE Control Systems Letters*, vol. 7, pp. 217–222, 2023. Oral at CDC 2022.
- **X. Meng**<sup>+</sup>, G. J. Pollayil<sup>+</sup>, M. Keppler, M. Pfanne, A. Bicchi, and C. Ott, "Elastic Structure Preserving Impedance Control for Nonlinearly Coupled Tendon-Driven Systems," *IEEE Control Systems Letters*, vol. 6, pp. 1982–1987, 2022. Oral at ACC 2022. (<sup>+</sup> equal contribution)
- M. C. Harder, M. Keppler, **X. Meng**, C. Ott, H. Hoeppner, and A. Dietrich, "Simultaneous Motion Tracking and Joint Stiffness Control of Bidirectional Antagonistic Variable-Stiffness Actuators," *IEEE Robotics and Automation Letters*. Best Paper Award honorable mention.

### Conferences

- **X. Meng**, M. Keppler, and C. Ott, "Elastic Structure Preserving Impedance Control of Bidirectional Antagonistic Variable Stiffness Actuation," *European Control Conference (ECC)*, 2021, pp. 263–269.
- **X. Meng** and R. Weitschat, "Dynamic Projection of Human Motion for Safe and Efficient Human-Robot Collaboration," *IEEE International Conference on Robotics and Automation (ICRA)*, 2021, pp. 3765–3771.

Full list on [Google Scholar](https://scholar.google.com/citations?user=NfbJhgEAAAAJ&hl=en).

</div>
