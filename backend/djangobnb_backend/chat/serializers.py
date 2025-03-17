from rest_framework import serializers

from .models import Conversation,ConversationMessage

from useraccount.serializers import UserDetailsSerializer

class ConversationsListSerializer(serializers.ModelSerializer):
    users=UserDetailsSerializer(many=True,read_only=True)
    class Meta:
        model=Conversation
        fields=('id','users','modified_at',)

class ConversationDetailsSerializer(serializers.ModelSerializer):
    users=UserDetailsSerializer(many=True,read_only=True)
    class Meta:
        model=Conversation
        fields=('id','users','modified_at',)