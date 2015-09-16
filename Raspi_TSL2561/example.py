#!/usr/bin/python
import time
from Raspi_TSL2561 import TSL2561

Light = TSL2561(0x39)
while(True):
	var = Light.readLux(0)
	print "Total Light: %5d lux"%(var)
	time.sleep(3)