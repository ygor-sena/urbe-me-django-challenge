import settings
import requests
from humanfriendly import format_timespan

'''
Once the latitude and longitude are valid, this function calls the Google
API to get the route and the map. It returns a dictionary with the origin,
destination, distance, duration, and route instructions.
'''
def getRoadMap(*args, **kwargs):

  lat_a = kwargs.get("lat_a")
  long_a = kwargs.get("long_a")
  lat_b = kwargs.get("lat_b")
  long_b = kwargs.get("long_b")

  origin = f'{lat_a},{long_a}'
  destination = f'{lat_b},{long_b}'

  result = requests.get(
    'https://maps.googleapis.com/maps/api/directions/json?',
    params={
        'origin': origin,
        'destination': destination,
        "key": settings.API_KEY
    }
  )

  directions = result.json()

  if directions["status"] == "OK":
    route = directions["routes"][0]["legs"]

    route_list = []
    distance = int(route[0]["distance"]["value"])
    duration = int(route[0]["duration"]["value"])

    route_step = {
      'origin': route[0]["start_address"],
      'destination': route[0]["end_address"],
      'distance': route[0]["distance"]["text"],
      'duration': route[0]["duration"]["text"],
      'steps': [
        [
          s["html_instructions"],
          s["distance"]["text"],
          s["duration"]["text"],
        ]
        for s in route[0]["steps"]
      ]
    }
    route_list.append(route_step)

  return {
    "origin": origin,
    "destination": destination,
    "distance": f"{round(distance / 1000, 2)} Km",
    "duration": format_timespan(duration),
    "route": route_list
  }
