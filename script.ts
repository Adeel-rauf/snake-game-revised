
let user = prompt('enter among them: snake, water, gun')!
let random = Math.round(Math.random()*2)
let cpu = ['snake','water', 'gun'][random]

const match=(user:string,cpu:string)=>{
    if(user==cpu){
        return 'Nobody, both bite the dust'
    }
    else if(user=='snake' && cpu=='gun'){
        return 'cpu'
    }
    else if(user=='gun' && cpu=='water'){
        return 'cpu'
    }
    else if(user=='water' && cpu=='snake'){
        return 'cpu'
    }
    else if(user=='snake' && cpu=='water'){
        return 'user'
    }
    else if(user=='gun' && cpu=='snake'){
        return 'user'
    }
    else if(user=='water' && cpu=='gun'){
        return 'user'
    }
}


 
let result:string= match(user,cpu)!
let r = document.getElementsByClassName('res')[0]
r.innerHTML = (`${result}`)
let x = document.getElementsByClassName('ann')[0];
x.innerHTML = (`user with \"${user}\" & cpu with \"${cpu}\"fought`)
// document.write(`user with ${user} & cpu with ${cpu} fought`)