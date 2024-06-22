function openHousesDatabase() {
    return new Promise((resolve, reject) => {
        const dbName = "Houses";
        const dbVersion = 1;

        const request = indexedDB.open(dbName, dbVersion);
        let housesdb;

        request.onerror = (event) => {
            reject("Database error: " + event.target.errorCode);
        };

        request.onsuccess = (event) => {
            housesdb = event.target.result;
            resolve(housesdb);
        };

        request.onupgradeneeded = (event) => {
            housesdb = event.target.result;

            if (!housesdb.objectStoreNames.contains("HousesStore")) {
                housesdb.createObjectStore("HousesStore", { keyPath: "_id" });
            }
        };
    });
};

