from rest_framework import serializers

class BooksSerializer(serializers.Serializer):

    name = serializers.CharField(max_length=500,default="")
    price = serializers.IntegerField()
    pages = serializers.IntegerField()