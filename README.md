# Express.js Server Unresponsiveness

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive, particularly under heavy load. The problem stems from an improper handling of asynchronous operations, leading to requests timing out.

## Bug Report
The `server.js` file contains the problematic code.  The server introduces a 5-second delay before responding.  Under load, this can cause requests to queue up and time out before the response is sent. This is further aggravated if you have a large number of parallel requests.

## Solution
The `server-fixed.js` file provides a solution by using a more robust approach to handle asynchronous tasks and prevent request timeouts. It uses techniques such as proper error handling, efficient use of resources, and potential techniques like connection pooling (depending on the database being used).

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node server.js` to start the buggy server.
4. Simulate load using tools like `wrk` or `k6`. Observe that requests can time out. 
5. Run `node server-fixed.js` and repeat step 4 to observe improved performance.

This example highlights the importance of careful asynchronous operation management in Express.js applications to ensure responsiveness and stability.