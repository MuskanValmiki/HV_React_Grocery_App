from rest_framework.routers import SimpleRouter
from .views import AppView 


router = SimpleRouter()
router.register('displays',AppView)


urlpatterns = router.urls 
    