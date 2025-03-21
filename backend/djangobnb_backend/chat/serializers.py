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

class ConversationMessageSerializer(serializers.ModelSerializer):
    sent_to=UserDetailsSerializer(many=False,read_only=True)
    created_by=UserDetailsSerializer(many=False,read_only=True)

    class Meta:
        model=ConversationMessage
        fields=('id','body','sent_to','created_by')