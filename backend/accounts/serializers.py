from rest_framework import serializers
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    confirm_password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model=CustomUser
        fields=['email', 'name', 'password', 'confirm_password']
    
    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError('Password do not match')
        return data
    
    def create(self, validated_data):
        validated_data.pop("confirm_password", None)
        user=CustomUser(**validated_data)
        user.set_password('password')
        user.save()
        return user