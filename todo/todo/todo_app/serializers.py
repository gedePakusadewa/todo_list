from rest_framework import serializers
from todo.todo_app.models import TodoModel

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoModel
        fields = '__all__'
