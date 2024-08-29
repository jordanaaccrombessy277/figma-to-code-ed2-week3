const API_KEY = 'CG-FH2WiAeUFufW8CmiYXRUwX1z'; 

export async function fetchCryptos(currency, per_page, page) {
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=false&x_cg_demo_api_key=${API_KEY}`);

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('Too many requests. Please try again later.');
            }
            throw new Error(`HTTP error in cryptos ! status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Fetch error cryptos:', error);
        throw error;
    }
}

export const fetchCrypto = async (id) => {
    
    try {
        const request = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=${API_KEY}`);

        if (!request.ok) {
            if (request.status === 429) {
                throw new Error('Too many requests. Please try again later.');
            }
            throw new Error(`HTTP error in crypto ! status: ${request.status}`);
        }

        const data = await request.json();

        return data;
    } catch (error) {
        console.error('Fetch error crypto:', error);
        throw error;
    }
}

export const fetchCategCryptos = async () =>{
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/categories/list?x_cg_demo_api_key=${API_KEY}`);

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error('Too many requests. Please try again later.');
            }
            throw new Error(`HTTP error in categ cryptos ! status: ${response.status}`);
        }

        const data = await response.json();
        const limitedData = data.slice(0, 10);
        
        return limitedData;
    } catch (error) {
        console.error('Fetch error categ cryptos:', error);
        throw error;
    }
}

export const fetchChart = async (coinId, days,interval) => {
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=${interval}&x_cg_demo_api_key=${API_KEY}`;
  
    try {
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error(`Erreur lors de la récupération des données : ${response.status}`);
        }
    
        const data = await response.json();
    
        // Regrouper les données par mois
        const monthlyPrices = data.prices.reduce((acc, [timestamp, price]) => {
          const date = new Date(timestamp);
          const month = date.getMonth();
          const year = date.getFullYear();
          const key = `${year}-${month}`;
    
          if (!acc[key]) {
            acc[key] = [];
          }
    
          acc[key].push(price);
          return acc;
        }, {});
    
        // Calculer le prix moyen par mois
        const monthlyAveragePrices = Object.entries(monthlyPrices).map(([key, prices]) => {
          const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
          const [year, month] = key.split('-');
          const date = new Date(year, month).getTime();
          return [date, averagePrice];
        });
    
        return monthlyAveragePrices;
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour le graphique :", error);
        return [];
      }
}
  
  
