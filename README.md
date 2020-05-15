# MICRO_SERVICES
A simple microservices setup with various microservices hosted in docker containers in different Amazon EC2 instances. The microservices are coupled with Mongo DB cloud atlas ( DB)  for data transfer. We have a webapplication hosted in a specific AWS EC2 instance that connects with various microservices over REST APIs. An nginx reverse set up proxy has been setup so that the customer his the proxy server but not the webapplication directly. ( security reasons). With microservices implemented in different EC2 instances , load blancing shouldn't be a problem as different service instances can be orchestrated based on the demand and the load.


<Image src="images/microservice.jpg" class="center" style="width:50%">
  
 Click to navigate to the portal [Microservices](http://3.134.98.155:3000/)
