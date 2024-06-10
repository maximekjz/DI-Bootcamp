import datetime

yyyy,mm,dd=input("Enter your birthdate (specify the format: YYYY MM DD ").split()

current_date=datetime.date.today()
c_y=current_date.strftime("%Y")
c_m=current_date.strftime("%m")
c_d=current_date.strftime("%d")

yyyy=int(yyyy)
mm=int(mm)
dd=int(dd)
c_y=int(c_y)
c_m=int(c_m)
c_d=int(c_d)

age=c_y-yyyy
if mm==c_m:
    if dd==c_d:
        print("Happy Birthday!")
    elif dd>c_d:
        age-=1
elif mm>c_m:
    age-=1

candles=age*"i"
cake_d=age*"_"
cake_d2=age*"^"
cake_d3=age*"~"
cake_d4=int(age/2)*" "
cake_d5=int(age/4)*"_"

cake=f"""
        {cake_d5}{candles}_{cake_d5}
       |{cake_d4}:H:a:p:p:y:{cake_d4}|
     __|_____{cake_d}______|__
    |^^^^^^^^^{cake_d2}^^^^^^^^|
    |{cake_d4}:B:i:r:t:h:d:a:y:{cake_d4}|
    |         {cake_d4}{cake_d4}        |
    ~~~~~~~~~~{cake_d3}~~~~~~~~~
    """

print(cake)