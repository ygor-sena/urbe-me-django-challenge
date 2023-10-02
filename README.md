# Hi, welcome to this page! 👋🏻

##### ⚠️ Caso você não entenda inglês, leia a versão deste README em português [neste link](https://github.com/ygor-sena/urbe-me-django-challenge/blob/main/README-pt.md). ⚠️

## Introduction

This README.md succinctly describes the project's solution to a challenge that required the implementation of a Django web application with at least two API endpoints and a data request.

This project was developed using Ubuntu 22.04 on WSL (_Windows Subsystem for Linux_), between September 29th, 2023 and October 1st, 2023.

## About the development process

The challenge allows many diferent implementations and API choices. To get some ideas, I checked out [Public APIs](https://github.com/public-apis/public-apis). Since Google APIs diverse and are well-documented, I started to research more about this topic. Later, I found a tutorial from freeCodeCamp.org about Django+Google APIs and decided to use this project as reference during the challenge implementation.

As the tutorial is from two years ago, I had the change to learn about good coding practices and up-to-date development, as some functions were outdated. After finishing the functional part of the project, I focused on the front-end and I tried to make it similar to the [urbe.me](https://urbe.me/) website, using the same font and similar color palette.

Each function has code comments to help the reader understand the project more easily.

## About the project

This project is an origin-destination web application. The user inputs to two addresses: a starting point and an ending point. The website will generate a route map for car driving plus route instructions, duration and distance.

To achieve this, the project must use several Google APIs, i.e., PlacesAPI, Directions API, Google Geocoding, Maps Javascript API and Distance Matrix API.

The addresses are restricted to Brasil only.

## Compiling, using and running the project

#### 1) Copy this repository to your local workstation

```html
git clone https://github.com/ygor-sena/urbe-me-django-challenge.git
```

After that, use `cd <dir_name>` to access the repository.

#### 2) Create a virtual enviroment to run the project

**Make sure that your local machine has `virtualenv` command installed.** Otherwise, refer to this link before proceeding: [Installing packages using pip and virtual environments](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)

```html
cd urbe_me_django_challenge && ./run_script.sh
```

⚠️ If you have some issues with decouple module being unable to be imported, try (check [this link](https://www.datasciencelearner.com/importerror-cannot-import-name-config-from-decouple-solved/) for further explanation):

```html
pip uninstall decouple
pip install python-decouple
```

#### 3) Run project

Depending on the Python version of your local machine, you may execute the commands below using `python` or `python3`. If its version is 3 or higher, use `python3`.

```html
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

#### 4) Launch the web application

Open your favorite browser and type the following URL:

```html
https://localhost:8000
```

#### 5) Usage example

Type an origin address and destination address in its respective fields to be redirected to the map directior and furthur driving route information.

## Project Images

![first+page](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/fc5ab18a-24a2-4054-91c4-9a05ceb2685e)

![mapa](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/db6c7c00-7c7a-49ce-9e68-db52555341c8)

![final](https://github.com/ygor-sena/urbe-me-django-challenge/assets/102881479/e2f80ce2-3e00-4bd1-ab12-70d9bc102811)

## Tools used

- VSCode + WSL Ubuntu 22.04 for development enviroment
- GitHub for storing source code
- [Effie](https://www.effie.pro/) for compiling references, annotating and visualizing ideas

## Concepts learned during the process

- How to generate a Google API Key on Google Cloud
- How to use PlacesAPI, Directions API, Google Geocoding, Maps Javascript API and Distance Matrix API
- Django, HTML, CSS and JavaScript fundamentals
- Usage of browser inspector for debug and code enhancement purpose
- Possibility of Django documentation using the Sphinx tool

## Final thoughts

I enjoyed working on this project a lot because I could further deepen some fundamentals skills in web development using the Django framework. Thus, I got to know more about Google APIs and how to use them together in an application. Thank you for this opportunity!

## Disclaimer

This project contains my API key for accessing Google resources. Although it is not recommended, I have included it to facilitate the users when compiling the project on their local machine. Once this repository is evaluated, this key will be removed for security reasons.

## Project References

To get some ideas about free APIs: https://github.com/public-apis/public-apis
To learn how to use Google APIs + Django: 
[Python Django and Google APIs - Project Tutorial](https://www.youtube.com/watch?v=_vCT42vDfgw) by freeCodeCamp.org
