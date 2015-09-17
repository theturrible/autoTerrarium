# API that reports the reading from the htu21d sensor

Gets: 

* /api/h
```
{
    "humidity": "49.3"
}
```
* /api/t
```
{
    "temperature": "23.8"
}
```
* /api/conditions
```
{
    "humidity": "49.0",
    "temperature": "23.8"
}
```

### Dependencies

* express
* htu21d-i2c


#### Note: Does not build on 4.0.0 due to i2c lib support
