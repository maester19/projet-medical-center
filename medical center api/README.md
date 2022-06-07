# LOINC API

## Requiement
1. node js (https://nodejs.org/en/)
2. python (https://www.python.org/downloads/) for menu api

## Task

1. Install all dependenciess
```
npm install
```
2. Install nodemon
```
npm install -g nodemon
```
3. Start server
```
nodemon app.js
```
4. Test Server
```
curl -X GET "http://localhost:3000/api" -H "accept: application/json"
```
or (http://localhost:3000/api) in your browser

## API DOCUMENTATION
in your browser (http://localhost:3000/docs/)

## CLIENT CALL
```
curl --cacert my-ca.crt https://[my domain or IP address]
```