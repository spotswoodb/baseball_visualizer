

export function fetchPlayer() {
    return (player_id) => {
        fetch(`http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw={active_sw}&name_part=${player_id}`)
        console.log(player_id)
        // .then(r => r.json())
        // .then(players => {
            
        
    }
}