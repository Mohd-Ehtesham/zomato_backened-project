<h1 align="center">
  <br>

Zomato Orders

</h1>

Zomato Orders is an api that allows users to get the data when they hit the endpoint "http://localhost:8080/api/orders". It also provides the facility to limit and offset the data by adding limit and offset params in the request.

<h2 align='center'>
<a href='https://generator-flashcard.vercel.app/' target="_blank">Demo</a>
</h2>

<p align="center">  
  <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Build Process](#build-process)

## Introduction

The Zomato Orders API provides access to order data for users by interacting with the endpoint http://localhost:8080/api/orders. This API allows users to retrieve detailed order information efficiently. To enhance flexibility in data retrieval, the API supports pagination through limit and offset parameters. By specifying these parameters, users can control the number of records returned and navigate through the data set as needed.

## Features

A few of the things you can do with Zomato Orders API:

Data Retrieval: Access comprehensive order data by hitting the endpoint http://localhost:8080/api/orders.

Pagination Support: Use the limit parameter to specify the number of records returned in a single response, and the offset parameter to navigate through different subsets of data.

Flexible Querying: Customize your data retrieval by combining limit and offset to suit your specific needs for data analysis or display.

## Tech Stack

Zomato Orders is built using the following technologies:

Express: Express is a fast, minimalist web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a suite of features for handling HTTP requests, routing, middleware, and more. Express streamlines server-side development and is widely used in Node.js projects for its ease of use and flexibility.

MariaDB: MariaDB is an open-source relational database management system (RDBMS) that is a fork of MySQL. It is designed to be highly compatible with MySQL, offering robust performance, reliability, and scalability. MariaDB is used to manage and query data, providing powerful SQL capabilities and support for complex queries and transactions.

Nodemon: Nodemon is a utility that monitors for changes in the source code of a Node.js application and automatically restarts the server when changes are detected. This tool enhances the development workflow by eliminating the need to manually restart the server after every code update, leading to a more efficient and productive development process.

## Build Process

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Mohd-Ehtesham/zomato_orders.git

# Go into the repository
$ cd zomato_orders

# Install dependencies
$ npm install

# Run the app
$ npm start
```
