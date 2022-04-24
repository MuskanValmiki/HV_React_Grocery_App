from django.contrib import admin
from .models import App

class AppAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'description', 'location','price')

# Register your models here.

admin.site.register(App, AppAdmin)