import requests
import random

latab = random.uniform(-90, 90)
lngab = random.uniform(-180, 180)

lata = str(latab)
lnga = str(lngab)

print (lnga)
print (lata)

url = "https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location=" + lata + "," + lnga + "&radius=999999&key="

response = requests.get(url)
data = response.json()

lat = str(data["location"]["lat"])
lng = str(data["location"]["lng"])

import os
def edit_first_two_lines(original_file, new_file, new_line1, new_line2):
    try:
        # Open the original file for reading
        with open(original_file, 'r') as original:
            # Read the first two lines from the original file
            lines = original.readlines()

        # Modify the content of the first two lines
        lines[0] = new_line1 + '\n'
        lines[1] = new_line2 + '\n'

        # Open the new file for writing
        with open(new_file, 'w') as new:
            # Write the modified content to the new file
            new.writelines(lines)

        print("File edited successfully.")
    except FileNotFoundError:
        print("The specified file does not exist.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
original_file = 'template.js'
new_file = 'index.js'
new_line1 = "let lat = " + lat + ";"
new_line2 = "let lng = " + lng + ";"




edit_first_two_lines(original_file, new_file, new_line1, new_line2)

