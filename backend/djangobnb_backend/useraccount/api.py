from django.http import JsonResponse

from rest_framework.decorators import api_view,authentication_classes,permission_classes

from .models import User
from .serializers import UserDetailsSerializer

from  property.serializers import ReservationsListSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def host_details(request,pk):
    user=User.objects.get(pk=pk)

    serializer=UserDetailsSerializer(user,many=False)
    
    return JsonResponse(serializer.data,safe=False)

@api_view(['GET'])
def reservations_list(request):
    reservations=request.user.reservations.all()
    serializer=ReservationsListSerializer(reservations,many=True)
    return JsonResponse(serializer.data,safe=False)