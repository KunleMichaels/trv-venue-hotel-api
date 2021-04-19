# TRV VENUE HOTEL API

Paginated API
Sort and Filter on the server
    this scales better with larger dataset 
    server-side filtering will always operate on up-to-date dataset
    user would not need to download all available data initially (this also defeats the essence of pagination)
Route based request


enpoints 

Get all hotels
    - Sort
        - price_category
        - distance_to_venue
        - number of rooms
        - rating
    - Filter
        - price_category
        - distance_to_venue
        - number of rooms
        - rating
        - ameneties
        - name

Get single hotel
    - By Hotel ID
