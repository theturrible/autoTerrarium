import smbus
import time
bus = smbus.SMBus(1)
address = 0x77
address2 = 0x39

while True:
    data = ""
    data2 = ""
    for i in range(0, 5):
            data += chr(bus.read_byte(address));
    for i in range(0, 5):
            data2 += chr(bus.read_byte(address2));
    print "Data @ 77"
    print data
    print "Data @ 39"
    print data2
    time.sleep(1);