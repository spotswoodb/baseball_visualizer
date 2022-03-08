

function fetchPlayer() {

    // e.preventDefault()
    fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body :JSON.stringify()
    })
    .then(r => r.json())
    .then(player => {
        console.log(player)
    })
}

// .bam?sport_code='mlb'&active_sw={active_sw}&name_part=${player_id}