import uuid
from django.db import models

class TodoModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titla = models.CharField(max_length=255, unique=True)
    task = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Todo"
        ordering = ['-createdAt']

        def __str__(self) -> str:
            return self.title

