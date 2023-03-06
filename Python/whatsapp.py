from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import itertools
import pandas as pd

#What the below piece of code does is basically add an option to store your session details. This is done so that you don’t necessarily
#have to log in to Web Whats-app every-time. It can also store details for other accounts such as Google or Facebook as well.
chrome_options = Options()
chrome_options.add_argument("--user-data-dir=user-data")

driver = webdriver.Chrome(options=chrome_options, executable_path="C:/path/to/chromedriver")
wait = WebDriverWait(driver, 60)
print("Chrome opened successfully!")

Web_whatsapp = 'https://web.whatsapp.com/'  # To go to whatsapp web
driver.get(Web_whatsapp)
print("Accessing Whatsapp web")

df = pd.read_excel("C:\\Path\\to\\Excel\\file.xlsx")
Number = df['Column name for phone number exactly '].tolist()
Name = df['Column name for the name of the contact'].tolist()
Variable = df['Column name for the variable to send to the contact which is going to be contacted to the body of the message'].tolist()

