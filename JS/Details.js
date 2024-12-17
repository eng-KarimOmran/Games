export default class Details{
    async fetchData(id){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`
        const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'cd76e82ff2msh969572f61bc43cfp17eddcjsn6034c8a488a6',
                    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
        try{
            const request = await fetch(url,options)
            const sender = await request.json()
            return sender
        }
        catch{
            return 'eroor'
        }
    }
}