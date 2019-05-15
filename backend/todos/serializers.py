""" serializer defintions for todos app """
from rest_framework import serializers

from .models import Todo


class TodoSerializer(serializers.ModelSerializer):
    """ serializer for Todo model """
    class Meta:
        model = Todo
        fields = ('id', 'title', 'body')
