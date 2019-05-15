""" view definitions for todos app """
from rest_framework import generics

from .models import Todo
from .serializers import TodoSerializer


class ListTodo(generics.ListAPIView):
    """ docstring """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class DetailTodo(generics.RetrieveAPIView):
    """ docstring """
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
