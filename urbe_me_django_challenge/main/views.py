from django.shortcuts import render, redirect, reverse
import settings

from .mixins import getRoadMap

'''
This function is used to render the route.html page. It is the first
page that the user sees and it is used to get the latitude and longitude
using Google APIs which are accessed using the API key from settings.py.
'''
def route(request):
  context = {"google_api_key": settings.API_KEY}
  return render(request, 'main/route.html', context)


'''
This function is used to render the map.html page. It is the second
page that the user sees and it is used to display the map and the route.
The user only see this page if the latitude and longitude are both valid.
'''
def map(request):
  lat_a = request.GET.get("lat_a", None)
  long_a = request.GET.get("long_a", None)
  lat_b = request.GET.get("lat_b", None)
  long_b = request.GET.get("long_b", None)

  if lat_a and lat_b:
    directions = getRoadMap(
      lat_a= lat_a,
      long_a=long_a,
      lat_b = lat_b,
      long_b=long_b,
    )
  else:
    return redirect(reverse('main:route'))

  context = {
    "google_api_key": settings.API_KEY,
    "lat_a": lat_a,
    "long_a": long_a,
    "lat_b": lat_b,
    "long_b": long_b,
    "origin": f'{lat_a}, {long_a}',
    "destination": f'{lat_b}, {long_b}',
    "directions": directions,
  }

  return render(request, 'main/map.html', context)
