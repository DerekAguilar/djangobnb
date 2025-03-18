from django.urls import path
from . import api

urlpatterns=[
    path('',api.conversations_list,name='api_conversations_list'),
    path('<uuid:pk>/',api.conversations_details,name='api_conversations_details'),
    path('start/<uuid:user_id>/',api.conversations_start, name='api_conversations_start'),
]