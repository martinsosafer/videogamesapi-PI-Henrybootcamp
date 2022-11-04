const initialState = {
  videogames: [],
  allVideogames: [],
  allgenres: [],
  platforms: [],
  details: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case "GET_VIDEOGAMES":
      let platforms = [];
      action.payload.map((e) => (platforms = [...platforms, ...e.platforms]));
      return {
        ...state,
        videogames: [...action.payload],
        allVideogames: [...action.payload],
        platforms: Array.from(new Set(platforms)),
        page: 1,
      };

    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload,
      };

    case "GET_GENRES":
      return {
        ...state,
        allgenres: action.payload,
      };

      case "GET_DETAILS":
        return {
          ...state,
          details: action.payload
        };
        case 'CLEAR':
          return {
              ...state,
              details : action.payload
          }


    //_________________________________________FILTROS_____________________________________//

    case "FILTER_BY_GENRES":
      const allVideogames2 = state.allVideogames;
      const genresFilter =
        action.payload === "All"
          ? allVideogames2
          : allVideogames2.filter((e) => e.genres.includes(action.payload));
      return {
        ...state,
        videogames: genresFilter,
      };

    case "FILTER_CREATED":
      const allvideogames = state.allVideogames;
      const filterDb =
        action.payload === "created"
          ? allvideogames.filter((e) => e.inDb)
          : allvideogames.filter((e) => !e.inDb);
     
      return {
        ...state,
        videogames:
          action.payload === "all" ? state.allVideogames : filterDb,
      };

    case "ORDER_BY_RATING":
      const sorteArrRating =
        action.payload === "least"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sorteArrRating,
      };

      case "ORDER_BY_NAME":
        let sortedArr =
          action.payload === "asc"
            ? //aqui accede a su estado videogames y action.payload === 'asc'
              //ordena ascendente
              state.videogames.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return -1;
                }
                return 0;
              }) //-> dos puntos del else -> if ternario
            : //y sino -> action.payload === 'desc'
              //ordena descendente
              state.videogames.sort(function (a, b) { // borrarme to lowercase para hacerlo en el pi
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1;
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              });
        return {
          ...state,
          videogames: sortedArr,
        };

        case 'FILTER_M4':
          const ratingM4=state.allVideogames
          const result= ratingM4.filter(el=>el.rating>4)
          return{
            ...state,
            videogames:result
          }


      default:
        return state;
  }
}

export default rootReducer;