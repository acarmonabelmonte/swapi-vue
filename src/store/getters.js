const getters = {
    loadingStatus: state => state.loading.loadingStatus,
    allPeople: state => state.people.people,
    peopleDetailed: state => state.people.peopleDetails,
    allStarships: state => state.starships.starships,
    starshipDetailed: state => state.starships.starshipDetails,
    allPlanets: state => state.planets.planets,
    planetDetailed: state => state.planets.planetDetails,
}

export default getters;