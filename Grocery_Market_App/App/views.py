from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import AppSerializer
from .models import App
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
# Create your views here.

class AppView(APIView):
    def get(self,request):
        api = App.objects.all()
        serializer = AppSerializer(api,many=True)
        return Response(serializer.data)

class Details(APIView):
    def get(self, request, pk):
        data = get_object_or_404(App, pk=pk)
        serializer = AppSerializer(data)
        return Response(serializer.data)