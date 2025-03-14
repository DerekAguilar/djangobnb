from rest_framework import serializers

from .models import Property

from useraccount.serializers import UserDetailsSerializer

class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model=Property
        fields=(
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

class PropertiesDetailsSerializer(serializers.ModelSerializer):
    host=UserDetailsSerializer(read_only=True,many=False)
    class Meta:
        model=Property
        fields=(
            'id',
            'title',
            'description',
            'price_per_night',
            'image_url',
            'bedrooms',
            'bathrooms',
            'guests',
            'host'
        )