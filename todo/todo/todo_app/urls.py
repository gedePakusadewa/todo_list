from django.urls import path
from todo.todo_app.views import Todo, TodoDetail

urlpatterns = [
    path('', Todo.as_view()),
    path('<str:pk>', TodoDetail.as_view()),
]
