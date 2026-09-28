# AWS Full-Stack Web App Deployment

A beginner-friendly project demonstrating how to deploy a full-stack Node.js and Express application to the cloud using **Amazon Web Services (AWS EC2)**.

## 🚀 Project Overview
This project takes a local web application and provisions it in a live cloud production environment, covering:
* **Cloud Compute:** Hosting on an AWS EC2 Ubuntu instance.
* **Networking & Security:** Configuring Security Groups (inbound rules) and static Elastic IPs for public access.
* **Full-Stack Integration:** Connecting an HTML/CSS frontend with a Node.js & Express backend API.

## 🛠️ Tech Stack
* **Backend:** Node.js, Express.js
* **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
* **Cloud Platform:** AWS (EC2, Security Groups, Elastic IPs)

## ⚙️ Local Setup & Testing
1. Clone the repository:
   ```bash
   git clone [Link of the github repo Url]
   ->Navigate into folder(aws-deployment)
   ->npm install
   ->npm start


   
Terminal Commands Reference (AWS EC2)
#### 1. Initial Setup & Installing Node.js (Run once on a new EC2 instance)
```bash
sudo apt update -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
