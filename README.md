# NEST CAM

[![N|Solid](https://nest.com/blog/images/2016-07-14/blog_hero_final-4e6d785734.jpg)](https://nest.com/camera/install-and-explore/)

As the name specifies 'Nest Cam' is a camera cum security device but it has functionalities way ahead from its name.

In this project we integrating 'Nest Cam' with our mobile device applications and adding more functionalities to it using **_Ionic 2 framework_, _node js_, _git bash_, _Visual Studio Code_**.

**Some of the functionalities achieved are as follows:**

- [x] Interactive User Interface.

- [x] Get an email notifiation with any unwanted activity or movement.

- [x] User get notified on exact time for number of motion alerts and can ask for the snapshot anytime.

- [x] Application is being created keeping platforms like [android/ios](http://www.diffen.com/difference/Android_vs_iOS)  in mind.

- [ ] With the email notification a call on the user registered phone number to address him/her status like your device cable disconnected, video streaming stopped, etc.

Nest Cam combines easy installation with true 24/7 security inside and out.
**Features include:**
* **Weatherproof** – The weatherproof design of Nest Cam meets the demands of a broad range of temperatures and conditions faced by outdoor cameras.
* **Easy outdoor and indoor setup**
* **Clear 24/7 live video** – A 130° view through a high quality glass lens shows the full picture in crisp 1080p HD. When it’s dark, Night Vision illuminates the whole scene with 8 powerful infrared LEDs. And with the Nest app, customers can control and watch live video from anywhere, anytime.
* **Secure Streaming** – Stream and store video content using powerful encryption technology seamlessly (2048-bit RSA key with 128-bit SSL connection).
* **Talk and Listen** – See someone at the door, talk back to get their attention thanks to the built in speaker and microphone. Or tell the delivery man to go ahead and leave the package around back.

**Additional Functionalities:**
- View list of devices at home
- View energy event status
- View or set Away state
- view postal Zip code
- set ETA

## Installation procedure
**To get it start first we have to "_install the dependencies from npm_"**:

1. [Install node js](https://nodejs.org/)

2. [Install Git Bash on your dev machine](https://git-scm.com/downloads)
* Create a folder for placing all the project contents and files.
* Git bash on the empty project folder.
* In the git bash command prompt clone this github repository using the following command:
**git clone _https://github.com/iyeremuk/nest-cam.git_** in the 'nodejs' command prompt.
* Since the repository is installed with some missing loadash libraries, we need to run the below command everytime this github repository is cloned.
3. [Install VisualStudio Code on your dev machine](https://code.visualstudio.com/)
* In the VSCode browse open the project folder and locate the files that need to be reprogrammed or edited.The whole project can be built and run using the command:
 **'ionic serve'** from the git bash command prompt of the project folder.

### Nest cloud API

[![N|Solid](http://www.happiestminds.com/wp-content/themes/hmtheme/images/api-services.png)](https://developers.nest.com/documentation/api-reference)

Nest cloud API is a near real-time data API offering subscription based access to data shared by Nest devices. Nest is a single device in structures,including all devices.Here data is built around the concept of devices with addressable data URL's called data locations.The video recorded by the nest device i.e camera is live fed in to the users desktop by means of REST API structure.
Various devices in the data model include:
* Thermostats
* Smoke control Aarms
* Cameras
* Yale clock
The data attributes for the nest camera is maintained in the form of json document as indicated by the below screenshot.
All the values updated in real-time are stored as JSON documents.

![picture alt] (https://github.com/iyeremuk/nest-cam/blob/development/camera%20metadata.png)

**How it works??**

When you build Works with Nest products, you'll use [Firebase client libraries](https://developers.nest.com/documentation/cloud/firebase-client-libraries) to subscribe to data values via the Nest cloud API. When a subscribed data value changes, the new data values are updated in real time, and stored as a standard JSON document. Your product can then update a display or trigger an action, based on the subscribed data.

In cases where the platform you're using has no available Firebase library, consider [REST Streaming](https://developers.nest.com/documentation/cloud/rest-streaming-guide).

The below picture illustrates how the devices interact with in the NestAPI 

![picture alt] (https://github.com/iyeremuk/nest-cam/blob/development/hownestworks.PNG)

**Nest Cam™**

* View camera online status or mic status
* View or change streaming status (turn video streaming on/off)
* View device name and where identifier
* View last online status change (last online/offline change)
* View subscription status (enrolled/not enrolled)
* View deep links to the live camera feed in the [Nest app (iOS, Android)](https://nest.com/app/) or on the web at [home.nest.com](https://home.nest.com/)
* View content related to the last event that triggered a notification, including:
* Sound or motion event detected
* Event start/stop times
* Deep links to image and gif files
* Structure name and device "where name" (location in the home)
* Snapshot on demand
* View activity zone names and ids, public share URL and share status (Requires Nest Aware)

#### Features of a successful nest product

1. **Shared device data and access control**
      - permission to access data is always granted by the user
      - users can revoke access anytime
2. **Data architecture**
      - Every value in the data model is addressable by URL
      - Strings, numbers, Booleans, objects or arrays can be stored in these     	data locations.
       - You can sync data from locations at multiple levels
3. **User authorization**
       - [web based](https://developers.nest.com/documentation/cloud/detailed-auth-data-flow#web-based-authorization-data-flow) and [pin based authorization](https://developers.nest.com/documentation/cloud/detailed-auth-data-flow#pin-based-authorization-data-flow)
       - For the much better understanding of Authorization here is the [sample code](https://developers.nest.com/documentation/cloud/sample-code-auth)
       
**_Authentication Process_**

1. Get credentials for Authorizations
2. Code is exchanged for an access token.
3. Access token is used to authorize API calls with Nest service.
4. Properties required to set up authorization:
5. Client_id -Unique to each product
5. State
6. Auth_code is exchanged for an access token
7. For acess_token we need:

- [x]  Authorzatioin Code

- [x]  Client_id

- [x]  Client_secret
