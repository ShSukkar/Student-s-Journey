# Student's Journey
This web application mainly is a distributed ledger for students records. It enables schools, universities and companies to track the student’s journey of transfering from one school to another, or from a school to a university or from university to companies.
It has been developed using blockchain technology (Hyperledger Fabric Composer), including Anglar4, express and couchDB. 
For models directory, it defines the business network of this application which includes:

**Participant**
```
Schools
Universities
```

**Asset**
```
Students
```

**Transaction**
```
Transfer Students from one school to another, or from a school to a university, or from a university to another
```

For lib directory, it includes the logic file which defines the logic of trasnferring process for a student.

The client folder is **schools-app** generally, **chools-app/src/app/** specifically.
It includes mainly the following components: School, university, Students, TransStudents.

## Table of Contents
1. [Getting Started](getting-started)
    1. [In order to test the network on your local machine](#in-order-to-test-the-network-on-your-local-machine)
    1. [To create the REST API, run the following command](to-create-the-REST-API,-run-the-following-command)
    1. [The Last step](#the-last-step)
1. [Credits](#credits)
    1. [Project's authors](#project's-authors)
1. [License](#license)

## Getting Started
### In order to test the network on your local machine:

#### First, install the pre-requisites by executing the commands on this page:
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html

#### Second, install the development environment by executing the commands on this page:
https://hyperledger.github.io/composer/latest/installing/development-tools.html
 
#### Third, follow the below steps:
1. Clone or download the Schools-Network repo:
https://github.com/RbkCrypto/Schools-Network

2. Navigate in terminal to the repo location on your machine. 

3. The network should be packaged into a deployable archive by executing the command below, which will create the bna file in the current folder:

   `composer archive create -t dir -n .`

4. Install the business network using this command:

   `composer network install --card PeerAdmin@hlfv1 --archiveFile schools-network@0.0.8.bna`
   
   Note: schools-network is the name of this app network, you can name it as you prefer.

5. To start the business network run the following command (takes 1 - 3 minutes):

   `composer  network start --networkName schools-network --networkVersion 0.0.8 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card`
   
6. To import the network administrator identity as a usable business network card, run the following command:

   `composer card import --file networkadmin.card`

7. To check if the business network has been deployed successfully, run the following command to ping the network:

   `composer network ping --card admin@schools-network`

### To create the REST API, run the following command:

   `composer-rest-server`
   
   and then answer the questions that will appear as following:
   
   1. Enter admin@schools-network as the card name.
   
   2. Select never use namespaces when asked whether to use namespaces in the generated API.
   
   3. Select No when asked whether to secure the generated API.
   
   4. Select No when asked whether to enable authentication for the REST API using Passport.
   
   5. Select Yes when asked whether to enable event publication over WebSockets.
   
   6. Select No when asked whether to enable TLS security for the REST API.


### The Last step:
Navigate to school-app which is the client application (Angular4), then run the following command and the network will be ready to be used: 
`npm start`

This will start the angular application running against your REST API at http://localhost:4200


## Credits
#### Project's authors are:
- [Atheer](https://github.com/Atheer83)
- [Dareen](https://github.com/dareenkhanash)
- [Hamzah](https://github.com/HamzaAlwan)
- [Livia](https://github.com/Elena-Livia)
- [Shatha](https://github.com/ShSukkar)

## License
Apache License, Version 2.0 [the License](http://www.apache.org/licenses/LICENSE-2.0)
