# import requests

# query = 'python'

# url = 'https://en.wikipedia.org/w/api.php'
# params = {
#     'action': 'query',
#     'format': 'json',
#     'list': 'search',
#             'utf8': 1,
#             'srsearch': query
# }
# data = requests.get(url, params=params).json()

# for i in data['query']['search']:
#     print(i['title'], ' - Word count: ', i['wordcount'])


# import wikipedia
# result = wikipedia.search("Geek", results=5)
# print(result)


# importing the module
import wikipedia

# setting language to hindi
wikipedia.set_lang("it")

# printing the summary
print(wikipedia.search("India"))

page_object = wikipedia.page("india")
print(wikipedia.page(page_object.links()))
