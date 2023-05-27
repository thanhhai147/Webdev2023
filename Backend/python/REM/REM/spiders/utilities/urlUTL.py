from urllib.parse import *

class UrlUTL():
    def getQuery(url):
        query = urlparse(url).query
        query_dic = {}
        for query_item in query.split("&"):
            parts = query_item.split("=")
            query_dic[parts[0]] = parts[1]
        return query_dic
    def getPath(url, path_list = False):
        if path_list: 
            return [item.split("-") for item in [breadcumb for breadcumb in urlparse(url).path.split("/") if breadcumb != ""]]
        return urlparse(url).path