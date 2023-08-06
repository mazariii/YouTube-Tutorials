from django.http import JsonResponse

def TestView(request):
    id = request.GET.get('id')

    if id=='null' or id=='':
        return JsonResponse({'message': 'No data specified'})

    if int(id)==1:
        return JsonResponse({'message': 'One'})

    if int(id)==2:
        return JsonResponse({'message': 'Two'})

    return JsonResponse({'message': 'Unavailable'})
