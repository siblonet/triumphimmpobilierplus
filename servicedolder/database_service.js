async function PostHouses(houses) {
    const housesdb = await openHousesDatabase();
    const PHTransation = housesdb.transaction(["HousesStore"], "readwrite");
    const PHStore = PHTransation.objectStore("HousesStore");

    let added = false;
    houses.map(house => {
        const adding = PHStore.add(house);

        adding.onsuccess = () => {
            added = true;
        };

        adding.onerror = (event) => {
            console.log("PostHouses", event.target.error);
        };

    });

    return added
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ adding systme as post end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */



/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function GetAllHouses() {
    const housesdb = await openHousesDatabase();
    const GHTransation = housesdb.transaction(["HousesStore"], "readonly");
    const GHStore = GHTransation.objectStore("HousesStore");

    return new Promise((resolve, reject) => {
        const houses = [];

        GHStore.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor && cursor.value.quantity > 0) {
                houses.push(cursor.value);
                cursor.continue();
            } else {
                resolve(houses.sort((a, b) => new Date(b.created) - new Date(a.created)));
            }
        };
        GHTransation.onerror = (event) => {
            reject("Transaction error: " + event.target.errorCode);
        };
    });

}



async function GetHouseByID(id) {
    return new Promise(async (resolve, reject) => {
        const housesdb = await openHousesDatabase();
        const GATransation = housesdb.transaction(["HousesStore"], "readonly");
        const GAStore = GATransation.objectStore("HousesStore");

        const requestingByID = GAStore.get(id);

        requestingByID.onsuccess = (event) => {
            const article = event.target.result;
            resolve(article);
        };

        requestingByID.onerror = (event) => {
            console.error("Error accessing object GetHouseByID store:", event.target.error);
            reject(event.target.error);
        };
    });
}

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ getting systme as get end @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ update systme as put start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function PutHouse(house) {
    return new Promise(async (resolve, reject) => {
        const housesdb = await openHousesDatabase();
        const PuHTransation = housesdb.transaction(["HousesStore"], "readwrite");
        const PuHStore = PuHTransation.objectStore("HousesStore");

        const update = PuHStore.put(house);

        update.onsuccess = () => {
            resolve(true);
        };

        update.onerror = (event) => {
            console.error("Error accessing object PutHouse store:", event.target.error);
            reject(false);
        };
    });
}


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ update systme as put ends @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ deleting systme as delete start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

async function clearHouses() {
    const articldb = await openHousesDatabase();
    const CHTransation = articldb.transaction(["HousesStore"], "readwrite");
    const CHStore = CHTransation.objectStore("HousesStore");

    const clearHouse = CHStore.clear();

    let cleared = false;
    clearHouse.onsuccess = () => {
        cleared = true;
    };

    clearHouse.onerror = (event) => {
        console.error("Error accessing object clearHouses store:", event.target.error);
    };

    return cleared
}