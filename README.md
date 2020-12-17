# Carpaccio-tanzia-brawlers
Carpaccio is a price calculating API.

## Getting started
Clone this project and then run the following commands : 
```bash
npm install
npm start
```
To run the tests : 
```bash
npm test
```

## V 1.0.0
Added a GET request at /id.  
Test it using the following command :
```bash
curl -i -X GET localhost:3000/id
```

## V 1.1.0
Added a POST request at /bill.  
Test it using the following command :
```bash
curl -i -X POST -H 'Content-Type: application/json' -d '{"prices": [10,20], "quantities" : [1,2]}' localhost:3000/bill
```

## V 2.0.0
Expanded the /bill POST resquest with a country's corresponding value-added tax.  
Test it using the following command :
```bash
curl -i -X POST -H 'Content-Type: application/json' -d '{"prices": [10,20], "quantities" : [1,2], "country" : "FR"}' localhost:3000/bill
```
Within the file /src/tva, a list of all possible countries is referenced.  
Adding a country's value-added tax entry should follow the following structure :
```bash
{"country" : <country>, "code" : <country_code>, "tva" : <country_values_added_tax_in_decimal_format> }
```

## Contributors
### Tanzia Brawlers 
* JABALLAH Sarra
* SLAMA Amenallah

![Logo](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0554b65d-9724-4e7d-a7b6-d0222239baeb/d6reh68-e1d5deb9-49e8-4ca2-b570-67fda7ef839f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDU1NGI2NWQtOTcyNC00ZTdkLWE3YjYtZDAyMjIyMzliYWViXC9kNnJlaDY4LWUxZDVkZWI5LTQ5ZTgtNGNhMi1iNTcwLTY3ZmRhN2VmODM5Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ZxyMLjzPC4CmYivBWq-Z6oCnYzDu2d4vcbV1zjfF_QE)
