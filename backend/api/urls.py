from django.urls import path

from userauths import views as userauths_views

# from store import views as store_views


urlpatterns = [
    # path('', userauths_views.getRoutes),
    # Userauths API Endpoints
    path("user/token/", userauths_views.MyTokenObtainPairView.as_view()),
    path("user/register/", userauths_views.RegisterView.as_view()),
    path(
        "user/password-reset/<email>/",
        userauths_views.PasswordResetEmailVerify.as_view(),
    ),
    path(
        "user/password-change/",
        userauths_views.PasswordChangeView.as_view(),
        name="password_change",
    ),
]
