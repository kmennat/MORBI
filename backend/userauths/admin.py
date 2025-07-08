from django.contrib import admin
from .models import User, Profile


class UserAdmin(admin.ModelAdmin):
    # search_fields = ["full_name", "username", "email", "phone"]
    list_display = ["full_name", "email", "phone"]


class ProfileAdmin(admin.ModelAdmin):
    # search_fields = ["user"]
    list_display = ["full_name", "gender", "country"]
    # list_editable = ["gender", "country"]


admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
