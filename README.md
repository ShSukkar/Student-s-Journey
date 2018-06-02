Student's Journey (Using Hyperledger Fabric Composer)

The business network of this application defines:

**Participant**
`Schools`
`Universities`

**Asset**
`Students`

**Transaction**
`Transfer Students from one school to another, or from a school to a university, or from a university to another`


**In order to test the network on your local machine:**

First, install the pre-requisites by executing the commands on this page:
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html

Second, install the development environment by executing the commands on this page:
https://hyperledger.github.io/composer/latest/installing/development-tools.html
 
Third, follow the below steps:
1- Clone or download the Schools-Network repo:
https://github.com/RbkCrypto/Schools-Network

2- Navigate in terminal to the repo location on your machine. 

3- The network should be packaged into a deployable archive by executing the command below, which will create the bna file in the current folder: 
composer archive create -t dir -n .
   

![1](https://user-images.githubusercontent.com/36267291/40787989-a253335e-64f7-11e8-9d31-e96a4ba518eb.png)

4- Install the business network using this command:
   composer network install --card PeerAdmin@hlfv1 --archiveFile schools-network@1.0.0.bna
   Note: schools-network is the name of this app network, you can name it as you prefer.

![2](https://user-images.githubusercontent.com/36267291/40788099-ea687d2a-64f7-11e8-9be2-95a1b453166f.png)

5- To start the business network run the following command (takes 1 - 3 minutes): 
   composer  network start --networkName schools-network --networkVersion 1.0.0 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

![3](https://user-images.githubusercontent.com/36267291/40788118-f4003878-64f7-11e8-88d5-93d403cf0423.png)

6- To import the network administrator identity as a usable business network card, run the following command:
   composer card import --file networkadmin.card

![4](https://user-images.githubusercontent.com/36267291/40788133-0059b04a-64f8-11e8-8407-9779abf35a35.png)

7- To check if the business network has been deployed successfully, run the following command to ping the network: 
   composer network ping --card admin@schools-network

![5](https://user-images.githubusercontent.com/36267291/40788239-46c8888a-64f8-11e8-9135-d2d3b7b8edd1.png)

**To create the REST API, run the following command:**

   composer-rest-server
   
   and then answer the questions that will appear as following :
   
   1- Enter admin@schools-network as the card name.
   
   2- Select never use namespaces when asked whether to use namespaces in the generated API.
   
   3- Select No when asked whether to secure the generated API.
   
   4- Select No when asked whether to enable authentication for the REST API using Passport.
   
   5- Select Yes when asked whether to enable event publication over WebSockets.
   
   6- Select No when asked whether to enable TLS security for the REST API.

![6](https://user-images.githubusercontent.com/36267291/40788297-615474c0-64f8-11e8-9177-909c4cb6494a.png)
  
   
   **The Last step:**
       Navigate to school-app which is the client application (Angular4),
       then run the following command and the network will be ready to be used:
       `npm start`
       This will start the angular application running against your REST API at http://localhost:4200
