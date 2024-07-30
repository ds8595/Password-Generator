const includelowc=true;
const includeuppc=true;
const includeno=true;
const includesymbol=true;
const length=12;

function generatepassword(includelowc,includeuppc,includeno,includesymbol,length){
    const lowc="qwertyuiopasdfghjklzxcvbnm";
    const uppc="QWERTYUIOPASDFGHJKLZXCVBNM";
    const no="1234567890";
    const symbol="!@#$%^&*()_-+=~`{}[]|\:;'<>,./?";

    let allowed="";
    let pass="";

    allowed += includelowc ? lowc:"";
    allowed += includeuppc ? uppc:"";
    allowed += includeno ? no:"";
    allowed += includesymbol ? symbol:"";

    if(length<=0){
        return `(Password length should be atleast 1)`;
    }

    if(allowed.length===0){
        return `(Allow atleast 1 set)`;
    }

    for(let i=0;i<length;i++){
        const randomindex=Math.floor(Math.random()*allowed.length);
        pass+=allowed[randomindex];
    }

    return pass;


}

const password=generatepassword(includelowc,includeuppc,includeno,includesymbol,length);

console.log(password);
