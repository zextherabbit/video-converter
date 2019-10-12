const task = () => {
  return new Promise((resolve, reject) => {
    const b = 1;
    setTimeout(()=> 
    {console.log('Hey'); resolve()},3000);
    console.log(b);
  });
}

async function init(){
  await task();
}

init();