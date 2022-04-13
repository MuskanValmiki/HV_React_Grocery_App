from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import AppSerializer
from .models import App
from rest_framework.response import Response
# Create your views here.

class AppView(APIView):

    def get(self,request):

        api = App.objects.all()
        serializer = AppSerializer(api,many=True)
        return Response(serializer.data)