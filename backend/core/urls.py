from rest_framework import routers
from django.urls import path, include
from .views import ClientViewSet, ProjectViewSet, UnitViewSet, ElementViewSet, MaterialViewSet

router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'units', UnitViewSet)
router.register(r'elements', ElementViewSet)
router.register(r'materials', MaterialViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
