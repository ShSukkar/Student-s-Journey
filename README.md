# Marbles Network

> This is an interactive and distributed, Studants sransfer in schools. Save and show students information and transfer students between participants(schools).

This business network defines:

**Participant**
`Schools`

**Asset**
`Students`

**Transaction**
`Transfare Students`

`Schools` participants are able to have `Students` assets and transfer these with `TransferStudents` transaction.




If you want to run the network on your local machine:

First, Install the pre-requisites by following the commands on this page:
https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html

Second, Install the development environment by following the commands on this page:
https://hyperledger.github.io/composer/latest/installing/development-tools.html
 
Finally by following these steps: 
1- Clone or download the repository

2- Navigate to the to the repository folder 

3- The network should be packeged into a deployable archive using this command: 
   composer archive create -t dir -n .



4- Install the business network using this command:
   composer network install --card PeerAdmin@hlfv1 --archiveFile schools-network@1.0.0.bna



5- To start the business network rung the following command (takes 1 - 3 minutes): 
   composer network start --networkName schools-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card



6- To import the network administrator identity as a usable business network card, run the following command:
   composer card import --file networkadmin.card



7- To check if the business network has been deployed successfully, run the following command to ping the network: 
   composer network ping --card admin@schools-network



8- To create the REST API, run the following command:
   composer-rest-server
   and then answer the questions that will appear as the following :
   1- Enter admin@schools-network as the card name.
   2- Select never use namespaces when asked whether to use namespaces in the generated API.
   3- Select No when asked whether to secure the generated API.
   4- Select No when asked whether to enable authentication for the REST API using Passport.
   5- Select Yes when asked whether to enable event publication over WebSockets.
   6- Select No when asked whether to enable TLS security for the REST API.


  
  
9- (optional) You can also generate an Angular 4 application running against the REST API.
   and to do that follow these steps (takes 2 - 4 minutes): 
   1- To create your Angular 4 application, navigate to schools-network directory and run the following command:
      yo hyperledger-composer:angular
   2- Select Yes when asked to connect to running business network.
   3- You can just press Enter for these questions (project name, description, author name, author email, license).
   4- Enter admin@schools-network for the business network card.
   5- Select Connect to an existing REST API
   6- Enter http://localhost for the REST server address.
   7- Enter 3000 for server port.
   8- Select Namespaces are not used
   9- Wait untel it's done, then navigate to the angular file that you have generated (angular-app)
   10- Then run the following command: 
       npm start
       This will fire up an Angular 4 application running against your REST API at http://localhost:4200 .




To test this Business Network Definition in the **Test** tab:

Create two `School` participant:

```
{
  "$class": "org.schoolnetwork.School",
  "name": "Modern School",
  "adress": {
    "$class": "org.schoolnetwork.Adress",
    "country": "Jordan",
    "city": "Amman"
  }
}
```

```
{
  "$class": "org.schoolnetwork.School",
  "name": "Oxford School",
  "adress": {
    "$class": "org.schoolnetwork.Adress",
    "country": "Jordan",
    "city": "Amman"
  }
}
```

Create a `Students` asset:

```
{
  "$class": "org.schoolnetwork.Students",
  "studentId": "1",
  "fullName": "Ahmed",
  "birthday": "1999",
  "Grade": "12th",
  "GPA": 3.5,
  "status": "Enrolled",
  "currentSchool": "resource:org.schoolnetwork.School#Modern School"
}
```

Submit a `TransferStudents` transaction:

```
{
  "$class": "org.schoolnetwork.TransStudents",
  "student": "Ahmed",
  "newSchool": "Oxford School"
}
```

This transaction has transferred `Student: Ahmed` from `Modern School` to `Oxford School`.

Congratulations!

## License <a name="license"></a>
Hyperledger Project source code files are made available under the Apache License, Version 2.0 (Apache-2.0), located in the LICENSE file. Hyperledger Project documentation files are made available under the Creative Commons Attribution 4.0 International License (CC-BY-4.0), available at http://creativecommons.org/licenses/by/4.0/.
