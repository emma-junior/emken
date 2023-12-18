
export const nearbyHospital = () => {
    const encodedSearchWord = encodeURIComponent("emergencies health");
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedSearchWord}`;
    window.open(mapsUrl);
};

