from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

class CustomUserAdmin(BaseUserAdmin):
    model=CustomUser
    list_display = ["email", "name", "is_active", "is_admin"]
    list_filter = ["is_admin"]
    search_fields=["email", "name"]
    ordering=["email"]


    fieldsets=[
        (None, {"fields": ["email", "password"]}),
        ("Personal info", {"fields": ["name"]}),
        ("Permissions", {"fields": ["is_active", "is_admin", "is_superuser"]}),
    ]

    add_fieldsets=[
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "name", "password", "is_active", "is_admin", "is_superuser"],
            }
        )
    ]

admin.site.register(CustomUser, CustomUserAdmin)
