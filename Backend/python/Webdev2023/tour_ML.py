from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from bson.objectid import ObjectId
import sys, numpy as np, pandas as pd, copy

# Constant Values 
uri = "mongodb+srv://webdevadmin:TCl2UDyQpR25SwUQ@webdev2023cluster.ecy3pkj.mongodb.net/"
client = MongoClient(uri, server_api=ServerApi('1')) 

class ConnectDB:
    def __init__(self, client, dbname):
        self.client = client
        self.dbname = self.client.get_database(dbname)
        self.user = self.dbname['user']
        self.location = self.dbname['location']
        self.street = self.dbname['street']
        self.transport = self.dbname['transport']
        self.tour = self.dbname['tour']
        
DB = ConnectDB(client, 'test')
# user Parameters
user_id = sys.argv[1]
start_location_id = sys.argv[2]
budget = float(sys.argv[3])
time_vault = float(sys.argv[4])
        
class Tour:
    transport_convenience_eval = {
        'bike': 1,
        'bus': 2,
        'motor': 3,
        'taxi': 4 
    }
    transport_environment_eval = {
        'taxi': 1,
        'bus': 2,
        'motor': 3,
        'bike': 4
    }
    def __init__(self):
        self.location_ids = np.array([])
        self.street_ids = np.array([])
        self.transport_ids = np.array([])
        self.time_seconds = 0
        self.price = 0
    def addLocation(self, id):
        self.location_ids = np.append(self.location_ids, id)
    def addStreet(self, id):
        self.street_ids = np.append(self.street_ids, id)
    def addTransport(self, id):
        self.transport_ids = np.append(self.transport_ids, id)
    def addTime(self, seconds):
        self.time_seconds += seconds
    def addPrice(self, price):
        self.price += price
    def getPrice(self):
        return self.price
    def getTime(self):
        return self.time_seconds
    def getLocation(self):
        return self.location_ids
    def getStreet(self):
        return self.street_ids
    def getTransport(self):
        return self.transport_ids
    def getLocationQuantity(self):
        return len(self.location_ids)
    def getTransportTypes(self):
        transport_types = []
        for transport_id in self.transport_ids:
            transport = DB.transport.find_one({ '_id': ObjectId(transport_id) })
            transport_types.extend([transport['type']])
        return transport_types
    def getLocationTypes(self):
        location_types = []
        for location_id in self.location_ids:
            location = DB.location.find_one({ '_id': ObjectId(location_id) })
            location_types.extend(location['type'])
        return location_types
    def getTransportConvenienceEval(self):
        convenience_eval = 0
        transport_types = self.getTransportTypes()
        for type in transport_types:
            convenience_eval += self.transport_convenience_eval[type]
        return convenience_eval
    def getTransportEnvironmentEval(self):
        environment_eval = 0
        transport_types = self.getTransportTypes()
        for type in transport_types:
            environment_eval += self.transport_environment_eval[type]
        return environment_eval 
    def getDiversityEval(self):
        transport_types = np.array(self.getLocationTypes())
        return np.unique(transport_types).size
        
class Tours:
    def __init__(self):
        self.tours = []
    def addTour(self, tour: Tour):
        self.tours.append(tour)
    def getPriceList(self):
        return np.array([tour.getPrice() for tour in self.tours])
    def getTimeList(self):
        return np.array([tour.getTime() for tour in self.tours])
    def getQuantityList(self):
        return np.array([tour.getLocationQuantity() for tour in self.tours])
    def getTransportConvenienceEvalList(self):
        return np.array([tour.getTransportConvenienceEval() for tour in self.tours])
    def getTransportEnvironmentEvalList(self):
        return np.array([tour.getTransportEnvironmentEval() for tour in self.tours])
    def getDiversityEvalList(self):
        return np.array([tour.getDiversityEval() for tour in self.tours])
    def getTourNumber(self):
        return len(self.tours)
    def getTours(self):
        return self.tours
    
        
def findNextTour(current_tour: Tour, last_location_id, current_street_id, current_transport_id, budget, time_remaining):
    if (budget == 0 or time_remaining == 0): return current_tour
    # get current street
    current_street = DB.street.find_one({ '_id': ObjectId(current_street_id) })
    # get current location
    current_location_id = current_street['end_location_id'] if last_location_id != current_street['end_location_id'] else current_street['start_location_id']
    current_location = DB.location.find_one({ '_id': ObjectId(current_location_id) })
    # get current transport
    current_transport = DB.transport.find_one({ '_id': ObjectId(current_transport_id) })
    
    # total price and time for current location and street
    total_price = current_location['price'] + current_transport['price']
    total_time_seconds = current_location['time_seconds'] + current_transport['time_seconds']
   
    # if out of budget or time remaining
    if(total_price > budget or total_time_seconds > time_remaining): return current_tour
    # if location is visited in history
    # if(current_location_id in history_location_ids): return current_tour
    
    # update budget and time_remaining
    updated_budget = budget - total_price
    updated_time_remaining = time_remaining - total_time_seconds
    
    # update tour
    updated_tour = copy.deepcopy(current_tour)
    updated_tour.addLocation(str(current_location_id))
    updated_tour.addStreet(str(current_street_id))
    updated_tour.addTransport(str(current_transport_id))
    updated_tour.addPrice(total_price)
    updated_tour.addTime(total_time_seconds)
    
    # find next locations with multiple streets and multiple transports
    for street_id in current_location['street_ids']:
        if(street_id != current_street_id): 
            # get this street
            next_street = DB.street.find_one({ '_id': ObjectId(street_id) })
            for transport_id in next_street['transport_ids']:
                return findNextTour(updated_tour, current_location_id, street_id, transport_id, updated_budget, updated_time_remaining)
    return current_tour

def findAvailabelTours(start_location_id, budget, time_vault):  
    tour_cases = Tours()
    # get start location
    start_location = DB.location.find_one({ '_id': ObjectId(start_location_id) })
    # Check if budget and time_remaining meet the minimum of start location
    if (budget < float(start_location['price']) or time_vault < float(start_location['time_seconds'])): return tour_cases
    
    # update budget and time vault
    updated_budget = budget - start_location['price']
    updated_time_vault = time_vault - start_location['time_seconds']
    
    start_tour = Tour()
    start_tour.addLocation(start_location_id)
    start_tour.addPrice(start_location['price'])
    start_tour.addTime(start_location['time_seconds'])

    for street_id in start_location['street_ids']:
        next_street = DB.street.find_one({ '_id': ObjectId(street_id) })
        for transport_id in next_street['transport_ids']:
            new_tour = findNextTour(start_tour, start_location_id, street_id, transport_id, updated_budget, updated_time_vault)
            tour_cases.addTour(new_tour)
    
    return tour_cases
            
class EvaluationMatrix:
    price_weight = 0.05
    time_weight = 0.05
    transport_convenience_weight = 0.05
    transport_environment_weight = 0.05
    diversity_weight = 0.2
    quantity_weight = 0.6
    def __init__(self, tours: Tours):
        self.tours = tours
        self.price_list = self.tours.getPriceList()
        self.time_list = self.tours.getTimeList()
        self.quantity_list = self.tours.getQuantityList()
        self.transport_convenience_eval_list = self.tours.getTransportConvenienceEvalList()
        self.transport_environment_eval_list = self.tours.getTransportEnvironmentEvalList()
        self.diversity_eval_list = self.tours.getDiversityEvalList()
        self.price_normalize = self.getPirceNormalize()
        self.time_normalize = self.getTimeNormalize()
        self.quantity_normalize = self.getQuantityNormalize()
        self.transport_convenience_normalize = self.getTransportConvenienceNormalize()
        self.transport_environment_normalize = self.getTransportEnvironmentNormalize()
        self.diversity_normalize = self.getDiversityNormalize()
    def getPirceNormalize(self):
        price_norm_fractor = np.linalg.norm(self.price_list)
        return price_norm_fractor
    def getTimeNormalize(self):
        time_norm_fractor = np.linalg.norm(self.time_list)
        return time_norm_fractor
    def getQuantityNormalize(self):
        quantity_norm_fractor = np.linalg.norm(self.quantity_list)
        return quantity_norm_fractor
    def getTransportConvenienceNormalize(self):
        convenience_norm_fractor = np.linalg.norm(self.transport_convenience_eval_list)
        return convenience_norm_fractor
    def getTransportEnvironmentNormalize(self):
        environment_norm_fractor = np.linalg.norm(self.transport_environment_eval_list)
        return environment_norm_fractor
    def getDiversityNormalize(self):
        diversity_norm_fractor = np.linalg.norm(self.diversity_eval_list)
        return diversity_norm_fractor
    def eval(self):
        max_eval = 0
        max_index = 0
        for index, (price, time, quantity, convenience, environment, diversity) in enumerate(zip(self.price_list, self.time_list, self.quantity_list, self.transport_convenience_eval_list, self.transport_environment_eval_list, self.diversity_eval_list)):
            cur_eval = (1 - price / self.price_normalize) * self.price_weight + (1 - time / self.time_normalize) * self.time_weight + (quantity / self.quantity_normalize) * self.quantity_weight + (convenience / self.transport_convenience_normalize) * self.transport_convenience_weight + (environment / self.transport_environment_normalize) * self.transport_environment_weight + (diversity / self.diversity_normalize) * self.diversity_weight
            if(cur_eval >= max_eval):
                max_eval = cur_eval
                max_index = index 
        return self.tours.getTours()[max_index]
    
def main():
    all_tour_cases = findAvailabelTours(start_location_id, budget, time_vault)
    evaluation_matrix = EvaluationMatrix(all_tour_cases)
    best_tour = evaluation_matrix.eval()
    new_tour = {
        "user_id": user_id,
        "price": best_tour.getPrice(),
        "time_seconds": best_tour.getTime(),
        "location_ids": list(best_tour.getLocation()),
        "street_ids": list(best_tour.getStreet()),
        "transport_ids": list(best_tour.getTransport())
    }
    inserted_tour = DB.tour.insert_one(new_tour)
    DB.user.update_one({ "_id": ObjectId(user_id) }, { "$push": { "history_tour_ids": inserted_tour.inserted_id } })
    
if __name__ == "__main__":
    main()
 