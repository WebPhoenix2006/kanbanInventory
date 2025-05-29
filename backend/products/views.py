from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Product

@csrf_exempt
def products_view(request):
    if request.method == 'GET':
        products = Product.objects.all()
        data = [
            {
                'id': p.id,
                'name': p.name,
                'price': p.price,
                'quantity': p.quantity,
                'unit': p.unit,
                'exp_date': p.exp_date.isoformat() if p.exp_date else None,
                'threshold': p.threshold,
                'category': p.category,
            }
            for p in products
        ]
        return JsonResponse({'products': data})

    elif request.method == 'POST':
        try:
            data = json.loads(request.body)
            product = Product.objects.create(
                name=data.get('name'),
                price=data.get('price'),
                quantity=data.get('quantity'),
                unit=data.get('unit'),
                exp_date=data.get('exp_date'),
                threshold=data.get('threshold'),
                category=data.get('category'),
            )
            return JsonResponse({'message': 'Product created', 'id': product.id})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Method not allowed'}, status=405)
