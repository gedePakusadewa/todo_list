from rest_framework.response import Response
from rest_framework import status, generics
from todo.todo_app.models import TodoModel
from todo.todo_app.serializers import TodoSerializer
from datetime import datetime

class Todo(generics.GenericAPIView):
	serializer_class = TodoSerializer
	queryset = TodoModel.objects.all()

	def get(self, request):
		serialize_todos = self.serializer_class(self.get_queryset(), many=True)

		return Response(serialize_todos.data)

	def post(self, request):
		serialize_todo = self.serializer_class(data=request.data)

		if serialize_todo.is_valid():
			serialize_todo.save()

			return Response(serialize_todo.data, status=status.HTTP_201_CREATED)

		return Response(serialize_todo.errors, status=status.HTTP_400_BAD_REQUEST)

class TodoDetail(generics.GenericAPIView):
	serializer_class = TodoSerializer
	queryset = TodoModel.objects.all()

	def get_todo(self, pk):
		try:
			return TodoModel.objects.get(pk=pk)
		except:
			return None

	def patch(self, request, pk):
		todo = self.get_todo(pk)

		if not todo:
			return Response({"status": "fail", "message": f"Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

		serialize_todo = self.serializer_class(todo, data=request.data, partial=True)

		if serialize_todo.is_valid():
			serialize_todo.validated_data['updatedAt'] = datetime.now()
			serialize_todo.save()

			return Response(serialize_todo.data, status=status.HTTP_200_OK)

		return Response(serialize_todo.errors, status=status.HTTP_400_BAD_REQUEST)

	def delete(self, request, pk):
		todo = self.get_todo(pk)

		if not todo:
			return Response({"status": "fail", "message": f"Note with Id: {pk} not found"}, status=status.HTTP_404_NOT_FOUND)

		todo.delete()

		return Response(status=status.HTTP_204_NO_CONTENT)