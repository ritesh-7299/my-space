<h1 align="center">  MY SPACE :rocket:</h1>
<a name="readme-top"></a>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/99594669/229631346-75991dba-49de-4b38-ba73-75911383ae9b.png)


This application offers a seamless and secure authentication process for users through the Google OAuth protocol. This protocol is widely used by various applications and websites, and it provides an easy and secure way for users to sign in without having to create a new account or remember a separate password.

By integrating the NASA image of the day into this application, I provide users with a daily dose of fascinating and inspiring space imagery. The NASA image of the day is curated by NASA's Earth Observatory team and showcases stunning photographs and visualizations of Earth, the solar system, and the universe. This application makes it easy for users to stay up-to-date with the latest NASA imagery and to explore the wonders of space.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Front-end: React, HTML, Redux-toolkit, Tailwind css
* Back-end: Nodejs, Express
* Database: Mongodb
* Others: Passport authentication

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,nodejs,mongodb,tailwind,redux,express,js" />
  </a>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is a MERN stack project so you will have to run client and server both separately. Frontend side is stored in a client folder and backend side is stored in a
server folder.

### Prerequisites

* Node js - you can download and install it from [here](https://nodejs.org/en)
* Google Oauth credentials (client id, secret key) - for reference [How to get google credentials?](https://developers.google.com/fit/android/get-api-key)
* NASA API key - [NASA api](https://api.nasa.gov/) you can also checkout more informative apis by NASA and implement accordingly.

### Installation

_Below are the steps to install MY SPACE locally._

1. Get a free NASA API Key from [NASA api](https://api.nasa.gov/)
2. Get google oauth credentials [here](https://developers.google.com/fit/android/get-api-key)
Now you are good to go with the application
3. Clone the repo
   ```sh
   git clone https://github.com/ritesh-7299/my-space.git
   ```
4. Install NPM packages to both Client side and Server side
   ```js
   cd ./client/
   npm install
   
   cd ./server/
   npm install
   ```
5. Go to client folder make `.env` file and copy all the content of `.envExample` and add the value for all the .env variables
6. Similarly go to server foler make `.env` copy all the content of `.envExample` and add the value for all the .env variables
7. Now all is set, follow below commands to run application
8. Start server
   ```js
   cd ./server/
   npm run dev
   ```
9. Start client
   ```js
   cd ./client/
   npm start
   ```
Your project is running and you should see below screen..

![image](https://user-images.githubusercontent.com/99594669/229639597-5538494d-f15a-4cbd-b0c0-1e02d1134960.png)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

<h3>Ritesh Macwan - </h3>
<ul>
  <li>TWITTER - [https://twitter.com/ritesh_macwan7](https://twitter.com/ritesh_macwan7)</li>
  <li>EMAIL - [riteshmacwan07@gmail.com](riteshmacwan07@gmail.com)</li>
  <li>GITHUB - [https://github.com/ritesh-7299](https://github.com/ritesh-7299)</li>
</ul>
Project Link: [https://github.com/ritesh-7299/my-space](https://github.com/ritesh-7299/my-space)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
