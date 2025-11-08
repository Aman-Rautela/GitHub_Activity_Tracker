const [, , username] = process.argv;
if(!username){
    console.log("HEYYY!! YOU GOTTA GIVEME A USERNAME");
    return;
}else{
    getData(username);
}
let starred = [];
let created =[];
let issued = [];
async function getData(user){
try{
    const res = await fetch(`https://api.github.com/users/${user}/events`);
    if(!res.ok){
        throw new Error(`User ${user} is not FOUND or an API error`);
    }
    const data = await res.json()
    // console.log(`user ${user}`)
    // console.log(JSON.stringify(data, null, 2));

    display(data, user);
    }catch(err){
        console.log("OOPS!! error -> ", err);
    }
}

async function display(data, user){
    repoCount = {};
    console.log(`Output of ${user}'s GitHub Activity \n`)    
    data.forEach(event => {
        if(event.type === "PushEvent"){
            const repo = event.repo.name;
            const countCommit = event.payload.commits ? event.payload.commits.length : 1;
            repoCount[repo] = (repoCount[repo] || 0) + countCommit;
        }
        if(event.type === 'IssuesEvent'){
            issued.push({
                repo: event.repo.name,
                action: (event.payload.action === 'opened' ? 'Opened' : 'Closed')
            });
        }
        if(event.type === 'WatchEvent'){
            starred.push(event.repo.name);
        }
        if(event.type === 'CreateEvent'){
            created.push({
                repo: event.repo.name,
                ref_type: event.payload?.ref_type || 'repository'
            }
    )}
    });

    console.log("---------------PUSH ACTIVITY-------------")
    for(const[repo, count] of Object.entries(repoCount)){
        console.log(`Pushed ${count} commit${count > 1 ? 's': ''} to ${repo}`);
    }

    if(issued.length > 0){
        console.log("---------------ISSUED ACTIVITY-------------");
        issued.forEach(event => {
            console.log(`${event.action} a issue to repo ${event.repo}`)
        })
    }

    if(starred.length > 0){
        console.log("---------------STARED ACTIVITY-------------");
        starred.forEach(event =>{
            console.log(`Starred repo - ${event}`);
        })
    }

    if(created.length > 0){
        console.log("---------------CREATED ACTIVITY-------------");
        created.forEach( event =>{
            console.log(`Created a new ${event.ref_type} in ${event.repo}`);
        })
    }
}