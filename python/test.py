import os
import sys
import random

url = "/oauth/oauth20/token"

secret = "t1PCdw3M2B1TfJhoaY2mL736p2vCUc47"

stripe = "sk_testfjggkgkjrhrhreereyryr464647e"

DATABASE_URL = "postgres://username:password@localhost:5432/dbname"

a = os.system(input("Enter something secret"))

b = "SELECT * FROM '%s'" % a

random.choice(range(9))
