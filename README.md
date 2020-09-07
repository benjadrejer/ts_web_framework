# ts_web_framework

Runs using a mock json-server db as backend and a parcel setup as frontend.
start db:
    json-server --watch db.json
start frontend:
    parcel index.ts

Index.ts is currently populated by sample data. It's the main entrypoint where the views & models can be used to play around.